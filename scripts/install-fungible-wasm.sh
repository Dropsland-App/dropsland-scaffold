#!/bin/bash

# Script to install the fungible token WASM on the network
# This is required before creating tokens through the factory contract

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NETWORK="${NETWORK:-development}"
SOURCE_ACCOUNT="${SOURCE_ACCOUNT:-me}"
SECRET_KEY="${SECRET_KEY:-}"  # Optional: secret key for signing (use with caution)
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DJ_FUNGIBLE_DIR="$PROJECT_ROOT/contracts/dj-fungible"

echo -e "${GREEN}=== Installing Fungible Token WASM ===${NC}"
echo "Network: $NETWORK"
echo "Source Account: $SOURCE_ACCOUNT"
if [ -n "$SECRET_KEY" ]; then
    echo "Using secret key: **** (hidden)"
fi
echo ""

# Function to print error and exit
error_exit() {
    echo -e "${RED}Error: $1${NC}" >&2
    exit 1
}

# Function to print info
info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Function to print success
success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Step 1: Build the fungible contract
info "Step 1: Building dj-fungible contract..."
cd "$DJ_FUNGIBLE_DIR"

if [ ! -d "$DJ_FUNGIBLE_DIR" ]; then
    error_exit "dj-fungible contract directory not found at $DJ_FUNGIBLE_DIR"
fi

# Build the contract
if [ -f "Makefile" ]; then
    info "Building with Makefile..."
    make build || error_exit "Failed to build dj-fungible contract"
else
    info "Building with stellar contract build..."
    stellar contract build || error_exit "Failed to build dj-fungible contract"
fi

success "Contract built successfully"

# Step 2: Find the WASM file
info "Step 2: Locating WASM file..."
WASM_FILE=$(find "$PROJECT_ROOT/target" -name "dj_fungible.wasm" -o -name "dj-fungible.wasm" | head -n 1)

if [ -z "$WASM_FILE" ]; then
    error_exit "Could not find dj-fungible WASM file in target directory. Please build the contract first."
fi

info "Found WASM file: $WASM_FILE"

# Step 3: Install the WASM
info "Step 3: Installing WASM on network..."
echo ""

# Check if source account is configured for the network
if [[ "$NETWORK" != "development" ]]; then
    info "Checking account configuration for $NETWORK network..."
    
    # Check if account exists in .stellar/identity
    IDENTITY_DIR="$PROJECT_ROOT/.stellar/identity"
    if [ -d "$IDENTITY_DIR" ]; then
        # Try to find the account
        ACCOUNT_FILE=$(find "$IDENTITY_DIR" -name "${SOURCE_ACCOUNT}.json" -o -name "${SOURCE_ACCOUNT}.toml" 2>/dev/null | head -n 1)
        if [ -z "$ACCOUNT_FILE" ]; then
            echo -e "${YELLOW}Warning: Account '$SOURCE_ACCOUNT' not found in .stellar/identity/${NC}"
            echo ""
            echo "For $NETWORK network, you need to configure your account first:"
            echo "  1. Add the account to environments.toml under [${NETWORK}.accounts]"
            echo "  2. Or use 'stellar keys fund' to fund and configure the account"
            echo "  3. Or provide the secret key using --secret-key flag"
            echo ""
            echo "Alternatively, if you have a secret key, you can use:"
            echo "  SECRET_KEY=<your-secret-key> ./scripts/install-fungible-wasm.sh --network $NETWORK"
            echo ""
            if [ -t 0 ]; then
                # Only ask for input if running interactively
                read -p "Do you want to continue with the current account? (y/n) " -n 1 -r
                echo ""
                if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                    error_exit "Installation cancelled by user"
                fi
            else
                echo -e "${YELLOW}Non-interactive mode: Attempting to continue...${NC}"
                echo "If this fails, configure your account first or provide SECRET_KEY environment variable."
            fi
        else
            info "Found account configuration: $ACCOUNT_FILE"
        fi
    fi
