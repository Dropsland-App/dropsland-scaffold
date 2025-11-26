
NATIVE_TOKEN := $(shell stellar contract asset id --asset native --network testnet)

all: deploy-dj-fungible

FACTORY = factory
SOURCE_ACCOUNT = me

FUNGIBLE_WASM = 8f83b54a717f9fb588ca00bf6aeab84a9286560a6156b4bd5e5f971d0fb58e58
NFT_WASM = c310fe3728f1e3556fdd4b49fb632fac6423b81a3789f877e100c9f512317281

build:
	stellar contract build

optimize: build
	stellar contract optimize --wasm target/wasm32v1-none/release/$(FACTORY).wasm

deploy-factory: optimize
	stellar contract deploy \
	    --wasm target/wasm32v1-none/release/$(FACTORY).optimized.wasm \
		--source "$(SOURCE_ACCOUNT)" \
		--network testnet \
		--alias "$(FACTORY)" \
		-- \
		--admin "$(SOURCE_ACCOUNT)" \
		--token "$(NATIVE_TOKEN)" \
		--fungible_wasm "$(FUNGIBLE_WASM)" \
		--nft_wasm "$(NFT_WASM)"

upload-wasm: optimize
	stellar contract upload \
        --wasm target/wasm32v1-none/release/$(FUNGIBLE_TOKEN).optimized.wasm \
        --source "$(SOURCE_ACCOUNT)" \
        --network testnet

	stellar contract upload \
        --wasm target/wasm32v1-none/release/$(NFT_TOKEN).optimized.wasm \
        --source "$(SOURCE_ACCOUNT)" \
        --network testnet

# Factory functions
factory-create-nft:
	stellar contract invoke \
		--source "$(SOURCE_ACCOUNT)" \
		--network testnet \
		--id "$(FACTORY)" \
		-- \
		create_nft \
		--owner "$(SOURCE_ACCOUNT)" \
		--base_uri "https://example.json" \
		--name "NFT" \
		--symbol "NFT"
