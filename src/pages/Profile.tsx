import React, { useState } from "react";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { useProfile } from "../hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreateNftCollectionForm } from "@/components/CreateNftCollectionForm";
import { CreateTokenForm } from "@/components/CreateTokenForm";
import { RewardManagerCard } from "@/components/RewardManagerCard";
import {
  Settings,
  Share2,
  Edit3,
  Music2,
  Users,
  Coins,
  Layers,
  PlusCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { fetchTracks } from "../services/music";
import { TrackCard } from "../components/music/TrackCard";
import { Upload } from "lucide-react";

// --- Components ---

const ProfileHeader = ({
  address,
  type,
  username,
}: {
  address?: string;
  type: "DJ" | "Fan";
  username?: string;
}) => {
  const coverGradient =
    type === "DJ"
      ? "from-purple-900/40 via-blue-900/20 to-background"
      : "from-emerald-900/40 via-teal-900/20 to-background";

  return (
    <div className="relative mb-8">
      {/* Cover Image Placeholder */}
      <div
        className={`h-48 w-full rounded-xl bg-linear-to-b ${coverGradient} border border-white/5`}
      >
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10"
          >
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Profile Info Overlay */}
      <div className="px-6 relative -mt-16 flex flex-col md:flex-row items-end md:items-center gap-6">
        <div className="relative group">
          <Avatar className="w-32 h-32 border-4 border-[#030712] shadow-xl">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username || address}`}
            />
            <AvatarFallback>{username?.[0] || "U"}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 bg-[#030712] rounded-full p-1 border border-border/50">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 rounded-full hover:bg-white/10"
            >
              <Edit3 className="w-4 h-4 text-muted-foreground" />
            </Button>
          </div>
        </div>

        <div className="flex-1 pb-2 space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-white">
              {username || "Unnamed User"}
            </h1>
            <Badge variant={type === "DJ" ? "default" : "secondary"}>
              {type === "DJ" ? "Artist Account" : "Fan Account"}
            </Badge>
          </div>
          <p className="font-mono text-xs text-muted-foreground break-all max-w-md">
            {address}
          </p>
          <p className="text-sm text-gray-400 max-w-lg mt-2">
            {type === "DJ"
              ? "Electronic music producer & visual artist. Building the future of sound on Stellar."
              : "Music collector and early supporter of the underground scene."}
          </p>
        </div>

        {type === "DJ" && (
          <div className="flex gap-4 pb-4 hidden md:flex">
            <div className="text-center">
              <div className="text-xl font-bold text-white">1.2k</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Holders
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">5</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Collections
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-white">8.4k</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Volume
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Profile: React.FC = () => {
  const { profileType } = useProfileType();
  const { address } = useWallet();
  const { profile } = useProfile();

  // 1. FETCH ARTIST TRACKS
  // We use the 'address' prop or the current wallet address
  const { data: artistTracks } = useQuery({
    queryKey: ["artistTracks", address],
    queryFn: () => fetchTracks(address),
    enabled: !!address,
  });

  // Modal States
  const [isNftFormVisible, setIsNftFormVisible] = useState(false);
  const [isTokenFormVisible, setIsTokenFormVisible] = useState(false);

  if (!address) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Connect Wallet</h1>
        <p className="text-muted-foreground">
          Please connect your wallet to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-20 pt-6">
      <ProfileHeader
        address={address}
        type={profileType}
        username={profile?.username}
      />

      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="bg-background/50 border border-border/40 p-1 h-auto">
          <TabsTrigger
            value="overview"
            className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="music"
            className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            Music
          </TabsTrigger>
          {profileType === "DJ" ? (
            <>
              <TabsTrigger
                value="token"
                className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                My Token
              </TabsTrigger>
              <TabsTrigger
                value="collections"
                className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                NFT Collections
              </TabsTrigger>
              <TabsTrigger
                value="rewards"
                className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Rewards
              </TabsTrigger>
            </>
          ) : (
            <>
              <TabsTrigger
                value="collected"
                className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Collected
              </TabsTrigger>
              <TabsTrigger
                value="following"
                className="px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Following
              </TabsTrigger>
            </>
          )}
        </TabsList>

        {/* --- OVERVIEW TAB --- */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Stats Cards */}
            <Card className="bg-linear-to-br from-background to-muted/20 border-border/40">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {profileType === "DJ" ? "Total Revenue" : "Portfolio Value"}
                </CardTitle>
                <Coins className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,450 XLM</div>
                <p className="text-xs text-muted-foreground mt-1">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-linear-to-br from-background to-muted/20 border-border/40">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {profileType === "DJ"
                    ? "Community Size"
                    : "Artists Supported"}
                </CardTitle>
                <Users className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {profileType === "DJ" ? "1,234" : "12"}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {profileType === "DJ"
                    ? "Active token holders"
                    : "Active memberships"}
                </p>
              </CardContent>
            </Card>

            {/* Contextual Action Card */}
            <Card className="border-dashed border-primary/30 bg-primary/5 flex flex-col justify-center items-center text-center">
              <CardContent className="pt-6">
                <div className="mb-2 p-3 bg-primary/10 rounded-full inline-block">
                  {profileType === "DJ" ? (
                    <Music2 className="h-6 w-6 text-primary" />
                  ) : (
                    <Share2 className="h-6 w-6 text-primary" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {profileType === "DJ" ? "Drop New Music" : "Share Profile"}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  {profileType === "DJ"
                    ? "Create a new NFT drop for your fans."
                    : "Show off your collection to the world."}
                </p>
                <Button
                  size="sm"
                  onClick={() =>
                    profileType === "DJ" && setIsNftFormVisible(true)
                  }
                >
                  {profileType === "DJ" ? "Create Drop" : "Copy Link"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* --- MUSIC TAB --- */}
        <TabsContent value="music" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Discography</h2>
            {profileType === "DJ" && (
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" /> Upload Track
              </Button>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {artistTracks?.map((track) => (
              <TrackCard
                key={track.id}
                track={track}
                onUnlockRequest={() => {
                  // For now, just log it. In a real app, you might want to open a dialog.
                  console.log("Unlock requested for", track.title);
                }}
              />
            ))}
            {artistTracks?.length === 0 && (
              <div className="col-span-2 text-center py-10 text-muted-foreground border border-dashed border-border/40 rounded-xl">
                No tracks found.
              </div>
            )}
          </div>
        </TabsContent>

        {/* --- DJ: TOKEN TAB --- */}
        <TabsContent value="token" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Artist Token</h2>
              <p className="text-sm text-muted-foreground">
                Manage your fungible social token economics.
              </p>
            </div>
            <Button onClick={() => setIsTokenFormVisible(true)}>
              <PlusCircle className="w-4 h-4 mr-2" /> Launch / Edit Token
            </Button>
          </div>

          <Card className="border-border/40 bg-background/60">
            <CardHeader>
              <CardTitle>Token Performance</CardTitle>
              <CardDescription>
                Real-time market data for your asset.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground border border-dashed border-border/30 rounded-lg">
                Chart Placeholder (Volume/Price)
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* --- DJ: COLLECTIONS TAB --- */}
        <TabsContent value="collections" className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">NFT Collections</h2>
              <p className="text-sm text-muted-foreground">
                Smart contracts deployed by you.
              </p>
            </div>
            <Button onClick={() => setIsNftFormVisible(true)}>
              <PlusCircle className="w-4 h-4 mr-2" /> Deploy New Collection
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Example Collection Card */}
            <Card className="group overflow-hidden border-border/40 bg-background/60 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="h-32 bg-linear-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors" />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Genesis Pass</CardTitle>
                    <CardDescription className="font-mono text-xs mt-1">
                      G...ABCD
                    </CardDescription>
                  </div>
                  <Badge variant="outline">NFT</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Supply</span>
                  <span className="font-medium text-foreground">
                    100 / 1000
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Empty State / Add New */}
            <button
              onClick={() => setIsNftFormVisible(true)}
              className="flex flex-col items-center justify-center h-full min-h-[200px] border border-dashed border-border/50 rounded-xl hover:bg-muted/5 transition-colors group"
            >
              <div className="p-4 rounded-full bg-muted/10 group-hover:bg-primary/10 mb-4 transition-colors">
                <Layers className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
              </div>
              <span className="font-medium text-muted-foreground group-hover:text-foreground">
                Deploy Collection
              </span>
            </button>
          </div>
        </TabsContent>

        {/* --- DJ: REWARDS TAB --- */}
        <TabsContent value="rewards">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Reusing existing logic but wrapped nicely */}
              <RewardManagerCard
                artistPublicKey={address}
                onRequestCreateCollection={() => setIsNftFormVisible(true)}
              />
            </div>
            <div className="space-y-6">
              <Card className="border-border/40 bg-blue-950/10">
                <CardHeader>
                  <CardTitle className="text-lg">Tips & Tricks</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p>
                    • <strong>Token-Gated Merch:</strong> Create a reward that
                    links to a Shopify discount code.
                  </p>
                  <p>
                    • <strong>VIP Access:</strong> Use the NFT contract ID to
                    gate a private Discord channel.
                  </p>
                  <p>
                    • <strong>Burn-to-Redeem:</strong> Coming soon: allow fans
                    to burn tokens for physical items.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* --- FAN: COLLECTED TAB --- */}
        <TabsContent value="collected" className="space-y-6">
          <div className="rounded-lg border border-border/40 bg-background/40 p-12 text-center">
            <div className="mx-auto w-16 h-16 bg-muted/10 rounded-full flex items-center justify-center mb-4">
              <Layers className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold">Your collection is empty</h3>
            <p className="text-muted-foreground max-w-sm mx-auto mt-2 mb-6">
              Start collecting NFTs and Tokens from your favorite artists to
              unlock exclusive perks.
            </p>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/explore")}
            >
              Explore Artists
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Global Modals */}
      <CreateNftCollectionForm
        visible={isNftFormVisible}
        onClose={() => setIsNftFormVisible(false)}
      />
      <CreateTokenForm
        visible={isTokenFormVisible}
        onClose={() => setIsTokenFormVisible(false)}
      />
    </div>
  );
};

export default Profile;
