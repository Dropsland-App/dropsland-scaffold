import React, { useState } from "react";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { useProfile } from "../hooks/useProfile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateNftCollectionForm } from "@/components/CreateNftCollectionForm";
import { CreateTokenForm } from "@/components/CreateTokenForm";
import { RewardManagerCard } from "@/components/RewardManagerCard";
import {
  Settings,
  Share2,
  Edit3,
  Music,
  Users,
  Wallet as WalletIcon,
  Layers,
  Plus,
  Upload,
  Trophy,
  Sparkles,
  Disc,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { fetchTracks } from "../services/music";
import { TrackCard } from "../components/music/TrackCard";
import { cn } from "@/lib/utils";

// --- Sub-Components ---

const StatItem = ({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/5">
    <div className="p-2 rounded-full bg-white/5 text-primary">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <div className="text-lg font-bold text-white leading-none">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium mt-1">
        {label}
      </div>
    </div>
  </div>
);

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
      ? "bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-[#030712]"
      : "bg-gradient-to-r from-emerald-900/60 via-teal-900/40 to-[#030712]";

  return (
    <div className="relative mb-12 group">
      {/* 1. Cinematic Cover Background (Keeps full width) */}
      <div className="absolute inset-0 h-80 w-full overflow-hidden">
        <div className={cn("absolute inset-0 opacity-50", coverGradient)} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
      </div>

      {/* 2. Content Container (Now constrained to center) */}
      <div className="relative pt-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end gap-8">
          {/* Avatar Area */}
          <div className="relative shrink-0">
            <div className="relative h-40 w-40 rounded-full p-1 bg-gradient-to-b from-white/20 to-black/20 backdrop-blur-md shadow-2xl">
              <Avatar className="h-full w-full border-4 border-[#030712]">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username || address}`}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold bg-[#111827]">
                  {username?.[0] || "U"}
                </AvatarFallback>
              </Avatar>

              {/* Edit Button (Hover) */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-2 right-2 h-8 w-8 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-1 pb-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-white tracking-tight">
                    {username || "Unnamed User"}
                  </h1>
                  <Badge
                    variant="outline"
                    className={cn(
                      "border-white/10 backdrop-blur-md px-3 py-1",
                      type === "DJ"
                        ? "bg-purple-500/10 text-purple-300"
                        : "bg-emerald-500/10 text-emerald-300",
                    )}
                  >
                    {type === "DJ" ? "Artist Account" : "Fan Account"}
                  </Badge>
                </div>
                <p className="text-muted-foreground font-mono text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {address}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/5 border-white/10 hover:bg-white/10"
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Bio & Stats Row */}
            <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center pt-4 border-t border-white/5">
              <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                {type === "DJ"
                  ? "Electronic music producer & visual artist. Building the future of sound on Stellar. Join my exclusive community for unreleased drops."
                  : "Music collector and early supporter of the underground scene."}
              </p>

              {type === "DJ" && (
                <div className="flex flex-wrap gap-3">
                  <StatItem label="Holders" value="1.2k" icon={Users} />
                  <StatItem label="Collections" value="5" icon={Layers} />
                  <StatItem label="Volume" value="8.4k" icon={Disc} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Profile: React.FC = () => {
  const { profileType } = useProfileType();
  const { address } = useWallet();
  const { profile } = useProfile();

  const { data: artistTracks } = useQuery({
    queryKey: ["artistTracks", address],
    queryFn: () => fetchTracks(address),
    enabled: !!address,
  });

  const [isNftFormVisible, setIsNftFormVisible] = useState(false);
  const [isTokenFormVisible, setIsTokenFormVisible] = useState(false);

  if (!address) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="p-4 bg-white/5 rounded-full">
          <WalletIcon className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="text-xl font-bold">Connect Wallet</h1>
        <p className="text-muted-foreground">
          Please connect your wallet to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-[#030712] min-h-screen">
      <ProfileHeader
        address={address}
        type={profileType}
        username={profile?.username}
      />

      <div className="container mx-auto px-4 md:px-8">
        <Tabs defaultValue="overview" className="space-y-8">
          {/* Customized Tabs List */}
          <div className="sticky top-20 z-10 -mx-4 px-4 md:mx-0 md:px-0 bg-[#030712]/80 backdrop-blur-xl py-2">
            <TabsList className="w-full justify-start h-auto p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto">
              <TabsTrigger
                value="overview"
                className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="music"
                className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
              >
                Music
              </TabsTrigger>
              {profileType === "DJ" ? (
                <>
                  <TabsTrigger
                    value="token"
                    className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                  >
                    My Token
                  </TabsTrigger>
                  <TabsTrigger
                    value="collections"
                    className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                  >
                    Collections
                  </TabsTrigger>
                  <TabsTrigger
                    value="rewards"
                    className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                  >
                    Rewards
                  </TabsTrigger>
                </>
              ) : (
                <>
                  <TabsTrigger
                    value="collected"
                    className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-black font-medium transition-all"
                  >
                    Collected
                  </TabsTrigger>
                </>
              )}
            </TabsList>
          </div>

          {/* --- OVERVIEW TAB --- */}
          <TabsContent
            value="overview"
            className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Revenue Card */}
              <Card className="border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    {profileType === "DJ" ? "Total Revenue" : "Portfolio Value"}
                    <Trophy className="h-4 w-4 text-primary" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white tracking-tight">
                    12,450{" "}
                    <span className="text-lg text-muted-foreground font-normal">
                      XLM
                    </span>
                  </div>
                  <p className="text-xs text-emerald-400 mt-2 flex items-center font-medium">
                    <span className="bg-emerald-400/20 rounded px-1 mr-2">
                      ↗ 20.1%
                    </span>{" "}
                    from last month
                  </p>
                </CardContent>
              </Card>

              {/* Community Card */}
              <Card className="border-white/5 bg-white/5 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    {profileType === "DJ"
                      ? "Active Members"
                      : "Communities Joined"}
                    <Users className="h-4 w-4 text-blue-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white tracking-tight">
                    1,234
                  </div>
                  <div className="flex -space-x-2 mt-3 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0b1020] bg-white/20"
                      />
                    ))}
                    <div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center text-[8px] text-white ring-2 ring-[#0b1020]">
                      +1k
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Card */}
              <button
                onClick={() =>
                  profileType === "DJ" && setIsNftFormVisible(true)
                }
                className="group relative flex flex-col items-center justify-center p-6 rounded-xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-4 bg-primary/10 text-primary rounded-full mb-3 group-hover:scale-110 transition-transform">
                  {profileType === "DJ" ? (
                    <Sparkles className="w-6 h-6" />
                  ) : (
                    <Share2 className="w-6 h-6" />
                  )}
                </div>
                <h3 className="font-semibold text-white mb-1">
                  {profileType === "DJ" ? "Create New Drop" : "Share Profile"}
                </h3>
                <p className="text-xs text-muted-foreground text-center max-w-[200px]">
                  {profileType === "DJ"
                    ? "Launch a new NFT collection for your fans."
                    : "Show off your collection to the world."}
                </p>
              </button>
            </div>
          </TabsContent>

          {/* --- MUSIC TAB --- */}
          <TabsContent value="music" className="space-y-6">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
              <div>
                <h2 className="text-lg font-bold text-white">Discography</h2>
                <p className="text-sm text-muted-foreground">
                  Your uploaded tracks and releases.
                </p>
              </div>
              {profileType === "DJ" && (
                <Button className="font-semibold shadow-lg shadow-primary/20">
                  <Upload className="w-4 h-4 mr-2" /> Upload Track
                </Button>
              )}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {artistTracks?.map((track) => (
                <TrackCard
                  key={track.id}
                  track={track}
                  onUnlockRequest={() => console.log("Unlock", track.title)}
                />
              ))}
              {artistTracks?.length === 0 && (
                <div className="col-span-2 py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/5">
                  <Music className="w-10 h-10 text-muted-foreground/50 mb-3" />
                  <p className="text-muted-foreground">No tracks found.</p>
                </div>
              )}
            </div>
          </TabsContent>

          {/* --- DJ: TOKEN TAB --- */}
          <TabsContent value="token" className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Manage Your Economy
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Control supply, update metadata, and monitor the performance
                  of your social token.
                </p>
              </div>
              <Button
                size="lg"
                onClick={() => setIsTokenFormVisible(true)}
                className="font-bold shrink-0"
              >
                <Plus className="w-5 h-5 mr-2" /> Launch / Edit Token
              </Button>
            </div>
          </TabsContent>

          {/* --- DJ: COLLECTIONS & REWARDS --- */}
          <TabsContent value="collections" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Add New Collection Card */}
              <button
                onClick={() => setIsNftFormVisible(true)}
                className="flex flex-col items-center justify-center aspect-[4/3] rounded-2xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-white">New Collection</span>
              </button>
              {/* Placeholder for existing collections would go here */}
            </div>
          </TabsContent>

          <TabsContent value="rewards">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <RewardManagerCard
                  artistPublicKey={address}
                  onRequestCreateCollection={() => setIsNftFormVisible(true)}
                />
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#0b1020]/50 p-6">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" /> Pro Tips
                  </h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold text-white">
                        1
                      </span>
                      <span>
                        <strong>Token-Gated Merch:</strong> Create a reward that
                        links to a Shopify discount code.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold text-white">
                        2
                      </span>
                      <span>
                        <strong>VIP Access:</strong> Use the NFT contract ID to
                        gate a private Discord channel.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* --- FAN: COLLECTED --- */}
          <TabsContent value="collected" className="space-y-6">
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-12 text-center">
              <Layers className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold text-white">
                Your collection is empty
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto mt-2 mb-6">
                Start collecting NFTs and Tokens from your favorite artists to
                unlock exclusive perks.
              </p>
              <Button
                variant="outline"
                className="border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
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
    </div>
  );
};

export default Profile;
