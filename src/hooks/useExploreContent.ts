import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { listDistributedTokens } from "../services/artistTokens";
import { fetchRewards } from "../services/rewards";
import type { ArtistToken, TokenDisplay } from "../types/artistToken";
import type { Reward } from "../types/reward";

type DisplayItem =
  | { type: "token"; data: TokenDisplay }
  | { type: "nft"; data: Reward };

const transformTokenToDisplay = (token: ArtistToken): TokenDisplay => {
  const handle =
    token.artist_name?.toLowerCase().replace(/\s+/g, "") ||
    `${token.artist_public_key.slice(0, 8)}...${token.artist_public_key.slice(-4)}`;

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
    isFeatured: false,
    tokenSymbol: token.token_code,
    tokenIssuer: token.artist_public_key,
    description: token.description || undefined,
    imageUrl: token.image_url || undefined,
    totalSupply: token.total_supply,
    distributedAt: token.distributed_at || undefined,
  };
};

export function useExploreContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"artists" | "tokens" | "nfts">("tokens");

  const {
    data: tokensData,
    isLoading: tokensLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["distributedTokens"],
    queryFn: () => listDistributedTokens(100, 0),
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const { data: rewards = [], isLoading: rewardsLoading } = useQuery<Reward[]>({
    queryKey: ["allRewards"],
    queryFn: () => fetchRewards({ activeOnly: true }),
    staleTime: 60000,
  });

  const tokens = useMemo(() => {
    if (!tokensData?.tokens) return [];
    return tokensData.tokens.map(transformTokenToDisplay);
  }, [tokensData]);

  const displayedContent = useMemo<DisplayItem[]>(() => {
    const query = searchQuery.toLowerCase();

    const filteredTokens = tokens.filter(
      (t) =>
        !searchQuery ||
        t.name.toLowerCase().includes(query) ||
        t.tokenSymbol.toLowerCase().includes(query) ||
        t.genres.some((genre) => genre.toLowerCase().includes(query)),
    );

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

  return {
    searchQuery,
    setSearchQuery,
    filter,
    setFilter,
    displayedContent,
    isLoading: tokensLoading || rewardsLoading,
    error,
    refetch,
    tokensCount: tokensData?.count,
  };
}
