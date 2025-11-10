import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Alert, AlertDescription } from "./ui/alert.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { useWallet } from "../hooks/useWallet";
import { connectWallet } from "../util/wallet";
import { useTokenCreation } from "../hooks/useTokenCreation";
import type { TokenCreationFormData } from "../types/tokenCreation";
import { stellarNetwork } from "../contracts/util";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface CreateTokenFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (tokenName: string, symbol: string) => void | Promise<void>;
  onSuccess?: () => void;
}

const STEPS = [
  "Connect Wallet",
  "Token Details",
  "Prepare Token",
  "Wait for Trustline",
  "Sign Emission",
  "Distribution",
  "Success",
];

export const CreateTokenForm: React.FC<CreateTokenFormProps> = ({
  visible,
  onClose,
  onSuccess,
}) => {
  const { address, isPending: walletPending } = useWallet();
  const {
    state,
    reset,
    setError,
    checkWalletConnection,
    handlePrepareToken,
    handleSignEmission,
    handleExecuteDistribution,
    goToStep,
  } = useTokenCreation();

  const [formData, setFormData] = useState<TokenCreationFormData>({
    tokenCode: "",
    tokenName: "",
    totalSupply: "1000000",
    description: "",
    platformFee: 10,
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!visible) {
      reset();
      setFormData({
        tokenCode: "",
        tokenName: "",
        totalSupply: "1000000",
        description: "",
        platformFee: 10,
      });
    }
  }, [visible, reset]);

  // Initialize step based on wallet connection
  useEffect(() => {
    if (visible) {
      if (address) {
        if (state.step === 1) {
          goToStep(2);
        }
      } else {
        goToStep(1);
      }
    }
  }, [visible, address, state.step, goToStep]);

  const handleClose = useCallback(() => {
    if (!state.loading && state.step !== 7) {
      reset();
      onClose();
    }
  }, [state.loading, state.step, reset, onClose]);

  // Handle escape key and body overflow
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible && !state.loading && state.step !== 7) {
        handleClose();
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
  }, [visible, state.loading, state.step, handleClose]);

  const handleConnectWallet = async () => {
    await connectWallet();
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkWalletConnection()) {
      return;
    }

    // Validate form
    if (
      !formData.tokenCode.trim() ||
      !formData.tokenName.trim() ||
      !formData.totalSupply.trim()
    ) {
      setError("Please fill in all required fields");
      return;
    }

    if (formData.tokenCode.length > 12) {
      setError("Token code must be 12 characters or less");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(formData.tokenCode)) {
      setError("Token code can only contain letters and numbers");
      return;
    }

    const supply = parseFloat(formData.totalSupply);
    if (isNaN(supply) || supply <= 0) {
      setError("Total supply must be a positive number");
      return;
    }

    await handlePrepareToken(formData);
  };

  const getStellarExplorerUrl = (hash: string) => {
    if (stellarNetwork === "PUBLIC") {
      return `https://stellar.expert/explorer/public/tx/${hash}`;
    } else if (stellarNetwork === "TESTNET") {
      return `https://stellar.expert/explorer/testnet/tx/${hash}`;
    } else if (stellarNetwork === "FUTURENET") {
      return `https://stellar.expert/explorer/futurenet/tx/${hash}`;
    }
    return `#`;
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
              <p className="text-sm text-muted-foreground">
                Connect your Stellar wallet to create your token. You will be the
                issuer and have full control.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => {
                void handleConnectWallet();
              }}
              disabled={walletPending}
              className="w-full"
              size="lg"
            >
              {walletPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}

            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Create Your Token</h3>
              <p className="text-sm text-muted-foreground">
                Fill in the details for your token. You can customize the name,
                symbol, and supply.
              </p>
            </div>

            {address && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm">
                    Wallet:{" "}
                    <span className="font-mono font-semibold">
                      {address.slice(0, 8)}...{address.slice(-8)}
                    </span>
                  </p>
                </CardContent>
              </Card>
            )}

            <form
              id="createTokenForm"
              onSubmit={(e) => {
                void handleFormSubmit(e);
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="tokenCode">
                  Token Code (1-12 characters)
                </Label>
                <Input
                  id="tokenCode"
                  type="text"
                  value={formData.tokenCode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      tokenCode: e.target.value
                        .toUpperCase()
                        .replace(/[^A-Z0-9]/g, ""),
                    })
                  }
                  placeholder="MYTOKEN"
                  disabled={state.loading}
                  required
                  maxLength={12}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tokenName">Token Name</Label>
                <Input
                  id="tokenName"
                  type="text"
                  value={formData.tokenName}
                  onChange={(e) =>
                    setFormData({ ...formData, tokenName: e.target.value })
                  }
                  placeholder="My Music Token"
                  disabled={state.loading}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalSupply">Total Supply</Label>
                <Input
                  id="totalSupply"
                  type="number"
                  value={formData.totalSupply}
                  onChange={(e) =>
                    setFormData({ ...formData, totalSupply: e.target.value })
                  }
                  placeholder="1000000"
                  disabled={state.loading}
                  required
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe your token..."
                  disabled={state.loading}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="platformFee">
                  Platform Fee: {formData.platformFee}%
                </Label>
                <Input
                  id="platformFee"
                  type="range"
                  min="0"
                  max="20"
                  value={formData.platformFee}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      platformFee: parseInt(e.target.value),
                    })
                  }
                  disabled={state.loading}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>You: {100 - formData.platformFee}%</span>
                  <span>Platform: {formData.platformFee}%</span>
                </div>
              </div>
            </form>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto text-primary" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Preparing Your Token</h3>
              <p className="text-sm text-muted-foreground">
                We're creating a distribution account and setting up your token...
              </p>
            </div>
            {state.distributionAccount && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm">
                    Distribution Account:{" "}
                    <span className="font-mono">
                      {state.distributionAccount.slice(0, 20)}...
                    </span>
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 text-center">
            <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Trustline Created</h3>
              <p className="text-sm text-muted-foreground">
                The trustline has been successfully created. You can now sign the
                emission transaction.
              </p>
            </div>
            {state.trustlineTxHash && (
              <Card>
                <CardContent className="pt-6">
                  <a
                    href={getStellarExplorerUrl(state.trustlineTxHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-mono"
                  >
                    View Transaction: {state.trustlineTxHash.slice(0, 8)}...
                  </a>
                </CardContent>
              </Card>
            )}
            <Button
              type="button"
              onClick={() => {
                void handleSignEmission();
              }}
              disabled={state.loading}
              className="w-full"
              size="lg"
            >
              {state.loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing...
                </>
              ) : (
                "Sign Emission Transaction"
              )}
            </Button>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4 text-center">
            <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Tokens Emitted Successfully</h3>
              <p className="text-sm text-muted-foreground">
                Your tokens have been successfully created and sent to the
                distribution account. Click below to distribute the platform fee
                to the treasury.
              </p>
            </div>
            {state.emissionTxHash && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Emission Transaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={getStellarExplorerUrl(state.emissionTxHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-mono break-all"
                  >
                    View on Stellar Explorer: {state.emissionTxHash.slice(0, 8)}
                    ...{state.emissionTxHash.slice(-8)}
                  </a>
                </CardContent>
              </Card>
            )}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-left">
                <strong>Next step:</strong> Distribution will send the platform
                fee to the treasury. Your share will remain in the distribution
                account.
              </AlertDescription>
            </Alert>
            <Button
              type="button"
              onClick={() => {
                void handleExecuteDistribution();
              }}
              disabled={state.loading}
              className="w-full"
              size="lg"
            >
              {state.loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Distributing...
                </>
              ) : (
                "Execute Distribution"
              )}
            </Button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4 text-center">
            <CheckCircle2 className="h-12 w-12 mx-auto text-green-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Distribution Complete</h3>
              <p className="text-sm text-muted-foreground">
                Your tokens have been distributed successfully! The platform fee
                has been sent to the treasury.
              </p>
            </div>
            {state.distributionTxHash && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Distribution Transaction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={getStellarExplorerUrl(state.distributionTxHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-mono break-all block"
                  >
                    View on Stellar Explorer:{" "}
                    {state.distributionTxHash.slice(0, 8)}...
                    {state.distributionTxHash.slice(-8)}
                  </a>
                  {state.tokenData && address && (
                    <a
                      href={`https://stellar.expert/explorer/${stellarNetwork === "PUBLIC" ? "public" : stellarNetwork === "FUTURENET" ? "futurenet" : "testnet"}/asset/${state.tokenData.tokenCode}-${address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline block"
                    >
                      View Asset Page
                    </a>
                  )}
                </CardContent>
              </Card>
            )}
            {state.artistAmount && state.platformAmount && state.tokenData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Distribution Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Platform Fee (sent to treasury):</span>
                    <strong className="text-sm">
                      {parseFloat(state.platformAmount).toLocaleString()}{" "}
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Your Share (in distribution account):</span>
                    <strong className="text-sm">
                      {parseFloat(state.artistAmount).toLocaleString()}{" "}
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <p className="text-xs text-muted-foreground italic mt-2">
                    Note: Your share remains in the distribution account. The
                    issuer cannot receive their own tokens in Stellar.
                  </p>
                </CardContent>
              </Card>
            )}
            <Button
              type="button"
              onClick={() => {
                goToStep(7);
                if (onSuccess) {
                  onSuccess();
                }
              }}
              className="w-full"
              size="lg"
            >
              Continue
            </Button>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4 text-center">
            <CheckCircle2 className="h-16 w-16 mx-auto text-green-500" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Token Created Successfully!</h3>
              <p className="text-sm text-muted-foreground">
                Your token has been created and distributed. You can now share it
                with your community.
              </p>
            </div>
            {state.tokenData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Token Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Token Code:</span>
                    <strong className="text-sm">{state.tokenData.tokenCode}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Token Name:</span>
                    <strong className="text-sm">{state.tokenData.tokenName}</strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Supply:</span>
                    <strong className="text-sm">
                      {parseFloat(state.tokenData.totalSupply).toLocaleString()}
                    </strong>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-left space-y-1 list-disc list-inside">
                  <li>Share your token code with your community</li>
                  <li>Set up your marketplace to sell tokens</li>
                  <li>Check the distribution on Stellar Explorer</li>
                </ul>
              </CardContent>
            </Card>
            <Button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="w-full"
              size="lg"
            >
              Done
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  if (!visible) {
    return null;
  }

  const canClose = !state.loading && state.step !== 7;
  const currentStepIndex = state.step - 1;
  const progressPercentage = (state.step / STEPS.length) * 100;

  return (
    <Dialog
      open={visible}
      onOpenChange={(open: boolean) => {
        if (!open && canClose) {
          handleClose();
        }
      }}
    >
      <DialogContent
        className="sm:max-w-2xl max-h-[90vh] overflow-y-auto"
        showCloseButton={canClose}
      >
        <DialogHeader>
          <DialogTitle>Create Your Token</DialogTitle>
          <DialogDescription>
            Follow the steps to create your Stellar token
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="space-y-2">
          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            {STEPS.map((step, index) => (
              <div
                key={step}
                className={`flex flex-col items-center gap-1 flex-1 ${
                  index < currentStepIndex
                    ? "text-primary"
                    : index === currentStepIndex
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                }`}
                title={step}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 ${
                    index < currentStepIndex
                      ? "bg-primary text-primary-foreground border-primary"
                      : index === currentStepIndex
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground bg-background"
                  }`}
                >
                  {index < currentStepIndex ? "✓" : index + 1}
                </div>
                <span className="text-xs text-center hidden sm:block truncate w-full">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {state.error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        {/* Step Content */}
        <div className="min-h-[200px] py-4">{renderStep()}</div>

        {/* Footer */}
        {state.step === 2 && (
          <DialogFooter>
            <Button
              type="submit"
              form="createTokenForm"
              disabled={
                !formData.tokenCode.trim() ||
                !formData.tokenName.trim() ||
                !formData.totalSupply.trim() ||
                state.loading
              }
            >
              {state.loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Token"
              )}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleClose}
              disabled={state.loading}
            >
              Cancel
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
