import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { TrendingArtists } from "../components/feed/TrendingArtists";
import { FeedCard, type FeedPost } from "../components/feed/FeedCard";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfileType } from "../hooks/useProfileType";
import { BuyDialog } from "../components/BuyDialog";
import { listDistributedTokens } from "../services/artistTokens";

// Extended interface to include token data for the buy flow
interface HomeFeedPost extends Omit<FeedPost, "onAction"> {
  tokenData?: {
    symbol: string;
    issuer: string;
  };
}

// Mock Data with specific token details ready for the DB implementation
const MOCK_FEED: HomeFeedPost[] = [
  {
    id: "1",
    artistName: "DJ Solar",
    artistHandle: "djsolar",
    artistAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Solar",
    timestamp: "2h ago",
    type: "token_launch",
    content:
      "My official artist token $SOLAR is finally live! Holders get access to my unreleased folders and VIP tickets for the Summer Tour. Let's build this economy together. 🌞",
    stats: { likes: 1240, comments: 85 },
    actionLabel: "Buy $SOLAR",
    // When DB is ready, this data will come from the relation to the token table
    tokenData: {
      symbol: "SOLAR",
      // Using a placeholder issuer - in prod this comes from the DB
      issuer: "GBKB...MOCK_ISSUER_ADDRESS",
    },
  },
  {
    id: "2",
    artistName: "Neon Pulse",
    artistHandle: "neonpulse",
    artistAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neon",
    timestamp: "5h ago",
    type: "nft_drop",
    content:
      "Dropping 50 'Genesis' Merch Passes. Owning one means you get a physical hoodie + lifetime guest list access.",
    image:
      "https://images.unsplash.com/photo-1576158187551-b3846f756510?q=80&w=2940&auto=format&fit=crop",
    stats: { likes: 892, comments: 45 },
    actionLabel: "Mint Pass (50 XLM)",
    // NFT logic would go here
  },
  {
    id: "3",
    artistName: "Bass Mint",
    artistHandle: "bassmint",
    artistAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bass",
    timestamp: "1d ago",
    type: "update",
    content:
      "Just uploaded the studio session from last night. Token holders can stream it now in the 'Exclusive' tab.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
    stats: { likes: 2100, comments: 312 },
  },
];

