use soroban_sdk::{contract, contractimpl, Address, Env, String};
use stellar_access::ownable::{self as ownable, Ownable};
use stellar_macros::default_impl;
use stellar_tokens::non_fungible::{
    enumerable::{Enumerable, NonFungibleEnumerable},
    Base, NonFungibleToken,
};

#[contract]
pub struct DjNftToken;

#[contractimpl]
impl DjNftToken {
    pub fn __constructor(e: &Env, owner: Address, base_uri: String, name: String, symbol: String) {
        Base::set_metadata(e, base_uri, name, symbol);
        ownable::set_owner(e, &owner);
    }

    pub fn award_item(e: &Env, to: Address) -> u32 {
        // access control might be needed
        Enumerable::sequential_mint(e, &to)
    }
}

#[default_impl]
#[contractimpl]
impl NonFungibleToken for DjNftToken {
    type ContractType = Enumerable;
}

#[default_impl]
#[contractimpl]
impl NonFungibleEnumerable for DjNftToken {}

#[default_impl]
#[contractimpl]
impl Ownable for DjNftToken {}
