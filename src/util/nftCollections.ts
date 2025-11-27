import type { Client as FactoryContractClient } from "factory";
import { TokenType } from "factory";
import { unwrapResult } from "./contracts";
import { networkPassphrase, rpcUrl } from "../contracts/util";
import * as DjNftClient from "dj_nft";
// import

export interface NftCollectionInfo {
  contractId: string;
  issuer: string;
  name: string;
  symbol: string;
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
      // 1. Check Factory Info first (to filter quickly)
      const infoResponse = await factoryClient.get_token_info({
        token_addr: contractId,
      });
      const info = unwrapResult(
        infoResponse.result,
        `get_token_info:${contractId}`,
      );

      // Filter: Must be NFT type
      if (info.token_type !== TokenType.Nft) {
        continue;
      }

      // Filter: Must match Owner (if provided)
      if (owner && info.issuer !== owner) {
        continue;
      }

      // 2. Hydrate Metadata: Instantiate the NFT Client
      const nftClient = new DjNftClient.Client({
        contractId,
        networkPassphrase: String(networkPassphrase),
        rpcUrl,
        allowHttp: true,
      });

      // 3. Fetch Name and Symbol from the contract
      // We use Promise.all to fetch both in parallel for speed
      const [nameResult, symbolResult] = await Promise.all([
        nftClient.name(),
        nftClient.symbol(),
      ]);

      // 4. Push the full object
      collections.push({
        contractId,
        issuer: info.issuer,
        name: unwrapResult(nameResult.result, 'name'), // Convert ScVal/String to JS string
        symbol: unwrapResult(symbolResult.result, 'symbol'), // Convert ScVal/String to JS string
      });
    } catch (error) {
      console.error(`Failed to load details for ${contractId}`, error);
      // Optional: You could push a fallback object here if you still want it to show up
    }
  }

  return collections;
}
