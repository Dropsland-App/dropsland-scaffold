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

// Fundgible Token
pub(crate) fn set_fundgible_wasm(env: &Env, wasm_hash: &BytesN<32>) {
    let key = DataKey::FundgibleWasm;
    env.storage().instance().set(&key, wasm_hash);
}

pub(crate) fn get_fundgible_wasm(env: &Env) -> Result<BytesN<32>, Error> {
    let key = DataKey::FundgibleWasm;
    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}
