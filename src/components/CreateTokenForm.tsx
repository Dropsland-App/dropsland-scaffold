import React, { useState, useEffect } from "react";
import "./CreateTokenForm.css";

interface CreateTokenFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (tokenName: string, symbol: string) => void | Promise<void>;
}

export const CreateTokenForm: React.FC<CreateTokenFormProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible && !isSubmitting) {
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
  }, [visible, isSubmitting, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!tokenName.trim() || !symbol.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = onSubmit(tokenName.trim(), symbol.trim().toUpperCase());
      if (result instanceof Promise) {
        await result;
      }
      setTokenName("");
      setSymbol("");
      onClose();
    } catch (error) {
      console.error("Error creating token:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setTokenName("");
      setSymbol("");
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !isSubmitting) {
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
            disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
          </form>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button
            type="submit"
            form="createTokenForm"
            disabled={!tokenName.trim() || !symbol.trim() || isSubmitting}
            className="modal-button-primary"
          >
            {isSubmitting ? "Creating..." : "Create Token"}
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
      </div>
    </div>
  );
};
