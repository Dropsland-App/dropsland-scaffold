import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
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
import { listDistributedTokens } from "../services/artistTokens";
import { fetchRewards } from "../services/rewards";
import type { ArtistToken, TokenDisplay } from "../types/artistToken";
import type { Reward } from "../types/reward";
import { NftCard } from "../components/NftCard";

const filterTabs: Array<{
  id: "artists" | "tokens" | "nfts";
  label: string;
}> = [
  { id: "artists", label: "Artists" },
  { id: "tokens", label: "Tokens" },
  { id: "nfts", label: "NFTs" },
];

type DisplayItem =
  | { type: "token"; data: TokenDisplay }
  | { type: "nft"; data: Reward };

// ... (transformTokenToDisplay function remains the same) ...
const transformTokenToDisplay = (token: ArtistToken): TokenDisplay => {
  // Extract handle from artist_name or use a shortened version of the public key
  const handle =
    token.artist_name?.toLowerCase().replace(/\s+/g, "") ||
    `${token.artist_public_key.slice(0, 8)}...${token.artist_public_key.slice(-4)}`;

  // Extract genres from metadata tags or use a default
  const genres =
    token.metadata?.tags && token.metadata.tags.length > 0
      ? token.metadata.tags
      : token.metadata?.category
        ? [token.metadata.category]
        : ["Music"];

  return {
    id: token.id,
    name: token.artist_name || "Unknown Artist",
    handle: handle,
    avatar: token.image_url || undefined,
    genres: genres,
    isFeatured: false, // Can be enhanced later with a featured flag
    tokenSymbol: token.token_code,
    tokenIssuer: token.artist_public_key,
    description: token.description || undefined,
    imageUrl: token.image_url || undefined,
    totalSupply: token.total_supply,
    distributedAt: token.distributed_at || undefined,
  };
};

const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"artists" | "tokens" | "nfts">("tokens");
  const [selectedToken, setSelectedToken] = useState<TokenDisplay | null>(null);
  const [isBuyDialogOpen, setIsBuyDialogOpen] = useState(false);
  const [rewardDialogArtist, setRewardDialogArtist] =
    useState<TokenDisplay | null>(null);
  const [isRewardsDialogOpen, setIsRewardsDialogOpen] = useState(false);

  // Fetch distributed tokens using React Query
  const {
    data: tokensData,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["distributedTokens"],
    queryFn: () => listDistributedTokens(100, 0),
    refetchOnWindowFocus: false,
    retry: 2,
  });

  // Fetch rewards (NFTs)
  const { data: rewards = [], isLoading: rewardsLoading } = useQuery<Reward[]>({
    queryKey: ["allRewards"],

    queryFn: () => fetchRewards({ activeOnly: true }),
    staleTime: 60000,
  });

  // Transform tokens to display format
  const tokens = useMemo(() => {
    if (!tokensData?.tokens) return [];
    return tokensData.tokens.map(transformTokenToDisplay);
  }, [tokensData]);

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

  // Apply filter
  // Combined content with filtering
  const displayedContent = useMemo<DisplayItem[]>(() => {
    const query = searchQuery.toLowerCase();

    // Filter Tokens
    const filteredTokens = tokens.filter(
      (t) =>
        !searchQuery ||
        t.name.toLowerCase().includes(query) ||
        t.tokenSymbol.toLowerCase().includes(query) ||
        t.genres.some((genre) => genre.toLowerCase().includes(query)),
    );

    // Filter NFTs
    const filteredRewards = rewards.filter(
      (r) => !searchQuery || r.title.toLowerCase().includes(query),
    );

    switch (filter) {
      case "artists":
        return filteredTokens.map((t) => ({ type: "token", data: t }));
      case "nfts":
        return filteredRewards.map((r) => ({ type: "nft", data: r }));
      case "tokens":
      default:
        return filteredTokens.map((t) => ({ type: "token", data: t }));
    }
  }, [tokens, rewards, filter, searchQuery]);

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
                {tokensData && (
                  <span className="ml-2">
                    ({tokensData.count} token{tokensData.count !== 1 ? "s" : ""}
                    )
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

          {(isLoading || rewardsLoading) && (
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

          {!isLoading &&
            !rewardsLoading &&
            !error &&
            displayedContent.length === 0 && (
              <div className="rounded-lg border border-border/60 bg-background/40 p-8 text-center">
                <p className="text-muted-foreground">
                  {searchQuery
                    ? "No results match your search."
                    : "No items found."}
                </p>
              </div>
            )}

          {!isLoading &&
            !rewardsLoading &&
            !error &&
            displayedContent.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedContent.map((item) => {
                  if (item.type === "token") {
                    const token = item.data;
                    return (
                      <Card
                        key={`token-${token.id}`}
                        className="border-border/60 bg-gradient-to-r from-background/80 to-background/40 h-full"
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
