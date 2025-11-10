# Repository Guidelines

## Project Structure & Module Organization

`src/` contains the Vite + React application (UI in `components/`, data hooks in `providers/`, routing in `App.tsx`). Static assets live in `public/`, and the Vite build drops into `dist/`. Soroban smart contracts sit inside `contracts/{dj-fungible,dj-nft,factory}` with Rust sources in `src/` and helper Makefiles for deployment. Generated TypeScript clients and examples are under `packages/*`, while network scripts and Supabase assets live in `scripts/` and `supabase/` alongside `environments.toml` for per-network aliases.

## Build, Test, and Development Commands

- `npm run dev` (or `npm run start`): runs `stellar scaffold watch --build-clients` next to `vite` for live reload plus contract client regeneration.
- `npm run build`: executes `tsc -b` then `vite build`, emitting production assets to `dist/`.
- `npm run lint` / `npm run format`: apply ESLint 9 + Prettier 3 flat configs across the repo.
- `npm run install:contracts`: installs the workspace packages and rebuilds Soroban client bindings.
- `make build` / `make deploy-dj-fungible`: invoke Stellar CLI workflows defined in the root `Makefile`.
- `cd contracts/factory && cargo test`: run contract tests; prefer `cargo test --release` before publishing bytecode.

## Coding Style & Naming Conventions

TypeScript modules are ESM with strict settings from the root `tsconfig*.json`. Honor the repository defaults of two-space indentation, double quotes, and trailing commas—let `npm run format` enforce them. React components, providers, and contexts use PascalCase filenames; hooks follow the `useThing` camelCase pattern, and utility modules may stay kebab-case. Tailwind classes should be grouped layout → spacing → typography → effects to keep diffs focused. ESLint (`eslint.config.js`) plus `lint-staged` auto-fix staged files; avoid bypassing pre-commit hooks.

## Testing Guidelines

Contract tests live beside sources (e.g., `contracts/factory/src/test.rs`); expand coverage for price curves, access control, and treasury splits, re-enabling the commented cases in `contracts/dj-fungible/src/test.rs` when logic changes. Run `cargo test` per contract and capture ledger snapshots for regressions. UI work should include Vitest or Playwright specs under `src/__tests__/` if behavior is non-trivial—wire them into `package.json` as `npm run test` so CI can pick them up. Document any manual verification (wallet flows, Supabase triggers) directly in the PR.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commits style (`feat:`, `fix:`, `chore:`) visible in `git log`; describe scope succinctly and reference issue numbers when relevant. Keep PRs focused, list migrations or contract ID changes explicitly, and include screenshots or clips for UI tweaks. Every PR description should cover context, solution, test evidence, and follow-ups; link helper docs like `scripts/TESTNET_SETUP.md` when the reviewer needs setup steps.

## Security & Configuration Tips

Guard network secrets—use local `.env` files and never commit wallet mnemonics or Supabase service keys. Align deployments with the aliases defined in `environments.toml` and the guidance in `scripts/TESTNET_SETUP.md`/`QUICK_FIX_TESTNET.md` to avoid mismatched admins. Regenerate WASM artifacts via `stellar contract build` (or the Makefile) before shipping so on-chain code matches the latest TypeScript clients. Validate user input inside `src/providers` and API callers before invoking Soroban methods to prevent malformed transactions.
