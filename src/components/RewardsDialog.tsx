import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useArtistRewards } from "../hooks/useArtistRewards";
import { useClaimReward } from "../hooks/useClaimReward";
import type { Reward } from "../types/reward";
import type { TokenDisplay } from "../types/artistToken";
import { useWallet } from "../hooks/useWallet";

interface RewardsDialogProps {
  artist: TokenDisplay | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const RewardsDialog: React.FC<RewardsDialogProps> = ({
  artist,
  open,
  onOpenChange,
}) => {
  const artistPublicKey = artist?.tokenIssuer;
  const { address } = useWallet();
  const {
    data: rewards = [],
    isPending,
    isError,
    refetch,
    error: fetchError,
  } = useArtistRewards(artistPublicKey, {
    enabled: open && Boolean(artistPublicKey),
  });
  const { claim, pendingRewardId, loading, error } = useClaimReward();

  const handleClaim = async (reward: Reward) => {
    await claim(reward.nftContractId, reward.id);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            {artist?.name ? `${artist.name} Rewards` : "Artist Rewards"}
          </DialogTitle>
          <DialogDescription>
            Claim NFTs this artist prepared for their community.
          </DialogDescription>
        </DialogHeader>

        {isPending ? (
          <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
            Loading rewards...
          </div>
        ) : isError ? (
          <div className="space-y-3">
            <p className="text-sm text-red-400">
              {fetchError instanceof Error
                ? fetchError.message
                : "Unable to load rewards"}
            </p>
            <Button variant="outline" size="sm" onClick={() => void refetch()}>
              Retry
            </Button>
          </div>
        ) : rewards.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No live rewards for this artist yet.
          </p>
        ) : (
          <div className="space-y-4">
            {rewards.map((reward) => (
              <div
                key={reward.id}
                className="flex gap-4 rounded-lg border border-border/40 bg-background/40 p-4"
              >
                {reward.imageUrl ? (
                  <img
                    src={reward.imageUrl}
                    alt={reward.title}
                    className="h-20 w-20 rounded-md object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-md border border-dashed border-border/40 text-xs text-muted-foreground">
                    No image
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2">
                  <div>
                    <p className="text-base font-semibold text-white">
                      {reward.title}
                    </p>
                    {reward.description && (
                      <p className="text-sm text-muted-foreground">
                        {reward.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs text-muted-foreground">
                      Contract {reward.nftContractId.slice(0, 6)}…
                      {reward.nftContractId.slice(-4)}
                    </p>
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => void handleClaim(reward)}
                      disabled={
                        !address || loading || pendingRewardId === reward.id
                      }
                    >
                      {pendingRewardId === reward.id ? "Claiming..." : "Claim"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!address && rewards.length > 0 && !isPending && !isError && (
          <p className="text-xs text-muted-foreground">
            Connect your wallet to mint this reward.
          </p>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </DialogContent>
    </Dialog>
  );
};
