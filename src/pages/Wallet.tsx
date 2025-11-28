import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useWallet } from "../hooks/useWallet";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { connectWallet, type Balance } from "../util/wallet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useOwnedNfts } from "../hooks/useOwnedNfts";
import {
  Wallet as WalletIcon,
  Copy,
  ExternalLink,
  Layers,
  CreditCard,
  Loader2,
  TrendingUp,
  QrCode,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";

const isCreditAsset = (
  balance: Balance,
): balance is Balance & { asset_code: string; asset_issuer: string } => {
  return (
    balance.asset_type !== "native" &&
    balance.asset_type !== "liquidity_pool_shares" &&
    "asset_code" in balance &&
    "asset_issuer" in balance
  );
};

const Wallet: React.FC = () => {
  const { address, isPending } = useWallet();
  const { xlm, balances, isLoading } = useWalletBalance();
  const {
    data: ownedCollections = [],
    isPending: ownedLoading,
    error: ownedError,
    refetch: refetchOwned,
  } = useOwnedNfts(address);

  const creditBalances = balances.filter(isCreditAsset);

  const formatAddress = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

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
                          xlm
                        )}
                      </h2>
                      <span className="text-xl font-medium text-primary">
                        XLM
                      </span>
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
                      onClick={copyToClipboard}
                      title="Copy Address"
                    >
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full hover:bg-white/10"
                      onClick={openExplorer}
                      title="View on Explorer"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                  <Button className="flex-1 md:flex-none bg-white text-black hover:bg-white/90 font-semibold">
                    <ArrowUpRight className="w-4 h-4 mr-2" /> Send
                  </Button>
                  <Button
                    variant="secondary"
                    className="flex-1 md:flex-none bg-white/10 hover:bg-white/20 border-white/5 text-white"
                  >
                    <QrCode className="w-4 h-4 mr-2" /> Receive
                  </Button>
                </div>
              </div>
            </div>

            {/* Token List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" /> Assets
              </h3>

              <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md overflow-hidden">
                {creditBalances.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">
                      No assets found. Start your collection by supporting an
                      artist!
                    </p>
                    <Button
                      variant="link"
                      className="text-primary mt-2"
                      onClick={() => (window.location.href = "/explore")}
                    >
                      Explore Marketplace
                    </Button>
                  </div>
                ) : (
                  <div className="divide-y divide-white/5">
                    {creditBalances.map((balance) => (
                      <div
                        key={`${balance.asset_code}-${balance.asset_issuer}`}
                        className="group flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-default"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10 border border-white/10 bg-white/5">
                            <AvatarImage
                              src={`https://api.dicebear.com/7.x/shapes/svg?seed=${balance.asset_code}`}
                              className="object-cover"
                            />
                            <AvatarFallback className="text-xs font-bold bg-primary/10 text-primary">
                              {balance.asset_code[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-bold text-white group-hover:text-primary transition-colors">
                              {balance.asset_code}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono">
                              Issuer: {formatAddress(balance.asset_issuer)}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-mono font-medium text-white">
                            {balance.balance}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Tokens
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. Sidebar - Collectibles / NFTs (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" /> Collectibles
              </h3>
              {ownedCollections.length > 0 && (
                <Badge
                  variant="secondary"
                  className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
                >
                  {ownedCollections.length} Items
                </Badge>
              )}
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0b1020]/50 p-4 min-h-[300px]">
              {ownedLoading ? (
                <div className="flex flex-col items-center justify-center h-full gap-2 py-10">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    Syncing collectibles...
                  </p>
                </div>
              ) : ownedError ? (
                <div className="text-center py-8">
                  <p className="text-sm text-red-400 mb-2">
                    Failed to load NFTs
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => void refetchOwned()}
                  >
                    Retry
                  </Button>
                </div>
              ) : ownedCollections.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                    <Layers className="w-6 h-6 text-white/20" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-white">
                      No collectibles yet
                    </p>
                    <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">
                      Claim rewards from artists to build your collection.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {ownedCollections.map((collection) => (
                    <div
                      key={collection.contractId}
                      className="group relative aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 p-3 flex flex-col justify-between hover:border-purple-500/30 transition-all cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                      <div className="relative z-10 flex justify-end">
                        <Badge className="bg-black/40 backdrop-blur-md text-[10px] h-5 px-1.5">
                          x{collection.tokenIds.length}
                        </Badge>
                      </div>

                      <div className="relative z-10">
                        <p className="text-xs font-bold text-white truncate group-hover:text-purple-300 transition-colors">
                          {formatAddress(collection.contractId)}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          Collection
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Tip Box */}
            <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
              <div className="flex gap-3">
                <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-blue-100">
                    Did you know?
                  </p>
                  <p className="text-xs text-blue-200/70 leading-relaxed">
                    Holding artist tokens often grants you voting rights on
                    their next release. Check the "Explore" tab to find new
                    DAOs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wallet;
