#!/bin/bash

# Factory Contract Deployment Script
# This script builds and deploys the factory contract to Stellar/Soroban

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NETWORK="${NETWORK:-development}"  # development, staging, testnet, or production
SOURCE_ACCOUNT="${SOURCE_ACCOUNT:-me}"  # Default account from environments.toml
ADMIN_ADDRESS="${ADMIN_ADDRESS:-me}"  # Admin address (can be account name or address)
TOKEN_ADDRESS="${TOKEN_ADDRESS:-}"  # Token address (required)
FUNGIBLE_WASM_HASH="${FUNGIBLE_WASM_HASH:-}"  # Fungible WASM hash (optional, will be fetched if not provided)
CONTRACT_ALIAS="${CONTRACT_ALIAS:-factory}"  # Alias to save the contract ID (optional)

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
FACTORY_DIR="$SCRIPT_DIR"
DJ_FUNGIBLE_DIR="$PROJECT_ROOT/contracts/dj-fungible"

echo -e "${GREEN}=== Factory Contract Deployment ===${NC}"
echo "Network: $NETWORK"
echo "Source Account: $SOURCE_ACCOUNT"
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

# Map testnet to staging for compatibility (must be after function definitions)
NETWORK_ORIGINAL="$NETWORK"

# Step 1: Build the factory contract
info "Step 1: Building factory contract..."
cd "$FACTORY_DIR"
make build || error_exit "Failed to build factory contract"
success "Factory contract built successfully"

# Step 2: Get or install fungible WASM hash
if [ -z "$FUNGIBLE_WASM_HASH" ]; then
    info "Step 2: Building and installing dj-fungible contract to get WASM hash..."
    
    if [ ! -d "$DJ_FUNGIBLE_DIR" ]; then
        error_exit "dj-fungible contract directory not found at $DJ_FUNGIBLE_DIR"
    fi
    
    cd "$DJ_FUNGIBLE_DIR"
    
    # Build the fungible contract and capture output to extract hash
    info "Building dj-fungible contract..."
    if [ -f "Makefile" ]; then
        BUILD_OUTPUT=$(make build 2>&1) || error_exit "Failed to build dj-fungible contract"
    else
        BUILD_OUTPUT=$(stellar contract build 2>&1) || error_exit "Failed to build dj-fungible contract"
    fi
    
    # Try to extract hash from build output first (faster, no network call needed)
    BUILD_HASH=$(echo "$BUILD_OUTPUT" | grep -i "Wasm Hash:" | grep -oE '[a-f0-9]{64}' | head -n 1)
    
    # Find the WASM file
    WASM_FILE=$(find "$PROJECT_ROOT/target" -name "dj_fungible.wasm" -o -name "dj-fungible.wasm" | head -n 1)
    
    if [ -z "$WASM_FILE" ]; then
        error_exit "Could not find dj-fungible WASM file in target directory"
    fi
    
    # If we got the hash from build output, we can use it directly
    # Otherwise, install the WASM to get the hash from the network
    if [ -n "$BUILD_HASH" ]; then
        info "Using WASM hash from build output: $BUILD_HASH"
        FUNGIBLE_WASM_HASH="$BUILD_HASH"
        
        # Optionally install it to make it available on the network
        info "Installing dj-fungible WASM to network (optional)..."
        stellar contract install \
            --wasm "$WASM_FILE" \
            --network "$NETWORK" \
            --source-account "$SOURCE_ACCOUNT" \
            >/dev/null 2>&1 || info "Note: Install step had issues, but hash is available from build"
    else
        info "Installing dj-fungible WASM to get hash..."
        
        # Install the WASM and get the hash
        # Note: stellar contract install returns the hash directly or in the output
        INSTALL_OUTPUT=$(stellar contract install \
            --wasm "$WASM_FILE" \
            --network "$NETWORK" \
            --source-account "$SOURCE_ACCOUNT" \
            2>&1)
        
        # Extract hash from output - it could be in various formats
        # Try to find a 64-character hex string (32 bytes)
        FUNGIBLE_WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -oE '[a-f0-9]{64}' | head -n 1)
        
        # If not found, try looking for "hash:" pattern
        if [ -z "$FUNGIBLE_WASM_HASH" ]; then
            FUNGIBLE_WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -i "hash" | grep -oE '[a-f0-9]{64}' | head -n 1)
        fi
        
        # If still not found, the hash might be on a line by itself
        if [ -z "$FUNGIBLE_WASM_HASH" ]; then
            FUNGIBLE_WASM_HASH=$(echo "$INSTALL_OUTPUT" | sed -n 's/^[[:space:]]*\([a-f0-9]\{64\}\)[[:space:]]*$/\1/p' | head -n 1)
        fi
    fi
    
    if [ -z "$FUNGIBLE_WASM_HASH" ]; then
        echo -e "${YELLOW}Install output:${NC}"
        echo "$INSTALL_OUTPUT"
        error_exit "Could not extract WASM hash from install output. Please set FUNGIBLE_WASM_HASH manually."
    fi
    
    success "Fungible WASM hash: $FUNGIBLE_WASM_HASH"
