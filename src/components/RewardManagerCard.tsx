import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { useCreateReward } from "../hooks/useCreateReward";
import { useArtistNftCollections } from "../hooks/useArtistNftCollections";
import { useArtistRewards } from "../hooks/useArtistRewards";
import type { Reward } from "../types/reward";

interface RewardManagerCardProps {
  artistPublicKey?: string;
  onRequestCreateCollection?: () => void;
}

interface FormState {
  nftContractId: string;
  title: string;
  description: string;
  imageUrl: string;
}

const initialForm: FormState = {
  nftContractId: "",
  title: "",
  description: "",
  imageUrl: "",
};

const shorten = (value: string) =>
  value.length > 12 ? `${value.slice(0, 6)}…${value.slice(-5)}` : value;

export const RewardManagerCard: React.FC<RewardManagerCardProps> = ({
  artistPublicKey,
  onRequestCreateCollection,
}) => {
  const [formState, setFormState] = useState<FormState>(initialForm);
  const { submitReward, loading, error } = useCreateReward();
  const { data: collections = [], isPending: loadingCollections } =
    useArtistNftCollections(artistPublicKey);
  const {
    data: rewards = [],
    isFetching: loadingRewards,
    refetch: refetchRewards,
  } = useArtistRewards(artistPublicKey, { enabled: Boolean(artistPublicKey) });

  useEffect(() => {
    if (!formState.nftContractId && collections.length > 0) {
      setFormState((prev) => ({
        ...prev,
        nftContractId: collections[0].contractId,
      }));
    }
  }, [collections, formState.nftContractId]);

  const canSubmit = Boolean(
    artistPublicKey &&
      formState.nftContractId &&
      formState.title.trim().length > 0,
  );

  const hasCollections = collections.length > 0;

  const sortedRewards = useMemo(() => {
    return [...rewards].sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
  }, [rewards]);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    const result = await submitReward({ ...formState });
    if (result) {
      setFormState((prev) => ({
        ...prev,
        title: "",
        description: "",
        imageUrl: "",
      }));
      await refetchRewards();
    }
  };

  return (
    <Card className="border-border/60 bg-background/70">
      <CardHeader>
        <CardTitle>Create Fan Rewards</CardTitle>
        <CardDescription>
          Point an existing dj-nft collection at a perk so fans can mint it on
          demand.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!artistPublicKey ? (
          <p className="text-sm text-muted-foreground">
            Connect your wallet to define rewards for your fans.
          </p>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(event) => void handleSubmit(event)}
          >
            <div className="space-y-2">
              <Label>NFT Collection</Label>
              {loadingCollections ? (
                <div className="rounded border border-border/50 bg-background/50 px-3 py-2 text-sm text-muted-foreground">
                  Loading your collections...
                </div>
              ) : hasCollections ? (
                <Select
                  value={formState.nftContractId}
                  onValueChange={(value) =>
                    handleChange("nftContractId", value)
                  }
                  disabled={loading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose collection" />
                  </SelectTrigger>
                  <SelectContent>
                    {collections.map((collection) => (
                      <SelectItem
                        key={collection.contractId}
                        value={collection.contractId}
                      >
                        {shorten(collection.contractId)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <div className="space-y-2 rounded border border-border/40 bg-background/60 p-3 text-sm text-muted-foreground">
                  <p>You&apos;ll need an NFT collection first.</p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={onRequestCreateCollection}
                  >
                    Create collection
                  </Button>
                </div>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="reward-title">Title</Label>
                <Input
                  id="reward-title"
                  value={formState.title}
                  onChange={(event) =>
                    handleChange("title", event.target.value)
                  }
                  placeholder="VIP Merch Pass"
                  disabled={loading || !hasCollections}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reward-image">Image URL</Label>
                <Input
                  id="reward-image"
                  value={formState.imageUrl}
                  onChange={(event) =>
                    handleChange("imageUrl", event.target.value)
                  }
                  placeholder="https://..."
                  disabled={loading || !hasCollections}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="reward-description">Description</Label>
              <Textarea
                id="reward-description"
                value={formState.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                rows={3}
                placeholder="Describe the perk your fans unlock"
                disabled={loading || !hasCollections}
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Fans will mint directly from the chosen collection.
              </p>
              <Button
                type="submit"
                disabled={!canSubmit || loading || !hasCollections}
              >
                {loading ? "Saving..." : "Publish reward"}
              </Button>
            </div>
          </form>
        )}

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-white">Active rewards</h4>
            {loadingRewards && (
              <span className="text-xs text-muted-foreground">Syncing…</span>
            )}
          </div>
          {sortedRewards.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Nothing live yet. Create a reward and it will show up for fans
              instantly.
            </p>
          ) : (
            <ul className="space-y-3">
              {sortedRewards.map((reward: Reward) => (
                <li
                  key={reward.id}
                  className="rounded-lg border border-border/40 bg-background/50 p-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">{reward.title}</p>
                      <p className="text-xs text-muted-foreground">
                        Contract {shorten(reward.nftContractId)}
                      </p>
                    </div>
                    {reward.isActive && (
                      <Badge variant="secondary">Active</Badge>
                    )}
                  </div>
                  {reward.description && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {reward.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
