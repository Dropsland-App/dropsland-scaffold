# Scripts

## install-fungible-wasm.sh

This script installs the dj-fungible token WASM on the Stellar network. This is required before creating tokens through the factory contract.

### Usage

```bash
# Using default settings (development network, "me" account)
./scripts/install-fungible-wasm.sh

# With custom network and account
NETWORK=development SOURCE_ACCOUNT=me ./scripts/install-fungible-wasm.sh

# For testnet with secret key (quick method)
SECRET_KEY=<your-secret-key> NETWORK=testnet ./scripts/install-fungible-wasm.sh

# For testnet with configured account
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

### What it does

1. Builds the dj-fungible contract
2. Locates the compiled WASM file
3. Installs the WASM on the specified network
4. Displays the WASM hash for verification

### Prerequisites

- Stellar CLI installed and configured
- An account with sufficient funds for the installation transaction
- The dj-fungible contract source code in `contracts/dj-fungible/`

### Troubleshooting

#### Error: "No sign with key provided"

This error occurs when your account is not configured for signing transactions on testnet/mainnet.

**Quick Fix:**

```bash
SECRET_KEY=<your-secret-key> NETWORK=testnet ./scripts/install-fungible-wasm.sh
```

**Better Solution:**

1. Add your account to `environments.toml`:

   ```toml
   [[testnet.accounts]]
   name = "testnet-user"
   secret-key = "<your-secret-key>"
   default = true
   ```

2. Run the script:
   ```bash
   NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
   ```

See `QUICK_FIX_TESTNET.md` for more details.

#### Other Issues

If the installation fails:

1. Check that your account has sufficient funds
2. Verify the network name is correct
3. Ensure the source account is properly configured in `environments.toml`
4. Check that the contract builds successfully
5. For testnet, make sure you have testnet XLM (get it from https://laboratory.stellar.org/#account-creator?network=test)

### Verifying Installation

After installation, verify the WASM hash matches what's stored in the factory contract:

```bash
stellar contract invoke \
  --id CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN \
  --network development \
  -- \
  get_fungible_wasm
```

The returned hash should match the hash displayed by the install script.

## Important Note: Constructor Signature Mismatch

**⚠️ WARNING:** There is currently a mismatch between what the factory contract expects and what the dj-fungible contract provides:

- **Factory expects:** `(owner: Address, decimals: u32, name: String, symbol: String)`
- **dj-fungible provides:** `(admin: Address, manager: Address, initial_supply: i128)`

This means that even after installing the WASM, token creation will fail due to the constructor signature mismatch. The dj-fungible contract needs to be updated to match the factory's expected signature, or the factory needs to be updated to match the dj-fungible contract's signature.
