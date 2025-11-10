use soroban_sdk::{
    contract, contractimpl, symbol_short, vec, xdr::ToXdr, Address, Bytes, BytesN, Env, IntoVal,
    String, TryFromVal, Val, Vec,
};

use crate::{
    events,
    storage::{
        admin::{has_admin, set_admin},
        token::{get_fungible_wasm, get_nft_wasm, set_fungible_wasm, set_nft_wasm, set_token},
        types::{DataKey, Error, RegistryEntry, TokenType},
    },
};

#[contract]
pub struct FactoryContract;

#[contractimpl]
impl FactoryContract {
    pub fn __constructor(
        env: Env,
        admin: Address,
        token: Address,
        fungible_wasm: BytesN<32>,
        nft_wasm: BytesN<32>,
    ) -> Result<(), Error> {
        if has_admin(&env) {
            return Err(Error::ContractInitialized);
        }
        set_admin(&env, &admin);
        set_token(&env, &token);
        set_fungible_wasm(&env, &fungible_wasm);
        set_nft_wasm(&env, &nft_wasm);
        events::contract::contract_initialized(&env, &admin, &token); // TODO! Add fundgible token to event
        Ok(())
    }

    pub fn deploy(
        env: Env,
        wasm_hash: BytesN<32>,
        salt: BytesN<32>,
        constructor_args: Vec<Val>,
        token_type: TokenType,
    ) -> Result<Address, Error> {
        let deployed_address = env
            .deployer()
            .with_address(env.current_contract_address(), salt)
            .deploy_v2(wasm_hash, constructor_args.clone());

        // assumes issuer is the first argument
        let issuer_val = constructor_args.get(0).ok_or(Error::InvalidArgument)?;
        let issuer: Address =
            Address::try_from_val(&env, &issuer_val).map_err(|_| Error::InvalidArgument)?;

        register_token(&env, &issuer, &deployed_address, token_type);
        Ok(deployed_address)
    }

    pub fn deploy_sac(env: Env, issuer: Address, serialized_asset: Bytes) -> Address {
        let deployer = env.deployer().with_stellar_asset(serialized_asset);
        let _ = deployer.deployed_address();
        let sac_address = deployer.deploy();

        // 7. Register the SAC token
        register_token(&env, &issuer, &sac_address, TokenType::Sac);

        sac_address
    }

    pub fn create_fungible(
        env: Env,
        owner: Address,
        decimals: u32,
        name: String,
        symbol: String,
    ) -> Result<Address, Error> {
        let fundgible_wasm = get_fungible_wasm(&env)?;
        let salt = get_salt(&env);
        let constructor_args: Vec<Val> = vec![
            &env,
            owner.into_val(&env),
            decimals.into_val(&env),
            name.into_val(&env),
            symbol.into_val(&env),
        ];

        let deployed_address = env
            .deployer()
            .with_address(env.current_contract_address(), salt)
            .deploy_v2(fundgible_wasm, constructor_args);

        register_token(&env, &owner, &deployed_address, TokenType::Fungible);
        Ok(deployed_address)
    }

    pub fn create_nft(
        env: Env,
        owner: Address,
        base_uri: String,
        name: String,
        symbol: String,
    ) -> Result<Address, Error> {
        let fundgible_wasm = get_nft_wasm(&env)?;
        let salt = get_salt(&env);
        let constructor_args: Vec<Val> = vec![
            &env,
            owner.into_val(&env),
            base_uri.into_val(&env),
            name.into_val(&env),
            symbol.into_val(&env),
        ];

        let deployed_address = env
            .deployer()
            .with_address(env.current_contract_address(), salt)
            .deploy_v2(fundgible_wasm, constructor_args);

        register_token(&env, &owner, &deployed_address, TokenType::Nft);
        Ok(deployed_address)
    }

    // Token Registry
    pub fn get_token_info(env: Env, token_addr: Address) -> Result<RegistryEntry, Error> {
        env.storage()
            .instance()
            .get(&DataKey::TokenInfo(token_addr))
            .ok_or(Error::TokenNotFound)
    }

    pub fn get_all_tokens(env: Env) -> Result<Vec<Address>, Error> {
        env.storage()
            .instance()
            .get(&DataKey::TokenRegistry)
            .ok_or(Error::TokenNotFound)
    }

    pub fn get_fungible_metadata(env: Env, token_addr: Address) -> (String, String, u32, Address) {
        let name: String = env.invoke_contract(&token_addr, &symbol_short!("name"), Vec::new(&env));
        let symbol: String =
            env.invoke_contract(&token_addr, &symbol_short!("symbol"), Vec::new(&env));
        let decimals: u32 =
            env.invoke_contract(&token_addr, &symbol_short!("decimals"), Vec::new(&env));
        let owner: Address =
            env.invoke_contract(&token_addr, &symbol_short!("get_owner"), Vec::new(&env));

        (name, symbol, decimals, owner)
    }

    pub fn get_fungible_wasm(env: Env) -> Result<BytesN<32>, Error> {
        get_fungible_wasm(&env)
    }

    pub fn get_nft_wasm(env: Env) -> Result<BytesN<32>, Error> {
        get_nft_wasm(&env)
    }
}

// Utils function
pub fn get_salt(env: &Env) -> BytesN<32> {
    let mut data = Bytes::new(env);
    data.append(&env.current_contract_address().to_xdr(env));

    let key = DataKey::DeployNonce;
    let nonce: u64 = env.storage().instance().get(&key).unwrap_or(0);
    data.append(&nonce.to_xdr(env));
    env.storage().instance().set(&key, &(nonce + 1));

    let hash = env.crypto().sha256(&data);
    BytesN::from_array(env, &hash.to_array())
}

pub fn register_token(env: &Env, issuer: &Address, token: &Address, token_type: TokenType) {
    let entry = RegistryEntry {
        token_type,
        issuer: issuer.clone(),
    };
    env.storage()
        .instance()
        .set(&DataKey::TokenInfo(token.clone()), &entry);

    // Store list of all tokens
    let mut list: Vec<Address> = env
        .storage()
        .instance()
        .get(&DataKey::TokenRegistry)
        .unwrap_or_else(|| Vec::new(env));

    list.push_back(token.clone());

    env.storage().instance().set(&DataKey::TokenRegistry, &list);
}
