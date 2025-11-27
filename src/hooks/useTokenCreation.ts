import { useState, useCallback } from "react";
import { useWallet } from "./useWallet";
import { networkPassphrase } from "../contracts/util";
import {
  prepareToken,
  checkTokenStatus,
  getEmissionXDR,
  submitSignedTransaction,
  executeDistribution,
} from "../services/tokenCreation";
import type { TokenCreationFormData } from "../types/tokenCreation";

export type CreationStage =
  | "IDLE"
  | "PREPARING_ACCOUNT"
  | "WAITING_FOR_SIGNATURE"
  | "SUBMITTING_TRANSACTION"
  | "FINALIZING_DISTRIBUTION"
  | "SUCCESS"
  | "ERROR";

export function useTokenCreation() {
  const { address, signTransaction } = useWallet();
  const [stage, setStage] = useState<CreationStage>("IDLE");
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);

  const waitForTrustline = async (tokenCode: string, issuer: string) => {
    const maxAttempts = 30;
    for (let i = 0; i < maxAttempts; i++) {
      try {
        const status = await checkTokenStatus(tokenCode, issuer);
        if (status.status === "trustline_created") return status;
        if (status.status === "failed")
          throw new Error("Trustline creation failed on-chain.");
      } catch (e) {
        console.warn("Polling error (retrying):", e);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
    throw new Error("Timeout waiting for trustline creation.");
  };

  const createToken = useCallback(
    async (formData: TokenCreationFormData) => {
      if (!address || !signTransaction) {
        setError("Wallet not connected");
        return;
      }

      setStage("PREPARING_ACCOUNT");
      setError(null);

      try {
        console.log("Preparing token...");
        await prepareToken({
          ...formData,
          artistPublicKey: address,
          platformFeeBps: Math.round(formData.platformFee * 100),
          tokenCode: formData.tokenCode.toUpperCase(),
        });

        await waitForTrustline(formData.tokenCode.toUpperCase(), address);

        const xdrRes = await getEmissionXDR(
          address,
          formData.tokenCode.toUpperCase(),
          formData.totalSupply,
        );

        setStage("WAITING_FOR_SIGNATURE");
        const signed = await signTransaction(xdrRes.xdr, {
          networkPassphrase,
          address,
        });

        if (!signed.signedTxXdr) throw new Error("User rejected signature");

        setStage("SUBMITTING_TRANSACTION");
        await submitSignedTransaction(
          signed.signedTxXdr,
          formData.tokenCode.toUpperCase(),
          address,
        );

        setStage("FINALIZING_DISTRIBUTION");
        const distRes = await executeDistribution(
          address,
          formData.tokenCode.toUpperCase(),
        );

        setResult({ ...distRes, tokenCode: formData.tokenCode.toUpperCase() });
        setStage("SUCCESS");
      } catch (e: any) {
        console.error(e);
        setError(e.message || "Unknown error occurred");
        setStage("ERROR");
      }
    },
    [address, signTransaction],
  );

  const reset = () => {
    setStage("IDLE");
    setError(null);
    setResult(null);
  };

  return { stage, error, result, createToken, reset };
}
