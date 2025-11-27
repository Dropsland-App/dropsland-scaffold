import React, { useState } from "react";
import { BuyDialog } from "../components/BuyDialog";
import { RewardsDialog } from "../components/RewardsDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { TokenDisplay } from "../types/artistToken";
import { NftCard } from "../components/NftCard";
import { useExploreContent } from "../hooks/useExploreContent";

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
    // Only allow buying if both tokenSymbol and tokenIssuer are available
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
    <div className="container mx-auto space-y-8 px-4 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Discover & Collect
        </p>
        <h1 className="text-4xl font-bold text-white">Explore Dropsland</h1>
        <p className="max-w-2xl text-muted-foreground">
          Search rising DJs, discover social tokens, and scoop NFTs that unlock
          IRL moments. Everything is powered by Stellar smart contracts.
        </p>
      </section>

      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
          <div className="space-y-2">
            <label
              htmlFor="search"
              className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              Search the catalog
            </label>
            <Input
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artists, tokens, or NFTs..."
            />
          </div>
          <div className="flex flex-wrap gap-2 self-end">
            {filterTabs.map((tab) => (
              <Button
                key={tab.id}
                type="button"
                variant={filter === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(tab.id)}
                className="flex-1 min-w-[100px]"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Distributed Tokens
              </h2>
              <p className="text-sm text-muted-foreground">
                Tokenized collectives and DJs you can support right now.
                {tokensCount !== undefined && (
                  <span className="ml-2">
                    ({tokensCount} token{tokensCount !== 1 ? "s" : ""})
                  </span>
                )}
              </p>
            </div>
            {error && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  void refetch();
                }}
                className="text-xs"
              >
                Retry
              </Button>
            )}
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">Loading content...</p>
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4">
              <p className="text-sm text-red-400">
                Error loading tokens:{" "}
                {error instanceof Error ? error.message : "Unknown error"}
              </p>
            </div>
          )}

          {!isLoading && !error && displayedContent.length === 0 && (
            <div className="rounded-lg border border-border/60 bg-background/40 p-8 text-center">
              <p className="text-muted-foreground">
                {searchQuery
                  ? "No results match your search."
                  : "No items found."}
              </p>
            </div>
          )}

          {!isLoading && !error && displayedContent.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayedContent.map((item) => {
                if (item.type === "token") {
                  const token = item.data;
                  return (
                    <Card
                      key={`token-${token.id}`}
                      className="border-border/60 bg-linear-to-r from-background/80 to-background/40 h-full"
                    >
                      <CardContent className="flex flex-col gap-6 py-6 h-full">
                        <div className="flex items-center gap-4">
                          <div className="flex size-14 items-center justify-center rounded-full border border-border/60 bg-background/60 text-lg font-semibold text-amber-200 shrink-0">
                            {token.avatar ? (
                              <img
                                src={token.avatar}
                                alt={token.name}
                                className="size-full rounded-full object-cover"
                              />
                            ) : (
                              token.name.charAt(0).toUpperCase()
                            )}
                          </div>
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <CardTitle className="text-lg text-white truncate">
                                {token.name}
                              </CardTitle>
                              {token.isFeatured && (
                                <Badge
                                  variant="secondary"
                                  className="uppercase tracking-wide text-[10px]"
                                >
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="truncate">
                              @{token.handle}
                            </CardDescription>
                          </div>
                        </div>

                        <div className="space-y-4 flex-1 flex flex-col">
                          {token.description && (
                            <p className="text-sm text-muted-foreground line-clamp-2 h-10">
                              {token.description}
                            </p>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {token.genres.slice(0, 3).map((genre) => (
                              <Badge key={genre} variant="outline">
                                {genre}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex justify-between items-end pt-2 mt-auto">
                            <div>
                              <p className="text-sm font-medium text-white">
                                {token.tokenSymbol}
                              </p>
                              {token.totalSupply && (
                                <p className="text-xs text-muted-foreground">
                                  Supply:{" "}
                                  {Number(token.totalSupply).toLocaleString()}
                                </p>
                              )}
                            </div>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => handleBuyClick(token)}
                                size="sm"
                                disabled={
                                  !token.tokenSymbol || !token.tokenIssuer
                                }
                              >
                                💰 Buy
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => handleRewardsClick(token)}
                                disabled={!token.tokenIssuer}
                              >
                                🎁 Rewards
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                } else {
                  const reward = item.data;
                  return (
                    <NftCard
                      key={`nft-${reward.id}`}
                      reward={reward}
                      onAction={(r) => {
                        console.log("View NFT:", r.id);
                      }}
                    />
                  );
                }
              })}
            </div>
          )}
        </div>
      </section>

      {/* Buy Dialog - only show if tokenSymbol and tokenIssuer are available */}
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
            if (!open) {
              setRewardDialogArtist(null);
            }
          }}
        />
      )}
    </div>
  );
};

export default Explore;
