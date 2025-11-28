import React, { useState } from "react";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { useProfile } from "../hooks/useProfile";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileOverviewTab } from "../features/profile/tabs/ProfileOverviewTab";
import { ProfileMusicTab } from "../features/profile/tabs/ProfileMusicTab";
import { ProfileManagerTabs } from "../features/profile/tabs/ProfileManagerTabs";
import { Wallet as WalletIcon, Layers } from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { fetchTracks } from "../services/music";
import { ProfileHeader } from "../features/profile/ProfileHeader";
import { toast } from "sonner";
import { CreateNftCollectionForm } from "@/features/nfts/components/CreateNftCollectionForm";
import { CreateTokenForm } from "@/features/tokens/components/CreateTokenForm";
import { SettingsDialog } from "../features/profile/components/SettingsDialog";
import { UploadTrackDialog } from "../features/music/components/UploadTrackDialog";
import { useOwnedNfts } from "../hooks/useOwnedNfts";
import { CollectiblesSidebar } from "../features/wallet/components/CollectiblesSidebar";

const Profile: React.FC = () => {
  const { profileType } = useProfileType();
  const { address } = useWallet();
  const { profile } = useProfile();

  const { data: artistTracks } = useQuery({
    queryKey: ["artistTracks", address],
    queryFn: () => fetchTracks(address),
    enabled: !!address,
  });

  const {
    data: ownedCollections = [],
    isPending: ownedLoading,
    error: ownedError,
    refetch: refetchOwned,
  } = useOwnedNfts(address);

  const [isNftFormVisible, setIsNftFormVisible] = useState(false);
  const [isTokenFormVisible, setIsTokenFormVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Profile link copied!");
  };

  const handleEdit = () => {
    setIsSettingsOpen(true);
  };

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
        bio={profile?.bio}
        onShare={handleShare}
        onEdit={handleEdit}
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
            <ProfileOverviewTab
              profileType={profileType}
              onCreateDrop={() => setIsNftFormVisible(true)}
              onShare={handleShare}
            />
          </TabsContent>

          {/* --- MUSIC TAB --- */}
          <TabsContent value="music" className="space-y-6">
            <ProfileMusicTab
              tracks={artistTracks}
              isArtist={profileType === "DJ"}
              onUpload={() => setIsUploadOpen(true)}
              onUnlockRequest={(track) => console.log("Unlock", track.title)}
            />
          </TabsContent>

          {/* --- DJ: MANAGER TABS --- */}
          {profileType === "DJ" && (
            <ProfileManagerTabs
              artistAddress={address}
              onManageToken={() => setIsTokenFormVisible(true)}
              onCreateCollection={() => setIsNftFormVisible(true)}
            />
          )}

          {/* --- FAN: COLLECTED --- */}
          <TabsContent value="collected" className="space-y-6">
            {ownedCollections.length > 0 ? (
              <CollectiblesSidebar
                collections={ownedCollections}
                isLoading={ownedLoading}
                error={ownedError}
                onRetry={() => void refetchOwned()}
              />
            ) : (
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
            )}
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
        <SettingsDialog
          open={isSettingsOpen}
          onOpenChange={setIsSettingsOpen}
        />
        <UploadTrackDialog open={isUploadOpen} onOpenChange={setIsUploadOpen} />
      </div>
    </div>
  );
};

export default Profile;
