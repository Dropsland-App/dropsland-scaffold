import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CreationStage } from "@/hooks/useTokenCreation";
import { useWallet } from "@/hooks/useWallet";
import { connectWallet } from "@/util/wallet";
import {
  useCreateTokenForm,
  FEE_TIERS,
  FeeTierType,
} from "@/hooks/useCreateTokenForm";

const LoadingView = ({ stage }: { stage: CreationStage }) => {
  const messages = {
    PREPARING_ACCOUNT: "Setting up distribution account...",
    WAITING_FOR_SIGNATURE: "👉 Please sign in your wallet",
    SUBMITTING_TRANSACTION: "Minting tokens on-chain...",
    FINALIZING_DISTRIBUTION: "Finalizing marketplace setup...",
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-6">
      {stage === "WAITING_FOR_SIGNATURE" ? (
        <div className="text-5xl animate-bounce">🔐</div>
      ) : (
        <div className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">
          {stage === "WAITING_FOR_SIGNATURE"
            ? "Signature Required"
            : "Creating Token"}
        </h3>
        <p className="text-muted-foreground">
          {messages[stage as keyof typeof messages] || "Processing..."}
        </p>
      </div>
    </div>
  );
};

export const CreateTokenForm: React.FC<{
  visible: boolean;
  onClose: () => void;
}> = ({ visible, onClose }) => {
  const { address } = useWallet();
  const {
    formData,
    updateField,
    handleTokenCodeChange,
    selectedTier,
    setSelectedTier,
    handleSubmit,
    stage,
    error,
    result,
    reset,
  } = useCreateTokenForm(visible);

  const handleClose = () => {
    if (stage === "IDLE" || stage === "SUCCESS" || stage === "ERROR") onClose();
  };

  return (
    <Dialog open={visible} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        {stage === "SUCCESS" && (
          <div className="text-center py-6 space-y-6">
            <div className="text-6xl">🎉</div>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">
                Token Live!
              </DialogTitle>
            </DialogHeader>
            <p className="text-muted-foreground">
              Your token <strong>{result?.tokenCode}</strong> has been minted
              and distributed.
            </p>
            <Button onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        )}

        {stage !== "IDLE" && stage !== "SUCCESS" && stage !== "ERROR" && (
          <LoadingView stage={stage} />
        )}

        {stage === "ERROR" && (
          <div className="py-6 space-y-4">
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <Button onClick={reset} variant="outline" className="w-full">
              Try Again
            </Button>
          </div>
        )}

        {stage === "IDLE" && (
          <>
            <DialogHeader>
              <DialogTitle>Create Your Token</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Artist Name</Label>
                <div className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-foreground font-medium items-center">
                  {formData.artistName || "Loading..."}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Token Symbol</Label>
                  <Input
                    value={formData.tokenCode}
                    onChange={(e) => handleTokenCodeChange(e.target.value)}
                    placeholder="SOLAR"
                    maxLength={12}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Token Name</Label>
                  <Input
                    value={formData.tokenName}
                    onChange={(e) => updateField("tokenName", e.target.value)}
                    placeholder="Solar Energy"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  placeholder="Describe your token..."
                  rows={2}
                />
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4">
                {(Object.keys(FEE_TIERS) as FeeTierType[]).map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`p-2 border rounded-lg text-center text-xs transition-all ${
                      selectedTier === tier
                        ? FEE_TIERS[tier].selectedColor
                        : FEE_TIERS[tier].color
                    }`}
                  >
                    <div
                      className={`font-bold ${
                        selectedTier === tier
                          ? FEE_TIERS[tier].accentColor
                          : "text-foreground"
                      }`}
                    >
                      {tier}
                    </div>
                    <div>{FEE_TIERS[tier].platformFee}% Fee</div>
                  </button>
                ))}
              </div>
            </div>
            <DialogFooter>
              {!address ? (
                <Button onClick={() => void connectWallet()} className="w-full">
                  Connect Wallet
                </Button>
              ) : (
                <Button
                  onClick={() => void handleSubmit()}
                  className="w-full"
                  disabled={
                    !formData.artistName ||
                    !formData.tokenCode ||
                    !formData.tokenName
                  }
                >
                  Launch Token
                </Button>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
