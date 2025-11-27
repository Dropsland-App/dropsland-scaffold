// Token Creation Hook
import { useState, useEffect, useCallback, useRef } from "react";
import { flushSync } from "react-dom";
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
  loadingMessage: null,
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
    setState((prev) => ({
      ...prev,
      error,
      loading: false,
      loadingMessage: null,
    }));
  }, []);

  const setLoading = useCallback(
    (loading: boolean, message: string | null = null) => {
      setState((prev) => ({ ...prev, loading, loadingMessage: message }));
    },
    [],
  );

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

      // Set loading state for polling
      setState((prev) => ({
        ...prev,
        loading: true,
        loadingMessage: "Waiting for trustline creation...",
      }));

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
              loading: false,
              loadingMessage: null,
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

      // Immediately move to step 3 and show loading
      setState((prev) => ({
        ...prev,
        step: 3,
        loading: true,
        loadingMessage: "Preparing token and creating distribution account...",
        error: null,
      }));

      // Small delay to ensure React renders the loading state
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Record start time to ensure minimum loading display
      const startTime = Date.now();
      const minLoadingTime = 1000; // Minimum 1 second to show loading

      try {
        const platformFeeBps = Math.round(formData.platformFee * 100); // Convert percentage to basis points

        const params = {
          artistPublicKey: address,
          artistName: formData.artistName,
          tokenCode: formData.tokenCode.toUpperCase(),
          tokenName: formData.tokenName,
          totalSupply: formData.totalSupply,
          platformFeeBps,
          description: formData.description || undefined,
        };

        const response = await prepareToken(params);

        // Ensure minimum loading time has passed
        const elapsed = Date.now() - startTime;
        if (elapsed < minLoadingTime) {
          await new Promise((resolve) =>
            setTimeout(resolve, minLoadingTime - elapsed),
          );
        }

        // Check if trustline was created automatically
        if (response.trustlineTxHash) {
          // Trustline created successfully, skip to step 4
          setState((prev) => ({
            ...prev,
            step: 4,
            loading: false,
            loadingMessage: null,
            tokenData: params,
            distributionAccount: response.distributionAccount,
            trustlineTxHash: response.trustlineTxHash || null,
          }));
        } else if (response.warning) {
          // Trustline creation failed, but token was created - poll for status
          setState((prev) => ({
            ...prev,
            step: 3,
            loading: true, // Keep loading true for polling
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
            loading: true, // Keep loading true for polling
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
    [address, setError, startTrustlinePolling],
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

    setLoading(true, "Getting emission transaction...");
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
      setLoading(true, "Please sign the transaction in your wallet...");
      const signedResult = await signTransaction(xdrResponse.xdr, {
        address: address,
        networkPassphrase: networkPassphrase,
      });

      if (!signedResult.signedTxXdr) {
        throw new Error("Transaction signing failed");
      }

      // Submit signed transaction
      setLoading(true, "Submitting signed transaction...");
      const submitResponse = await submitSignedTransaction(
        signedResult.signedTxXdr,
        state.tokenData.tokenCode,
        address,
      );

      setState((prev) => ({
        ...prev,
        step: 5,
        loading: false,
        loadingMessage: null,
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
    console.log("handleExecuteDistribution called", {
      address,
      tokenData: state.tokenData,
    });

    if (!address || !state.tokenData) {
      console.error("Missing required data", {
        address,
        tokenData: state.tokenData,
      });
      setError("Missing required data");
      return;
    }

    console.log("Setting loading state...");
    // Force synchronous state update to ensure loading is visible immediately
    // eslint-disable-next-line react-dom/no-flush-sync
    flushSync(() => {
      setState((prev) => ({
        ...prev,
        loading: true,
        loadingMessage: "Executing distribution...",
        error: null,
      }));
    });

    console.log("Loading state set, waiting for render...");
    // Small delay to ensure React renders the loading state
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Record start time to ensure minimum loading display
    const startTime = Date.now();
    const minLoadingTime = 1000; // Minimum 1 second to show loading

    try {
      console.log("Calling executeDistribution API...", {
        address,
        tokenCode: state.tokenData.tokenCode,
      });
      const distributionResponse = await executeDistribution(
        address,
        state.tokenData.tokenCode,
      );

      // Ensure minimum loading time has passed
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minLoadingTime - elapsed),
        );
      }

      console.log("Distribution completed:", distributionResponse);
      setState((prev) => ({
        ...prev,
        step: 6,
        loading: false,
        loadingMessage: null,
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
  }, [address, state.tokenData, setError]);

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
