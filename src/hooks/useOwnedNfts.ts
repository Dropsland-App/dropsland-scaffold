import { useQuery } from "@tanstack/react-query";
import type { Client as FactoryContractClient } from "factory";
import { Client as DjNftClient } from "dj_nft";
import { useContracts } from "../debug/hooks/useContracts";
import { networkPassphrase, rpcUrl } from "../contracts/util";
import { fetchNftCollections } from "../util/nftCollections";

export interface OwnedCollection {
  contractId: string;
  tokenIds: number[];
}

async function loadOwnedCollections(
  factoryClient: FactoryContractClient,
  owner: string,
): Promise<OwnedCollection[]> {
  const collections = await fetchNftCollections(factoryClient);
  const owned: OwnedCollection[] = [];

  for (const collection of collections) {
    const nftClient = new DjNftClient({
      contractId: collection.contractId,
      networkPassphrase: String(networkPassphrase),
      rpcUrl,
      allowHttp: true,
    });

    try {
      const balanceResponse = await nftClient.balance({ account: owner });
      const balanceValue = Number(balanceResponse.result ?? 0);
      if (!Number.isFinite(balanceValue) || balanceValue <= 0) {
        continue;
      }

      const tokenIds: number[] = [];
      for (let index = 0; index < balanceValue; index += 1) {
        try {
          const tokenResponse = await nftClient.get_owner_token_id({
            owner,
            index,
          });
          const tokenId = Number(tokenResponse.result ?? 0);
          if (Number.isFinite(tokenId)) {
            tokenIds.push(tokenId);
          }
        } catch (error) {
          console.error(
            `Failed to read token index ${index} for ${collection.contractId}`,
            error,
          );
        }
      }

      if (tokenIds.length > 0) {
        owned.push({
          contractId: collection.contractId,
          tokenIds,
        });
      }
    } catch (error) {
      console.error(
        `Failed to load balance for ${collection.contractId}`,
        error,
      );
    }
  }

  return owned;
}

export function useOwnedNfts(owner?: string) {
  const { data: contractData } = useContracts();
  const factoryContract = contractData?.loadedContracts?.factory?.default as
    | FactoryContractClient
    | undefined;

  return useQuery<OwnedCollection[]>({
    queryKey: ["ownedNfts", owner, factoryContract?.options?.contractId],
    enabled: Boolean(owner && factoryContract),
    queryFn: async () => {
      if (!owner || !factoryContract) {
        return [];
      }
      return loadOwnedCollections(factoryContract, owner);
    },
    staleTime: 30_000,
  });
}
