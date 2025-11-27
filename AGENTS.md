# Dropsland – Repository Guidelines

**Mission:** Dropsland transforms beats into economies. It is a Web3 platform where DJs tokenize their careers (via Soroban smart contracts), allowing fans to hold verifiable digital and real-world rights through Fan Tokens.

---

## 1. Project Structure & Architecture

### Hybrid Architecture

This project uses a hybrid **Stellar Soroban + Supabase** architecture:

- **On-Chain (Soroban):** Asset issuance, ownership tracking, payments.
- **Off-Chain (Supabase):** Orchestration, XDR transaction building, metadata indexing, user profiles.

### Directory Map

- **`contracts/`** – Rust Soroban smart contracts
  - `dj-fungible`: Custom SEP-41 token (access control + burn)
  - `dj-nft`: Enumerable NFT contract
  - `factory`: Orchestrator contract

- **`src/`** – Vite + React 19 frontend
  - `components/`
  - `hooks/`
  - `services/`
  - `contracts/` (auto-generated TS bindings)

- **`packages/`** – NPM packages for contract interaction
- **`supabase/`** – Backend logic
  - `functions/`
  - `migrations/`

- **`scripts/`** – DevOps scripts

---

## 2. Development Workflow

### Prerequisites

- Node.js 18+
- Rust + `wasm32v1-none` target
- Stellar CLI & `stellar-scaffold`
- Docker
- Supabase CLI

### Commands

- **`npm run dev`**
  1. Runs local Stellar network
  2. Compiles & deploys contracts in `environments.toml`
  3. Starts Vite frontend
  4. Watches Rust files → auto-regenerates clients

- **`npm run install:contracts`** – Rebuilds WASM & regenerates bindings
- **`supabase start`** – Local Supabase (DB + Functions)

---

## 3. Stellar Scaffold & CLI Mechanics

`stellar-scaffold` bridges Rust contracts and the React frontend by auto-generating type-safe clients.

### 3.1 Code Generation

Triggered by `npm run dev` or `npm run install:contracts`:

1. **Compile** Rust → WASM
2. **Deploy** (local network only)
3. **Generate** TypeScript bindings

**Outputs:**

- **`packages/`** – Full NPM packages per contract
- **`src/contracts/`** – Lightweight wrappers imported by frontend

> **Do not manually edit** anything inside `src/contracts` or `packages`.

---

### 3.2 Client Interaction Pattern

The generated client methods map exactly to on-chain functions.

#### A. Fetching (Simulation)

Read-only → no signature required.

```ts
const { result } = await client.get_balance({ user: address });
```

#### B. Mutations (Sign + Send)

Stellar requires:

1. **Generate XDR**
2. **User signs in wallet**
3. **Submit transaction**

```ts
// 1. Generate unsigned transaction object
const tx = await client.mint({ to: address, amount: 100n });

// 2 & 3. Sign + Send
const response = await tx.signAndSend({
  signTransaction: async (xdr) => {
    const { signedTxXdr } = await wallet.signTransaction(xdr);
    return { signedTxXdr };
  },
});

// 4. Inspect result
if (response.status === "SUCCESS") {
  console.log(response.result);
}
```

---

## 4. Core Features & Implementation Details

### A. Artist Token Launch (“Wizard”)

Logic in `src/hooks/useTokenCreation.ts` and `supabase/functions/`.

Flow:

1. Prepare distribution account
2. Wait for trustline
3. API generates unsigned XDR for emission
4. User signs
5. API submits & performs distribution split

### B. Marketplace (Buy Tokens)

In `useBuyToken.ts` + Supabase service.

- Validate trustline
- Create `changeTrust` XDR if needed
- Query SDEX sell offers
- Generate `pathPaymentStrictSend` or `manageBuyOffer` XDR

### C. Rewards (NFTs)

- `factory` deploys `dj-nft`
- Artist uses `award_item` to mint NFT rewards

---

## 5. Strict Typing & Compilation Guidelines

### 5.1 TypeScript

- **No `any` allowed**
- Use `unknown` + type narrowing
- Use explicit interfaces (`src/types/`)
- Validate external data with **Zod**
- Use generated contract types, never manual typings
- Token amounts → always `bigint`
- Always check that the code compiles using `tsc -b` and `npm run build`

### 5.2 Rust

- Avoid `unwrap()`, use `Result`
- Define explicit `#[contracttype]` structs/enums
- Use only Soroban-supported types (`i128`, `Address`, `BytesN`, etc.)

---

## 6. Coding Standards

### React 19 & Tailwind

- Functional components
- Typed hooks
- Use `cn()` for Tailwind merging

### Error Handling

Type-safe error narrowing:

```ts
try {
  // ...
} catch (err) {
  if (err instanceof Error) toast.error(err.message);
}
```

### Passing callbacks as attributes

You will pass callbacks that return promises with void before them, to avoid type errors, e.g.

```tsx
<Button onClick={() => void connectWallet()} className="w-full">
  Connect Wallet
</Button>
```

### Comments

Avoid unnecessary comments, add concise and simple comments when they are really needed to understand what is happening on the code, or they why of a snippet.

---

## 7. Configuration & Environment

- **`environments.toml`** is source of truth for network + contract IDs
- Factory init args MUST match WASM hashes
- Env vars:
  - Frontend: `.env`
  - Backend: `supabase/.env` (never commit)

---

## 8. Deployment Guidelines

1. Build contracts → obtain WASM hashes
2. Deploy Factory with correct constructor args
3. Run `npm run install:contracts`

---

## 9. Troubleshooting

- **Property 'x' does not exist on type 'unknown'** → validate input with Zod or guards
- **Type 'number' is not assignable to 'bigint'** → convert using `BigInt()`

---
