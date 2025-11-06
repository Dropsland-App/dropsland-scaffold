#[cfg(test)]
mod tests {
    use crate::contract::{FactoryContract, FactoryContractClient};

    use soroban_sdk::{testutils::Address as _, Address, Bytes, Env};

    #[test]
    fn test_deploy_sac() {
        let env = Env::default();
        let contract_id = env.register(FactoryContract, ());
        let client = FactoryContractClient::new(&env, &contract_id);

        // Create a mock issuer address
        let issuer = Address::generate(&env);

        // Create a mock serialized asset (in reality this would be proper asset serialization)
        let serialized_asset = Bytes::from_array(&env, &[1, 2, 3, 4, 5]);

        let sac_address = client.deploy_sac(&issuer, &serialized_asset);

        // Verify that we got a valid address back
        assert!(!sac_address.to_string().is_empty());
    }

    #[test]
    fn demo_deploy_sac() {
        let env = Env::default();
        let contract_id = env.register(FactoryContract, ());
        let client = FactoryContractClient::new(&env, &contract_id);

        let issuer = Address::generate(&env);
        let serialized_asset = Bytes::from_array(&env, &[1, 2, 3, 4, 5]);
        let sac_address = client.deploy_sac(&issuer, &serialized_asset);

        assert!(!sac_address.to_string().is_empty());
    }
}
