import React from "react";

import { useWallet } from "../hooks/useWallet";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { connectWallet } from "../util/wallet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useOwnedNfts } from "../hooks/useOwnedNfts";
import { Wallet as WalletIcon, Loader2 } from "lucide-react";
import { PortfolioCard } from "../features/wallet/PortfolioCard";
import { AssetList } from "../features/wallet/components/AssetList";
import { CollectiblesSidebar } from "../features/wallet/components/CollectiblesSidebar";
import { ReceiveDialog } from "../features/wallet/components/ReceiveDialog";
import { SendDialog } from "../features/wallet/components/SendDialog";
import { toast } from "sonner";

const Wallet: React.FC = () => {
  const { address, isPending } = useWallet();
  const [isReceiveOpen, setIsReceiveOpen] = React.useState(false);
  const [isSendOpen, setIsSendOpen] = React.useState(false);
  const { xlm, balances, isLoading } = useWalletBalance();
  const {
    data: ownedCollections = [],
    isPending: ownedLoading,
    error: ownedError,
    refetch: refetchOwned,
  } = useOwnedNfts(address);

  const copyToClipboard = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      toast.success("Address copied to clipboard");
    }
  };

  const openExplorer = () => {
    if (address) {
      window.open(
        `https://stellar.expert/explorer/testnet/account/${address}`,
        "_blank",
      );
    }
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 py-10 pb-24 space-y-10">
      {/* 1. Header Section */}
      <section className="relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative space-y-2">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-primary/5 mb-2"
          >
            <WalletIcon className="w-3 h-3 mr-2" /> Manage Assets
          </Badge>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            Your Wallet
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Track your balance, manage your artist tokens, and view your
            collected NFTs all in one place.
          </p>
        </div>
      </section>

      {!address ? (
        // Disconnected State
        <div className="flex flex-col items-center justify-center py-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
            <WalletIcon className="w-8 h-8 text-white/50" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Connect to Dropsland
          </h2>
          <p className="text-muted-foreground max-w-md mb-8">
            Connect your Stellar wallet to view your balances and start
            collecting music assets.
          </p>
          <Button
            size="lg"
            onClick={() => void connectWallet()}
            disabled={isPending}
            className="font-bold px-8"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Connecting...
              </>
            ) : (
              "Connect Wallet"
            )}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 2. Main Portfolio Card (Left Column) */}
          <div className="lg:col-span-8 space-y-8">
            {/* The "Black Card" - Portfolio Overview */}
            <PortfolioCard
              balanceXlm={xlm}
              address={address || ""}
              isLoading={isLoading}
              onCopyAddress={copyToClipboard}
              onViewExplorer={openExplorer}
              onSend={() => setIsSendOpen(true)}
              onReceive={() => setIsReceiveOpen(true)}
            />

            {/* Token List */}
            <AssetList balances={balances} />
          </div>

          {/* 3. Sidebar - Collectibles / NFTs (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            <CollectiblesSidebar
              collections={ownedCollections}
              isLoading={ownedLoading}
              error={ownedError}
              onRetry={() => void refetchOwned()}
            />
          </div>
        </div>
      )}
      {address && (
        <>
          <ReceiveDialog
            address={address}
            open={isReceiveOpen}
            onOpenChange={setIsReceiveOpen}
          />
          <SendDialog open={isSendOpen} onOpenChange={setIsSendOpen} />
        </>
      )}
    </div>
  );
};

export default Wallet;
