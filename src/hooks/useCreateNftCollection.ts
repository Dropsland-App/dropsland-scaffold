import { useCallback, useState } from "react";
import { toast } from "sonner";
import type {
  AssembledTransaction,
  Result,
  SentTransaction,
} from "@stellar/stellar-sdk/contract";
import type { Client as FactoryContractClient } from "factory";
import { useWallet } from "./useWallet";
import { useContracts } from "../debug/hooks/useContracts";
import { networkPassphrase } from "../contracts/util";

interface NftFormParams {
  name: string;
  symbol: string;
  baseUri: string;
}

interface CreateCollectionResult {
  sentTransaction: SentTransaction<Result<string>>;
  hash?: string;
  collectionAddress?: string;
}

// Extended interface for factory client with create_nft method
// TODO: Remove this once the factory client is regenerated with the create_nft method
interface ExtendedFactoryClient extends FactoryContractClient {
  create_nft: (
    params: {
      owner: string;
      name: string;
      symbol: string;
      base_uri: string;
    },
    options?: {
      fee?: number;
      timeoutInSeconds?: number;
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<Result<string>>>;
}

export function useCreateNftCollection() {
  const { address, signTransaction } = useWallet();
  const { data: contractData } = useContracts();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCollection = useCallback(
    async (formData: NftFormParams): Promise<CreateCollectionResult | null> => {
      if (!address || !signTransaction) {
        setError("Wallet not connected");
        return null;
      }

      const factoryContract = contractData?.loadedContracts?.factory
        ?.default as ExtendedFactoryClient | undefined;

      if (!factoryContract) {
        setError(
          "Factory contract client not loaded. Is it configured in environments.toml?",
        );
        return null;
      }

      const normalizedInputs = {
        name: formData.name.trim(),
        symbol: formData.symbol.trim(),
        baseUri: formData.baseUri.trim(),
      };

      setLoading(true);
      setError(null);
      const toastId = toast.loading("Preparing transaction...");

      try {
        const tx = await factoryContract.create_nft({
          owner: address,
          name: normalizedInputs.name,
          symbol: normalizedInputs.symbol.toUpperCase(),
          base_uri: normalizedInputs.baseUri,
        });

        toast.loading("Please sign the transaction in your wallet...", {
          id: toastId,
        });

        const sentTx = await tx.signAndSend({
          signTransaction: (
            xdr: string,
            opts?: { networkPassphrase?: string },
          ) =>
            signTransaction(xdr, {
              ...opts,
              address,
              networkPassphrase: String(networkPassphrase),
            }),
        });

        const result = sentTx.result;
        let collectionAddress: string | undefined;

        if (typeof result?.isOk === "function") {
          if (!result.isOk()) {
            throw new Error(result.unwrapErr().message);
          }
          collectionAddress = result.unwrap();
        }

        const hash = sentTx.sendTransactionResponse?.hash;

        toast.success("NFT Collection Created!", {
          id: toastId,
          description: hash
            ? `Tx: ${hash.slice(0, 10)}...`
            : "Transaction submitted successfully",
          action:
            hash && typeof window !== "undefined"
              ? {
                  label: "View on Explorer",
                  onClick: () =>
                    window.open(
                      `https://stellar.expert/explorer/testnet/tx/${hash}`,
                      "_blank",
                    ),
                }
              : undefined,
        });

        return {
          sentTransaction: sentTx,
          hash,
          collectionAddress,
        };
      } catch (err) {
        console.error("NFT Creation Error:", err);
        const message =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(message);
        toast.error("Failed to create collection", {
          id: toastId,
          description: message,
        });
        return null;
      } finally {
        setLoading(false);
      }
    },
    [address, signTransaction, contractData],
  );

  return { createCollection, loading, error };
}
