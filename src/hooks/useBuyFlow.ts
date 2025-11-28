import { useState, useEffect } from "react";
import { useBuyToken } from "./useBuyToken";
import { useWallet } from "./useWallet";
import { supabase } from "@/util/supabase";

export function useBuyFlow(
  visible: boolean,
  tokenIssuer: string,
  tokenSymbol: string,
) {
  const { address } = useWallet();
  const {
    buyToken,
    loading,
    error: hookError,
    checkingTrustline,
  } = useBuyToken();

  const [inputType, setInputType] = useState<"xlm" | "tokens">("xlm");
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [localError, setLocalError] = useState("");
  const [transactionUrl, setTransactionUrl] = useState<string | null>(null);
  const [purchasedAmounts, setPurchasedAmounts] = useState<{
    xlm: number;
    tokens: number;
  } | null>(null);

  const rate = 1.0;

  // Reset state when visibility changes
  useEffect(() => {
    if (!visible) {
      setAmount("");
      setIsSubmitting(false);
      setIsSuccess(false);
      setLocalError("");
      setInputType("xlm");
      setPurchasedAmounts(null);
      setTransactionUrl(null);
    }
  }, [visible]);

  // Sync hook errors
  useEffect(() => {
    if (hookError) setLocalError(hookError);
  }, [hookError]);

  const calculateAmounts = (inputVal: string) => {
    const val = parseFloat(inputVal);
    if (!inputVal || isNaN(val)) return { xlm: 0, tokens: 0 };

    if (inputType === "xlm") {
      return { xlm: val, tokens: val * rate };
    }
    return { xlm: val / rate, tokens: val };
  };

  const { xlm: xlmAmount, tokens: tokenAmount } = calculateAmounts(amount);

  const executePurchase = async () => {
    if (!address) throw new Error("Wallet not connected");
    if (!tokenIssuer) throw new Error("Token issuer required");

    const amountNum = parseFloat(amount);
    if (amountNum <= 0) throw new Error("Invalid amount");

    setIsSubmitting(true);
    setLocalError("");

    try {
      const result = await buyToken({
        tokenCode: tokenSymbol,
        tokenIssuer,
        amountXlm: xlmAmount.toFixed(7),
        buyerPublicKey: address,
      });

      // --- START FIX: Record Activity ---
      // 1. Fetch the internal Token ID
      const { data: tokenData } = await supabase
        .from("artist_tokens")
        .select("id")
        .eq("token_code", tokenSymbol)
        .eq("artist_public_key", tokenIssuer)
        .single();

      if (tokenData) {
        // 2. Insert Sale Record
        await supabase.from("marketplace_sales").insert({
          token_id: tokenData.id,
          buyer_public_key: address,
          seller_public_key: tokenIssuer, // DEX offers are technically mixed, but this is a safe proxy
          amount: tokenAmount,
          price_per_token_xlm: 1.0, // Hardcoded 1:1 for now
          total_price_xlm: xlmAmount,
          tx_hash: result.txHash,
        });
      }
      // --- END FIX ---

      setTransactionUrl(result.transactionUrl);
      setPurchasedAmounts({ xlm: xlmAmount, tokens: tokenAmount });
      setIsSuccess(true);
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : "Purchase failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    inputType,
    setInputType,
    amount,
    setAmount,
    xlmAmount,
    tokenAmount,
    isSubmitting: isSubmitting || loading || checkingTrustline,
    checkingTrustline,
    isSuccess,
    error: localError,
    transactionUrl,
    purchasedAmounts,
    executePurchase,
  };
}
