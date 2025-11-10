// Token Creation Hook
import { useState, useEffect, useCallback, useRef } from "react";
import { useWallet } from "./useWallet";
import { networkPassphrase } from "../contracts/util";
import {
  prepareToken,
  checkTokenStatus,
  getEmissionXDR,
  submitSignedTransaction,
  executeDistribution,
} from "../services/tokenCreation";
import type {
  TokenCreationFormData,
  TokenCreationState,
} from "../types/tokenCreation";

const INITIAL_STATE: TokenCreationState = {
  step: 1,
  loading: false,
  error: null,
  tokenData: null,
  distributionAccount: null,
  emissionXDR: null,
  trustlineTxHash: null,
  emissionTxHash: null,
  distributionTxHash: null,
  artistAmount: null,
  platformAmount: null,
};

export function useTokenCreation() {
  const { address, signTransaction } = useWallet();
  const [state, setState] = useState<TokenCreationState>(INITIAL_STATE);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear polling on unmount
  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
      if (pollingTimeoutRef.current) {
        clearTimeout(pollingTimeoutRef.current);
      }
    };
  }, []);

  const reset = useCallback(() => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
    if (pollingTimeoutRef.current) {
      clearTimeout(pollingTimeoutRef.current);
      pollingTimeoutRef.current = null;
    }
    setState(INITIAL_STATE);
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({ ...prev, error, loading: false }));
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  }, []);

  // Step 1: Verify wallet connection
  const checkWalletConnection = useCallback((): boolean => {
    if (!address) {
      setError("Please connect your wallet first");
      return false;
    }
    return true;
  }, [address, setError]);

  // Step 3 & 4: Poll for trustline creation
  const startTrustlinePolling = useCallback(
    (tokenCode: string, artistPublicKey: string) => {
      // Clear any existing polling
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
      if (pollingTimeoutRef.current) {
        clearTimeout(pollingTimeoutRef.current);
        pollingTimeoutRef.current = null;
      }

      const poll = async () => {
        try {
          const status = await checkTokenStatus(tokenCode, artistPublicKey);

          if (status.status === "trustline_created") {
            // Clear polling
            if (pollingIntervalRef.current) {
              clearInterval(pollingIntervalRef.current);
              pollingIntervalRef.current = null;
            }
            if (pollingTimeoutRef.current) {
              clearTimeout(pollingTimeoutRef.current);
              pollingTimeoutRef.current = null;
            }

            setState((prev) => ({
              ...prev,
              step: 4,
              trustlineTxHash: status.trustlineTxHash || null,
            }));
          } else if (status.status === "failed") {
            setError("Token creation failed. Please try again.");
            if (pollingIntervalRef.current) {
              clearInterval(pollingIntervalRef.current);
              pollingIntervalRef.current = null;
            }
            if (pollingTimeoutRef.current) {
              clearTimeout(pollingTimeoutRef.current);
              pollingTimeoutRef.current = null;
            }
          }
        } catch (error) {
          // Don't set error on polling failures, just log
          console.error("Error checking token status:", error);
        }
      };

      // Poll immediately, then every 2 seconds
      void poll();
      pollingIntervalRef.current = setInterval(() => {
        void poll();
      }, 2000);

      // Timeout after 60 seconds
      pollingTimeoutRef.current = setTimeout(() => {
        if (pollingIntervalRef.current) {
          clearInterval(pollingIntervalRef.current);
          pollingIntervalRef.current = null;
        }
        setError("Trustline creation timed out. Please try again.");
      }, 60000);
    },
    [setError],
  );

  // Step 2: Prepare token (create distribution account)
  const handlePrepareToken = useCallback(
    async (formData: TokenCreationFormData) => {
      if (!address) {
        setError("Wallet not connected");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const platformFeeBps = Math.round(formData.platformFee * 100); // Convert percentage to basis points

        const params = {
          artistPublicKey: address,
          tokenCode: formData.tokenCode.toUpperCase(),
          tokenName: formData.tokenName,
          totalSupply: formData.totalSupply,
          platformFeeBps,
          description: formData.description || undefined,
        };

        const response = await prepareToken(params);

        // Check if trustline was created automatically
        if (response.trustlineTxHash) {
          // Trustline created successfully, skip to step 4
          setState((prev) => ({
            ...prev,
            step: 4,
            loading: false,
            tokenData: params,
            distributionAccount: response.distributionAccount,
            trustlineTxHash: response.trustlineTxHash || null,
          }));
        } else if (response.warning) {
          // Trustline creation failed, but token was created - poll for status
          setState((prev) => ({
            ...prev,
            step: 3,
            loading: false,
            tokenData: params,
            distributionAccount: response.distributionAccount,
          }));
          // Start polling for trustline status
          startTrustlinePolling(formData.tokenCode.toUpperCase(), address);
        } else {
          // No trustline hash and no warning - start polling
          setState((prev) => ({
            ...prev,
            step: 3,
            loading: false,
            tokenData: params,
            distributionAccount: response.distributionAccount,
          }));
          // Start polling for trustline status
          startTrustlinePolling(formData.tokenCode.toUpperCase(), address);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to prepare token";
        setError(errorMessage);
      }
    },
    [address, setError, setLoading, startTrustlinePolling],
  );

  // Step 4: Get XDR and sign emission transaction
  const handleSignEmission = useCallback(async () => {
    if (!address || !state.tokenData) {
      setError("Missing required data");
      return;
    }

    if (!signTransaction) {
      setError("Wallet signing not available");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Get XDR from backend
      const xdrResponse = await getEmissionXDR(
        address,
        state.tokenData.tokenCode,
        state.tokenData.totalSupply,
      );

      setState((prev) => ({ ...prev, emissionXDR: xdrResponse.xdr }));

      // Sign transaction with wallet
      const signedResult = await signTransaction(xdrResponse.xdr, {
        address: address,
        networkPassphrase: networkPassphrase,
      });

      if (!signedResult.signedTxXdr) {
        throw new Error("Transaction signing failed");
      }

      // Submit signed transaction
      const submitResponse = await submitSignedTransaction(
        signedResult.signedTxXdr,
        state.tokenData.tokenCode,
        address,
      );

      setState((prev) => ({
        ...prev,
        step: 5,
        loading: false,
        emissionTxHash: submitResponse.txHash,
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to sign emission transaction";
      setError(errorMessage);
    }
  }, [address, state.tokenData, signTransaction, setError, setLoading]);

  // Step 5: Execute distribution (with trustline creation if needed)
  const handleExecuteDistribution = useCallback(async () => {
    if (!address || !state.tokenData) {
      setError("Missing required data");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const distributionResponse = await executeDistribution(
        address,
        state.tokenData.tokenCode,
      );

      console.log("Distribution completed:", distributionResponse);
      setState((prev) => ({
        ...prev,
        step: 6,
        loading: false,
        distributionTxHash: distributionResponse.transactionHash,
        artistAmount: distributionResponse.artistAmount,
        platformAmount: distributionResponse.platformAmount,
      }));

      // Log transaction URLs if available
      if (distributionResponse.transactionUrl) {
        console.log(
          "Distribution transaction URL:",
          distributionResponse.transactionUrl,
        );
      }
      if (distributionResponse.assetUrl) {
        console.log("Asset URL:", distributionResponse.assetUrl);
      }
      if (distributionResponse.message) {
        console.log("Distribution message:", distributionResponse.message);
      }
    } catch (error: unknown) {
      // Note: Artist (issuer) cannot receive their own tokens in Stellar
      // The distribution function has been updated to handle this correctly
      // It will only send platform fee to treasury and keep artist share in distribution account

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to execute distribution";
      console.error("Distribution error:", error);
      setError(errorMessage);
    }
  }, [address, state.tokenData, setError, setLoading]);

  // Navigate to step
  const goToStep = useCallback((step: number) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  return {
    state,
    reset,
    setError,
    setLoading,
    checkWalletConnection,
    handlePrepareToken,
    handleSignEmission,
    handleExecuteDistribution,
    goToStep,
  };
}
