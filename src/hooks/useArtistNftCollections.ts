import { useQuery } from "@tanstack/react-query";
import type { Client as FactoryContractClient } from "factory";
import { useContracts } from "../debug/hooks/useContracts";
import {
  fetchNftCollections,
  type NftCollectionInfo,
} from "../util/nftCollections";

export function useArtistNftCollections(artistPublicKey?: string) {
  const { data: contractData } = useContracts();
  const factoryContract = contractData?.loadedContracts?.factory?.default as
    | FactoryContractClient
    | undefined;

  return useQuery<NftCollectionInfo[]>({
    queryKey: [
      "artistNftCollections",
      artistPublicKey,
      factoryContract?.options?.contractId,
    ],
    enabled: Boolean(artistPublicKey && factoryContract),
    queryFn: async () => {
      if (!artistPublicKey || !factoryContract) {
        return [];
      }

      return fetchNftCollections(factoryContract, { owner: artistPublicKey });
    },
    staleTime: 60_000,
  });
}
