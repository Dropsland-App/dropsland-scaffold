# Testnet Setup Guide

## Installing WASM on Testnet

When installing the fungible token WASM on testnet, you need to configure your account for signing transactions.

### Option 1: Use Secret Key Directly (Quick but Less Secure)

```bash
SECRET_KEY=<your-secret-key> ./scripts/install-fungible-wasm.sh --network testnet
```

⚠️ **Security Warning**: Don't expose your secret key in command history or logs. Consider using environment variables or a secrets manager.

### Option 2: Configure Account in environments.toml (Recommended)

1. Edit `environments.toml` and add your testnet account:

```toml
[[testnet.accounts]]
name = "testnet-user"
secret-key = "<your-secret-key>"
default = true
```

2. Then run the install script:

```bash
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

### Option 3: Fund and Configure Account

1. Fund your account using Stellar CLI:

```bash
stellar keys fund <your-account-address> --network testnet
```

2. Add the account to `environments.toml`:

```toml
[[testnet.accounts]]
name = "testnet-user"
default = true
```

3. The keys will be saved to `.stellar/identity/testnet-user.json`

4. Run the install script:

```bash
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

### Option 4: Manual Installation

If the script doesn't work, you can install manually:

```bash
# Build the contract
cd contracts/dj-fungible
make build

# Install with secret key
stellar contract install \
  --wasm ../../target/wasm32v1-none/release/dj_fungible.wasm \
  --network testnet \
  --secret-key <your-secret-key>
```

### Troubleshooting

#### Error: "No sign with key provided"

This means your account is not configured for signing. Solutions:

1. **Add account to environments.toml** (see Option 2 above)
2. **Use SECRET_KEY environment variable** (see Option 1 above)
3. **Fund the account first** (see Option 3 above)

#### Error: "Account not found"

Make sure:

- The account address is correct
- The account exists on testnet
- The account has been funded (testnet accounts need XLM for fees)

#### Getting Testnet XLM

For testnet, you can get free XLM from:

- Stellar Laboratory: https://laboratory.stellar.org/#account-creator?network=test
- Friendbot (if available): https://friendbot.stellar.org/

### Verifying Installation

After installation, verify the WASM hash:

```bash
stellar contract invoke \
  --id CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN \
  --network testnet \
  -- \
  get_fungible_wasm
```

The returned hash should match the hash from the install command output.

### Security Best Practices

1. **Never commit secret keys** to version control
2. **Use environment variables** for secret keys in production
3. **Use account names** from environments.toml instead of raw addresses
4. **Rotate keys** regularly for production accounts
5. **Use separate accounts** for development and production
