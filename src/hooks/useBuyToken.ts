// Hook for buying tokens from Stellar DEX
import { useState, useCallback, use } from "react";
import { WalletContext } from "../providers/WalletProvider";
import {
  createBuyOfferXDR,
  createPathPaymentXDR,
  findBestSellOffer,
  createTrustlineXDR,
  hasTrustline,
  submitSignedTransaction,
  getTransactionUrl,
  type BuyTokenParams,
} from "../services/buyToken";
import { networkPassphrase } from "../contracts/util";

export interface UseBuyTokenResult {
  buyToken: (
    params: BuyTokenParams,
  ) => Promise<{ txHash: string; transactionUrl: string }>;
  loading: boolean;
  error: string | null;
  checkingTrustline: boolean;
}

export function useBuyToken(): UseBuyTokenResult {
  const { address, signTransaction } = use(WalletContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkingTrustline, setCheckingTrustline] = useState(false);

  const buyToken = useCallback(
    async (
      params: BuyTokenParams,
    ): Promise<{ txHash: string; transactionUrl: string }> => {
      console.log("=== useBuyToken: Starting purchase ===");
      console.log("Params:", params);
      console.log("Address:", address);
      console.log("signTransaction available:", !!signTransaction);

      if (!address) {
        const error = "Wallet not connected";
        console.error(error);
        throw new Error(error);
      }

      if (!signTransaction) {
        const error =
          "Wallet signing not available. Please make sure your wallet is connected and supports transaction signing.";
        console.error(error);
        throw new Error(error);
      }

      setLoading(true);
      setError(null);

      try {
        // Step 1: Check if user has trustline for the token
        console.log("Step 1: Checking trustline...");
        setCheckingTrustline(true);
        const hasTrust = await hasTrustline(
          params.buyerPublicKey,
          params.tokenCode,
          params.tokenIssuer,
        );
        setCheckingTrustline(false);
        console.log("Trustline check result:", hasTrust);

        let xdr: string;

        if (!hasTrust) {
          // Step 2a: Create trustline XDR if needed
          console.log("Step 2a: Creating trustline XDR...");
          xdr = await createTrustlineXDR(
            params.buyerPublicKey,
            params.tokenCode,
            params.tokenIssuer,
          );
          console.log("Trustline XDR created, length:", xdr.length);

          // Step 3a: Sign trustline transaction
          console.log("Step 3a: Requesting wallet signature for trustline...");
          console.log("This should open your wallet to sign the transaction");

          try {
            const trustlineSignedResult = await signTransaction(xdr, {
              address: params.buyerPublicKey,
              networkPassphrase: String(networkPassphrase),
            });

            console.log("Trustline signing result:", trustlineSignedResult);

            if (!trustlineSignedResult.signedTxXdr) {
              throw new Error(
                "Failed to sign trustline transaction: No signed XDR returned from wallet",
              );
            }

            // Step 4a: Submit trustline transaction
            console.log("Step 4a: Submitting trustline transaction...");
            await submitSignedTransaction(trustlineSignedResult.signedTxXdr);
            console.log("✅ Trustline created successfully");
          } catch (signError) {
            console.error("Error during trustline signing:", signError);
            throw new Error(
              `Failed to sign trustline: ${signError instanceof Error ? signError.message : String(signError)}`,
            );
          }
        }

        // Step 2b: Check for existing sell offers to execute immediately
        console.log("Step 2b: Checking for existing sell offers...");
        const bestOffer = await findBestSellOffer(
          params.tokenCode,
          params.tokenIssuer,
          "1",
        );

        if (bestOffer) {
          // Use path payment for immediate execution
          console.log(
            `✅ Found matching sell offer (ID: ${bestOffer.id}). Executing immediate trade...`,
          );
          xdr = await createPathPaymentXDR(params);
          console.log(
            "Created path payment transaction for immediate execution",
          );
        } else {
          // No matching offer, create a buy offer that will sit on the orderbook
          console.log("⚠️ No matching sell offer found. Creating buy offer...");
          xdr = await createBuyOfferXDR(params);
          console.log("Created buy offer transaction");
        }

        // Step 3b: Sign transaction
        console.log(
          "Step 3b: Requesting wallet signature for purchase transaction...",
        );
        console.log("🔐 THIS SHOULD OPEN YOUR WALLET TO SIGN THE TRANSACTION");
        console.log("XDR length:", xdr.length);
        console.log("Network passphrase:", networkPassphrase);

        let result: { hash: string };

        try {
          const signedResult = await signTransaction(xdr, {
            address: params.buyerPublicKey,
            networkPassphrase: String(networkPassphrase),
          });

          console.log("Purchase signing result:", signedResult);

          if (!signedResult.signedTxXdr) {
            throw new Error(
              "Failed to sign transaction: No signed XDR returned from wallet. Please check your wallet and try again.",
            );
          }

          // Step 4b: Submit transaction
          console.log("Step 4b: Submitting transaction to Stellar network...");
          result = await submitSignedTransaction(signedResult.signedTxXdr);
          console.log(`✅ Transaction submitted successfully: ${result.hash}`);
        } catch (signError) {
          console.error("❌ Error during purchase signing:", signError);
          throw new Error(
            `Failed to sign purchase transaction: ${signError instanceof Error ? signError.message : String(signError)}. Make sure your wallet is open and ready to sign.`,
          );
        }

        const transactionUrl = getTransactionUrl(result.hash);

        console.log("=== Purchase completed successfully ===");
        console.log("Transaction hash:", result.hash);
        console.log("Transaction URL:", transactionUrl);

        setLoading(false);
        setError(null);
        return {
          txHash: result.hash,
          transactionUrl,
        };
      } catch (err) {
        console.error("=== Purchase failed ===");
        console.error("Error:", err);
        console.error("Error type:", typeof err);
        console.error(
          "Error message:",
          err instanceof Error ? err.message : String(err),
        );
        console.error(
          "Error stack:",
          err instanceof Error ? err.stack : "No stack trace",
        );

        const errorMessage =
          err instanceof Error
            ? err.message
            : `Failed to buy token: ${String(err)}`;

        setError(errorMessage);
        setLoading(false);
        setCheckingTrustline(false);

        // Re-throw so BuyDialog can handle it
        throw err;
      }
    },
    [address, signTransaction],
  );

  return {
    buyToken,
    loading,
    error,
    checkingTrustline,
  };
}
