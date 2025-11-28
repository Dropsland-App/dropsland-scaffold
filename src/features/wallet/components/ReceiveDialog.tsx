import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface ReceiveDialogProps {
  address: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ReceiveDialog: React.FC<ReceiveDialogProps> = ({
  address,
  open,
  onOpenChange,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    toast.success("Address copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Receive Assets
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-6 py-4">
          {/* QR Code Container - White background for scanning contrast */}
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&data=${address}`}
              alt="Wallet Address QR"
              className="w-48 h-48 object-contain"
              loading="lazy"
            />
          </div>

          <div className="space-y-2 w-full">
            <p className="text-xs font-medium text-center text-muted-foreground uppercase tracking-wider">
              Your Stellar Address
            </p>
            <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg border border-white/10 group hover:border-primary/30 transition-colors">
              <code className="flex-1 text-xs break-all font-mono text-foreground/90">
                {address}
              </code>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 shrink-0 hover:bg-white/10"
                onClick={copyToClipboard}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                )}
              </Button>
            </div>
          </div>

          <p className="text-[10px] text-center text-muted-foreground/60 max-w-[80%]">
            Send only Stellar (XLM) or Soroban tokens to this address. Sending
            other assets may result in permanent loss.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
