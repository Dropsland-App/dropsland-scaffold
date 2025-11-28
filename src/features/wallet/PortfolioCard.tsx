import { Button } from "@/components/ui/button";
import { Copy, ExternalLink, ArrowUpRight, QrCode } from "lucide-react";

interface PortfolioCardProps {
  balanceXlm: string;
  address: string;
  isLoading: boolean;
  onCopyAddress: () => void;
  onViewExplorer: () => void;
  onSend?: () => void;
  onReceive?: () => void;
}

export const PortfolioCard = ({
  balanceXlm,
  address,
  isLoading,
  onCopyAddress,
  onViewExplorer,
  onSend,
  onReceive,
}: PortfolioCardProps) => {
  const formatAddress = (addr: string) =>
    addr ? `${addr.slice(0, 4)}...${addr.slice(-4)}` : "";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1f2e] to-[#0b1020] p-8 shadow-2xl">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">
              Total Balance
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-5xl font-bold text-white tracking-tight">
                {isLoading ? (
                  <span className="animate-pulse opacity-50">...</span>
                ) : (
                  balanceXlm
                )}
              </h2>
              <span className="text-xl font-medium text-primary">XLM</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">
                {formatAddress(address)}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-white/10"
              onClick={onCopyAddress}
              title="Copy Address"
            >
              <Copy className="w-3.5 h-3.5 text-muted-foreground" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full hover:bg-white/10"
              onClick={onViewExplorer}
              title="View on Explorer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <Button
            className="flex-1 md:flex-none bg-white text-black hover:bg-white/90 font-semibold"
            onClick={onSend}
          >
            <ArrowUpRight className="w-4 h-4 mr-2" /> Send
          </Button>
          <Button
            variant="secondary"
            className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 border-white/5 text-white"
            onClick={onReceive}
          >
            <QrCode className="w-4 h-4 mr-2" /> Receive
          </Button>
        </div>
      </div>
    </div>
  );
};
