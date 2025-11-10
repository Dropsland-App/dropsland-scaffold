-----

# Dropsland

[](https://react.dev/)
[](https://vitejs.dev/)
[](https://soroban.stellar.org/)
[](https://supabase.com/)
[](https://www.typescriptlang.org/)
[](https://www.rust-lang.org/)

Dropsland is a full-stack decentralized application (dApp) built on the Stellar network. It provides a platform for artists (DJs) to create their own fungible tokens and NFT-based rewards, and for fans to buy, collect, and interact with them.

This project is built using **Stellar Scaffold**, which provides the core toolkit for connecting a Vite/React frontend with Soroban smart contracts. It also integrates a **Supabase** backend for orchestration, database storage, and secret management.

---

--

## 🚀 Core Features

- **Artist Token Creation:** A step-by-step wizard for artists to launch their own Stellar-based (SAC) fungible token.
- **NFT Collection Factory:** Artists can deploy their own `dj-nft` (non-fungible token) contracts to create rewards.
- **Reward Management:** A dashboard for artists to link their NFT collections to real-world or digital perks.
- **Token Marketplace:** Fans can buy artist tokens directly using a 1:1 XLM DEX offer.
- **NFT Claiming:** Fans can claim NFT rewards from artists they support.
- **Contract Debugger:** An in-app page to directly interact with all deployed Soroban smart contracts.

---

## 🏗️ Architecture Overview

This project's architecture consists of three main parts:

1.  **React Frontend (Vite):** The main web application in `src/`. It uses React 19, TypeScript, and TanStack Query for data fetching.
2.  **Soroban Smart Contracts (Rust):** Located in `contracts/`, this includes `dj-fungible`, `dj-nft`, and a `factory` contract that deploys the other two.
3.  **Supabase Backend (Deno):** Located in `supabase/`, this provides backend logic via Edge Functions (e.g., `prepare-token`, `emission-xdr`) and a PostgreSQL database for off-chain data.

### Role of Stellar Scaffold

**Stellar Scaffold** is the glue that connects the **Smart Contracts (2)** and the **React Frontend (1)**.

- **Local Network:** Automatically starts a local Stellar network (like `stellar/quickstart`) in Docker when you run `npm run dev`.
- **Auto-generated Clients:** Compiles the Rust contracts and generates type-safe TypeScript clients, which are placed in the `packages/` directory. These clients are used in the frontend to interact with the contracts.
- **Hot-Reload Workflow:** The `npm run dev` command starts a watcher that automatically recompiles your contracts and rebuilds the clients whenever you save a change in a Rust file.
- **Environment Management:** It uses `environments.toml` to manage contract deployments and aliases for different networks (local, testnet).
- **Debugging UI:** It provides the entire `/debug` page, which automatically populates with all contracts defined in `environments.toml`.

---

## 🏁 Getting Started (Local Development)

Follow these steps to get your local development environment up and running.

### Prerequisites

- **Rust** & **Cargo**
- **Rust Target:** `wasm32v1-none`
- **Node.js** (v18+ recommended)
- **Stellar CLI**
- **Stellar Scaffold CLI Plugin**
- **Supabase CLI**
- **Docker** (must be running for the scaffold to start the local network)

### 1\. Clone & Install

First, clone the repository and install all Node.js dependencies:

```bash
git clone https://github.com/your-repo/dropsland.git
cd dropsland
npm install
```

### 2\. Set Up Environment Variables

This project uses two sets of environment variables: one for the frontend and one for the backend.

**Frontend (`.env`):**

Copy the example file. The default values are already set for the local scaffold network.

```bash
cp .env.example .env
```

**Backend (`supabase/.env`):**

The Supabase functions require their own environment variables.

```bash
cp supabase/.env.example supabase/.env
```

You will need to fill this file in **Step 3** and **Step 4**.

### 3\. Run Supabase Backend

In a new terminal, start the Supabase local environment. This will spin up PostgreSQL, Edge Functions, and Supabase Studio.

```bash
supabase start
```

**Important:** After it starts, copy the **`API URL`**, **`anon key`**, and **`service_role key`** from the output and paste them into your `supabase/.env` file.

### 4\. Run the App & Configure Backend

You're all set\! Run the frontend development server.

```bash
npm run dev
```

This command does **everything**:

- Starts the Vite server.
- Automatically starts the local Stellar network in Docker (because `run-locally = true` is in `environments.toml`).
- Deploys all contracts defined in `environments.toml` (including the `factory`).
- Creates the `"me"` account and funds it.
- Starts `stellar scaffold watch` to hot-reload your contract clients if you edit any Rust files.

**One final step:** Your Supabase functions need the `"me"` account's keys to fund other accounts.

1.  After `npm run dev` is running, find the keys in `.stellar/identity/me.json`.
2.  Copy the `publicKey` and `secretKey` into your `supabase/.env` file:
    ```env
    PLATFORM_TREASURY_PUBLIC_KEY="G..."
    PLATFORM_FUNDING_SECRET_KEY="S..."
    ```
3.  Generate a 32-byte key for encryption: `openssl rand -base64 32`
4.  Paste this into `supabase/.env` as `ENCRYPTION_KEY`.
5.  **Restart Supabase** to load the new keys:
    ```bash
    supabase stop
    supabase start
    ```

Your local environment is now fully configured.

---

## 🌐 Testnet Deployment

Deploying to Testnet uses the `stellar registry` commands, which are part of the `stellar-scaffold` ecosystem.

1.  **Configure Wallet:** Ensure your Stellar CLI has a funded Testnet account set up. See `scripts/TESTNET_SETUP.md` for detailed instructions on funding and configuring your wallet.

2.  **Build Contracts:**
    Ensure all contracts are compiled with the release profile.

    ```bash
    npm run install:contracts
    ```

3.  **Publish WASM Files:**
    Publish the WASM for each contract to the registry. This makes them available for deployment.

    ```bash
    # Publish dj-fungible
    stellar registry publish \
      --wasm target/wasm32v1-none/release/dj_fungible.wasm \
      --wasm-name dj-fungible \
      --network testnet \
      --source <your-account-name>

    # Publish dj-nft
    stellar registry publish \
      --wasm target/wasm32v1-none/release/dj_nft.wasm \
      --wasm-name dj-nft \
      --network testnet \
      --source <your-account-name>

    # Publish factory
    stellar registry publish \
      --wasm target/wasm32v1-none/release/factory.wasm \
      --wasm-name factory \
      --network testnet \
      --source <your-account-name>
    ```

4.  **Get WASM Hashes:**
    Find the exact hashes of the WASM files you just published.

    ```bash
    stellar registry wasm ls --name dj-fungible --network testnet
    stellar registry wasm ls --name dj-nft --network testnet
    ```

    **Copy the hashes** for `dj-fungible` and `dj-nft`.

5.  **Deploy the Factory Contract:**
    Now, deploy an _instance_ of the `factory` contract, passing the hashes of the other contracts as constructor arguments.

    ```bash
    stellar registry deploy \
      --contract-name dropsland-factory \
      --wasm-name factory \
      --network testnet \
      --source <your-account-name> \
      -- \
      --admin <your-account-public-key> \
      --token CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC \
      --fungible_wasm <hash-of-dj-fungible> \
      --nft_wasm <hash-of-dj-nft>
    ```

    - `--contract-name`: A new name for your _deployed instance_.
    - `--wasm-name`: The name you published in Step 3.
    - `--admin`: Your Testnet account's public key (e.g., `G...`).
    - `--token`: The Testnet USDC token address.

6.  **Update Supabase:**
    Update your _production_ Supabase Edge Function environment variables to point to the new Testnet factory contract ID.

---

## 📂 Project Structure

This project extends the default `stellar-scaffold` structure with a `supabase` backend.

```
.
├── contracts/        # Soroban Smart Contracts (Rust)
│   ├── dj-fungible/  # Fungible token contract
│   ├── dj-nft/       # NFT contract for rewards
│   └── factory/      # Factory for deploying tokens & NFTs
│
├── packages/         # Auto-generated TypeScript clients (by Scaffold)
│
├── scripts/          # Helper scripts (e.g., install-fungible-wasm.sh)
│
├── src/              # React frontend application
│   ├── components/   # Reusable components (UI, layout)
│   ├── debug/        # Auto-generated contract debugger UI (by Scaffold)
│   ├── hooks/        # Custom React hooks (e.g., useTokenCreation)
│   ├── pages/        # Top-level page components
│   ├── providers/    # React Context providers (Wallet, ProfileType)
│   ├── services/     # API clients (for Supabase functions)
│   ├── types/        # TypeScript type definitions
│   ├── util/         # Utility functions (wallet, storage)
│   └── main.tsx      # App entry point
│
├── supabase/
│   ├── functions/    # Supabase Edge Functions (Deno/TypeScript)
│   │   ├── _shared/  # Shared utilities (Stellar SDK, encryption)
│   │   └── ...       # Backend logic for token creation
│   ├── migrations/   # PostgreSQL schema
│   └── config.toml   # Supabase local config
│
├── .env.example      # Frontend environment variables
├── environments.toml # Stellar Scaffold contract configuration
├── package.json      # Frontend dependencies & scripts
└── Cargo.toml        # Rust workspace config
```

---

## ⚡ Backend & Contract Architecture

### Supabase Edge Functions

The backend logic is not a traditional server but a set of serverless functions running on Supabase. These functions handle logic that requires secrets (like funding keys or database access) and orchestrate on-chain transactions.

- **Token Creation Flow:**
  1.  `prepare-token`: Creates a new distribution account, funds it, and establishes a trustline.
  2.  `emission-xdr`: Generates the unsigned XDR for the artist (issuer) to mint tokens.
  3.  `submit-signed`: Receives the artist-signed XDR and submits it to the Stellar network.
  4.  `distribute`: Splits tokens between the platform treasury and the artist's sell-offer.
- **App Logic:**
  - `create-reward`: Saves an artist's new NFT reward definition to the database.
  - `list-distributed-tokens`: Publicly lists all tokens that have completed the creation flow.

### Soroban Smart Contracts

- `dj-fungible`: A modified SEP-41 token contract. It includes logic for minting and basic token operations.
- `dj-nft`: An NFT contract based on Soroban examples, allowing for minting sequential NFTs (`award_item`).
- `factory`: The central contract. Its primary role is to deploy new instances of `dj-fungible` and `dj-nft` contracts on behalf of artists, tracking their ownership.

---

## Testing

- **Smart Contracts:** Run Rust tests directly within each contract's directory:
  ```bash
  cd contracts/factory
  cargo test
  ```
- **Frontend:** Run the test script defined in `package.json` (Note: tests are not fully implemented yet):
  ```bash
  npm test
  ```

## 📜 License

This project is licensed under the **Apache License 2.0**. See the `LICENSE` file for details.
