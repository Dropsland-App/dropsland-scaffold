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
import { useProfile } from "../hooks/useProfile";

interface CreateTokenFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (tokenName: string, symbol: string) => void | Promise<void>;
  onSuccess?: () => void;
}

// Fee Tiers
const FEE_TIERS = {
  BASIC: {
    name: "BASIC",
    platformFee: 5,
    description: "Standard tier for starting artists",
    color: "border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50",
    selectedColor: "border-blue-500 bg-blue-950/50 ring-2 ring-blue-500/50",
    accentColor: "text-blue-400",
    recommended: false,
  },
  PREMIUM: {
    name: "PREMIUM",
    platformFee: 10,
    description: "Popular choice with balanced fees",
    color: "border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50",
    selectedColor:
      "border-purple-500 bg-purple-950/50 ring-2 ring-purple-500/50",
    accentColor: "text-purple-400",
    recommended: true,
  },
  VIP: {
    name: "VIP",
    platformFee: 15,
    description: "Premium support and features",
    color: "border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50",
    selectedColor: "border-amber-500 bg-amber-950/50 ring-2 ring-amber-500/50",
    accentColor: "text-amber-400",
    recommended: false,
  },
} as const;

type FeeTierType = keyof typeof FEE_TIERS;

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

  const { profile, isLoading: profileLoading } = useProfile();

  const [formData, setFormData] = useState<TokenCreationFormData>({
    artistName: "",
    tokenCode: "",
    tokenName: "",
    totalSupply: "1000000000", // Fixed at 1 billion
    description: "",
    platformFee: 10,
  });

  const [selectedTier, setSelectedTier] = useState<FeeTierType>("PREMIUM");

  // Sync tier selection with formData platformFee
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      platformFee: FEE_TIERS[selectedTier].platformFee,
    }));
  }, [selectedTier]);

  // Pre-fill artist name when profile loads
  useEffect(() => {
    if (profile?.username) {
      setFormData((prev) => ({ ...prev, artistName: profile.username }));
    }
  }, [profile]);

  // Reset form when modal closes
  useEffect(() => {
    if (!visible) {
      reset();
      setFormData({
        artistName: "",
        tokenCode: "",
        tokenName: "",
        totalSupply: "1000000000", // Fixed at 1 billion
        description: "",
        platformFee: 10,
      });
      setSelectedTier("PREMIUM");
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

  const handleFormSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    console.log("handleFormSubmit called", {
      formData,
      loading: state.loading,
    });

    if (!checkWalletConnection()) {
      console.log("Wallet not connected");
      return;
    }

    // Use profile name directly as fallback
    const effectiveArtistName = formData.artistName || profile?.username || "";

    // Validate form
    if (
      !effectiveArtistName.trim() ||
      !formData.tokenCode.trim() ||
      !formData.tokenName.trim()
    ) {
      setError("Please fill in all required fields");
      console.log("Validation failed: missing fields");
      return;
    }

    if (formData.tokenCode.length > 12) {
      setError("Token code must be 12 characters or less");
      console.log("Validation failed: token code too long");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(formData.tokenCode)) {
      setError("Token code can only contain letters and numbers");
      console.log("Validation failed: invalid token code format");
      return;
    }

    console.log("All validations passed, calling handlePrepareToken");
    // handlePrepareToken will set loading and move to step 3
    await handlePrepareToken({
      ...formData,
      artistName: effectiveArtistName,
    });
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
                Connect your Stellar wallet to create your token. You will be
                the issuer and have full control.
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
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
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
            {state.loading ? (
              <div className="space-y-4 text-center">
                <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Creating Your Token</h3>
                  <p className="text-sm text-muted-foreground">
                    {state.loadingMessage ||
                      "Please wait while we prepare your token..."}
                  </p>
                </div>
              </div>
            ) : profileLoading ? (
              <div className="text-center py-4">Loading profile...</div>
            ) : (
              <>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Create Your Token</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in the details for your token. You can customize the
                    name, symbol, and supply.
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
                    e.preventDefault();
                    void handleFormSubmit(e);
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="artistName">Artist / DJ Name</Label>
                    <Input
                      id="artistName"
                      type="text"
                      value={formData.artistName || profile?.username || ""}
                      disabled={true}
                      className="bg-muted text-muted-foreground"
                      readOnly
                    />
                  </div>

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
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe your token..."
                      disabled={state.loading}
                      rows={3}
                    />
                  </div>

                  {/* Total supply is fixed at 1 billion */}
                  <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Total Supply:
                      </span>
                      <strong className="text-sm font-mono">
                        1,000,000,000
                      </strong>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fixed supply for all tokens
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Select Fee Tier
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(Object.keys(FEE_TIERS) as FeeTierType[]).map((tier) => {
                        const tierData = FEE_TIERS[tier];
                        const isSelected = selectedTier === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSelectedTier(tier)}
                            disabled={state.loading}
                            className={`relative p-5 border rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm ${
                              isSelected
                                ? tierData.selectedColor
                                : tierData.color
                            }`}
                          >
                            {tierData.recommended && (
                              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                            <div className="text-center space-y-3">
                              <h4
                                className={`font-semibold text-base uppercase tracking-wide ${isSelected ? tierData.accentColor : "text-foreground"}`}
                              >
                                {tierData.name}
                              </h4>
                              <div
                                className={`text-3xl font-bold ${isSelected ? tierData.accentColor : "text-foreground"}`}
                              >
                                {tierData.platformFee}%
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {tierData.description}
                              </p>
                              <div className="pt-3 border-t border-border/50 text-xs space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">
                                    You receive:
                                  </span>
                                  <strong
                                    className={
                                      isSelected
                                        ? tierData.accentColor
                                        : "text-foreground"
                                    }
                                  >
                                    {100 - tierData.platformFee}%
                                  </strong>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">
                                    Platform fee:
                                  </span>
                                  <strong className="text-muted-foreground">
                                    {tierData.platformFee}%
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="text-xs text-center text-muted-foreground bg-muted/30 rounded-lg p-3">
                      <span className="opacity-70">Selected: </span>
                      <strong className={FEE_TIERS[selectedTier].accentColor}>
                        {FEE_TIERS[selectedTier].name}
                      </strong>
                      <span className="opacity-70"> tier • You receive </span>
                      <strong className="text-foreground">
                        {100 - formData.platformFee}%
                      </strong>
                      <span className="opacity-70"> • Platform fee </span>
                      <strong className="text-foreground">
                        {formData.platformFee}%
                      </strong>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 text-center">
            <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Preparing Your Token</h3>
              <p className="text-sm text-muted-foreground">
                {state.loadingMessage ||
                  "We're creating a distribution account and setting up your token..."}
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
            {state.loading ? (
              <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="h-12 w-12 mx-auto text-green-500 flex items-center justify-center">
                <div className="text-4xl">✓</div>
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {state.loading ? "Processing..." : "Trustline Created"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {state.loading
                  ? state.loadingMessage ||
                    "Please wait while we process your request..."
                  : "The trustline has been successfully created. You can now sign the emission transaction."}
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
            {!state.loading && (
              <Button
                type="button"
                onClick={() => {
                  void handleSignEmission();
                }}
                disabled={state.loading}
                className="w-full"
                size="lg"
              >
                Sign Emission Transaction
              </Button>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4 text-center">
            {state.loading ? (
              <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="h-12 w-12 mx-auto text-green-500 flex items-center justify-center">
                <div className="text-4xl">✓</div>
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {state.loading
                  ? "Processing..."
                  : "Tokens Emitted Successfully"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {state.loading
                  ? state.loadingMessage ||
                    "Please wait while we process your request..."
                  : "Your tokens have been successfully created and sent to the distribution account. Click below to distribute the platform fee to the treasury."}
              </p>
            </div>
            {state.emissionTxHash && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Emission Transaction
                  </CardTitle>
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
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {state.loadingMessage || "Executing Distribution..."}
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
            <div className="h-12 w-12 mx-auto text-green-500 flex items-center justify-center">
              <div className="text-4xl">✓</div>
            </div>
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
                  <CardTitle className="text-sm">
                    Distribution Transaction
                  </CardTitle>
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
                  <CardTitle className="text-sm">
                    Distribution Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Platform Fee (sent to treasury):
                    </span>
                    <strong className="text-sm">
                      {parseFloat(state.platformAmount).toLocaleString()}{" "}
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Your Share (in distribution account):
                    </span>
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
            <div className="h-16 w-16 mx-auto text-green-500 flex items-center justify-center">
              <div className="text-5xl">✓</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Token Created Successfully!
              </h3>
              <p className="text-sm text-muted-foreground">
                Your token has been created and distributed. You can now share
                it with your community.
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
                    <strong className="text-sm">
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Token Name:</span>
                    <strong className="text-sm">
                      {state.tokenData.tokenName}
                    </strong>
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
              onClick={(e) => {
                e.preventDefault();
                console.log("Create Token button clicked", {
                  formData,
                  loading: state.loading,
                });
                // Set loading immediately for visual feedback
                if (!state.loading) {
                  // This will be set by handlePrepareToken, but we want immediate feedback
                  console.log("Triggering form submit");
                }
                void handleFormSubmit();
              }}
              disabled={
                !formData.tokenCode.trim() ||
                !formData.tokenName.trim() ||
                state.loading
              }
            >
              {state.loading ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {state.loadingMessage || "Creating..."}
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
