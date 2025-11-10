import React, { useState } from "react";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreateNftCollectionForm } from "@/components/CreateNftCollectionForm";
import { RewardManagerCard } from "@/components/RewardManagerCard";

const stats = [
  { label: "Token Holders", value: "0" },
  { label: "NFTs Minted", value: "0" },
  { label: "Tracks Uploaded", value: "0" },
  { label: "Total Plays", value: "0" },
];

const Profile: React.FC = () => {
  const { profileType } = useProfileType();
  const { address } = useWallet();
  const [isNftFormVisible, setIsNftFormVisible] = useState(false);

  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Your Identity
        </p>
        <h1 className="text-4xl font-bold text-white">Profile</h1>
        <p className="text-muted-foreground">
          {profileType === "DJ"
            ? "Manage tokens, drops, and your community footprint."
            : "Track collected assets and favorite artists."}
        </p>
      </section>

      <Card className="border-border/60 bg-background/70">
        <CardHeader>
          <CardTitle>
            {profileType === "DJ" ? "Artist Profile" : "Fan Profile"}
          </CardTitle>
          <CardDescription>
            Profile type:{" "}
            <span className="font-semibold text-white">{profileType}</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {address && (
            <div className="rounded-md border border-border/50 bg-[#05080f] p-3 font-mono text-xs text-muted-foreground break-all">
              Wallet: {address}
            </div>
          )}
          <Button type="button" size="sm" variant="secondary" disabled>
            Edit Profile (coming soon)
          </Button>
        </CardContent>
      </Card>

      {profileType === "DJ" ? (
        <div className="space-y-6">
          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Your Tokens</CardTitle>
              <CardDescription>
                Tokens you&apos;ve issued for your community.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Nothing minted yet. Launch your first SAC to kick off your
                economy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Your NFT Collections</CardTitle>
              <CardDescription>
                Deploy NFT rewards to engage your biggest fans.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">
                Launch a fresh NFT collection that you can airdrop or sell to
                your community.
              </p>
              <Button type="button" onClick={() => setIsNftFormVisible(true)}>
                Create New Collection
              </Button>
            </CardContent>
          </Card>

          <RewardManagerCard
            artistPublicKey={address}
            onRequestCreateCollection={() => setIsNftFormVisible(true)}
          />

          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Your Music</CardTitle>
              <CardDescription>
                Keep all Dropsland releases in one place.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Upload a track to start building your discography on Stellar.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border-border/50 bg-background/60"
              >
                <CardContent className="py-5 text-center">
                  <p className="text-3xl font-bold text-amber-200">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Your Fan Base</CardTitle>
              <CardDescription>
                Once you mint tokens or NFTs, fan insights will show up here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Engage holders with perks, exclusive drops, and IRL activations.
              </p>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="space-y-6">
          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Your Collection</CardTitle>
              <CardDescription>
                NFTs and tokens you&apos;ve collected while exploring Dropsland.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                You haven&apos;t collected anything yet. Start with a featured
                artist on the Explore tab.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Favorite Artists</CardTitle>
              <CardDescription>
                Followed artists, playlists, and upcoming drops will appear
                here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tap the star on an artist profile to pin them to your dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
      <CreateNftCollectionForm
        visible={isNftFormVisible}
        onClose={() => setIsNftFormVisible(false)}
      />
    </div>
  );
};

export default Profile;