const ScaffoldHome: React.FC = () => {
  const { profileType } = useProfileType();
  const navigate = useNavigate();

  // Fetch suggested artists (Real data from Factory/DB)
  const { data: suggestedData, isLoading: isLoadingSuggestions } = useQuery({
    queryKey: ["suggestedArtists"],
    queryFn: () => listDistributedTokens(5, 0),
    staleTime: 60000,
    retry: false,
  });

  // State for Buy Dialog
  const [buyDialogState, setBuyDialogState] = useState<{
    open: boolean;
    symbol: string;
    issuer: string;
  }>({
    open: false,
    symbol: "",
    issuer: "",
  });

  const handleBuyClick = (symbol: string, issuer: string) => {
    setBuyDialogState({
      open: true,
      symbol,
      issuer,
    });
  };

  return (
    <div className="container max-w-5xl mx-auto px-4 py-6 min-h-screen">
      {/* 1. Mobile/Header Search & Discovery */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="What do you want to listen to?"
            className="pl-10 bg-background/50 border-border/40 rounded-full"
          />
        </div>

        {/* Trending Section */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
            Trending Creators
          </h2>
          <TrendingArtists />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 2. Main Feed (Left Column on Desktop) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Your Feed</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-primary">
                All
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                Music
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
              >
                Collectibles
              </Button>
            </div>
          </div>

          {MOCK_FEED.map((post) => (
            <FeedCard
              key={post.id}
              post={{
                ...post,
                // Wire up the buy button if token data exists
                onAction: post.tokenData
                  ? () =>
                      handleBuyClick(
                        post.tokenData!.symbol,
                        post.tokenData!.issuer,
                      )
                  : undefined,
              }}
            />
          ))}

          <div className="py-8 text-center text-muted-foreground">
            <p>You're all caught up!</p>
            <Button variant="link" className="text-primary">
              Discover more artists
            </Button>
          </div>
        </div>

        {/* 3. Sidebar (Right Column on Desktop - Hidden on Mobile) */}
        <div className="hidden lg:block lg:col-span-4 space-y-6">
          {/* Action Card based on Profile Type */}
          <div className="sticky top-24 space-y-6">
            {profileType === "DJ" ? (
              <div className="rounded-xl bg-linear-to-br from-primary/20 to-background border border-primary/20 p-5">
                <h3 className="font-bold text-lg mb-2 text-primary">
                  DJ Dashboard
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your token $SOLAR is trending! Activity is up 40% this week.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-background/50 p-3 rounded-lg text-center">
                    <span className="block text-2xl font-bold">1.2k</span>
                    <span className="text-[10px] uppercase text-muted-foreground">
                      Holders
                    </span>
                  </div>
                  <div className="bg-background/50 p-3 rounded-lg text-center">
                    <span className="block text-2xl font-bold">4.5k</span>
                    <span className="text-[10px] uppercase text-muted-foreground">
                      Volume
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full font-bold"
                  variant="default"
                  onClick={() => void navigate("/profile")}
                >
                  Go to Profile Manager
                </Button>
              </div>
            ) : (
              <div className="rounded-xl bg-muted/30 border border-border/50 p-5">
                <h3 className="font-bold text-lg mb-2">
                  Complete your collection
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You need 2 more tokens to unlock "VIP Status" with Neon Pulse.
                </p>
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={() => void navigate("/wallet")}
                >
                  View Wallet
                </Button>
              </div>
            )}

            {/* Suggested Follows - Now with Real Data */}
            <div className="rounded-xl border border-border/40 bg-background/40 p-5">
              <h3 className="font-semibold text-foreground mb-4">
                Suggested for you
              </h3>
              <div className="space-y-4">
                {isLoadingSuggestions ? (
                  // Loading Skeletons
                  [1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
                        <div className="space-y-1">
                          <div className="h-3 w-20 bg-muted rounded animate-pulse" />
                          <div className="h-2 w-12 bg-muted rounded animate-pulse" />
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-xs"
                        disabled
                      >
                        Follow
                      </Button>
                    </div>
                  ))
                ) : suggestedData?.tokens && suggestedData.tokens.length > 0 ? (
                  // Real Data Mapping
                  suggestedData.tokens.slice(0, 4).map((token) => (
                    <div
                      key={token.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 border border-border/50">
                          <AvatarImage
                            src={
                              token.image_url ||
                              `https://api.dicebear.com/7.x/avataaars/svg?seed=${token.artist_name}`
                            }
                          />
                          <AvatarFallback>
                            {token.artist_name?.[0] || "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate max-w-[120px]">
                            {token.artist_name || "Unknown Artist"}
                          </p>
                          <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                            ${token.token_code}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-8 text-xs text-primary hover:text-primary hover:bg-primary/10"
                        onClick={() =>
                          handleBuyClick(
                            token.token_code,
                            token.artist_public_key,
                          )
                        }
                      >
                        Buy
                      </Button>
                    </div>
                  ))
                ) : (
                  // Empty State
                  <div className="text-center py-4">
                    <p className="text-sm text-muted-foreground mb-3">
                      No suggestions yet.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => void navigate("/explore")}
                    >
                      Explore All
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Dialogs */}
      <BuyDialog
        visible={buyDialogState.open}
        onClose={() => setBuyDialogState((prev) => ({ ...prev, open: false }))}
        tokenSymbol={buyDialogState.symbol}
        tokenIssuer={buyDialogState.issuer}
      />
    </div>
  );
};

export default ScaffoldHome;
