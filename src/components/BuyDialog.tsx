import React, { useState, useEffect } from "react";
import { Box } from "./layout/Box";
import { Text } from "@stellar/design-system";
import "./BuyDialog.css";

interface BuyDialogProps {
  visible: boolean;
  onClose: () => void;
  tokenSymbol: string;
  onConfirm: (amount: number) => Promise<void> | void;
}

export const BuyDialog: React.FC<BuyDialogProps> = ({
  visible,
  onClose,
  tokenSymbol,
  onConfirm,
}) => {
  const [inputType, setInputType] = useState<"usdc" | "tokens">("usdc");
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [rate, setRate] = useState(0.5); // Mock rate: 1 USDC = 0.5 tokens (or 1 token = 2 USDC)
  const [purchasedAmounts, setPurchasedAmounts] = useState<{
    usdc: number;
    tokens: number;
  } | null>(null);
  const [rateUpdating, setRateUpdating] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible && !isSubmitting && !isSuccess) {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [visible, isSubmitting, isSuccess, onClose]);

  // Reset state when dialog closes
  useEffect(() => {
    if (!visible) {
      setAmount("");
      setIsSubmitting(false);
      setIsSuccess(false);
      setError("");
      setInputType("usdc");
      setPurchasedAmounts(null);
      setRateUpdating(false);
    }
  }, [visible]);

  // Mock rate changes (simulate price fluctuations)
  useEffect(() => {
    if (!visible || isSubmitting || isSuccess) return;

    const interval = setInterval(() => {
      // Simulate small price changes (±5%)
      const change = (Math.random() - 0.5) * 0.1; // -0.05 to +0.05
      setRateUpdating(true);
      setRate((prevRate) => {
        const newRate = prevRate + change;
        // Keep rate between 0.1 and 2.0
        return Math.max(0.1, Math.min(2.0, newRate));
      });
      // Reset animation flag after animation completes
      setTimeout(() => setRateUpdating(false), 500);
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [visible, isSubmitting, isSuccess]);

  // Calculate converted amounts
  const calculateUsdcAmount = (tokenAmount: number): number => {
    return tokenAmount / rate; // If rate is 0.5, 1 token = 2 USDC
  };

  const calculateTokenAmount = (usdcAmount: number): number => {
    return usdcAmount * rate; // If rate is 0.5, 1 USDC = 0.5 tokens
  };

  const usdcAmount =
    inputType === "usdc"
      ? amount && !isNaN(parseFloat(amount))
        ? parseFloat(amount)
        : 0
      : amount && !isNaN(parseFloat(amount))
        ? calculateUsdcAmount(parseFloat(amount))
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

    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsSubmitting(true);
    try {
      // Pass USDC amount to the confirm handler
      const finalUsdcAmount =
        inputType === "usdc" ? amountNum : calculateUsdcAmount(amountNum);
      const result = onConfirm(finalUsdcAmount);
      if (result instanceof Promise) {
        await result;
      }

      // Store purchased amounts for success message
      const finalTokenAmount =
        inputType === "tokens" ? amountNum : calculateTokenAmount(amountNum);
      setPurchasedAmounts({
        usdc: finalUsdcAmount,
        tokens: finalTokenAmount,
      });

      // Show success animation
      setIsSuccess(true);

      // Auto close after success animation
      setTimeout(() => {
        setAmount("");
        setIsSuccess(false);
        setIsSubmitting(false);
        setPurchasedAmounts(null);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error purchasing token:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Purchase failed. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting && !isSuccess) {
      setAmount("");
      setError("");
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting && !isSuccess) {
      handleClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-container buy-dialog-container">
        {/* Header */}
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            Buy {tokenSymbol}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmitting || isSuccess}
            className="modal-close-button"
            aria-label="Close modal"
          >
            <svg
              className="modal-close-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {isSuccess ? (
            <div className="purchase-success">
              <div className="success-icon">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22 4 12 14.01 9 11.01"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Text
                as="h3"
                size="lg"
                style={{
                  color: "#fcd34d",
                  fontWeight: "700",
                  margin: "1rem 0 0.5rem 0",
                  textAlign: "center",
                }}
              >
                Purchase Successful!
              </Text>
              <Text
                as="p"
                size="md"
                style={{
                  color: "#d1d5db",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                You've successfully purchased{" "}
                {purchasedAmounts
                  ? purchasedAmounts.tokens.toFixed(4)
                  : "0.0000"}{" "}
                {tokenSymbol}
              </Text>
              <Text
                as="p"
                size="sm"
                style={{
                  color: "#9ca3af",
                  textAlign: "center",
                  margin: "0.5rem 0 0 0",
                }}
              >
                Paid{" "}
                {purchasedAmounts ? purchasedAmounts.usdc.toFixed(2) : "0.00"}{" "}
                USDC
              </Text>
            </div>
          ) : (
            <form
              id="buyTokenForm"
              onSubmit={(e) => {
                void handleSubmit(e);
              }}
            >
              <Box gap="lg">
                {/* Token Symbol Display with Rate */}
                <div className="token-symbol-display">
                  <Text
                    as="div"
                    size="xl"
                    style={{
                      color: "#fcd34d",
                      fontWeight: "700",
                      fontSize: "2rem",
                      textAlign: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {tokenSymbol}
                  </Text>
                  <Box direction="row" justify="center" align="center" gap="xs">
                    <Text
                      as="span"
                      size="sm"
                      style={{
                        color: "#d1d5db",
                        fontSize: "0.875rem",
                      }}
                    >
                      1 USDC =
                    </Text>
                    <Text
                      as="span"
                      size="sm"
                      className={`rate-update ${rateUpdating ? "updating" : ""}`}
                      style={{
                        color: "#fcd34d",
                        fontWeight: "600",
                        fontSize: "0.875rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {rate.toFixed(4)} {tokenSymbol}
                    </Text>
                  </Box>
                  <Text
                    as="div"
                    size="xs"
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                      textAlign: "center",
                    }}
                  >
                    Rate updates automatically
                  </Text>
                </div>

                {/* Input Type Toggle */}
                <Box
                  direction="row"
                  gap="sm"
                  style={{ marginBottom: "0.5rem" }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setInputType("usdc");
                      setAmount("");
                      setError("");
                    }}
                    className={`input-type-toggle ${inputType === "usdc" ? "active" : ""}`}
                    disabled={isSubmitting}
                  >
                    USDC
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInputType("tokens");
                      setAmount("");
                      setError("");
                    }}
                    className={`input-type-toggle ${inputType === "tokens" ? "active" : ""}`}
                    disabled={isSubmitting}
                  >
                    {tokenSymbol}
                  </button>
                </Box>

                {/* Amount Input */}
                <Box gap="sm">
                  <label htmlFor="amount" className="input-label">
                    {inputType === "usdc"
                      ? "Amount to Pay (USDC)"
                      : `Amount to Buy (${tokenSymbol})`}
                  </label>
                  <div className="amount-input-wrapper">
                    <input
                      id="amount"
                      type="number"
                      step="0.01"
                      min="0"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setError("");
                      }}
                      placeholder="0.00"
                      disabled={isSubmitting}
                      required
                      className="input-field amount-input"
                      autoFocus
                    />
                    <span className="amount-currency">
                      {inputType === "usdc" ? "USDC" : tokenSymbol}
                    </span>
                  </div>
                  {error && (
                    <Text
                      as="p"
                      size="sm"
                      style={{
                        color: "#ef4444",
                        margin: "0.25rem 0 0 0",
                      }}
                    >
                      {error}
                    </Text>
                  )}
                </Box>

                {/* Purchase Info */}
                <div className="purchase-info">
                  {inputType === "usdc" ? (
                    <>
                      <Box
                        gap="xs"
                        direction="row"
                        justify="space-between"
                        style={{ padding: "0.75rem 0" }}
                      >
                        <Text as="span" size="sm" style={{ color: "#9ca3af" }}>
                          You will receive:
                        </Text>
                        <Text
                          as="span"
                          size="sm"
                          style={{
                            color: "#f9fafb",
                            fontWeight: "600",
                          }}
                        >
                          {tokenAmount > 0
                            ? `${tokenAmount.toFixed(4)} ${tokenSymbol}`
                            : `0.0000 ${tokenSymbol}`}
                        </Text>
                      </Box>
                      <Box
                        gap="xs"
                        direction="row"
                        justify="space-between"
                        style={{
                          padding: "0.75rem 0",
                          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Text as="span" size="sm" style={{ color: "#9ca3af" }}>
                          Pay with:
                        </Text>
                        <Text
                          as="span"
                          size="sm"
                          style={{
                            color: "#fcd34d",
                            fontWeight: "600",
                          }}
                        >
                          {usdcAmount > 0
                            ? `${usdcAmount.toFixed(2)} USDC`
                            : "0.00 USDC"}
                        </Text>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        gap="xs"
                        direction="row"
                        justify="space-between"
                        style={{ padding: "0.75rem 0" }}
                      >
                        <Text as="span" size="sm" style={{ color: "#9ca3af" }}>
                          You will receive:
                        </Text>
                        <Text
                          as="span"
                          size="sm"
                          style={{
                            color: "#f9fafb",
                            fontWeight: "600",
                          }}
                        >
                          {tokenAmount > 0
                            ? `${tokenAmount.toFixed(4)} ${tokenSymbol}`
                            : `0.0000 ${tokenSymbol}`}
                        </Text>
                      </Box>
                      <Box
                        gap="xs"
                        direction="row"
                        justify="space-between"
                        style={{
                          padding: "0.75rem 0",
                          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        <Text as="span" size="sm" style={{ color: "#9ca3af" }}>
                          Pay with:
                        </Text>
                        <Text
                          as="span"
                          size="sm"
                          style={{
                            color: "#fcd34d",
                            fontWeight: "600",
                          }}
                        >
                          {usdcAmount > 0
                            ? `${usdcAmount.toFixed(2)} USDC`
                            : "0.00 USDC"}
                        </Text>
                      </Box>
                    </>
                  )}
                </div>
              </Box>
            </form>
          )}
        </div>

        {/* Footer */}
        {!isSuccess && (
          <div className="modal-footer">
            <button
              type="submit"
              form="buyTokenForm"
              disabled={
                !amount ||
                isNaN(parseFloat(amount)) ||
                parseFloat(amount) <= 0 ||
                isSubmitting
              }
              className="modal-button-primary buy-button"
            >
              {isSubmitting ? (
                <span className="button-loading">
                  <span className="spinner"></span>
                  Processing...
                </span>
              ) : (
                <>
                  <span>💰</span>
                  <span>Buy with USDC</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="modal-button-secondary"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