else
    info "Step 2: Using provided fungible WASM hash: $FUNGIBLE_WASM_HASH"
fi

# Step 3: Check for token address
if [ -z "$TOKEN_ADDRESS" ]; then
    error_exit "TOKEN_ADDRESS is required. Please set it as an environment variable or edit this script."
fi

info "Using token address: $TOKEN_ADDRESS"

# Step 4: Deploy the factory contract
info "Step 3: Deploying factory contract..."
cd "$FACTORY_DIR"

# Find the factory WASM file - prioritize optimized, then release build
# First try the optimized WASM (if available)
FACTORY_WASM="$PROJECT_ROOT/target/wasm32v1-none/release/factory.optimized.wasm"

if [ ! -f "$FACTORY_WASM" ]; then
    # Try the standard release location
    FACTORY_WASM="$PROJECT_ROOT/target/wasm32v1-none/release/factory.wasm"
fi

if [ ! -f "$FACTORY_WASM" ]; then
    # Fallback to searching for optimized WASM
    FACTORY_WASM=$(find "$PROJECT_ROOT/target" -path "*/wasm32v1-none/release/factory.optimized.wasm" -type f | head -n 1)
fi

if [ -z "$FACTORY_WASM" ] || [ ! -f "$FACTORY_WASM" ]; then
    # Fallback to searching for standard WASM
    FACTORY_WASM=$(find "$PROJECT_ROOT/target" -path "*/wasm32v1-none/release/factory.wasm" -type f | head -n 1)
fi

if [ -z "$FACTORY_WASM" ] || [ ! -f "$FACTORY_WASM" ]; then
    # Last resort: find any factory.wasm
    FACTORY_WASM=$(find "$PROJECT_ROOT/target" -name "factory*.wasm" -type f | grep -v "/deps/" | head -n 1)
fi

if [ -z "$FACTORY_WASM" ] || [ ! -f "$FACTORY_WASM" ]; then
    error_exit "Could not find factory WASM file in target directory. Please build the contract first: make build"
fi

info "Using WASM file: $FACTORY_WASM"

# Validate required arguments before deployment
if [ -z "$ADMIN_ADDRESS" ]; then
    error_exit "ADMIN_ADDRESS is required but not set"
fi

if [ -z "$FUNGIBLE_WASM_HASH" ]; then
    error_exit "FUNGIBLE_WASM_HASH is required but not set (should have been set in Step 2)"
fi

# Pre-deployment checks
info "Pre-deployment checks:"
echo "  - Network: $NETWORK"
echo "  - Source account: $SOURCE_ACCOUNT"
echo "  - Admin address: $ADMIN_ADDRESS"
echo ""
echo -e "${YELLOW}Note: Make sure your source account has sufficient XLM to pay transaction fees.${NC}"
echo ""

info "Deploying with constructor arguments:"
info "  --admin $ADMIN_ADDRESS"
info "  --token $TOKEN_ADDRESS"
info "  --fungible_wasm $FUNGIBLE_WASM_HASH"
echo ""

# Build deploy command array for proper argument handling
DEPLOY_ARGS=(
    "contract" "deploy"
    "--wasm" "$FACTORY_WASM"
    "--network" "$NETWORK"
    "--source-account" "$SOURCE_ACCOUNT"
)

# Add alias if provided
if [ -n "$CONTRACT_ALIAS" ]; then
    DEPLOY_ARGS+=("--alias" "$CONTRACT_ALIAS")
fi

# Add constructor arguments separator and arguments
# IMPORTANT: The '--' separator is required to separate CLI flags from constructor arguments
DEPLOY_ARGS+=("--")
DEPLOY_ARGS+=("--admin" "$ADMIN_ADDRESS")
DEPLOY_ARGS+=("--token" "$TOKEN_ADDRESS")
DEPLOY_ARGS+=("--fungible_wasm" "$FUNGIBLE_WASM_HASH")

# Deploy the contract
info "Executing deployment command:"
echo "  stellar contract deploy \\"
echo "    --wasm $FACTORY_WASM \\"
echo "    --network $NETWORK \\"
echo "    --source-account $SOURCE_ACCOUNT \\"
if [ -n "$CONTRACT_ALIAS" ]; then
    echo "    --alias $CONTRACT_ALIAS \\"
