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
import type { ArtistToken, TokenDisplay } from "../types/artistToken";

const filterTabs: Array<{
  id: "all" | "artists" | "tokens" | "nfts";
  label: string;
}> = [
  { id: "all", label: "All" },
  { id: "artists", label: "Artists" },
  { id: "tokens", label: "Tokens" },
  { id: "nfts", label: "NFTs" },
];

// Transform ArtistToken to TokenDisplay format
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
  const [filter, setFilter] = useState<"all" | "artists" | "tokens" | "nfts">(
    "all",
  );
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

  // Filter tokens based on search query
  const searchMatches = useMemo(() => {
    if (!searchQuery) return tokens;
    const query = searchQuery.toLowerCase();
    return tokens.filter((token) => {
      return (
        token.name.toLowerCase().includes(query) ||
        token.handle.toLowerCase().includes(query) ||
        token.tokenSymbol.toLowerCase().includes(query) ||
        token.genres.some((genre) => genre.toLowerCase().includes(query)) ||
        (token.description && token.description.toLowerCase().includes(query))
      );
    });
  }, [tokens, searchQuery]);

  // Apply filter
  const filteredTokens =
    filter === "artists" || filter === "all" || filter === "tokens"
      ? searchMatches
      : [];

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

          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <p className="text-muted-foreground">Loading tokens...</p>
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

          {!isLoading && !error && filteredTokens.length === 0 && (
            <div className="rounded-lg border border-border/60 bg-background/40 p-8 text-center">
              <p className="text-muted-foreground">
                {searchQuery
                  ? "No tokens match your search."
                  : "No distributed tokens found."}
              </p>
            </div>
          )}

          {!isLoading && !error && filteredTokens.length > 0 && (
            <div className="space-y-4">
              {filteredTokens.map((token) => (
                <Card
                  key={token.id}
                  className="border-border/60 bg-gradient-to-r from-background/80 to-background/40"
                >
                  <CardContent className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 items-center gap-4">
                      <div className="flex size-14 items-center justify-center rounded-full border border-border/60 bg-background/60 text-lg font-semibold text-amber-200">
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
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl text-white">
                            {token.name}
                          </CardTitle>
                          {token.isFeatured && (
                            <Badge
                              variant="secondary"
                              className="uppercase tracking-wide"
                            >
                              Featured
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            Distributed
                          </Badge>
                        </div>
                        <CardDescription>@{token.handle}</CardDescription>
                        {token.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {token.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {token.genres.map((genre) => (
                            <Badge key={genre} variant="outline">
                              {genre}
                            </Badge>
                          ))}
                        </div>
                        {token.distributedAt && (
                          <p className="text-xs text-muted-foreground">
                            Distributed:{" "}
                            {new Date(token.distributedAt).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2 md:items-end">
                      <div className="text-right">
                        <p className="text-sm font-medium text-white">
                          {token.tokenSymbol}
                        </p>
                        {token.totalSupply && (
                          <p className="text-xs text-muted-foreground">
                            Supply: {Number(token.totalSupply).toLocaleString()}
                          </p>
                        )}
                      </div>
                      <div className="flex w-full flex-col gap-2 md:w-auto">
                        <Button
                          onClick={() => handleBuyClick(token)}
                          className="w-full md:w-auto"
                          disabled={!token.tokenSymbol || !token.tokenIssuer}
                        >
                          💰 Buy
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full md:w-auto"
                          onClick={() => handleRewardsClick(token)}
                          disabled={!token.tokenIssuer}
                        >
                          🎁 Rewards
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
