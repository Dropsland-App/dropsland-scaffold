import React, { useState } from "react";
import { BuyDialog } from "../features/tokens/components/BuyDialog";
import { RewardsDialog } from "../components/RewardsDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Sparkles, TrendingUp, Gift } from "lucide-react"; // Added icons
import type { TokenDisplay } from "../types/artistToken";
import { NftCard } from "@/features/nfts/components/NftCard";
import { useExploreContent } from "../hooks/useExploreContent";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const filterTabs: Array<{
  id: "artists" | "tokens" | "nfts";
  label: string;
}> = [
  { id: "artists", label: "Artists" },
  { id: "tokens", label: "Tokens" },
  { id: "nfts", label: "NFTs" },
];

const Explore: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    filter,
    setFilter,
    displayedContent,
    isLoading,
    error,
    refetch,
    tokensCount,
  } = useExploreContent();

  const [selectedToken, setSelectedToken] = useState<TokenDisplay | null>(null);
  const [isBuyDialogOpen, setIsBuyDialogOpen] = useState(false);
  const [rewardDialogArtist, setRewardDialogArtist] =
    useState<TokenDisplay | null>(null);
  const [isRewardsDialogOpen, setIsRewardsDialogOpen] = useState(false);

  const handleBuyClick = (token: TokenDisplay) => {
    if (token.tokenSymbol && token.tokenIssuer) {
      setSelectedToken(token);
      setIsBuyDialogOpen(true);
    }
  };

  const handleRewardsClick = (token: TokenDisplay) => {
    if (!token.tokenIssuer) return;
    setRewardDialogArtist(token);
    setIsRewardsDialogOpen(true);
  };

  return (
    <div className="container mx-auto space-y-10 px-4 py-10 pb-24">
      {/* Header Section */}
      <section className="relative space-y-4 text-center md:text-left">
        {/* Background decorative glow */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5"
          >
            <Sparkles className="w-3 h-3 mr-2" /> Discover & Collect
          </Badge>
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Explore Dropsland
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:mx-0">
            Search rising DJs, discover social tokens, and scoop NFTs that
            unlock IRL moments. Powered by Stellar.
          </p>
        </div>
      </section>

      {/* Unified Control Bar (Search + Filters) */}
      {/* FIXED: Unified Control Bar - Removed outer border and background wrapper */}
      <section className="sticky top-20 z-20">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artists, tokens, or NFTs..."
              className="pl-11 h-12 bg-[#0b1020]/90 backdrop-blur-xl border-white/10 focus-visible:border-primary/50 text-base shadow-xl rounded-xl"
            />
          </div>

          <div className="flex bg-[#0b1020]/90 backdrop-blur-xl border border-white/10 rounded-xl p-1 gap-1 shadow-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`
                  px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    filter === tab.id
                      ? "bg-primary text-black shadow-lg"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h2 className="text-xl font-bold text-white">Distributed Tokens</h2>
            {tokensCount !== undefined && (
              <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-0.5 rounded-full">
                {tokensCount}
              </span>
            )}
          </div>
          {error && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => void refetch()}
              className="text-red-400 hover:text-red-300"
            >
              Connection Error. Retry?
            </Button>
          )}
        </div>

        {isLoading && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[300px] rounded-2xl bg-white/5 animate-pulse border border-white/5"
              />
            ))}
          </div>
        )}

        {!isLoading && !error && displayedContent.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
            {displayedContent.map((item) => {
              if (item.type === "token") {
                const token = item.data;

                return (
                  <div
                    key={`token-${token.id}`}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-b from-[#151a2a] to-[#0b1020] border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5 h-full"
                  >
                    {/* Header: Identity */}
                    <div className="p-6 relative z-10 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        {/* FIXED: Removed heavy gradient, added subtle scale effect */}
                        <div className="relative">
                          <Avatar className="relative w-16 h-16 border-4 border-[#0b1020] shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/20">
                            <AvatarImage
                              src={token.avatar}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-primary/10 text-primary font-bold">
                              {token.name[0]}
                            </AvatarFallback>
                          </Avatar>
                        </div>

                        {/* Tags */}
                        <div className="flex gap-1 flex-wrap justify-end max-w-[50%]">
                          {token.genres.slice(0, 1).map((g) => (
                            <Badge
                              key={g}
                              variant="secondary"
                              className="bg-white/5 hover:bg-white/10 text-[10px] uppercase tracking-wider"
                            >
                              {g}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Artist & Ticker */}
                      <div className="space-y-1">
                        <h3 className="font-bold text-white text-lg truncate pr-2 group-hover:text-primary transition-colors">
                          {token.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-muted-foreground truncate">
                            @{token.handle}
                          </p>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <p className="font-mono text-xs font-bold text-primary">
                            ${token.tokenSymbol}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Stats & Actions */}
                    <div className="p-4 bg-black/20 border-t border-white/5 backdrop-blur-sm mt-auto">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleBuyClick(token)}
                          className="flex-1 font-bold shadow-lg shadow-primary/10 hover:shadow-primary/20"
                          disabled={!token.tokenSymbol || !token.tokenIssuer}
                        >
                          Buy ${token.tokenSymbol}
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          onClick={() => handleRewardsClick(token)}
                          disabled={!token.tokenIssuer}
                          className="bg-white/5 hover:bg-white/10 border border-white/5"
                          title="View Rewards"
                        >
                          <Gift className="w-4 h-4" />
                        </Button>
                      </div>

                      {token.totalSupply && (
                        <div className="mt-3 text-center">
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                            Supply: {Number(token.totalSupply).toLocaleString()}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={`nft-${item.data.id}`} className="h-full">
                    <NftCard
                      reward={item.data}
                      onAction={() => console.log("View NFT")}
                      className="h-full"
                    />
                  </div>
                );
              }
            })}
          </div>
        )}

        {!isLoading && !error && displayedContent.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <Filter className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
            <p className="text-muted-foreground font-medium">
              {searchQuery
                ? `No results for "${searchQuery}"`
                : "No items found."}
            </p>
            <Button
              variant="link"
              onClick={() => setSearchQuery("")}
              className="mt-2 text-primary"
            >
              Clear filters
            </Button>
          </div>
        )}
      </section>

      {/* Global Modals */}
      {selectedToken &&
        selectedToken.tokenSymbol &&
        selectedToken.tokenIssuer && (
          <BuyDialog
            visible={isBuyDialogOpen}
            onClose={() => {
              setIsBuyDialogOpen(false);
              setSelectedToken(null);
            }}
            tokenSymbol={selectedToken.tokenSymbol}
            tokenIssuer={selectedToken.tokenIssuer}
          />
        )}

      {rewardDialogArtist && (
        <RewardsDialog
          artist={rewardDialogArtist}
          open={isRewardsDialogOpen}
          onOpenChange={(open) => {
            setIsRewardsDialogOpen(open);
            if (!open) setRewardDialogArtist(null);
          }}
        />
      )}
    </div>
  );
};

export default Explore;