fi

# Build the install command
INSTALL_CMD="stellar contract install --wasm $WASM_FILE --network $NETWORK"

if [ -n "$SECRET_KEY" ]; then
    # Use secret key if provided
    INSTALL_CMD="$INSTALL_CMD --secret-key $SECRET_KEY"
    echo "Executing: stellar contract install --wasm $WASM_FILE --network $NETWORK --secret-key ****"
else
    # Use source account
    INSTALL_CMD="$INSTALL_CMD --source-account $SOURCE_ACCOUNT"
    echo "Executing: stellar contract install --wasm $WASM_FILE --network $NETWORK --source-account $SOURCE_ACCOUNT"
fi
echo ""

INSTALL_OUTPUT=$(eval "$INSTALL_CMD" 2>&1)

INSTALL_EXIT_CODE=$?

if [ $INSTALL_EXIT_CODE -ne 0 ]; then
    echo -e "${RED}Installation failed with exit code $INSTALL_EXIT_CODE${NC}"
    echo ""
    echo "Output:"
    echo "$INSTALL_OUTPUT"
    echo ""
    
    # Check for common errors
    if echo "$INSTALL_OUTPUT" | grep -qi "no sign with key provided\|signing key\|secret key"; then
        echo -e "${YELLOW}Troubleshooting: Signing key issue${NC}"
        echo ""
        echo "The account '$SOURCE_ACCOUNT' is not properly configured for signing transactions."
        echo ""
        echo "Solutions:"
        echo ""
        echo "1. For development network:"
        echo "   - Make sure 'me' account is configured in environments.toml"
        echo "   - Run 'stellar keys fund me --network development' to fund the account"
        echo ""
        echo "2. For testnet/mainnet:"
        echo "   - Add your account to environments.toml:"
        echo "     [[${NETWORK}.accounts]]"
        echo "     name = \"$SOURCE_ACCOUNT\""
        echo "     secret-key = \"<your-secret-key>\""
        echo ""
        echo "   - Or use secret key directly with this script:"
        echo "     SECRET_KEY=<your-secret-key> ./scripts/install-fungible-wasm.sh --network $NETWORK"
        echo ""
        echo "   - Or fund the account first:"
        echo "     stellar keys fund $SOURCE_ACCOUNT --network $NETWORK"
        echo ""
        echo "   - Or add account to environments.toml:"
        echo "     [[${NETWORK}.accounts]]"
        echo "     name = \"your-account-name\""
        echo "     secret-key = \"<your-secret-key>\""
        echo "     default = true"
        echo ""
        echo "     Then use: SOURCE_ACCOUNT=your-account-name ./scripts/install-fungible-wasm.sh --network $NETWORK"
        echo ""
    fi
    
    error_exit "Failed to install WASM"
fi

# Extract hash from output
WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -oE '[a-f0-9]{64}' | head -n 1)

if [ -z "$WASM_HASH" ]; then
    # Try alternative patterns
    WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -i "hash" | grep -oE '[a-f0-9]{64}' | head -n 1)
fi

if [ -z "$WASM_HASH" ]; then
    echo -e "${YELLOW}Warning: Could not extract WASM hash from output${NC}"
    echo "Install output:"
    echo "$INSTALL_OUTPUT"
    echo ""
    echo "Installation may have succeeded. Please check the output above for the hash."
else
    success "WASM installed successfully!"
    echo ""
    echo -e "${GREEN}WASM Hash: $WASM_HASH${NC}"
    echo ""
    echo "You can now create tokens using the factory contract."
    echo ""
    echo "To verify the hash matches the factory contract, run:"
    echo "  stellar contract invoke \\"
    echo "    --id CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN \\"
    echo "    --network $NETWORK \\"
    echo "    -- \\"
    echo "    get_fungible_wasm"
fi

echo ""
echo -e "${GREEN}=== Installation Complete ===${NC}"
