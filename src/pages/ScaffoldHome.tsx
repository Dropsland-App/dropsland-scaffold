import React, { useState } from "react";
import { useProfileType } from "../hooks/useProfileType";
import { CreateTokenForm } from "../components/CreateTokenForm";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fanHighlights = [
  {
    title: "Direct Connection",
    body: "Support artists without intermediaries and unlock conversations, perks, and gated drops built entirely on-chain.",
  },
  {
    title: "Exclusive Access",
    body: "Collect NFTs that unlock early track debuts, private listening sessions, and IRL event invites.",
  },
  {
    title: "True Ownership",
    body: "Every collectible and token lives on Stellar—portable, transparent, and always yours.",
  },
  {
    title: "Community Power",
    body: "Join artist-led economies where fans help shape releases, perks, and experiences.",
  },
];

const Home: React.FC = () => {
  const { profileType } = useProfileType();
  const [showCreateTokenForm, setShowCreateTokenForm] = useState(false);

  const handleTokenCreationSuccess = () => {
    console.log("Token created successfully!");
    // You can add additional logic here, such as:
    // - Refreshing token list
    // - Showing a success notification
    // - Redirecting to token page
  };

  return (
    <div className="container space-y-12 px-4 py-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
          Where Music Meets Ownership
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Welcome to Dropsland
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Dropsland is a Web3 playground where DJs spin up tokens, fans collect
          cultural artifacts, and communities share in the upside. Everything is
          powered by open, global Stellar rails.
        </p>
        <p className="text-muted-foreground">
          Mint a token, drop an exclusive mix, or unlock gated perks—all without
          waiting on a platform roadmap. You own the moment.
        </p>
      </section>

      {profileType === "DJ" ? (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              DJ Command Center
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Launch your social token, gate experiences with NFTs, and keep all
              the context in one Stellar-native dashboard.
            </p>
          </div>
          <Card className="bg-background/70 border-border/60">
            <CardHeader>
              <CardTitle>Spin up your token in minutes</CardTitle>
              <CardDescription>
                Choose an asset code, deploy a SAC contract, and start inviting
                your community. No Solidity. No gatekeepers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                <li>Share drops, perks, or merch with token holders.</li>
                <li>Reward superfans with tiered access and experiences.</li>
                <li>
                  Broadcast updates across Dropsland, social, and IRL moments.
                </li>
              </ul>
              <Button
                onClick={() => setShowCreateTokenForm(true)}
                className="w-full sm:w-auto"
              >
                Create Your Token
              </Button>
            </CardContent>
          </Card>
        </section>
      ) : (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Discover Artists & Communities
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Collect exclusive drops, hop into token-gated chats, and follow
              the artists defining next season&apos;s sound.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {fanHighlights.map((item) => (
              <Card
                key={item.title}
                className="border-border/50 bg-gradient-to-b from-background/70 to-background/40"
              >
                <CardHeader className="px-5">
                  <CardTitle className="text-lg text-amber-200">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {item.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Create Token Form */}
      <CreateTokenForm
        visible={showCreateTokenForm}
        onClose={() => setShowCreateTokenForm(false)}
        onSuccess={handleTokenCreationSuccess}
      />
    </div>
  );
};

export default Home;