fi
echo "    -- \\"
echo "    --admin $ADMIN_ADDRESS \\"
echo "    --token $TOKEN_ADDRESS \\"
echo "    --fungible_wasm $FUNGIBLE_WASM_HASH"
echo ""

# Create a temporary file to capture output while also showing it in real-time
DEPLOY_OUTPUT_FILE=$(mktemp)
trap "rm -f $DEPLOY_OUTPUT_FILE" EXIT

info "Starting deployment (this may take a moment)..."
echo ""

# Run the command, showing output in real-time and capturing it
if ! stellar "${DEPLOY_ARGS[@]}" 2>&1 | tee "$DEPLOY_OUTPUT_FILE"; then
    DEPLOY_EXIT_CODE=${PIPESTATUS[0]}
    DEPLOY_OUTPUT=$(cat "$DEPLOY_OUTPUT_FILE")
    echo ""
    echo -e "${RED}Deployment failed with exit code $DEPLOY_EXIT_CODE${NC}"
    echo ""
    echo "Full output:"
    echo "$DEPLOY_OUTPUT"
    error_exit "Contract deployment failed"
fi

DEPLOY_OUTPUT=$(cat "$DEPLOY_OUTPUT_FILE")
DEPLOY_EXIT_CODE=0
rm -f "$DEPLOY_OUTPUT_FILE"
trap - EXIT

echo ""
success "Deployment command completed successfully"

# Extract contract ID from output
# Contract IDs are 56 characters starting with 'C'
CONTRACT_ID=$(echo "$DEPLOY_OUTPUT" | grep -oE 'C[A-Z0-9]{55}' | head -n 1)

# If alias was used, try to get the contract ID from the alias
if [ -z "$CONTRACT_ID" ] && [ -n "$CONTRACT_ALIAS" ]; then
    # Try to read from environments.toml or .stellar directory
    if [ -f "$PROJECT_ROOT/.stellar/identity/$CONTRACT_ALIAS.json" ]; then
        CONTRACT_ID=$(grep -o '"contract_id":"[^"]*"' "$PROJECT_ROOT/.stellar/identity/$CONTRACT_ALIAS.json" | cut -d'"' -f4)
    fi
fi

# If still not found, try parsing the output for "Contract ID:" pattern
if [ -z "$CONTRACT_ID" ]; then
    CONTRACT_ID=$(echo "$DEPLOY_OUTPUT" | grep -i "contract id" | grep -oE 'C[A-Z0-9]{55}' | head -n 1)
fi

# If still not found, try any line that looks like a contract ID
if [ -z "$CONTRACT_ID" ]; then
    CONTRACT_ID=$(echo "$DEPLOY_OUTPUT" | grep -oE '^C[A-Z0-9]{55}$' | head -n 1)
fi

if [ -z "$CONTRACT_ID" ]; then
    echo -e "${YELLOW}Warning: Could not extract contract ID from deployment output.${NC}"
    echo "Deployment output:"
    echo "$DEPLOY_OUTPUT"
    echo ""
    echo "If the deployment was successful, you can find the contract ID in the output above."
    if [ -n "$CONTRACT_ALIAS" ]; then
        echo "The contract was saved with alias '$CONTRACT_ALIAS'."
        echo "You can check it with: stellar contract inspect --alias $CONTRACT_ALIAS"
    fi
else
    success "Factory contract deployed successfully!"
    echo ""
    echo -e "${GREEN}Contract ID: $CONTRACT_ID${NC}"
    if [ -n "$CONTRACT_ALIAS" ]; then
        echo -e "${GREEN}Alias: $CONTRACT_ALIAS${NC}"
    fi
    echo ""
    echo "You can now use this contract ID to interact with the factory contract."
    echo ""
    if [ -n "$CONTRACT_ALIAS" ]; then
        echo "The contract ID has been saved with alias '$CONTRACT_ALIAS'."
        echo "You can use it with: --contract-id $CONTRACT_ALIAS"
    else
        echo "To save this contract ID, you can create an alias:"
        echo "  stellar registry create-alias factory --contract-id $CONTRACT_ID"
    fi
fi

# Print summary
echo ""
echo -e "${GREEN}=== Deployment Summary ===${NC}"
echo "Network: $NETWORK"
echo "Contract ID: ${CONTRACT_ID:-Not found}"
echo "Admin: $ADMIN_ADDRESS"
echo "Token: $TOKEN_ADDRESS"
echo "Fungible WASM Hash: $FUNGIBLE_WASM_HASH"
echo ""
