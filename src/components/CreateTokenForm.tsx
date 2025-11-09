import React, { useState, useEffect } from "react";
import "./CreateTokenForm.css";

interface CreateTokenFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (tokenName: string, symbol: string) => void | Promise<void>;
  isSubmitting?: boolean;
  error?: string | null;
  success?: { tokenAddress: string; transactionHash: string } | null;
}

export const CreateTokenForm: React.FC<CreateTokenFormProps> = ({
  visible,
  onClose,
  onSubmit,
  isSubmitting: externalIsSubmitting = false,
  error: externalError = null,
  success: externalSuccess = null,
}) => {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use external submitting state if provided, otherwise use internal state
  const isSubmittingFinal = externalIsSubmitting || isSubmitting;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible && !isSubmittingFinal) {
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
  }, [visible, isSubmittingFinal, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!visible) {
      setTokenName("");
      setSymbol("");
      setIsSubmitting(false);
    }
  }, [visible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!tokenName.trim() || !symbol.trim()) {
      return;
    }

    // If external submitting state is provided, don't manage internal state
    if (!externalIsSubmitting) {
      setIsSubmitting(true);
    }

    try {
      const result = onSubmit(tokenName.trim(), symbol.trim().toUpperCase());
      if (result instanceof Promise) {
        await result;
      }
      // Only close if not using external state management
      if (!externalIsSubmitting && !externalError && !externalSuccess) {
        setTokenName("");
        setSymbol("");
        onClose();
      }
    } catch (error) {
      console.error("Error creating token:", error);
    } finally {
      if (!externalIsSubmitting) {
        setIsSubmitting(false);
      }
    }
  };

  const handleClose = () => {
    if (!isSubmittingFinal) {
      setTokenName("");
      setSymbol("");
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmittingFinal) {
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
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            Create Your Token
          </h2>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmittingFinal}
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
          <form
            id="createTokenForm"
            onSubmit={(e) => {
              void handleSubmit(e);
            }}
          >
            <p className="modal-description">
              Create a custom token for your community. Choose a name and symbol
              that represents your brand.
            </p>

            <div className="modal-inputs">
              <div className="input-group">
                <label htmlFor="tokenName" className="input-label">
                  Token Name
                </label>
                <input
                  id="tokenName"
                  type="text"
                  value={tokenName}
                  onChange={(e) => setTokenName(e.target.value)}
                  placeholder="e.g., My Music Token"
                  disabled={isSubmittingFinal}
                  required
                  className="input-field"
                />
              </div>

              <div className="input-group">
                <label htmlFor="symbol" className="input-label">
                  Token Symbol
                </label>
                <input
                  id="symbol"
                  type="text"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                  placeholder="e.g., MMT"
                  disabled={isSubmittingFinal}
                  required
                  maxLength={10}
                  className="input-field"
                />
              </div>
            </div>

            {symbol && (
              <div className="symbol-preview">
                <p className="symbol-preview-text">
                  Symbol will be displayed as:{" "}
                  <strong>{symbol.toUpperCase()}</strong>
                </p>
              </div>
            )}

            {/* Error Message */}
            {externalError && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: "8px",
                  color: "#fca5a5",
                }}
              >
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  {externalError}
                </p>
              </div>
            )}

            {/* Success Message */}
            {externalSuccess && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem",
                  backgroundColor: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  borderRadius: "8px",
                  color: "#86efac",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Token created successfully!
                </p>
                <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.8 }}>
                  Address: {externalSuccess.tokenAddress.slice(0, 8)}...
                  {externalSuccess.tokenAddress.slice(-8)}
                </p>
                <p
                  style={{
                    margin: "0.25rem 0 0 0",
                    fontSize: "0.75rem",
                    opacity: 0.8,
                  }}
                >
                  Transaction: {externalSuccess.transactionHash.slice(0, 8)}...
                  {externalSuccess.transactionHash.slice(-8)}
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            type="submit"
            form="createTokenForm"
            disabled={!tokenName.trim() || !symbol.trim() || isSubmittingFinal}
            className="modal-button-primary"
          >
            {isSubmittingFinal ? "Creating..." : "Create Token"}
          </button>
          <button
            type="button"
            onClick={handleClose}
            disabled={isSubmittingFinal}
            className="modal-button-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
