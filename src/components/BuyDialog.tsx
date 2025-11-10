import React, { useState, useEffect } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import { Alert, AlertDescription } from "./ui/alert.tsx";
import { Card, CardContent } from "./ui/card.tsx";
import { useBuyToken } from "../hooks/useBuyToken";
import { useWallet } from "../hooks/useWallet";

interface BuyDialogProps {
  visible: boolean;
  onClose: () => void;
  tokenSymbol: string;
  tokenIssuer: string;
}

export const BuyDialog: React.FC<BuyDialogProps> = ({
  visible,
  onClose,
  tokenSymbol,
  tokenIssuer,
}) => {
  const { address } = useWallet();
  const {
    buyToken,
    loading: buyLoading,
    error: buyError,
    checkingTrustline,
  } = useBuyToken();
  const [inputType, setInputType] = useState<"xlm" | "tokens">("xlm");
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const rate = 1.0; // Fixed rate: 1 XLM = 1 token (1:1)
  const [purchasedAmounts, setPurchasedAmounts] = useState<{
    xlm: number;
    tokens: number;
  } | null>(null);
  const [transactionUrl, setTransactionUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!visible) {
      setAmount("");
      setIsSubmitting(false);
      setIsSuccess(false);
      setError("");
      setInputType("xlm");
      setPurchasedAmounts(null);
      setTransactionUrl(null);
    }
  }, [visible]);

  // Update error from buy hook
  useEffect(() => {
    if (buyError) {
      setError(buyError);
    }
  }, [buyError]);

  // Calculate converted amounts (1:1 rate)
  const calculateXlmAmount = (tokenAmount: number): number => {
    return tokenAmount / rate; // 1 token = 1 XLM
  };

  const calculateTokenAmount = (xlmAmount: number): number => {
    return xlmAmount * rate; // 1 XLM = 1 token
  };

  const xlmAmount =
    inputType === "xlm"
      ? amount && !isNaN(parseFloat(amount))
        ? parseFloat(amount)
        : 0
      : amount && !isNaN(parseFloat(amount))
        ? calculateXlmAmount(parseFloat(amount))
        : 0;

  const tokenAmount =
    inputType === "tokens"
      ? amount && !isNaN(parseFloat(amount))
        ? parseFloat(amount)
        : 0
      : amount && !isNaN(parseFloat(amount))
        ? calculateTokenAmount(parseFloat(amount))
        : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate wallet connection
    if (!address) {
      setError("Please connect your wallet first");
      console.error("Wallet not connected");
      return;
    }

    // Validate token issuer
    if (!tokenIssuer) {
      setError("Token issuer is required");
      console.error("Token issuer not provided");
      return;
    }

    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Calculate XLM amount to spend
      const xlmToSpend =
        inputType === "xlm" ? amountNum : calculateXlmAmount(amountNum);
      const tokensToReceive =
        inputType === "tokens" ? amountNum : calculateTokenAmount(amountNum);

      console.log("=== Starting Token Purchase ===");
      console.log("Token:", tokenSymbol);
      console.log("Issuer:", tokenIssuer);
      console.log("Buyer:", address);
      console.log("Amount XLM:", xlmToSpend);
      console.log("Expected tokens:", tokensToReceive);

      // Always use the buy token hook when tokenIssuer is provided
      // This will trigger wallet signing - the wallet should open automatically
      console.log("=== BuyDialog: Calling buyToken hook ===");
      console.log("This will open your wallet to sign the transaction");
      console.log(
        "If the wallet does not open, check the browser console for errors",
      );

      try {
        const result = await buyToken({
          tokenCode: tokenSymbol,
          tokenIssuer: tokenIssuer,
          amountXlm: xlmToSpend.toFixed(7),
          buyerPublicKey: address,
        });

        console.log("✅ Purchase successful!");
        console.log("Transaction hash:", result.txHash);
        console.log("Transaction URL:", result.transactionUrl);

        setTransactionUrl(result.transactionUrl);
      } catch (buyError) {
        // Re-throw to be caught by outer try-catch
        console.error("BuyDialog: Error in buyToken hook:", buyError);
        throw buyError;
      }

      // Store purchased amounts for success message
      setPurchasedAmounts({
        xlm: xlmToSpend,
        tokens: tokensToReceive,
      });

      setIsSuccess(true);

      setTimeout(() => {
        setAmount("");
        setIsSuccess(false);
        setIsSubmitting(false);
        setPurchasedAmounts(null);
        setTransactionUrl(null);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("❌ Error purchasing token:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        error,
      });

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Purchase failed. Please try again.";

      setError(errorMessage);
      setIsSubmitting(false);
      // Note: checkingTrustline is managed by useBuyToken hook, not here

      // Don't show success if there was an error
      setIsSuccess(false);
      setPurchasedAmounts(null);
    }
  };

  const handleClose = () => {
    if (!isSubmitting && !isSuccess) {
      setAmount("");
      setError("");
      onClose();
    }
  };

  return (
    <Dialog
      open={visible}
      onOpenChange={(open: boolean) => {
        if (!open) {
          handleClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-xl">
        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 text-center py-4">
            <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400">
              <div className="text-4xl">✓</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Purchase successful!
              </h3>
              <p className="text-sm text-muted-foreground">
                You've purchased{" "}
                {purchasedAmounts
                  ? purchasedAmounts.tokens.toFixed(7)
                  : "0.0000000"}{" "}
                {tokenSymbol}
              </p>
              <p className="text-sm text-muted-foreground">
                Paid{" "}
                {purchasedAmounts
                  ? purchasedAmounts.xlm.toFixed(7)
                  : "0.0000000"}{" "}
                XLM
              </p>
              {transactionUrl && (
                <a
                  href={transactionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block mt-2"
                >
                  View on Stellar Explorer
                </a>
              )}
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Buy {tokenSymbol}</DialogTitle>
              <DialogDescription>
                Use XLM to acquire {tokenSymbol} at a fixed 1:1 exchange rate.
              </DialogDescription>
            </DialogHeader>

            <form
              id="buyTokenForm"
              className="space-y-6"
              onSubmit={(e) => {
                void handleSubmit(e);
              }}
            >
              {/* Rate Display */}
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Current rate
                  </p>
                  <p className="text-3xl font-semibold text-amber-300">
                    1 XLM = 1 {tokenSymbol}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fixed 1:1 exchange rate
                  </p>
                </CardContent>
              </Card>

              {/* Input Type Toggle */}
              <div className="inline-flex w-full rounded-md border border-border/60 bg-background p-1 text-xs font-semibold text-muted-foreground">
                <button
                  type="button"
                  className={`flex-1 rounded-md px-3 py-2 transition ${
                    inputType === "xlm"
                      ? "bg-foreground text-background"
                      : "hover:text-foreground"
                  }`}
                  onClick={() => {
                    setInputType("xlm");
                    setAmount("");
                    setError("");
                  }}
                  disabled={isSubmitting || buyLoading || checkingTrustline}
                >
                  XLM
                </button>
                <button
                  type="button"
                  className={`flex-1 rounded-md px-3 py-2 transition ${
                    inputType === "tokens"
                      ? "bg-foreground text-background"
                      : "hover:text-foreground"
                  }`}
                  onClick={() => {
                    setInputType("tokens");
                    setAmount("");
                    setError("");
                  }}
                  disabled={isSubmitting || buyLoading || checkingTrustline}
                >
                  {tokenSymbol}
                </button>
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="amount">
                  {inputType === "xlm"
                    ? "Amount to Pay (XLM)"
                    : `Amount to Buy (${tokenSymbol})`}
                </Label>
                <div className="relative">
                  <Input
                    id="amount"
                    type="number"
                    step="0.0000001"
                    min="0"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setError("");
                    }}
                    placeholder="0.0000000"
                    disabled={
                      isSubmitting || buyLoading || checkingTrustline || !address
                    }
                    required
                    autoFocus
                    className="pr-16 text-lg"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-semibold text-muted-foreground">
                    {inputType === "xlm" ? "XLM" : tokenSymbol}
                  </span>
                </div>
                {(error || buyError) && (
                  <Alert variant="destructive">
                    <AlertDescription>{error || buyError}</AlertDescription>
                  </Alert>
                )}
                {checkingTrustline && (
                  <Alert>
                    <AlertDescription className="text-amber-500">
                      Checking trustline...
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Purchase Info */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      You will receive:
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {tokenAmount > 0
                        ? `${tokenAmount.toFixed(7)} ${tokenSymbol}`
                        : `0.0000000 ${tokenSymbol}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-3">
                    <span className="text-sm text-muted-foreground">
                      Pay with:
                    </span>
                    <span className="text-sm font-semibold text-amber-300">
                      {xlmAmount > 0
                        ? `${xlmAmount.toFixed(7)} XLM`
                        : "0.0000000 XLM"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </form>

            <DialogFooter className="gap-2 sm:flex-row">
              <Button
                type="submit"
                form="buyTokenForm"
                disabled={
                  !amount ||
                  isNaN(parseFloat(amount)) ||
                  parseFloat(amount) <= 0 ||
                  isSubmitting ||
                  buyLoading ||
                  checkingTrustline ||
                  !address
                }
                className="min-w-[180px]"
              >
                {isSubmitting || buyLoading || checkingTrustline ? (
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    {checkingTrustline
                      ? "Checking trustline..."
                      : buyLoading
                        ? "Processing..."
                        : "Submitting..."}
                  </span>
                ) : (
                  <>
                    <span role="img" aria-hidden>
                      💰
                    </span>
                    Buy with XLM
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={handleClose}
                disabled={isSubmitting || buyLoading || checkingTrustline}
              >
                Cancel
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
