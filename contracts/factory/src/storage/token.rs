use soroban_sdk::{Address, BytesN, Env, Vec};

use crate::storage::types::{DataKey, Error};

// Used token e.g. USDC, XLM
pub(crate) fn set_token(env: &Env, token: &Address) {
    let key = DataKey::Token;

    env.storage().instance().set(&key, token);
}

pub(crate) fn get_token(env: &Env) -> Result<Address, Error> {
    let key = DataKey::Token;

    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}

// Fungible Token
pub(crate) fn set_fungible_wasm(env: &Env, wasm_hash: &BytesN<32>) {
    let key = DataKey::FungibleWasm;
    env.storage().instance().set(&key, wasm_hash);
}

pub(crate) fn get_fungible_wasm(env: &Env) -> Result<BytesN<32>, Error> {
    let key = DataKey::FungibleWasm;
    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}

pub(crate) fn set_nft_wasm(env: &Env, wasm_hash: &BytesN<32>) {
    let key = DataKey::NftWasm;
    env.storage().instance().set(&key, wasm_hash);
}

pub(crate) fn get_nft_wasm(env: &Env) -> Result<BytesN<32>, Error> {
    let key = DataKey::NftWasm;
    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}
