import React, { useState } from "react";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Send } from "lucide-react";
import { useWallet } from "@/hooks/useWallet";
import { supabase } from "@/util/supabase";
import { toast } from "sonner";
import {
  TransactionBuilder,
  Operation,
  Asset,
  Horizon,
  BASE_FEE,
} from "@stellar/stellar-sdk";
import { network as networkConfig } from "@/contracts/util";

interface SendDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SendDialog: React.FC<SendDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const { address, signTransaction } = useWallet();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !signTransaction) return;

    setError(null);
    setIsLoading(true);

    // Validate recipient address format
    if (!/^G[A-Z0-9]{55}$/.test(recipient.trim())) {
      setError("Invalid recipient address format");
      setIsLoading(false);
      return;
    }

    // Validate recipient is not the same as sender
    if (recipient.trim() === address) {
      setError("Cannot send to your own address");
      setIsLoading(false);
      return;
    }

    // Validate amount
    const trimmedAmount = amount.trim();
    if (!trimmedAmount) {
      setError("Amount is required");
      setIsLoading(false);
      return;
    }
    
    const parsedAmount = Number(trimmedAmount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setError("Amount must be a valid number greater than zero");
      setIsLoading(false);
      return;
    }

    try {
      // 1. Setup Horizon Server
      const server = new Horizon.Server(networkConfig.horizonUrl);

      // 2. Load Sender Account
      const sourceAccount = await server.loadAccount(address);

      // 3. Build Transaction
      const transaction = new TransactionBuilder(sourceAccount, {
        fee: BASE_FEE,
        networkPassphrase: networkConfig.passphrase,
      })
        .addOperation(
          Operation.payment({
            destination: recipient.trim(),
            asset: Asset.native(), // Sending XLM
            amount: trimmedAmount,
          }),
        )
        .setTimeout(30)
        .build();

      // 4. Sign Transaction (Wallet Interaction)
      const { signedTxXdr } = await signTransaction(transaction.toXDR(), {
        networkPassphrase: networkConfig.passphrase,
      });

      if (!signedTxXdr) {
        throw new Error("Transaction signature rejected");
      }

      // 5. Submit Transaction
      // We reconstruct the transaction from the signed XDR to submit it
      const txToSubmit = TransactionBuilder.fromXDR(
        signedTxXdr,
        networkConfig.passphrase,
      );

      const result = await server.submitTransaction(txToSubmit);
      console.log("Send success:", result);

      // --- START FIX: Record Activity ---
      if (result.hash) {
        await supabase.from("token_transactions").insert({
          tx_hash: result.hash,
          tx_type: "payment",
          from_address: address,
          to_address: recipient.trim(),
          amount: trimmedAmount,
          // token_id is NULL because this is an XLM transfer
        });
      }
      // --- END FIX ---

      toast.success("Sent successfully!", {
        description: `${trimmedAmount} XLM sent to ${recipient.trim().slice(0, 4)}...${recipient.trim().slice(-4)}`,
      });

      // Cleanup & Close
      setRecipient("");
      setAmount("");
      onOpenChange(false);
    } catch (err) {
      console.error(err);
      let errorMessage = "Failed to send transaction.";

      if (err instanceof Error) {
        // Handle specific Horizon errors if possible
        // @ts-expect-error - checking for horizon error response structure
        if (err.response?.data?.extras?.result_codes?.operations) {
          // @ts-expect-error - accessing nested error code
          errorMessage = `Error: ${err.response.data.extras.result_codes.operations[0]}`;
        } else {
          errorMessage = err.message;
        }
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Send XLM</DialogTitle>
        </DialogHeader>

        <form onSubmit={(e) => void handleSend(e)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="recipient">Recipient Address</Label>
            <Input
              id="recipient"
              placeholder="G..."
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (XLM)</Label>
            <Input
              id="amount"
              type="number"
              step="0.0000001"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading || !recipient || !amount}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Transaction
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
