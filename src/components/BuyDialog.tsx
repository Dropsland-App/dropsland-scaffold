import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Alert, AlertDescription } from "./ui/alert";
import { ArrowDown, Loader2 } from "lucide-react";
import { useBuyFlow } from "../hooks/useBuyFlow";
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
    amount,
    setAmount,
    isSubmitting,
    checkingTrustline,
    isSuccess,
    error,
    transactionUrl,
    executePurchase,
  } = useBuyFlow(visible, tokenIssuer, tokenSymbol);

  const handleClose = () => {
    if (!isSubmitting && !isSuccess) {
      onClose();
    }
  };

  const isLoading = isSubmitting || checkingTrustline;

  return (
    <Dialog open={visible} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[400px] p-6 gap-6">
        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 text-center py-6">
            <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400">
              <div className="text-4xl">✓</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Purchase successful!
              </h3>
              <p className="text-sm text-muted-foreground">
                You've purchased {amount} {tokenSymbol}
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
            <DialogHeader className="text-left space-y-2">
              <DialogTitle className="text-xl">Buy {tokenSymbol}</DialogTitle>
              <DialogDescription>
                Enter the amount of XLM you want to spend.
              </DialogDescription>
            </DialogHeader>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                void executePurchase();
              }}
              className="space-y-6"
            >
              <div className="space-y-4">
                {/* Pay Input */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    You Pay
                  </Label>
                  <div className="relative">
                    <Input
                      type="number"
                      step="0.0000001"
                      min="0"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      placeholder="0.00"
                      className="pr-16 text-lg h-12 bg-background/50"
                      disabled={isLoading || !address}
                      autoFocus
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center gap-2 pointer-events-none">
                      <span className="text-sm font-bold">XLM</span>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-background rounded-full p-1 border border-border">
                    <ArrowDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Receive Display (Read Only) */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    You Receive
                  </Label>
                  <div className="relative">
                    <div className="flex items-center h-12 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-lg text-muted-foreground">
                      {amount || "0.00"}
                    </div>
                    <div className="absolute inset-y-0 right-3 flex items-center gap-2 pointer-events-none">
                      <span className="text-sm font-bold">{tokenSymbol}</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-right text-muted-foreground">
                    Rate: 1 XLM = 1 {tokenSymbol}
                  </p>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {checkingTrustline && (
                <Alert className="bg-amber-500/10 border-amber-500/20 text-amber-500">
                  <AlertDescription className="flex items-center gap-2 text-xs">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Checking trustline status...
                  </AlertDescription>
                </Alert>
              )}

              <DialogFooter>
                <Button
                  type="submit"
                  disabled={
                    !amount || parseFloat(amount) <= 0 || isLoading || !address
                  }
                  className="w-full h-11 text-base font-semibold"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {checkingTrustline ? "Verifying..." : "Processing..."}
                    </span>
                  ) : (
                    `Buy ${tokenSymbol}`
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
