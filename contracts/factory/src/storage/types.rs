use soroban_sdk::contracterror;
use soroban_sdk::contracttype;
use soroban_sdk::Address;

#[derive(Clone)]
#[contracttype]
pub enum DataKey {
    Admin,
    Token,
    FundgibleWasm,
    DeployNonce,

    TokenRegistry,      // Will store the Vec<Address> for enumeration
    TokenInfo(Address), // Maps a token_address -> RegistryEntry
}

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Error {
    // Basic Errors
    ContractInitialized = 0,
    ContractNotInitialized = 1,
    AmountMustBePositive = 2,
    UnauthorizedAccess = 3,
    //
    TokenNotFound = 4,
    InvalidArgument = 5,
}

#[derive(Clone, Copy)]
#[contracttype]
pub enum TokenType {
    Sac = 0,
    Custom = 1,
    Fungible = 2,
    Nft = 3,
}

#[derive(Clone)]
#[contracttype]
pub struct RegistryEntry {
    pub token_type: TokenType,
    pub issuer: Address,
}
