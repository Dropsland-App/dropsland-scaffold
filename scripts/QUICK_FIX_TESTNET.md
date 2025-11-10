# Quick Fix: "No sign with key provided" Error on Testnet

## Problem

You're getting this error when trying to install WASM on testnet:

```
❌ error: No sign with key provided
```

## Solution

You have **3 options** to fix this:

### Option 1: Use Secret Key with Script (Fastest)

```bash
SECRET_KEY=<your-secret-key> NETWORK=testnet ./scripts/install-fungible-wasm.sh
```

Replace `<your-secret-key>` with your actual secret key (starts with `S`).

### Option 2: Use Secret Key Directly (Manual)

```bash
cd contracts/dj-fungible
make build

stellar contract install \
  --wasm ../../target/wasm32v1-none/release/dj_fungible.wasm \
  --network testnet \
  --secret-key <your-secret-key>
```

### Option 3: Configure Account in environments.toml (Best for Repeated Use)

1. Edit `environments.toml`:

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

## Note about Command Names

- **`stellar contract install`** - Modern command (recommended)
- **`stellar contract upload`** - Older command name (may still work)

Both commands do the same thing. If `upload` doesn't work, try `install`.

## Getting Your Secret Key

If you don't have your secret key:

1. Check if it's stored in `.stellar/identity/` directory
2. Check your wallet/keystore
3. If you lost it, you'll need to create a new account and fund it

## Getting Testnet XLM

To fund your testnet account, visit:

- https://laboratory.stellar.org/#account-creator?network=test

## Security Warning

⚠️ **Never commit secret keys to git!** Use environment variables or `.gitignore` the secrets.
