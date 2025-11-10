import type { Client as FactoryContractClient } from "factory";
import { TokenType } from "factory";
import { unwrapResult } from "./contracts";

export interface NftCollectionInfo {
  contractId: string;
  issuer: string;
}

interface FetchOptions {
  owner?: string;
}

export async function fetchNftCollections(
  factoryClient: FactoryContractClient,
  options: FetchOptions = {},
): Promise<NftCollectionInfo[]> {
  const { owner } = options;
  const response = await factoryClient.get_all_tokens();
  const contractIds = unwrapResult(response.result, "get_all_tokens");

  const collections: NftCollectionInfo[] = [];

  for (const tokenAddr of contractIds) {
    const contractId =
      typeof tokenAddr === "string" ? tokenAddr : String(tokenAddr);
    if (!contractId) continue;

    try {
      const infoResponse = await factoryClient.get_token_info({
        token_addr: contractId,
      });
      const info = unwrapResult(
        infoResponse.result,
        `get_token_info:${contractId}`,
      );

      if (info.token_type !== TokenType.Nft) {
        continue;
      }

      if (owner && info.issuer !== owner) {
        continue;
      }

      collections.push({ contractId, issuer: info.issuer });
    } catch (error) {
      console.error(`Failed to load token info for ${contractId}`, error);
    }
  }

  return collections;
}
