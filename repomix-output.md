This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose

This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format

The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
   a. A header with the file path (## File: path/to/file)
   b. The full contents of the file in a code block

## Usage Guidelines

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes

- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure

```
.github/
  workflows/
    node.yml
.husky/
  pre-commit
contracts/
  dj-fungible/
    src/
      contract.rs
      lib.rs
      test.rs
    Cargo.toml
    Makefile
  dj-nft/
    src/
      contract.rs
      lib.rs
      test.rs
    Cargo.toml
    Makefile
  factory/
    src/
      events/
        contract.rs
        mod.rs
      methods/
        initialize.rs
        mod.rs
      storage/
        admin.rs
        mod.rs
        token.rs
        types.rs
      contract.rs
      lib.rs
      test.rs
    Cargo.toml
    deploy.sh
    Makefile
scripts/
  install-fungible-wasm.sh
  QUICK_FIX_TESTNET.md
  README.md
  TESTNET_SETUP.md
src/
  components/
    layout/
      Box.tsx
    ui/
      alert.tsx
      avatar.tsx
      badge.tsx
      button.tsx
      card.tsx
      dialog.tsx
      input.tsx
      label.tsx
      select.tsx
      sonner.tsx
      table.tsx
      textarea.tsx
      tooltip.tsx
    BottomNav.module.css
    BottomNav.tsx
    BuyDialog.tsx
    ConnectAccount.module.css
    ConnectAccount.tsx
    CreateNftCollectionForm.tsx
    CreateSACTokenButton.tsx
    CreateTokenForm.css
    CreateTokenForm.tsx
    FundAccountButton.tsx
    HeaderLogo.module.css
    HeaderLogo.tsx
    NetworkPill.tsx
    ProfileTypeSelector.module.css
    ProfileTypeSelector.tsx
    RewardManagerCard.tsx
    RewardsDialog.tsx
    WalletButton.tsx
  contracts/
    util.ts
  debug/
    components/
      ContractForm.tsx
      ErrorResponse.tsx
      ErrorText.tsx
      InvokeContractForm.tsx
      JsonSchemaRenderer.tsx
      LabelHeading.tsx
      MetadataCard.tsx
      PositiveIntPicker.tsx
      PrettyJson.tsx
      PrettyJsonTextarea.tsx
      PrettyJsonTransaction.tsx
      RenderArrayType.tsx
      RenderContractMetadata.tsx
      RenderOneOf.tsx
      RenderPrimitivesType.tsx
      RenderTupleType.tsx
      TransactionSuccessCard.tsx
      TxResponse.tsx
      ValidationResponseCard.tsx
      XdrJsonViewer.tsx
    hooks/
      useAccountSequenceNumber.ts
      useCheckTxSignatures.ts
      useContracts.ts
      usePrevious.ts
      useRpcPrepareTx.ts
      useSimulateTx.ts
      useSubmitRpcTx.ts
    types/
      types.ts
    util/
      arrayItem.ts
      capitalizeString.ts
      delay.ts
      dereferenceSchema.ts
      fetchTxSignatures.ts
      formatAmount.ts
      getNetworkHeaders.ts
      getWasmContractData.ts
      isEmptyObject.ts
      jsonSchema.ts
      loadContractMetada.ts
      parseToLosslessJson.ts
      prettifyJsonString.ts
      sanitizeArray.ts
      sanitizeObject.ts
      signatureHint.ts
      sorobanUtils.ts
      StellarXdr.ts
      trim.ts
      xdrFraction.ts
      xdrUtils.ts
    validate/
      methods/
        getAccountThresholdError.ts
        getAmountError.ts
        getArrayOfStringsError.ts
        getAssetCodeError.ts
        getAssetError.ts
        getAssetMultiError.ts
        getBipPathError.ts
        getClaimableBalanceIdError.ts
        getClaimaintsError.ts
        getContractIdError.ts
        getDataNameError.ts
        getDataUrlError.ts
        getDataValueError.ts
        getEventsFiltersError.ts
        getHomeDomainError.ts
        getI128Error.ts
        getI256Error.ts
        getI32Error.ts
        getI64Error.ts
        getMemoError.ts
        getNumberFractionError.ts
        getOptionsSignerError.ts
        getPositiveIntError.ts
        getPositiveNumberError.ts
        getPublicKeyError.ts
        getRevokeSponsorshipError.ts
        getSecretKeyError.ts
        getTimeBoundsError.ts
        getTransactionHashError.ts
        getU128Error.ts
        getU256Error.ts
        getU32Error.ts
        getU64Error.ts
        getXdrError.ts
      index.ts
  hooks/
    useArtistNftCollections.ts
    useArtistRewards.ts
    useBuyToken.ts
    useClaimReward.ts
    useCreateNftCollection.ts
    useCreateReward.ts
    useOwnedNfts.ts
    useProfileType.ts
    useSubscription.ts
    useTokenCreation.ts
    useWallet.ts
    useWalletBalance.ts
  lib/
    utils.ts
  pages/
    Activity.tsx
    Debugger.tsx
    Explore.tsx
    Home.tsx
    Profile.tsx
    ScaffoldHome.tsx
    Wallet.tsx
  providers/
    ProfileTypeProvider.tsx
    WalletProvider.tsx
  services/
    artistTokens.ts
    buyToken.ts
    rewards.ts
    tokenCreation.ts
  types/
    artistToken.ts
    reward.ts
    tokenCreation.ts
  util/
    contract.ts
    contracts.ts
    friendbot.ts
    nftCollections.ts
    storage.ts
    wallet.ts
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
supabase/
  functions/
    _shared/
      utils.ts
    create-reward/
      index.ts
    distribute/
      index.ts
    emission-xdr/
      index.ts
    list-distributed-tokens/
      index.ts
    prepare-token/
      index.ts
    status/
      index.ts
    submit-signed/
      index.ts
    deno.json
    README.md
  migrations/
    20251110073417_remote_schema.sql
    db-scheme.sql
  .gitignore
  config.toml
.env.example
.gitattributes
.gitignore
AGENTS.md
Cargo.toml
components.json
environments.toml
eslint.config.js
IMPLEMENTATION_VERIFICATION.md
index.html
LICENSE
Makefile
package.json
README.md
rust-toolchain.toml
tailwind.config.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

# Files

## File: src/components/RewardManagerCard.tsx

```typescript
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
    return [...rewards].sort((a, b) =>
      a.createdAt < b.createdAt ? 1 : -1,
    );
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
          <form className="space-y-4" onSubmit={(event) => void handleSubmit(event)}>
            <div className="space-y-2">
              <Label>NFT Collection</Label>
              {loadingCollections ? (
                <div className="rounded border border-border/50 bg-background/50 px-3 py-2 text-sm text-muted-foreground">
                  Loading your collections...
                </div>
              ) : hasCollections ? (
                <Select
                  value={formState.nftContractId}
                  onValueChange={(value) => handleChange("nftContractId", value)}
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
                  onChange={(event) => handleChange("title", event.target.value)}
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
                  onChange={(event) => handleChange("imageUrl", event.target.value)}
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
                onChange={(event) => handleChange("description", event.target.value)}
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
              <Button type="submit" disabled={!canSubmit || loading || !hasCollections}>
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
                    {reward.isActive && <Badge variant="secondary">Active</Badge>}
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
```

## File: src/components/RewardsDialog.tsx

```typescript
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
  } = useArtistRewards(artistPublicKey, { enabled: open && Boolean(artistPublicKey) });
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
```

## File: src/hooks/useArtistNftCollections.ts

```typescript
import { useQuery } from "@tanstack/react-query";
import type { Client as FactoryContractClient } from "factory";
import { useContracts } from "../debug/hooks/useContracts";
import {
  fetchNftCollections,
  type NftCollectionInfo,
} from "../util/nftCollections";

export function useArtistNftCollections(artistPublicKey?: string) {
  const { data: contractData } = useContracts();
  const factoryContract = contractData?.loadedContracts?.factory?.default as
    | FactoryContractClient
    | undefined;

  return useQuery<NftCollectionInfo[]>({
    queryKey: [
      "artistNftCollections",
      artistPublicKey,
      factoryContract?.options?.contractId,
    ],
    enabled: Boolean(artistPublicKey && factoryContract),
    queryFn: async () => {
      if (!artistPublicKey || !factoryContract) {
        return [];
      }

      return fetchNftCollections(factoryContract, { owner: artistPublicKey });
    },
    staleTime: 60_000,
  });
}
```

## File: src/hooks/useArtistRewards.ts

```typescript
import { useQuery } from "@tanstack/react-query";
import { fetchRewardsByArtist } from "../services/rewards";
import type { Reward } from "../types/reward";

interface UseArtistRewardsOptions {
  enabled?: boolean;
  activeOnly?: boolean;
}

export function useArtistRewards(
  artistPublicKey?: string,
  options: UseArtistRewardsOptions = {},
) {
  const { enabled = true, activeOnly = true } = options;

  return useQuery<Reward[]>({
    queryKey: ["artistRewards", artistPublicKey, activeOnly],
    enabled: Boolean(artistPublicKey) && enabled,
    queryFn: async () => {
      if (!artistPublicKey) {
        return [];
      }
      return fetchRewardsByArtist(artistPublicKey, { activeOnly });
    },
    staleTime: 60_000,
  });
}
```

## File: src/hooks/useClaimReward.ts

```typescript
import { useCallback, useState } from "react";
import type { MethodOptions } from "@stellar/stellar-sdk/contract";
import { Client as DjNftClient } from "dj_nft";
import { toast } from "sonner";
import { networkPassphrase, rpcUrl } from "../contracts/util";
import { useWallet } from "./useWallet";

export function useClaimReward() {
  const { address, signTransaction } = useWallet();
  const [pendingRewardId, setPendingRewardId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const claim = useCallback(
    async (nftContractId: string, rewardId?: string) => {
      if (!address || !signTransaction) {
        const message = "Connect your wallet to claim rewards";
        setError(message);
        toast.error(message);
        return null;
      }

      setPendingRewardId(rewardId ?? nftContractId);
      setError(null);
      const toastId = toast.loading("Preparing claim transaction...");

      try {
        const client = new DjNftClient({
          contractId: nftContractId,
          networkPassphrase: String(networkPassphrase),
          rpcUrl,
          allowHttp: true,
        });

        const methodOptions: MethodOptions & {
          publicKey: string;
          address: string;
        } = {
          publicKey: address,
          address,
        };

        const tx = await client.award_item({ to: address }, methodOptions);

        const sentTx = await tx.signAndSend({
          signTransaction: (xdr, opts) =>
            signTransaction(xdr, {
              ...opts,
              address,
              networkPassphrase: String(networkPassphrase),
            }),
        });

        const hash = sentTx.sendTransactionResponse?.hash;

        toast.success("Reward claimed", {
          id: toastId,
          description: hash ? `Tx: ${hash.slice(0, 10)}…` : undefined,
        });

        return hash ?? null;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to submit transaction";
        setError(message);
        toast.error("Reward claim failed", {
          id: toastId,
          description: message,
        });
        return null;
      } finally {
        setPendingRewardId(null);
      }
    },
    [address, signTransaction],
  );

  return {
    claim,
    error,
    pendingRewardId,
    loading: pendingRewardId !== null,
  };
}
```

## File: src/hooks/useCreateReward.ts

```typescript
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { createReward } from "../services/rewards";
import type { Reward } from "../types/reward";
import { useWallet } from "./useWallet";

interface RewardFormValues {
  nftContractId: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export function useCreateReward() {
  const { address } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitReward = useCallback(
    async (values: RewardFormValues): Promise<Reward | null> => {
      if (!address) {
        setError("Wallet not connected");
        return null;
      }

      setLoading(true);
      setError(null);
      const toastId = toast.loading("Saving reward definition...");

      try {
        const reward = await createReward({
          artistPublicKey: address,
          nftContractId: values.nftContractId,
          title: values.title,
          description: values.description,
          imageUrl: values.imageUrl,
        });

        toast.success("Reward saved", {
          id: toastId,
          description: "Fans can now claim this drop",
        });

        return reward;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to save reward";
        setError(message);
        toast.error("Failed to save reward", {
          id: toastId,
          description: message,
        });
        return null;
      } finally {
        setLoading(false);
      }
    },
    [address],
  );

  return { submitReward, loading, error };
}
```

## File: src/hooks/useOwnedNfts.ts

```typescript
import { useQuery } from "@tanstack/react-query";
import type { Client as FactoryContractClient } from "factory";
import { Client as DjNftClient } from "dj_nft";
import { useContracts } from "../debug/hooks/useContracts";
import { networkPassphrase, rpcUrl } from "../contracts/util";
import { fetchNftCollections } from "../util/nftCollections";

export interface OwnedCollection {
  contractId: string;
  tokenIds: number[];
}

async function loadOwnedCollections(
  factoryClient: FactoryContractClient,
  owner: string,
): Promise<OwnedCollection[]> {
  const collections = await fetchNftCollections(factoryClient);
  const owned: OwnedCollection[] = [];

  for (const collection of collections) {
    const nftClient = new DjNftClient({
      contractId: collection.contractId,
      networkPassphrase: String(networkPassphrase),
      rpcUrl,
      allowHttp: true,
    });

    try {
      const balanceResponse = await nftClient.balance({ account: owner });
      const balanceValue = Number(balanceResponse.result ?? 0);
      if (!Number.isFinite(balanceValue) || balanceValue <= 0) {
        continue;
      }

      const tokenIds: number[] = [];
      for (let index = 0; index < balanceValue; index += 1) {
        try {
          const tokenResponse = await nftClient.get_owner_token_id({
            owner,
            index,
          });
          const tokenId = Number(tokenResponse.result ?? 0);
          if (Number.isFinite(tokenId)) {
            tokenIds.push(tokenId);
          }
        } catch (error) {
          console.error(
            `Failed to read token index ${index} for ${collection.contractId}`,
            error,
          );
        }
      }

      if (tokenIds.length > 0) {
        owned.push({
          contractId: collection.contractId,
          tokenIds,
        });
      }
    } catch (error) {
      console.error(
        `Failed to load balance for ${collection.contractId}`,
        error,
      );
    }
  }

  return owned;
}

export function useOwnedNfts(owner?: string) {
  const { data: contractData } = useContracts();
  const factoryContract = contractData?.loadedContracts?.factory?.default as
    | FactoryContractClient
    | undefined;

  return useQuery<OwnedCollection[]>({
    queryKey: ["ownedNfts", owner, factoryContract?.options?.contractId],
    enabled: Boolean(owner && factoryContract),
    queryFn: async () => {
      if (!owner || !factoryContract) {
        return [];
      }
      return loadOwnedCollections(factoryContract, owner);
    },
    staleTime: 30_000,
  });
}
```

## File: src/services/rewards.ts

```typescript
import type { CreateRewardPayload, Reward } from "../types/reward";

interface RewardRecord {
  id: string;
  artist_public_key: string;
  nft_contract_id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
}

interface RewardErrorResponse {
  error?: string;
  message?: string;
}

interface FetchRewardsOptions {
  activeOnly?: boolean;
}

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
  | string
  | undefined;

const functionsBaseUrl = supabaseUrl
  ? `${supabaseUrl}/functions/v1`
  : undefined;
const restBaseUrl = supabaseUrl ? `${supabaseUrl}/rest/v1` : undefined;

const authHeaders = supabaseAnonKey
  ? {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    }
  : undefined;

const requireSupabaseConfig = (context: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      `${context}: Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY environment variables`,
    );
  }
};

const mapReward = (record: RewardRecord): Reward => ({
  id: record.id,
  artistPublicKey: record.artist_public_key,
  nftContractId: record.nft_contract_id,
  title: record.title,
  description: record.description,
  imageUrl: record.image_url,
  isActive: record.is_active,
  createdAt: record.created_at,
});

export async function createReward(
  payload: CreateRewardPayload,
): Promise<Reward> {
  requireSupabaseConfig("createReward");
  if (!functionsBaseUrl || !authHeaders) {
    throw new Error("createReward: Supabase Edge Functions URL not configured");
  }

  const response = await fetch(`${functionsBaseUrl}/create-reward`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = (await response
      .json()
      .catch(() => ({}))) as RewardErrorResponse;
    throw new Error(
      errorBody.error || errorBody.message || "Failed to create reward",
    );
  }

  const { data } = (await response.json()) as { data: RewardRecord };
  return mapReward(data);
}

export async function fetchRewardsByArtist(
  artistPublicKey: string,
  options: FetchRewardsOptions = {},
): Promise<Reward[]> {
  requireSupabaseConfig("fetchRewardsByArtist");
  if (!restBaseUrl || !authHeaders) {
    throw new Error("fetchRewardsByArtist: Supabase REST URL not configured");
  }

  const params = new URLSearchParams({
    select: "*",
    order: "created_at.desc",
    artist_public_key: `eq.${artistPublicKey}`,
  });

  if (options.activeOnly !== false) {
    params.set("is_active", "eq.true");
  }

  const response = await fetch(`${restBaseUrl}/rewards?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      ...authHeaders,
    },
  });

  if (!response.ok) {
    const errorBody = (await response
      .json()
      .catch(() => ({}))) as RewardErrorResponse;
    throw new Error(
      errorBody.error || errorBody.message || "Error loading rewards",
    );
  }

  const records = (await response.json()) as RewardRecord[];
  return records.map(mapReward);
}
```

## File: src/types/reward.ts

```typescript
export interface Reward {
  id: string;
  artistPublicKey: string;
  nftContractId: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
}

export interface CreateRewardPayload {
  artistPublicKey: string;
  nftContractId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  isActive?: boolean;
}
```

## File: src/util/contracts.ts

```typescript
import type { Result } from "@stellar/stellar-sdk/contract";

interface ResultLike<T> {
  isOk(): boolean;
  unwrap(): T;
  unwrapErr(): { message?: string } | string;
}

export function unwrapResult<T>(
  result: Result<T> | undefined,
  label: string,
): T {
  const typed = result as ResultLike<T> | undefined;
  if (!typed || typeof typed.isOk !== "function") {
    throw new Error(`${label}: missing result payload`);
  }

  if (!typed.isOk()) {
    const err = typed.unwrapErr();
    const message =
      typeof err === "string"
        ? err
        : err?.message || `Unknown error while executing ${label}`;
    throw new Error(message);
  }

  return typed.unwrap();
}
```

## File: src/util/nftCollections.ts

```typescript
import type { Client as FactoryContractClient } from "factory";
import { TokenType } from "factory";
import { unwrapResult } from "./contracts";

export interface NftCollectionInfo {
  contractId: string;
  issuer: string;
}

interface FetchOptions {
  owner?: string;
}

export async function fetchNftCollections(
  factoryClient: FactoryContractClient,
  options: FetchOptions = {},
): Promise<NftCollectionInfo[]> {
  const { owner } = options;
  const response = await factoryClient.get_all_tokens();
  const contractIds = unwrapResult(response.result, "get_all_tokens");

  const collections: NftCollectionInfo[] = [];

  for (const tokenAddr of contractIds) {
    const contractId =
      typeof tokenAddr === "string" ? tokenAddr : String(tokenAddr);
    if (!contractId) continue;

    try {
      const infoResponse = await factoryClient.get_token_info({
        token_addr: contractId,
      });
      const info = unwrapResult(
        infoResponse.result,
        `get_token_info:${contractId}`,
      );

      if (info.token_type !== TokenType.Nft) {
        continue;
      }

      if (owner && info.issuer !== owner) {
        continue;
      }

      collections.push({ contractId, issuer: info.issuer });
    } catch (error) {
      console.error(`Failed to load token info for ${contractId}`, error);
    }
  }

  return collections;
}
```

## File: supabase/functions/create-reward/index.ts

```typescript
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { corsHeaders, handleCORS } from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

type CreateRewardPayload = {
  artistPublicKey?: string;
  nftContractId?: string;
  title?: string;
  description?: string | null;
  imageUrl?: string | null;
  isActive?: boolean;
};

Deno.serve(async (req) => {
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: CreateRewardPayload;
  try {
    payload = (await req.json()) as CreateRewardPayload;
  } catch (error) {
    console.error("Invalid JSON body", error);
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const artistPublicKey = (payload.artistPublicKey || "").trim();
  const nftContractId = (payload.nftContractId || "").trim();
  const title = (payload.title || "").trim();
  const description = payload.description?.trim() || null;
  const imageUrl = payload.imageUrl?.trim() || null;
  const isActive = payload.isActive ?? true;

  const missing: string[] = [];
  if (!artistPublicKey) missing.push("artistPublicKey");
  if (!nftContractId) missing.push("nftContractId");
  if (!title) missing.push("title");

  if (missing.length > 0) {
    return new Response(
      JSON.stringify({
        error: `Missing required fields: ${missing.join(", ")}`,
      }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  try {
    const { data, error } = await supabase
      .from("rewards")
      .insert({
        artist_public_key: artistPublicKey,
        nft_contract_id: nftContractId,
        title,
        description,
        image_url: imageUrl,
        is_active: isActive,
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting reward", error);
      return new Response(
        JSON.stringify({
          error: "Failed to create reward",
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ data }), {
      status: 201,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Unexpected error", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unexpected error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
```

## File: supabase/migrations/20251110073417_remote_schema.sql

```sql
drop extension if exists "pg_net";


  create table "public"."artist_tokens" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "artist_public_key" character varying(56) not null,
    "artist_email" character varying(255),
    "artist_name" character varying(255),
    "token_code" character varying(12) not null,
    "token_name" character varying(255) not null,
    "total_supply" numeric(20,7) not null,
    "description" text,
    "image_url" text,
    "platform_fee_bps" integer not null default 1000,
    "distribution_public_key" character varying(56) not null,
    "distribution_secret_encrypted" text not null,
    "artist_amount" numeric(20,7),
    "platform_amount" numeric(20,7),
    "status" character varying(50) not null default 'created'::character varying,
    "trustline_tx_hash" character varying(64),
    "emission_tx_hash" character varying(64),
    "distribution_tx_hash" character varying(64),
    "created_at" timestamp with time zone default now(),
    "trustline_created_at" timestamp with time zone,
    "emitted_at" timestamp with time zone,
    "distributed_at" timestamp with time zone,
    "updated_at" timestamp with time zone default now()
      );


alter table "public"."artist_tokens" enable row level security;


  create table "public"."marketplace_listings" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "seller_public_key" character varying(56) not null,
    "amount_for_sale" numeric(20,7) not null,
    "price_per_token_xlm" numeric(20,7) not null,
    "total_price_xlm" numeric(20,7) generated always as ((amount_for_sale * price_per_token_xlm)) stored,
    "status" character varying(50) not null default 'active'::character varying,
    "amount_sold" numeric(20,7) default 0,
    "amount_remaining" numeric(20,7) generated always as ((amount_for_sale - amount_sold)) stored,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now(),
    "expires_at" timestamp with time zone
      );


alter table "public"."marketplace_listings" enable row level security;


  create table "public"."marketplace_sales" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "listing_id" uuid not null,
    "token_id" uuid not null,
    "buyer_public_key" character varying(56) not null,
    "seller_public_key" character varying(56) not null,
    "amount" numeric(20,7) not null,
    "price_per_token_xlm" numeric(20,7) not null,
    "total_price_xlm" numeric(20,7) not null,
    "platform_fee_xlm" numeric(20,7),
    "tx_hash" character varying(64) not null,
    "sold_at" timestamp with time zone default now()
      );



  create table "public"."platform_analytics" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "total_tokens_created" integer default 0,
    "total_artists" integer default 0,
    "total_tokens_distributed" numeric(30,7) default 0,
    "total_xlm_volume" numeric(30,7) default 0,
    "total_platform_fees_tokens" numeric(30,7) default 0,
    "total_platform_fees_xlm" numeric(30,7) default 0,
    "period_start" timestamp with time zone not null,
    "period_end" timestamp with time zone not null,
    "created_at" timestamp with time zone default now()
      );



  create table "public"."token_distributions" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "artist_public_key" character varying(56) not null,
    "artist_amount" numeric(20,7) not null,
    "platform_amount" numeric(20,7) not null,
    "tx_hash" character varying(64) not null,
    "distributed_at" timestamp with time zone default now()
      );



  create table "public"."token_metadata" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "website_url" text,
    "twitter_handle" character varying(100),
    "instagram_handle" character varying(100),
    "discord_url" text,
    "telegram_url" text,
    "category" character varying(50),
    "tags" text[],
    "total_holders" integer default 0,
    "total_transactions" integer default 0,
    "market_cap_xlm" numeric(20,7),
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
      );



  create table "public"."token_transactions" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "tx_hash" character varying(64) not null,
    "tx_type" character varying(50) not null,
    "from_address" character varying(56),
    "to_address" character varying(56),
    "amount" numeric(20,7) not null,
    "ledger_sequence" integer,
    "created_at" timestamp with time zone default now()
      );


CREATE UNIQUE INDEX artist_tokens_pkey ON public.artist_tokens USING btree (id);

CREATE INDEX idx_artist_tokens_artist ON public.artist_tokens USING btree (artist_public_key);

CREATE INDEX idx_artist_tokens_code ON public.artist_tokens USING btree (token_code);

CREATE INDEX idx_artist_tokens_created ON public.artist_tokens USING btree (created_at DESC);

CREATE INDEX idx_artist_tokens_status ON public.artist_tokens USING btree (status);

CREATE INDEX idx_marketplace_listings_active ON public.marketplace_listings USING btree (status, expires_at) WHERE ((status)::text = 'active'::text);

CREATE INDEX idx_marketplace_listings_seller ON public.marketplace_listings USING btree (seller_public_key);

CREATE INDEX idx_marketplace_listings_status ON public.marketplace_listings USING btree (status);

CREATE INDEX idx_marketplace_listings_token ON public.marketplace_listings USING btree (token_id);

CREATE INDEX idx_marketplace_sales_buyer ON public.marketplace_sales USING btree (buyer_public_key);

CREATE INDEX idx_marketplace_sales_date ON public.marketplace_sales USING btree (sold_at DESC);

CREATE INDEX idx_marketplace_sales_token ON public.marketplace_sales USING btree (token_id);

CREATE INDEX idx_token_distributions_date ON public.token_distributions USING btree (distributed_at DESC);

CREATE INDEX idx_token_distributions_token ON public.token_distributions USING btree (token_id);

CREATE INDEX idx_token_transactions_date ON public.token_transactions USING btree (created_at DESC);

CREATE INDEX idx_token_transactions_hash ON public.token_transactions USING btree (tx_hash);

CREATE INDEX idx_token_transactions_token ON public.token_transactions USING btree (token_id);

CREATE UNIQUE INDEX marketplace_listings_pkey ON public.marketplace_listings USING btree (id);

CREATE UNIQUE INDEX marketplace_sales_pkey ON public.marketplace_sales USING btree (id);

CREATE UNIQUE INDEX platform_analytics_pkey ON public.platform_analytics USING btree (id);

CREATE UNIQUE INDEX token_distributions_pkey ON public.token_distributions USING btree (id);

CREATE UNIQUE INDEX token_metadata_pkey ON public.token_metadata USING btree (id);

CREATE UNIQUE INDEX token_transactions_pkey ON public.token_transactions USING btree (id);

CREATE UNIQUE INDEX unique_period ON public.platform_analytics USING btree (period_start, period_end);

CREATE UNIQUE INDEX unique_token_per_artist ON public.artist_tokens USING btree (token_code, artist_public_key);

CREATE UNIQUE INDEX unique_tx_hash ON public.token_transactions USING btree (tx_hash);

alter table "public"."artist_tokens" add constraint "artist_tokens_pkey" PRIMARY KEY using index "artist_tokens_pkey";

alter table "public"."marketplace_listings" add constraint "marketplace_listings_pkey" PRIMARY KEY using index "marketplace_listings_pkey";

alter table "public"."marketplace_sales" add constraint "marketplace_sales_pkey" PRIMARY KEY using index "marketplace_sales_pkey";

alter table "public"."platform_analytics" add constraint "platform_analytics_pkey" PRIMARY KEY using index "platform_analytics_pkey";

alter table "public"."token_distributions" add constraint "token_distributions_pkey" PRIMARY KEY using index "token_distributions_pkey";

alter table "public"."token_metadata" add constraint "token_metadata_pkey" PRIMARY KEY using index "token_metadata_pkey";

alter table "public"."token_transactions" add constraint "token_transactions_pkey" PRIMARY KEY using index "token_transactions_pkey";

alter table "public"."artist_tokens" add constraint "unique_token_per_artist" UNIQUE using index "unique_token_per_artist";

alter table "public"."artist_tokens" add constraint "valid_fee" CHECK (((platform_fee_bps >= 0) AND (platform_fee_bps <= 2000))) not valid;

alter table "public"."artist_tokens" validate constraint "valid_fee";

alter table "public"."artist_tokens" add constraint "valid_supply" CHECK ((total_supply > (0)::numeric)) not valid;

alter table "public"."artist_tokens" validate constraint "valid_supply";

alter table "public"."marketplace_listings" add constraint "marketplace_listings_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."marketplace_listings" validate constraint "marketplace_listings_token_id_fkey";

alter table "public"."marketplace_listings" add constraint "valid_price" CHECK ((price_per_token_xlm > (0)::numeric)) not valid;

alter table "public"."marketplace_listings" validate constraint "valid_price";

alter table "public"."marketplace_listings" add constraint "valid_sale_amount" CHECK ((amount_for_sale > (0)::numeric)) not valid;

alter table "public"."marketplace_listings" validate constraint "valid_sale_amount";

alter table "public"."marketplace_sales" add constraint "marketplace_sales_listing_id_fkey" FOREIGN KEY (listing_id) REFERENCES public.marketplace_listings(id) ON DELETE CASCADE not valid;

alter table "public"."marketplace_sales" validate constraint "marketplace_sales_listing_id_fkey";

alter table "public"."marketplace_sales" add constraint "marketplace_sales_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."marketplace_sales" validate constraint "marketplace_sales_token_id_fkey";

alter table "public"."platform_analytics" add constraint "unique_period" UNIQUE using index "unique_period";

alter table "public"."token_distributions" add constraint "token_distributions_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."token_distributions" validate constraint "token_distributions_token_id_fkey";

alter table "public"."token_distributions" add constraint "valid_artist_amount" CHECK ((artist_amount >= (0)::numeric)) not valid;

alter table "public"."token_distributions" validate constraint "valid_artist_amount";

alter table "public"."token_distributions" add constraint "valid_platform_amount" CHECK ((platform_amount >= (0)::numeric)) not valid;

alter table "public"."token_distributions" validate constraint "valid_platform_amount";

alter table "public"."token_metadata" add constraint "token_metadata_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."token_metadata" validate constraint "token_metadata_token_id_fkey";

alter table "public"."token_transactions" add constraint "token_transactions_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."token_transactions" validate constraint "token_transactions_token_id_fkey";

alter table "public"."token_transactions" add constraint "unique_tx_hash" UNIQUE using index "unique_tx_hash";

set check_function_bodies = off;

create or replace view "public"."artist_token_summary" as  SELECT artist_public_key,
    count(*) AS total_tokens,
    sum(
        CASE
            WHEN ((status)::text = 'distributed'::text) THEN 1
            ELSE 0
        END) AS distributed_tokens,
    sum(artist_amount) AS total_artist_tokens,
    sum(platform_amount) AS total_platform_fees
   FROM public.artist_tokens
  GROUP BY artist_public_key;


CREATE OR REPLACE FUNCTION public.get_token_stats(token_uuid uuid)
 RETURNS TABLE(total_holders bigint, total_transactions bigint, total_volume_xlm numeric, avg_price_xlm numeric)
 LANGUAGE plpgsql
AS $function$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(DISTINCT buyer_public_key) as total_holders,
        COUNT(*) as total_transactions,
        COALESCE(SUM(total_price_xlm), 0) as total_volume_xlm,
        COALESCE(AVG(price_per_token_xlm), 0) as avg_price_xlm
    FROM marketplace_sales
    WHERE token_id = token_uuid;
END;
$function$
;

create or replace view "public"."top_tokens_by_volume" as  SELECT at.id,
    at.token_code,
    at.token_name,
    at.artist_public_key,
    count(DISTINCT ms.id) AS total_sales,
    sum(ms.amount) AS total_volume_tokens,
    sum(ms.total_price_xlm) AS total_volume_xlm
   FROM (public.artist_tokens at
     LEFT JOIN public.marketplace_sales ms ON ((at.id = ms.token_id)))
  WHERE ((at.status)::text = 'distributed'::text)
  GROUP BY at.id, at.token_code, at.token_name, at.artist_public_key
  ORDER BY (sum(ms.total_price_xlm)) DESC NULLS LAST;


CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$
;

grant delete on table "public"."artist_tokens" to "anon";

grant insert on table "public"."artist_tokens" to "anon";

grant references on table "public"."artist_tokens" to "anon";

grant select on table "public"."artist_tokens" to "anon";

grant trigger on table "public"."artist_tokens" to "anon";

grant truncate on table "public"."artist_tokens" to "anon";

grant update on table "public"."artist_tokens" to "anon";

grant delete on table "public"."artist_tokens" to "authenticated";

grant insert on table "public"."artist_tokens" to "authenticated";

grant references on table "public"."artist_tokens" to "authenticated";

grant select on table "public"."artist_tokens" to "authenticated";

grant trigger on table "public"."artist_tokens" to "authenticated";

grant truncate on table "public"."artist_tokens" to "authenticated";

grant update on table "public"."artist_tokens" to "authenticated";

grant delete on table "public"."artist_tokens" to "service_role";

grant insert on table "public"."artist_tokens" to "service_role";

grant references on table "public"."artist_tokens" to "service_role";

grant select on table "public"."artist_tokens" to "service_role";

grant trigger on table "public"."artist_tokens" to "service_role";

grant truncate on table "public"."artist_tokens" to "service_role";

grant update on table "public"."artist_tokens" to "service_role";

grant delete on table "public"."marketplace_listings" to "anon";

grant insert on table "public"."marketplace_listings" to "anon";

grant references on table "public"."marketplace_listings" to "anon";

grant select on table "public"."marketplace_listings" to "anon";

grant trigger on table "public"."marketplace_listings" to "anon";

grant truncate on table "public"."marketplace_listings" to "anon";

grant update on table "public"."marketplace_listings" to "anon";

grant delete on table "public"."marketplace_listings" to "authenticated";

grant insert on table "public"."marketplace_listings" to "authenticated";

grant references on table "public"."marketplace_listings" to "authenticated";

grant select on table "public"."marketplace_listings" to "authenticated";

grant trigger on table "public"."marketplace_listings" to "authenticated";

grant truncate on table "public"."marketplace_listings" to "authenticated";

grant update on table "public"."marketplace_listings" to "authenticated";

grant delete on table "public"."marketplace_listings" to "service_role";

grant insert on table "public"."marketplace_listings" to "service_role";

grant references on table "public"."marketplace_listings" to "service_role";

grant select on table "public"."marketplace_listings" to "service_role";

grant trigger on table "public"."marketplace_listings" to "service_role";

grant truncate on table "public"."marketplace_listings" to "service_role";

grant update on table "public"."marketplace_listings" to "service_role";

grant delete on table "public"."marketplace_sales" to "anon";

grant insert on table "public"."marketplace_sales" to "anon";

grant references on table "public"."marketplace_sales" to "anon";

grant select on table "public"."marketplace_sales" to "anon";

grant trigger on table "public"."marketplace_sales" to "anon";

grant truncate on table "public"."marketplace_sales" to "anon";

grant update on table "public"."marketplace_sales" to "anon";

grant delete on table "public"."marketplace_sales" to "authenticated";

grant insert on table "public"."marketplace_sales" to "authenticated";

grant references on table "public"."marketplace_sales" to "authenticated";

grant select on table "public"."marketplace_sales" to "authenticated";

grant trigger on table "public"."marketplace_sales" to "authenticated";

grant truncate on table "public"."marketplace_sales" to "authenticated";

grant update on table "public"."marketplace_sales" to "authenticated";

grant delete on table "public"."marketplace_sales" to "service_role";

grant insert on table "public"."marketplace_sales" to "service_role";

grant references on table "public"."marketplace_sales" to "service_role";

grant select on table "public"."marketplace_sales" to "service_role";

grant trigger on table "public"."marketplace_sales" to "service_role";

grant truncate on table "public"."marketplace_sales" to "service_role";

grant update on table "public"."marketplace_sales" to "service_role";

grant delete on table "public"."platform_analytics" to "anon";

grant insert on table "public"."platform_analytics" to "anon";

grant references on table "public"."platform_analytics" to "anon";

grant select on table "public"."platform_analytics" to "anon";

grant trigger on table "public"."platform_analytics" to "anon";

grant truncate on table "public"."platform_analytics" to "anon";

grant update on table "public"."platform_analytics" to "anon";

grant delete on table "public"."platform_analytics" to "authenticated";

grant insert on table "public"."platform_analytics" to "authenticated";

grant references on table "public"."platform_analytics" to "authenticated";

grant select on table "public"."platform_analytics" to "authenticated";

grant trigger on table "public"."platform_analytics" to "authenticated";

grant truncate on table "public"."platform_analytics" to "authenticated";

grant update on table "public"."platform_analytics" to "authenticated";

grant delete on table "public"."platform_analytics" to "service_role";

grant insert on table "public"."platform_analytics" to "service_role";

grant references on table "public"."platform_analytics" to "service_role";

grant select on table "public"."platform_analytics" to "service_role";

grant trigger on table "public"."platform_analytics" to "service_role";

grant truncate on table "public"."platform_analytics" to "service_role";

grant update on table "public"."platform_analytics" to "service_role";

grant delete on table "public"."token_distributions" to "anon";

grant insert on table "public"."token_distributions" to "anon";

grant references on table "public"."token_distributions" to "anon";

grant select on table "public"."token_distributions" to "anon";

grant trigger on table "public"."token_distributions" to "anon";

grant truncate on table "public"."token_distributions" to "anon";

grant update on table "public"."token_distributions" to "anon";

grant delete on table "public"."token_distributions" to "authenticated";

grant insert on table "public"."token_distributions" to "authenticated";

grant references on table "public"."token_distributions" to "authenticated";

grant select on table "public"."token_distributions" to "authenticated";

grant trigger on table "public"."token_distributions" to "authenticated";

grant truncate on table "public"."token_distributions" to "authenticated";

grant update on table "public"."token_distributions" to "authenticated";

grant delete on table "public"."token_distributions" to "service_role";

grant insert on table "public"."token_distributions" to "service_role";

grant references on table "public"."token_distributions" to "service_role";

grant select on table "public"."token_distributions" to "service_role";

grant trigger on table "public"."token_distributions" to "service_role";

grant truncate on table "public"."token_distributions" to "service_role";

grant update on table "public"."token_distributions" to "service_role";

grant delete on table "public"."token_metadata" to "anon";

grant insert on table "public"."token_metadata" to "anon";

grant references on table "public"."token_metadata" to "anon";

grant select on table "public"."token_metadata" to "anon";

grant trigger on table "public"."token_metadata" to "anon";

grant truncate on table "public"."token_metadata" to "anon";

grant update on table "public"."token_metadata" to "anon";

grant delete on table "public"."token_metadata" to "authenticated";

grant insert on table "public"."token_metadata" to "authenticated";

grant references on table "public"."token_metadata" to "authenticated";

grant select on table "public"."token_metadata" to "authenticated";

grant trigger on table "public"."token_metadata" to "authenticated";

grant truncate on table "public"."token_metadata" to "authenticated";

grant update on table "public"."token_metadata" to "authenticated";

grant delete on table "public"."token_metadata" to "service_role";

grant insert on table "public"."token_metadata" to "service_role";

grant references on table "public"."token_metadata" to "service_role";

grant select on table "public"."token_metadata" to "service_role";

grant trigger on table "public"."token_metadata" to "service_role";

grant truncate on table "public"."token_metadata" to "service_role";

grant update on table "public"."token_metadata" to "service_role";

grant delete on table "public"."token_transactions" to "anon";

grant insert on table "public"."token_transactions" to "anon";

grant references on table "public"."token_transactions" to "anon";

grant select on table "public"."token_transactions" to "anon";

grant trigger on table "public"."token_transactions" to "anon";

grant truncate on table "public"."token_transactions" to "anon";

grant update on table "public"."token_transactions" to "anon";

grant delete on table "public"."token_transactions" to "authenticated";

grant insert on table "public"."token_transactions" to "authenticated";

grant references on table "public"."token_transactions" to "authenticated";

grant select on table "public"."token_transactions" to "authenticated";

grant trigger on table "public"."token_transactions" to "authenticated";

grant truncate on table "public"."token_transactions" to "authenticated";

grant update on table "public"."token_transactions" to "authenticated";

grant delete on table "public"."token_transactions" to "service_role";

grant insert on table "public"."token_transactions" to "service_role";

grant references on table "public"."token_transactions" to "service_role";

grant select on table "public"."token_transactions" to "service_role";

grant trigger on table "public"."token_transactions" to "service_role";

grant truncate on table "public"."token_transactions" to "service_role";

grant update on table "public"."token_transactions" to "service_role";


  create policy "Anyone can view distributed tokens"
  on "public"."artist_tokens"
  as permissive
  for select
  to public
using (((status)::text = 'distributed'::text));



  create policy "Artists can view own tokens"
  on "public"."artist_tokens"
  as permissive
  for select
  to public
using (((auth.uid())::text = (artist_public_key)::text));



  create policy "Anyone can view active listings"
  on "public"."marketplace_listings"
  as permissive
  for select
  to public
using (((status)::text = 'active'::text));



  create policy "Sellers can update own listings"
  on "public"."marketplace_listings"
  as permissive
  for update
  to public
using (((auth.uid())::text = (seller_public_key)::text));


CREATE TRIGGER update_artist_tokens_updated_at BEFORE UPDATE ON public.artist_tokens FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_marketplace_listings_updated_at BEFORE UPDATE ON public.marketplace_listings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_token_metadata_updated_at BEFORE UPDATE ON public.token_metadata FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
```

## File: .github/workflows/node.yml

```yaml
name: Build and Test

on:
  push:
    branches: ["main"]
  pull_request:

env:
  CARGO_TERM_COLOR: always
  PKG_CONFIG_PATH: /usr/lib/pkgconfig
  PUBLIC_STELLAR_NETWORK: local

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/cache@v3
        with:
          path: |
            ~/.cargo/bin/
            runner/.cargo/bin/
            ~/.cargo/registry/index/
            ~/.cargo/registry/cache/
            ~/.cargo/git/db/
            target/
          key: ${{ runner.os }}-cargo-${{ hashFiles('**/Cargo.lock') }}
      - run: rustup target add wasm32v1-none
      - name: Start Stellar Quickstart
        uses: stellar/quickstart@main
        with:
          tag: testing
          network: local
      - run: sudo apt-get update && sudo apt-get install -y libudev-dev libdbus-1-dev pkg-config
      - name: Install cargo-binstall
        uses: cargo-bins/cargo-binstall@v1.15.6
      - name: Check for stellar-scaffold binary
        run: |
          if ! command -v stellar-scaffold &> /dev/null; then
            echo "stellar-scaffold not found, installing..."
            cargo binstall stellar-scaffold-cli
          else
            echo "stellar-scaffold already installed. Clear cache to force reinstall."
          fi
      - run: npm ci
      - run: npm run lint
      - run: npx prettier . --check
      - name: Build clients before building the project
        run: STELLAR_SCAFFOLD_ENV=development stellar-scaffold build --build-clients
      - run: npm run install:contracts
      - run: npm run build
      - name: Run tests
        run: npm test --if-present
```

## File: .husky/pre-commit

```
npx lint-staged
```

## File: contracts/dj-fungible/src/lib.rs

```rust
#![no_std]
#![allow(dead_code)]

mod contract;

#[cfg(test)]
mod test;
```

## File: contracts/dj-fungible/Cargo.toml

```toml
[package]
name = "dj-fungible"
edition.workspace = true
license.workspace = true
repository.workspace = true
publish = false
version.workspace = true

[lib]
crate-type = ["cdylib"]
doctest = false

[dependencies]
soroban-sdk = { workspace = true }
stellar-access = { workspace = true }
stellar-macros = { workspace = true }
stellar-tokens = { workspace = true }

[dev-dependencies]
soroban-sdk = { workspace = true, features = ["testutils"] }
```

## File: contracts/dj-fungible/Makefile

```
.PHONY: build
```

## File: contracts/dj-nft/src/contract.rs

```rust
use soroban_sdk::{contract, contractimpl, Address, Env, String};
use stellar_access::ownable::{self as ownable, Ownable};
use stellar_macros::default_impl;
use stellar_tokens::non_fungible::{
    enumerable::{Enumerable, NonFungibleEnumerable},
    Base, NonFungibleToken,
};

#[contract]
pub struct DjNftToken;

#[contractimpl]
impl DjNftToken {
    pub fn __constructor(e: &Env, owner: Address, base_uri: String, name: String, symbol: String) {
        Base::set_metadata(e, base_uri, name, symbol);
        ownable::set_owner(e, &owner);
    }

    pub fn award_item(e: &Env, to: Address) -> u32 {
        // access control might be needed
        Enumerable::sequential_mint(e, &to)
    }
}

#[default_impl]
#[contractimpl]
impl NonFungibleToken for DjNftToken {
    type ContractType = Enumerable;
}

#[default_impl]
#[contractimpl]
impl NonFungibleEnumerable for DjNftToken {}

#[default_impl]
#[contractimpl]
impl Ownable for DjNftToken {}
```

## File: contracts/dj-nft/src/lib.rs

```rust
#![no_std]
#![allow(dead_code)]

mod contract;

#[cfg(test)]
mod test;
```

## File: contracts/dj-nft/src/test.rs

```rust
// extern crate std;

// use soroban_sdk::{testutils::Address as _, Address, Env};

// use crate::contract::{ExampleContract, ExampleContractClient};

// fn create_client<'a>(
//     e: &Env,
//     admin: &Address,
//     manager: &Address,
//     initial_supply: &i128,
// ) -> ExampleContractClient<'a> {
//     let address = e.register(ExampleContract, (admin, manager, initial_supply));
//     ExampleContractClient::new(e, &address)
// }

// #[test]
// #[should_panic(expected = "Error(Contract, #113)")]
// fn cannot_transfer_before_allow() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Admin can't transfer to user1 initially (user1 not allowed)
//     e.mock_all_auths();
//     client.transfer(&admin, &user1, &transfer_amount);
// }

// #[test]
// fn transfer_to_allowed_account_works() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user1
//     client.allow_user(&user1, &manager);
//     assert!(client.allowed(&user1));

//     // Now admin can transfer to user1
//     client.transfer(&admin, &user1, &transfer_amount);
//     assert_eq!(client.balance(&user1), transfer_amount);
// }

// #[test]
// #[should_panic(expected = "Error(Contract, #113)")]
// fn cannot_transfer_after_disallow() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user1
//     client.allow_user(&user1, &manager);
//     assert!(client.allowed(&user1));

//     // Now admin can transfer to user1
//     client.transfer(&admin, &user1, &transfer_amount);
//     assert_eq!(client.balance(&user1), transfer_amount);

//     // Disallow user1
//     client.disallow_user(&user1, &manager);
//     assert!(!client.allowed(&user1));

//     // Admin can't transfer to user1 after disallowing
//     client.transfer(&admin, &user1, &100);
// }

// #[test]
// fn allowlist_transfer_from_override_works() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user2
//     client.allow_user(&user2, &manager);
//     assert!(client.allowed(&user2));

//     // Now admin can transfer to user1
//     client.approve(&admin, &user1, &transfer_amount, &1000);
//     client.transfer_from(&user1, &admin, &user2, &transfer_amount);
//     assert_eq!(client.balance(&user2), transfer_amount);
// }

// #[test]
// fn allowlist_approve_override_works() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user1
//     client.allow_user(&user1, &manager);
//     assert!(client.allowed(&user1));

//     // Approve user2 to transfer from user1
//     client.approve(&user1, &user2, &transfer_amount, &1000);
//     assert_eq!(client.allowance(&user1, &user2), transfer_amount);
// }
```

## File: contracts/dj-nft/Cargo.toml

```toml
[package]
name = "dj-nft"
edition.workspace = true
license.workspace = true
repository.workspace = true
publish = false
version.workspace = true

[lib]
crate-type = ["cdylib"]
doctest = false

[dependencies]
soroban-sdk = { workspace = true }
stellar-access = { workspace = true }
stellar-macros = { workspace = true }
stellar-tokens = { workspace = true }

[dev-dependencies]
soroban-sdk = { workspace = true, features = ["testutils"] }
```

## File: contracts/dj-nft/Makefile

```
.PHONY: build
```

## File: contracts/factory/src/events/contract.rs

```rust
use soroban_sdk::{Address, Env, Symbol};

pub(crate) fn contract_initialized(env: &Env, admin: &Address, token: &Address) {
    let topics = (Symbol::new(env, "contract_initialized"), admin);
    env.events().publish(topics, token);
}
```

## File: contracts/factory/src/events/mod.rs

```rust
pub mod contract;
```

## File: contracts/factory/src/methods/initialize.rs

```rust
use soroban_sdk::{Address, Env};

use crate::{
    events,
    storage::{
        admin::{has_admin, set_admin},
        token::set_token,
        types::Error,
    },
};
```

## File: contracts/factory/src/methods/mod.rs

```rust
pub mod initialize;
```

## File: contracts/factory/src/storage/admin.rs

```rust
use soroban_sdk::{Address, Env};

use crate::storage::types::{DataKey, Error};

pub(crate) fn has_admin(env: &Env) -> bool {
    let key = DataKey::Admin;

    env.storage().instance().has(&key)
}

pub(crate) fn set_admin(env: &Env, admin: &Address) {
    let key = DataKey::Admin;

    env.storage().instance().set(&key, admin);
}

pub(crate) fn get_admin(env: &Env) -> Result<Address, Error> {
    let key = DataKey::Admin;

    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}
```

## File: contracts/factory/src/storage/mod.rs

```rust
pub mod admin;
pub mod token; // New module

pub mod types;
```

## File: contracts/factory/src/lib.rs

```rust
#![no_std]
mod contract;
mod events;
mod methods;
mod storage;
mod test;

pub use crate::contract::FactoryContractClient;
```

## File: contracts/factory/src/test.rs

```rust
#[cfg(test)]
mod tests {
    use crate::contract::{FactoryContract, FactoryContractClient};

    use soroban_sdk::{testutils::Address as _, Address, Bytes, Env};

    #[test]
    fn test_deploy_sac() {
        let env = Env::default();
        let contract_id = env.register(FactoryContract, ());
        let client = FactoryContractClient::new(&env, &contract_id);

        // Create a mock issuer address
        let issuer = Address::generate(&env);

        // Create a mock serialized asset (in reality this would be proper asset serialization)
        let serialized_asset = Bytes::from_array(&env, &[1, 2, 3, 4, 5]);

        let sac_address = client.deploy_sac(&issuer, &serialized_asset);

        // Verify that we got a valid address back
        assert!(!sac_address.to_string().is_empty());
    }

    #[test]
    fn demo_deploy_sac() {
        let env = Env::default();
        let contract_id = env.register(FactoryContract, ());
        let client = FactoryContractClient::new(&env, &contract_id);

        let issuer = Address::generate(&env);
        let serialized_asset = Bytes::from_array(&env, &[1, 2, 3, 4, 5]);
        let sac_address = client.deploy_sac(&issuer, &serialized_asset);

        assert!(!sac_address.to_string().is_empty());
    }
}
```

## File: contracts/factory/Cargo.toml

```toml
[package]
name = "factory"
version = "0.0.0"
edition = "2021"
publish = false

[lib]
crate-type = ["lib", "cdylib"]
doctest = false

soroban-sdk = { workspace = true }
soroban-token-sdk = "23.0.2"

[dev-dependencies]
soroban-sdk = { workspace = true, features = ["testutils"] }

[dependencies]
soroban-sdk.workspace = true
```

## File: contracts/factory/deploy.sh

```bash
#!/bin/bash

# Factory Contract Deployment Script
# This script builds and deploys the factory contract to Stellar/Soroban

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NETWORK="${NETWORK:-development}"  # development, staging, testnet, or production
SOURCE_ACCOUNT="${SOURCE_ACCOUNT:-me}"  # Default account from environments.toml
ADMIN_ADDRESS="${ADMIN_ADDRESS:-me}"  # Admin address (can be account name or address)
TOKEN_ADDRESS="${TOKEN_ADDRESS:-}"  # Token address (required)
FUNGIBLE_WASM_HASH="${FUNGIBLE_WASM_HASH:-}"  # Fungible WASM hash (optional, will be fetched if not provided)
CONTRACT_ALIAS="${CONTRACT_ALIAS:-factory}"  # Alias to save the contract ID (optional)

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
FACTORY_DIR="$SCRIPT_DIR"
DJ_FUNGIBLE_DIR="$PROJECT_ROOT/contracts/dj-fungible"

echo -e "${GREEN}=== Factory Contract Deployment ===${NC}"
echo "Network: $NETWORK"
echo "Source Account: $SOURCE_ACCOUNT"
echo ""

# Function to print error and exit
error_exit() {
    echo -e "${RED}Error: $1${NC}" >&2
    exit 1
}

# Function to print info
info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Function to print success
success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Map testnet to staging for compatibility (must be after function definitions)
NETWORK_ORIGINAL="$NETWORK"

# Step 1: Build the factory contract
info "Step 1: Building factory contract..."
cd "$FACTORY_DIR"
make build || error_exit "Failed to build factory contract"
success "Factory contract built successfully"

# Step 2: Get or install fungible WASM hash
if [ -z "$FUNGIBLE_WASM_HASH" ]; then
    info "Step 2: Building and installing dj-fungible contract to get WASM hash..."

    if [ ! -d "$DJ_FUNGIBLE_DIR" ]; then
        error_exit "dj-fungible contract directory not found at $DJ_FUNGIBLE_DIR"
    fi

    cd "$DJ_FUNGIBLE_DIR"

    # Build the fungible contract and capture output to extract hash
    info "Building dj-fungible contract..."
    if [ -f "Makefile" ]; then
        BUILD_OUTPUT=$(make build 2>&1) || error_exit "Failed to build dj-fungible contract"
    else
        BUILD_OUTPUT=$(stellar contract build 2>&1) || error_exit "Failed to build dj-fungible contract"
    fi

    # Try to extract hash from build output first (faster, no network call needed)
    BUILD_HASH=$(echo "$BUILD_OUTPUT" | grep -i "Wasm Hash:" | grep -oE '[a-f0-9]{64}' | head -n 1)

    # Find the WASM file
    WASM_FILE=$(find "$PROJECT_ROOT/target" -name "dj_fungible.wasm" -o -name "dj-fungible.wasm" | head -n 1)

    if [ -z "$WASM_FILE" ]; then
        error_exit "Could not find dj-fungible WASM file in target directory"
    fi

    # If we got the hash from build output, we can use it directly
    # Otherwise, install the WASM to get the hash from the network
    if [ -n "$BUILD_HASH" ]; then
        info "Using WASM hash from build output: $BUILD_HASH"
        FUNGIBLE_WASM_HASH="$BUILD_HASH"

        # Optionally install it to make it available on the network
        info "Installing dj-fungible WASM to network (optional)..."
        stellar contract install \
            --wasm "$WASM_FILE" \
            --network "$NETWORK" \
            --source-account "$SOURCE_ACCOUNT" \
            >/dev/null 2>&1 || info "Note: Install step had issues, but hash is available from build"
    else
        info "Installing dj-fungible WASM to get hash..."

        # Install the WASM and get the hash
        # Note: stellar contract install returns the hash directly or in the output
        INSTALL_OUTPUT=$(stellar contract install \
            --wasm "$WASM_FILE" \
            --network "$NETWORK" \
            --source-account "$SOURCE_ACCOUNT" \
            2>&1)

        # Extract hash from output - it could be in various formats
        # Try to find a 64-character hex string (32 bytes)
        FUNGIBLE_WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -oE '[a-f0-9]{64}' | head -n 1)

        # If not found, try looking for "hash:" pattern
        if [ -z "$FUNGIBLE_WASM_HASH" ]; then
            FUNGIBLE_WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -i "hash" | grep -oE '[a-f0-9]{64}' | head -n 1)
        fi

        # If still not found, the hash might be on a line by itself
        if [ -z "$FUNGIBLE_WASM_HASH" ]; then
            FUNGIBLE_WASM_HASH=$(echo "$INSTALL_OUTPUT" | sed -n 's/^[[:space:]]*\([a-f0-9]\{64\}\)[[:space:]]*$/\1/p' | head -n 1)
        fi
    fi

    if [ -z "$FUNGIBLE_WASM_HASH" ]; then
        echo -e "${YELLOW}Install output:${NC}"
        echo "$INSTALL_OUTPUT"
        error_exit "Could not extract WASM hash from install output. Please set FUNGIBLE_WASM_HASH manually."
    fi

    success "Fungible WASM hash: $FUNGIBLE_WASM_HASH"
else
    info "Step 2: Using provided fungible WASM hash: $FUNGIBLE_WASM_HASH"
fi

# Step 3: Check for token address
if [ -z "$TOKEN_ADDRESS" ]; then
    error_exit "TOKEN_ADDRESS is required. Please set it as an environment variable or edit this script."
fi

info "Using token address: $TOKEN_ADDRESS"

# Step 4: Deploy the factory contract
info "Step 3: Deploying factory contract..."
cd "$FACTORY_DIR"

# Find the factory WASM file - prioritize optimized, then release build
# First try the optimized WASM (if available)
FACTORY_WASM="$PROJECT_ROOT/target/wasm32v1-none/release/factory.optimized.wasm"

if [ ! -f "$FACTORY_WASM" ]; then
    # Try the standard release location
    FACTORY_WASM="$PROJECT_ROOT/target/wasm32v1-none/release/factory.wasm"
fi

if [ ! -f "$FACTORY_WASM" ]; then
    # Fallback to searching for optimized WASM
    FACTORY_WASM=$(find "$PROJECT_ROOT/target" -path "*/wasm32v1-none/release/factory.optimized.wasm" -type f | head -n 1)
fi

if [ -z "$FACTORY_WASM" ] || [ ! -f "$FACTORY_WASM" ]; then
    # Fallback to searching for standard WASM
    FACTORY_WASM=$(find "$PROJECT_ROOT/target" -path "*/wasm32v1-none/release/factory.wasm" -type f | head -n 1)
fi

if [ -z "$FACTORY_WASM" ] || [ ! -f "$FACTORY_WASM" ]; then
    # Last resort: find any factory.wasm
    FACTORY_WASM=$(find "$PROJECT_ROOT/target" -name "factory*.wasm" -type f | grep -v "/deps/" | head -n 1)
fi

if [ -z "$FACTORY_WASM" ] || [ ! -f "$FACTORY_WASM" ]; then
    error_exit "Could not find factory WASM file in target directory. Please build the contract first: make build"
fi

info "Using WASM file: $FACTORY_WASM"

# Validate required arguments before deployment
if [ -z "$ADMIN_ADDRESS" ]; then
    error_exit "ADMIN_ADDRESS is required but not set"
fi

if [ -z "$FUNGIBLE_WASM_HASH" ]; then
    error_exit "FUNGIBLE_WASM_HASH is required but not set (should have been set in Step 2)"
fi

# Pre-deployment checks
info "Pre-deployment checks:"
echo "  - Network: $NETWORK"
echo "  - Source account: $SOURCE_ACCOUNT"
echo "  - Admin address: $ADMIN_ADDRESS"
echo ""
echo -e "${YELLOW}Note: Make sure your source account has sufficient XLM to pay transaction fees.${NC}"
echo ""

info "Deploying with constructor arguments:"
info "  --admin $ADMIN_ADDRESS"
info "  --token $TOKEN_ADDRESS"
info "  --fungible_wasm $FUNGIBLE_WASM_HASH"
echo ""

# Build deploy command array for proper argument handling
DEPLOY_ARGS=(
    "contract" "deploy"
    "--wasm" "$FACTORY_WASM"
    "--network" "$NETWORK"
    "--source-account" "$SOURCE_ACCOUNT"
)

# Add alias if provided
if [ -n "$CONTRACT_ALIAS" ]; then
    DEPLOY_ARGS+=("--alias" "$CONTRACT_ALIAS")
fi

# Add constructor arguments separator and arguments
# IMPORTANT: The '--' separator is required to separate CLI flags from constructor arguments
DEPLOY_ARGS+=("--")
DEPLOY_ARGS+=("--admin" "$ADMIN_ADDRESS")
DEPLOY_ARGS+=("--token" "$TOKEN_ADDRESS")
DEPLOY_ARGS+=("--fungible_wasm" "$FUNGIBLE_WASM_HASH")

# Deploy the contract
info "Executing deployment command:"
echo "  stellar contract deploy \\"
echo "    --wasm $FACTORY_WASM \\"
echo "    --network $NETWORK \\"
echo "    --source-account $SOURCE_ACCOUNT \\"
if [ -n "$CONTRACT_ALIAS" ]; then
    echo "    --alias $CONTRACT_ALIAS \\"
fi
echo "    -- \\"
echo "    --admin $ADMIN_ADDRESS \\"
echo "    --token $TOKEN_ADDRESS \\"
echo "    --fungible_wasm $FUNGIBLE_WASM_HASH"
echo ""

# Create a temporary file to capture output while also showing it in real-time
DEPLOY_OUTPUT_FILE=$(mktemp)
trap "rm -f $DEPLOY_OUTPUT_FILE" EXIT

info "Starting deployment (this may take a moment)..."
echo ""

# Run the command, showing output in real-time and capturing it
if ! stellar "${DEPLOY_ARGS[@]}" 2>&1 | tee "$DEPLOY_OUTPUT_FILE"; then
    DEPLOY_EXIT_CODE=${PIPESTATUS[0]}
    DEPLOY_OUTPUT=$(cat "$DEPLOY_OUTPUT_FILE")
    echo ""
    echo -e "${RED}Deployment failed with exit code $DEPLOY_EXIT_CODE${NC}"
    echo ""
    echo "Full output:"
    echo "$DEPLOY_OUTPUT"
    error_exit "Contract deployment failed"
fi

DEPLOY_OUTPUT=$(cat "$DEPLOY_OUTPUT_FILE")
DEPLOY_EXIT_CODE=0
rm -f "$DEPLOY_OUTPUT_FILE"
trap - EXIT

echo ""
success "Deployment command completed successfully"

# Extract contract ID from output
# Contract IDs are 56 characters starting with 'C'
CONTRACT_ID=$(echo "$DEPLOY_OUTPUT" | grep -oE 'C[A-Z0-9]{55}' | head -n 1)

# If alias was used, try to get the contract ID from the alias
if [ -z "$CONTRACT_ID" ] && [ -n "$CONTRACT_ALIAS" ]; then
    # Try to read from environments.toml or .stellar directory
    if [ -f "$PROJECT_ROOT/.stellar/identity/$CONTRACT_ALIAS.json" ]; then
        CONTRACT_ID=$(grep -o '"contract_id":"[^"]*"' "$PROJECT_ROOT/.stellar/identity/$CONTRACT_ALIAS.json" | cut -d'"' -f4)
    fi
fi

# If still not found, try parsing the output for "Contract ID:" pattern
if [ -z "$CONTRACT_ID" ]; then
    CONTRACT_ID=$(echo "$DEPLOY_OUTPUT" | grep -i "contract id" | grep -oE 'C[A-Z0-9]{55}' | head -n 1)
fi

# If still not found, try any line that looks like a contract ID
if [ -z "$CONTRACT_ID" ]; then
    CONTRACT_ID=$(echo "$DEPLOY_OUTPUT" | grep -oE '^C[A-Z0-9]{55}$' | head -n 1)
fi

if [ -z "$CONTRACT_ID" ]; then
    echo -e "${YELLOW}Warning: Could not extract contract ID from deployment output.${NC}"
    echo "Deployment output:"
    echo "$DEPLOY_OUTPUT"
    echo ""
    echo "If the deployment was successful, you can find the contract ID in the output above."
    if [ -n "$CONTRACT_ALIAS" ]; then
        echo "The contract was saved with alias '$CONTRACT_ALIAS'."
        echo "You can check it with: stellar contract inspect --alias $CONTRACT_ALIAS"
    fi
else
    success "Factory contract deployed successfully!"
    echo ""
    echo -e "${GREEN}Contract ID: $CONTRACT_ID${NC}"
    if [ -n "$CONTRACT_ALIAS" ]; then
        echo -e "${GREEN}Alias: $CONTRACT_ALIAS${NC}"
    fi
    echo ""
    echo "You can now use this contract ID to interact with the factory contract."
    echo ""
    if [ -n "$CONTRACT_ALIAS" ]; then
        echo "The contract ID has been saved with alias '$CONTRACT_ALIAS'."
        echo "You can use it with: --contract-id $CONTRACT_ALIAS"
    else
        echo "To save this contract ID, you can create an alias:"
        echo "  stellar registry create-alias factory --contract-id $CONTRACT_ID"
    fi
fi

# Print summary
echo ""
echo -e "${GREEN}=== Deployment Summary ===${NC}"
echo "Network: $NETWORK"
echo "Contract ID: ${CONTRACT_ID:-Not found}"
echo "Admin: $ADMIN_ADDRESS"
echo "Token: $TOKEN_ADDRESS"
echo "Fungible WASM Hash: $FUNGIBLE_WASM_HASH"
echo ""
```

## File: contracts/factory/Makefile

```
default: build

all: test

test: build
	cargo test

build:
	stellar contract build
	@ls -l target/wasm32v1-none/release/*.wasm

fmt:
	cargo fmt --all

clean:
	cargo clean
```

## File: scripts/install-fungible-wasm.sh

```bash
#!/bin/bash

# Script to install the fungible token WASM on the network
# This is required before creating tokens through the factory contract

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
NETWORK="${NETWORK:-development}"
SOURCE_ACCOUNT="${SOURCE_ACCOUNT:-me}"
SECRET_KEY="${SECRET_KEY:-}"  # Optional: secret key for signing (use with caution)
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DJ_FUNGIBLE_DIR="$PROJECT_ROOT/contracts/dj-fungible"

echo -e "${GREEN}=== Installing Fungible Token WASM ===${NC}"
echo "Network: $NETWORK"
echo "Source Account: $SOURCE_ACCOUNT"
if [ -n "$SECRET_KEY" ]; then
    echo "Using secret key: **** (hidden)"
fi
echo ""

# Function to print error and exit
error_exit() {
    echo -e "${RED}Error: $1${NC}" >&2
    exit 1
}

# Function to print info
info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Function to print success
success() {
    echo -e "${GREEN}✓ $1${NC}"
}

# Step 1: Build the fungible contract
info "Step 1: Building dj-fungible contract..."
cd "$DJ_FUNGIBLE_DIR"

if [ ! -d "$DJ_FUNGIBLE_DIR" ]; then
    error_exit "dj-fungible contract directory not found at $DJ_FUNGIBLE_DIR"
fi

# Build the contract
if [ -f "Makefile" ]; then
    info "Building with Makefile..."
    make build || error_exit "Failed to build dj-fungible contract"
else
    info "Building with stellar contract build..."
    stellar contract build || error_exit "Failed to build dj-fungible contract"
fi

success "Contract built successfully"

# Step 2: Find the WASM file
info "Step 2: Locating WASM file..."
WASM_FILE=$(find "$PROJECT_ROOT/target" -name "dj_fungible.wasm" -o -name "dj-fungible.wasm" | head -n 1)

if [ -z "$WASM_FILE" ]; then
    error_exit "Could not find dj-fungible WASM file in target directory. Please build the contract first."
fi

info "Found WASM file: $WASM_FILE"

# Step 3: Install the WASM
info "Step 3: Installing WASM on network..."
echo ""

# Check if source account is configured for the network
if [[ "$NETWORK" != "development" ]]; then
    info "Checking account configuration for $NETWORK network..."

    # Check if account exists in .stellar/identity
    IDENTITY_DIR="$PROJECT_ROOT/.stellar/identity"
    if [ -d "$IDENTITY_DIR" ]; then
        # Try to find the account
        ACCOUNT_FILE=$(find "$IDENTITY_DIR" -name "${SOURCE_ACCOUNT}.json" -o -name "${SOURCE_ACCOUNT}.toml" 2>/dev/null | head -n 1)
        if [ -z "$ACCOUNT_FILE" ]; then
            echo -e "${YELLOW}Warning: Account '$SOURCE_ACCOUNT' not found in .stellar/identity/${NC}"
            echo ""
            echo "For $NETWORK network, you need to configure your account first:"
            echo "  1. Add the account to environments.toml under [${NETWORK}.accounts]"
            echo "  2. Or use 'stellar keys fund' to fund and configure the account"
            echo "  3. Or provide the secret key using --secret-key flag"
            echo ""
            echo "Alternatively, if you have a secret key, you can use:"
            echo "  SECRET_KEY=<your-secret-key> ./scripts/install-fungible-wasm.sh --network $NETWORK"
            echo ""
            if [ -t 0 ]; then
                # Only ask for input if running interactively
                read -p "Do you want to continue with the current account? (y/n) " -n 1 -r
                echo ""
                if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                    error_exit "Installation cancelled by user"
                fi
            else
                echo -e "${YELLOW}Non-interactive mode: Attempting to continue...${NC}"
                echo "If this fails, configure your account first or provide SECRET_KEY environment variable."
            fi
        else
            info "Found account configuration: $ACCOUNT_FILE"
        fi
    fi
fi

# Build the install command
INSTALL_CMD="stellar contract install --wasm $WASM_FILE --network $NETWORK"

if [ -n "$SECRET_KEY" ]; then
    # Use secret key if provided
    INSTALL_CMD="$INSTALL_CMD --secret-key $SECRET_KEY"
    echo "Executing: stellar contract install --wasm $WASM_FILE --network $NETWORK --secret-key ****"
else
    # Use source account
    INSTALL_CMD="$INSTALL_CMD --source-account $SOURCE_ACCOUNT"
    echo "Executing: stellar contract install --wasm $WASM_FILE --network $NETWORK --source-account $SOURCE_ACCOUNT"
fi
echo ""

INSTALL_OUTPUT=$(eval "$INSTALL_CMD" 2>&1)

INSTALL_EXIT_CODE=$?

if [ $INSTALL_EXIT_CODE -ne 0 ]; then
    echo -e "${RED}Installation failed with exit code $INSTALL_EXIT_CODE${NC}"
    echo ""
    echo "Output:"
    echo "$INSTALL_OUTPUT"
    echo ""

    # Check for common errors
    if echo "$INSTALL_OUTPUT" | grep -qi "no sign with key provided\|signing key\|secret key"; then
        echo -e "${YELLOW}Troubleshooting: Signing key issue${NC}"
        echo ""
        echo "The account '$SOURCE_ACCOUNT' is not properly configured for signing transactions."
        echo ""
        echo "Solutions:"
        echo ""
        echo "1. For development network:"
        echo "   - Make sure 'me' account is configured in environments.toml"
        echo "   - Run 'stellar keys fund me --network development' to fund the account"
        echo ""
        echo "2. For testnet/mainnet:"
        echo "   - Add your account to environments.toml:"
        echo "     [[${NETWORK}.accounts]]"
        echo "     name = \"$SOURCE_ACCOUNT\""
        echo "     secret-key = \"<your-secret-key>\""
        echo ""
        echo "   - Or use secret key directly with this script:"
        echo "     SECRET_KEY=<your-secret-key> ./scripts/install-fungible-wasm.sh --network $NETWORK"
        echo ""
        echo "   - Or fund the account first:"
        echo "     stellar keys fund $SOURCE_ACCOUNT --network $NETWORK"
        echo ""
        echo "   - Or add account to environments.toml:"
        echo "     [[${NETWORK}.accounts]]"
        echo "     name = \"your-account-name\""
        echo "     secret-key = \"<your-secret-key>\""
        echo "     default = true"
        echo ""
        echo "     Then use: SOURCE_ACCOUNT=your-account-name ./scripts/install-fungible-wasm.sh --network $NETWORK"
        echo ""
    fi

    error_exit "Failed to install WASM"
fi

# Extract hash from output
WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -oE '[a-f0-9]{64}' | head -n 1)

if [ -z "$WASM_HASH" ]; then
    # Try alternative patterns
    WASM_HASH=$(echo "$INSTALL_OUTPUT" | grep -i "hash" | grep -oE '[a-f0-9]{64}' | head -n 1)
fi

if [ -z "$WASM_HASH" ]; then
    echo -e "${YELLOW}Warning: Could not extract WASM hash from output${NC}"
    echo "Install output:"
    echo "$INSTALL_OUTPUT"
    echo ""
    echo "Installation may have succeeded. Please check the output above for the hash."
else
    success "WASM installed successfully!"
    echo ""
    echo -e "${GREEN}WASM Hash: $WASM_HASH${NC}"
    echo ""
    echo "You can now create tokens using the factory contract."
    echo ""
    echo "To verify the hash matches the factory contract, run:"
    echo "  stellar contract invoke \\"
    echo "    --id CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN \\"
    echo "    --network $NETWORK \\"
    echo "    -- \\"
    echo "    get_fungible_wasm"
fi

echo ""
echo -e "${GREEN}=== Installation Complete ===${NC}"
```

## File: scripts/QUICK_FIX_TESTNET.md

````markdown
# Quick Fix: "No sign with key provided" Error on Testnet

## Problem

You're getting this error when trying to install WASM on testnet:

```
❌ error: No sign with key provided
```

## Solution

You have **3 options** to fix this:

### Option 1: Use Secret Key with Script (Fastest)

```bash
SECRET_KEY=<your-secret-key> NETWORK=testnet ./scripts/install-fungible-wasm.sh
```

Replace `<your-secret-key>` with your actual secret key (starts with `S`).

### Option 2: Use Secret Key Directly (Manual)

```bash
cd contracts/dj-fungible
make build

stellar contract install \
  --wasm ../../target/wasm32v1-none/release/dj_fungible.wasm \
  --network testnet \
  --secret-key <your-secret-key>
```

### Option 3: Configure Account in environments.toml (Best for Repeated Use)

1. Edit `environments.toml`:

```toml
[[testnet.accounts]]
name = "testnet-user"
secret-key = "<your-secret-key>"
default = true
```

2. Run the script:

```bash
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

## Note about Command Names

- **`stellar contract install`** - Modern command (recommended)
- **`stellar contract upload`** - Older command name (may still work)

Both commands do the same thing. If `upload` doesn't work, try `install`.

## Getting Your Secret Key

If you don't have your secret key:

1. Check if it's stored in `.stellar/identity/` directory
2. Check your wallet/keystore
3. If you lost it, you'll need to create a new account and fund it

## Getting Testnet XLM

To fund your testnet account, visit:

- https://laboratory.stellar.org/#account-creator?network=test

## Security Warning

⚠️ **Never commit secret keys to git!** Use environment variables or `.gitignore` the secrets.
````

## File: scripts/README.md

````markdown
# Scripts

## install-fungible-wasm.sh

This script installs the dj-fungible token WASM on the Stellar network. This is required before creating tokens through the factory contract.

### Usage

```bash
# Using default settings (development network, "me" account)
./scripts/install-fungible-wasm.sh

# With custom network and account
NETWORK=development SOURCE_ACCOUNT=me ./scripts/install-fungible-wasm.sh

# For testnet with secret key (quick method)
SECRET_KEY=<your-secret-key> NETWORK=testnet ./scripts/install-fungible-wasm.sh

# For testnet with configured account
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

### What it does

1. Builds the dj-fungible contract
2. Locates the compiled WASM file
3. Installs the WASM on the specified network
4. Displays the WASM hash for verification

### Prerequisites

- Stellar CLI installed and configured
- An account with sufficient funds for the installation transaction
- The dj-fungible contract source code in `contracts/dj-fungible/`

### Troubleshooting

#### Error: "No sign with key provided"

This error occurs when your account is not configured for signing transactions on testnet/mainnet.

**Quick Fix:**

```bash
SECRET_KEY=<your-secret-key> NETWORK=testnet ./scripts/install-fungible-wasm.sh
```

**Better Solution:**

1. Add your account to `environments.toml`:

   ```toml
   [[testnet.accounts]]
   name = "testnet-user"
   secret-key = "<your-secret-key>"
   default = true
   ```

2. Run the script:
   ```bash
   NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
   ```

See `QUICK_FIX_TESTNET.md` for more details.

#### Other Issues

If the installation fails:

1. Check that your account has sufficient funds
2. Verify the network name is correct
3. Ensure the source account is properly configured in `environments.toml`
4. Check that the contract builds successfully
5. For testnet, make sure you have testnet XLM (get it from https://laboratory.stellar.org/#account-creator?network=test)

### Verifying Installation

After installation, verify the WASM hash matches what's stored in the factory contract:

```bash
stellar contract invoke \
  --id CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN \
  --network development \
  -- \
  get_fungible_wasm
```

The returned hash should match the hash displayed by the install script.

## Important Note: Constructor Signature Mismatch

**⚠️ WARNING:** There is currently a mismatch between what the factory contract expects and what the dj-fungible contract provides:

- **Factory expects:** `(owner: Address, decimals: u32, name: String, symbol: String)`
- **dj-fungible provides:** `(admin: Address, manager: Address, initial_supply: i128)`

This means that even after installing the WASM, token creation will fail due to the constructor signature mismatch. The dj-fungible contract needs to be updated to match the factory's expected signature, or the factory needs to be updated to match the dj-fungible contract's signature.
````

## File: scripts/TESTNET_SETUP.md

````markdown
# Testnet Setup Guide

## Installing WASM on Testnet

When installing the fungible token WASM on testnet, you need to configure your account for signing transactions.

### Option 1: Use Secret Key Directly (Quick but Less Secure)

```bash
SECRET_KEY=<your-secret-key> ./scripts/install-fungible-wasm.sh --network testnet
```

⚠️ **Security Warning**: Don't expose your secret key in command history or logs. Consider using environment variables or a secrets manager.

### Option 2: Configure Account in environments.toml (Recommended)

1. Edit `environments.toml` and add your testnet account:

```toml
[[testnet.accounts]]
name = "testnet-user"
secret-key = "<your-secret-key>"
default = true
```

2. Then run the install script:

```bash
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

### Option 3: Fund and Configure Account

1. Fund your account using Stellar CLI:

```bash
stellar keys fund <your-account-address> --network testnet
```

2. Add the account to `environments.toml`:

```toml
[[testnet.accounts]]
name = "testnet-user"
default = true
```

3. The keys will be saved to `.stellar/identity/testnet-user.json`

4. Run the install script:

```bash
NETWORK=testnet SOURCE_ACCOUNT=testnet-user ./scripts/install-fungible-wasm.sh
```

### Option 4: Manual Installation

If the script doesn't work, you can install manually:

```bash
# Build the contract
cd contracts/dj-fungible
make build

# Install with secret key
stellar contract install \
  --wasm ../../target/wasm32v1-none/release/dj_fungible.wasm \
  --network testnet \
  --secret-key <your-secret-key>
```

### Troubleshooting

#### Error: "No sign with key provided"

This means your account is not configured for signing. Solutions:

1. **Add account to environments.toml** (see Option 2 above)
2. **Use SECRET_KEY environment variable** (see Option 1 above)
3. **Fund the account first** (see Option 3 above)

#### Error: "Account not found"

Make sure:

- The account address is correct
- The account exists on testnet
- The account has been funded (testnet accounts need XLM for fees)

#### Getting Testnet XLM

For testnet, you can get free XLM from:

- Stellar Laboratory: https://laboratory.stellar.org/#account-creator?network=test
- Friendbot (if available): https://friendbot.stellar.org/

### Verifying Installation

After installation, verify the WASM hash:

```bash
stellar contract invoke \
  --id CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN \
  --network testnet \
  -- \
  get_fungible_wasm
```

The returned hash should match the hash from the install command output.

### Security Best Practices

1. **Never commit secret keys** to version control
2. **Use environment variables** for secret keys in production
3. **Use account names** from environments.toml instead of raw addresses
4. **Rotate keys** regularly for production accounts
5. **Use separate accounts** for development and production
````

## File: src/components/layout/Box.tsx

```typescript
import React from "react";

// Define gap values (you may need to adjust these based on your design system)
const gapValues = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  xxl: "3rem", // 48px
};

export const Box = ({
  gap,
  children,
  customValue,
  addlClassName,
  direction = "column",
  justify = "baseline",
  align = "stretch",
  wrap,
  style,
  ...props
}: (
  | { gap: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"; customValue?: undefined }
  | { gap: "custom"; customValue: string }
) & {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode;
  addlClassName?: string;
  direction?: "column" | "row" | "column-reverse" | "row-reverse";
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "end"
    | "left"
    | "right"
    | "baseline";
  align?: "center" | "end" | "start" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap";
  style?: React.CSSProperties;
}) => {
  const boxStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    gap: gap === "custom" ? customValue : gapValues[gap],
    ...(wrap ? { flexWrap: wrap } : {}),
    ...style,
  };

  return (
    <div className={addlClassName} style={boxStyle} {...props}>
      {children}
    </div>
  );
};
```

## File: src/components/ui/alert.tsx

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
```

## File: src/components/ui/avatar.tsx

```typescript
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
```

## File: src/components/ui/badge.tsx

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge };
```

## File: src/components/ui/button.tsx

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
```

## File: src/components/ui/card.tsx

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
```

## File: src/components/ui/dialog.tsx

```typescript
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
```

## File: src/components/ui/input.tsx

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
```

## File: src/components/ui/label.tsx

```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
```

## File: src/components/ui/select.tsx

```typescript
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
```

## File: src/components/ui/sonner.tsx

```typescript
"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
```

## File: src/components/ui/table.tsx

```typescript
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
```

## File: src/components/ui/textarea.tsx

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
```

## File: src/components/ui/tooltip.tsx

```typescript
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipPrimitiveProvider = TooltipPrimitive.Provider;

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitiveProvider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

## File: src/components/BottomNav.module.css

```css
.bottomNav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #030712;
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
  min-height: 64px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.navItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 12px;
  text-decoration: none;
  color: #9ca3af;
  transition: all 0.2s ease;
  flex: 1;
  max-width: 120px;
  cursor: pointer;
  border-radius: 8px;
}

.navItem:hover {
  color: #d1d5db;
  background-color: rgba(255, 255, 255, 0.05);
}

.navItem.active {
  color: #fcd34d;
  background-color: rgba(252, 211, 77, 0.1);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.icon svg {
  width: 100%;
  height: 100%;
}

.label {
  font-size: 12px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  line-height: 1;
}
```

## File: src/components/BottomNav.tsx

```typescript
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    path: "/",
    label: "Home",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    path: "/explore",
    label: "Explore",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    path: "/wallet",
    label: "Wallet",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M3 11h18" />
        <path d="M7 7V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1" />
        <circle cx="17" cy="14" r="1" />
      </svg>
    ),
  },
  {
    path: "/activity",
    label: "Activity",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    path: "/profile",
    label: "Profile",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const BottomNav: React.FC = () => {
  return (
    <nav className={styles.bottomNav}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
          }
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
```

## File: src/components/ConnectAccount.module.css

```css
.connectAccount {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  vertical-align: middle;
  flex-wrap: nowrap;
}

/* Tablet adjustments */
@media (max-width: 768px) {
  .connectAccount {
    gap: 6px;
  }
}

/* Small mobile - hide wallet balance text */
@media (max-width: 640px) {
  .connectAccount {
    gap: 4px;
  }

  /* Hide wallet balance text on small screens */
  .connectAccount :global(.wallet-balance-text),
  .connectAccount :global([class*="Text"]) {
    display: none !important;
  }

  /* Ensure wallet button container doesn't break */
  .connectAccount :global(.wallet-button-container) {
    gap: 0;
  }
}

/* Very small mobile */
@media (max-width: 480px) {
  .connectAccount {
    gap: 4px;
  }

  /* Make buttons smaller */
  .connectAccount :global(button) {
    padding: 6px 12px !important;
    font-size: 12px !important;
  }
}

/* Extra small screens */
@media (max-width: 360px) {
  .connectAccount {
    gap: 3px;
  }

  .connectAccount :global(button) {
    padding: 5px 10px !important;
    font-size: 11px !important;
  }
}
```

## File: src/components/CreateNftCollectionForm.tsx

```typescript
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useCreateNftCollection } from "@/hooks/useCreateNftCollection";

interface CreateNftCollectionFormProps {
  visible: boolean;
  onClose: () => void;
}

export const CreateNftCollectionForm: React.FC<
  CreateNftCollectionFormProps
> = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [baseUri, setBaseUri] = useState("");
  const { createCollection, loading, error } = useCreateNftCollection();

  useEffect(() => {
    if (!visible) {
      setName("");
      setSymbol("");
      setBaseUri("");
    }
  }, [visible]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    const result = await createCollection({ name, symbol, baseUri });
    if (result) {
      onClose();
    }
  };

  return (
    <Dialog open={visible} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md" showCloseButton={!loading}>
        <DialogHeader>
          <DialogTitle>Create NFT Collection</DialogTitle>
          <DialogDescription>
            Deploy a new NFT smart contract to reward your fans.
          </DialogDescription>
        </DialogHeader>
        <form
          id="nft-collection-form"
          onSubmit={(event) => void handleSubmit(event)}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="collection-name">Collection Name</Label>
            <Input
              id="collection-name"
              placeholder='e.g., "Genesis Merch Pass"'
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="collection-symbol">Symbol</Label>
            <Input
              id="collection-symbol"
              placeholder='e.g., "MERCH"'
              value={symbol}
              onChange={(event) => setSymbol(event.target.value.toUpperCase())}
              disabled={loading}
              maxLength={12}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="collection-base-uri">Base URI</Label>
            <Input
              id="collection-base-uri"
              placeholder='e.g., "ipfs://bafybeic.../metadata/"'
              value={baseUri}
              onChange={(event) => setBaseUri(event.target.value)}
              disabled={loading}
              required
            />
            <p className="text-xs text-muted-foreground">
              This is the metadata URL prefix for your NFTs (e.g.,{" "}
              <code className="font-mono">ipfs://.../</code>).
            </p>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" form="nft-collection-form" disabled={loading}>
            {loading ? (
              <>
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Creating...
              </>
            ) : (
              "Create Collection"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/components/HeaderLogo.module.css

```css
.logoLink {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.2s ease;
  padding: 4px 0;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.logoLink:hover {
  color: var(--accent);
  text-decoration: none;
}

.logoImage {
  width: 150px;
  height: 50px;
  object-fit: contain;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.logoLink:hover .logoImage {
  transform: scale(1.1);
}

.logoText {
  font-size: 20px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.5px;
  color: inherit;
}

/* Tablet adjustments */
@media (max-width: 768px) {
  .logoImage {
    width: 120px;
    height: 40px;
  }
}

/* Small mobile */
@media (max-width: 640px) {
  .logoImage {
    width: 110px;
    height: 36px;
  }

  .logoLink {
    padding: 2px 0;
  }
}

/* Very small mobile */
@media (max-width: 480px) {
  .logoImage {
    width: 95px;
    height: 30px;
  }

  .logoLink {
    padding: 0;
  }
}

/* Extra small screens */
@media (max-width: 360px) {
  .logoImage {
    width: 85px;
    height: 28px;
  }
}
```

## File: src/components/HeaderLogo.tsx

```typescript
import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderLogo.module.css";

const HeaderLogo: React.FC = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <img
        src="/logo-dropsland.png"
        alt="Dropsland"
        className={styles.logoImage}
      />
    </Link>
  );
};

export default HeaderLogo;
```

## File: src/components/ProfileTypeSelector.module.css

```css
.selector {
  display: inline-flex;
  align-items: stretch;
  background-color: rgba(31, 41, 55, 0.8);
  border-radius: 8px;
  padding: 3px;
  gap: 3px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  position: relative;
}

.option {
  padding: 8px 20px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  z-index: 1;
  min-width: 54px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobile responsive adjustments */
@media (max-width: 640px) {
  .selector {
    padding: 2px;
    gap: 2px;
    border-radius: 6px;
  }

  .option {
    padding: 6px 14px;
    font-size: 12px;
    min-width: 48px;
    border-radius: 5px;
  }
}

@media (max-width: 480px) {
  .selector {
    padding: 2px;
    gap: 2px;
  }

  .option {
    padding: 6px 12px;
    font-size: 11px;
    min-width: 44px;
  }
}

@media (max-width: 360px) {
  .option {
    padding: 5px 10px;
    font-size: 10px;
    min-width: 40px;
  }
}

.option:hover:not(.active) {
  color: var(--text-primary);
  background-color: rgba(255, 255, 255, 0.05);
}

.option.active {
  background-color: var(--accent);
  color: #0f172a;
  font-weight: 600;
  box-shadow:
    0 1px 3px rgba(252, 211, 77, 0.4),
    0 0 0 1px rgba(252, 211, 77, 0.2);
}

.option.active:hover {
  background-color: #fde047;
  box-shadow:
    0 2px 4px rgba(252, 211, 77, 0.5),
    0 0 0 1px rgba(252, 211, 77, 0.3);
}
```

## File: src/components/ProfileTypeSelector.tsx

```typescript
import React from "react";
import { useProfileType } from "../hooks/useProfileType";
import styles from "./ProfileTypeSelector.module.css";

const ProfileTypeSelector: React.FC = () => {
  const { profileType, setProfileType } = useProfileType();

  return (
    <div className={styles.selector}>
      <button
        className={`${styles.option} ${profileType === "DJ" ? styles.active : ""}`}
        onClick={() => setProfileType("DJ")}
        type="button"
      >
        DJ
      </button>
      <button
        className={`${styles.option} ${profileType === "Fan" ? styles.active : ""}`}
        onClick={() => setProfileType("Fan")}
        type="button"
      >
        Fan
      </button>
    </div>
  );
};

export default ProfileTypeSelector;
```

## File: src/contracts/util.ts

```typescript
import { z } from "zod";
import { WalletNetwork } from "@creit.tech/stellar-wallets-kit";
import { Network, NetworkType } from "../debug/types/types";

const envSchema = z.object({
  PUBLIC_STELLAR_NETWORK: z.enum([
    "PUBLIC",
    "FUTURENET",
    "TESTNET",
    "LOCAL",
    "STANDALONE", // deprecated in favor of LOCAL
  ] as const),
  PUBLIC_STELLAR_NETWORK_PASSPHRASE: z.nativeEnum(WalletNetwork),
  PUBLIC_STELLAR_RPC_URL: z.string(),
  PUBLIC_STELLAR_HORIZON_URL: z.string(),
});

const parsed = envSchema.safeParse(import.meta.env);

const env: z.infer<typeof envSchema> = parsed.success
  ? parsed.data
  : {
      PUBLIC_STELLAR_NETWORK: "LOCAL",
      PUBLIC_STELLAR_NETWORK_PASSPHRASE: WalletNetwork.STANDALONE,
      PUBLIC_STELLAR_RPC_URL: "http://localhost:8000/rpc",
      PUBLIC_STELLAR_HORIZON_URL: "http://localhost:8000",
    };

export const stellarNetwork =
  env.PUBLIC_STELLAR_NETWORK === "STANDALONE"
    ? "LOCAL"
    : env.PUBLIC_STELLAR_NETWORK;
export const networkPassphrase = env.PUBLIC_STELLAR_NETWORK_PASSPHRASE;

const stellarEncode = (str: string) => {
  return str.replace(/\//g, "//").replace(/;/g, "/;");
};

export const labPrefix = () => {
  switch (stellarNetwork) {
    case "LOCAL":
      return `http://localhost:8000/lab/transaction-dashboard?$=network$id=custom&label=Custom&horizonUrl=${stellarEncode(horizonUrl)}&rpcUrl=${stellarEncode(rpcUrl)}&passphrase=${stellarEncode(networkPassphrase)};`;
    case "PUBLIC":
      return `https://lab.stellar.org/transaction-dashboard?$=network$id=mainnet&label=Mainnet&horizonUrl=${stellarEncode(horizonUrl)}&rpcUrl=${stellarEncode(rpcUrl)}&passphrase=${stellarEncode(networkPassphrase)};`;
    case "TESTNET":
      return `https://lab.stellar.org/transaction-dashboard?$=network$id=testnet&label=Testnet&horizonUrl=${stellarEncode(horizonUrl)}&rpcUrl=${stellarEncode(rpcUrl)}&passphrase=${stellarEncode(networkPassphrase)};`;
    case "FUTURENET":
      return `https://lab.stellar.org/transaction-dashboard?$=network$id=futurenet&label=Futurenet&horizonUrl=${stellarEncode(horizonUrl)}&rpcUrl=${stellarEncode(rpcUrl)}&passphrase=${stellarEncode(networkPassphrase)};`;
    default:
      return `https://lab.stellar.org/transaction-dashboard?$=network$id=testnet&label=Testnet&horizonUrl=${stellarEncode(horizonUrl)}&rpcUrl=${stellarEncode(rpcUrl)}&passphrase=${stellarEncode(networkPassphrase)};`;
  }
};

// NOTE: needs to be exported for contract files in this directory
export const rpcUrl = env.PUBLIC_STELLAR_RPC_URL;

export const horizonUrl = env.PUBLIC_STELLAR_HORIZON_URL;

const networkToId = (network: string): NetworkType => {
  switch (network) {
    case "PUBLIC":
      return "mainnet";
    case "TESTNET":
      return "testnet";
    case "FUTURENET":
      return "futurenet";
    default:
      return "custom";
  }
};

export const network: Network = {
  id: networkToId(stellarNetwork),
  label: stellarNetwork.toLowerCase(),
  passphrase: networkPassphrase,
  rpcUrl: rpcUrl,
  horizonUrl: horizonUrl,
};
```

## File: src/debug/components/ContractForm.tsx

```typescript
import { Alert, Card, Text } from "@stellar/design-system";
import { contract } from "@stellar/stellar-sdk";

import { Box } from "../../components/layout/Box";

import { InvokeContractForm } from "./InvokeContractForm";
import { useWallet } from "../../hooks/useWallet";

export const ContractForm = ({
  contractClient,
  contractClientError,
}: {
  contractClient: contract.Client;
  contractClientError: Error | null;
}) => {
  const { address: userPk } = useWallet();

  const contractSpecFuncs = contractClient.spec?.funcs();

  const renderFunctionCard = () =>
    contractSpecFuncs
      ?.filter((func) => !func.name().toString().includes("__"))
      ?.map((func) => {
        const funcName = func.name().toString();

        return (
          <InvokeContractForm
            key={funcName}
            funcName={funcName}
            contractClient={contractClient}
          />
        );
      });

  const renderError = () => (
    <Alert variant="error" placement="inline" title="Error">
      {contractClientError?.message}
    </Alert>
  );

  return (
    <Box gap="md">
      {!userPk ? (
        <Alert variant="warning" placement="inline" title="Connect wallet">
          A connected wallet is required to invoke this contract. Please connect
          your wallet to proceed.
        </Alert>
      ) : null}
      <Card variant="secondary">
        <Box gap="lg" data-testid="invoke-contract-container">
          <Text as="h2" size="md" weight="semi-bold">
            Invoke Contract
          </Text>

          {contractSpecFuncs ? renderFunctionCard() : null}
          {contractClientError ? renderError() : null}
        </Box>
      </Card>
    </Box>
  );
};
```

## File: src/debug/components/ErrorResponse.tsx

```typescript
import {
  AccountRequiresMemoError,
  BadResponseError,
} from "@stellar/stellar-sdk";

import { Box } from "../../components/layout/Box";
import { TxResponse } from "./TxResponse";
import { ValidationResponseCard } from "./ValidationResponseCard";
import { PrettyJson } from "./PrettyJson";

import {
  SubmitHorizonError,
  SubmitRpcError,
  SubmitRpcErrorStatus,
} from "../types/types";
import { Alert } from "@stellar/design-system";

export const HorizonErrorResponse = ({
  error,
}: {
  error: SubmitHorizonError;
}) => {
  let message = "",
    extras = null;
  if (error instanceof AccountRequiresMemoError) {
    message = "This destination requires a memo.";
    extras = (
      <Box gap="xs" data-testid="submit-tx-horizon-error-memo">
        <TxResponse label="Destination account:" value={error.accountId} />
        <TxResponse label="Operation index:" value={error.operationIndex} />
      </Box>
    );
  } else if (
    error?.response &&
    error.response.data?.extras?.result_codes &&
    error.response.data?.extras.result_xdr
  ) {
    const { result_codes, result_xdr } = error.response.data.extras;
    message = error.message;
    extras = (
      <Box gap="xs" data-testid="submit-tx-horizon-error-extras">
        <TxResponse
          label="extras.result_codes:"
          value={JSON.stringify(result_codes)}
        />

        <TxResponse label="Result XDR:" value={result_xdr} />
      </Box>
    );
  } else {
    message =
      error instanceof BadResponseError
        ? "Received a bad response when submitting."
        : "An unknown error occurred.";
    extras = (
      <Box gap="xs" data-testid="submit-tx-horizon-error">
        <TxResponse
          label="original error:"
          value={JSON.stringify(error, null, 2)}
        />
      </Box>
    );
  }

  return (
    <ValidationResponseCard
      variant="error"
      title="Error!"
      summary={
        <Alert variant="error" placement="inline" title="Failed Execution">
          {message}
        </Alert>
      }
      detailedResponse={extras}
    />
  );
};

export const RpcErrorResponse = ({ error }: { error: SubmitRpcError }) => {
  const getSubtitle = (status: SubmitRpcErrorStatus) => {
    switch (status) {
      case "DUPLICATE":
        return "Duplicate transaction";
      case "TIMEOUT":
        return "Transaction timed out";
      case "TRY_AGAIN_LATER":
      case "ERROR":
      case "FAILED":
      default:
        return "Transaction failed";
    }
  };

  const errorFields = () => {
    const { hash, errorResult, diagnosticEvents } = error.result;

    return (
      <>
        {hash ? (
          <Box gap="xs">
            <TxResponse label="Transaction hash:" value={hash} />
          </Box>
        ) : null}
        {errorResult ? (
          <Box gap="xs" data-testid="submit-tx-rpc-error">
            <TxResponse
              label="Error result:"
              item={<PrettyJson json={errorResult} />}
            />
          </Box>
        ) : null}
        {diagnosticEvents ? (
          <Box gap="xs">
            <TxResponse
              label="Diagnostic events:"
              item={<PrettyJson json={diagnosticEvents} />}
            />
          </Box>
        ) : null}
      </>
    );
  };

  return (
    <ValidationResponseCard
      variant="error"
      title="Transaction Submission Error!"
      subtitle={getSubtitle(error.status)}
      detailedResponse={errorFields()}
    />
  );
};
```

## File: src/debug/components/ErrorText.tsx

```typescript
import { Text } from "@stellar/design-system";

export const ErrorText = ({
  errorMessage,
  size,
}: {
  errorMessage: string;
  size: "sm" | "md" | "lg";
}) => {
  return (
    <Text as="div" size={size} addlClassName="FieldNote--error">
      {errorMessage}
    </Text>
  );
};
```

## File: src/debug/components/InvokeContractForm.tsx

```typescript
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  Icon,
  Text,
  Textarea,
  Tooltip,
} from "@stellar/design-system";
import { BASE_FEE, contract } from "@stellar/stellar-sdk";
import { JSONSchema7 } from "json-schema";
import { Box } from "../../components/layout/Box";
import { useAccountSequenceNumber } from "../hooks/useAccountSequenceNumber";
import { useRpcPrepareTx } from "../hooks/useRpcPrepareTx";
import { useSimulateTx } from "../hooks/useSimulateTx";
import { useSubmitRpcTx } from "../hooks/useSubmitRpcTx";
import { isEmptyObject } from "../util/isEmptyObject";
import { dereferenceSchema } from "../util/dereferenceSchema";
import { getNetworkHeaders } from "../util/getNetworkHeaders";
import { getTxnToSimulate } from "../util/sorobanUtils";
import {
  AnyObject,
  SorobanInvokeValue,
  TransactionBuildParams,
  DereferencedSchemaType,
} from "../types/types";
import { useWallet } from "../../hooks/useWallet";
import { ErrorText } from "./ErrorText";
import { PrettyJsonTransaction } from "./PrettyJsonTransaction";
import { TransactionSuccessCard } from "./TransactionSuccessCard";
import { RpcErrorResponse } from "./ErrorResponse";
import { network } from "../../contracts/util";
import { JsonSchemaRenderer } from "./JsonSchemaRenderer";
import { ValidationResponseCard } from "./ValidationResponseCard";
import { Api } from "@stellar/stellar-sdk/rpc";

const pageBodyStyles = {
  content: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem", // 16px
    padding: "1rem", // 16px
    backgroundColor: "var(--sds-clr-gray-03)",
    borderRadius: "0.5rem", // 8px
  },
  contentError: {
    border: "1px solid var(--sds-clr-red-06)",
  },
  scrollable: {
    maxWidth: "100%",
    maxHeight: "37.5rem", // 600px
    overflow: "auto" as const,
  },
};

export const InvokeContractForm = ({
  contractClient,
  funcName,
}: {
  contractClient: contract.Client;
  funcName: string;
}) => {
  const { address: userPk, signTransaction } = useWallet();

  const contractSpec = contractClient.spec;
  const contractId = contractClient.options.contractId;

  const [invokeError, setInvokeError] = useState<{
    message: string;
    methodType: string;
  } | null>(null);
  const [isExtensionLoading, setIsExtensionLoading] = useState(false);
  const [formValue, setFormValue] = useState<SorobanInvokeValue>({
    contract_id: contractId,
    function_name: funcName,
    args: {},
  });
  const [formError, setFormError] = useState<AnyObject>({});
  // Based on whether the function requires input arguments
  const [isGetFunction, setIsGetFunction] = useState(false);
  // Based on reads and writes to the contract
  // Can only be determined based on the simulation result
  const [isWriteFn, setIsWriteFn] = useState<boolean | undefined>(undefined);
  const [dereferencedSchema, setDereferencedSchema] =
    useState<DereferencedSchemaType | null>(null);
  // used to delay the simulation until after the sequence number is fetched
  const [isSimulationQueued, setSimulationQueued] = useState(false);
  // Used to delay a submit until after a simulation is complete
  const [isSubmitQueued, setSubmissionQueued] = useState(false);

  const [isReadTooltipVisible, setIsReadTooltipVisible] = useState(false);

  const hasNoFormErrors = isEmptyObject(formError);

  const {
    data: sequenceNumberData,
    isFetching: isFetchingSequenceNumber,
    isLoading: isLoadingSequenceNumber,
    refetch: fetchSequenceNumber,
  } = useAccountSequenceNumber({
    publicKey: userPk || "",
    horizonUrl: network.horizonUrl,
    headers: getNetworkHeaders(network, "horizon"),
    uniqueId: funcName,
    enabled: !!userPk,
  });

  const {
    mutate: simulateTx,
    data: simulateTxData,
    isError: isSimulateTxError,
    isPending: isSimulateTxPending,
    reset: resetSimulateTx,
  } = useSimulateTx();

  const {
    mutate: prepareTx,
    isPending: isPrepareTxPending,
    data: prepareTxData,
    reset: resetPrepareTx,
  } = useRpcPrepareTx();

  const {
    data: submitRpcResponse,
    mutate: submitRpc,
    error: submitRpcError,
    isPending: isSubmitRpcPending,
    isSuccess: isSubmitRpcSuccess,
    reset: resetSubmitRpc,
  } = useSubmitRpcTx();

  const responseSuccessEl = useRef<HTMLDivElement | null>(null);
  const responseErrorEl = useRef<HTMLDivElement | null>(null);

  const signTx = async (xdr: string): Promise<string | null> => {
    if (!signTransaction || !userPk) {
      return null;
    }

    setIsExtensionLoading(true);

    if (userPk) {
      try {
        const result = await signTransaction(xdr || "", {
          address: userPk,
          networkPassphrase: network.passphrase,
        });

        if (result.signedTxXdr && result.signedTxXdr !== "") {
          return result.signedTxXdr;
        }
      } catch (error: unknown) {
        if (error instanceof Error && error.message) {
          setInvokeError({ message: error.message, methodType: "sign" });
        }
      } finally {
        setIsExtensionLoading(false);
      }
    }
    return null;
  };

  useEffect(() => {
    if (contractSpec) {
      const schema = dereferenceSchema(
        contractSpec?.jsonSchema(funcName),
        funcName,
      );

      setDereferencedSchema(schema);
    }
  }, [contractSpec, funcName]);

  const isSuccessfulSimulation =
    simulateTxData &&
    "result" in simulateTxData &&
    !simulateTxData.result.error;

  const isFailedSimulation =
    simulateTxData && "result" in simulateTxData && simulateTxData.result.error;

  useEffect(() => {
    if (isSuccessfulSimulation) {
      const result =
        simulateTxData.result as Api.RawSimulateTransactionResponse;
      const simulationChangesState =
        result.stateChanges && result.stateChanges.length > 0;

      if (isSubmitQueued && !isSimulationQueued && prepareTxData) {
        void triggerSubmit();
      }

      if (simulationChangesState) {
        setIsWriteFn(true);
        return;
      }

      setIsWriteFn(false);
      return;
    }

    if (isFailedSimulation) {
      setSubmissionQueued(false);
      setIsWriteFn(undefined);
    }
  }, [simulateTxData, isSimulationQueued, prepareTxData]);

  useEffect(() => {
    if (isSimulationQueued && !isFetchingSequenceNumber) {
      void triggerSimulate();
    }
  }, [sequenceNumberData, isFetchingSequenceNumber]);

  const handleChange = (value: SorobanInvokeValue) => {
    setInvokeError(null);
    setFormValue(value);
    resetSimulateTx();
    resetPrepareTx();
    resetSubmitRpc();
  };

  const isSimulating =
    isLoadingSequenceNumber ||
    isFetchingSequenceNumber ||
    isSimulateTxPending ||
    isPrepareTxPending;

  const resetSubmitState = () => {
    if (submitRpcError || submitRpcResponse) {
      resetSubmitRpc();
    }
  };

  const resetSimulateState = () => {
    if (isSimulateTxError || (simulateTxData && "result" in simulateTxData)) {
      resetSimulateTx();
    }
  };

  const handleSimulate = async () => {
    setInvokeError(null);
    resetSimulateState();
    resetSubmitState();
    resetPrepareTx();

    setSimulationQueued(true);

    await fetchSequenceNumber();
  };

  const handleSubmit = async () => {
    setSubmissionQueued(true);
    return handleSimulate();
  };

  const triggerSubmit = async () => {
    setSubmissionQueued(false);

    if (!prepareTxData?.transactionXdr) {
      setInvokeError({
        message: "No transaction data available to sign",
        methodType: "submit",
      });
      return;
    }
    resetSimulateState();
    resetSubmitState();

    try {
      const signedTxXdr = await signTx(prepareTxData.transactionXdr);
      if (!signedTxXdr) {
        throw new Error(
          "Transaction signing failed - no signed transaction received",
        );
      }
      submitRpc({
        rpcUrl: network.rpcUrl,
        transactionXdr: signedTxXdr,
        networkPassphrase: network.passphrase,
        headers: getNetworkHeaders(network, "rpc"),
      });
    } catch (error: unknown) {
      setInvokeError({
        message: (error as Error)?.message || "Failed to sign transaction",
        methodType: "submit",
      });
    }
  };

  const triggerSimulate = () => {
    try {
      if (!sequenceNumberData) {
        throw new Error("Failed to fetch sequence number. Please try again.");
      }

      const txnParams: TransactionBuildParams = {
        source_account: userPk || "",
        fee: BASE_FEE,
        seq_num: sequenceNumberData,
        cond: {
          time: {
            min_time: "0",
            max_time: "0",
          },
        },
        memo: {},
      };

      const sorobanOperation = {
        operation_type: "invoke_contract_function",
        params: {
          contract_id: formValue.contract_id,
          function_name: formValue.function_name,
          args: formValue.args,
        },
      };

      const { xdr, error: simulateError } = getTxnToSimulate(
        formValue,
        txnParams,
        sorobanOperation,
        network.passphrase,
      );

      if (xdr) {
        simulateTx({
          rpcUrl: network.rpcUrl,
          transactionXdr: xdr,
          headers: getNetworkHeaders(network, "rpc"),
        });

        // using prepareTransaction instead of assembleTransaction because
        // assembleTransaction requires an auth, but signing for simulation is rare
        prepareTx({
          rpcUrl: network.rpcUrl,
          transactionXdr: xdr,
          networkPassphrase: network.passphrase,
          headers: getNetworkHeaders(network, "rpc"),
        });
      }

      if (simulateError) {
        setInvokeError({ message: simulateError, methodType: "simulate" });
      }
    } catch (error: unknown) {
      setInvokeError({
        message:
          (error as Error)?.message ||
          "Failed to simulate transaction. Please try again.",
        methodType: "simulate",
      });
    }

    setSimulationQueued(false);
  };

  const renderReadWriteBadge = (isWriteFn: boolean | undefined) => {
    if (isWriteFn === undefined) return null;

    const badge = (
      <Badge
        icon={isWriteFn ? <Icon.Pencil01 /> : <Icon.Eye />}
        variant={isWriteFn ? "secondary" : "success"}
        iconPosition="left"
      >
        {isWriteFn ? "Write" : "Read"}
      </Badge>
    );

    return !isWriteFn ? (
      <div
        onMouseEnter={() => setIsReadTooltipVisible(true)}
        onMouseLeave={() => setIsReadTooltipVisible(false)}
        style={{ cursor: "pointer" }}
      >
        <Tooltip
          isVisible={isReadTooltipVisible}
          isContrast
          title="Read Only"
          placement="right-end"
          triggerEl={badge}
        >
          {`When a transaction doesn't change the state of the contract, it is
               considered a read operation. \nIn this scenario, it is not
               necessary to submit the transaction to the network, as it does not
               modify any data. \nYou can simply simulate the transaction to see
               the results without incurring any costs.`}
        </Tooltip>
      </div>
    ) : (
      badge
    );
  };

  const renderTitle = (name: string) => (
    <>
      <Box gap="sm" direction="row">
        <Text size="sm" as="div" weight="bold">
          {name}
        </Text>
        {renderReadWriteBadge(isWriteFn)}
      </Box>
    </>
  );

  const renderRustDoc = (description?: string) => {
    if (!description) return null;

    return (
      <Textarea
        id={`invoke-contract-description-${funcName}`}
        label="Rustdoc"
        infoText="This description is auto-generated from the contract's Rust documentation. It can be edited in the contract's source code."
        infoTextIcon={<Icon.InfoCircle />}
        fieldSize="sm"
        wrap="on"
        rows={description.length > 100 ? 4 : 1}
        value={description}
        spellCheck="false"
        readOnly
      >
        {description}
      </Textarea>
    );
  };

  const isEmptySchema =
    Object.entries(dereferencedSchema?.properties || {}).length === 0;

  useEffect(() => {
    if (dereferencedSchema && !dereferencedSchema?.required.length) {
      setIsGetFunction(true);
    } else {
      setIsGetFunction(false);
    }
  }, [dereferencedSchema]);

  const renderSchema = () => {
    if (!contractSpec || !contractSpec.jsonSchema) {
      return null;
    }

    return (
      <Box gap="md">
        <Box gap="sm" direction="row" justify="space-between" align="center">
          {renderTitle(funcName)}
          {isEmptySchema && renderButtons()}
        </Box>
        {renderRustDoc(dereferencedSchema?.description)}
        {formValue.contract_id &&
          formValue.function_name &&
          dereferencedSchema &&
          !isEmptySchema && (
            <JsonSchemaRenderer
              name={funcName}
              schema={dereferencedSchema as JSONSchema7}
              onChange={handleChange}
              formError={formError}
              setFormError={setFormError}
              parsedSorobanOperation={formValue}
              isWriteFn={isWriteFn}
            />
          )}
      </Box>
    );
  };

  const renderResponse = () => {
    const { result: simulateResult } = simulateTxData || {};
    const { result: submitResult } = submitRpcResponse || {};

    const result = simulateResult || submitResult;

    const simulationSummary = isSuccessfulSimulation ? (
      <Alert variant="success" placement="inline" title="Successful Simulation">
        {`The Simulation succeeded with
        ${
          (
            simulateResult as Api.RawSimulateTransactionResponse
          ).results?.filter(
            (r) => "returnValueJson" in r && r.returnValueJson !== "void",
          ).length || 0
        }
        returned value(s).`}
      </Alert>
    ) : isFailedSimulation ? (
      <Alert variant="error" placement="inline" title="Simulation Failed">
        {simulateResult?.error}`
      </Alert>
    ) : null;

    if (result && !isSuccessfulTxExection) {
      return (
        <ValidationResponseCard
          variant="primary"
          title="Response"
          note={<></>}
          summary={simulationSummary}
          detailedResponse={
            <Box gap="md">
              <div
                data-testid="invoke-contract-simulate-tx-response"
                style={{
                  ...pageBodyStyles.content,
                  ...pageBodyStyles.scrollable,
                  ...(result && "error" in result
                    ? pageBodyStyles.contentError
                    : {}),
                }}
              >
                <PrettyJsonTransaction
                  json={result}
                  xdr={result && "xdr" in result}
                />
              </div>
            </Box>
          }
        />
      );
    }

    return null;
  };

  const isSuccessfulTxExection =
    isSubmitRpcSuccess && submitRpcResponse && network.id;

  const renderSuccess = () => {
    if (isSuccessfulTxExection) {
      return (
        <div ref={responseSuccessEl}>
          <TransactionSuccessCard response={submitRpcResponse} />
        </div>
      );
    }

    return null;
  };

  const renderError = () => {
    if (submitRpcError) {
      return (
        <div ref={responseErrorEl}>
          <RpcErrorResponse error={submitRpcError} />
        </div>
      );
    }

    if (invokeError?.message) {
      return (
        <div ref={responseErrorEl}>
          <ErrorText
            errorMessage={`${invokeError.methodType}: ${invokeError.message}`}
            size="sm"
          />
        </div>
      );
    }

    return null;
  };

  const renderButtons = () => (
    <Box gap="sm" direction="row" align="end" justify="end" wrap="wrap">
      <Button
        size="md"
        variant="tertiary"
        disabled={isSimulationDisabled()}
        isLoading={isSimulating}
        onClick={() => void handleSimulate()}
      >
        Simulate
      </Button>

      <Button
        size="md"
        variant="secondary"
        isLoading={isExtensionLoading || isSubmitRpcPending}
        disabled={isSubmitDisabled}
        onClick={() => void handleSubmit()}
      >
        Submit
      </Button>
    </Box>
  );

  const isSimulationDisabled = () => {
    const disabled = !isGetFunction && !Object.keys(formValue.args).length;
    return !userPk || !hasNoFormErrors || disabled;
  };

  const isSubmitDisabled =
    !!invokeError?.message ||
    isSimulating ||
    !userPk ||
    !hasNoFormErrors ||
    isSimulationDisabled();
  return (
    <Card>
      <div className="ContractInvoke">
        <Box gap="md" direction={isEmptyObject({ a: true }) ? "row" : "column"}>
          {renderSchema()}
          {!isEmptySchema && renderButtons()}
          <>{renderResponse()}</>
          <>{renderSuccess()}</>
          <>{renderError()}</>
        </Box>
      </div>
    </Card>
  );
};
```

## File: src/debug/components/JsonSchemaRenderer.tsx

```typescript
/* eslint-disable react-x/no-array-index-key */
import React from "react";
import { Card, Text } from "@stellar/design-system";
import type { JSONSchema7 } from "json-schema";

import { jsonSchema } from "../util/jsonSchema";

import { Box } from "../../components/layout/Box";
import { LabelHeading } from "./LabelHeading";

import { AnyObject, JsonSchemaFormProps } from "../types/types";

import { renderPrimitivesType } from "./RenderPrimitivesType";
import { renderArrayType } from "./RenderArrayType";
import { renderOneOf } from "./RenderOneOf";

export const JsonSchemaRenderer = ({
  name,
  schema,
  path = [],
  onChange,
  parsedSorobanOperation,
  formError,
  setFormError,
}: JsonSchemaFormProps) => {
  const schemaType = jsonSchema.getSchemaType(schema as AnyObject);

  // function schema always starts with an object type
  if (!schemaType) {
    return null;
  }

  if (schemaType === "object") {
    return (
      <Box gap="md" key={`${name}-${path.join(".")}`}>
        {Object.entries(schema.properties || {}).map(
          ([key, propertySchema], index) => {
            const propertySchemaType = jsonSchema.getSchemaType(
              propertySchema as AnyObject,
            );
            const propertySchemaObject = jsonSchema.isSchemaObject(
              propertySchema as AnyObject,
            )
              ? propertySchema
              : undefined;

            if (propertySchemaType === "object" && propertySchemaObject) {
              return (
                <React.Fragment key={`${key}-${index}`}>
                  <LabelHeading size="md" infoText={schema.description}>
                    {key}
                  </LabelHeading>

                  {(propertySchemaObject as AnyObject)?.description ? (
                    <Text as="div" size="xs">
                      {
                        (propertySchemaObject as AnyObject)
                          .description as string
                      }
                    </Text>
                  ) : null}

                  <Box gap="md">
                    <Card>
                      <JsonSchemaRenderer
                        name={path.length > 0 ? path.join(".") : key}
                        path={[...path, key]}
                        schema={propertySchema as JSONSchema7}
                        onChange={onChange}
                        parsedSorobanOperation={parsedSorobanOperation}
                        formError={formError}
                        setFormError={setFormError}
                      />
                    </Card>
                  </Box>
                </React.Fragment>
              );
            }

            return (
              <JsonSchemaRenderer
                key={`${key}-${index}`}
                name={key}
                schema={propertySchema as JSONSchema7}
                path={[...path, key]}
                onChange={onChange}
                parsedSorobanOperation={parsedSorobanOperation}
                formError={formError}
                setFormError={setFormError}
              />
            );
          },
        )}
      </Box>
    );
  }

  if (schemaType === "array") {
    return renderArrayType({
      schema,
      path,
      parsedSorobanOperation,
      onChange,
      renderer: JsonSchemaRenderer,
      formError,
      setFormError,
    });
  }

  if (schemaType === "oneOf") {
    return renderOneOf({
      name,
      schema,
      path,
      parsedSorobanOperation,
      onChange,
      renderer: JsonSchemaRenderer,
      formError,
      setFormError,
    });
  }

  // Recursion Base Case
  return renderPrimitivesType({
    name,
    path,
    schema,
    parsedSorobanOperation,
    onChange,
    formError,
    setFormError,
  });
};
```

## File: src/debug/components/LabelHeading.tsx

```typescript
import { Icon, Tooltip } from "@stellar/design-system";

export const LabelHeading = ({
  children,
  size,
  labelSuffix,
  infoText,
  infoLink,
}: {
  children: React.ReactNode;
  size: "sm" | "md" | "lg";
  labelSuffix?: string | React.ReactNode;
  infoText?: string | React.ReactNode;
  infoLink?: string;
}) => (
  <div className="Label__wrapper">
    <div className={`Label Label--${size}`}>
      {children}
      {labelSuffix ? (
        <span className="Label__suffix">({labelSuffix})</span>
      ) : null}
    </div>

    {infoLink ? (
      <a
        href={infoLink}
        className="Label__infoButton"
        rel="noreferrer noopener"
        target="_blank"
      >
        <Icon.InfoCircle />
      </a>
    ) : null}

    {infoText ? (
      <Tooltip
        triggerEl={
          <div className="Label__infoButton" role="button">
            <Icon.InfoCircle />
          </div>
        }
      >
        {infoText}
      </Tooltip>
    ) : null}
  </div>
);
```

## File: src/debug/components/MetadataCard.tsx

```typescript
const MetadataCard = ({
  title,
  content,
}: {
  title?: string;
  content: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: "#F3F3F3",
        padding: "0.8rem",
        borderRadius: "8px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "fit-content",
        border: "1px solid #E2E2E2",
      }}
    >
      <div
        style={{
          fontSize: "0.85rem",
          color: "#333",
          marginBottom: "0.15rem",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default MetadataCard;
```

## File: src/debug/components/PositiveIntPicker.tsx

```typescript
import React from "react";
import { Icon, Input, InputProps } from "@stellar/design-system";

interface PositiveIntPickerProps extends Omit<InputProps, "fieldSize"> {
  id: string;
  fieldSize?: "sm" | "md" | "lg";
  labelSuffix?: string | React.ReactNode;
  label: string | React.ReactNode;
  value: string;
  placeholder?: string;
  error: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  disabled?: boolean;
}

export const PositiveIntPicker = ({
  id,
  fieldSize = "md",
  labelSuffix,
  label,
  value,
  error,
  onChange,
  readOnly,
  disabled,
  ...props
}: PositiveIntPickerProps) => {
  return (
    <Input
      id={id}
      fieldSize={fieldSize}
      label={label}
      labelSuffix={labelSuffix}
      value={value}
      error={error}
      onChange={onChange}
      readOnly={readOnly}
      disabled={disabled}
      infoLinkIcon={<Icon.InfoCircle />}
      {...props}
    />
  );
};
```

## File: src/debug/components/PrettyJsonTextarea.tsx

```typescript
import { PrettyJson } from "./PrettyJson";
import { Box } from "../../components/layout/Box";
import { LabelHeading } from "./LabelHeading";
import { AnyObject } from "../types/types";

const styles = {
  jsonContainer: {
    border: "1px solid var(--sds-input-color-border-disabled)",
    borderRadius: "0.375rem", // 6px
    maxHeight: "13.75rem", // 220px
    overflow: "auto" as const,
    padding: "0.5rem 0.75rem", // 8px 12px
  } as React.CSSProperties,
};

export const PrettyJsonTextarea = ({
  json,
  label,
}: {
  json: AnyObject;
  label: string;
  isCodeWrapped?: boolean;
}) => {
  return (
    <Box gap="sm">
      <LabelHeading size="md">{label}</LabelHeading>
      <div style={styles.jsonContainer}>
        <PrettyJson json={json} isCollapsible={false} />
      </div>
    </Box>
  );
};
```

## File: src/debug/components/PrettyJsonTransaction.tsx

```typescript
import { useEffect } from "react";
import { toSafeNumberOrThrow } from "lossless-json";

import { PrettyJson } from "./PrettyJson";
import { signatureHint } from "../util/signatureHint";
import { xdrUtils } from "../util/xdrUtils";
import { formatAmount } from "../util/formatAmount";
import { getNetworkHeaders } from "../util/getNetworkHeaders";

import { useCheckTxSignatures } from "../hooks/useCheckTxSignatures";

import { AnyObject } from "../types/types";
import { network } from "../../contracts/util";

type PrettyJsonTransactionProps = {
  xdr: string;
  json: AnyObject;
};

export const PrettyJsonTransaction = ({
  xdr,
  json,
}: PrettyJsonTransactionProps) => {
  const { data, isFetching, isLoading, refetch } = useCheckTxSignatures({
    xdr,
    networkPassphrase: network.passphrase,
    networkUrl: network.horizonUrl,
    headers: getNetworkHeaders(network, "horizon"),
  });

  const isTx = Boolean(json?.tx || json?.tx_fee_bump);

  useEffect(() => {
    // Check transaction signatures
    if (isTx) {
      void refetch();
    }
  }, [isTx, refetch]);

  const customValueRenderer = (
    item: unknown,
    key: string,
    parentKey?: string,
  ): React.ReactNode => {
    // Signature hint
    if (parentKey === "signatures" && key === "hint") {
      return PrettyJson.renderStringValue({
        item: signatureHint(item as string),
      });
    }

    // Signature check
    if (data && parentKey === "signatures" && key === "signature") {
      const match =
        typeof item === "string"
          ? data.find((s) => s.sig.equals(Buffer.from(item, "hex")))
          : undefined;

      if (match) {
        return PrettyJson.renderStringValue({
          item: item as string,
        });
      }

      return item as string;
    }

    // Amount
    const amountKeys = [
      "amount",
      "buy_amount",
      "starting_balance",
      "send_max",
      "send_amount",
      "dest_min",
      "dest_amount",
      "limit",
    ];

    if (amountKeys.includes(key)) {
      const parsedAmount = xdrUtils.fromAmount(item as string);
      let formattedAmount = "";

      try {
        formattedAmount = formatAmount(toSafeNumberOrThrow(parsedAmount));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // It might fail for BigInt
        formattedAmount = formatAmount(Number(parsedAmount));
      }

      if (formattedAmount) {
        return PrettyJson.renderStringValue({
          item: `${formattedAmount} (raw: ${item as string})`,
          itemType: "number",
        });
      }

      return PrettyJson.renderStringValue({ item: item as string });
    }

    // Manage data
    if (parentKey === "manage_data") {
      if (key === "data_name") {
        return PrettyJson.renderStringValue({
          item: `${item as string} (hex: ${Buffer.from(item as string).toString("base64")})`,
        });
      }

      if (key === "data_value") {
        return PrettyJson.renderStringValue({
          item: `${Buffer.from(item as string, "hex").toString()} (hex: ${Buffer.from(item as string, "hex").toString("base64")})`,
        });
      }
    }

    return null;
  };

  const customKeyRenderer = (item: unknown, key: string) => {
    if (key === "signatures" && Array.isArray(item) && item.length > 0) {
      return <div className="PrettyJson__key__note">· Signatures Checked</div>;
    }

    return null;
  };

  return (
    <PrettyJson
      json={json}
      customValueRenderer={customValueRenderer}
      customKeyRenderer={customKeyRenderer}
      isLoading={isLoading || isFetching}
    />
  );
};
```

## File: src/debug/components/RenderArrayType.tsx

```typescript
/* eslint-disable react-x/no-array-index-key */
import type { JSONSchema7 } from "json-schema";
import { Button, Card, Icon, Text } from "@stellar/design-system";
import { get } from "lodash";

import { jsonSchema } from "../util/jsonSchema";

import { Box } from "../../components/layout/Box";
import { LabelHeading } from "./LabelHeading";

import type {
  AnyObject,
  JsonSchemaFormProps,
  SorobanInvokeValue,
} from "../types/types";
import { arrayItem } from "../util/arrayItem";

export const renderArrayType = ({
  schema,
  path,
  parsedSorobanOperation,
  renderer,
  onChange,
  formError,
  setFormError,
}: {
  schema: JSONSchema7;
  path: string[];
  parsedSorobanOperation: SorobanInvokeValue;
  renderer: (props: JsonSchemaFormProps) => React.ReactNode;
  onChange: (value: SorobanInvokeValue) => void;
  formError: AnyObject;
  setFormError: (error: AnyObject) => void;
}) => {
  const name = path.join(".");
  const invokeContractBaseProps = {
    contract_id: parsedSorobanOperation.contract_id,
    function_name: parsedSorobanOperation.function_name,
  };

  const schemaItems = jsonSchema.getSchemaItems(schema);

  const nestedArgsItems = get(parsedSorobanOperation.args, name);

  const disableAddButton =
    jsonSchema.isTuple(schema as AnyObject) ||
    (Array.isArray(nestedArgsItems) &&
      typeof schemaItems === "object" &&
      schemaItems &&
      "maxItems" in schemaItems &&
      schemaItems.maxItems === nestedArgsItems.length);

  if (jsonSchema.isTuple(schema as AnyObject) && Array.isArray(schemaItems)) {
    return schemaItems.map((item: JSONSchema7, index: number) => {
      // will render primitive/array/all the types
      const nestedPath = [name, index].join(".");

      return renderer({
        name: nestedPath,
        schema: item,
        path: [nestedPath],
        parsedSorobanOperation,
        onChange,
        formError,
        setFormError,
      } as JsonSchemaFormProps);
    });
  }

  return (
    <Box gap="md" key={`${name}`}>
      <LabelHeading size="md" infoText={schema.description}>
        {name}
      </LabelHeading>

      {schema.description ? (
        <Text as="div" size="xs">
          {schema.description}
        </Text>
      ) : null}

      {Array.isArray(nestedArgsItems) &&
        nestedArgsItems.length > 0 &&
        nestedArgsItems.map((args: unknown, index: number) => {
          const nestedPathTitle = [name, index].join(".");
          const argHeader = [name, index].join("[").concat("]");

          return (
            <Box gap="md" key={`${name}-${index}`}>
              <Card>
                <Box gap="md" key={`${name}-${index}`}>
                  {/* Map Type (scSpecTypeMap) */}
                  {jsonSchema.isSchemaObject(schema.items as AnyObject) &&
                  (schema.items as AnyObject).type === "object" ? (
                    <>
                      <LabelHeading size="lg">{argHeader}</LabelHeading>

                      {Object.keys(args as object).map((arg) => {
                        // will return the nested path for the item
                        // ex. requests.0.address
                        const nestedPath = [nestedPathTitle, arg].join(".");

                        return renderer({
                          name: nestedPath,
                          schema: (schemaItems as AnyObject)?.[
                            arg
                          ] as JSONSchema7,
                          path: [nestedPath],
                          parsedSorobanOperation,
                          onChange,
                          formError,
                          setFormError,
                        });
                      })}
                    </>
                  ) : (
                    <Box gap="md">
                      {/* Vec Type (scSpecTypeVec) */}
                      {renderer({
                        name: nestedPathTitle,
                        schema: schemaItems as JSONSchema7,
                        path: [nestedPathTitle],
                        parsedSorobanOperation,
                        onChange,
                        formError,
                        setFormError,
                      })}
                    </Box>
                  )}

                  {/* delete button */}
                  <Box gap="sm" direction="row" align="center">
                    <Button
                      size="md"
                      variant="tertiary"
                      icon={<Icon.Trash01 />}
                      type="button"
                      onClick={() => {
                        const updatedList = arrayItem.delete(
                          get(
                            parsedSorobanOperation.args,
                            path.join("."),
                          ) as AnyObject[],
                          index,
                        );

                        const updatedArgs = jsonSchema.setDeepValue(
                          parsedSorobanOperation.args,
                          path.join("."),
                          updatedList as unknown as AnyObject,
                        );

                        onChange({
                          ...invokeContractBaseProps,
                          args: updatedArgs,
                        });
                      }}
                    ></Button>
                  </Box>
                </Box>
              </Card>
            </Box>
          );
        })}

      {!disableAddButton ? (
        <Box gap="md" direction="row" align="center">
          <Button
            variant="secondary"
            size="md"
            onClick={() => {
              const template = getTemplate({ schema });

              const args =
                (get(
                  parsedSorobanOperation.args,
                  path.join("."),
                ) as AnyObject[]) || [];
              args.push(template);

              const updatedList = jsonSchema.setDeepValue(
                parsedSorobanOperation.args,
                path.join("."),
                args as unknown as AnyObject,
              );

              onChange({
                ...invokeContractBaseProps,
                args: {
                  ...updatedList,
                },
              });
            }}
            type="button"
          >
            Add {name}
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

const getTemplate = ({ schema }: { schema: JSONSchema7 }) => {
  let template: AnyObject = {};

  const schemaItems = jsonSchema.getSchemaItems(schema);

  if (
    jsonSchema.isSchemaObject(schema.items as AnyObject) &&
    (schema.items as AnyObject).type === "object"
  ) {
    template = Object.keys((schemaItems as object) || {}).reduce(
      (acc: Record<string, string | AnyObject>, key) => {
        // Good example:
        // CDVQVKOY2YSXS2IC7KN6MNASSHPAO7UN2UR2ON4OI2SKMFJNVAMDX6DP
        // submit function with object args
        if (key === "additionalProperties") {
          return acc;
        }

        acc[key] = {};
        return acc;
      },
      {},
    );
  }

  return template;
};
```

## File: src/debug/components/RenderContractMetadata.tsx

```typescript
import React from "react";
import { Box } from "../../components/layout/Box";
import { ContractMetadata } from "../util/loadContractMetada";
import {
  Badge,
  Card,
  Input,
  Label,
  Link,
  Table,
  Text,
} from "@stellar/design-system";

interface RenderContractMetadataProps {
  metadata?: ContractMetadata;
}

const metaDocsLink =
  "https://developers.stellar.org/docs/learn/fundamentals/contract-development/overview#contract-meta";

enum ContractMetadataType {
  SCEnvMetaEntry = "SCEnvMetaEntry",
  SCMetaEntry = "SCMetaEntry",
}

interface TableItem {
  metaType: ContractMetadataType;
  val: string;
  key: string;
  id: string;
}
const RenderContractMetadata: React.FC<RenderContractMetadataProps> = ({
  metadata,
}) => {
  if (!metadata) return null;

  const formatTableItems = (
    data: unknown,
    metaType: ContractMetadataType,
  ): TableItem[] => {
    if (typeof data !== "object" || data === null) {
      return [];
    }
    return Object.entries(data).map(([key, value]) => ({
      key: String(key),
      val: value as string,
      id: String(key),
      metaType: metaType,
    }));
  };

  const getTableData = (): TableItem[] => {
    const tableEntries: TableItem[] = [
      ...formatTableItems(
        metadata.contractmetav0,
        ContractMetadataType.SCMetaEntry,
      ),
      ...formatTableItems(
        metadata.contractenvmetav0,
        ContractMetadataType.SCEnvMetaEntry,
      ),
    ];
    return tableEntries;
  };

  const renderTextCell = (item: string) => (
    <td
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      <Text as="p" size="xs">
        {item}
      </Text>
    </td>
  );

  const renderBadgeCell = (item: string) => (
    <td
      style={{
        paddingLeft: "1rem",
        paddingRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      <Badge size="sm" variant="secondary">
        {item}
      </Badge>
    </td>
  );

  const renderRow = (key: string, val: string, type: ContractMetadataType) => (
    <>
      {renderBadgeCell(type)}
      {renderTextCell(key)}
      {renderTextCell(val)}
    </>
  );

  return (
    <>
      <Input
        label="Contract Wasm Hash"
        id="contract-wasm-hash"
        fieldSize="md"
        copyButton={{
          position: "right",
        }}
        readOnly
        value={metadata?.wasmHash}
      />

      <Box gap="sm" direction="column">
        <Label size="sm" htmlFor="contract-metadata">
          Contract Metadata
        </Label>
        <Card variant="primary">
          <Text as="span" size="xs">
            This section contains the metadata of the contract, which is a
            collection of key-value pairs that provide additional information
            about the contract. This data is added to the contract during
            compilation and can be retrieved directly from the WASM file. See{" "}
            <Link href={metaDocsLink} target="_blank" rel="noopener noreferrer">
              Contract Metadata Documentation
            </Link>{" "}
            for further details.
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginTop: "1.5rem",
            }}
          >
            <Table
              breakpoint={300}
              hideNumberColumn
              columnLabels={[
                { id: "type", label: "Type" },
                { id: "key", label: "Key" },
                { id: "value", label: "Value" },
              ]}
              data={getTableData()}
              renderItemRow={(item: TableItem) =>
                renderRow(item.key, item.val, item.metaType)
              }
            />
          </div>
        </Card>
      </Box>
    </>
  );
};

export default RenderContractMetadata;
```

## File: src/debug/components/RenderTupleType.tsx

```typescript
import { Card } from "@stellar/design-system";
import { JSONSchema7 } from "json-schema";

import { Box } from "../../components/layout/Box";
import { LabelHeading } from "./LabelHeading";

import {
  AnyObject,
  JsonSchemaFormProps,
  SorobanInvokeValue,
} from "../types/types";
import { get } from "lodash";

export const renderTupleType = ({
  path,
  schema,
  onChange,
  parsedSorobanOperation,
  renderer,
  formError,
  setFormError,
}: {
  path: string[];
  schema: JSONSchema7;
  onChange: (value: SorobanInvokeValue) => void;
  parsedSorobanOperation: SorobanInvokeValue;
  renderer: (props: JsonSchemaFormProps) => React.ReactNode;
  formError: AnyObject;
  setFormError: (error: AnyObject) => void;
}) => {
  const getKeyName = get(parsedSorobanOperation.args, path.join("."));

  if (!(getKeyName as AnyObject)?.tag || !schema.properties?.values) {
    return null;
  }

  // from the schema, the tag is "values"
  const label = "values";

  return (
    <Box gap="md">
      <LabelHeading size="md" infoText={schema.description}>
        {(getKeyName as AnyObject)?.tag as string}
      </LabelHeading>

      <Card>
        <Box gap="md">
          <LabelHeading size="md" infoText={schema.description}>
            {label}
          </LabelHeading>
          <Card>
            <Box gap="md">
              {renderer({
                name: label,
                schema: schema?.properties?.values as JSONSchema7,
                path: [...path, label],
                parsedSorobanOperation,
                onChange,
                formError,
                setFormError,
              })}
            </Box>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};
```

## File: src/debug/components/TransactionSuccessCard.tsx

```typescript
import { Box } from "../../components/layout/Box";
import { TxResponse } from "./TxResponse";
import { ValidationResponseCard } from "./ValidationResponseCard";
import { SubmitRpcResponse } from "../types/types";

import { XdrJsonViewer } from "./XdrJsonViewer";
import { Alert } from "@stellar/design-system";

interface TransactionSuccessCardProps {
  response: SubmitRpcResponse;
}

export const TransactionSuccessCard = ({
  response,
}: TransactionSuccessCardProps) => {
  return (
    <ValidationResponseCard
      variant="success"
      title="Transaction submitted!"
      summary={
        <Alert
          variant="success"
          placement="inline"
          title="Successful Execution"
        >
          {" "}
          {`Transaction succeeded with ${response.operationCount} operation(s)`}
        </Alert>
      }
      note={<></>}
      detailedResponse={
        <Box gap="lg">
          <TxResponse
            data-testid="submit-tx-rpc-success-hash"
            label="Hash:"
            value={response.hash}
          />

          <TxResponse
            data-testid="submit-tx-rpc-success-ledger"
            label="Ledger number:"
            value={response.result.ledger.toString()}
          />
          <TxResponse
            data-testid="submit-tx-rpc-success-envelope-xdr"
            label="Transaction Envelope:"
            item={
              <XdrJsonViewer
                xdr={response.result.envelopeXdr.toXDR("base64").toString()}
                typeVariant="TransactionEnvelope"
              />
            }
          />

          <TxResponse
            data-testid="submit-tx-rpc-success-result-xdr"
            label="Transaction Result:"
            item={
              <XdrJsonViewer
                xdr={response.result.resultXdr.toXDR("base64").toString()}
                typeVariant="TransactionResult"
              />
            }
          />
          <TxResponse
            data-testid="submit-tx-rpc-success-result-meta-xdr"
            label="Transaction Result Meta:"
            item={
              <XdrJsonViewer
                xdr={response.result.resultMetaXdr.toXDR("base64").toString()}
                typeVariant="TransactionMeta"
              />
            }
          />

          <TxResponse label="Fee:" value={response.fee} />
        </Box>
      }
    />
  );
};
```

## File: src/debug/components/TxResponse.tsx

```typescript
import { Box } from "../../components/layout/Box";

const styles = {
  value: {
    marginLeft: "var(--sds-gap-sm)",
  } as React.CSSProperties,
  link: {
    color: "var(--sds-clr-gray-12)",
    wordBreak: "break-all" as const,
    fontWeight: "var(--sds-fw-regular)",
  } as React.CSSProperties,
};

export const TxResponse = ({
  label,
  value,
  item,
}: {
  label: string;
  value?: string | number;
  item?: React.ReactNode;
}) => (
  <Box gap="xs">
    <div>{label.toLocaleUpperCase()}</div>
    <div style={styles.value}>
      <div style={styles.link}>{value || item}</div>
    </div>
  </Box>
);
```

## File: src/debug/components/ValidationResponseCard.tsx

```typescript
import { Button, Card, Link, Text } from "@stellar/design-system";
import { Box } from "../../components/layout/Box";
import { useState } from "react";
import { labPrefix } from "../../contracts/util";

type ValidationResponseCard = {
  variant: "primary" | "success" | "error";
  title: string | React.ReactNode;
  summary?: string | React.ReactNode;
  detailedResponse: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  note?: string | React.ReactNode;
  footerLeftEl?: React.ReactNode;
  footerRightEl?: React.ReactNode;
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
  },
  title: (variant: "primary" | "success" | "error") => ({
    color:
      variant === "success"
        ? "var(--sds-clr-green-11)"
        : variant === "error"
          ? "var(--sds-clr-red-11)"
          : "var(--sds-clr-gray-12)",
  }),
  subtitle: {
    color: "var(--sds-clr-gray-11)",
  } as React.CSSProperties,
  note: {
    color: "var(--sds-clr-gray-11)",
  } as React.CSSProperties,
  content: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "var(--sds-clr-gray-12)",
    fontFamily: "var(--sds-ff-monospace)",
    fontWeight: "var(--sds-fw-medium)",
    padding: "1rem",
    wordWrap: "break-word" as const,
    overflowY: "auto" as const,
  } as React.CSSProperties,
  footer: {
    flexWrap: "wrap" as const,
  } as React.CSSProperties,
  footerButtons: {
    flexWrap: "wrap" as const,
  } as React.CSSProperties,
  responsiveButtons: {
    "@media (max-width: 440px)": {
      width: "100%",
      flex: 1,
    },
  } as React.CSSProperties,
};

export const ValidationResponseCard = ({
  variant,
  title,
  summary,
  detailedResponse,
  subtitle,
  note,
  footerLeftEl,
  footerRightEl,
}: ValidationResponseCard) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const txHash =
    typeof summary === "object" && summary !== null && "_owner" in summary
      ? ((
          summary as {
            _owner?: { memoizedProps?: { response?: { hash?: string } } };
          }
        )._owner?.memoizedProps?.response?.hash ?? "")
      : "";

  const renderSummary = () => {
    if (summary) {
      return (
        <Text
          as="div"
          size="sm"
          weight="semi-bold"
          style={
            {
              marginBottom: "1rem",
            } as React.CSSProperties
          }
        >
          {summary}
        </Text>
      );
    }
  };

  return (
    <Card>
      <Box gap="xs" style={styles.container}>
        <>
          <Text
            as="div"
            size="sm"
            weight="medium"
            style={styles.title(variant)}
          >
            {title}
          </Text>
          {subtitle ? (
            <Text as="div" size="xs" weight="medium" style={styles.subtitle}>
              {subtitle}
            </Text>
          ) : null}

          <div
            style={{ display: "flex", flexDirection: "column", gap: "2 rem" }}
          >
            {renderSummary()}
            <Box
              gap="xs"
              direction="row"
              style={{ alignSelf: "flex-end", marginBottom: "1rem" }}
            >
              <Button
                title="Expand"
                variant="tertiary"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Hide " : "Show "} Details
              </Button>
              {txHash ? (
                <Link
                  href={`${labPrefix()}&txDashboard$transactionHash=${txHash}`}
                  size="xs"
                >
                  See on lab
                </Link>
              ) : (
                <></>
              )}
            </Box>
            {isExpanded && (
              <Card variant="secondary" noPadding>
                <div style={styles.content}>
                  {detailedResponse}
                  <style>
                    {`
                  .ValidationResponseCard__content ul {
                    font-size: inherit;
                    line-height: inherit;
                    font-family: var(--sds-ff-monospace);
                    font-weight: var(--sds-fw-medium);
                    padding-left: 1rem;
                  }
                  @media screen and (max-width: 440px) {
                    .ValidationResponseCard__footer--leftEl,
                    .ValidationResponseCard__footer--rightEl {
                      width: 100%;
                    }
                    .ValidationResponseCard__footer--leftEl .Button,
                    .ValidationResponseCard__footer--rightEl .Button {
                      flex: 1;
                    }
                  }
                `}
                  </style>
                </div>
              </Card>
            )}
          </div>
          {footerLeftEl || footerRightEl || note ? (
            <Box gap="lg">
              <>
                {note ? (
                  <Text as="div" size="xs" weight="regular" style={styles.note}>
                    {note}
                  </Text>
                ) : null}

                {footerLeftEl || footerRightEl ? (
                  <Box
                    gap="sm"
                    direction="row"
                    align="center"
                    justify="space-between"
                    style={styles.footer}
                    wrap="wrap"
                  >
                    <>
                      {footerLeftEl ? (
                        <Box
                          gap="sm"
                          direction="row"
                          style={styles.footerButtons}
                          wrap="wrap"
                        >
                          <>{footerLeftEl}</>
                        </Box>
                      ) : null}

                      {footerRightEl ? (
                        <Box
                          gap="sm"
                          direction="row"
                          justify="right"
                          style={styles.footerButtons}
                          wrap="wrap"
                        >
                          <>{footerRightEl}</>
                        </Box>
                      ) : null}
                    </>
                  </Box>
                ) : null}
              </>
            </Box>
          ) : null}
        </>
      </Box>
    </Card>
  );
};
```

## File: src/debug/components/XdrJsonViewer.tsx

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { PrettyJsonTextarea } from "./PrettyJsonTextarea";
import { decode, guess, initialize } from "../util/StellarXdr";
import { Code, Icon } from "@stellar/design-system";

interface Props {
  xdr: string;
  typeVariant?: string;
}

const variant = {
  toggled: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "0.25rem 0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "4px",
  },
  untoggled: {
    backgroundColor: "#C9C8C8",
    color: "#333",
    padding: "0.25rem 0.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    borderRadius: "4px",
  },
};

await initialize();

export const XdrJsonViewer = ({ xdr, typeVariant }: Props) => {
  const [displayFormatted, setDisplayFormatted] = useState<"XDR" | "JSON">(
    "XDR",
  );

  const toggleDisplay = () => {
    setDisplayFormatted((prev) => (prev === "XDR" ? "JSON" : "XDR"));
  };

  let decodeTypeVariant = typeVariant;
  if (!decodeTypeVariant) {
    const validXdrTypes = guess(xdr);
    if (validXdrTypes.length === 0) {
      throw new Error("Invalid XDR type");
    }
    decodeTypeVariant = validXdrTypes[0];
  }

  const parsedJson = JSON.parse(decode(decodeTypeVariant, xdr));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {displayFormatted === "XDR" && <Code size="sm">{xdr}</Code>}
      {displayFormatted === "JSON" && (
        <PrettyJsonTextarea label="" isCodeWrapped={true} json={parsedJson} />
      )}
      <div
        style={{
          alignSelf: "flex-end",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.25rem",
          borderRadius: "4px",
          backgroundColor: "#C9C8C8",
          color: "#333",
        }}
        title={`View as ${displayFormatted === "XDR" ? "JSON" : "XDR"}`}
        onClick={toggleDisplay}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div
            style={
              displayFormatted === "XDR" ? variant.toggled : variant.untoggled
            }
          >
            <Icon.Code01 />
            XDR
          </div>
          <div
            style={
              displayFormatted === "JSON" ? variant.toggled : variant.untoggled
            }
          >
            <Icon.Brackets />
            JSON
          </div>
        </div>
      </div>
    </div>
  );
};
```

## File: src/debug/hooks/useAccountSequenceNumber.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { MuxedAccount, StrKey } from "@stellar/stellar-sdk";
import { useQuery } from "@tanstack/react-query";
import { NetworkHeaders } from "../types/types";

export const useAccountSequenceNumber = ({
  publicKey,
  horizonUrl,
  headers,
  uniqueId,
  enabled = false,
}: {
  publicKey: string;
  horizonUrl: string;
  headers: NetworkHeaders;
  uniqueId?: string;
  enabled?: boolean;
}) => {
  const query = useQuery({
    queryKey: ["accountSequenceNumber", { publicKey, uniqueId }],
    queryFn: async () => {
      let sourceAccount = publicKey;

      if (StrKey.isValidMed25519PublicKey(publicKey)) {
        const muxedAccount = MuxedAccount.fromAddress(publicKey, "0");
        sourceAccount = muxedAccount.baseAccount().accountId();
      }

      try {
        const response = await fetch(
          `${horizonUrl}/accounts/${sourceAccount}`,
          { headers },
        );
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const responseJson = await response.json();

        if (responseJson?.status === 0) {
          throw `Unable to reach server at ${horizonUrl}.`;
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (responseJson?.status?.toString()?.startsWith("4")) {
          if (responseJson?.title === "Resource Missing") {
            throw "Account not found. Make sure the correct network is selected and the account is funded/created.";
          }

          throw (
            responseJson?.extras?.reason ||
            responseJson?.detail ||
            "Something went wrong when fetching the transaction sequence number. Please try again."
          );
        }

        return (BigInt(responseJson.sequence) + BigInt(1)).toString();
      } catch (e: unknown) {
        throw `${e as Error}. Check network configuration.`;
      }
    },
    enabled,
  });

  return query;
};
```

## File: src/debug/hooks/useCheckTxSignatures.ts

```typescript
import { useQuery } from "@tanstack/react-query";
import { fetchTxSignatures } from "../util/fetchTxSignatures";
import { NetworkHeaders } from "../types/types";

export const useCheckTxSignatures = ({
  xdr,
  networkPassphrase,
  networkUrl,
  headers,
}: {
  xdr: string;
  networkPassphrase: string;
  networkUrl: string;
  headers: NetworkHeaders;
}) => {
  const query = useQuery({
    queryKey: ["tx", "signatures"],
    queryFn: async () => {
      try {
        return await fetchTxSignatures({
          txXdr: xdr,
          networkPassphrase,
          networkUrl,
          headers,
        });
      } catch (e) {
        throw new Error(
          `There was a problem checking transaction signatures: ${e as Error}`,
        );
      }
    },
    enabled: false,
  });

  return query;
};
```

## File: src/debug/hooks/useContracts.ts

```typescript
import { useQuery } from "@tanstack/react-query";
import { Client } from "@stellar/stellar-sdk/contract";
import {
  loadContractMetadata,
  ContractMetadata,
} from "../util/loadContractMetada";

const contractModules = import.meta.glob("../../contracts/*.ts");

type ContractModule = {
  default: Client;
  metadata?: ContractMetadata;
};

type ContractMap = Record<string, ContractModule>;

const loadContracts = async () => {
  const loadedContracts: ContractMap = {};
  const failed: Record<string, string> = {};

  for (const [path, importFn] of Object.entries(contractModules)) {
    const filename = path.split("/").pop()?.replace(".ts", "") || "";
    if (filename && filename === "util") continue;

    try {
      const module = (await importFn()) as ContractModule;
      const metadata = await loadContractMetadata(
        module.default.options.contractId,
      );
      loadedContracts[filename] = { ...module, metadata };
    } catch (error) {
      failed[filename] = error instanceof Error ? error.message : String(error);
    }
  }

  return { loadedContracts, failed };
};

export function useContracts() {
  return useQuery({
    queryKey: ["contracts"],
    queryFn: loadContracts,
    staleTime: Infinity,
  });
}
```

## File: src/debug/hooks/usePrevious.ts

```typescript
import { useEffect, useRef } from "react";

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
```

## File: src/debug/hooks/useRpcPrepareTx.ts

```typescript
/* eslint-disable @typescript-eslint/only-throw-error */
import { useMutation } from "@tanstack/react-query";
import { rpc as StellarRpc, TransactionBuilder } from "@stellar/stellar-sdk";

import { isEmptyObject } from "../util/isEmptyObject";
import {
  NetworkHeaders,
  PrepareRpcErrorResponse,
  PrepareRpcResponse,
} from "../types/types";

type PrepareRpcTxProps = {
  rpcUrl: string;
  transactionXdr: string;
  networkPassphrase: string;
  headers: NetworkHeaders;
};

// RPC's prepareTransaction method handles both
// simulating and assembling transactions
export const useRpcPrepareTx = () => {
  const mutation = useMutation<
    PrepareRpcResponse,
    PrepareRpcErrorResponse,
    PrepareRpcTxProps
  >({
    mutationFn: async ({
      rpcUrl,
      transactionXdr,
      networkPassphrase,
      headers,
    }: PrepareRpcTxProps) => {
      try {
        const transaction = TransactionBuilder.fromXDR(
          transactionXdr,
          networkPassphrase,
        );
        const rpcServer = new StellarRpc.Server(rpcUrl, {
          headers: isEmptyObject(headers) ? undefined : { ...headers },
          allowHttp: new URL(rpcUrl).hostname === "localhost",
        });
        const preparedTx = await rpcServer.prepareTransaction(transaction);

        return {
          transactionXdr: preparedTx.toXDR(),
        };
      } catch (e) {
        throw {
          result: e,
        };
      }
    },
  });

  return mutation;
};
```

## File: src/debug/hooks/useSimulateTx.ts

```typescript
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useMutation } from "@tanstack/react-query";

import { NetworkHeaders } from "../types/types";

type SimulateTxProps = {
  rpcUrl: string;
  transactionXdr: string;
  instructionLeeway?: string;
  headers: NetworkHeaders;
};

export const useSimulateTx = () => {
  const mutation = useMutation({
    mutationFn: async ({
      rpcUrl,
      transactionXdr,
      instructionLeeway,
      headers,
    }: SimulateTxProps) => {
      try {
        const res = await fetch(rpcUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "simulateTransaction",
            params: {
              xdrFormat: "json",
              transaction: transactionXdr,
              ...(instructionLeeway
                ? {
                    resourceConfig: {
                      instructionLeeway: Number(instructionLeeway),
                    },
                  }
                : {}),
            },
          }),
        });

        return await res.json();
      } catch (e) {
        throw {
          result: e,
        };
      }
    },
  });

  return mutation;
};
```

## File: src/debug/hooks/useSubmitRpcTx.ts

```typescript
/* eslint-disable @typescript-eslint/only-throw-error */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import { useMutation } from "@tanstack/react-query";
import { rpc as StellarRpc, TransactionBuilder } from "@stellar/stellar-sdk";
import { delay } from "../util/delay";
import { isEmptyObject } from "../util/isEmptyObject";
import {
  NetworkHeaders,
  SubmitRpcError,
  SubmitRpcResponse,
} from "../types/types";

type SubmitRpcTxProps = {
  rpcUrl: string;
  transactionXdr: string;
  networkPassphrase: string;
  headers: NetworkHeaders;
};

export const useSubmitRpcTx = () => {
  const mutation = useMutation<
    SubmitRpcResponse,
    SubmitRpcError,
    SubmitRpcTxProps
  >({
    mutationFn: async ({
      rpcUrl,
      transactionXdr,
      networkPassphrase,
      headers,
    }: SubmitRpcTxProps) => {
      try {
        const transaction = TransactionBuilder.fromXDR(
          transactionXdr,
          networkPassphrase,
        );
        const rpcServer = new StellarRpc.Server(rpcUrl, {
          headers: isEmptyObject(headers) ? undefined : { ...headers },
          allowHttp: new URL(rpcUrl).hostname === "localhost",
        });
        const sentTx = await rpcServer.sendTransaction(transaction);

        if (sentTx.status !== "PENDING") {
          throw { status: sentTx.status, result: sentTx };
        }

        let txResponse;
        const MAX_ATTEMPTS = 10;
        let attempts = 0;

        while (attempts++ < MAX_ATTEMPTS && txResponse?.status !== "SUCCESS") {
          txResponse = await rpcServer.getTransaction(sentTx.hash);

          switch (txResponse.status) {
            case "FAILED":
              throw { status: "FAILED", result: txResponse };
            case "NOT_FOUND":
              await delay(1000);
              continue;
            case "SUCCESS":
            default:
            // Do nothing
          }
        }

        if (attempts >= MAX_ATTEMPTS || txResponse?.status !== "SUCCESS") {
          throw { status: "TIMEOUT", result: txResponse };
        }

        const submittedTx = TransactionBuilder.fromXDR(
          txResponse.envelopeXdr,
          networkPassphrase,
        );
        // TS doesn't recognize operations property even though it is there
        const operations = submittedTx?.operations || [];

        return {
          hash: sentTx.hash,
          result: txResponse,
          operationCount: operations.length,
          fee: submittedTx.fee,
        };
      } catch (e) {
        throw {
          status: "ERROR",
          result: {
            status: "ERROR",
            latestLedger: "",
            latestLedgerCloseTime: "",
            errorResult: e,
          },
        };
      }
    },
  });

  return mutation;
};
```

## File: src/debug/types/types.ts

```typescript
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import React from "react";
import {
  MemoType,
  NetworkError,
  rpc as StellarRpc,
  xdr,
} from "@stellar/stellar-sdk";
import type { JSONSchema7, JSONSchema7Definition } from "json-schema";

// =============================================================================
// Generic
// =============================================================================
export type AnyObject = { [key: string]: unknown };
export type EmptyObj = Record<PropertyKey, never>;
export type ThemeColorType = "sds-theme-dark" | "sds-theme-light";
export type LabSettings = Record<string, string>;

// =============================================================================
// Helpers
// =============================================================================
// Key union type from object keys
export type KeysOfUnion<T> = T extends infer P ? keyof P : never;

// =============================================================================
// Network
// =============================================================================
export type NetworkType = "testnet" | "mainnet" | "futurenet" | "custom";

export type Network = {
  id: NetworkType;
  label: string;
  horizonUrl: string;
  horizonHeaderName?: string;
  horizonHeaderValue?: string;
  rpcUrl: string;
  rpcHeaderName?: string;
  rpcHeaderValue?: string;
  passphrase: string;
};

export type NetworkHeaders = Record<string, string>;

export type StatusPageComponent = {
  [key: string]: unknown;
  id: string;
  name: string;
};

export type StatusPageIncident = {
  [key: string]: unknown;
  id: string;
  name: string;
  body: string;
};

export type StatusPageScheduled = {
  [key: string]: unknown;
  id: string;
  name: string;
  scheduled_for: string;
  components: StatusPageComponent[];
  incident_updates: StatusPageIncident[];
};

// =============================================================================
// Account
// =============================================================================
export type MuxedAccount = {
  id: string | undefined;
  baseAddress: string | undefined;
  muxedAddress: string | undefined;
};

export type MuxedAccountFieldType = MuxedAccount & {
  error: string;
};

// =============================================================================
// Asset
// =============================================================================
export type AssetType =
  | "native"
  | "issued"
  | "credit_alphanum4"
  | "credit_alphanum12"
  | "liquidity_pool_shares"
  | "pool_share";

export type AssetString = {
  id: AssetType;
  label: string;
  value: string | undefined;
};

export type AssetObjectValue = {
  type: AssetType | undefined;
  code: string;
  issuer: string;
};

export type AssetPoolShareObjectValue = {
  type: AssetType | undefined;
  asset_a: AssetObjectValue;
  asset_b: AssetObjectValue;
  fee: string;
};

export type AssetSinglePoolShareValue = {
  type: "pool_share";
  pool_share: string | undefined;
};

export type AssetObject = {
  id: AssetType;
  label: string;
  value:
    | AssetObjectValue
    | AssetPoolShareObjectValue
    | AssetSinglePoolShareValue;
};

export type AssetError = {
  code?: string;
  issuer?: string;
};

export type AssetPoolShareError = {
  asset_a?: AssetError;
  asset_b?: AssetError;
};

// =============================================================================
// Transaction
// =============================================================================
export type TimeBoundsValue = {
  min_time: number | string | undefined;
  max_time: number | string | undefined;
};

export type TxnOperation = {
  operation_type: string;
  params: AnyObject;
  source_account?: string;
};

export type OperationError = {
  operationType: string;
  error: { [key: string]: string };
  missingFields: string[];
  customMessage: string[];
};

export type OpBuildingError = { label?: string; errorList?: string[] };

export type LedgerErrorResponse = {
  message: string;
  errorCode: number;
};

export type PrepareRpcResponse = {
  transactionXdr: string;
};

export type PrepareRpcErrorResponse = {
  result: StellarRpc.Api.SimulateTransactionErrorResponse;
};

export type SubmitRpcResponse = {
  hash: string;
  result: StellarRpc.Api.GetSuccessfulTransactionResponse;
  operationCount: number;
  fee: string;
};

export type SubmitRpcErrorStatus =
  | "TIMEOUT"
  | "FAILED"
  | "DUPLICATE"
  | "TRY_AGAIN_LATER"
  | "ERROR";

export type SubmitRpcError = {
  status: SubmitRpcErrorStatus;
  result: {
    status: SubmitRpcErrorStatus;
    latestLedger: number;
    latestLedgerCloseTime: number;
    hash?: string;
    ledger?: number;
    createdAt?: number;
    applicationOrder?: number;
    feeBump?: boolean;
    envelopeXdr?: xdr.TransactionEnvelope;
    resultXdr?: xdr.TransactionResult;
    resultMetaXdr?: xdr.TransactionMeta;
    errorResult?: xdr.TransactionResult;
    diagnosticEvents?: xdr.DiagnosticEvent[];
  };
};

export type SubmitHorizonError = NetworkError & {
  response: {
    data?: {
      extras?: {
        result_codes?: string;
        result_xdr?: string;
      };
    };
  };
};

export type TransactionBuildParams = {
  source_account: string;
  fee: string;
  seq_num: string;
  cond: {
    time: {
      min_time: string;
      max_time: string;
    };
  };
  memo:
    | string
    | {
        [T in Exclude<MemoType, "none">]?: string;
      }
    | EmptyObj;
};

// =============================================================================
// Component
// =============================================================================
export type InfoCard = {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon?: React.ReactNode;
  buttonAction: () => void;
};

// =============================================================================
// Operations
// =============================================================================
export type OptionFlag = {
  id: string;
  label: string;
  value: number;
};

export type OptionSigner = {
  type: string;
  key: string | undefined;
  weight: string | undefined;
};

export type NumberFractionValue = {
  type: string | undefined;
  value: string | FractionValue | undefined;
};

export type FractionValue = {
  n: string | undefined;
  d: string | undefined;
};

export type RevokeSponsorshipValue = {
  type: SponsorshipType | string;
  data: AnyObject;
};

export type ScValPrimitiveType =
  | "U32"
  | "U64"
  | "U128"
  | "U256"
  | "I32"
  | "I64"
  | "I128"
  | "I256"
  | "Address"
  | "ScString"
  | "ScSymbol"
  | "DataUrl"
  | "Bool";

export type JsonSchemaFormProps = {
  name: string;
  schema: JSONSchema7;
  path?: string[];
  onChange: (value: SorobanInvokeValue) => void;
  index?: number;
  requiredFields?: string[];
  isWriteFn?: boolean;
  parsedSorobanOperation: SorobanInvokeValue;
  formError: AnyObject;
  setFormError: (error: AnyObject) => void;
};

export type SponsorshipType =
  | "account"
  | "trustline"
  | "offer"
  | "data"
  | "claimable_balance"
  | "signer";

// =============================================================================
// Soroban Operations
// =============================================================================
export type SorobanOpType =
  | "extend_footprint_ttl"
  | "restore_footprint"
  | "invoke_contract_function";

export type SorobanInvokeValue = {
  contract_id: string;
  function_name: string;
  args: AnyObject;
};

// =============================================================================
// RPC
// =============================================================================
export type FiltersType = "system" | "contract" | "diagnostic";

export type FiltersObject = {
  type: FiltersType;
  contract_ids: string[];
  topics: string[];
};

export type XdrType = "TransactionEnvelope" | "LedgerKey" | "ScVal";

export type LedgerKeyType =
  | "account"
  | "trustline"
  | "offer"
  | "data"
  | "claimable_balance"
  | "liquidity_pool"
  | "contract_data"
  | "contract_code"
  | "config_setting"
  | "ttl";

export type LedgerKeyEntryTypeProps =
  | "accountID"
  | "asset"
  | "sellerID"
  | "offerID"
  | "dataName"
  | "balanceID"
  | "liquidityPoolID"
  | "contract"
  | "key"
  | "durability"
  | "hash"
  | "configSettingID"
  | "keyHash";

export type LedgerKeyFieldsType = {
  id: LedgerKeyType;
  label: string;
  fields: string;
  custom?: AnyObject;
};

export type ConfigSettingIdType =
  | "contract_max_size_bytes"
  | "contract_compute_v0"
  | "contract_ledger_cost_v0"
  | "contract_historical_data_v0"
  | "contract_events_v0"
  | "contract_bandwidth_v0"
  | "contract_cost_params_cpu_instructions"
  | "contract_cost_params_memory_bytes"
  | "contract_data_key_size_bytes"
  | "contract_data_entry_size_bytes"
  | "state_archival"
  | "contract_execution_lanes"
  | "bucketlist_size_window"
  | "eviction_iterator";

export type XdrFormatType = "json" | "base64";

// =============================================================================
// Local storage items
// =============================================================================
export type LocalStorageSavedNetwork = {
  id: NetworkType;
  label: string;
  horizonUrl?: string;
  rpcUrl?: string;
  passphrase?: string;
};

export interface LocalStorageSavedItem {
  timestamp: number;
  network: LocalStorageSavedNetwork;
  name: string;
}

export interface SavedKeypair extends LocalStorageSavedItem {
  publicKey: string;
  secretKey: string;
}

export interface SavedTransaction extends LocalStorageSavedItem {
  params?: TransactionBuildParams;
  operations?: TxnOperation[];
  xdr: string;
  page: SavedTransactionPage;
  shareableUrl: string | undefined;
}

export interface SavedContract extends LocalStorageSavedItem {
  contractId: string;
  shareableUrl: string;
}

export type SavedTransactionPage = "build" | "sign" | "simulate" | "submit";

export interface SavedEndpointHorizon extends LocalStorageSavedItem {
  url: string;
  method: string;
  route: string;
  params: AnyObject;
  shareableUrl: string | undefined;
}

export interface SavedRpcMethod extends LocalStorageSavedItem {
  url: string;
  method: string;
  rpcMethod: string;
  route: string;
  params: AnyObject;
  shareableUrl: string | undefined;
  payload: AnyObject;
}

// =============================================================================
// Smart Contract Explorer
// =============================================================================
export type ContractInfoApiResponse = {
  contract: string;
  created: number;
  creator: string;
  account?: string;
  payments?: number;
  trades?: number;
  wasm?: string;
  storage_entries?: number;
  validation?: {
    status?: "verified" | "unverified";
    repository?: string;
    commit?: string;
    package?: string;
    make?: string;
    ts?: number;
  };
  versions?: number;
  salt?: string;
  asset?: string;
  code?: string;
  issuer?: string;
  functions?: {
    invocations: number;
    subinvocations: number;
    function: string;
  }[];
};

export type ContractVersionHistoryResponseItem = {
  operation: string;
  paging_token: string;
  ts: number;
  wasm: string;
};

export type ContractStorageDurability = "instance" | "persistent" | "temporary";

export type ContractStorageResponseItem = {
  durability: ContractStorageDurability;
  key: string;
  paging_token: string;
  ttl: number;
  updated: number;
  value: unknown;
  expired?: boolean;
};

export type ContractStorageProcessedItem<T> = T & {
  keyJson?: AnyObject | null;
  valueJson?: AnyObject | null;
};

export type ContractListRecord = {
  account: string;
  contract: string;
  created: number;
  creator: string;
  paging_token: string;
  payments: number;
  trades: number;
  wasm: string;
};

export type WasmData = {
  sourceRepo: string;
  build: {
    attestation: string;
    attestationUrl: string;
    commit: unknown;
    commitUrl: string;
    summary: unknown;
    summaryUrl: unknown;
    workflowFile: unknown;
    workflowFileUrl: string;
  };
};

// =============================================================================
// Data table
// =============================================================================
export type SortDirection = "default" | "asc" | "desc";

export type DataTableHeader = {
  id: string;
  value: string;
  isSortable?: boolean;
  filter?: string[];
};

export type DataTableCell = {
  value: React.ReactNode;
  isBold?: boolean;
  isWrap?: boolean;
  isOverflow?: boolean;
};

// =============================================================================
// Smart contract Wasm binary
// =============================================================================
export const CONTRACT_SECTIONS = [
  "contractmetav0",
  "contractenvmetav0",
  "contractspecv0",
] as const;

export type ContractSectionName = (typeof CONTRACT_SECTIONS)[number];

export type ContractData = {
  sc_env_meta_kind_interface_version?: ContractData | null;
  sc_meta_v0?: ContractData | null;
  xdr?: string[];
  json?: string[];
  text?: string[];
};
export type ContractSections = Record<ContractSectionName, ContractData>;

export type DereferencedSchemaType = {
  name: string;
  description: string;
  properties: Record<string, JSONSchema7Definition>;
  required: string[];
  additionalProperties: JSONSchema7Definition | DereferencedSchemaType;
  type: string;
};
```

## File: src/debug/util/arrayItem.ts

```typescript
const isValidItemIndex = (array: unknown[], itemIndex: number) => {
  // No items in the array
  if (array.length === 0) {
    return false;
  }

  // Invalid item index
  if (itemIndex < 0 || itemIndex > array.length - 1) {
    return false;
  }

  return true;
};

const addItem = <T>(array: unknown[], item: T) => {
  return [...array, item];
};

const deleteItem = (array: unknown[], itemIndex: number) => {
  if (!isValidItemIndex(array, itemIndex)) {
    return array;
  }

  const itemArray = [...array];
  itemArray.splice(itemIndex, 1);

  return itemArray;
};

const duplicateItem = (array: unknown[], itemIndexToDuplicate: number) => {
  if (!isValidItemIndex(array, itemIndexToDuplicate)) {
    return array;
  }

  return [...array, array[itemIndexToDuplicate]];
};

const moveItem = (
  array: unknown[],
  itemIndex: number,
  direction: "before" | "after",
) => {
  if (!isValidItemIndex(array, itemIndex)) {
    return array;
  }

  // Can't move before the first item
  if (itemIndex === 0 && direction === "before") {
    return array;
  }

  // Can't move after the last item
  if (itemIndex === array.length - 1 && direction === "after") {
    return array;
  }

  const itemArray = [...array];
  const el = itemArray.splice(itemIndex, 1)[0];
  const moveTo = direction === "after" ? itemIndex + 1 : itemIndex - 1;

  itemArray.splice(moveTo, 0, el);
  return itemArray;
};

const updateItem = (array: unknown[], itemIndex: number, newItem: unknown) => {
  if (!isValidItemIndex(array, itemIndex)) {
    return array;
  }

  const itemArray = [...array];
  itemArray[itemIndex] = newItem;

  return itemArray;
};

export const arrayItem = {
  add: addItem,
  delete: deleteItem,
  duplicate: duplicateItem,
  move: moveItem,
  update: updateItem,
};
```

## File: src/debug/util/capitalizeString.ts

```typescript
export const capitalizeString = (text: string) =>
  (text && text[0].toUpperCase() + text.slice(1)) || text;
```

## File: src/debug/util/delay.ts

```typescript
export const delay = async (ms: number = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
```

## File: src/debug/util/dereferenceSchema.ts

```typescript
// https://jsonforms.io/api/core/interfaces/jsonschema7.html
import type { JSONSchema7, JSONSchema7Definition } from "json-schema";
import type { DereferencedSchemaType } from "../types/types";
import type { ScValPrimitiveType } from "../types/types";

const resolveNestedSchema = (
  schema: unknown,
  fullSchema: JSONSchema7,
): unknown => {
  if (!schema) return schema;

  if (typeof schema !== "object") return schema;

  if (Array.isArray(schema)) {
    return schema.map((item) => resolveNestedSchema(item, fullSchema));
  }

  if ("$ref" in schema && schema.$ref) {
    const refPath = (schema.$ref as string).replace("#/definitions/", "");
    const refSchema = fullSchema?.definitions?.[refPath];

    if (!refSchema || typeof refSchema === "boolean") return schema;

    // we want to keep primitive types as is to use it in nativeToScVal function later
    const isScPrimitive = [
      "U32",
      "U64",
      "U128",
      "U256",
      "I32",
      "I64",
      "I128",
      "I256",
      "Address",
      "ScString",
      "ScSymbol",
      "DataUrl",
      "Bool",
    ] as ScValPrimitiveType[];

    const finalSchema = isScPrimitive.includes(refPath as ScValPrimitiveType)
      ? {
          type: refPath,
          description: refSchema?.description ?? "",
        }
      : resolveNestedSchema(refSchema, fullSchema);

    return finalSchema;
  }

  if ("oneOf" in schema && schema.oneOf && Array.isArray(schema.oneOf)) {
    return {
      ...schema,
      oneOf: schema.oneOf.map((item: unknown) =>
        resolveNestedSchema(item, fullSchema),
      ),
    };
  }

  if ("items" in schema && schema.items) {
    return {
      ...schema,
      items: resolveNestedSchema(schema.items, fullSchema),
    };
  }

  if ("type" in schema && schema.type === "boolean") {
    return {
      ...schema,
      type: "Bool",
    };
  }

  if ("properties" in schema && schema.properties) {
    const resolvedProps: Record<string, unknown> = {};
    Object.entries(schema.properties).forEach(([key, value]) => {
      resolvedProps[key] = resolveNestedSchema(value, fullSchema);
    });
    return {
      ...schema,
      properties: resolvedProps,
    };
  }

  // Return the schema as is if no special handling needed
  return "properties" in schema ? schema.properties : undefined;
};

/**
 * dereferences the schema for the given method name
 * @param fullSchema - the full schema
 * @param methodName - the method name
 * @returns the dereferenced schema
 */
export const dereferenceSchema = (
  fullSchema: JSONSchema7,
  methodName: string,
): DereferencedSchemaType => {
  if (!fullSchema || !fullSchema.definitions) {
    throw new Error("Full schema is required");
  }
  // Get the method schema
  const methodSchema = fullSchema.definitions[methodName];

  if (!methodSchema || typeof methodSchema === "boolean") {
    throw new Error(`Method ${methodName} not found in schema`);
  }
  const methodSchemaObj = methodSchema;

  // Get the args properties and required fields implemented under `argsAndRequired`
  // https://github.com/stellar/js-stellar-sdk/blob/38115a16ed3fbc5d868ae8b1ab3042cf8a0c3399/src/contract/spec.ts
  const argsProperties = methodSchemaObj.properties?.args as JSONSchema7;
  const requiredFields = argsProperties?.required ?? [];
  const resolvedSchema = resolveNestedSchema(argsProperties, fullSchema);

  return {
    name: methodName,
    description: methodSchemaObj.description ?? "",
    properties:
      typeof resolvedSchema === "object" &&
      resolvedSchema &&
      "properties" in resolvedSchema
        ? (resolvedSchema.properties as Record<string, JSONSchema7Definition>)
        : {},
    required: requiredFields,
    additionalProperties: methodSchemaObj.additionalProperties ?? false,
    type: "object",
  };
};
```

## File: src/debug/util/fetchTxSignatures.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NetworkHeaders } from "../types/types";
import {
  FeeBumpTransaction,
  hash,
  Keypair,
  StrKey,
  TransactionBuilder,
} from "@stellar/stellar-sdk";

export const fetchTxSignatures = async ({
  txXdr,
  networkUrl,
  networkPassphrase,
  headers,
}: {
  txXdr: string;
  networkUrl: string;
  networkPassphrase: string;
  headers: NetworkHeaders;
}) => {
  try {
    let tx = TransactionBuilder.fromXDR(txXdr, networkPassphrase);

    type SourceAccount = {
      [key: string]: {
        weight: number;
        key: string;
        type: string;
      }[];
    };

    type GroupedSignature = [{ sig: Buffer }[], Buffer];

    type SigObj = {
      sig: Buffer;
      isValid?: boolean;
    };

    // Extract all source accounts from transaction (base transaction, and all operations)
    const sourceAccounts: SourceAccount = {};

    // tuple of signatures and transaction hash. This is needed to handle
    // inner signatures in a fee bump transaction
    const groupedSignatures: GroupedSignature[] = [];

    // Inner transaction
    if (tx instanceof FeeBumpTransaction) {
      sourceAccounts[convertMuxedAccountToEd25519Account(tx.feeSource)] = [];
      groupedSignatures.push([
        tx.signatures.map((x) => ({ sig: x.signature() })),
        tx.hash(),
      ]);

      tx = tx.innerTransaction;
    }

    sourceAccounts[convertMuxedAccountToEd25519Account(tx.source)] = [];

    tx.operations.forEach((op) => {
      if (op.source) {
        sourceAccounts[convertMuxedAccountToEd25519Account(op.source)] = [];
      }
    });

    groupedSignatures.push([
      tx.signatures.map((x) => ({ sig: x.signature() })),
      tx.hash(),
    ]);

    const accounts = Object.keys(sourceAccounts);

    // Get all signers per source account
    for (let i = 0; i < accounts.length; i++) {
      const srcAccount = accounts[i];

      try {
        const res = await fetch(`${networkUrl}/accounts/${srcAccount}`, {
          headers,
        });
        const resJson = await res.json();

        if (sourceAccounts[srcAccount] && resJson?.signers) {
          sourceAccounts[srcAccount] = resJson.signers;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // Do nothing
      }
    }

    const allSigners = Object.values(sourceAccounts).reduce((res, cur) => {
      return [...res, ...cur];
    }, []);

    return groupedSignatures.reduce((result: SigObj[], group) => {
      const [sigs, txHash] = group;

      // We are only interested in checking if each of the signatures can be verified for some valid
      // signer for any of the source accounts in the transaction -- we are not taking into account
      // weights, or even if this signer makes sense.
      for (let i = 0; i < sigs.length; i++) {
        const sigObj: SigObj = sigs[i];

        let isValid = false;

        for (let j = 0; j < allSigners.length; j++) {
          const signer = allSigners[j];

          // By nature of pre-authorized transaction, we won't ever receive a pre-auth
          // tx hash in signatures array, so we can ignore pre-authorized transactions here.
          switch (signer.type) {
            case "sha256_hash":
              // eslint-disable-next-line no-case-declarations
              const hashXSigner = StrKey.decodeSha256Hash(signer.key);
              // eslint-disable-next-line no-case-declarations
              const hashXSignature = hash(sigObj.sig);
              isValid = hashXSigner.equals(hashXSignature);
              break;
            case "ed25519_public_key":
              // eslint-disable-next-line no-case-declarations
              const keypair = Keypair.fromPublicKey(signer.key);
              isValid = keypair.verify(txHash, sigObj.sig);
              break;
            default:
            // Do nothing
          }

          if (isValid) {
            break;
          }
        }

        sigObj.isValid = isValid;

        result.push(sigObj);
      }

      return result;
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return [];
  }
};

const convertMuxedAccountToEd25519Account = (account: string) => {
  // TODO: handle muxed account
  return account;
};
```

## File: src/debug/util/formatAmount.ts

```typescript
export const formatAmount = (amount: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 7,
  });

  return formatter.format(amount);
};
```

## File: src/debug/util/getNetworkHeaders.ts

```typescript
import { EmptyObj, Network } from "../types/types";

export const getNetworkHeaders = (
  network: Network | EmptyObj,
  method: "horizon" | "rpc",
) => {
  if (method === "rpc" && network.rpcHeaderName) {
    return { [network.rpcHeaderName]: network.rpcHeaderValue || "" };
  } else if (method === "horizon" && network.horizonHeaderName) {
    return {
      [network.horizonHeaderName]: network.horizonHeaderValue || "",
    };
  }

  return {};
};
```

## File: src/debug/util/isEmptyObject.ts

```typescript
import { AnyObject } from "../types/types";

export const isEmptyObject = (obj: AnyObject) => {
  return Object.keys(obj).length === 0;
};
```

## File: src/debug/util/jsonSchema.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import type { JSONSchema7 } from "json-schema";

import type { AnyObject } from "../types/types";
import { set } from "lodash";

/**
 * For a path like 'requests.1.request_type':
 *
 * obj = {
 *   requests: [
 *     { address: "", amount: "", request_type: "" },
 *     { address: "", amount: "", request_type: "" }
 *   ]
 * }
 *
 * path = "requests.1.request_type"
 * val = e.target.value
 *
 * This will update the value of requests[1].request_type
 */
const setDeepValue = (
  obj: AnyObject,
  path: string,
  val: AnyObject,
): AnyObject => {
  if (!obj) return {};
  const newObj = JSON.parse(JSON.stringify(obj));
  return set(newObj, path, val);
};

const isTaggedUnion = (schema: JSONSchema7): boolean => {
  return Boolean(
    schema.properties?.tag &&
      schema.properties?.values &&
      schema.required?.includes("tag") &&
      schema.required?.includes("values"),
  );
};

const getNestedItemLabel = (path: string): string => {
  const keys = parsePath(path);

  return keys[keys.length - 1] ? keys[keys.length - 1].toString() : "";
};

const parsePath = (path: string): (string | number)[] =>
  path.split(".").map((key) => {
    const parsed = Number(key);

    return isNaN(parsed) ? key : parsed;
  });

const getSchemaType = (prop: AnyObject) => {
  if (!prop) return undefined;

  if (prop.$ref) {
    return (prop.$ref as string).replace("#/definitions/", "");
  }

  if (prop.oneOf) {
    return "oneOf";
  }

  return prop.type;
};

const isSchemaObject = (
  schema: JSONSchema7 | AnyObject,
): schema is JSONSchema7 =>
  schema && typeof schema === "object" && !Array.isArray(schema);

const getSchemaItems = (schema: JSONSchema7 | AnyObject) => {
  if (schema.items && typeof schema.items !== "boolean") {
    if ((schema.items as AnyObject).properties) {
      return (schema.items as AnyObject).properties;
    }
    return schema.items;
  }
  return {};
};

const getSchemaProperty = (
  schema: JSONSchema7 | AnyObject,
  key: string,
): JSONSchema7 | undefined => {
  if (!isSchemaObject(schema) || !schema.properties) return undefined;
  const prop = schema.properties[key];
  return isSchemaObject(prop as JSONSchema7)
    ? (prop as JSONSchema7)
    : undefined;
};

const isTuple = (schema: AnyObject) => {
  return schema.type === "array" && Array.isArray(schema.items);
};

const hasAnyValidationPassed = (errors: (string | false)[]): boolean =>
  errors.some((error) => error === false);

const deleteNestedItemError = (
  nestedKey: string[],
  formError: AnyObject,
  nameIndex: string,
) => {
  const newFormError = { ...formError };

  for (const item of nestedKey) {
    const deletedPath = [nameIndex, item].join(".");
    delete newFormError[deletedPath];
  }

  return newFormError;
};

export const jsonSchema = {
  setDeepValue,
  isSchemaObject,
  getNestedItemLabel,
  getSchemaType,
  getSchemaItems,
  getSchemaProperty,
  isTuple,
  isTaggedUnion,
  hasAnyValidationPassed,
  deleteNestedItemError,
};
```

## File: src/debug/util/parseToLosslessJson.ts

```typescript
import { parse, isNumber } from "lossless-json";
import { AnyObject } from "../types/types";

export const parseToLosslessJson = (stringObj: string) => {
  return parse(stringObj, null, (value) => {
    if (isNumber(value)) {
      return BigInt(value);
    }

    return value;
  }) as AnyObject;
};
```

## File: src/debug/util/prettifyJsonString.ts

```typescript
import { stringify } from "lossless-json";
import { parseToLosslessJson } from "./parseToLosslessJson";

export const prettifyJsonString = (jsonString: string): string => {
  try {
    const parsedJson = parseToLosslessJson(jsonString);
    return stringify(parsedJson, null, 2) || "";
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return jsonString;
  }
};
```

## File: src/debug/util/sanitizeArray.ts

```typescript
export const sanitizeArray = (array: unknown[]) => {
  return array.filter((i) => Boolean(i));
};
```

## File: src/debug/util/sanitizeObject.ts

```typescript
import { isEmptyObject } from "./isEmptyObject";
import { AnyObject } from "../types/types";

export const sanitizeObject = <T extends AnyObject>(
  obj: T,
  noEmptyObj = false,
) => {
  return Object.keys(obj).reduce((res, param) => {
    const paramValue = obj[param];

    const emptyObj = noEmptyObj && isEmptyObject(paramValue as AnyObject);

    if (paramValue && !emptyObj) {
      return { ...res, [param]: paramValue };
    }

    return res;
  }, {} as T);
};
```

## File: src/debug/util/signatureHint.ts

```typescript
import { Keypair } from "@stellar/stellar-sdk";

export const signatureHint = (value: string) => {
  // strkey encoding is using base32 encoding. Encoded public key consists of:
  //
  //  * 1 byte version byte (0x30 encoded as `G`)
  //  * 32 bytes public key
  //  * 2 bytes checksum
  //
  // Because base32 symbols are 5-bit, more than one symbol is needed to represent a single byte.
  // Signature Hint is the last 4 bytes of the public key. So we need to try to show as many 5-bit
  // chunks as possible included between bytes 30 and 33 (included).
  //
  // byte 1: ##### ###
  // byte 2:          ## ##### #
  // byte 3:                    #### ####
  // byte 4:                             # ##### ##
  // byte 5:                                       ### #####  <---------- 40 bits / full alignment
  // byte 6:                                                ##### ###
  // byte 7:                                                         ## ##### #
  //
  // .....
  //
  // byte 26: ##### ###
  // byte 27:          ## ##### #
  // byte 28:                    #### ####                    full b32 symbols
  // byte 29:                             # ##### ##    |--------------------------|
  // byte 30:                                       ### 48###                      |
  // byte 31:                  Signature Hint start |        49### 50#             |    Signature Hint end
  // byte 32:                                                         ## 51### 5   |    |
  // byte 33:                                                                   2### 53##
  // byte 34:                                                                            # 54### 55
  // byte 35:                                                                                      ### 56###

  const hintBytes = Buffer.from(value, "hex");
  const partialPublicKey = Buffer.concat([Buffer.alloc(28, 0), hintBytes]);

  const keypair = new Keypair({
    type: "ed25519",
    publicKey: partialPublicKey,
  });

  return `G${Buffer.alloc(46, "-").toString()}${keypair.publicKey().substring(47, 52)}${Buffer.alloc(4, "-").toString()}`;
};
```

## File: src/debug/util/sorobanUtils.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Address,
  Contract,
  Operation,
  TransactionBuilder,
  xdr,
  Account,
  Memo,
  SorobanDataBuilder,
  Transaction,
  BASE_FEE,
  nativeToScVal,
  OperationOptions,
} from "@stellar/stellar-sdk";

// import { TransactionBuildParams } from "@/store/createStore";
import {
  AnyObject,
  SorobanInvokeValue,
  SorobanOpType,
  TxnOperation,
} from "../types/types";
import { TransactionBuildParams } from "../types/types";

export const isSorobanOperationType = (operationType: string) =>
  [
    "extend_footprint_ttl",
    "restore_footprint",
    "invoke_contract_function",
    "invokeHostFunction",
  ].includes(operationType);

// https://developers.stellar.org/docs/learn/glossary#ledgerkey
// https://developers.stellar.org/docs/build/guides/archival/restore-data-js
// Setup contract data xdr that will be used to build Soroban Transaction Data
// Used for Soroban Operation "restore_footprint" and "extend_footprint_ttl"
// "invoke_contract_function" uses the returned soroban transaction data from simulateTransaction
export const getContractDataXDR = ({
  contractAddress,
  dataKey,
  durability,
}: {
  contractAddress: string;
  dataKey: string;
  durability: string;
}) => {
  const contract: Contract = new Contract(contractAddress);
  const address: Address = Address.fromString(contract.contractId());
  const xdrBinary = Buffer.from(dataKey, "base64");

  const getXdrDurability = (durability: string) => {
    switch (durability) {
      case "persistent":
        return xdr.ContractDataDurability.persistent();
      // https://developers.stellar.org/docs/build/guides/storage/choosing-the-right-storage#temporary-storage
      // TTL for the temporary data can be extended; however,
      // it is unsafe to rely on the extensions to preserve data since
      // there is always a risk of losing temporary data
      case "temporary":
        return xdr.ContractDataDurability.temporary();
      default:
        return xdr.ContractDataDurability.persistent();
    }
  };

  return xdr.LedgerKey.contractData(
    new xdr.LedgerKeyContractData({
      contract: address.toScAddress(),
      key: xdr.ScVal.fromXDR(xdrBinary),
      durability: getXdrDurability(durability),
    }),
  );
};

export const getSorobanTxData = ({
  contractDataXDR,
  operationType,
  fee,
}: {
  contractDataXDR: xdr.LedgerKey;
  operationType: SorobanOpType;
  fee: string;
}): xdr.SorobanTransactionData | undefined => {
  switch (operationType) {
    case "extend_footprint_ttl":
      return buildSorobanData({
        readOnlyXdrLedgerKey: [contractDataXDR],
        resourceFee: fee,
      });
    case "restore_footprint":
      return buildSorobanData({
        readWriteXdrLedgerKey: [contractDataXDR],
        resourceFee: fee,
      });
    default:
      return undefined;
  }
};

export const buildTxWithSorobanData = ({
  sorobanData,
  params,
  sorobanOp,
  networkPassphrase,
}: {
  sorobanData?: xdr.SorobanTransactionData | string;
  params: TransactionBuildParams;
  sorobanOp: TxnOperation;
  networkPassphrase: string;
}): Transaction => {
  // decrement seq number by 1 because TransactionBuilder.build()
  // will increment the seq number by 1 automatically
  const txSeq = (BigInt(params.seq_num) - BigInt(1)).toString();
  const account = new Account(params.source_account, txSeq);

  // https://developers.stellar.org/docs/learn/fundamentals/fees-resource-limits-metering
  const totalTxFee =
    BigInt(params.fee) + BigInt(String(sorobanOp.params.resource_fee));

  const getMemoValue = (memoType: string, memoValue: string) => {
    switch (memoType) {
      case "text":
        return Memo.text(memoValue);
      case "id":
        return Memo.id(memoValue);
      case "hash":
        return Memo.hash(memoValue);
      case "return":
        return Memo.return(memoValue);
      default:
        return Memo.none();
    }
  };

  const getTimeboundsValue = (timebounds: {
    min_time: string;
    max_time: string;
  }) => {
    return {
      minTime: timebounds.min_time,
      maxTime: timebounds.max_time,
    };
  };

  const getSorobanOp = (operationType: string) => {
    switch (operationType) {
      case "extend_footprint_ttl":
        return Operation.extendFootprintTtl({
          extendTo: Number(sorobanOp.params.extend_ttl_to),
          source: sorobanOp.source_account,
        });
      case "restore_footprint":
        return Operation.restoreFootprint({});
      case "invoke_contract_function":
        return Operation.invokeContractFunction({
          contract: sorobanOp.params.contract_id,
          function: sorobanOp.params.function_name,
          args: sorobanOp.params.args,
          auth: sorobanOp.params.auth,
          source: sorobanOp.source_account,
        } as OperationOptions.InvokeContractFunction);
      default:
        throw new Error(`Unsupported Soroban operation type: ${operationType}`);
    }
  };

  const transaction = new TransactionBuilder(account, {
    fee: totalTxFee.toString(),
    timebounds: getTimeboundsValue(params.cond.time),
  });

  if (Object.keys(params.memo).length > 0) {
    const [type, val] = Object.entries(params.memo)[0];
    transaction.addMemo(getMemoValue(type, val));
  }

  return transaction
    .setNetworkPassphrase(networkPassphrase)
    .setSorobanData(sorobanData || "")
    .addOperation(getSorobanOp(sorobanOp.operation_type))
    .build();
};

export const getTxnToSimulate = (
  value: SorobanInvokeValue,
  txnParams: TransactionBuildParams,
  operation: TxnOperation,
  networkPassphrase: string,
): { xdr: string; error: string } => {
  try {
    const argsToScVals = getScValsFromArgs(value.args, []);
    const builtXdr = buildTxWithSorobanData({
      params: txnParams,
      sorobanOp: {
        ...operation,
        params: {
          ...operation.params,
          contract_id: value.contract_id,
          function_name: value.function_name,
          args: argsToScVals,
          resource_fee: BASE_FEE, // bogus resource fee for simulation purpose
        },
      },
      networkPassphrase,
    });

    return { xdr: builtXdr.toXDR(), error: "" };
  } catch (e: unknown) {
    return { xdr: "", error: (e as Error).message };
  }
};

const isMap = (arg: unknown) => {
  try {
    return (
      Array.isArray(arg) &&
      arg.every((obj: AnyObject) => {
        // Check if object has exactly two keys: "0" and "1"
        const keys = Object.keys(obj as object);
        if (keys.length !== 2 || !keys.includes("0") || !keys.includes("1")) {
          return false;
        }

        // Check if "0" key has value and type
        if (
          !obj["0"] ||
          typeof obj["0"] !== "object" ||
          !("value" in obj["0"]) ||
          !("type" in obj["0"])
        ) {
          return false;
        }

        // "1" can be either a simple value with type, or a complex value (array, enum, etc)
        return true;
      })
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e: unknown) {
    return false;
  }
};

const getScValFromArg = (arg: unknown, scVals: xdr.ScVal[]): xdr.ScVal => {
  // Handle array of arrays with numeric objects
  if (Array.isArray(arg) && arg.length > 0) {
    const arrayScVals = arg.map((subArray) => {
      if (Array.isArray(subArray) && isMap(subArray)) {
        const { mapVal, mapType } = convertObjectToMap(subArray);

        if (Object.keys(mapVal).length > 1) {
          const items = Object.keys(mapVal);

          const mapScValOne = nativeToScVal(mapVal[items[0]], {
            type: mapType[items[0]],
          });

          scVals.push(mapScValOne);

          const mapScValTwo = nativeToScVal(mapVal[items[1]], {
            type: mapType[items[1]],
          });

          scVals.push(mapScValTwo);
        }

        return nativeToScVal(mapVal, { type: mapType });
      }
      return getScValFromArg(subArray, scVals);
    });

    return xdr.ScVal.scvVec(arrayScVals);
  }

  return getScValsFromArgs({ arg: arg as AnyObject }, scVals || [])[0];
};

const convertValuesToScVals = (
  values: unknown[],
  scVals: xdr.ScVal[],
): xdr.ScVal[] => {
  return values.map((v) => {
    return getScValFromArg(v, scVals);
  });
};

const convertEnumToScVal = (
  obj: Record<string, unknown>,
  scVals?: xdr.ScVal[],
) => {
  // TUPLE CASE
  if (obj.tag && obj.values) {
    const tagVal = nativeToScVal(obj.tag, { type: "symbol" });
    const valuesVal = convertValuesToScVals(
      obj.values as unknown[],
      scVals || [],
    );
    const tupleScValsVec = xdr.ScVal.scvVec([tagVal, ...valuesVal]);

    return tupleScValsVec;
  }

  // ENUM CASE
  const tagVec = [obj.tag];
  return nativeToScVal(tagVec, { type: "symbol" });
};

const convertObjectToScVal = (obj: Record<string, unknown>): xdr.ScVal => {
  const convertedValue: Record<string, unknown> = {};
  const typeHints: Record<string, unknown> = {};
  // obj input example:
  //  {
  //    "address": {
  //      "value": "CDVQVKOY2YSXS2IC7KN6MNASSHPAO7UN2UR2ON4OI2SKMFJNVAMDX6DP",
  //      "type": "Address"
  //    },
  //    "amount": {
  //      "value": "2",
  //      "type": "I128"
  //    },
  //    "request_type": {
  //      "value": "4",
  //      "type": "U32"
  //    }
  //  }

  //  for an array of objects, `nativeToScVal` expects the following type for `val`:
  //  https://stellar.github.io/js-stellar-sdk/global.html#nativeToScVal
  //  {
  //     "address": "CDVQVKOY2YSXS2IC7KN6MNASSHPAO7UN2UR2ON4OI2SKMFJNVAMDX6DP",
  //     "amount": "2",
  //     "request_type": "2"
  //  }
  //  for `type`, it expects the following type:
  //   {
  //     "address": [
  //       "symbol", // matching the key type
  //       "address" // matching the value type
  //     ],
  //     "amount": [
  //       "symbol", // matching the key type
  //       "i128" // matching the value type
  //     ],
  //     "request_type": [
  //       "symbol", // matching the key type
  //       "u32" // matching the value type
  //     ]
  //  }

  for (const key in obj) {
    if (
      obj[key] &&
      typeof obj[key] === "object" &&
      "type" in obj[key] &&
      obj[key].type === "bool" &&
      "value" in obj[key] &&
      typeof obj[key].value === "string"
    ) {
      convertedValue[key] = obj[key].value === "true" ? true : false;
      typeHints[key] = ["symbol"];
    } else {
      convertedValue[key] = (obj[key] as AnyObject).value;
      typeHints[key] = ["symbol", (obj[key] as AnyObject).type];
    }
  }

  return nativeToScVal(convertedValue, { type: typeHints });
};

type MapPair = {
  "0": { value: string; type: string };
  "1": { value?: string; type?: string } | unknown[] | boolean;
};

const convertObjectToMap = (
  mapArray: MapPair[],
): { mapVal: Record<string, unknown>; mapType: Record<string, unknown> } => {
  const mapVal = mapArray.reduce(
    (acc: Record<string, unknown>, pair: MapPair) => {
      if (Array.isArray(pair["1"])) {
        const valueScVal = getScValFromArg(pair["1"], []);
        acc[pair["0"].value] = valueScVal;
      } else {
        acc[pair["0"].value] =
          (pair["1"] as { value: string }).value === "true";
      }
      return acc;
    },
    {},
  );

  const mapType = mapArray.reduce(
    (acc: Record<string, unknown>, pair: MapPair) => {
      acc[pair["0"].value] = [
        pair["0"].type,
        (pair["1"] as { type: string }).type,
      ];
      return acc;
    },
    {},
  );

  return { mapVal, mapType };
};

type TupleValue = {
  value: unknown;
  type: string;
};

const convertTupleToScVal = (tupleArray: TupleValue[]) => {
  const tupleScVals = tupleArray.map((v) => {
    if (v.type === "bool") {
      const boolValue = v.value === "true";
      return nativeToScVal(boolValue);
    }
    if (v.type === "bytes" && typeof v.value === "string") {
      return nativeToScVal(new Uint8Array(Buffer.from(v.value, "base64")));
    }
    return nativeToScVal(v.value, { type: v.type });
  });

  // JS SDK's nativeToScval doesn't support an array of different types
  // so we need to use xdr.ScVal.scvVec
  return xdr.ScVal.scvVec(tupleScVals);
};

type PrimitiveArg = { type: string; value: unknown };
type EnumArg = { tag: string; values?: unknown[] };

const getScValFromPrimitive = (v: PrimitiveArg) => {
  if (v.type === "bool") {
    const boolValue = v.value === "true";
    return nativeToScVal(boolValue);
  }
  if (v.type === "bytes" && typeof v.value === "string") {
    return nativeToScVal(new Uint8Array(Buffer.from(v.value, "base64")));
  }
  return nativeToScVal(v.value, { type: v.type });
};

const getScValsFromArgs = (
  args: SorobanInvokeValue["args"],
  scVals: xdr.ScVal[] = [],
): xdr.ScVal[] => {
  // PRIMITIVE CASE
  if (
    Object.values(args).every(
      (v): v is PrimitiveArg =>
        typeof v === "object" && v !== null && "type" in v && "value" in v,
    )
  ) {
    const primitiveScVals = Object.values(args).map((v) =>
      getScValFromPrimitive(v as PrimitiveArg),
    );
    return primitiveScVals;
  }

  // ENUM (VOID AND COMPLEX ONE LIKE TUPLE) CASE
  if (
    Object.values(args).some(
      (v): v is EnumArg => typeof v === "object" && v !== null && "tag" in v,
    )
  ) {
    const enumScVals = Object.values(args).map((v) =>
      convertEnumToScVal(v as EnumArg, scVals),
    );
    return enumScVals;
  }

  for (const argKey in args) {
    const argValue = args[argKey];

    // Check if it's an array of map objects
    if (Array.isArray(argValue)) {
      // MAP CASE
      if (isMap(argValue)) {
        const { mapVal, mapType } = convertObjectToMap(argValue);
        const mapScVal = nativeToScVal(mapVal, { type: mapType });
        scVals.push(mapScVal);
        return scVals;
      }

      // VEC CASE #1: array of objects or complicated tuple case
      if (argValue.some((v) => typeof Object.values(v)[0] === "object")) {
        const arrayScVals = argValue.map((v) => {
          if (v.tag) {
            return convertEnumToScVal(v, scVals);
          }
          return convertObjectToScVal(v);
        });

        const tupleScValsVec = xdr.ScVal.scvVec(arrayScVals);

        scVals.push(tupleScValsVec);
        return scVals;
      }

      // VEC CASE #2: array of primitives
      const isVecArray = argValue.every((v) => {
        return v.type === argValue[0].type;
      });

      if (isVecArray) {
        const arrayScVals = argValue.reduce((acc, v) => {
          if (v.type === "bool") {
            acc.push(v.value === "true" ? true : false);
          } else if (v.type === "bytes") {
            acc.push(new Uint8Array(Buffer.from(v.value, "base64")));
          } else {
            acc.push(v.value);
          }
          return acc;
        }, []);

        const scVal = nativeToScVal(arrayScVals, {
          type: argValue[0].type,
        });

        scVals.push(scVal);
        return scVals;
      }

      // TUPLE CASE
      const isTupleArray = argValue.every((v: AnyObject) => v.type && v.value);
      if (isTupleArray) {
        const tupleScValsVec = convertTupleToScVal(argValue);

        scVals.push(tupleScValsVec);
        return scVals;
      }
    }

    // OBJECT CASE
    if (
      Object.values(argValue as object).every(
        (v: AnyObject) => v.type && v.value,
      )
    ) {
      const convertedObj = convertObjectToScVal(argValue as AnyObject);
      scVals.push(nativeToScVal(convertedObj));
      return scVals;
    }

    if (
      typeof argValue === "object" &&
      argValue &&
      "type" in argValue &&
      "value" in argValue &&
      argValue.type &&
      argValue.value
    ) {
      scVals.push(getScValFromPrimitive(argValue as PrimitiveArg));
    }
  }

  return scVals;
};

// supports building xdr.SorobanTransactionData that
// will be included in TransactionBuilder.setSorobanData()
// used in "extend_footprint_ttl" and "restore_footprint" operation
// https://stellar.github.io/js-stellar-sdk/SorobanDataBuilder.html
const buildSorobanData = ({
  readOnlyXdrLedgerKey = [],
  readWriteXdrLedgerKey = [],
  resourceFee,
  //   instructions
  //   ReadableByteStreamController,
}: {
  readOnlyXdrLedgerKey?: xdr.LedgerKey[];
  readWriteXdrLedgerKey?: xdr.LedgerKey[];
  resourceFee: string;
}) => {
  return new SorobanDataBuilder()
    .setReadOnly(readOnlyXdrLedgerKey)
    .setReadWrite(readWriteXdrLedgerKey)
    .setResourceFee(resourceFee)
    .build();
};

export const convertSpecTypeToScValType = (type: string) => {
  switch (type) {
    case "Address":
      return "address";
    case "U32":
      return "u32";
    case "U64":
      return "u64";
    case "U128":
      return "u128";
    case "U256":
      return "u256";
    case "I32":
      return "i32";
    case "I64":
      return "i64";
    case "I128":
      return "i128";
    case "I256":
      return "i256";
    case "ScString":
      return "string";
    case "ScSymbol":
      return "symbol";
    case "DataUrl":
      return "bytes";
    case "Bool":
      return "bool";
    default:
      return type;
  }
};
```

## File: src/debug/util/StellarXdr.ts

```typescript
import init, {
  decode,
  encode,
  guess,
  decode_stream,
} from "@stellar/stellar-xdr-json";

// A wrapper for the Stellar XDR JSON
declare global {
  interface Window {
    __STELLAR_XDR_INIT__?: boolean;
  }
}

const initialize = async () => {
  if (!window.__STELLAR_XDR_INIT__) {
    await init();
    window.__STELLAR_XDR_INIT__ = true;
  }
};

export { initialize, decode, decode_stream, encode, guess };
```

## File: src/debug/util/trim.ts

```typescript
// Regex explained: https://regexr.com/4v6jg
export const trim = (str: string, c = "\\s") =>
  str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), "$2");
```

## File: src/debug/util/xdrFraction.ts

```typescript
// This content is copied from js-stellar-base (src/util/continued_fraction.js)
import BigNumber from "bignumber.js";

const MAX_INT = ((1 << 31) >>> 0) - 1;

export function best_r(rawNumber: string | number | BigNumber) {
  let number = new BigNumber(rawNumber);
  let a;
  let f;
  const fractions = [
    [new BigNumber(0), new BigNumber(1)],
    [new BigNumber(1), new BigNumber(0)],
  ];
  let i = 2;

  while (true) {
    if (number.gt(MAX_INT)) {
      break;
    }
    a = number.integerValue(BigNumber.ROUND_FLOOR);
    f = number.minus(a);
    const h = a.times(fractions[i - 1][0]).plus(fractions[i - 2][0]);
    const k = a.times(fractions[i - 1][1]).plus(fractions[i - 2][1]);
    if (h.gt(MAX_INT) || k.gt(MAX_INT)) {
      break;
    }
    fractions.push([h, k]);
    if (f.eq(0)) {
      break;
    }
    number = new BigNumber(1).div(f);
    i += 1;
  }
  const [n, d] = fractions[fractions.length - 1];

  if (n.isZero() || d.isZero()) {
    throw new Error("Couldn't find approximation");
  }

  return [n.toNumber(), d.toNumber()];
}
```

## File: src/debug/util/xdrUtils.ts

```typescript
// XDR helpers from js-stellar-base
import { xdr } from "@stellar/stellar-sdk";
import BigNumber from "bignumber.js";
import { best_r } from "./xdrFraction";

const ONE = 10000000;

function toXDRAmount(value: string) {
  // Using BigNumber to handle decimal point values
  return BigInt(new BigNumber(value).times(ONE).toString());
}

function fromXDRAmount(value: string) {
  return new BigNumber(value).div(ONE).toFixed(7);
}

function toXDRPrice(price: string) {
  const approx = best_r(price);

  return {
    n: parseInt(approx[0].toString(), 10),
    d: parseInt(approx[1].toString(), 10),
  };
}

function fromXDRPrice(price: xdr.Price) {
  const n = new BigNumber(price.n());
  return n.div(new BigNumber(price.d())).toString();
}

export const xdrUtils = {
  toAmount: toXDRAmount,
  fromAmount: fromXDRAmount,
  toPrice: toXDRPrice,
  fromPrice: fromXDRPrice,
};
```

## File: src/debug/validate/methods/getAccountThresholdError.ts

```typescript
import { getPositiveIntError } from "./getPositiveIntError";

export const getAccountThresholdError = (value: string) => {
  const intError = getPositiveIntError(value);

  if (intError) {
    return intError;
  }

  if (Number(value) > 255) {
    return "Expected an integer between 0 and 255 (inclusive).";
  }

  return false;
};
```

## File: src/debug/validate/methods/getAmountError.ts

```typescript
export const getAmountError = (value: string) => {
  if (value.toString().charAt(0) === "-") {
    return "Amount can only be a positive number.";
  } else if (!value.toString().match(/^[0-9]*(\.[0-9]+){0,1}$/g)) {
    return "Amount can only contain numbers and a period for the decimal point.";
  } else if (value.toString().match(/\.([0-9]){8,}$/g)) {
    return "Amount can only support a precision of 7 decimals.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getArrayOfStringsError.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const getArrayOfStringsError = (value: string) => {
  if (typeof value !== "string") {
    return "Expected an array of strings.";
  }

  try {
    if (value.length > 0) {
      const parsedValue = JSON.parse(value);

      if (Array.isArray(parsedValue)) {
        for (const item of parsedValue) {
          if (typeof item !== "string") {
            return "All values in the array must be a string.";
          }
        }
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return "Expected an array.";
  }
  return false;
};
```

## File: src/debug/validate/methods/getAssetCodeError.ts

```typescript
import { AssetType } from "../../types/types";

export const getAssetCodeError = (
  code: string,
  assetType: AssetType | undefined,
  isRequired?: boolean,
) => {
  if (!code) {
    return isRequired ? "Asset code is required." : false;
  }

  let minLength;
  let maxLength;

  switch (assetType) {
    case "credit_alphanum4":
      minLength = 1;
      maxLength = 4;
      break;
    case "credit_alphanum12":
      minLength = 5;
      maxLength = 12;
      break;
    default:
      minLength = 1;
      maxLength = 12;
  }

  if (!code.match(/^[a-zA-Z0-9]+$/g)) {
    return "Asset code must consist of only letters and numbers.";
  } else if (code.length < minLength || code.length > maxLength) {
    return `Asset code must be between ${minLength} and ${maxLength} characters long.`;
  }

  return false;
};
```

## File: src/debug/validate/methods/getAssetError.ts

```typescript
import { isEmptyObject } from "../../util/isEmptyObject";
import {
  AssetError,
  AssetObjectValue,
  AssetPoolShareError,
  AssetPoolShareObjectValue,
} from "../../types/types";
import { getAssetCodeError } from "./getAssetCodeError";
import { getPublicKeyError } from "./getPublicKeyError";

export const getAssetError = (
  asset: AssetObjectValue | AssetPoolShareObjectValue | undefined,
): AssetError | AssetPoolShareError | false => {
  if (!asset?.type) {
    return false;
  }

  let invalid = {};

  if (asset?.type === "liquidity_pool_shares") {
    const poolSharesAssetVal = asset as AssetPoolShareObjectValue;

    invalid = Object.entries(poolSharesAssetVal).reduce((res, cur) => {
      const [key, val] = cur;

      if (["asset_a", "asset_b"].includes(key)) {
        const validatedAsset = validateAsset(val as AssetObjectValue);

        return isEmptyObject(validatedAsset)
          ? res
          : { ...res, [key]: validatedAsset };
      }

      return res;
    }, {} as AssetPoolShareError);
  } else {
    invalid = validateAsset(asset as AssetObjectValue);
  }

  return isEmptyObject(invalid) ? false : invalid;
};

const validateAsset = (asset: AssetObjectValue) => {
  if (asset?.type === "native") {
    return {};
  }

  return Object.entries({
    code: getAssetCodeError(asset?.code || "", asset?.type),
    issuer: getPublicKeyError(asset?.issuer || ""),
  }).reduce((res, cur) => {
    const [key, value] = cur;

    if (value) {
      return { ...res, [key]: value };
    }

    return res;
  }, {} as AssetError);
};
```

## File: src/debug/validate/methods/getAssetMultiError.ts

```typescript
import { isEmptyObject } from "../../util/isEmptyObject";
import { getAssetCodeError } from "./getAssetCodeError";
import { getPublicKeyError } from "./getPublicKeyError";
import { AssetObjectValue } from "../../types/types";
import { sanitizeArray } from "../../util/sanitizeArray";

export const getAssetMultiError = (
  assets: AssetObjectValue[] | undefined,
  isRequired?: boolean,
) => {
  const errors = assets?.map((asset) => {
    if (asset?.type && asset.type === "native") {
      return false;
    }

    const invalid = Object.entries({
      code: getAssetCodeError(asset?.code || "", asset?.type, isRequired),
      issuer: getPublicKeyError(asset?.issuer || "", isRequired),
    }).reduce((res, cur) => {
      const [key, value] = cur;

      if (value) {
        return { ...res, [key]: value };
      }

      return res;
    }, {});

    return isEmptyObject(invalid) ? false : invalid;
  });

  const sanitized = sanitizeArray(errors || []);

  return sanitized.length === 0 ? false : errors;
};
```

## File: src/debug/validate/methods/getBipPathError.ts

```typescript
export const getBipPathError = (value: string) => {
  const regexp = /44'\/148'\/(\d+)'/;
  const match = regexp.exec(value);

  if (!(match && match[1].length > 0)) {
    return "Invalid BIP path. Please provide it in format 44'/148'/x'. We call 44'/148'/0' the primary account";
  }

  return false;
};
```

## File: src/debug/validate/methods/getClaimableBalanceIdError.ts

```typescript
export const getClaimableBalanceIdError = (value: string) => {
  // 8b discriminant + 64b string
  if (value && value.length !== 8 + 64) {
    return "Claimable Balance ID is invalid.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getClaimaintsError.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { isEmptyObject } from "../../util/isEmptyObject";
import { sanitizeObject } from "../../util/sanitizeObject";
import { sanitizeArray } from "../../util/sanitizeArray";
import { AnyObject } from "../../types/types";

import { getPublicKeyError } from "./getPublicKeyError";
import { getPositiveIntError } from "./getPositiveIntError";

export const getClaimaintsError = (val: AnyObject[]) => {
  if (!val || val.length === 0) {
    return false;
  }

  const invalid: (AnyObject | undefined)[] = [];

  val.forEach((claimant) => {
    const validate = {
      destination: claimant.destination
        ? getPublicKeyError(claimant.destination as string)
        : false,
      predicate:
        claimant.predicate && !isEmptyObject(claimant.predicate as AnyObject)
          ? validatePredicate(claimant.predicate as AnyObject)
          : false,
    };

    const sanitized = sanitizeObject(validate);

    invalid.push(isEmptyObject(sanitized) ? undefined : sanitized);
  });

  const sanitized = sanitizeArray(invalid);

  if (sanitized.length === 0) {
    return false;
  }

  return invalid.length > 0 ? invalid : false;
};

const validatePredicate = (predicate: AnyObject) => {
  const valid = validateEntry(predicate, {});

  return isEmptyObject(valid) ? undefined : valid;
};

const validateEntry = (
  entry: AnyObject,
  result: { [path: string]: string },
  parent?: string,
): AnyObject => {
  Object.entries(entry).forEach((entry) => {
    const [key, value] = entry;
    const path = parent ? `${parent}.${key}` : key;

    if (typeof value === "string") {
      const invalid = getPositiveIntError(value);

      if (invalid) {
        result[path] = invalid;
      }
    } else if (Array.isArray(value)) {
      value.forEach((v, idx) => validateEntry(v, result, `${path}[${idx}]`));
    } else if (typeof value === "object") {
      if (!isEmptyObject(value as AnyObject)) {
        validateEntry(value as AnyObject, result, path);
      }
    }
  });

  return result;
};
```

## File: src/debug/validate/methods/getContractIdError.ts

```typescript
import { StrKey } from "@stellar/stellar-sdk";

export const getContractIdError = (value: string) => {
  if (!StrKey.isValidContract(value)) {
    return "Invalid contract ID. Please enter a valid contract ID.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getDataNameError.ts

```typescript
export const getDataNameError = (value: string) => {
  if (value.toString().length > 64) {
    return `Entry name can only contain a maximum of 64 characters. ${value.length} entered.`;
  }

  return false;
};
```

## File: src/debug/validate/methods/getDataUrlError.ts

```typescript
// Primitive Definition DataUrl comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L159-L164
export const getDataUrlError = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }
  // Check if value is a string
  if (typeof value !== "string") {
    return "Value must be a string";
  }

  // Check pattern for base64 data URL
  const dataUrlPattern =
    /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
  if (!dataUrlPattern.test(value)) {
    return "Value must be a valid base64 encoded string";
  }

  return false;
};
```

## File: src/debug/validate/methods/getDataValueError.ts

```typescript
export const getDataValueError = (value: string) => {
  const valueSize = Buffer.from(value).length;

  if (valueSize > 64) {
    return `Entry value can only contain a maximum of 64 bytes. ${valueSize} bytes entered.`;
  }

  return false;
};
```

## File: src/debug/validate/methods/getEventsFiltersError.ts

```typescript
import { FiltersObject } from "../../types/types";

import { getArrayOfStringsError } from "./getArrayOfStringsError";
import { getContractIdError } from "./getContractIdError";

export const getEventsFiltersError = (value: FiltersObject) => {
  const invalid = { contractId: false, topics: false };

  if (!value) {
    return true;
  }

  const is_contract_ids_empty = value.contract_ids.every(
    (id) => id.length === 0,
  );
  const is_topics_empty = value.contract_ids.every(
    (topic) => topic.length === 0,
  );

  if (is_contract_ids_empty) {
    invalid.contractId = true;
  }

  if (is_topics_empty) {
    invalid.topics = true;
  }

  value.contract_ids.forEach((val) => {
    if (val.length > 0) {
      const is_invalid = Boolean(getContractIdError(val));
      invalid.contractId = is_invalid;
    }
  });

  value.topics.forEach((val) => {
    if (val.length > 0) {
      const is_invalid = Boolean(getArrayOfStringsError(val));
      invalid.topics = is_invalid;
    }
  });

  return invalid.contractId || invalid.topics;
};
```

## File: src/debug/validate/methods/getHomeDomainError.ts

```typescript
export const getHomeDomainError = (value: string) => {
  const charLen = value.toString().length;

  if (charLen > 32) {
    return `Max length of home domain is 32 characters (got ${charLen}).`;
  }

  return false;
};
```

## File: src/debug/validate/methods/getI128Error.ts

```typescript
// Primitive Definition I128 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L128-L133
export const getI128Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }
  // Check pattern for I128
  const i128Pattern = /^(-?[1-9][0-9]*|0)$/;
  if (!i128Pattern.test(value)) {
    return "Value must be a valid i128 integer";
  }

  // Check length constraints
  if (value.length < 1 || value.length > 40) {
    return "Value must be between 1 and 40 characters long";
  }

  try {
    const num = BigInt(value);
    const MIN_I128 = BigInt("-170141183460469231731687303715884105728");
    const MAX_I128 = BigInt("170141183460469231731687303715884105727");

    if (num < MIN_I128 || num > MAX_I128) {
      return "Value must be a valid i128 integer (-170141183460469231731687303715884105728 to 170141183460469231731687303715884105727)";
    }
  } catch {
    return "Value must be a valid i128 integer";
  }

  return false;
};
```

## File: src/debug/validate/methods/getI256Error.ts

```typescript
// Primitive Definition I256 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L140-L145
export const getI256Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }
  // Check pattern for I256
  const i256Pattern = /^(-?[1-9][0-9]*|0)$/;
  if (!i256Pattern.test(value)) {
    return "Value must be a valid i256 integer";
  }

  // Check length constraints
  if (value.length < 1 || value.length > 79) {
    return "Value must be between 1 and 79 characters long";
  }

  try {
    // Ensure it can be parsed as a BigInt
    BigInt(value);
  } catch {
    return "Value must be a valid i256 integer";
  }

  return false;
};
```

## File: src/debug/validate/methods/getI32Error.ts

```typescript
// Primitive Definition I32 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L105-L109
export const getI32Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }

  try {
    const num = BigInt(value);
    const MIN_I32 = BigInt("-2147483648");
    const MAX_I32 = BigInt("2147483647");

    if (num < MIN_I32 || num > MAX_I32) {
      return "Value must be a valid i32 integer (-2147483648 to 2147483647)";
    }
  } catch {
    return "Value must be a valid i32 integer";
  }

  return false;
};
```

## File: src/debug/validate/methods/getI64Error.ts

```typescript
// Primitive Definition I64 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L116C2-L121C5
export const getI64Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }
  // Check pattern for I64
  const i64Pattern = /^(-?[1-9][0-9]*|0)$/;
  if (!i64Pattern.test(value)) {
    return "Value must be a valid i64 integer";
  }

  // Check length constraints
  if (value.length < 1 || value.length > 21) {
    return "Value must be between 1 and 21 characters long";
  }

  try {
    const num = BigInt(value);
    const MIN_I64 = BigInt("-9223372036854775808");
    const MAX_I64 = BigInt("9223372036854775807");

    if (num < MIN_I64 || num > MAX_I64) {
      return "Value must be a valid i64 integer (-9223372036854775808 to 9223372036854775807)";
    }
  } catch {
    return "Value must be a valid i64 integer";
  }

  return false;
};
```

## File: src/debug/validate/methods/getMemoError.ts

```typescript
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { capitalizeString } from "../../util/capitalizeString";
import { MemoType, MemoValue, xdr } from "@stellar/stellar-sdk";

export const getMemoError = (
  memo:
    | {
        type: MemoType | string | undefined;
        value: MemoValue | string | undefined;
      }
    | undefined,
) => {
  if (!memo?.value) {
    return false;
  }

  switch (memo?.type) {
    case "text":
      // eslint-disable-next-line no-case-declarations
      const memoTextBytes = Buffer.byteLength(memo.value as string, "utf8");

      if (memoTextBytes > 28) {
        return `Memo Text accepts a string of up to 28 bytes. ${memoTextBytes} bytes entered.`;
      }

      return false;
    case "id":
      if (
        !memo.value?.toString().match(/^[0-9]*$/g) ||
        Number(memo.value) < 0
      ) {
        return "Memo ID accepts a positive integer.";
      }

      // Checking UnsignedHyper
      if (
        memo.value !== xdr.Uint64.fromString(memo.value as string).toString()
      ) {
        return `Memo ID is an unsigned 64-bit integer and the max valid
              value is 18446744073709551615`;
      }

      return false;
    case "hash":
    case "return":
      if (!memo.value?.toString().match(/^[0-9a-f]{64}$/gi)) {
        return `Memo ${capitalizeString(memo.type)} accepts a 32-byte hash in hexadecimal format (64 characters).`;
      }

      return false;
    default:
      return false;
  }
};
```

## File: src/debug/validate/methods/getNumberFractionError.ts

```typescript
import { FractionValue, NumberFractionValue } from "../../types/types";
import { getAmountError } from "./getAmountError";
import { getPositiveIntError } from "./getPositiveIntError";
import { sanitizeArray } from "../../util/sanitizeArray";

export const getNumberFractionError = (value: NumberFractionValue) => {
  if (!value.type || !value.value) {
    return false;
  }

  if (value.type === "number") {
    return getAmountError(value.value as string);
  }

  if (value.type === "fraction") {
    const val = value.value as FractionValue;
    const numValid = val.n ? getPositiveIntError(val.n) : false;
    const denValid = val.d ? getPositiveIntError(val.d) : false;

    const numError = numValid ? `Numerator: ${numValid}` : false;
    const denError = denValid ? `Denominator: ${denValid}` : false;

    return sanitizeArray([numError, denError]).join(" ") ?? false;
  }

  return false;
};
```

## File: src/debug/validate/methods/getOptionsSignerError.ts

```typescript
import { isEmptyObject } from "../../util/isEmptyObject";
import { sanitizeObject } from "../../util/sanitizeObject";
import { OptionSigner } from "../../types/types";

import { getAccountThresholdError } from "./getAccountThresholdError";
import { getPublicKeyError } from "./getPublicKeyError";

export const getOptionsSignerError = (signer: OptionSigner | undefined) => {
  if (!signer || !signer?.type) {
    return false;
  }

  const error: { key: string | boolean; weight: string | boolean } = {
    key: "",
    weight: getAccountThresholdError(signer?.weight || ""),
  };

  switch (signer.type) {
    case "ed25519PublicKey":
      error.key = signer.key ? getPublicKeyError(signer.key) : "";
      break;
    case "sha256Hash":
    case "preAuthTx":
      error.key = signer.key ? hasValidator(signer.key) : "";
      break;
    default:
    // Do nothing
  }

  const sanitized = sanitizeObject(error);

  return isEmptyObject(sanitized) ? false : sanitized;
};

const hasValidator = (value: string) => {
  if (!value.match(/^[0-9a-f]{64}$/gi)) {
    return "Accepts a 32-byte hash in hexadecimal format (64 characters).";
  }

  return false;
};
```

## File: src/debug/validate/methods/getPositiveIntError.ts

```typescript
export const getPositiveIntError = (value: string) => {
  if (value.toString().charAt(0) === "-") {
    return "Expected a positive number or zero.";
  } else if (!value.toString().match(/^[0-9]*$/g)) {
    return "Expected a whole number.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getPositiveNumberError.ts

```typescript
export const getPositiveNumberError = (value: string) => {
  if (value.toString().charAt(0) === "-") {
    return "Expected a positive number or zero.";
  } else if (!value.toString().match(/^[0-9]*(\.[0-9]+){0,1}$/g)) {
    return "Expected a positive number with a period for the decimal point.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getPublicKeyError.ts

```typescript
import { StrKey } from "@stellar/stellar-sdk";

export const getPublicKeyError = (publicKey: string, isRequired?: boolean) => {
  if (!publicKey) {
    if (isRequired) {
      return "Public key is required.";
    } else {
      return false;
    }
  }

  if (publicKey.startsWith("M")) {
    if (!StrKey.isValidMed25519PublicKey(publicKey)) {
      return "Muxed account address is invalid.";
    }
  } else if (!StrKey.isValidEd25519PublicKey(publicKey)) {
    return "Public key is invalid.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getRevokeSponsorshipError.ts

```typescript
import { sanitizeObject } from "../../util/sanitizeObject";
import { isEmptyObject } from "../../util/isEmptyObject";
import {
  AnyObject,
  AssetObjectValue,
  AssetPoolShareObjectValue,
  OptionSigner,
  RevokeSponsorshipValue,
} from "../../types/types";

import { getPublicKeyError } from "./getPublicKeyError";
import { getAssetError } from "./getAssetError";
import { getPositiveIntError } from "./getPositiveIntError";
import { getDataNameError } from "./getDataNameError";
import { getClaimableBalanceIdError } from "./getClaimableBalanceIdError";
import { getOptionsSignerError } from "./getOptionsSignerError";

export const getRevokeSponsorshipError = (
  value: RevokeSponsorshipValue | undefined,
) => {
  if (!value || !value.data) {
    return false;
  }

  const cleanResponse = (validation: AnyObject | boolean) => {
    if (typeof validation === "boolean") {
      return validation;
    }

    const valid = sanitizeObject(validation);
    return isEmptyObject(valid) ? false : valid;
  };

  let response: AnyObject | boolean = false;

  switch (value.type) {
    case "account":
      response = {
        account_id: getPublicKeyError(value.data.account_id as string),
      };
      break;
    case "trustline":
      response = {
        account_id: getPublicKeyError(value.data.account_id as string),
        asset: getAssetError(
          value.data.asset as
            | undefined
            | AssetObjectValue
            | AssetPoolShareObjectValue,
        ),
      };
      break;
    case "offer":
      response = {
        seller_id: getPublicKeyError(value.data.seller_id as string),
        offer_id: getPositiveIntError((value.data.offer_id as string) || ""),
      };
      break;
    case "data":
      response = {
        account_id: getPublicKeyError(value.data.account_id as string),
        data_name: getDataNameError((value.data.data_name as string) || ""),
      };
      break;
    case "claimable_balance":
      response = {
        balance_id: getClaimableBalanceIdError(value.data.balance_id as string),
      };
      break;
    case "signer":
      response = {
        account_id: getPublicKeyError(value.data.account_id as string),
        signer: getOptionsSignerError(value.data.signer as OptionSigner),
      };
      break;
    default:
    // Do nothing
  }

  return cleanResponse(response);
};
```

## File: src/debug/validate/methods/getSecretKeyError.ts

```typescript
import { StrKey } from "@stellar/stellar-sdk";

export const getSecretKeyError = (value: string) => {
  if (!StrKey.isValidEd25519SecretSeed(value)) {
    return "Invalid secret key. Please check your secret key and try again.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getTimeBoundsError.ts

```typescript
import { getPositiveIntError } from "./getPositiveIntError";
import { sanitizeObject } from "../../util/sanitizeObject";
import { isEmptyObject } from "../../util/isEmptyObject";
import { TimeBoundsValue } from "../../types/types";

export const getTimeBoundsError = ({ min_time, max_time }: TimeBoundsValue) => {
  const validated = sanitizeObject({
    min_time: min_time
      ? getPositiveIntError(min_time.toString())
      : (false as const),
    max_time: max_time
      ? getPositiveIntError(max_time.toString())
      : (false as const),
  });

  return isEmptyObject(validated) ? false : validated;
};
```

## File: src/debug/validate/methods/getTransactionHashError.ts

```typescript
export const getTransactionHashError = (hash: string | undefined) => {
  if (!hash) {
    return false;
  }

  if (hash.match(/^[0-9a-f]{64}$/g) === null) {
    return "Transaction hash is invalid.";
  }

  return false;
};
```

## File: src/debug/validate/methods/getU128Error.ts

```typescript
import { validate } from "../../validate";

// Primitive Definition U128 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L122-L127
export const getU128Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }

  const error = validate.getPositiveIntError(value);

  if (error) {
    return error;
  }

  // Check pattern for U128
  const u128Pattern = /^([1-9][0-9]*|0)$/;
  if (!u128Pattern.test(value)) {
    return "Value must be a valid u128 integer";
  }

  // Check length constraints
  if (value.length < 1 || value.length > 39) {
    return "Value must be between 1 and 39 characters long";
  }

  try {
    // Ensure it can be parsed as a BigInt
    BigInt(value);
  } catch {
    return "Value must be a valid u128 integer";
  }

  return false;
};
```

## File: src/debug/validate/methods/getU256Error.ts

```typescript
import { validate } from "../../validate";

// Primitive Definition U256 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L134-L139
export const getU256Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }

  const error = validate.getPositiveIntError(value);

  if (error) {
    return error;
  }

  // Check pattern for U256
  const u256Pattern = /^([1-9][0-9]*|0)$/;
  if (!u256Pattern.test(value)) {
    return "Value must be a valid u256 integer";
  }

  // Check length constraints
  if (value.length < 1 || value.length > 78) {
    return "Value must be between 1 and 78 characters long";
  }

  try {
    // Ensure it can be parsed as a BigInt
    BigInt(value);
  } catch {
    return "Value must be a valid u256 integer";
  }

  return false;
};
```

## File: src/debug/validate/methods/getU32Error.ts

```typescript
import { validate } from "../../validate";

// Primitive Definition U32 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L100-L104
const MAX_U32 = BigInt("4294967295");

export const getU32Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }

  const error = validate.getPositiveIntError(value);

  if (error) {
    return error;
  }

  const num = BigInt(value);

  if (num < 0 || num > MAX_U32) {
    return "Value must be a valid u32 integer (0 to 4294967295)";
  }

  return false;
};
```

## File: src/debug/validate/methods/getU64Error.ts

```typescript
import { validate } from "../../validate";

// Primitive Definition U64 comes from
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts#L110-L115
const MAX_U64 = BigInt("18446744073709551615");

export const getU64Error = (value: string, isRequired?: boolean) => {
  if (!value) {
    if (isRequired) {
      return "This field is required.";
    } else {
      return false;
    }
  }

  const error = validate.getPositiveIntError(value);

  if (error) {
    return error;
  }

  // Use the original regex pattern
  const u64Pattern = /^([1-9][0-9]*|0)$/;

  // Check if the value matches the U64 pattern
  if (!u64Pattern.test(value)) {
    return "Value must be a valid u64 integer (0 to 18446744073709551615)";
  }

  try {
    const num = BigInt(value);
    if (num < 0 || num > MAX_U64) {
      return "Value must be a valid u64 integer (0 to 18446744073709551615)";
    }
  } catch {
    return "Value must be a valid u64 integer (0 to 18446744073709551615)";
  }

  return false;
};
```

## File: src/debug/validate/methods/getXdrError.ts

```typescript
import { trim } from "../../util/trim";
import { xdr as stellarXDR } from "@stellar/stellar-sdk";

import { XdrType } from "../../types/types";

const validateBase64 = (value: string) => {
  if (value.match(/^[-A-Za-z0-9+/=]*$/) === null) {
    return {
      result: "error",
      message: "The input is not valid base64 (a-zA-Z0-9+/=).",
    };
  }

  return { result: "success", message: "Valid Base64" };
};

export const getXdrError = (value: string, type?: XdrType) => {
  if (!value) {
    return undefined;
  }

  const defaultType = "Transaction Envelope";
  const selectedType = type || defaultType;

  const sanitizedXdr = trim(value);
  const base64Validation = validateBase64(sanitizedXdr);

  if (base64Validation.result !== "success") {
    return base64Validation;
  }

  try {
    if (type === "LedgerKey") {
      stellarXDR.LedgerKey.fromXDR(sanitizedXdr, "base64");
    } else {
      stellarXDR.TransactionEnvelope.fromXDR(sanitizedXdr, "base64");
    }

    // TODO: See, if we can make this response match all the other validations.
    // This is the only exception and might cause issues if we don't remember to
    // handle it.
    return {
      result: "success",
      message: `Valid ${selectedType} XDR`,
    };
  } catch (e) {
    return {
      result: "error",
      message: `Unable to parse input XDR into ${selectedType}`,
      originalError: e,
    };
  }
};
```

## File: src/debug/validate/index.ts

```typescript
import { getAccountThresholdError } from "./methods/getAccountThresholdError";
import { getAmountError } from "./methods/getAmountError";
import { getArrayOfStringsError } from "./methods/getArrayOfStringsError";
import { getAssetError } from "./methods/getAssetError";
import { getAssetCodeError } from "./methods/getAssetCodeError";
import { getAssetMultiError } from "./methods/getAssetMultiError";
import { getBipPathError } from "./methods/getBipPathError";
import { getClaimableBalanceIdError } from "./methods/getClaimableBalanceIdError";
import { getClaimaintsError } from "./methods/getClaimaintsError";
import { getContractIdError } from "./methods/getContractIdError";
import { getDataNameError } from "./methods/getDataNameError";
import { getDataValueError } from "./methods/getDataValueError";
import { getEventsFiltersError } from "./methods/getEventsFiltersError";
import { getHomeDomainError } from "./methods/getHomeDomainError";
import { getMemoError } from "./methods/getMemoError";
import { getNumberFractionError } from "./methods/getNumberFractionError";
import { getOptionsSignerError } from "./methods/getOptionsSignerError";
import { getPositiveIntError } from "./methods/getPositiveIntError";
import { getPositiveNumberError } from "./methods/getPositiveNumberError";
import { getPublicKeyError } from "./methods/getPublicKeyError";
import { getRevokeSponsorshipError } from "./methods/getRevokeSponsorshipError";
import { getSecretKeyError } from "./methods/getSecretKeyError";
import { getTimeBoundsError } from "./methods/getTimeBoundsError";
import { getTransactionHashError } from "./methods/getTransactionHashError";
import { getXdrError } from "./methods/getXdrError";
import { getU32Error } from "./methods/getU32Error";
import { getU64Error } from "./methods/getU64Error";
import { getU128Error } from "./methods/getU128Error";
import { getU256Error } from "./methods/getU256Error";
import { getI32Error } from "./methods/getI32Error";
import { getI64Error } from "./methods/getI64Error";
import { getI128Error } from "./methods/getI128Error";
import { getI256Error } from "./methods/getI256Error";
import { getDataUrlError } from "./methods/getDataUrlError";

export const validate = {
  getAccountThresholdError,
  getAmountError,
  getArrayOfStringsError,
  getAssetError,
  getAssetCodeError,
  getAssetMultiError,
  getBipPathError,
  getClaimableBalanceIdError,
  getClaimaintsError,
  getContractIdError,
  getDataNameError,
  getDataValueError,
  getEventsFiltersError,
  getHomeDomainError,
  getMemoError,
  getNumberFractionError,
  getOptionsSignerError,
  getPositiveIntError,
  getPositiveNumberError,
  getPublicKeyError,
  getRevokeSponsorshipError,
  getSecretKeyError,
  getTimeBoundsError,
  getTransactionHashError,
  getXdrError,
  getU32Error,
  getI32Error,
  getU64Error,
  getI64Error,
  getU128Error,
  getI128Error,
  getU256Error,
  getI256Error,
  getDataUrlError,
};
```

## File: src/hooks/useBuyToken.ts

```typescript
// Hook for buying tokens from Stellar DEX
import { useState, useCallback, use } from "react";
import { WalletContext } from "../providers/WalletProvider";
import {
  createBuyOfferXDR,
  createPathPaymentXDR,
  findBestSellOffer,
  createTrustlineXDR,
  hasTrustline,
  submitSignedTransaction,
  getTransactionUrl,
  type BuyTokenParams,
} from "../services/buyToken";
import { networkPassphrase } from "../contracts/util";

export interface UseBuyTokenResult {
  buyToken: (
    params: BuyTokenParams,
  ) => Promise<{ txHash: string; transactionUrl: string }>;
  loading: boolean;
  error: string | null;
  checkingTrustline: boolean;
}

export function useBuyToken(): UseBuyTokenResult {
  const { address, signTransaction } = use(WalletContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [checkingTrustline, setCheckingTrustline] = useState(false);

  const buyToken = useCallback(
    async (
      params: BuyTokenParams,
    ): Promise<{ txHash: string; transactionUrl: string }> => {
      console.log("=== useBuyToken: Starting purchase ===");
      console.log("Params:", params);
      console.log("Address:", address);
      console.log("signTransaction available:", !!signTransaction);

      if (!address) {
        const error = "Wallet not connected";
        console.error(error);
        throw new Error(error);
      }

      if (!signTransaction) {
        const error =
          "Wallet signing not available. Please make sure your wallet is connected and supports transaction signing.";
        console.error(error);
        throw new Error(error);
      }

      setLoading(true);
      setError(null);

      try {
        // Step 1: Check if user has trustline for the token
        console.log("Step 1: Checking trustline...");
        setCheckingTrustline(true);
        const hasTrust = await hasTrustline(
          params.buyerPublicKey,
          params.tokenCode,
          params.tokenIssuer,
        );
        setCheckingTrustline(false);
        console.log("Trustline check result:", hasTrust);

        let xdr: string;

        if (!hasTrust) {
          // Step 2a: Create trustline XDR if needed
          console.log("Step 2a: Creating trustline XDR...");
          xdr = await createTrustlineXDR(
            params.buyerPublicKey,
            params.tokenCode,
            params.tokenIssuer,
          );
          console.log("Trustline XDR created, length:", xdr.length);

          // Step 3a: Sign trustline transaction
          console.log("Step 3a: Requesting wallet signature for trustline...");
          console.log("This should open your wallet to sign the transaction");

          try {
            const trustlineSignedResult = await signTransaction(xdr, {
              address: params.buyerPublicKey,
              networkPassphrase: String(networkPassphrase),
            });

            console.log("Trustline signing result:", trustlineSignedResult);

            if (!trustlineSignedResult.signedTxXdr) {
              throw new Error(
                "Failed to sign trustline transaction: No signed XDR returned from wallet",
              );
            }

            // Step 4a: Submit trustline transaction
            console.log("Step 4a: Submitting trustline transaction...");
            await submitSignedTransaction(trustlineSignedResult.signedTxXdr);
            console.log("✅ Trustline created successfully");
          } catch (signError) {
            console.error("Error during trustline signing:", signError);
            throw new Error(
              `Failed to sign trustline: ${signError instanceof Error ? signError.message : String(signError)}`,
            );
          }
        }

        // Step 2b: Check for existing sell offers to execute immediately
        console.log("Step 2b: Checking for existing sell offers...");
        const bestOffer = await findBestSellOffer(
          params.tokenCode,
          params.tokenIssuer,
          "1",
        );

        if (bestOffer) {
          // Use path payment for immediate execution
          console.log(
            `✅ Found matching sell offer (ID: ${bestOffer.id}). Executing immediate trade...`,
          );
          xdr = await createPathPaymentXDR(params);
          console.log(
            "Created path payment transaction for immediate execution",
          );
        } else {
          // No matching offer, create a buy offer that will sit on the orderbook
          console.log("⚠️ No matching sell offer found. Creating buy offer...");
          xdr = await createBuyOfferXDR(params);
          console.log("Created buy offer transaction");
        }

        // Step 3b: Sign transaction
        console.log(
          "Step 3b: Requesting wallet signature for purchase transaction...",
        );
        console.log("🔐 THIS SHOULD OPEN YOUR WALLET TO SIGN THE TRANSACTION");
        console.log("XDR length:", xdr.length);
        console.log("Network passphrase:", networkPassphrase);

        let result: { hash: string };

        try {
          const signedResult = await signTransaction(xdr, {
            address: params.buyerPublicKey,
            networkPassphrase: String(networkPassphrase),
          });

          console.log("Purchase signing result:", signedResult);

          if (!signedResult.signedTxXdr) {
            throw new Error(
              "Failed to sign transaction: No signed XDR returned from wallet. Please check your wallet and try again.",
            );
          }

          // Step 4b: Submit transaction
          console.log("Step 4b: Submitting transaction to Stellar network...");
          result = await submitSignedTransaction(signedResult.signedTxXdr);
          console.log(`✅ Transaction submitted successfully: ${result.hash}`);
        } catch (signError) {
          console.error("❌ Error during purchase signing:", signError);
          throw new Error(
            `Failed to sign purchase transaction: ${signError instanceof Error ? signError.message : String(signError)}. Make sure your wallet is open and ready to sign.`,
          );
        }

        const transactionUrl = getTransactionUrl(result.hash);

        console.log("=== Purchase completed successfully ===");
        console.log("Transaction hash:", result.hash);
        console.log("Transaction URL:", transactionUrl);

        setLoading(false);
        setError(null);
        return {
          txHash: result.hash,
          transactionUrl,
        };
      } catch (err) {
        console.error("=== Purchase failed ===");
        console.error("Error:", err);
        console.error("Error type:", typeof err);
        console.error(
          "Error message:",
          err instanceof Error ? err.message : String(err),
        );
        console.error(
          "Error stack:",
          err instanceof Error ? err.stack : "No stack trace",
        );

        const errorMessage =
          err instanceof Error
            ? err.message
            : `Failed to buy token: ${String(err)}`;

        setError(errorMessage);
        setLoading(false);
        setCheckingTrustline(false);

        // Re-throw so BuyDialog can handle it
        throw err;
      }
    },
    [address, signTransaction],
  );

  return {
    buyToken,
    loading,
    error,
    checkingTrustline,
  };
}
```

## File: src/hooks/useCreateNftCollection.ts

```typescript
import { useCallback, useState } from "react";
import { toast } from "sonner";
import type {
  MethodOptions,
  Result,
  SentTransaction,
} from "@stellar/stellar-sdk/contract";
import type { Client as FactoryContractClient } from "factory";
import { useWallet } from "./useWallet";
import { useContracts } from "../debug/hooks/useContracts";
import { networkPassphrase } from "../contracts/util";

interface NftFormParams {
  name: string;
  symbol: string;
  baseUri: string;
}

interface CreateCollectionResult {
  sentTransaction: SentTransaction<Result<string>>;
  hash?: string;
  collectionAddress?: string;
}

export function useCreateNftCollection() {
  const { address, signTransaction } = useWallet();
  const { data: contractData } = useContracts();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCollection = useCallback(
    async (formData: NftFormParams): Promise<CreateCollectionResult | null> => {
      if (!address || !signTransaction) {
        setError("Wallet not connected");
        return null;
      }

      const factoryContract = contractData?.loadedContracts?.factory
        ?.default as FactoryContractClient | undefined;

      if (!factoryContract) {
        setError(
          "Factory contract client not loaded. Is it configured in environments.toml?",
        );
        return null;
      }

      const normalizedInputs = {
        name: formData.name.trim(),
        symbol: formData.symbol.trim(),
        baseUri: formData.baseUri.trim(),
      };

      setLoading(true);
      setError(null);
      const toastId = toast.loading("Preparing transaction...");

      try {
        const invocationOptions: MethodOptions & {
          publicKey: string;
          address: string;
        } = {
          publicKey: address,
          address,
        };

        const tx = await factoryContract.create_nft(
          {
            owner: address,
            name: normalizedInputs.name,
            symbol: normalizedInputs.symbol.toUpperCase(),
            base_uri: normalizedInputs.baseUri,
          },
          invocationOptions,
        );

        toast.loading("Please sign the transaction in your wallet...", {
          id: toastId,
        });

        const sentTx = await tx.signAndSend({
          signTransaction: (xdr, opts) =>
            signTransaction(xdr, {
              ...opts,
              address,
              networkPassphrase: String(networkPassphrase),
            }),
        });

        const result = sentTx.result;
        let collectionAddress: string | undefined;

        if (typeof result?.isOk === "function") {
          if (!result.isOk()) {
            throw new Error(result.unwrapErr().message);
          }
          collectionAddress = result.unwrap();
        }

        const hash = sentTx.sendTransactionResponse?.hash;

        toast.success("NFT Collection Created!", {
          id: toastId,
          description: hash
            ? `Tx: ${hash.slice(0, 10)}...`
            : "Transaction submitted successfully",
          action:
            hash && typeof window !== "undefined"
              ? {
                  label: "View on Explorer",
                  onClick: () =>
                    window.open(
                      `https://stellar.expert/explorer/testnet/tx/${hash}`,
                      "_blank",
                    ),
                }
              : undefined,
        });

        return {
          sentTransaction: sentTx,
          hash,
          collectionAddress,
        };
      } catch (err) {
        console.error("NFT Creation Error:", err);
        const message =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(message);
        toast.error("Failed to create collection", {
          id: toastId,
          description: message,
        });
        return null;
      } finally {
        setLoading(false);
      }
    },
    [address, signTransaction, contractData],
  );

  return { createCollection, loading, error };
}
```

## File: src/hooks/useProfileType.ts

```typescript
import { use } from "react";
import {
  ProfileTypeContext,
  ProfileTypeContextType,
} from "../providers/ProfileTypeProvider";

export const useProfileType = (): ProfileTypeContextType => {
  const context = use(ProfileTypeContext);
  if (context === undefined) {
    throw new Error("useProfileType must be used within a ProfileTypeProvider");
  }
  return context;
};
```

## File: src/hooks/useWallet.ts

```typescript
import { use } from "react";
import { WalletContext } from "../providers/WalletProvider";

export const useWallet = () => {
  const ctx = use(WalletContext);
  if (!ctx) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return ctx;
};
```

## File: src/hooks/useWalletBalance.ts

```typescript
import { useCallback, useEffect, useState } from "react";
import { useWallet } from "./useWallet";
import { fetchBalance, type Balance } from "../util/wallet";

const formatter = new Intl.NumberFormat();

const checkFunding = (balances: Balance[]) =>
  balances.some(({ balance }) =>
    !Number.isNaN(Number(balance)) ? Number(balance) > 0 : false,
  );

type WalletBalance = {
  balances: Balance[];
  xlm: string;
  isFunded: boolean;
  isLoading: boolean;
  error: Error | null;
};

export const useWalletBalance = () => {
  const { address } = useWallet();
  const [state, setState] = useState<WalletBalance>({
    balances: [],
    xlm: "-",
    isFunded: false,
    isLoading: false,
    error: null,
  });

  const updateBalance = useCallback(async () => {
    if (!address) return;
    try {
      setState((prev) => ({ ...prev, isLoading: true }));
      const balances = await fetchBalance(address);
      const isFunded = checkFunding(balances);
      const native = balances.find(({ asset_type }) => asset_type === "native");
      setState({
        isLoading: false,
        balances,
        xlm: native?.balance ? formatter.format(Number(native.balance)) : "-",
        isFunded,
        error: null,
      });
    } catch (err) {
      if (err instanceof Error && err.message.match(/not found/i)) {
        setState({
          isLoading: false,
          balances: [],
          xlm: "-",
          isFunded: false,
          error: new Error("Error fetching balance. Is your wallet funded?"),
        });
      } else {
        console.error(err);
        setState({
          isLoading: false,
          balances: [],
          xlm: "-",
          isFunded: false,
          error: new Error("Unknown error fetching balance."),
        });
      }
    }
  }, [address]);

  useEffect(() => {
    void updateBalance();
  }, [updateBalance]);

  return {
    ...state,
    updateBalance,
  };
};
```

## File: src/lib/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## File: src/providers/ProfileTypeProvider.tsx

```typescript
import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import storage from "../util/storage";

export type ProfileType = "DJ" | "Fan";

interface ProfileTypeContextType {
  profileType: ProfileType;
  setProfileType: (type: ProfileType) => void;
}

const ProfileTypeContext = createContext<ProfileTypeContextType | undefined>(
  undefined,
);

export const ProfileTypeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profileType, setProfileTypeState] = useState<ProfileType>(() => {
    // Load from localStorage or default to "Fan"
    try {
      const stored = storage.getItem("profileType");
      if (typeof stored === "string" && (stored === "DJ" || stored === "Fan")) {
        return stored as ProfileType;
      }
      return "Fan";
    } catch {
      return "Fan";
    }
  });

  useEffect(() => {
    // Save to localStorage whenever profileType changes
    storage.setItem("profileType", profileType);
  }, [profileType]);

  const setProfileType = (type: ProfileType) => {
    setProfileTypeState(type);
  };

  const contextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
    }),
    [profileType],
  );

  return (
    <ProfileTypeContext value={contextValue}>{children}</ProfileTypeContext>
  );
};

export { ProfileTypeContext };
export type { ProfileTypeContextType };
```

## File: src/providers/WalletProvider.tsx

```typescript
import {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { wallet } from "../util/wallet";
import storage from "../util/storage";

export interface WalletContextType {
  address?: string;
  network?: string;
  networkPassphrase?: string;
  isPending: boolean;
  signTransaction?: typeof wallet.signTransaction;
}

const initialState = {
  address: undefined,
  network: undefined,
  networkPassphrase: undefined,
};

const POLL_INTERVAL = 1000;

export const WalletContext = // eslint-disable-line react-refresh/only-export-components
  createContext<WalletContextType>({ isPending: true });

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] =
    useState<Omit<WalletContextType, "isPending">>(initialState);
  const [isPending, startTransition] = useTransition();
  const popupLock = useRef(false);
  const signTransaction = wallet.signTransaction.bind(wallet);

  const nullify = () => {
    updateState(initialState);
    storage.setItem("walletId", "");
    storage.setItem("walletAddress", "");
    storage.setItem("walletNetwork", "");
    storage.setItem("networkPassphrase", "");
  };

  const updateState = (newState: Omit<WalletContextType, "isPending">) => {
    setState((prev: Omit<WalletContextType, "isPending">) => {
      if (
        prev.address !== newState.address ||
        prev.network !== newState.network ||
        prev.networkPassphrase !== newState.networkPassphrase
      ) {
        return newState;
      }
      return prev;
    });
  };

  const updateCurrentWalletState = async () => {
    // There is no way, with StellarWalletsKit, to check if the wallet is
    // installed/connected/authorized. We need to manage that on our side by
    // checking our storage item.
    const walletId = storage.getItem("walletId");
    const walletNetwork = storage.getItem("walletNetwork");
    const walletAddr = storage.getItem("walletAddress");
    const passphrase = storage.getItem("networkPassphrase");

    if (
      !state.address &&
      walletAddr !== null &&
      walletNetwork !== null &&
      passphrase !== null
    ) {
      updateState({
        address: walletAddr,
        network: walletNetwork,
        networkPassphrase: passphrase,
      });
    }

    if (!walletId) {
      nullify();
    } else {
      if (popupLock.current) return;
      // If our storage item is there, then we try to get the user's address &
      // network from their wallet. Note: `getAddress` MAY open their wallet
      // extension, depending on which wallet they select!
      try {
        popupLock.current = true;
        wallet.setWallet(walletId);
        if (walletId !== "freighter" && walletAddr !== null) return;
        const [a, n] = await Promise.all([
          wallet.getAddress(),
          wallet.getNetwork(),
        ]);

        if (!a.address) storage.setItem("walletId", "");
        if (
          a.address !== state.address ||
          n.network !== state.network ||
          n.networkPassphrase !== state.networkPassphrase
        ) {
          storage.setItem("walletAddress", a.address);
          updateState({ ...a, ...n });
        }
      } catch (e) {
        // If `getNetwork` or `getAddress` throw errors... sign the user out???
        nullify();
        // then log the error (instead of throwing) so we have visibility
        // into the error while working on Scaffold Stellar but we do not
        // crash the app process
        console.error(e);
      } finally {
        popupLock.current = false;
      }
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let isMounted = true;

    // Create recursive polling function to check wallet state continuously
    const pollWalletState = async () => {
      if (!isMounted) return;

      await updateCurrentWalletState();

      if (isMounted) {
        timer = setTimeout(() => void pollWalletState(), POLL_INTERVAL);
      }
    };

    // Get the wallet address when the component is mounted for the first time
    startTransition(async () => {
      await updateCurrentWalletState();
      // Start polling after initial state is loaded

      if (isMounted) {
        timer = setTimeout(() => void pollWalletState(), POLL_INTERVAL);
      }
    });

    // Clear the timeout and stop polling when the component unmounts
    return () => {
      isMounted = false;
      if (timer) clearTimeout(timer);
    };
  }, [state]); // eslint-disable-line react-hooks/exhaustive-deps -- it SHOULD only run once per component mount

  const contextValue = useMemo(
    () => ({
      ...state,
      isPending,
      signTransaction,
    }),
    [state, isPending, signTransaction],
  );

  return <WalletContext value={contextValue}>{children}</WalletContext>;
};
```

## File: src/services/artistTokens.ts

```typescript
// Artist Tokens API Service
import type { ListDistributedTokensResponse } from "../types/artistToken";

// Error response types
interface ErrorResponse {
  error?: string;
  message?: string;
  details?: string;
}

// Get API base URL from environment or use relative path
const getApiBaseUrl = (): { baseUrl: string; isSupabase: boolean } => {
  // Check for Supabase URL or custom API URL
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
  const apiUrl = import.meta.env.PUBLIC_API_BASE_URL as string | undefined;

  if (supabaseUrl) {
    // If using Supabase, construct edge function URLs
    const baseUrl = `${supabaseUrl}/functions/v1`;
    return { baseUrl, isSupabase: true };
  }

  if (apiUrl) {
    return { baseUrl: apiUrl, isSupabase: false };
  }

  // Default to relative API path (assumes API is on same domain)
  console.warn(
    "⚠️ No PUBLIC_SUPABASE_URL or PUBLIC_API_BASE_URL found. Using default /api path.",
  );
  return { baseUrl: "/api", isSupabase: false };
};

const { baseUrl: API_BASE_URL, isSupabase } = getApiBaseUrl();

/**
 * List all distributed artist tokens
 */
export async function listDistributedTokens(
  limit: number = 100,
  offset: number = 0,
): Promise<ListDistributedTokensResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/list-distributed-tokens`
    : `${API_BASE_URL}/tokens/distributed`;

  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  const response = await fetch(`${url}?${params.toString()}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    let errorData: ErrorResponse;
    try {
      errorData = (await response.json()) as ErrorResponse;
    } catch {
      const text = await response.text().catch(() => "Unknown error");
      errorData = { error: text || `HTTP error! status: ${response.status}` };
    }

    console.error(
      `List Distributed Tokens Error (${response.status}):`,
      errorData,
    );
    throw new Error(
      errorData.error ||
        errorData.message ||
        `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<ListDistributedTokensResponse>;
}
```

## File: src/services/buyToken.ts

```typescript
// Token Purchase Service - Buy tokens from Stellar DEX offers
import {
  Asset,
  Horizon,
  TransactionBuilder,
  Operation,
  BASE_FEE,
  Transaction,
} from "@stellar/stellar-sdk";
import { network, networkPassphrase } from "../contracts/util";

// Types for Horizon API responses
interface HorizonAsset {
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
}

interface HorizonOfferRecord {
  id: string | number;
  selling: HorizonAsset;
  buying: HorizonAsset;
  amount: string;
  price: string;
  price_r: {
    n: number;
    d: number;
  };
}

interface HorizonBalanceRecord {
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
  balance: string;
  limit?: string;
}

interface StellarErrorResponse {
  response?: {
    data?: {
      extras?: {
        result_codes?: {
          transaction?: string;
          operations?: string[];
        };
      };
    };
  };
}

// Get Horizon server
const getServer = (): Horizon.Server => {
  return new Horizon.Server(network.horizonUrl, {
    allowHttp: network.id === "custom" || network.id === "testnet",
  });
};

export interface TokenOffer {
  id: string;
  selling: {
    asset_type: string;
    asset_code?: string;
    asset_issuer?: string;
  };
  buying: {
    asset_type: string;
    asset_code?: string;
    asset_issuer?: string;
  };
  amount: string;
  price: string;
  price_r: {
    n: number;
    d: number;
  };
}

export interface BuyTokenParams {
  tokenCode: string;
  tokenIssuer: string;
  amountXlm: string; // Amount of XLM to spend
  buyerPublicKey: string;
}

export interface BuyTokenResponse {
  success: boolean;
  txHash: string;
  transactionUrl?: string;
  tokensReceived?: string;
  xlmSpent?: string;
}

/**
 * Get available offers for a token
 */
export async function getTokenOffers(
  tokenCode: string,
  tokenIssuer: string,
): Promise<TokenOffer[]> {
  try {
    const server = getServer();
    const asset = new Asset(tokenCode, tokenIssuer);

    // Query offers where the token is being sold (selling asset)
    // The Horizon API allows filtering by selling asset
    const offers = await server.offers().selling(asset).call();

    // Filter for offers buying XLM (native asset)
    const sellOffers = offers.records.filter((offer: HorizonOfferRecord) => {
      const buying = offer.buying;
      return buying.asset_type === "native";
    });

    return sellOffers.map((offer: HorizonOfferRecord) => ({
      id: offer.id.toString(),
      selling: {
        asset_type: offer.selling.asset_type,
        asset_code: offer.selling.asset_code,
        asset_issuer: offer.selling.asset_issuer,
      },
      buying: {
        asset_type: offer.buying.asset_type,
        asset_code: offer.buying.asset_code,
        asset_issuer: offer.buying.asset_issuer,
      },
      amount: offer.amount,
      price: offer.price,
      price_r: offer.price_r,
    }));
  } catch (error) {
    console.error("Error fetching token offers:", error);
    throw new Error(
      `Failed to fetch offers: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Check if user has trustline for the token
 */
export async function hasTrustline(
  publicKey: string,
  tokenCode: string,
  tokenIssuer: string,
): Promise<boolean> {
  try {
    const server = getServer();
    const account = await server.loadAccount(publicKey);

    const balance = account.balances.find((b: HorizonBalanceRecord) => {
      if (b.asset_type === "native") return false;
      return b.asset_code === tokenCode && b.asset_issuer === tokenIssuer;
    });

    return !!balance;
  } catch (error) {
    console.error("Error checking trustline:", error);
    return false;
  }
}

/**
 * Create trustline XDR for user to sign
 */
export async function createTrustlineXDR(
  publicKey: string,
  tokenCode: string,
  tokenIssuer: string,
  limit: string = "922337203685.4775807", // Max limit
): Promise<string> {
  try {
    const server = getServer();
    const account = await server.loadAccount(publicKey);
    const asset = new Asset(tokenCode, tokenIssuer);

    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: String(networkPassphrase),
    })
      .addOperation(
        Operation.changeTrust({
          asset: asset,
          limit: limit,
        }),
      )
      .setTimeout(180)
      .build();

    return transaction.toXDR();
  } catch (error) {
    console.error("Error creating trustline XDR:", error);
    throw new Error(
      `Failed to create trustline: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Find best matching sell offer for immediate execution
 * Sell offers are where someone is selling the token (buying XLM)
 */
export async function findBestSellOffer(
  tokenCode: string,
  tokenIssuer: string,
  maxPrice: string = "1",
): Promise<TokenOffer | null> {
  try {
    const server = getServer();
    const asset = new Asset(tokenCode, tokenIssuer);
    const nativeAsset = Asset.native();

    // Query offers where the token is being sold (selling asset) for XLM (buying asset)
    const offers = await server
      .offers()
      .selling(asset)
      .buying(nativeAsset)
      .call();

    if (offers.records.length === 0) {
      console.log("No sell offers found for token");
      return null;
    }

    console.log(
      `Found ${offers.records.length} sell offers (selling token for XLM)`,
    );

    // Find offers at or better than our max price (1:1)
    // Price in Stellar is selling/buying, so for sell offers: price = amount of buying asset per selling asset
    // For sell offers: selling token, buying XLM, price = XLM per token
    // We want price <= 1 (1 XLM per token or better)
    const matchingOffers = offers.records.filter(
      (offer: HorizonOfferRecord) => {
        const offerPrice = parseFloat(offer.price);
        const isMatch = offerPrice <= parseFloat(maxPrice);
        console.log(
          `Offer ${offer.id}: price=${offerPrice}, amount=${offer.amount}, matches=${isMatch}`,
        );
        return isMatch;
      },
    );

    if (matchingOffers.length === 0) {
      console.log("No matching sell offers at price <=", maxPrice);
      return null;
    }

    // Sort by price (best first - lower price is better) and return the best offer
    matchingOffers.sort(
      (a: HorizonOfferRecord, b: HorizonOfferRecord) =>
        parseFloat(a.price) - parseFloat(b.price),
    );
    const bestOffer = matchingOffers[0];

    console.log(
      `Best offer: ID=${bestOffer.id}, price=${bestOffer.price}, amount=${bestOffer.amount}`,
    );

    return {
      id: bestOffer.id.toString(),
      selling: {
        asset_type: bestOffer.selling.asset_type,
        asset_code: bestOffer.selling.asset_code,
        asset_issuer: bestOffer.selling.asset_issuer,
      },
      buying: {
        asset_type: bestOffer.buying.asset_type,
        asset_code: bestOffer.buying.asset_code,
        asset_issuer: bestOffer.buying.asset_issuer,
      },
      amount: bestOffer.amount,
      price: bestOffer.price,
      price_r: bestOffer.price_r,
    };
  } catch (error) {
    console.error("Error finding sell offer:", error);
    return null;
  }
}

/**
 * Create path payment XDR for immediate execution
 * This will execute immediately if there's a matching offer
 */
export async function createPathPaymentXDR(
  params: BuyTokenParams,
): Promise<string> {
  try {
    const server = getServer();
    const account = await server.loadAccount(params.buyerPublicKey);
    const tokenAsset = new Asset(params.tokenCode, params.tokenIssuer);
    const xlmAsset = Asset.native();

    const xlmAmount = parseFloat(params.amountXlm);
    // At 1:1 rate, we get the same amount in tokens
    const minTokenAmount = (xlmAmount * 0.99).toFixed(7); // 1% slippage tolerance

    // Use pathPaymentStrictSend to immediately execute the trade
    // This will find the best path through the DEX and execute immediately
    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: String(networkPassphrase),
    })
      .addOperation(
        Operation.pathPaymentStrictSend({
          sendAsset: xlmAsset, // We're sending XLM
          sendAmount: xlmAmount.toFixed(7), // Amount of XLM to send
          destination: params.buyerPublicKey, // We receive tokens to our own account
          destAsset: tokenAsset, // We want to receive tokens
          destMin: minTokenAmount, // Minimum tokens we'll accept (with slippage)
        }),
      )
      .setTimeout(180)
      .build();

    return transaction.toXDR();
  } catch (error) {
    console.error("Error creating path payment XDR:", error);
    throw new Error(
      `Failed to create path payment: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Create buy offer XDR
 * This creates a buy offer that will match against existing sell offers on the DEX
 * If immediate execution is preferred, use createPathPaymentXDR instead
 */
export async function createBuyOfferXDR(
  params: BuyTokenParams,
): Promise<string> {
  try {
    const server = getServer();
    const account = await server.loadAccount(params.buyerPublicKey);
    const tokenAsset = new Asset(params.tokenCode, params.tokenIssuer);
    const xlmAsset = Asset.native();

    // Calculate how many tokens we can buy with the XLM amount
    // Price is 1:1 (1 token = 1 XLM), so tokens = XLM amount
    const tokenAmount = parseFloat(params.amountXlm);

    // Create a buy offer
    // manageBuyOffer: buying = asset we want to receive, selling = asset we're spending
    // Price: 1 token = 1 XLM (so price is "1" meaning 1 XLM per token)
    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: String(networkPassphrase),
    })
      .addOperation(
        Operation.manageBuyOffer({
          buying: tokenAsset, // We're buying tokens (what we want to receive)
          selling: xlmAsset, // We're selling XLM (what we're spending)
          buyAmount: tokenAmount.toFixed(7), // Amount of tokens we want to buy
          price: "1", // Price: 1 XLM = 1 token (price of buying asset in terms of selling asset)
          offerId: 0, // 0 = create new offer
        }),
      )
      .setTimeout(180)
      .build();

    return transaction.toXDR();
  } catch (error) {
    console.error("Error creating buy offer XDR:", error);
    throw new Error(
      `Failed to create buy offer: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Submit signed transaction to Stellar network
 */
export async function submitSignedTransaction(
  signedXDR: string,
): Promise<{ hash: string }> {
  try {
    const server = getServer();
    // Decode XDR using Transaction class
    const transaction = new Transaction(signedXDR, String(networkPassphrase));
    console.log("Submitting transaction to Stellar network...");
    console.log("Transaction source account:", transaction.source);
    console.log("Transaction operations:", transaction.operations.length);
    const result = await server.submitTransaction(transaction);
    console.log("✅ Transaction submitted successfully");
    console.log("Transaction hash:", result.hash);
    return { hash: result.hash };
  } catch (error: unknown) {
    console.error("❌ Error submitting transaction:", error);
    console.error("Error details:", error);
    if (error && typeof error === "object" && "response" in error) {
      const stellarError = error as StellarErrorResponse;
      if (stellarError.response?.data) {
        console.error("Stellar error response:", stellarError.response.data);
        if (stellarError.response.data.extras?.result_codes) {
          console.error(
            "Transaction result codes:",
            stellarError.response.data.extras.result_codes,
          );
        }
      }
    }
    throw new Error(
      `Failed to submit transaction: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Get Stellar Explorer URL for transaction
 */
export function getTransactionUrl(txHash: string): string {
  const networkName =
    network.id === "testnet"
      ? "testnet"
      : network.id === "futurenet"
        ? "futurenet"
        : "public";
  return `https://stellar.expert/explorer/${networkName}/tx/${txHash}`;
}

/**
 * Get Stellar Explorer URL for asset
 */
export function getAssetUrl(tokenCode: string, tokenIssuer: string): string {
  const networkName =
    network.id === "testnet"
      ? "testnet"
      : network.id === "futurenet"
        ? "futurenet"
        : "public";
  return `https://stellar.expert/explorer/${networkName}/asset/${tokenCode}-${tokenIssuer}`;
}
```

## File: src/services/tokenCreation.ts

```typescript
// Token Creation API Service
import type {
  TokenCreationParams,
  PrepareTokenResponse,
  TokenStatusResponse,
  EmissionXDRResponse,
  SubmitSignedResponse,
  DistributionResponse,
} from "../types/tokenCreation";

// Error response types
interface ErrorResponse {
  error?: string;
  message?: string;
  requiresArtistSignature?: boolean;
  trustlineXDR?: string;
  requiresTrustline?: boolean;
  details?: {
    operationCodes?: string[];
    transactionCode?: string;
  };
  stellarError?: unknown;
}

// Get API base URL from environment or use relative path
const getApiBaseUrl = (): { baseUrl: string; isSupabase: boolean } => {
  // Check for Supabase URL or custom API URL
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
  const apiUrl = import.meta.env.PUBLIC_API_BASE_URL as string | undefined;

  // Debug logging (remove in production)
  if (import.meta.env.DEV) {
    console.log("Environment variables:", {
      PUBLIC_SUPABASE_URL: supabaseUrl ? "✓ Set" : "✗ Not set",
      PUBLIC_API_BASE_URL: apiUrl ? "✓ Set" : "✗ Not set",
    });
  }

  if (supabaseUrl) {
    // If using Supabase, construct edge function URLs
    const baseUrl = `${supabaseUrl}/functions/v1`;
    if (import.meta.env.DEV) {
      console.log("Using Supabase Edge Functions:", baseUrl);
    }
    return { baseUrl, isSupabase: true };
  }

  if (apiUrl) {
    if (import.meta.env.DEV) {
      console.log("Using custom API URL:", apiUrl);
    }
    return { baseUrl: apiUrl, isSupabase: false };
  }

  // Default to relative API path (assumes API is on same domain)
  console.warn(
    "⚠️ No PUBLIC_SUPABASE_URL or PUBLIC_API_BASE_URL found. Using default /api path. This will likely fail!",
  );
  console.warn("Please set PUBLIC_SUPABASE_URL in your .env file");
  return { baseUrl: "/api", isSupabase: false };
};

const { baseUrl: API_BASE_URL, isSupabase } = getApiBaseUrl();

/**
 * Prepare token creation - creates distribution account
 */
export async function prepareToken(
  params: TokenCreationParams,
): Promise<PrepareTokenResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/prepare-token`
    : `${API_BASE_URL}/tokens/prepare`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  console.log("Preparing token with params:", params);
  console.log("Request URL:", url);

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    let errorData: ErrorResponse;
    try {
      errorData = (await response.json()) as ErrorResponse;
    } catch {
      const text = await response.text().catch(() => "Unknown error");
      errorData = { error: text || `HTTP error! status: ${response.status}` };
    }

    console.error(`Distribution Error (${response.status}):`, errorData);

    // If trustline is required, throw a special error with XDR
    if (errorData.requiresArtistSignature && errorData.trustlineXDR) {
      const error = new Error(
        errorData.message || errorData.error || "Trustline required",
      );
      (
        error as Error & { trustlineXDR?: string; requiresTrustline?: boolean }
      ).trustlineXDR = errorData.trustlineXDR;
      (
        error as Error & { trustlineXDR?: string; requiresTrustline?: boolean }
      ).requiresTrustline = true;
      throw error;
    }

    throw new Error(
      errorData.error ||
        errorData.message ||
        `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<PrepareTokenResponse>;
}

/**
 * Check token status
 */
export async function checkTokenStatus(
  tokenCode: string,
  artistPublicKey: string,
): Promise<TokenStatusResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/status`
    : `${API_BASE_URL}/tokens/status`;

  const params = new URLSearchParams({
    code: tokenCode,
    issuer: artistPublicKey,
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  const response = await fetch(`${url}?${params.toString()}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    const error = (await response
      .json()
      .catch(() => ({ error: "Unknown error" }))) as ErrorResponse;
    throw new Error(
      error.error || error.message || `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<TokenStatusResponse>;
}

/**
 * Get emission XDR for signing
 */
export async function getEmissionXDR(
  artistPublicKey: string,
  tokenCode: string,
  totalSupply: string,
): Promise<EmissionXDRResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/emission-xdr`
    : `${API_BASE_URL}/tokens/emission-xdr`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      artistPublicKey,
      tokenCode,
      totalSupply,
    }),
  });

  if (!response.ok) {
    const error = (await response
      .json()
      .catch(() => ({ error: "Unknown error" }))) as ErrorResponse;
    throw new Error(
      error.error || error.message || `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<EmissionXDRResponse>;
}

/**
 * Submit signed transaction
 */
export async function submitSignedTransaction(
  signedXDR: string,
  tokenCode: string,
  artistPublicKey: string,
): Promise<SubmitSignedResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/submit-signed`
    : `${API_BASE_URL}/tokens/submit-signed`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  console.log("Submitting signed transaction for token:", tokenCode);

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      signedXDR,
      tokenCode,
      artistPublicKey,
    }),
  });

  if (!response.ok) {
    let errorData: ErrorResponse;
    try {
      errorData = (await response.json()) as ErrorResponse;
    } catch {
      const text = await response.text().catch(() => "Unknown error");
      errorData = { error: text || `HTTP error! status: ${response.status}` };
    }

    console.error(`Submit Signed Error (${response.status}):`, errorData);

    // Extract detailed error message
    let errorMessage =
      errorData.error ||
      errorData.message ||
      `HTTP error! status: ${response.status}`;

    // If there are Stellar error details, include them
    if (errorData.details) {
      if (
        errorData.details.operationCodes &&
        errorData.details.operationCodes.length > 0
      ) {
        errorMessage += ` Operation errors: ${errorData.details.operationCodes.join(", ")}`;
      }
      if (errorData.details.transactionCode) {
        errorMessage += ` Transaction: ${errorData.details.transactionCode}`;
      }
    }

    if (errorData.stellarError) {
      console.error("Full Stellar error:", errorData.stellarError);
    }

    throw new Error(errorMessage);
  }

  return response.json() as Promise<SubmitSignedResponse>;
}

/**
 * Execute token distribution
 */
export async function executeDistribution(
  artistPublicKey: string,
  tokenCode: string,
): Promise<DistributionResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/distribute`
    : `${API_BASE_URL}/tokens/distribute`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      artistPublicKey,
      tokenCode,
    }),
  });

  if (!response.ok) {
    const error = (await response
      .json()
      .catch(() => ({ error: "Unknown error" }))) as ErrorResponse;
    throw new Error(
      error.error || error.message || `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<DistributionResponse>;
}
```

## File: src/types/artistToken.ts

```typescript
// Artist Token Types

export interface TokenMetadata {
  id: string;
  token_id: string;
  website_url?: string;
  twitter_handle?: string;
  instagram_handle?: string;
  discord_url?: string;
  telegram_url?: string;
  category?: string;
  tags?: string[];
  total_holders?: number;
  total_transactions?: number;
  market_cap_xlm?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ArtistToken {
  id: string;
  artist_public_key: string;
  artist_email?: string;
  artist_name?: string;
  token_code: string;
  token_name: string;
  total_supply: string;
  description?: string;
  image_url?: string;
  platform_fee_bps: number;
  artist_amount?: string;
  platform_amount?: string;
  status: string;
  trustline_tx_hash?: string;
  emission_tx_hash?: string;
  distribution_tx_hash?: string;
  created_at: string;
  distributed_at?: string;
  updated_at?: string;
  metadata?: TokenMetadata | null;
}

export interface ListDistributedTokensResponse {
  tokens: ArtistToken[];
  count: number;
  limit: number;
  offset: number;
}

// Frontend-friendly interface for displaying tokens
export interface TokenDisplay {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  genres: string[];
  isFeatured: boolean;
  tokenSymbol: string;
  tokenIssuer: string;
  description?: string;
  imageUrl?: string;
  totalSupply?: string;
  distributedAt?: string;
}
```

## File: src/util/contract.ts

```typescript
/**
 * Shortens a contract ID string by keeping the first `prefixLength` characters,
 * an ellipsis, then the last `suffixLength` characters.
 * If the ID is shorter than or equal to `prefixLength + suffixLength`, returns it unchanged.
 */
export function shortenContractId(
  id: string,
  prefixLength = 5,
  suffixLength = 4,
): string {
  if (id.length <= prefixLength + suffixLength) {
    return id;
  }
  const start = id.slice(0, prefixLength);
  const end = id.slice(-suffixLength);
  return `${start}…${end}`;
}
```

## File: src/util/friendbot.ts

```typescript
import { stellarNetwork } from "../contracts/util";

// Utility to get the correct Friendbot URL based on environment
export function getFriendbotUrl(address: string) {
  switch (stellarNetwork) {
    case "LOCAL":
      // Use proxy in development for local
      return `/friendbot?addr=${address}`;
    case "FUTURENET":
      return `https://friendbot-futurenet.stellar.org/?addr=${address}`;
    case "TESTNET":
      return `https://friendbot.stellar.org/?addr=${address}`;
    default:
      throw new Error(
        `Unknown or unsupported PUBLIC_STELLAR_NETWORK for friendbot: ${stellarNetwork}`,
      );
  }
}
```

## File: src/util/wallet.ts

```typescript
import storage from "./storage";
import {
  ISupportedWallet,
  StellarWalletsKit,
  WalletNetwork,
  sep43Modules,
} from "@creit.tech/stellar-wallets-kit";
import { Horizon } from "@stellar/stellar-sdk";
import { networkPassphrase, stellarNetwork } from "../contracts/util";

const kit: StellarWalletsKit = new StellarWalletsKit({
  network: networkPassphrase as WalletNetwork,
  modules: sep43Modules(),
});

export const connectWallet = async () => {
  await kit.openModal({
    modalTitle: "Connect to your wallet",
    onWalletSelected: (option: ISupportedWallet) => {
      const selectedId = option.id;
      kit.setWallet(selectedId);

      // Now open selected wallet's login flow by calling `getAddress` --
      // Yes, it's strange that a getter has a side effect of opening a modal
      void kit.getAddress().then((address) => {
        // Once `getAddress` returns successfully, we know they actually
        // connected the selected wallet, and we set our localStorage
        if (address.address) {
          storage.setItem("walletId", selectedId);
          storage.setItem("walletAddress", address.address);
        } else {
          storage.setItem("walletId", "");
          storage.setItem("walletAddress", "");
        }
      });
      if (selectedId == "freighter" || selectedId == "hot-wallet") {
        void kit.getNetwork().then((network) => {
          if (network.network && network.networkPassphrase) {
            storage.setItem("walletNetwork", network.network);
            storage.setItem("networkPassphrase", network.networkPassphrase);
          } else {
            storage.setItem("walletNetwork", "");
            storage.setItem("networkPassphrase", "");
          }
        });
      }
    },
  });
};

export const disconnectWallet = async () => {
  await kit.disconnect();
  storage.removeItem("walletId");
};

function getHorizonHost(mode: string) {
  switch (mode) {
    case "LOCAL":
      return "http://localhost:8000";
    case "FUTURENET":
      return "https://horizon-futurenet.stellar.org";
    case "TESTNET":
      return "https://horizon-testnet.stellar.org";
    case "PUBLIC":
      return "https://horizon.stellar.org";
    default:
      throw new Error(`Unknown Stellar network: ${mode}`);
  }
}

export const fetchBalance = async (address: string) => {
  const horizon = new Horizon.Server(getHorizonHost(stellarNetwork), {
    allowHttp: stellarNetwork === "LOCAL",
  });

  const { balances } = await horizon.accounts().accountId(address).call();
  return balances;
};

export type Balance = Awaited<ReturnType<typeof fetchBalance>>[number];

export const wallet = kit;
```

## File: src/vite-env.d.ts

```typescript
/// <reference types="vite/client" />
```

## File: supabase/functions/\_shared/utils.ts

```typescript
// Shared utilities for Supabase Edge Functions
// Import Stellar SDK - using jsdelivr with +esm suffix for automatic ESM conversion
// @ts-ignore - Deno runtime, type checking happens at runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";

// Stellar base fee (100 stroops = 0.00001 XLM)
// This is the minimum fee per operation in Stellar
export const BASE_FEE = "100";

// Export Stellar SDK for use in other functions
export const Stellar = StellarSdk;

// Helper function to get Stellar SDK classes with multiple fallback patterns
export function getStellarClass(className: string): any {
  // Try direct access
  if ((StellarSdk as any)[className]) {
    return (StellarSdk as any)[className];
  }

  // Try default export
  if ((StellarSdk as any).default?.[className]) {
    return (StellarSdk as any).default[className];
  }

  // Try default as function
  if (typeof (StellarSdk as any).default === "function") {
    const sdk = (StellarSdk as any).default();
    if (sdk?.[className]) {
      return sdk[className];
    }
  }

  // Try nested Horizon namespace (for Server)
  if (className === "Server" || className === "HorizonServer") {
    if ((StellarSdk as any).Horizon?.Server) {
      return (StellarSdk as any).Horizon.Server;
    }
    if ((StellarSdk as any).default?.Horizon?.Server) {
      return (StellarSdk as any).default.Horizon.Server;
    }
  }

  // Log available keys for debugging
  const keys = Object.keys(StellarSdk);
  console.error(`Class ${className} not found. Available keys:`, keys);

  return null;
}

// CORS headers
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Max-Age": "86400", // 24 hours
};

// Handle CORS preflight requests
export function handleCORS(req: Request): Response | null {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  return null;
}

// Stellar network passphrases (official passphrases)
const NETWORK_PASSPHRASES = {
  TESTNET: "Test SDF Network ; September 2015",
  FUTURENET: "Test SDF Future Network ; October 2022",
  PUBLIC: "Public Global Stellar Network ; September 2015",
} as const;

// Get Stellar network configuration
export function getStellarNetwork() {
  const network = Deno.env.get("STELLAR_NETWORK") || "PUBLIC";
  const horizonUrl =
    Deno.env.get("HORIZON_URL") ||
    (network === "TESTNET"
      ? "https://horizon-testnet.stellar.org"
      : network === "FUTURENET"
        ? "https://horizon-futurenet.stellar.org"
        : "https://horizon.stellar.org");

  // Use explicit passphrase strings instead of StellarSdk.Networks
  const networkPassphrase =
    network === "TESTNET"
      ? NETWORK_PASSPHRASES.TESTNET
      : network === "FUTURENET"
        ? NETWORK_PASSPHRASES.FUTURENET
        : NETWORK_PASSPHRASES.PUBLIC;

  // Access Horizon.Server using helper function
  const Server = getStellarClass("Server") || getStellarClass("HorizonServer");

  if (!Server) {
    // Log available keys for debugging
    const keys = Object.keys(StellarSdk);
    const defaultKeys = (StellarSdk as any).default
      ? Object.keys((StellarSdk as any).default)
      : [];
    console.error("Available StellarSdk keys:", keys);
    if (defaultKeys.length > 0) {
      console.error("Available StellarSdk.default keys:", defaultKeys);
    }
    throw new Error(
      `Horizon.Server not found in Stellar SDK. Available keys: ${keys.join(", ")}`,
    );
  }

  return {
    network,
    horizonUrl,
    networkPassphrase,
    server: new Server(horizonUrl),
  };
}

// Encryption utilities
export async function encryptSecret(secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(secret);
  const key = await getEncryptionKey();

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encryptedData = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    data,
  );

  const encrypted = new Uint8Array(iv.length + encryptedData.byteLength);
  encrypted.set(iv);
  encrypted.set(new Uint8Array(encryptedData), iv.length);

  return btoa(String.fromCharCode(...encrypted));
}

export async function decryptSecret(encryptedSecret: string): Promise<string> {
  try {
    if (!encryptedSecret || typeof encryptedSecret !== "string") {
      throw new Error("Encrypted secret must be a non-empty string");
    }

    const key = await getEncryptionKey();

    // Decode base64
    let encryptedBytes: Uint8Array;
    try {
      const base64Decoded = atob(encryptedSecret);
      encryptedBytes = new Uint8Array(base64Decoded.length);
      for (let i = 0; i < base64Decoded.length; i++) {
        encryptedBytes[i] = base64Decoded.charCodeAt(i);
      }
    } catch (base64Error) {
      throw new Error(
        `Invalid base64 encoding: ${base64Error instanceof Error ? base64Error.message : String(base64Error)}`,
      );
    }

    if (encryptedBytes.length < 12) {
      throw new Error(
        `Encrypted data too short: ${encryptedBytes.length} bytes (expected at least 12 for IV)`,
      );
    }

    const iv = encryptedBytes.slice(0, 12);
    const data = encryptedBytes.slice(12);

    if (data.length === 0) {
      throw new Error("Encrypted data is empty after extracting IV");
    }

    // Decrypt - convert Uint8Array to ArrayBuffer for crypto.subtle
    const dataBuffer = data.buffer.slice(
      data.byteOffset,
      data.byteOffset + data.byteLength,
    );
    const ivBuffer = iv.buffer.slice(
      iv.byteOffset,
      iv.byteOffset + iv.byteLength,
    );

    let decrypted: ArrayBuffer;
    try {
      decrypted = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: ivBuffer },
        key,
        dataBuffer,
      );
    } catch (decryptError) {
      throw new Error(
        `Decryption failed: ${decryptError instanceof Error ? decryptError.message : String(decryptError)}. This may indicate an ENCRYPTION_KEY mismatch.`,
      );
    }

    // Decode to string
    const decoder = new TextDecoder("utf-8", { fatal: true });
    let secret: string;
    try {
      secret = decoder.decode(decrypted);
    } catch (decodeError) {
      throw new Error(
        `Failed to decode decrypted data: ${decodeError instanceof Error ? decodeError.message : String(decodeError)}`,
      );
    }

    // Clean up the secret: remove null bytes, trim whitespace
    secret = secret.replace(/\0/g, "").trim();

    // Validate Stellar secret key format
    if (!secret.startsWith("S")) {
      throw new Error(
        `Decrypted secret does not start with 'S'. This may indicate corruption or wrong encryption key. Secret starts with: ${secret.substring(0, 5)}`,
      );
    }

    if (secret.length !== 56) {
      throw new Error(
        `Decrypted secret has invalid length: ${secret.length} (expected 56). This may indicate corruption or wrong encryption key.`,
      );
    }

    return secret;
  } catch (error) {
    console.error("decryptSecret error:", error);
    throw error;
  }
}

async function getEncryptionKey() {
  const keyMaterial = Deno.env.get("ENCRYPTION_KEY");
  if (!keyMaterial) {
    throw new Error("ENCRYPTION_KEY environment variable is required");
  }
  const encoder = new TextEncoder();
  const keyData = encoder.encode(keyMaterial);

  // For AES-GCM, we need a 256-bit key (32 bytes)
  // If the keyMaterial is shorter, we'll need to derive a key
  // For simplicity, we'll assume it's already 32 bytes or use a hash
  let finalKeyData = keyData;
  if (keyData.length !== 32) {
    // Hash the key material to get exactly 32 bytes
    const hashBuffer = await crypto.subtle.digest("SHA-256", keyData);
    finalKeyData = new Uint8Array(hashBuffer);
  }

  return await crypto.subtle.importKey(
    "raw",
    finalKeyData,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
}

// Get Friendbot URL based on network (matching frontend pattern)
function getFriendbotUrl(network: string, address: string): string | null {
  switch (network) {
    case "LOCAL":
      // For local, check if there's a friendbot URL set
      const localFriendbot = Deno.env.get("LOCAL_FRIENDBOT_URL");
      return localFriendbot ? `${localFriendbot}?addr=${address}` : null;
    case "FUTURENET":
      return `https://friendbot-futurenet.stellar.org/?addr=${address}`;
    case "TESTNET":
      return `https://friendbot.stellar.org/?addr=${address}`;
    case "PUBLIC":
    default:
      // Friendbot is not available for public network
      return null;
  }
}

// Fund distribution account
export async function fundDistributionAccount(
  publicKey: string,
  server: any, // Horizon.Server type
  networkPassphrase: string,
  network: string,
): Promise<void> {
  const fundingSecret = Deno.env.get("PLATFORM_FUNDING_SECRET_KEY");

  // If no funding secret, try friendbot for test networks
  if (!fundingSecret) {
    const friendbotUrl = getFriendbotUrl(network, publicKey);

    if (friendbotUrl) {
      console.log(
        `Funding account ${publicKey} via Friendbot: ${friendbotUrl}`,
      );
      try {
        const response = await fetch(friendbotUrl);
        if (!response.ok) {
          const text = await response.text();
          console.error(`Friendbot funding failed: ${response.status} ${text}`);
          throw new Error(
            `Friendbot funding failed: ${response.status} ${text}`,
          );
        }
        const result = await response.json();
        console.log(`Friendbot funding response:`, result);

        // Wait for the account to be created on the network
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Verify the account was created with retries
        let retries = 5;
        let accountVerified = false;
        while (retries > 0) {
          try {
            await server.loadAccount(publicKey);
            accountVerified = true;
            console.log(
              `Successfully funded and verified account via Friendbot: ${publicKey}`,
            );
            break;
          } catch (verifyError) {
            retries--;
            if (retries > 0) {
              console.log(
                `Account not yet available, retrying in 2 seconds... (${retries} retries left)`,
              );
              await new Promise((resolve) => setTimeout(resolve, 2000));
            } else {
              console.error(
                `Account verification failed after Friendbot funding:`,
                verifyError,
              );
              throw new Error(
                `Account verification failed after Friendbot funding: ${verifyError}`,
              );
            }
          }
        }

        if (accountVerified) {
          return;
        }
      } catch (error) {
        console.error(`Friendbot funding error:`, error);
        if (network === "PUBLIC") {
          throw new Error(
            "PLATFORM_FUNDING_SECRET_KEY is required for PUBLIC network",
          );
        }
        // For test networks, rethrow the error so caller can handle it
        throw error;
      }
    } else if (network === "PUBLIC") {
      throw new Error(
        "PLATFORM_FUNDING_SECRET_KEY is required for PUBLIC network",
      );
    } else {
      throw new Error(
        "No funding method available: PLATFORM_FUNDING_SECRET_KEY not set and Friendbot not available for this network",
      );
    }
  }

  // Use platform funding key if available
  try {
    const Keypair = getStellarClass("Keypair");
    const TransactionBuilder = getStellarClass("TransactionBuilder");
    const Operation = getStellarClass("Operation");

    if (!Keypair || !TransactionBuilder || !Operation) {
      throw new Error("Required Stellar SDK classes not found");
    }

    const fundingKeypair = Keypair.fromSecret(fundingSecret);
    const fundingAccount = await server.loadAccount(fundingKeypair.publicKey());

    const transaction = new TransactionBuilder(fundingAccount, {
      fee: BASE_FEE,
      networkPassphrase: networkPassphrase,
    })
      .addOperation(
        Operation.createAccount({
          destination: publicKey,
          startingBalance: "2.0", // Minimum balance for Stellar account
        }),
      )
      .setTimeout(180)
      .build();

    transaction.sign(fundingKeypair);
    await server.submitTransaction(transaction);
    console.log(`Successfully funded account using platform key: ${publicKey}`);

    // Wait for the account to be available
    await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (error) {
    console.error(`Error funding account ${publicKey}:`, error);
    throw error;
  }
}

// Create artist trustline
export async function createArtistTrustline(
  artistPublicKey: string,
  asset: any, // Asset type
  limit: string,
  server: any, // Horizon.Server type
  networkPassphrase: string,
): Promise<string> {
  try {
    const TransactionBuilder = getStellarClass("TransactionBuilder");
    const Operation = getStellarClass("Operation");

    if (!TransactionBuilder || !Operation) {
      throw new Error("Required Stellar SDK classes not found");
    }

    const artistAccount = await server.loadAccount(artistPublicKey);

    const transaction = new TransactionBuilder(artistAccount, {
      fee: BASE_FEE,
      networkPassphrase: networkPassphrase,
    })
      .addOperation(
        Operation.changeTrust({
          asset: asset,
          limit: limit,
        }),
      )
      .setTimeout(180)
      .build();

    // Note: This requires the artist to sign the transaction
    // For automatic creation, you would need the artist's secret key
    // In production, you should request the artist to create the trustline
    const xdr = transaction.toXDR();
    console.log("Trustline XDR generated for artist:", artistPublicKey);
    return xdr;
  } catch (error) {
    console.error("Error creating artist trustline:", error);
    throw error;
  }
}
```

## File: supabase/functions/emission-xdr/index.ts

```typescript
// Emission XDR - Generate unsigned XDR for token emission
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  BASE_FEE,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const { server, networkPassphrase } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const { artistPublicKey, tokenCode, totalSupply } = await req.json();

    if (!artistPublicKey || !tokenCode || !totalSupply) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields: artistPublicKey, tokenCode, totalSupply",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Get token data from database
    const { data: tokenData, error } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCode.toUpperCase())
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (error || !tokenData) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Allow emission if trustline is created OR if status is 'created' (we'll create trustline in this transaction)
    if (
      tokenData.status !== "trustline_created" &&
      tokenData.status !== "created"
    ) {
      return new Response(
        JSON.stringify({
          error: "Token is not ready for emission.",
          currentStatus: tokenData.status,
          message: 'Token must be in "created" or "trustline_created" status',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Get Stellar SDK classes
    const Asset = getStellarClass("Asset");
    const TransactionBuilder = getStellarClass("TransactionBuilder");
    const Operation = getStellarClass("Operation");

    if (!Asset || !TransactionBuilder || !Operation) {
      throw new Error("Required Stellar SDK classes not found");
    }

    // Create asset
    const asset = new Asset(tokenCode.toUpperCase(), artistPublicKey);

    // Load artist account
    const artistAccount = await server.loadAccount(artistPublicKey);

    // IMPORTANT: The artist is the ISSUER of the token
    // In Stellar, the issuer account does NOT need a trustline for its own asset
    // The issuer can directly send/pay tokens without a trustline
    // Only the RECIPIENT (distribution account) needs a trustline (already created in prepare-token)

    // Check artist account balance
    const nativeBalance = artistAccount.balances.find(
      (b: any) => b.asset_type === "native",
    );
    const balance = nativeBalance ? parseFloat(nativeBalance.balance) : 0;
    console.log(`Artist account balance: ${balance} XLM`);

    // Calculate required fees: base fee per operation
    // Only 1 operation needed: payment (issuer doesn't need trustline)
    const operationsCount = 1; // payment only
    const transactionFee = (parseFloat(BASE_FEE) * operationsCount) / 10000000; // Convert stroops to XLM
    const minRequiredBalance = transactionFee + 1; // 1 XLM buffer for minimum reserve

    console.log(
      `Operations: ${operationsCount} (payment only - issuer doesn't need trustline)`,
    );
    console.log(`Transaction fee: ${transactionFee} XLM`);
    console.log(
      `Minimum required balance: ${minRequiredBalance} XLM, Current balance: ${balance} XLM`,
    );

    if (balance < minRequiredBalance) {
      return new Response(
        JSON.stringify({
          error: "Insufficient balance",
          message: `Artist account has insufficient XLM balance. Required: ~${minRequiredBalance.toFixed(2)} XLM for transaction fees, Current: ${balance.toFixed(2)} XLM. Please fund the artist account with at least ${minRequiredBalance.toFixed(2)} XLM.`,
          currentBalance: balance,
          requiredBalance: minRequiredBalance,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create unsigned transaction with payment operation only
    // The artist (issuer) can send tokens directly without a trustline
    const transactionBuilder = new TransactionBuilder(artistAccount, {
      fee: BASE_FEE,
      networkPassphrase: networkPassphrase,
    });

    // Add payment operation (emission)
    // This creates and sends tokens from artist (issuer) to distribution account
    // Since artist is the issuer, no trustline is needed for the artist
    transactionBuilder.addOperation(
      Operation.payment({
        destination: tokenData.distribution_public_key,
        asset: asset,
        amount: totalSupply,
      }),
    );

    const transaction = transactionBuilder
      .setTimeout(300) // 5 minutes for signing
      .build();

    const xdr = transaction.toXDR();

    return new Response(
      JSON.stringify({
        success: true,
        xdr: xdr,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
```

## File: supabase/functions/list-distributed-tokens/index.ts

```typescript
// List Distributed Tokens - Get all artist tokens with status 'distributed'
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { corsHeaders, handleCORS } from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get("limit") || "100");
    const offset = parseInt(url.searchParams.get("offset") || "0");

    // Query artist_tokens with status 'distributed'
    // Also join with token_metadata if available for additional info
    const { data: tokens, error } = await supabase
      .from("artist_tokens")
      .select(
        `
        id,
        artist_public_key,
        artist_email,
        artist_name,
        token_code,
        token_name,
        total_supply,
        description,
        image_url,
        platform_fee_bps,
        artist_amount,
        platform_amount,
        status,
        trustline_tx_hash,
        emission_tx_hash,
        distribution_tx_hash,
        created_at,
        distributed_at,
        updated_at
      `,
      )
      .eq("status", "distributed")
      .order("distributed_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error("Error fetching distributed tokens:", error);
      return new Response(
        JSON.stringify({
          error: "Error fetching tokens",
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Optionally fetch metadata for each token
    const tokensWithMetadata = await Promise.all(
      (tokens || []).map(async (token) => {
        const { data: metadata } = await supabase
          .from("token_metadata")
          .select("*")
          .eq("token_id", token.id)
          .single();

        return {
          ...token,
          metadata: metadata || null,
        };
      }),
    );

    return new Response(
      JSON.stringify({
        tokens: tokensWithMetadata,
        count: tokensWithMetadata.length,
        limit,
        offset,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
```

## File: supabase/functions/prepare-token/index.ts

```typescript
// Prepare Token - Creates distribution account and trustline
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  encryptSecret,
  fundDistributionAccount,
  BASE_FEE,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const PLATFORM_TREASURY = Deno.env.get("PLATFORM_TREASURY_PUBLIC_KEY")!;
const { server, networkPassphrase, network } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    // Parse request body
    let requestBody;
    try {
      requestBody = await req.json();
      console.log(
        "Received request body:",
        JSON.stringify(requestBody, null, 2),
      );
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return new Response(
        JSON.stringify({
          error: "Invalid JSON in request body",
          details:
            parseError instanceof Error
              ? parseError.message
              : String(parseError),
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const {
      artistPublicKey,
      tokenCode,
      tokenName,
      totalSupply,
      platformFeeBps,
      description,
    } = requestBody;

    // Validations with detailed error messages
    const missingFields: string[] = [];
    if (!artistPublicKey) missingFields.push("artistPublicKey");
    if (!tokenCode) missingFields.push("tokenCode");
    if (!totalSupply) missingFields.push("totalSupply");

    if (missingFields.length > 0) {
      const errorMessage = `Missing required fields: ${missingFields.join(", ")}. Received: ${JSON.stringify({ artistPublicKey: !!artistPublicKey, tokenCode: !!tokenCode, totalSupply: !!totalSupply })}`;
      console.error(errorMessage);
      return new Response(
        JSON.stringify({
          error: `Missing required fields: ${missingFields.join(", ")}`,
          received: requestBody,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate token code format (1-12 alphanumeric characters)
    const tokenCodeUpper = String(tokenCode || "").toUpperCase();
    if (!/^[A-Z0-9]{1,12}$/.test(tokenCodeUpper)) {
      console.error(`Invalid token code format: ${tokenCode}`);
      return new Response(
        JSON.stringify({
          error: "Token code must be 1-12 alphanumeric characters",
          received: tokenCode,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate artist account exists on Stellar
    try {
      await server.loadAccount(artistPublicKey);
      console.log(`Artist account verified: ${artistPublicKey}`);
    } catch (accountError) {
      console.error(`Artist account load error:`, accountError);
      const errorMessage =
        accountError instanceof Error
          ? accountError.message
          : String(accountError);
      return new Response(
        JSON.stringify({
          error: "Artist account does not exist on Stellar network",
          details: errorMessage,
          artistPublicKey,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Check if token already exists
    const { data: existingToken } = await supabase
      .from("artist_tokens")
      .select("id")
      .eq("token_code", tokenCodeUpper)
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (existingToken) {
      return new Response(
        JSON.stringify({
          error: "Token with this code already exists for this artist",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create unique distribution wallet for this token
    const Keypair = getStellarClass("Keypair");
    if (!Keypair) {
      throw new Error("Keypair class not found in Stellar SDK");
    }
    const distributionKeypair = Keypair.random();

    // Encrypt the secret
    const secretKey = await encryptSecret(distributionKeypair.secret());

    // Convert totalSupply to string if it's a number
    const totalSupplyStr = String(totalSupply || "0");

    // Save to database
    console.log("Inserting token into database:", {
      artist_public_key: artistPublicKey,
      token_code: tokenCodeUpper,
      token_name: tokenName || tokenCodeUpper,
      total_supply: totalSupplyStr,
      platform_fee_bps: platformFeeBps || 1000,
    });

    const { data, error } = await supabase
      .from("artist_tokens")
      .insert({
        artist_public_key: artistPublicKey,
        token_code: tokenCodeUpper,
        token_name: tokenName || tokenCodeUpper,
        total_supply: totalSupplyStr,
        platform_fee_bps: platformFeeBps || 1000,
        description: description || null,
        distribution_public_key: distributionKeypair.publicKey(),
        distribution_secret_encrypted: secretKey,
        status: "created",
      })
      .select()
      .single();

    if (error) {
      console.error("DB Error:", error);
      return new Response(
        JSON.stringify({
          error: "Error saving to database",
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Fund the distribution account (needs 2 XLM minimum)
    try {
      await fundDistributionAccount(
        distributionKeypair.publicKey(),
        server,
        networkPassphrase,
        network,
      );
      console.log("Distribution account funded successfully");
    } catch (fundingError) {
      console.error("Funding error:", fundingError);
      // For public network, funding is required
      if (network === "PUBLIC") {
        return new Response(
          JSON.stringify({
            error: "Account funding failed",
            details:
              fundingError instanceof Error
                ? fundingError.message
                : String(fundingError),
          }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      // For test networks, throw error to stop processing (friendbot should work)
      throw fundingError;
    }

    // Additional wait to ensure account is fully available
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Automatically create trustline
    try {
      const Asset = getStellarClass("Asset");
      const TransactionBuilder = getStellarClass("TransactionBuilder");
      const Operation = getStellarClass("Operation");

      if (!Asset || !TransactionBuilder || !Operation) {
        throw new Error("Required Stellar SDK classes not found");
      }

      const asset = new Asset(tokenCodeUpper, artistPublicKey);

      // Verify account exists (should already be verified after funding, but double-check)
      let distributionAccount;
      let retries = 5;
      let accountFound = false;

      while (retries > 0) {
        try {
          distributionAccount = await server.loadAccount(
            distributionKeypair.publicKey(),
          );
          accountFound = true;
          console.log(
            "Distribution account verified:",
            distributionKeypair.publicKey(),
          );
          break;
        } catch (loadError) {
          retries--;
          if (retries > 0) {
            console.log(
              `Account not yet available, retrying in 2 seconds... (${retries} retries left)`,
            );
            await new Promise((resolve) => setTimeout(resolve, 2000));
          } else {
            console.error("Final account load error:", loadError);
          }
        }
      }

      if (!accountFound || !distributionAccount) {
        throw new Error(
          `Distribution account not found after funding. Public key: ${distributionKeypair.publicKey()}. Network: ${network}`,
        );
      }

      // Create trustline
      const transaction = new TransactionBuilder(distributionAccount, {
        fee: BASE_FEE,
        networkPassphrase: networkPassphrase,
      })
        .addOperation(
          Operation.changeTrust({
            asset: asset,
            limit: totalSupplyStr,
          }),
        )
        .setTimeout(180)
        .build();

      transaction.sign(distributionKeypair);
      const result = await server.submitTransaction(transaction);

      // Update status in DB
      await supabase
        .from("artist_tokens")
        .update({
          status: "trustline_created",
          trustline_tx_hash: result.hash,
          trustline_created_at: new Date().toISOString(),
        })
        .eq("id", data.id);

      return new Response(
        JSON.stringify({
          success: true,
          distributionAccount: distributionKeypair.publicKey(),
          tokenId: data.id,
          trustlineTxHash: result.hash,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    } catch (trustlineError) {
      console.error("Trustline creation error:", trustlineError);
      // Return success but with warning - trustline can be created later
      return new Response(
        JSON.stringify({
          success: true,
          distributionAccount: distributionKeypair.publicKey(),
          tokenId: data.id,
          warning:
            "Token created but trustline creation failed. It will be retried automatically.",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
```

## File: supabase/functions/status/index.ts

```typescript
// Status - Check token creation status
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { corsHeaders, handleCORS } from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const url = new URL(req.url);
    const tokenCode = url.searchParams.get("code");
    const issuer = url.searchParams.get("issuer");

    if (!tokenCode || !issuer) {
      return new Response(
        JSON.stringify({
          error: "Missing required parameters: code and issuer",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const { data, error } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCode.toUpperCase())
      .eq("artist_public_key", issuer)
      .single();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        status: data.status,
        tokenCode: data.token_code,
        tokenName: data.token_name,
        totalSupply: data.total_supply,
        artistAmount: data.artist_amount || null,
        platformAmount: data.platform_amount || null,
        createdAt: data.created_at,
        distributedAt: data.distributed_at || null,
        trustlineTxHash: data.trustline_tx_hash || null,
        emissionTxHash: data.emission_tx_hash || null,
        distributionTxHash: data.distribution_tx_hash || null,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
```

## File: supabase/functions/submit-signed/index.ts

```typescript
// Submit Signed - Submit signed emission transaction to Stellar
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const { server, networkPassphrase } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const { signedXDR, tokenCode, artistPublicKey } = await req.json();

    if (!signedXDR || !tokenCode || !artistPublicKey) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields: signedXDR, tokenCode, artistPublicKey",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Verify token exists
    const { data: tokenData, error: tokenError } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCode.toUpperCase())
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (tokenError || !tokenData) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Parse and submit transaction
    try {
      const TransactionBuilder = getStellarClass("TransactionBuilder");
      if (!TransactionBuilder) {
        throw new Error("TransactionBuilder class not found in Stellar SDK");
      }

      const transaction = TransactionBuilder.fromXDR(
        signedXDR,
        networkPassphrase,
      );

      const result = await server.submitTransaction(transaction as any);

      // Check if transaction includes trustline creation (multiple operations)
      // The emission transaction may include trustline creation as the first operation
      const operations = (transaction as any).operations;
      const includesTrustline = operations && operations.length > 1;

      // Update status in database
      const updateData: any = {
        status: "tokens_emitted",
        emission_tx_hash: result.hash,
        emitted_at: new Date().toISOString(),
      };

      // If trustline was created as part of emission, also record it
      if (includesTrustline) {
        console.log("Emission transaction included trustline creation");
        // Note: The trustline was created, but we use the same tx hash
        // The database should reflect that trustline exists after this transaction
      }

      const { error: updateError } = await supabase
        .from("artist_tokens")
        .update(updateData)
        .eq("token_code", tokenCode.toUpperCase())
        .eq("artist_public_key", artistPublicKey);

      if (updateError) {
        console.error("Error updating database:", updateError);
        // Transaction was submitted successfully, but DB update failed
        // Return success but log the error
      }

      return new Response(
        JSON.stringify({
          success: true,
          txHash: result.hash,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    } catch (stellarError: any) {
      console.error("Stellar transaction error:", stellarError);

      // Parse Stellar error for better message
      let errorMessage = "Transaction submission failed";
      let errorDetails: any = {};

      if (stellarError.response) {
        const errorData = stellarError.response.data;
        console.error(
          "Stellar error data:",
          JSON.stringify(errorData, null, 2),
        );

        if (errorData && errorData.extras && errorData.extras.result_codes) {
          const resultCodes = errorData.extras.result_codes;
          const transactionCode = resultCodes.transaction;
          const operationCodes = resultCodes.operations || [];

          errorDetails = {
            transactionCode,
            operationCodes,
            fullResultCodes: resultCodes,
          };

          // Map common error codes to user-friendly messages
          const errorMessages: Record<string, string> = {
            tx_failed: "Transaction failed",
            tx_insufficient_fee: "Insufficient transaction fee",
            tx_too_early: "Transaction submitted too early",
            tx_too_late: "Transaction expired",
            tx_missing_operation: "Transaction missing operations",
            tx_bad_auth: "Transaction authentication failed",
            tx_bad_auth_extra: "Transaction has extra signatures",
            op_underfunded: "Account has insufficient balance",
            op_low_reserve: "Account does not meet minimum reserve requirement",
            op_line_full: "Trustline limit reached",
            op_no_trust: "No trustline exists for this asset",
            op_not_authorized: "Operation not authorized",
            op_no_issuer: "Issuer account does not exist",
            op_success: "Operation succeeded",
          };

          // Build detailed error message
          let messages: string[] = [];
          if (transactionCode) {
            messages.push(
              `Transaction: ${errorMessages[transactionCode] || transactionCode}`,
            );
          }

          operationCodes.forEach((opCode: string, index: number) => {
            messages.push(
              `Operation ${index + 1}: ${errorMessages[opCode] || opCode}`,
            );
          });

          errorMessage =
            messages.join(". ") || "Transaction failed on Stellar network";

          // Add more context based on error codes
          if (
            operationCodes.includes("op_underfunded") ||
            operationCodes.includes("op_low_reserve")
          ) {
            errorMessage +=
              ". The artist account may not have enough XLM to pay for transaction fees or maintain minimum balance.";
          } else if (operationCodes.includes("op_no_trust")) {
            errorMessage +=
              ". Trustline creation failed - the artist account may not have enough XLM to create a trustline.";
          } else if (operationCodes.includes("op_line_full")) {
            errorMessage += ". Trustline limit is too low or already reached.";
          }
        } else if (errorData && errorData.detail) {
          errorMessage = errorData.detail;
        } else if (errorData && errorData.title) {
          errorMessage = errorData.title;
        }
      } else if (stellarError.message) {
        errorMessage = stellarError.message;
      }

      return new Response(
        JSON.stringify({
          error: errorMessage,
          details: errorDetails,
          stellarError: stellarError.response?.data || stellarError.message,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
```

## File: supabase/functions/deno.json

```json
{
  "compilerOptions": {
    "lib": ["deno.window", "deno.unstable"],
    "strict": true
  }
}
```

## File: supabase/.gitignore

```
# Supabase
.branches
.temp

# dotenvx
.env.keys
.env.local
.env.*.local
```

## File: supabase/config.toml

```toml
# For detailed configuration reference documentation, visit:
# https://supabase.com/docs/guides/local-development/cli/config
# A string used to distinguish different Supabase projects on the same host. Defaults to the
# working directory name when running `supabase init`.
project_id = "dropsland-scaffold"

[api]
enabled = true
# Port to use for the API URL.
port = 54321
# Schemas to expose in your API. Tables, views and stored procedures in this schema will get API
# endpoints. `public` and `graphql_public` schemas are included by default.
schemas = ["public", "graphql_public"]
# Extra schemas to add to the search_path of every request.
extra_search_path = ["public", "extensions"]
# The maximum number of rows returns from a view, table, or stored procedure. Limits payload size
# for accidental or malicious requests.
max_rows = 1000

[api.tls]
# Enable HTTPS endpoints locally using a self-signed certificate.
enabled = false
# Paths to self-signed certificate pair.
# cert_path = "../certs/my-cert.pem"
# key_path = "../certs/my-key.pem"

[db]
# Port to use for the local database URL.
port = 54322
# Port used by db diff command to initialize the shadow database.
shadow_port = 54320
# The database major version to use. This has to be the same as your remote database's. Run `SHOW
# server_version;` on the remote database to check.
major_version = 17

[db.pooler]
enabled = false
# Port to use for the local connection pooler.
port = 54329
# Specifies when a server connection can be reused by other clients.
# Configure one of the supported pooler modes: `transaction`, `session`.
pool_mode = "transaction"
# How many server connections to allow per user/database pair.
default_pool_size = 20
# Maximum number of client connections allowed.
max_client_conn = 100

# [db.vault]
# secret_key = "env(SECRET_VALUE)"

[db.migrations]
# If disabled, migrations will be skipped during a db push or reset.
enabled = true
# Specifies an ordered list of schema files that describe your database.
# Supports glob patterns relative to supabase directory: "./schemas/*.sql"
schema_paths = []

[db.seed]
# If enabled, seeds the database after migrations during a db reset.
enabled = true
# Specifies an ordered list of seed files to load during db reset.
# Supports glob patterns relative to supabase directory: "./seeds/*.sql"
sql_paths = ["./seed.sql"]

[db.network_restrictions]
# Enable management of network restrictions.
enabled = false
# List of IPv4 CIDR blocks allowed to connect to the database.
# Defaults to allow all IPv4 connections. Set empty array to block all IPs.
allowed_cidrs = ["0.0.0.0/0"]
# List of IPv6 CIDR blocks allowed to connect to the database.
# Defaults to allow all IPv6 connections. Set empty array to block all IPs.
allowed_cidrs_v6 = ["::/0"]

[realtime]
enabled = true
# Bind realtime via either IPv4 or IPv6. (default: IPv4)
# ip_version = "IPv6"
# The maximum length in bytes of HTTP request headers. (default: 4096)
# max_header_length = 4096

[studio]
enabled = true
# Port to use for Supabase Studio.
port = 54323
# External URL of the API server that frontend connects to.
api_url = "http://127.0.0.1"
# OpenAI API Key to use for Supabase AI in the Supabase Studio.
openai_api_key = "env(OPENAI_API_KEY)"

# Email testing server. Emails sent with the local dev setup are not actually sent - rather, they
# are monitored, and you can view the emails that would have been sent from the web interface.
[inbucket]
enabled = true
# Port to use for the email testing server web interface.
port = 54324
# Uncomment to expose additional ports for testing user applications that send emails.
# smtp_port = 54325
# pop3_port = 54326
# admin_email = "admin@email.com"
# sender_name = "Admin"

[storage]
enabled = true
# The maximum file size allowed (e.g. "5MB", "500KB").
file_size_limit = "50MiB"

# Image transformation API is available to Supabase Pro plan.
# [storage.image_transformation]
# enabled = true

# Uncomment to configure local storage buckets
# [storage.buckets.images]
# public = false
# file_size_limit = "50MiB"
# allowed_mime_types = ["image/png", "image/jpeg"]
# objects_path = "./images"

[auth]
enabled = true
# The base URL of your website. Used as an allow-list for redirects and for constructing URLs used
# in emails.
site_url = "http://127.0.0.1:3000"
# A list of *exact* URLs that auth providers are permitted to redirect to post authentication.
additional_redirect_urls = ["https://127.0.0.1:3000"]
# How long tokens are valid for, in seconds. Defaults to 3600 (1 hour), maximum 604,800 (1 week).
jwt_expiry = 3600
# Path to JWT signing key. DO NOT commit your signing keys file to git.
# signing_keys_path = "./signing_keys.json"
# If disabled, the refresh token will never expire.
enable_refresh_token_rotation = true
# Allows refresh tokens to be reused after expiry, up to the specified interval in seconds.
# Requires enable_refresh_token_rotation = true.
refresh_token_reuse_interval = 10
# Allow/disallow new user signups to your project.
enable_signup = true
# Allow/disallow anonymous sign-ins to your project.
enable_anonymous_sign_ins = false
# Allow/disallow testing manual linking of accounts
enable_manual_linking = false
# Passwords shorter than this value will be rejected as weak. Minimum 6, recommended 8 or more.
minimum_password_length = 6
# Passwords that do not meet the following requirements will be rejected as weak. Supported values
# are: `letters_digits`, `lower_upper_letters_digits`, `lower_upper_letters_digits_symbols`
password_requirements = ""

[auth.rate_limit]
# Number of emails that can be sent per hour. Requires auth.email.smtp to be enabled.
email_sent = 2
# Number of SMS messages that can be sent per hour. Requires auth.sms to be enabled.
sms_sent = 30
# Number of anonymous sign-ins that can be made per hour per IP address. Requires enable_anonymous_sign_ins = true.
anonymous_users = 30
# Number of sessions that can be refreshed in a 5 minute interval per IP address.
token_refresh = 150
# Number of sign up and sign-in requests that can be made in a 5 minute interval per IP address (excludes anonymous users).
sign_in_sign_ups = 30
# Number of OTP / Magic link verifications that can be made in a 5 minute interval per IP address.
token_verifications = 30
# Number of Web3 logins that can be made in a 5 minute interval per IP address.
web3 = 30

# Configure one of the supported captcha providers: `hcaptcha`, `turnstile`.
# [auth.captcha]
# enabled = true
# provider = "hcaptcha"
# secret = ""

[auth.email]
# Allow/disallow new user signups via email to your project.
enable_signup = true
# If enabled, a user will be required to confirm any email change on both the old, and new email
# addresses. If disabled, only the new email is required to confirm.
double_confirm_changes = true
# If enabled, users need to confirm their email address before signing in.
enable_confirmations = false
# If enabled, users will need to reauthenticate or have logged in recently to change their password.
secure_password_change = false
# Controls the minimum amount of time that must pass before sending another signup confirmation or password reset email.
max_frequency = "1s"
# Number of characters used in the email OTP.
otp_length = 6
# Number of seconds before the email OTP expires (defaults to 1 hour).
otp_expiry = 3600

# Use a production-ready SMTP server
# [auth.email.smtp]
# enabled = true
# host = "smtp.sendgrid.net"
# port = 587
# user = "apikey"
# pass = "env(SENDGRID_API_KEY)"
# admin_email = "admin@email.com"
# sender_name = "Admin"

# Uncomment to customize email template
# [auth.email.template.invite]
# subject = "You have been invited"
# content_path = "./supabase/templates/invite.html"

[auth.sms]
# Allow/disallow new user signups via SMS to your project.
enable_signup = false
# If enabled, users need to confirm their phone number before signing in.
enable_confirmations = false
# Template for sending OTP to users
template = "Your code is {{ .Code }}"
# Controls the minimum amount of time that must pass before sending another sms otp.
max_frequency = "5s"

# Use pre-defined map of phone number to OTP for testing.
# [auth.sms.test_otp]
# 4152127777 = "123456"

# Configure logged in session timeouts.
# [auth.sessions]
# Force log out after the specified duration.
# timebox = "24h"
# Force log out if the user has been inactive longer than the specified duration.
# inactivity_timeout = "8h"

# This hook runs before a new user is created and allows developers to reject the request based on the incoming user object.
# [auth.hook.before_user_created]
# enabled = true
# uri = "pg-functions://postgres/auth/before-user-created-hook"

# This hook runs before a token is issued and allows you to add additional claims based on the authentication method used.
# [auth.hook.custom_access_token]
# enabled = true
# uri = "pg-functions://<database>/<schema>/<hook_name>"

# Configure one of the supported SMS providers: `twilio`, `twilio_verify`, `messagebird`, `textlocal`, `vonage`.
[auth.sms.twilio]
enabled = false
account_sid = ""
message_service_sid = ""
# DO NOT commit your Twilio auth token to git. Use environment variable substitution instead:
auth_token = "env(SUPABASE_AUTH_SMS_TWILIO_AUTH_TOKEN)"

# Multi-factor-authentication is available to Supabase Pro plan.
[auth.mfa]
# Control how many MFA factors can be enrolled at once per user.
max_enrolled_factors = 10

# Control MFA via App Authenticator (TOTP)
[auth.mfa.totp]
enroll_enabled = false
verify_enabled = false

# Configure MFA via Phone Messaging
[auth.mfa.phone]
enroll_enabled = false
verify_enabled = false
otp_length = 6
template = "Your code is {{ .Code }}"
max_frequency = "5s"

# Configure MFA via WebAuthn
# [auth.mfa.web_authn]
# enroll_enabled = true
# verify_enabled = true

# Use an external OAuth provider. The full list of providers are: `apple`, `azure`, `bitbucket`,
# `discord`, `facebook`, `github`, `gitlab`, `google`, `keycloak`, `linkedin_oidc`, `notion`, `twitch`,
# `twitter`, `slack`, `spotify`, `workos`, `zoom`.
[auth.external.apple]
enabled = false
client_id = ""
# DO NOT commit your OAuth provider secret to git. Use environment variable substitution instead:
secret = "env(SUPABASE_AUTH_EXTERNAL_APPLE_SECRET)"
# Overrides the default auth redirectUrl.
redirect_uri = ""
# Overrides the default auth provider URL. Used to support self-hosted gitlab, single-tenant Azure,
# or any other third-party OIDC providers.
url = ""
# If enabled, the nonce check will be skipped. Required for local sign in with Google auth.
skip_nonce_check = false
# If enabled, it will allow the user to successfully authenticate when the provider does not return an email address.
email_optional = false

# Allow Solana wallet holders to sign in to your project via the Sign in with Solana (SIWS, EIP-4361) standard.
# You can configure "web3" rate limit in the [auth.rate_limit] section and set up [auth.captcha] if self-hosting.
[auth.web3.solana]
enabled = false

# Use Firebase Auth as a third-party provider alongside Supabase Auth.
[auth.third_party.firebase]
enabled = false
# project_id = "my-firebase-project"

# Use Auth0 as a third-party provider alongside Supabase Auth.
[auth.third_party.auth0]
enabled = false
# tenant = "my-auth0-tenant"
# tenant_region = "us"

# Use AWS Cognito (Amplify) as a third-party provider alongside Supabase Auth.
[auth.third_party.aws_cognito]
enabled = false
# user_pool_id = "my-user-pool-id"
# user_pool_region = "us-east-1"

# Use Clerk as a third-party provider alongside Supabase Auth.
[auth.third_party.clerk]
enabled = false
# Obtain from https://clerk.com/setup/supabase
# domain = "example.clerk.accounts.dev"

# OAuth server configuration
[auth.oauth_server]
# Enable OAuth server functionality
enabled = false
# Path for OAuth consent flow UI
authorization_url_path = "/oauth/consent"
# Allow dynamic client registration
allow_dynamic_registration = false

[edge_runtime]
enabled = true
# Supported request policies: `oneshot`, `per_worker`.
# `per_worker` (default) — enables hot reload during local development.
# `oneshot` — fallback mode if hot reload causes issues (e.g. in large repos or with symlinks).
policy = "per_worker"
# Port to attach the Chrome inspector for debugging edge functions.
inspector_port = 8083
# The Deno major version to use.
deno_version = 2

# [edge_runtime.secrets]
# secret_key = "env(SECRET_VALUE)"

[analytics]
enabled = true
port = 54327
# Configure one of the supported backends: `postgres`, `bigquery`.
backend = "postgres"

# Experimental features may be deprecated any time
[experimental]
# Configures Postgres storage engine to use OrioleDB (S3)
orioledb_version = ""
# Configures S3 bucket URL, eg. <bucket_name>.s3-<region>.amazonaws.com
s3_host = "env(S3_HOST)"
# Configures S3 bucket region, eg. us-east-1
s3_region = "env(S3_REGION)"
# Configures AWS_ACCESS_KEY_ID for S3 bucket
s3_access_key = "env(S3_ACCESS_KEY)"
# Configures AWS_SECRET_ACCESS_KEY for S3 bucket
s3_secret_key = "env(S3_SECRET_KEY)"
```

## File: .env.example

```
# The environment to use `development`, `testing`, `staging`, `production`
STELLAR_SCAFFOLD_ENV=development

# Location of the config files for this project for the scaffold stellar CLI.
# Learn more at https://developers.stellar.org/docs/tools/cli/stellar-cli#stellar-config-dir
XDG_CONFIG_HOME=".config"

# Prefix with "PUBLIC_" to make available in frontend files
# Which Stellar network to use in the frontend: local, testnet, futurenet, or mainnet
# More on Stellar networks: https://developers.stellar.org/docs/networks

PUBLIC_STELLAR_NETWORK="LOCAL"
# The Stellar network passphrase, this is local
PUBLIC_STELLAR_NETWORK_PASSPHRASE="Standalone Network ; February 2017"
# The Stellar network RPC URL. this is local
PUBLIC_STELLAR_RPC_URL="http://localhost:8000/rpc"
# The Stellar Horizon URL. this is local
PUBLIC_STELLAR_HORIZON_URL="http://localhost:8000"

# PUBLIC_STELLAR_NETWORK="TESTNET"
# PUBLIC_STELLAR_NETWORK_PASSPHRASE="Test SDF Network ; September 2015"
# PUBLIC_STELLAR_RPC_URL="https://soroban-testnet.stellar.org"
# PUBLIC_STELLAR_HORIZON_URL="https://horizon-testnet.stellar.org"

# PUBLIC_STELLAR_NETWORK="MAINNET"
# PUBLIC_STELLAR_NETWORK_PASSPHRASE="Public Global Stellar Network ; September 2015"
# PUBLIC_STELLAR_RPC_URL=
# PUBLIC_STELLAR_HORIZON_URL=
```

## File: .gitattributes

```
Cargo.lock text -merge eol=lf linguist-generated=true -diff
package-lock.json linguist-generated=true -diff
```

## File: .gitignore

```
# stellar/soroban/Rust output
target
.soroban

# project identity and alias files will be in .config/stellar
.config

# test snapshot folders from sample contracts
test_snapshots

# build output
dist
dist-ssr

# dependencies
node_modules/

# logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# environment variables
.env
.env.*
!.env.example

# easy way to create temporary local-only files and folders
*.local.*

# macOS-specific files
.DS_Store

# generated contract clients
packages/*
# if you have other workspace packages, add them here
!packages/.gitkeep

# generated contract client imports
src/contracts/*
!src/contracts/util.ts
```

## File: AGENTS.md

```markdown
# Repository Guidelines

## Project Structure & Module Organization

`src/` contains the Vite + React application (UI in `components/`, data hooks in `providers/`, routing in `App.tsx`). Static assets live in `public/`, and the Vite build drops into `dist/`. Soroban smart contracts sit inside `contracts/{dj-fungible,dj-nft,factory}` with Rust sources in `src/` and helper Makefiles for deployment. Generated TypeScript clients and examples are under `packages/*`, while network scripts and Supabase assets live in `scripts/` and `supabase/` alongside `environments.toml` for per-network aliases.

## Build, Test, and Development Commands

- `npm run dev` (or `npm run start`): runs `stellar scaffold watch --build-clients` next to `vite` for live reload plus contract client regeneration.
- `npm run build`: executes `tsc -b` then `vite build`, emitting production assets to `dist/`.
- `npm run lint` / `npm run format`: apply ESLint 9 + Prettier 3 flat configs across the repo.
- `npm run install:contracts`: installs the workspace packages and rebuilds Soroban client bindings.
- `make build` / `make deploy-dj-fungible`: invoke Stellar CLI workflows defined in the root `Makefile`.
- `cd contracts/factory && cargo test`: run contract tests; prefer `cargo test --release` before publishing bytecode.

## Coding Style & Naming Conventions

TypeScript modules are ESM with strict settings from the root `tsconfig*.json`. Honor the repository defaults of two-space indentation, double quotes, and trailing commas—let `npm run format` enforce them. React components, providers, and contexts use PascalCase filenames; hooks follow the `useThing` camelCase pattern, and utility modules may stay kebab-case. Tailwind classes should be grouped layout → spacing → typography → effects to keep diffs focused. ESLint (`eslint.config.js`) plus `lint-staged` auto-fix staged files; avoid bypassing pre-commit hooks.

## Testing Guidelines

Contract tests live beside sources (e.g., `contracts/factory/src/test.rs`); expand coverage for price curves, access control, and treasury splits, re-enabling the commented cases in `contracts/dj-fungible/src/test.rs` when logic changes. Run `cargo test` per contract and capture ledger snapshots for regressions. UI work should include Vitest or Playwright specs under `src/__tests__/` if behavior is non-trivial—wire them into `package.json` as `npm run test` so CI can pick them up. Document any manual verification (wallet flows, Supabase triggers) directly in the PR.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commits style (`feat:`, `fix:`, `chore:`) visible in `git log`; describe scope succinctly and reference issue numbers when relevant. Keep PRs focused, list migrations or contract ID changes explicitly, and include screenshots or clips for UI tweaks. Every PR description should cover context, solution, test evidence, and follow-ups; link helper docs like `scripts/TESTNET_SETUP.md` when the reviewer needs setup steps.

## Security & Configuration Tips

Guard network secrets—use local `.env` files and never commit wallet mnemonics or Supabase service keys. Align deployments with the aliases defined in `environments.toml` and the guidance in `scripts/TESTNET_SETUP.md`/`QUICK_FIX_TESTNET.md` to avoid mismatched admins. Regenerate WASM artifacts via `stellar contract build` (or the Makefile) before shipping so on-chain code matches the latest TypeScript clients. Validate user input inside `src/providers` and API callers before invoking Soroban methods to prevent malformed transactions.
```

## File: Cargo.toml

```toml
[workspace]
members = ["contracts/*"]
resolver = "2"

[workspace.package]
authors = ["AhaLabs"]
edition = "2021"
license = "Apache-2.0"
repository = "https://github.com/theahaco/scaffold-stellar"
version = "0.0.1"

[workspace.dependencies.soroban-sdk]
version = "23.0.2"

[workspace.dependencies.stellar-access]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.5.0"

[workspace.dependencies.stellar-default-impl-macro]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.3.0"

[workspace.dependencies.stellar-fungible]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.3.0"

[workspace.dependencies.stellar-macros]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.5.0"

[workspace.dependencies.stellar-non-fungible]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.3.0"

[workspace.dependencies.stellar-pausable]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.3.0"

[workspace.dependencies.stellar-pausable-macros]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.3.0"

[workspace.dependencies.stellar-tokens]
git = "https://github.com/OpenZeppelin/stellar-contracts"
tag = "v0.5.0"

[profile.release]
opt-level = "z"
debug = false
lto = true
debug-assertions = false
codegen-units = 1
panic = "abort"
overflow-checks = true
strip = true

[profile.release-with-logs]
debug-assertions = true
inherits = "release"
```

## File: components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

## File: IMPLEMENTATION_VERIFICATION.md

````markdown
# Token Creation Implementation Verification

## ✅ Implementation Status

All components have been verified and are correctly aligned with the deployed Supabase Edge Functions.

## 📋 API Endpoints Verification

### 1. **prepare-token** ✅

- **Endpoint**: `POST /functions/v1/prepare-token`
- **Frontend**: `src/services/tokenCreation.ts:35-59`
- **Backend**: `supabase/functions/prepare-token/index.ts`
- **Request Match**: ✅
  - `artistPublicKey` ✅
  - `tokenCode` ✅
  - `tokenName` ✅
  - `totalSupply` ✅
  - `platformFeeBps` ✅
  - `description` ✅
- **Response Match**: ✅
  - `success: boolean` ✅
  - `distributionAccount: string` ✅
  - `tokenId?: string` ✅
  - `trustlineTxHash?: string` ✅ (Added to types)
  - `warning?: string` ✅ (Added to types)

### 2. **status** ✅

- **Endpoint**: `GET /functions/v1/status?code=TOKEN&issuer=GXXXXX...`
- **Frontend**: `src/services/tokenCreation.ts:64-93`
- **Backend**: `supabase/functions/status/index.ts`
- **Request Match**: ✅
  - Query params: `code`, `issuer` ✅
- **Response Match**: ✅
  - `status: TokenStatus` ✅
  - `tokenCode: string` ✅
  - `tokenName: string` ✅
  - `totalSupply: string` ✅
  - `artistAmount?: string` ✅
  - `platformAmount?: string` ✅
  - `createdAt?: string` ✅
  - `distributedAt?: string` ✅
  - `trustlineTxHash?: string` ✅
  - `emissionTxHash?: string` ✅
  - `distributionTxHash?: string` ✅

### 3. **emission-xdr** ✅

- **Endpoint**: `POST /functions/v1/emission-xdr`
- **Frontend**: `src/services/tokenCreation.ts:98-128`
- **Backend**: `supabase/functions/emission-xdr/index.ts`
- **Request Match**: ✅
  - `artistPublicKey` ✅
  - `tokenCode` ✅
  - `totalSupply` ✅
- **Response Match**: ✅
  - `success: boolean` ✅
  - `xdr: string` ✅

### 4. **submit-signed** ✅

- **Endpoint**: `POST /functions/v1/submit-signed`
- **Frontend**: `src/services/tokenCreation.ts:133-163`
- **Backend**: `supabase/functions/submit-signed/index.ts`
- **Request Match**: ✅
  - `signedXDR` ✅
  - `tokenCode` ✅
  - `artistPublicKey` ✅
- **Response Match**: ✅
  - `success: boolean` ✅
  - `txHash: string` ✅

### 5. **distribute** ✅

- **Endpoint**: `POST /functions/v1/distribute`
- **Frontend**: `src/services/tokenCreation.ts:168-196`
- **Backend**: `supabase/functions/distribute/index.ts`
- **Request Match**: ✅
  - `artistPublicKey` ✅
  - `tokenCode` ✅
- **Response Match**: ✅
  - `success: boolean` ✅
  - `artistAmount: string` ✅
  - `platformAmount: string` ✅
  - `transactionHash: string` ✅

## 🔄 Flow Verification

### Step-by-Step Flow ✅

1. **Step 1: Wallet Connection** ✅
   - User connects wallet
   - Hook verifies connection: `checkWalletConnection()`

2. **Step 2: Prepare Token** ✅
   - User submits form: `handlePrepareToken()`
   - Calls `prepareToken()` API
   - Backend creates distribution account
   - Backend automatically creates trustline
   - **Optimization**: If `trustlineTxHash` is in response, skip to step 4
   - Otherwise, go to step 3 (polling)

3. **Step 3: Polling (if needed)** ✅
   - Only if trustline wasn't created automatically
   - Polls `checkTokenStatus()` every 2 seconds
   - Timeout after 60 seconds
   - Moves to step 4 when `status === "trustline_created"`

4. **Step 4: Sign Emission** ✅
   - User clicks "Sign Emission Transaction"
   - Calls `getEmissionXDR()` to get unsigned XDR
   - Signs transaction with wallet: `signTransaction()`
   - Submits signed transaction: `submitSignedTransaction()`
   - Moves to step 5

5. **Step 5: Execute Distribution** ✅
   - User clicks "Execute Distribution"
   - Calls `executeDistribution()` API
   - Backend distributes tokens to artist and platform
   - Moves to step 6 (success)

6. **Step 6: Success** ✅
   - Shows success message
   - Displays transaction hashes
   - Shows distribution amounts

## 🎯 Improvements Made

### 1. **Optimized Trustline Flow** ✅

- **Before**: Always polled for trustline creation
- **After**: Checks if `trustlineTxHash` is in response from `prepare-token`
- **Benefit**: Skips polling when trustline is created automatically (faster UX)

### 2. **Fixed Type Definitions** ✅

- Added `trustlineTxHash?: string` to `PrepareTokenResponse`
- Added `warning?: string` to `PrepareTokenResponse`
- Ensures type safety with backend responses

### 3. **Fixed Hook Dependency Order** ✅

- Moved `startTrustlinePolling` before `handlePrepareToken`
- Prevents dependency issues in `useCallback`

### 4. **Error Handling** ✅

- All API calls have error handling
- Polling errors don't break the flow (logged only)
- User-friendly error messages

## 🔍 Type Safety Verification

### Request Types ✅

- `TokenCreationParams` matches backend expectations
- All required fields are present
- Optional fields are handled correctly

### Response Types ✅

- `PrepareTokenResponse` matches backend response
- `TokenStatusResponse` matches backend response
- `EmissionXDRResponse` matches backend response
- `SubmitSignedResponse` matches backend response
- `DistributionResponse` matches backend response

## 🚀 Environment Variables Required

### Frontend (.env)

```bash
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Backend (Supabase Dashboard)

```bash
STELLAR_NETWORK=PUBLIC  # or TESTNET, FUTURENET
HORIZON_URL=https://horizon.stellar.org  # Optional
PLATFORM_TREASURY_PUBLIC_KEY=GXXXXX...
PLATFORM_FUNDING_SECRET_KEY=SXXXXX...  # Optional
ENCRYPTION_KEY=your-32-byte-key
```

## ✅ Final Checklist

- [x] All API endpoints match backend
- [x] All request/response types match
- [x] Flow is optimized (skips polling when possible)
- [x] Error handling is comprehensive
- [x] Type safety is maintained
- [x] Polling is properly cleaned up
- [x] Hook dependencies are correct
- [x] No linter errors
- [x] Functions are deployed successfully

## 📝 Notes

1. **Trustline Creation**: The backend now automatically creates the trustline in `prepare-token`, so the frontend can skip polling in most cases.

2. **Polling Fallback**: If trustline creation fails or is delayed, the frontend falls back to polling.

3. **Error Recovery**: If trustline creation fails, the backend returns a warning but the token is still created. The frontend will poll for status updates.

4. **Transaction Signing**: The emission transaction requires wallet signing, which is handled by the `signTransaction` function from the wallet context.

5. **Distribution**: The distribution step requires both artist and platform treasury to have trustlines. The backend verifies this before executing distribution.

## 🎉 Conclusion

The implementation is **complete and verified**. All components are correctly aligned with the deployed backend functions, and the flow is optimized for the best user experience.
````

## File: LICENSE

```
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

## File: Makefile

```
NATIVE_TOKEN := $(shell stellar contract asset id --asset native --network testnet)

all: deploy-dj-fungible

build:
	stellar contract build

optimize: build
	stellar contract optimize --wasm target/wasm32v1-none/release/dj_fungible.wasm

deploy-dj-fungible:
	stellar contract deploy \
    	--wasm target/wasm32v1-none/release/dj_fungible.optimized.wasm \
		--source admin \
		--network testnet \
		--alias dj_fungible \
		-- \
		--admin admin \
        --manager admin \
		--decimals 7 \
		--name "DJ_FUNGIBLE" \
		--symbol "DJ_FUNGIBLE" \
        --initial_supply 10000000000

dj-fungible-create-order:
	stellar contract invoke \
		--source admin \
		--network testnet \
		--id dj_fungible \
		-- \
		create_order \
		--payment_token "$(NATIVE_TOKEN)" \
		--amount 10000000 \
		--price_per_token 1000000
```

## File: rust-toolchain.toml

```toml
[toolchain]
channel = "1.89.0"
targets = ["wasm32v1-none"]
```

## File: contracts/dj-fungible/src/test.rs

```rust
// extern crate std;

// use soroban_sdk::{testutils::Address as _, Address, Env};

// use crate::contract::{ExampleContract, ExampleContractClient};

// fn create_client<'a>(
//     e: &Env,
//     admin: &Address,
//     manager: &Address,
//     initial_supply: &i128,
// ) -> ExampleContractClient<'a> {
//     let address = e.register(ExampleContract, (admin, manager, initial_supply));
//     ExampleContractClient::new(e, &address)
// }

// #[test]
// #[should_panic(expected = "Error(Contract, #113)")]
// fn cannot_transfer_before_allow() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Admin can't transfer to user1 initially (user1 not allowed)
//     e.mock_all_auths();
//     client.transfer(&admin, &user1, &transfer_amount);
// }

// #[test]
// fn transfer_to_allowed_account_works() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user1
//     client.allow_user(&user1, &manager);
//     assert!(client.allowed(&user1));

//     // Now admin can transfer to user1
//     client.transfer(&admin, &user1, &transfer_amount);
//     assert_eq!(client.balance(&user1), transfer_amount);
// }

// #[test]
// #[should_panic(expected = "Error(Contract, #113)")]
// fn cannot_transfer_after_disallow() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user1
//     client.allow_user(&user1, &manager);
//     assert!(client.allowed(&user1));

//     // Now admin can transfer to user1
//     client.transfer(&admin, &user1, &transfer_amount);
//     assert_eq!(client.balance(&user1), transfer_amount);

//     // Disallow user1
//     client.disallow_user(&user1, &manager);
//     assert!(!client.allowed(&user1));

//     // Admin can't transfer to user1 after disallowing
//     client.transfer(&admin, &user1, &100);
// }

// #[test]
// fn allowlist_transfer_from_override_works() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user2
//     client.allow_user(&user2, &manager);
//     assert!(client.allowed(&user2));

//     // Now admin can transfer to user1
//     client.approve(&admin, &user1, &transfer_amount, &1000);
//     client.transfer_from(&user1, &admin, &user2, &transfer_amount);
//     assert_eq!(client.balance(&user2), transfer_amount);
// }

// #[test]
// fn allowlist_approve_override_works() {
//     let e = Env::default();
//     let admin = Address::generate(&e);
//     let manager = Address::generate(&e);
//     let user1 = Address::generate(&e);
//     let user2 = Address::generate(&e);
//     let initial_supply = 1_000_000;
//     let client = create_client(&e, &admin, &manager, &initial_supply);
//     let transfer_amount = 1000;

//     e.mock_all_auths();

//     // Verify initial state - admin is allowed, others are not
//     assert!(client.allowed(&admin));
//     assert!(!client.allowed(&user1));
//     assert!(!client.allowed(&user2));

//     // Allow user1
//     client.allow_user(&user1, &manager);
//     assert!(client.allowed(&user1));

//     // Approve user2 to transfer from user1
//     client.approve(&user1, &user2, &transfer_amount, &1000);
//     assert_eq!(client.allowance(&user1, &user2), transfer_amount);
// }
```

## File: contracts/factory/src/storage/token.rs

```rust
use soroban_sdk::{Address, BytesN, Env, Vec};

use crate::storage::types::{DataKey, Error};

// Used token e.g. USDC, XLM
pub(crate) fn set_token(env: &Env, token: &Address) {
    let key = DataKey::Token;

    env.storage().instance().set(&key, token);
}

pub(crate) fn get_token(env: &Env) -> Result<Address, Error> {
    let key = DataKey::Token;

    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}

// Fungible Token
pub(crate) fn set_fungible_wasm(env: &Env, wasm_hash: &BytesN<32>) {
    let key = DataKey::FungibleWasm;
    env.storage().instance().set(&key, wasm_hash);
}

pub(crate) fn get_fungible_wasm(env: &Env) -> Result<BytesN<32>, Error> {
    let key = DataKey::FungibleWasm;
    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}

pub(crate) fn set_nft_wasm(env: &Env, wasm_hash: &BytesN<32>) {
    let key = DataKey::NftWasm;
    env.storage().instance().set(&key, wasm_hash);
}

pub(crate) fn get_nft_wasm(env: &Env) -> Result<BytesN<32>, Error> {
    let key = DataKey::NftWasm;
    env.storage()
        .instance()
        .get(&key)
        .ok_or(Error::ContractNotInitialized)
}
```

## File: contracts/factory/src/storage/types.rs

```rust
use soroban_sdk::contracterror;
use soroban_sdk::contracttype;
use soroban_sdk::Address;

#[derive(Clone)]
#[contracttype]
pub enum DataKey {
    Admin,
    Token,
    FungibleWasm,
    NftWasm,
    DeployNonce,

    TokenRegistry,      // Will store the Vec<Address> for enumeration
    TokenInfo(Address), // Maps a token_address -> RegistryEntry
}

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
#[repr(u32)]
pub enum Error {
    // Basic Errors
    ContractInitialized = 0,
    ContractNotInitialized = 1,
    AmountMustBePositive = 2,
    UnauthorizedAccess = 3,
    //
    TokenNotFound = 4,
    InvalidArgument = 5,
}

#[derive(Clone, Copy)]
#[contracttype]
pub enum TokenType {
    Sac = 0,
    Custom = 1,
    Fungible = 2,
    Nft = 3,
}

#[derive(Clone)]
#[contracttype]
pub struct RegistryEntry {
    pub token_type: TokenType,
    pub issuer: Address,
}
```

## File: contracts/factory/src/contract.rs

```rust
use soroban_sdk::{
    contract, contractimpl, symbol_short, vec, xdr::ToXdr, Address, Bytes, BytesN, Env, IntoVal,
    String, TryFromVal, Val, Vec,
};

use crate::{
    events,
    storage::{
        admin::{has_admin, set_admin},
        token::{get_fungible_wasm, get_nft_wasm, set_fungible_wasm, set_nft_wasm, set_token},
        types::{DataKey, Error, RegistryEntry, TokenType},
    },
};

#[contract]
pub struct FactoryContract;

#[contractimpl]
impl FactoryContract {
    pub fn __constructor(
        env: Env,
        admin: Address,
        token: Address,
        fungible_wasm: BytesN<32>,
        nft_wasm: BytesN<32>,
    ) -> Result<(), Error> {
        if has_admin(&env) {
            return Err(Error::ContractInitialized);
        }
        set_admin(&env, &admin);
        set_token(&env, &token);
        set_fungible_wasm(&env, &fungible_wasm);
        set_nft_wasm(&env, &nft_wasm);
        events::contract::contract_initialized(&env, &admin, &token); // TODO! Add fundgible token to event
        Ok(())
    }

    pub fn deploy(
        env: Env,
        wasm_hash: BytesN<32>,
        salt: BytesN<32>,
        constructor_args: Vec<Val>,
        token_type: TokenType,
    ) -> Result<Address, Error> {
        let deployed_address = env
            .deployer()
            .with_address(env.current_contract_address(), salt)
            .deploy_v2(wasm_hash, constructor_args.clone());

        // assumes issuer is the first argument
        let issuer_val = constructor_args.get(0).ok_or(Error::InvalidArgument)?;
        let issuer: Address =
            Address::try_from_val(&env, &issuer_val).map_err(|_| Error::InvalidArgument)?;

        register_token(&env, &issuer, &deployed_address, token_type);
        Ok(deployed_address)
    }

    pub fn deploy_sac(env: Env, issuer: Address, serialized_asset: Bytes) -> Address {
        let deployer = env.deployer().with_stellar_asset(serialized_asset);
        let _ = deployer.deployed_address();
        let sac_address = deployer.deploy();

        // 7. Register the SAC token
        register_token(&env, &issuer, &sac_address, TokenType::Sac);

        sac_address
    }

    pub fn create_fungible(
        env: Env,
        owner: Address,
        decimals: u32,
        name: String,
        symbol: String,
    ) -> Result<Address, Error> {
        let fundgible_wasm = get_fungible_wasm(&env)?;
        let salt = get_salt(&env);
        let constructor_args: Vec<Val> = vec![
            &env,
            owner.into_val(&env),
            decimals.into_val(&env),
            name.into_val(&env),
            symbol.into_val(&env),
        ];

        let deployed_address = env
            .deployer()
            .with_address(env.current_contract_address(), salt)
            .deploy_v2(fundgible_wasm, constructor_args);

        register_token(&env, &owner, &deployed_address, TokenType::Fungible);
        Ok(deployed_address)
    }

    pub fn create_nft(
        env: Env,
        owner: Address,
        base_uri: String,
        name: String,
        symbol: String,
    ) -> Result<Address, Error> {
        let fundgible_wasm = get_nft_wasm(&env)?;
        let salt = get_salt(&env);
        let constructor_args: Vec<Val> = vec![
            &env,
            owner.into_val(&env),
            base_uri.into_val(&env),
            name.into_val(&env),
            symbol.into_val(&env),
        ];

        let deployed_address = env
            .deployer()
            .with_address(env.current_contract_address(), salt)
            .deploy_v2(fundgible_wasm, constructor_args);

        register_token(&env, &owner, &deployed_address, TokenType::Nft);
        Ok(deployed_address)
    }

    // Token Registry
    pub fn get_token_info(env: Env, token_addr: Address) -> Result<RegistryEntry, Error> {
        env.storage()
            .instance()
            .get(&DataKey::TokenInfo(token_addr))
            .ok_or(Error::TokenNotFound)
    }

    pub fn get_all_tokens(env: Env) -> Result<Vec<Address>, Error> {
        env.storage()
            .instance()
            .get(&DataKey::TokenRegistry)
            .ok_or(Error::TokenNotFound)
    }

    pub fn get_fungible_metadata(env: Env, token_addr: Address) -> (String, String, u32, Address) {
        let name: String = env.invoke_contract(&token_addr, &symbol_short!("name"), Vec::new(&env));
        let symbol: String =
            env.invoke_contract(&token_addr, &symbol_short!("symbol"), Vec::new(&env));
        let decimals: u32 =
            env.invoke_contract(&token_addr, &symbol_short!("decimals"), Vec::new(&env));
        let owner: Address =
            env.invoke_contract(&token_addr, &symbol_short!("get_owner"), Vec::new(&env));

        (name, symbol, decimals, owner)
    }

    pub fn get_fungible_wasm(env: Env) -> Result<BytesN<32>, Error> {
        get_fungible_wasm(&env)
    }

    pub fn get_nft_wasm(env: Env) -> Result<BytesN<32>, Error> {
        get_nft_wasm(&env)
    }
}

// Utils function
pub fn get_salt(env: &Env) -> BytesN<32> {
    let mut data = Bytes::new(env);
    data.append(&env.current_contract_address().to_xdr(env));

    let key = DataKey::DeployNonce;
    let nonce: u64 = env.storage().instance().get(&key).unwrap_or(0);
    data.append(&nonce.to_xdr(env));
    env.storage().instance().set(&key, &(nonce + 1));

    let hash = env.crypto().sha256(&data);
    BytesN::from_array(env, &hash.to_array())
}

pub fn register_token(env: &Env, issuer: &Address, token: &Address, token_type: TokenType) {
    let entry = RegistryEntry {
        token_type,
        issuer: issuer.clone(),
    };
    env.storage()
        .instance()
        .set(&DataKey::TokenInfo(token.clone()), &entry);

    // Store list of all tokens
    let mut list: Vec<Address> = env
        .storage()
        .instance()
        .get(&DataKey::TokenRegistry)
        .unwrap_or_else(|| Vec::new(env));

    list.push_back(token.clone());

    env.storage().instance().set(&DataKey::TokenRegistry, &list);
}
```

## File: src/components/ConnectAccount.tsx

```typescript
import React from "react";
import { stellarNetwork } from "../contracts/util";
import FundAccountButton from "./FundAccountButton";
import { WalletButton } from "./WalletButton";
import NetworkPill from "./NetworkPill";
import styles from "./ConnectAccount.module.css";

const ConnectAccount: React.FC = () => {
  return (
    <div className={styles.connectAccount}>
      <WalletButton />
      {stellarNetwork !== "PUBLIC" && <FundAccountButton />}
      <NetworkPill />
    </div>
  );
};

export default ConnectAccount;
```

## File: src/components/CreateSACTokenButton.tsx

```typescript
import React, { useState } from "react";
import { CreateTokenForm } from "./CreateTokenForm";
import { Button } from "./ui/button.tsx";

export const CreateFungibleTokenButton: React.FC = () => {
  const [showCreateTokenForm, setShowCreateTokenForm] = useState(false);

  return (
    <>
      <Button onClick={() => setShowCreateTokenForm(true)}>
        Create Your Token
      </Button>

      <CreateTokenForm
        visible={showCreateTokenForm}
        onClose={() => {
          setShowCreateTokenForm(false);
        }}
      />
    </>
  );
};

export default CreateFungibleTokenButton;
```

## File: src/components/FundAccountButton.tsx

```typescript
import React, { useTransition } from "react";
import { useWallet } from "../hooks/useWallet.ts";
import { getFriendbotUrl } from "../util/friendbot";
import { useWalletBalance } from "../hooks/useWalletBalance.ts";
import { Button } from "./ui/button.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip.tsx";
import { toast } from "sonner";

const FundAccountButton: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const { isFunded, isLoading } = useWalletBalance();
  const { address } = useWallet();

  if (!address) return null;

  const handleFundAccount = () => {
    startTransition(async () => {
      try {
        const response = await fetch(getFriendbotUrl(address));

        if (response.ok) {
          toast.success("Account funded successfully!");
        } else {
          const body: unknown = await response.json();
          if (
            body !== null &&
            typeof body === "object" &&
            "detail" in body &&
            typeof body.detail === "string"
          ) {
            toast.error(`Error funding account: ${body.detail}`);
          } else {
            toast.error("Error funding account: Unknown error");
          }
        }
      } catch {
        toast.error("Error funding account. Please try again.");
      }
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          disabled={isPending || isLoading || isFunded}
          onClick={handleFundAccount}
          variant="default"
          size="sm"
        >
          Fund Account
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {isFunded
          ? "Account is already funded"
          : "Fund your account using the Stellar Friendbot"}
      </TooltipContent>
    </Tooltip>
  );
};

export default FundAccountButton;
```

## File: src/debug/components/PrettyJson.tsx

```typescript
/* eslint-disable react-x/no-nested-component-definitions */
import React, { useState } from "react";
import { Icon, Link, Loader } from "@stellar/design-system";

import { isEmptyObject } from "../util/isEmptyObject";

import { AnyObject } from "../types/types";

export type CustomKeyValueLinkMap = {
  [key: string]: {
    text?: string;
    getHref: (value: string, key?: string) => string;
    condition?: (
      val: string,
      parentKey?: string,
      isRpcResponse?: boolean,
    ) => boolean;
  };
};

type PrettyJsonProps = {
  json: unknown;
  customKeyValueLinkMap?: CustomKeyValueLinkMap;
  customValueRenderer?: (
    item: unknown,
    key: string,
    parentKey?: string,
  ) => React.ReactNode | null;
  customKeyRenderer?: (item: unknown, key: string) => React.ReactNode | null;
  isLoading?: boolean;
  isCollapsible?: boolean;
};

type Char = "{" | "}" | "[" | "]";

// CSS-in-JS styles
const styles = {
  prettyJson: {
    fontFamily: "var(--sds-ff-monospace)",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "var(--sds-fw-medium)",
    letterSpacing: "-0.5px",
  } as React.CSSProperties,
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
  } as React.CSSProperties,
  nested: {
    paddingLeft: "16px",
  } as React.CSSProperties,
  inline: {
    display: "flex",
    gap: "4px",
    position: "relative",
  } as React.CSSProperties,
  clickable: {
    cursor: "pointer",
  } as React.CSSProperties,
  valueString: {
    color: "var(--sds-clr-navy-11)",
  } as React.CSSProperties,
  valueNumber: {
    color: "var(--sds-clr-lime-11)",
  } as React.CSSProperties,
  valueBoolean: {
    color: "var(--sds-clr-pink-11)",
  } as React.CSSProperties,
  defaultColor: {
    color: "var(--sds-clr-gray-12)",
  } as React.CSSProperties,
  key: {
    whiteSpace: "nowrap",
    color: "var(--sds-clr-gray-12)",
  } as React.CSSProperties,
  expandIcon: {
    width: "20px",
    height: "20px",
    position: "absolute",
    top: "50%",
    left: "-20px",
    transform: "translate(0, -40%)",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  } as React.CSSProperties,
  expandIconSvg: {
    display: "block",
    width: "16px",
    height: "16px",
    stroke: "var(--sds-clr-gray-10)",
  } as React.CSSProperties,
  expandSize: {
    color: "var(--sds-clr-gray-09)",
    fontSize: "12px",
    marginLeft: "4px",
  } as React.CSSProperties,
  successColor: {
    color: "var(--sds-clr-green-11)",
  } as React.CSSProperties,
  errorColor: {
    color: "var(--sds-clr-red-11)",
  } as React.CSSProperties,
};

const isValidUrl = (url: string) => {
  if (!url.startsWith("http")) {
    return false;
  }

  try {
    new URL(url);
    return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return false;
  }
};

export const PrettyJson = ({
  json,
  customKeyValueLinkMap,
  customValueRenderer,
  customKeyRenderer,
  isLoading,
  isCollapsible = true,
}: PrettyJsonProps) => {
  if (typeof json !== "object") {
    return null;
  }

  const isRpcResponse = Object.keys(json as AnyObject)[0] === "jsonrpc";

  const ItemCount = ({ itemList }: { itemList: unknown[] }) => (
    <div style={styles.expandSize}>{getItemSizeLabel(itemList)}</div>
  );

  const Collapsible = ({
    itemKey,
    itemList,
    char,
    children,
  }: {
    itemKey?: string;
    itemList: unknown[];
    char: Char;
    children: React.ReactNode;
  }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const customRender =
      itemKey && customKeyRenderer
        ? customKeyRenderer(children, itemKey)
        : null;

    return (
      <div style={styles.nested}>
        <div
          style={{
            ...styles.inline,
            ...(isCollapsible ? styles.clickable : {}),
          }}
          {...(isCollapsible
            ? {
                onClick: () => setIsExpanded(!isExpanded),
              }
            : {})}
        >
          {isCollapsible ? (
            <div style={styles.expandIcon}>
              <div style={styles.expandIconSvg}>
                {isExpanded ? <Icon.MinusSquare /> : <Icon.PlusSquare />}
              </div>
            </div>
          ) : null}
          {itemKey ? <Key>{itemKey}</Key> : null}
          <Bracket char={char} isCollapsed={!isExpanded} />
          {isCollapsible ? <ItemCount itemList={itemList} /> : null}
          {customRender}
        </div>
        {isExpanded ? (
          <div>
            {children}
            <div>
              <Bracket char={getClosingChar(char)} />
              <Comma />
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  const getItemSizeLabel = (items: unknown[]) => {
    const size = items.length;
    return size === 1 ? `${size} item` : `${size} items`;
  };

  const render = (item: unknown, parentKey?: string): React.ReactElement => {
    const renderValue = (item: unknown, key: string, parentKey?: string) => {
      const custom = customKeyValueLinkMap?.[key];

      if (custom) {
        if (
          custom.condition &&
          typeof item === "string" &&
          !custom.condition(item, parentKey, isRpcResponse)
        ) {
          return render(item, key);
        }

        if (typeof item === "string") {
          const href = custom.getHref(item, key);

          return (
            <Link
              href={href || item}
              {...(href ? { target: "_blank" } : {})}
              isUnderline
            >
              {custom.text || item}
            </Link>
          );
        }
      }

      const customValue = customValueRenderer
        ? customValueRenderer(item, key, parentKey)
        : null;

      return customValue ?? render(item, key);
    };

    switch (typeof item) {
      case "object":
        return (
          <React.Fragment key={parentKey}>
            {Object.entries(item as object).map(([key, value]) => {
              const keyProp = parentKey ? `${parentKey}-${key}` : key;

              if (typeof value === "object") {
                if (value === null) {
                  return (
                    <div key={keyProp} style={styles.inline}>
                      <div style={styles.nested}>
                        <Key>{key}</Key>
                      </div>
                      <Value>
                        null
                        <Comma />
                      </Value>
                    </div>
                  );
                }

                if (Array.isArray(value)) {
                  if (value.length === 0) {
                    return (
                      <div key={keyProp} style={styles.inline}>
                        <div style={styles.nested}>
                          <Key>{key}</Key>
                        </div>
                        <Value>
                          {`[]`}
                          <Comma />
                        </Value>
                      </div>
                    );
                  }

                  // Generate a stable content-based key for array items (without using array index)
                  // Uses content hash combined with parent path to ensure uniqueness
                  const createContentHash = (item: unknown): string => {
                    try {
                      const str = JSON.stringify(item);
                      // Create a hash from the string content
                      let hash = 0;
                      for (let i = 0; i < str.length; i++) {
                        const char = str.charCodeAt(i);
                        hash = (hash << 5) - hash + char;
                        hash = hash & hash; // Convert to 32bit integer
                      }
                      return `hash-${Math.abs(hash)}`;
                    } catch {
                      // Fallback for items that can't be stringified
                      const str = String(item);
                      let hash = 0;
                      for (let i = 0; i < str.length; i++) {
                        const char = str.charCodeAt(i);
                        hash = (hash << 5) - hash + char;
                        hash = hash & hash;
                      }
                      return `str-${Math.abs(hash)}`;
                    }
                  };

                  // Track seen content hashes to handle duplicates within the same array
                  const seenHashes = new Set<string>();
                  const getUniqueKey = (item: unknown): string => {
                    const baseHash = createContentHash(item);
                    let uniqueHash = baseHash;
                    let suffix = 0;
                    // Ensure uniqueness by appending suffix if hash was seen before
                    while (seenHashes.has(uniqueHash)) {
                      suffix++;
                      uniqueHash = `${baseHash}-dup-${suffix}`;
                    }
                    seenHashes.add(uniqueHash);
                    return uniqueHash;
                  };

                  return (
                    <Collapsible
                      key={keyProp}
                      itemKey={key}
                      itemList={value}
                      char="["
                    >
                      {value.map((v) => {
                        const contentHash = getUniqueKey(v);
                        // Combine parent key path with content hash for stable, unique keys
                        let itemKey: string;
                        if (v === null) {
                          itemKey = `${keyProp}-null-${contentHash}`;
                        } else if (typeof v === "object") {
                          itemKey = `${keyProp}-obj-${contentHash}`;
                        } else {
                          // For primitives, combine value with hash
                          const valueStr = String(v);
                          itemKey = `${keyProp}-val-${valueStr}-${contentHash}`;
                        }
                        if (typeof v === "object") {
                          if (v === null) {
                            return (
                              <div key={itemKey} style={styles.nested}>
                                <Value>
                                  null
                                  <Comma />
                                </Value>
                              </div>
                            );
                          }

                          if (Array.isArray(v)) {
                            return (
                              <Collapsible
                                key={itemKey}
                                itemList={Object.keys(v)}
                                char="["
                              >
                                {v.map((v2) => {
                                  return render(v2);
                                })}
                              </Collapsible>
                            );
                          }
                          return (
                            <Collapsible
                              key={itemKey}
                              itemList={Object.keys(v as AnyObject)}
                              char="{"
                            >
                              {render(v, key)}
                            </Collapsible>
                          );
                        }

                        return (
                          <React.Fragment key={itemKey}>
                            {render(v, key)}
                          </React.Fragment>
                        );
                      })}
                    </Collapsible>
                  );
                }

                if (value && isEmptyObject(value as AnyObject)) {
                  return (
                    <div key={keyProp} style={styles.inline}>
                      <div style={styles.nested}>
                        <Key>{key}</Key>
                      </div>
                      <Value>
                        {`{}`}
                        <Comma />
                      </Value>
                    </div>
                  );
                }

                return (
                  <Collapsible
                    key={keyProp}
                    itemKey={key}
                    itemList={Object.keys(value as AnyObject)}
                    char="{"
                  >
                    {render(value, key)}
                  </Collapsible>
                );
              }

              return (
                <div key={keyProp} style={styles.inline}>
                  <div style={styles.nested}>
                    <Key>{key}</Key>
                  </div>
                  {renderValue(value, key, parentKey)}
                </div>
              );
            })}
          </React.Fragment>
        );
      case "string":
        return renderStringValue({
          item,
          parentKey,
          customValueRenderer,
        });
      case "function":
        return (
          <Value>
            {`${JSON.stringify(item)}`}
            <Comma />
          </Value>
        );
      default:
        return (
          <Value>
            <ValueType type={typeof item}>{`${item as string}`}</ValueType>
            <Comma />
          </Value>
        );
    }
  };

  if (isLoading) {
    return (
      <div style={styles.loaderContainer}>
        <Loader />
      </div>
    );
  }

  return (
    <div style={styles.prettyJson}>
      <Bracket char="{" />
      {render(json)}
      <Bracket char="}" />
    </div>
  );
};

// =============================================================================
// Components
// =============================================================================
const Key = ({ children }: { children: string }) => (
  <div style={styles.key}>
    {`"${children}"`}
    <Colon />
  </div>
);

const Value = ({
  children,
  customStyle,
}: {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
}) => <div style={{ ...styles.defaultColor, ...customStyle }}>{children}</div>;

const ValueType = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: string;
}) => {
  const getTypeStyle = () => {
    switch (type) {
      case "string":
        return styles.valueString;
      case "number":
      case "bigint":
        return styles.valueNumber;
      case "boolean":
        return styles.valueBoolean;
      default:
        return styles.defaultColor;
    }
  };

  return <span style={getTypeStyle()}>{children}</span>;
};

const Quotes = ({ isVisible = true }: { isVisible?: boolean }) =>
  isVisible ? <span style={styles.defaultColor}>{'"'}</span> : null;

const Colon = () => <span style={styles.defaultColor}>{":"}</span>;

const Comma = () => <span style={styles.defaultColor}>{","}</span>;

const Bracket = ({
  char,
  children,
  isCollapsed,
}: {
  char: Char;
  children?: React.ReactNode;
  isCollapsed?: boolean;
}) => (
  <span style={styles.defaultColor}>
    {char}
    {children}
    {isCollapsed ? `...${getClosingChar(char)}` : null}
  </span>
);

// =============================================================================
// Helpers
// =============================================================================
const getClosingChar = (char: Char) => (char === "[" ? "]" : "}");

const renderStringValue = ({
  item,
  customStyle,
  itemType,
  parentKey,
  customValueRenderer,
}: {
  item: string;
  customStyle?: React.CSSProperties;
  itemType?: "number" | "string";
  parentKey?: string;
  customValueRenderer?: (
    item: unknown,
    key: string,
    parentKey?: string,
  ) => React.ReactNode | null;
}) => {
  const customValue =
    customValueRenderer && customValueRenderer(item, "", parentKey);

  if (customValue) {
    return (
      <Value customStyle={customStyle}>
        <>{customValue}</>
        <Comma />
      </Value>
    );
  }

  let type = ["number", "bigint"].includes(typeof item) ? "number" : "string";
  let value = item;

  if (typeof item === "bigint") {
    value = BigInt(item).toString();
  }

  if (itemType) {
    type = itemType;
  }

  const valueStyle = {
    ...customStyle,
  };

  return (
    <Value customStyle={valueStyle}>
      {typeof item === "string" && isValidUrl(item) ? (
        <>
          <Quotes />
          <Link href={item} isUnderline>
            {item}
          </Link>
          <Quotes />
        </>
      ) : (
        <>
          <Quotes isVisible={type === "string"} />
          <ValueType type={type}>{value}</ValueType>
          <Quotes isVisible={type === "string"} />
        </>
      )}
      <Comma />
    </Value>
  );
};

PrettyJson.renderStringValue = renderStringValue;
```

## File: src/debug/components/RenderOneOf.tsx

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { JSONSchema7 } from "json-schema";
import { get } from "lodash";
import { Select } from "@stellar/design-system";

import { Box } from "../../components/layout/Box";

import { jsonSchema } from "../util/jsonSchema";

import {
  AnyObject,
  JsonSchemaFormProps,
  SorobanInvokeValue,
} from "../types/types";
import { renderTupleType } from "./RenderTupleType";

// oneOf is used for union and enum types
// https://github.com/stellar/js-stellar-sdk/blob/master/src/contract/spec.ts
export const renderOneOf = ({
  name,
  schema,
  path,
  parsedSorobanOperation,
  renderer,
  onChange,
  formError,
  setFormError,
}: {
  name: string;
  schema: JSONSchema7;
  path: string[];
  parsedSorobanOperation: SorobanInvokeValue;
  renderer: (props: JsonSchemaFormProps) => React.ReactNode;
  onChange: (value: SorobanInvokeValue) => void;
  formError: AnyObject;
  setFormError: (error: AnyObject) => void;
}) => {
  if (!schema?.oneOf) {
    return null;
  }

  const invokeContractBaseProps = {
    contract_id: parsedSorobanOperation.contract_id,
    function_name: parsedSorobanOperation.function_name,
  };

  const keyName = Object.keys(parsedSorobanOperation.args)[0];

  let tagName;

  if (path.length > 1) {
    tagName = get(parsedSorobanOperation.args[keyName], path.join("."))?.tag;
  } else {
    tagName = (parsedSorobanOperation.args[keyName] as AnyObject)?.tag;
  }

  const selectedSchema = schema.oneOf.find(
    (oneOf) =>
      jsonSchema.isSchemaObject(oneOf as AnyObject) &&
      (oneOf as AnyObject)?.title === tagName,
  );

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pathSegments = path[0].split(".");

    if (pathSegments.length > 1) {
      const keyName = Object.keys(parsedSorobanOperation.args)[0];

      const updatedPath =
        keyName === pathSegments[0]
          ? pathSegments.slice(1).join(".")
          : pathSegments.join(".");

      const updatedTupleList = jsonSchema.setDeepValue(
        parsedSorobanOperation.args[keyName] as AnyObject,
        updatedPath,
        {
          tag: e.target.value,
          // values: [],
        },
      );

      onChange({
        ...invokeContractBaseProps,
        args: {
          ...parsedSorobanOperation.args,
          [keyName]: updatedTupleList,
        },
      });
    } else {
      onChange({
        ...invokeContractBaseProps,
        args: {
          ...parsedSorobanOperation.args,
          [name]: {
            tag: e.target.value,
            // values: [],
          },
        },
      });
    }
  };

  return (
    <Box gap="md" key={`${path.join(".")}`}>
      <Select
        id="json-schema-form-renderer-one-of"
        fieldSize="md"
        label={name}
        value={
          (get(parsedSorobanOperation.args, path.join(".")) as AnyObject)
            ?.tag as string
        }
        onChange={onSelectChange}
      >
        {/* title is the tag */}
        <option value="">Select</option>

        {schema.oneOf.map((oneOf) => {
          if (typeof oneOf === "boolean") return null;

          // Use title as key since it should be unique, fallback to JSON string if needed
          const key = oneOf?.title || JSON.stringify(oneOf);

          return (
            <option id={oneOf?.title} value={oneOf?.title} key={key}>
              {oneOf?.title}
            </option>
          );
        })}
      </Select>

      {selectedSchema &&
      jsonSchema.isSchemaObject(selectedSchema as AnyObject) &&
      jsonSchema.isTaggedUnion(selectedSchema as JSONSchema7)
        ? renderTupleType({
            path,
            schema: selectedSchema as JSONSchema7,
            onChange,
            parsedSorobanOperation,
            renderer,
            formError,
            setFormError,
          })
        : null}
    </Box>
  );
};
```

## File: src/debug/components/RenderPrimitivesType.tsx

```typescript
import React from "react";
import { Badge, Icon, Input, Select, Text } from "@stellar/design-system";
import type { JSONSchema7 } from "json-schema";
import { get } from "lodash";

import { jsonSchema } from "../util/jsonSchema";

import { validate } from "../validate";

import { PositiveIntPicker } from "./PositiveIntPicker";

import type { AnyObject, SorobanInvokeValue } from "../types/types";
import { convertSpecTypeToScValType } from "../util/sorobanUtils";

export const renderPrimitivesType = ({
  name,
  schema,
  path,
  parsedSorobanOperation,
  onChange,
  formError,
  setFormError,
}: {
  name: string;
  schema: Partial<JSONSchema7>;
  path: string[];
  parsedSorobanOperation: SorobanInvokeValue;
  onChange: (value: SorobanInvokeValue) => void;
  formError: AnyObject;
  setFormError: (error: AnyObject) => void;
}) => {
  const { description } = schema;

  const schemaType = jsonSchema.getSchemaType(schema);

  const nestedItemLabel =
    path.length > 0 ? jsonSchema.getNestedItemLabel(path.join(".")) : path;

  const formErrorKey = [
    parsedSorobanOperation.function_name,
    path.join("."),
  ].join(".");

  const renderTypeBadge = (icon?: React.ReactNode) => (
    <Badge variant="tertiary" icon={icon}>
      {(schemaType as string).toLowerCase()}
    </Badge>
  );

  const sharedProps = {
    id: path.join("."),
    label: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "space-between",
          alignSelf: "stretch",

          width: "100%",

          gap: "0.5rem",
        }}
      >
        {renderTypeBadge()}
        <Text size="sm" as="div" weight="bold">
          {nestedItemLabel}
        </Text>
      </div>
    ),
    value:
      ((get(parsedSorobanOperation.args, path.join(".")) as AnyObject)
        ?.value as string) || "",
    error: (formError?.[formErrorKey] as string) || undefined,
  };

  const invokeContractBaseProps = {
    contract_id: parsedSorobanOperation.contract_id,
    function_name: parsedSorobanOperation.function_name,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    schemaType: string,
  ) => {
    const scValType = convertSpecTypeToScValType(schemaType);

    if (path.length > 0) {
      const updatedList = jsonSchema.setDeepValue(
        parsedSorobanOperation.args,
        path.join("."),
        {
          value: e.target.value,
          type: scValType,
        },
      );

      onChange({
        ...invokeContractBaseProps,
        args: {
          ...updatedList,
        },
      });
    } else {
      onChange({
        ...invokeContractBaseProps,
        args: {
          ...parsedSorobanOperation.args,
          [name]: { value: e.target.value, type: scValType },
        },
      });
    }
  };

  const handleValidate = (
    e: React.ChangeEvent<HTMLInputElement>,
    schemaType: string,
    validateFn?:
      | ((value: string, required?: boolean) => string | false)
      | ((value: string, required?: boolean) => string | false)[],
  ) => {
    let error;

    if (Array.isArray(validateFn)) {
      const errors = validateFn.map((fn) => fn(e.target.value));
      const hasNoError = jsonSchema.hasAnyValidationPassed(errors);

      if (schemaType === "Address") {
        error = hasNoError ? "" : "Invalid Public key or contract ID";
      } else {
        error = hasNoError ? "" : errors.join(" ");
      }
    } else {
      error = validateFn?.(e.target.value);
    }

    if (error) {
      setFormError({
        ...formError,
        [formErrorKey]: error ? error : "",
      });
    } else {
      const newFormError = { ...formError };
      delete newFormError[formErrorKey];
      setFormError(newFormError);
    }
  };

  switch (schemaType) {
    case "Address":
      return (
        <>
          <Input
            {...sharedProps}
            onChange={(e) => {
              handleChange(e, schemaType);
              handleValidate(e, schemaType, [
                validate.getPublicKeyError,
                validate.getContractIdError,
              ]);
            }}
            key={path.join(".")}
            infoText={description || ""}
            leftElement={<Icon.User03 />}
            note={<>{description}</>}
            fieldSize="md"
          />
        </>
      );
    case "U32":
      return (
        <PositiveIntPicker
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getU32Error);
          }}
        />
      );
    case "U64":
      return (
        <PositiveIntPicker
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getU64Error);
          }}
        />
      );
    case "U128":
      return (
        <PositiveIntPicker
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getU128Error);
          }}
        />
      );
    case "U256":
      return (
        <PositiveIntPicker
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getU256Error);
          }}
        />
      );
    case "I32":
      return (
        <Input
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getI32Error);
          }}
          fieldSize="md"
        />
      );
    case "I64":
      return (
        <Input
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getI64Error);
          }}
          fieldSize="md"
        />
      );
    case "I128":
      return (
        <Input
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getI128Error);
          }}
          fieldSize="md"
        />
      );
    case "I256":
      return (
        <Input
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getI256Error);
          }}
          fieldSize="md"
        />
      );
    case "Bool":
      return (
        <Select
          {...sharedProps}
          fieldSize="md"
          onChange={(e) => {
            handleChange(e, schemaType);
          }}
        >
          <option value="" disabled={true}>
            Select
          </option>
          <option value="true">true</option>
          <option value="false">false</option>
        </Select>
      );
    case "ScString":
    case "ScSymbol":
      return (
        <Input
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType);
          }}
          note={<>{description}</>}
          fieldSize="md"
        />
      );
    case "DataUrl":
      return (
        <Input
          {...sharedProps}
          key={path.join(".")}
          onChange={(e) => {
            handleChange(e, schemaType);
            handleValidate(e, schemaType, validate.getDataUrlError);
          }}
          fieldSize="md"
        />
      );
    default:
      return null;
  }
};
```

## File: src/debug/util/getWasmContractData.ts

```typescript
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as StellarXdr from "./StellarXdr";
import { prettifyJsonString } from "./prettifyJsonString";
import {
  CONTRACT_SECTIONS,
  ContractData,
  ContractSectionName,
} from "../types/types";

export const getWasmContractData = async (wasmBytes: Buffer) => {
  try {
    // Convert Buffer to ArrayBuffer for WebAssembly.compile
    // Create a new ArrayBuffer copy to avoid SharedArrayBuffer issues
    const wasmArrayBuffer = new Uint8Array(wasmBytes).buffer;
    const mod = await WebAssembly.compile(wasmArrayBuffer);

    const result: Record<ContractSectionName, ContractData> = {
      contractmetav0: {},
      contractenvmetav0: {},
      contractspecv0: {},
    };

    // Make sure the StellarXdr is available
    await StellarXdr.initialize();

    for (const sectionName of CONTRACT_SECTIONS) {
      const sections = WebAssembly.Module.customSections(mod, sectionName);

      if (sections.length > 0) {
        for (let i = 0; i < sections.length; i++) {
          const sectionData = sectionResult(sectionName, sections[i]);

          if (sectionData) {
            result[sectionName] = sectionData;
          }
        }
      }
    }

    return result;
  } catch (e) {
    console.error("Error getting wasm contract data:", e);
    return null;
  }
};

const sectionResult = (
  sectionName: ContractSectionName,
  section: ArrayBuffer,
) => {
  const sectionData = new Uint8Array(section);
  const sectionXdr = Buffer.from(sectionData).toString("base64");
  const { json, xdr } = getJsonAndXdr(sectionName, sectionXdr);

  return {
    xdr,
    json,
    // TODO: add text format
  };
};

const TYPE_VARIANT: Record<ContractSectionName, string> = {
  contractenvmetav0: "ScEnvMetaEntry",
  contractmetav0: "ScMetaEntry",
  contractspecv0: "ScSpecEntry",
};

const getJsonAndXdr = (sectionName: ContractSectionName, xdr: string) => {
  try {
    const jsonStringArray = StellarXdr.decode_stream(
      TYPE_VARIANT[sectionName],
      xdr,
    );

    return {
      json: jsonStringArray.map((s: string) => prettifyJsonString(s)),
      xdr: jsonStringArray.map((s: string) =>
        StellarXdr.encode(TYPE_VARIANT[sectionName], s),
      ),
    };
  } catch (e) {
    return { json: [], xdr: [] };
  }
};
```

## File: src/debug/util/loadContractMetada.ts

```typescript
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Server } from "@stellar/stellar-sdk/rpc";
import { network } from "../../contracts/util";
import { Contract } from "@stellar/stellar-sdk";
import { decode_stream, encode, initialize } from "./StellarXdr";
import {
  CONTRACT_SECTIONS,
  ContractData,
  ContractSectionName,
} from "../types/types";
import { prettifyJsonString } from "./prettifyJsonString";

export interface ContractMetadata {
  contractmetav0?: { [key: string]: string };
  contractenvmetav0?: { [key: string]: string };
  wasmHash?: string;
  wasmBinary?: string;
}

export const loadContractMetadata = async (contractId: string) => {
  try {
    const wasmHash = await loadWasmHash(contractId);
    if (!wasmHash) {
      throw new Error(`Failed to load WASM hash for contract ${contractId}`);
    }
    const wasm = await loadWasmBinary(wasmHash);
    if (!wasm) {
      throw new Error(`Failed to load WASM binary for hash ${wasmHash}`);
    }

    const wasmData = await getWasmContractData(wasm);

    const metadata = {
      contractmetav0:
        wasmData && wasmData.contractmetav0
          ? (wasmData.contractmetav0 as unknown)
          : undefined,

      contractenvmetav0:
        wasmData && wasmData.contractenvmetav0
          ? (wasmData.contractenvmetav0 as unknown)
          : undefined,
      wasmHash,
      wasmBinary: wasm.toString("hex"),
    };

    return { ...metadata } as ContractMetadata;
  } catch (error) {
    console.error(`Failed to load contract metadata for ${contractId}:`, error);
    return {};
  }
};

const loadWasmHash = async (contractId: string) => {
  try {
    const server = new Server(network.rpcUrl, { allowHttp: true });

    const contractLedgerKey = new Contract(contractId).getFootprint();
    const response = await server.getLedgerEntries(contractLedgerKey);
    if (!response.entries.length || !response.entries[0]?.val) {
      throw new Error(`No entries found for contract ${contractId}`);
    }
    const wasmHash = response.entries[0].val
      .contractData()
      .val()
      .instance()
      .executable()
      .wasmHash()
      .toString("hex");

    return wasmHash;
  } catch (error) {
    console.error(`Failed to load contract metadata for ${contractId}:`, error);
    return null;
  }
};

const loadWasmBinary = async (wasmHash: string) => {
  try {
    const server = new Server(network.rpcUrl, { allowHttp: true });

    return await server.getContractWasmByHash(wasmHash, "hex");
  } catch (error) {
    console.error(`Failed to load contract metadata for ${wasmHash}:`, error);
    return null;
  }
};

export const getWasmContractData = async (wasmBytes: Buffer) => {
  try {
    // Convert Buffer to ArrayBuffer for WebAssembly.compile
    // Create a new ArrayBuffer copy to avoid SharedArrayBuffer issues
    const wasmArrayBuffer = new Uint8Array(wasmBytes).buffer;
    const mod = await WebAssembly.compile(wasmArrayBuffer);
    const result: Record<ContractSectionName, ContractData> = {
      contractmetav0: {},
      contractenvmetav0: {},
      contractspecv0: {},
    };

    // Make sure the StellarXdr is available
    await initialize();

    for (const sectionName of CONTRACT_SECTIONS) {
      const sections = WebAssembly.Module.customSections(mod, sectionName);

      if (sections.length > 0) {
        for (let i = 0; i < sections.length; i++) {
          const sectionData = sectionResult(sectionName, sections[i]);

          if (sectionData) {
            let sectionContent = {};
            sectionData.json.forEach((json) => {
              const sectionDataJson = JSON.parse(json);
              Object.keys(sectionDataJson).map((key) =>
                sectionDataJson[key].key
                  ? (sectionContent = {
                      ...sectionContent,

                      [sectionDataJson[key].key]: sectionDataJson[key].val,
                    })
                  : Object.keys(sectionDataJson[key]).map((innerKey) => {
                      sectionContent = {
                        ...sectionContent,
                        [innerKey]: sectionDataJson[key][innerKey],
                      };
                    }),
              );
            });

            result[sectionName] = {
              ...result[sectionName],
              ...sectionContent,
            };
          }
        }
      }
    }

    return result;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return null;
  }
};

const sectionResult = (
  sectionName: ContractSectionName,
  section: ArrayBuffer,
) => {
  const sectionData = new Uint8Array(section);
  const sectionXdr = Buffer.from(sectionData).toString("base64");
  const { json, xdr } = getJsonAndXdr(sectionName, sectionXdr);

  return {
    xdr,
    json,
    // TODO: add text format
  };
};

const TYPE_VARIANT: Record<ContractSectionName, string> = {
  contractenvmetav0: "ScEnvMetaEntry",
  contractmetav0: "ScMetaEntry",
  contractspecv0: "ScSpecEntry",
};

const getJsonAndXdr = (sectionName: ContractSectionName, xdr: string) => {
  try {
    const jsonStringArray = decode_stream(TYPE_VARIANT[sectionName], xdr);

    return {
      json: jsonStringArray.map((s) => prettifyJsonString(s)),
      xdr: jsonStringArray.map((s) => encode(TYPE_VARIANT[sectionName], s)),
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { json: [], xdr: [] };
  }
};
```

## File: src/hooks/useSubscription.ts

```typescript
import * as React from "react";
import { Server, Api } from "@stellar/stellar-sdk/rpc";
import { xdr } from "@stellar/stellar-sdk";
import { rpcUrl, stellarNetwork } from "../contracts/util";

/**
 * Concatenated `${contractId}:${topic}`
 */
type PagingKey = string;

/**
 * Paging tokens for each contract/topic pair. These can be mutated directly,
 * rather than being stored as state within the React hook.
 */
const paging: Record<
  PagingKey,
  { lastLedgerStart?: number; pagingToken?: string }
> = {};

// NOTE: Server is configured using envvars which shouldn't change during runtime
const server = new Server(rpcUrl, { allowHttp: stellarNetwork === "LOCAL" });

/**
 * Subscribe to events for a given topic from a given contract, using a library
 * generated with `soroban contract bindings typescript`.
 *
 * Someday such generated libraries will include functions for subscribing to
 * the events the contract emits, but for now you can copy this hook into your
 * React project if you need to subscribe to events, or adapt this logic for
 * non-React use.
 */
export function useSubscription(
  contractId: string,
  topic: string,
  onEvent: (event: Api.EventResponse) => void,
  pollInterval = 5000,
) {
  const id = `${contractId}:${topic}`;
  paging[id] = paging[id] || {};

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    let stop = false;

    async function pollEvents(): Promise<void> {
      try {
        if (!paging[id].lastLedgerStart) {
          const latestLedgerState = await server.getLatestLedger();
          paging[id].lastLedgerStart = latestLedgerState.sequence;
        }

        const response = await server.getEvents({
          startLedger: !paging[id].pagingToken
            ? paging[id].lastLedgerStart
            : undefined,
          cursor: paging[id].pagingToken,
          filters: [
            {
              contractIds: [contractId],
              topics: [[xdr.ScVal.scvSymbol(topic).toXDR("base64")]],
              type: "contract",
            },
          ],
          limit: 10,
        });

        if (response.latestLedger) {
          paging[id].lastLedgerStart = response.latestLedger;
        }
        if (response.events) {
          response.events.forEach((event) => {
            try {
              onEvent(event);
            } catch (error) {
              console.error(
                "Poll Events: subscription callback had error: ",
                error,
              );
            }
          });
          // Clear pagingToken after processing events to start from latestLedger on next poll
          // This ensures we don't miss any events while polling
          paging[id].pagingToken = undefined;
        }
      } catch (error) {
        console.error("Poll Events: error: ", error);
      } finally {
        if (!stop) {
          timeoutId = setTimeout(() => void pollEvents(), pollInterval);
        }
      }
    }

    void pollEvents();

    return () => {
      if (timeoutId != null) clearTimeout(timeoutId);
      stop = true;
    };
  }, [contractId, topic, onEvent, id, pollInterval]);
}
```

## File: src/hooks/useTokenCreation.ts

```typescript
// Token Creation Hook
import { useState, useEffect, useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { useWallet } from "./useWallet";
import { networkPassphrase } from "../contracts/util";
import {
  prepareToken,
  checkTokenStatus,
  getEmissionXDR,
  submitSignedTransaction,
  executeDistribution,
} from "../services/tokenCreation";
import type {
  TokenCreationFormData,
  TokenCreationState,
} from "../types/tokenCreation";

const INITIAL_STATE: TokenCreationState = {
  step: 1,
  loading: false,
  loadingMessage: null,
  error: null,
  tokenData: null,
  distributionAccount: null,
  emissionXDR: null,
  trustlineTxHash: null,
  emissionTxHash: null,
  distributionTxHash: null,
  artistAmount: null,
  platformAmount: null,
};

export function useTokenCreation() {
  const { address, signTransaction } = useWallet();
  const [state, setState] = useState<TokenCreationState>(INITIAL_STATE);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear polling on unmount
  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
      if (pollingTimeoutRef.current) {
        clearTimeout(pollingTimeoutRef.current);
      }
    };
  }, []);

  const reset = useCallback(() => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
    if (pollingTimeoutRef.current) {
      clearTimeout(pollingTimeoutRef.current);
      pollingTimeoutRef.current = null;
    }
    setState(INITIAL_STATE);
  }, []);

  const setError = useCallback((error: string | null) => {
    setState((prev) => ({
      ...prev,
      error,
      loading: false,
      loadingMessage: null,
    }));
  }, []);

  const setLoading = useCallback(
    (loading: boolean, message: string | null = null) => {
      setState((prev) => ({ ...prev, loading, loadingMessage: message }));
    },
    [],
  );

  // Step 1: Verify wallet connection
  const checkWalletConnection = useCallback((): boolean => {
    if (!address) {
      setError("Please connect your wallet first");
      return false;
    }
    return true;
  }, [address, setError]);

  // Step 3 & 4: Poll for trustline creation
  const startTrustlinePolling = useCallback(
    (tokenCode: string, artistPublicKey: string) => {
      // Clear any existing polling
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
      if (pollingTimeoutRef.current) {
        clearTimeout(pollingTimeoutRef.current);
        pollingTimeoutRef.current = null;
      }

      // Set loading state for polling
      setState((prev) => ({
        ...prev,
        loading: true,
        loadingMessage: "Waiting for trustline creation...",
      }));

      const poll = async () => {
        try {
          const status = await checkTokenStatus(tokenCode, artistPublicKey);

          if (status.status === "trustline_created") {
            // Clear polling
            if (pollingIntervalRef.current) {
              clearInterval(pollingIntervalRef.current);
              pollingIntervalRef.current = null;
            }
            if (pollingTimeoutRef.current) {
              clearTimeout(pollingTimeoutRef.current);
              pollingTimeoutRef.current = null;
            }

            setState((prev) => ({
              ...prev,
              step: 4,
              loading: false,
              loadingMessage: null,
              trustlineTxHash: status.trustlineTxHash || null,
            }));
          } else if (status.status === "failed") {
            setError("Token creation failed. Please try again.");
            if (pollingIntervalRef.current) {
              clearInterval(pollingIntervalRef.current);
              pollingIntervalRef.current = null;
            }
            if (pollingTimeoutRef.current) {
              clearTimeout(pollingTimeoutRef.current);
              pollingTimeoutRef.current = null;
            }
          }
        } catch (error) {
          // Don't set error on polling failures, just log
          console.error("Error checking token status:", error);
        }
      };

      // Poll immediately, then every 2 seconds
      void poll();
      pollingIntervalRef.current = setInterval(() => {
        void poll();
      }, 2000);

      // Timeout after 60 seconds
      pollingTimeoutRef.current = setTimeout(() => {
        if (pollingIntervalRef.current) {
          clearInterval(pollingIntervalRef.current);
          pollingIntervalRef.current = null;
        }
        setError("Trustline creation timed out. Please try again.");
      }, 60000);
    },
    [setError],
  );

  // Step 2: Prepare token (create distribution account)
  const handlePrepareToken = useCallback(
    async (formData: TokenCreationFormData) => {
      if (!address) {
        setError("Wallet not connected");
        return;
      }

      // Immediately move to step 3 and show loading
      setState((prev) => ({
        ...prev,
        step: 3,
        loading: true,
        loadingMessage: "Preparing token and creating distribution account...",
        error: null,
      }));

      // Small delay to ensure React renders the loading state
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Record start time to ensure minimum loading display
      const startTime = Date.now();
      const minLoadingTime = 1000; // Minimum 1 second to show loading

      try {
        const platformFeeBps = Math.round(formData.platformFee * 100); // Convert percentage to basis points

        const params = {
          artistPublicKey: address,
          tokenCode: formData.tokenCode.toUpperCase(),
          tokenName: formData.tokenName,
          totalSupply: formData.totalSupply,
          platformFeeBps,
          description: formData.description || undefined,
        };

        const response = await prepareToken(params);

        // Ensure minimum loading time has passed
        const elapsed = Date.now() - startTime;
        if (elapsed < minLoadingTime) {
          await new Promise((resolve) =>
            setTimeout(resolve, minLoadingTime - elapsed),
          );
        }

        // Check if trustline was created automatically
        if (response.trustlineTxHash) {
          // Trustline created successfully, skip to step 4
          setState((prev) => ({
            ...prev,
            step: 4,
            loading: false,
            loadingMessage: null,
            tokenData: params,
            distributionAccount: response.distributionAccount,
            trustlineTxHash: response.trustlineTxHash || null,
          }));
        } else if (response.warning) {
          // Trustline creation failed, but token was created - poll for status
          setState((prev) => ({
            ...prev,
            step: 3,
            loading: true, // Keep loading true for polling
            tokenData: params,
            distributionAccount: response.distributionAccount,
          }));
          // Start polling for trustline status
          startTrustlinePolling(formData.tokenCode.toUpperCase(), address);
        } else {
          // No trustline hash and no warning - start polling
          setState((prev) => ({
            ...prev,
            step: 3,
            loading: true, // Keep loading true for polling
            tokenData: params,
            distributionAccount: response.distributionAccount,
          }));
          // Start polling for trustline status
          startTrustlinePolling(formData.tokenCode.toUpperCase(), address);
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to prepare token";
        setError(errorMessage);
      }
    },
    [address, setError, startTrustlinePolling],
  );

  // Step 4: Get XDR and sign emission transaction
  const handleSignEmission = useCallback(async () => {
    if (!address || !state.tokenData) {
      setError("Missing required data");
      return;
    }

    if (!signTransaction) {
      setError("Wallet signing not available");
      return;
    }

    setLoading(true, "Getting emission transaction...");
    setError(null);

    try {
      // Get XDR from backend
      const xdrResponse = await getEmissionXDR(
        address,
        state.tokenData.tokenCode,
        state.tokenData.totalSupply,
      );

      setState((prev) => ({ ...prev, emissionXDR: xdrResponse.xdr }));

      // Sign transaction with wallet
      setLoading(true, "Please sign the transaction in your wallet...");
      const signedResult = await signTransaction(xdrResponse.xdr, {
        address: address,
        networkPassphrase: networkPassphrase,
      });

      if (!signedResult.signedTxXdr) {
        throw new Error("Transaction signing failed");
      }

      // Submit signed transaction
      setLoading(true, "Submitting signed transaction...");
      const submitResponse = await submitSignedTransaction(
        signedResult.signedTxXdr,
        state.tokenData.tokenCode,
        address,
      );

      setState((prev) => ({
        ...prev,
        step: 5,
        loading: false,
        loadingMessage: null,
        emissionTxHash: submitResponse.txHash,
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to sign emission transaction";
      setError(errorMessage);
    }
  }, [address, state.tokenData, signTransaction, setError, setLoading]);

  // Step 5: Execute distribution (with trustline creation if needed)
  const handleExecuteDistribution = useCallback(async () => {
    console.log("handleExecuteDistribution called", {
      address,
      tokenData: state.tokenData,
    });

    if (!address || !state.tokenData) {
      console.error("Missing required data", {
        address,
        tokenData: state.tokenData,
      });
      setError("Missing required data");
      return;
    }

    console.log("Setting loading state...");
    // Force synchronous state update to ensure loading is visible immediately
    // eslint-disable-next-line react-dom/no-flush-sync
    flushSync(() => {
      setState((prev) => ({
        ...prev,
        loading: true,
        loadingMessage: "Executing distribution...",
        error: null,
      }));
    });

    console.log("Loading state set, waiting for render...");
    // Small delay to ensure React renders the loading state
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Record start time to ensure minimum loading display
    const startTime = Date.now();
    const minLoadingTime = 1000; // Minimum 1 second to show loading

    try {
      console.log("Calling executeDistribution API...", {
        address,
        tokenCode: state.tokenData.tokenCode,
      });
      const distributionResponse = await executeDistribution(
        address,
        state.tokenData.tokenCode,
      );

      // Ensure minimum loading time has passed
      const elapsed = Date.now() - startTime;
      if (elapsed < minLoadingTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minLoadingTime - elapsed),
        );
      }

      console.log("Distribution completed:", distributionResponse);
      setState((prev) => ({
        ...prev,
        step: 6,
        loading: false,
        loadingMessage: null,
        distributionTxHash: distributionResponse.transactionHash,
        artistAmount: distributionResponse.artistAmount,
        platformAmount: distributionResponse.platformAmount,
      }));

      // Log transaction URLs if available
      if (distributionResponse.transactionUrl) {
        console.log(
          "Distribution transaction URL:",
          distributionResponse.transactionUrl,
        );
      }
      if (distributionResponse.assetUrl) {
        console.log("Asset URL:", distributionResponse.assetUrl);
      }
      if (distributionResponse.message) {
        console.log("Distribution message:", distributionResponse.message);
      }
    } catch (error: unknown) {
      // Note: Artist (issuer) cannot receive their own tokens in Stellar
      // The distribution function has been updated to handle this correctly
      // It will only send platform fee to treasury and keep artist share in distribution account

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to execute distribution";
      console.error("Distribution error:", error);
      setError(errorMessage);
    }
  }, [address, state.tokenData, setError]);

  // Navigate to step
  const goToStep = useCallback((step: number) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  return {
    state,
    reset,
    setError,
    setLoading,
    checkWalletConnection,
    handlePrepareToken,
    handleSignEmission,
    handleExecuteDistribution,
    goToStep,
  };
}
```

## File: src/pages/Debugger.tsx

```typescript
import React, { useState, useEffect } from "react";
import { Layout, Code, Card, Button, Input } from "@stellar/design-system";
import { Client } from "@stellar/stellar-sdk/contract";
import { ContractForm } from "../debug/components/ContractForm.tsx";
import { Box } from "../components/layout/Box.tsx";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContracts } from "../debug/hooks/useContracts.ts";
import RenderContractMetadata from "../debug/components/RenderContractMetadata.tsx";

const Debugger: React.FC = () => {
  const { data, isLoading } = useContracts();
  const contractMap = data?.loadedContracts ?? {};
  const failedContracts = data?.failed ?? {};
  const navigate = useNavigate();

  const [selectedContract, setSelectedContract] = useState<string>("");
  const [isDetailExpanded, setIsDetailExpanded] = useState(false);
  const { contractName } = useParams<{ contractName?: string }>();

  const contractKeys = Array.from(
    new Set([...Object.keys(contractMap), ...Object.keys(failedContracts)]),
  );
  useEffect(() => {
    if (!isLoading && contractKeys.length > 0) {
      if (contractName && contractKeys.includes(contractName)) {
        setSelectedContract(contractName);
      } else {
        setSelectedContract(contractKeys[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractName, isLoading, contractKeys.join(",")]);

  useEffect(() => {
    if (!isLoading && contractKeys.length > 0) {
      if (contractName && contractKeys.includes(contractName)) {
        setSelectedContract(contractName);
      } else if (!contractName) {
        // Redirect to the first contract if no contractName in URL
        void navigate(`/debug/${contractKeys[0]}`, { replace: true });
      } else {
        setSelectedContract(contractKeys[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractName, isLoading, contractKeys.join(",")]);

  if (isLoading) {
    return (
      <Layout.Content>
        <Layout.Inset>
          <p>Loading contracts...</p>
        </Layout.Inset>
      </Layout.Content>
    );
  }

  if (contractKeys.length === 0) {
    return (
      <Layout.Content>
        <Layout.Inset>
          <p>No contracts found in src/contracts/</p>
          <p>
            Do you have any contracts defined in your root{" "}
            <Code size="sm">contracts</Code> folder, and defined in your
            environments.toml file?
          </p>
          <p>
            Use <Code size="sm">stellar scaffold generate contract</Code> to
            install contracts from the{" "}
            <a href="https://github.com/OpenZeppelin/stellar-contracts">
              OpenZeppelin Stellar Contracts
            </a>{" "}
            repository, or visit the{" "}
            <a href="https://wizard.openzeppelin.com/stellar">
              OpenZeppelin Wizard
            </a>{" "}
            to interactively build your contract.
          </p>
        </Layout.Inset>
      </Layout.Content>
    );
  }

  return (
    <Layout.Content>
      {/* Top Info Box */}
      <Layout.Inset>
        <h2>Debug Contracts</h2>
        <p>
          You can debug & interact with your deployed contracts here. Check{" "}
          <Code size="md">src/contracts/*.ts</Code>
        </p>
        <hr />
      </Layout.Inset>

      {/* Contract Selector Pills */}
      <Layout.Inset>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "1rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          {contractKeys.map((key) => (
            <NavLink
              key={key}
              to={`/debug/${key}`}
              style={{
                textDecoration: "none",
              }}
            >
              {({ isActive }) => (
                <Button variant={isActive ? "primary" : "tertiary"} size="sm">
                  {key}
                </Button>
              )}
            </NavLink>
          ))}
        </div>
      </Layout.Inset>

      {/* Show error or contract details */}
      {(!selectedContract ||
        (!contractMap[selectedContract] &&
          !failedContracts[selectedContract])) && (
        <Layout.Inset>
          <p>No contract selected or contract not found.</p>
        </Layout.Inset>
      )}

      {failedContracts[selectedContract] && (
        <Layout.Inset>
          <h2>{selectedContract}</h2>
          <p style={{ color: "red" }}>
            Failed to import contract: {failedContracts[selectedContract]}
          </p>
        </Layout.Inset>
      )}

      {contractMap[selectedContract] && (
        <>
          <Layout.Inset>
            <div style={{ marginTop: "0 2rem" }}>
              <div style={{ display: "flex", flexFlow: "column", gap: "1rem" }}>
                {/* Contract detail card */}
                <div
                  style={{
                    flexBasis: "30%",
                    minWidth: "100%",
                    alignSelf: "flex-start",
                  }}
                >
                  <Card variant="primary">
                    <Box gap="md">
                      <h3>{selectedContract}</h3>

                      <Input
                        label="Contract ID"
                        id="contract-id"
                        fieldSize="md"
                        copyButton={{
                          position: "right",
                        }}
                        readOnly
                        value={
                          (
                            contractMap[selectedContract]
                              ?.default as unknown as Client
                          )?.options?.contractId || ""
                        }
                      />

                      {isDetailExpanded && (
                        <>
                          <RenderContractMetadata
                            metadata={contractMap[selectedContract]?.metadata}
                          />
                        </>
                      )}
                    </Box>
                    <Button
                      variant="tertiary"
                      size="sm"
                      onClick={() => setIsDetailExpanded(!isDetailExpanded)}
                      style={{ justifySelf: "flex-end", marginTop: "1rem" }}
                    >
                      {isDetailExpanded ? "Hide Details" : "Show Details"}
                    </Button>
                  </Card>
                </div>

                {/* Contract methods and interactions */}
                <div style={{ flex: 1 }}>
                  <ContractForm
                    key={selectedContract}
                    contractClient={contractMap[selectedContract]?.default}
                    contractClientError={null}
                  />
                </div>
              </div>
            </div>
          </Layout.Inset>{" "}
        </>
      )}
    </Layout.Content>
  );
};

export default Debugger;
```

## File: src/types/tokenCreation.ts

```typescript
// Token Creation Types

export interface TokenCreationParams {
  artistPublicKey: string;
  tokenCode: string;
  tokenName: string;
  totalSupply: string;
  platformFeeBps?: number; // basis points (1000 = 10%)
  description?: string;
  image?: string;
}

export interface PrepareTokenResponse {
  success: boolean;
  distributionAccount: string;
  tokenId?: string;
  trustlineTxHash?: string; // Trustline transaction hash if created automatically
  warning?: string; // Warning message if trustline creation failed
}

export interface TokenStatusResponse {
  status: TokenStatus;
  tokenCode: string;
  tokenName: string;
  totalSupply: string;
  artistAmount?: string;
  platformAmount?: string;
  createdAt?: string;
  distributedAt?: string;
  trustlineTxHash?: string;
  emissionTxHash?: string;
  distributionTxHash?: string;
}

export type TokenStatus =
  | "created"
  | "trustline_created"
  | "tokens_emitted"
  | "distributed"
  | "failed";

export interface EmissionXDRResponse {
  success: boolean;
  xdr: string;
}

export interface SubmitSignedResponse {
  success: boolean;
  txHash: string;
}

export interface DistributionResponse {
  success: boolean;
  artistAmount: string;
  platformAmount: string;
  transactionHash: string;
  transactionUrl?: string;
  assetUrl?: string;
  distributionAccount?: string;
  platformTreasury?: string;
  sellOffer?: {
    amount: string;
    price: string;
    selling: string;
    buying: string;
    note: string;
  };
  operationsCount?: number;
  note?: string;
  message?: string;
}

export interface TokenCreationState {
  step: number;
  loading: boolean;
  loadingMessage: string | null;
  error: string | null;
  tokenData: TokenCreationParams | null;
  distributionAccount: string | null;
  emissionXDR: string | null;
  trustlineTxHash: string | null;
  emissionTxHash: string | null;
  distributionTxHash: string | null;
  artistAmount: string | null;
  platformAmount: string | null;
}

export interface TokenCreationFormData {
  tokenCode: string;
  tokenName: string;
  totalSupply: string;
  description: string;
  platformFee: number; // percentage (10 = 10%)
}
```

## File: src/util/storage.ts

```typescript
/**
 * A typed wrapper around localStorage largely borrowed from (but less capable
 * than) https://www.npmjs.com/package/typed-local-store
 *
 * Provides a fully-typed interface to localStorage, and is easy to modify for other storage strategies (i.e. sessionStorage)
 */

/**
 * Valid localStorage key names mapped to an arbitrary value of the correct
 * type. Used to provide both good typing AND good type-ahead, so that you can
 * see a list of valid storage keys while using this module elsewhere.
 */
type Schema = {
  walletId: string;
  walletAddress: string;
  walletNetwork: string;
  networkPassphrase: string;
  profileType: string;
};

/**
 * Typed interface that follows the Web Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 *
 * Implementation has been borrowed and simplified from https://www.npmjs.com/package/typed-local-store
 */
class TypedStorage<T> {
  private readonly storage: Storage;

  constructor() {
    this.storage = localStorage;
  }

  public get length(): number {
    return this.storage?.length;
  }

  public key<U extends keyof T>(index: number): U {
    return this.storage?.key(index) as U;
  }

  public getItem<U extends keyof T>(
    key: U,
    retrievalMode: "fail" | "raw" | "safe" = "fail",
  ): T[U] | null {
    const item = this.storage?.getItem(key.toString());

    if (item == null) {
      return item;
    }

    try {
      return JSON.parse(item) as T[U];
    } catch (error) {
      switch (retrievalMode) {
        case "safe":
          return null;
        case "raw":
          return item as unknown as T[U];
        default:
          throw error;
      }
    }
  }

  public setItem<U extends keyof T>(key: U, value: T[U]): void {
    this.storage?.setItem(key.toString(), JSON.stringify(value));
  }

  public removeItem<U extends keyof T>(key: U): void {
    this.storage?.removeItem(key.toString());
  }

  public clear(): void {
    this.storage?.clear();
  }
}

/**
 * Fully-typed wrapper around localStorage
 */
export default new TypedStorage<Schema>();
```

## File: supabase/functions/distribute/index.ts

```typescript
// Distribute - Execute token distribution to artist and platform
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  decryptSecret,
  BASE_FEE,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const PLATFORM_TREASURY = Deno.env.get("PLATFORM_TREASURY_PUBLIC_KEY")!;
const { server, networkPassphrase } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const { artistPublicKey, tokenCode } = await req.json();

    if (!artistPublicKey || !tokenCode) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: artistPublicKey, tokenCode",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!PLATFORM_TREASURY) {
      return new Response(
        JSON.stringify({ error: "Platform treasury not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Normalize token code to uppercase
    const tokenCodeUpper = tokenCode.toUpperCase();

    // Get token data from database
    const { data: tokenData, error } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCodeUpper)
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (error || !tokenData) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (tokenData.status !== "tokens_emitted") {
      if (tokenData.status === "distributed") {
        return new Response(
          JSON.stringify({
            error: "Distribution already completed",
            message: "This token has already been distributed.",
            currentStatus: tokenData.status,
            distributionTxHash: tokenData.distribution_tx_hash,
            distributedAt: tokenData.distributed_at,
            platformAmount: tokenData.platform_amount,
            artistAmount: tokenData.artist_amount,
          }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      return new Response(
        JSON.stringify({
          error:
            "Token is not ready for distribution. Tokens must be emitted first.",
          currentStatus: tokenData.status,
          requiredStatus: "tokens_emitted",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Check if distribution was already completed (double-check)
    if (tokenData.distribution_tx_hash) {
      console.log(
        "⚠️ Warning: Distribution transaction hash already exists:",
        tokenData.distribution_tx_hash,
      );
      console.log(
        "This token may have already been distributed. Checking transaction...",
      );

      // Optionally, you could verify the transaction exists on-chain here
      // For now, we'll just log a warning and proceed with the check above
    }

    // Get Stellar SDK classes
    const Keypair = getStellarClass("Keypair");
    const Asset = getStellarClass("Asset");
    const TransactionBuilder = getStellarClass("TransactionBuilder");
    const Operation = getStellarClass("Operation");
    const Memo = getStellarClass("Memo");

    if (!Keypair || !Asset || !TransactionBuilder || !Operation || !Memo) {
      throw new Error("Required Stellar SDK classes not found");
    }

    // Helper to get native XLM asset
    // In Stellar SDK, native XLM is created using Asset.native() static method
    // Since we're using getStellarClass which returns the class constructor,
    // we need to access the static method through StellarSdk namespace
    const getNativeAsset = () => {
      try {
        // Method 1: Access through StellarSdk namespace (most reliable)
        // The StellarSdk namespace has the Asset class with native() static method
        if (StellarSdk && (StellarSdk as any).Asset) {
          const StellarAsset = (StellarSdk as any).Asset;
          if (typeof StellarAsset.native === "function") {
            const nativeAsset = StellarAsset.native();
            console.log(
              "✅ Native XLM asset created via StellarSdk.Asset.native()",
            );
            return nativeAsset;
          }
        }

        // Method 2: Try accessing through the Asset class we got from getStellarClass
        // Note: getStellarClass might return the constructor, but native() might be on the namespace
        if (Asset && typeof (Asset as any).native === "function") {
          const nativeAsset = (Asset as any).native();
          console.log("✅ Native XLM asset created via Asset.native()");
          return nativeAsset;
        }

        // Method 3: Try to access through prototype or static properties
        const AssetConstructor = Asset.constructor || Asset;
        if (
          AssetConstructor &&
          typeof (AssetConstructor as any).native === "function"
        ) {
          const nativeAsset = (AssetConstructor as any).native();
          console.log(
            "✅ Native XLM asset created via AssetConstructor.native()",
          );
          return nativeAsset;
        }

        // Method 4: Last resort - try to inspect StellarSdk structure
        console.warn(
          "⚠️ Could not find Asset.native() method. Inspecting StellarSdk structure...",
        );
        console.log("StellarSdk keys:", Object.keys(StellarSdk || {}));
        console.log("Asset type:", typeof Asset);
        console.log(
          "Asset properties:",
          Object.getOwnPropertyNames(Asset || {}),
        );

        // If all else fails, we'll need to construct it manually
        // But this is not recommended as it may not work correctly
        throw new Error(
          "Could not create native XLM asset: Asset.native() method not found",
        );
      } catch (error) {
        console.error("Error creating native asset:", error);
        throw new Error(
          `Failed to create native XLM asset: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    };

    // Decrypt distribution secret
    let distributionSecret: string;
    try {
      distributionSecret = await decryptSecret(
        tokenData.distribution_secret_encrypted,
      );
      console.log(
        "Distribution secret decrypted successfully, length:",
        distributionSecret.length,
      );
    } catch (decryptError) {
      console.error("Failed to decrypt distribution secret:", decryptError);
      const errorMessage =
        decryptError instanceof Error
          ? decryptError.message
          : String(decryptError);
      return new Response(
        JSON.stringify({
          error: "Failed to decrypt distribution secret",
          message: errorMessage,
          hint: "This may indicate an ENCRYPTION_KEY mismatch between prepare-token and distribute functions. Ensure the same ENCRYPTION_KEY is used for both.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate secret format before creating keypair
    if (!distributionSecret || typeof distributionSecret !== "string") {
      return new Response(
        JSON.stringify({
          error: "Invalid decrypted secret",
          message: "The decrypted distribution secret is not a valid string.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (
      !distributionSecret.startsWith("S") ||
      distributionSecret.length !== 56
    ) {
      console.error(
        "Invalid secret format - Length:",
        distributionSecret.length,
        "Starts with S:",
        distributionSecret.startsWith("S"),
        "First 10 chars:",
        distributionSecret.substring(0, 10),
      );
      return new Response(
        JSON.stringify({
          error: "Invalid distribution secret format",
          message: `The decrypted distribution secret is not a valid Stellar secret key. Expected: 56 characters starting with 'S', got: ${distributionSecret.length} characters starting with '${distributionSecret.substring(0, 1)}'`,
          secretLength: distributionSecret.length,
          secretPrefix: distributionSecret.substring(0, 5),
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create keypair from secret
    let distributionKeypair;
    try {
      distributionKeypair = Keypair.fromSecret(distributionSecret);
      console.log(
        "Distribution keypair created successfully, public key:",
        distributionKeypair.publicKey(),
      );
    } catch (keypairError) {
      console.error("Error creating keypair from secret:", keypairError);
      const errorMessage =
        keypairError instanceof Error
          ? keypairError.message
          : String(keypairError);
      return new Response(
        JSON.stringify({
          error: "Failed to create distribution keypair",
          message:
            "Could not create keypair from decrypted secret. The secret key may be corrupted or invalid.",
          details: errorMessage,
          secretLength: distributionSecret.length,
          secretPrefix: distributionSecret.substring(0, 5),
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Calculate distribution amounts first (before creating asset)
    const totalSupply = parseFloat(tokenData.total_supply);

    if (isNaN(totalSupply) || totalSupply <= 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid total supply",
          message: `Total supply must be a positive number. Got: ${tokenData.total_supply}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const platformFeeBps = tokenData.platform_fee_bps || 1000;
    const platformAmount = (totalSupply * platformFeeBps) / 10000;
    const artistAmount = totalSupply - platformAmount;

    console.log(
      `Total supply: ${totalSupply}, Platform fee: ${platformFeeBps}bps, Platform amount: ${platformAmount}, Artist amount: ${artistAmount}`,
    );

    // Validate artist public key format
    if (!artistPublicKey || typeof artistPublicKey !== "string") {
      return new Response(
        JSON.stringify({
          error: "Invalid artist public key",
          message: "Artist public key must be a valid string",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!artistPublicKey.startsWith("G") || artistPublicKey.length !== 56) {
      return new Response(
        JSON.stringify({
          error: "Invalid artist public key format",
          message: `Artist public key must be a valid Stellar public key (56 characters starting with 'G'). Got: ${artistPublicKey.length} characters starting with '${artistPublicKey.substring(0, 1)}'`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate token code (already normalized above)
    if (
      !tokenCodeUpper ||
      tokenCodeUpper.length < 1 ||
      tokenCodeUpper.length > 12
    ) {
      return new Response(
        JSON.stringify({
          error: "Invalid token code",
          message: `Token code must be 1-12 characters. Got: ${tokenCodeUpper.length} characters`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create asset
    let asset;
    try {
      asset = new Asset(tokenCodeUpper, artistPublicKey);
      console.log(
        "Asset created successfully:",
        asset.getCode(),
        asset.getIssuer(),
      );
    } catch (assetError) {
      console.error("Error creating asset:", assetError);
      const errorMessage =
        assetError instanceof Error ? assetError.message : String(assetError);
      return new Response(
        JSON.stringify({
          error: "Failed to create asset",
          message: "Could not create Stellar asset object",
          details: errorMessage,
          tokenCode: tokenCodeUpper,
          issuer: artistPublicKey,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // IMPORTANT: In Stellar, the ISSUER account CANNOT receive its own tokens
    // The issuer cannot create a trustline for its own asset, so it cannot hold balances
    // Therefore, we CANNOT send tokens to the artist (issuer) during distribution
    //
    // Distribution strategy:
    // - Send platform fee to platform treasury (requires trustline)
    // - Keep artist's share in the distribution account (or send to a separate artist-controlled account)
    // - The distribution account already has a trustline and can hold tokens

    console.log(
      "⚠️ Note: Artist (issuer) cannot receive tokens of their own asset in Stellar",
    );
    console.log(
      "Distribution will send platform fee to treasury and keep artist share in distribution account",
    );

    // Verify artist account exists (for logging/verification only)
    try {
      await server.loadAccount(artistPublicKey);
      console.log("✅ Artist account verified");
    } catch (accountError) {
      console.error("Error checking artist account:", accountError);
      const errorMessage =
        accountError instanceof Error
          ? accountError.message
          : String(accountError);
      return new Response(
        JSON.stringify({
          error: "Could not verify artist account",
          details: errorMessage,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Verify platform treasury has trustline, create it automatically if we have the secret
    let treasuryHasTrustline = false;
    try {
      const treasuryAccount = await server.loadAccount(PLATFORM_TREASURY);
      treasuryHasTrustline = treasuryAccount.balances.some(
        (b: any) =>
          b.asset_code === tokenCodeUpper && b.asset_issuer === artistPublicKey,
      );

      if (!treasuryHasTrustline) {
        console.log(
          "⚠️ Platform treasury does not have trustline. Attempting to create it...",
        );

        // Try to create trustline automatically if we have the treasury secret
        const treasurySecret = Deno.env.get("PLATFORM_TREASURY_SECRET_KEY");

        if (treasurySecret) {
          try {
            // Validate treasury secret format
            const trimmedSecret = treasurySecret.trim().replace(/\0/g, "");
            if (!trimmedSecret.startsWith("S") || trimmedSecret.length !== 56) {
              console.error(
                "Invalid treasury secret format - Length:",
                trimmedSecret.length,
                "Starts with S:",
                trimmedSecret.startsWith("S"),
              );
              return new Response(
                JSON.stringify({
                  error: "Invalid platform treasury secret key format",
                  message: `PLATFORM_TREASURY_SECRET_KEY must be a valid Stellar secret key (56 characters starting with 'S'). Got: ${trimmedSecret.length} characters starting with '${trimmedSecret.substring(0, 1)}'`,
                  hint: "Ensure PLATFORM_TREASURY_SECRET_KEY is a valid Stellar secret key, not a mnemonic phrase. Convert mnemonic to secret key first if needed.",
                }),
                {
                  status: 500,
                  headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json",
                  },
                },
              );
            }

            const treasuryKeypair = Keypair.fromSecret(trimmedSecret);
            console.log(
              "Treasury keypair created successfully, public key:",
              treasuryKeypair.publicKey(),
            );

            // Ensure totalSupply is a valid string for Stellar (max 922337203685.4775807)
            const trustlineLimit =
              totalSupply > 922337203685.4775807
                ? "922337203685.4775807"
                : totalSupply.toFixed(7);

            console.log(
              "Creating treasury trustline with limit:",
              trustlineLimit,
            );

            const treasuryTrustlineTx = new TransactionBuilder(
              treasuryAccount,
              {
                fee: BASE_FEE,
                networkPassphrase: networkPassphrase,
              },
            )
              .addOperation(
                Operation.changeTrust({
                  asset: asset,
                  limit: trustlineLimit,
                }),
              )
              .setTimeout(180)
              .build();

            treasuryTrustlineTx.sign(treasuryKeypair);
            const trustlineResult =
              await server.submitTransaction(treasuryTrustlineTx);
            console.log(
              "✅ Platform treasury trustline created:",
              trustlineResult.hash,
            );
            treasuryHasTrustline = true;
          } catch (trustlineError) {
            console.error("Error creating treasury trustline:", trustlineError);
            const errorMessage =
              trustlineError instanceof Error
                ? trustlineError.message
                : String(trustlineError);
            return new Response(
              JSON.stringify({
                error: "Failed to create platform treasury trustline",
                message:
                  "Could not automatically create trustline for platform treasury. Please ensure the treasury account has created a trustline for this token.",
                details: errorMessage,
                tokenCode: tokenCodeUpper,
                assetIssuer: artistPublicKey,
                platformTreasury: PLATFORM_TREASURY,
                hint: "Check that PLATFORM_TREASURY_SECRET_KEY is correct and the treasury account has sufficient XLM balance.",
              }),
              {
                status: 400,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
              },
            );
          }
        } else {
          // No treasury secret available, require manual trustline creation
          return new Response(
            JSON.stringify({
              error: "Platform treasury trustline required",
              message:
                "Platform treasury does not have a trustline for this token. Please ensure the treasury account has created a trustline before distribution.",
              tokenCode: tokenCodeUpper,
              assetIssuer: artistPublicKey,
              platformTreasury: PLATFORM_TREASURY,
              instructions:
                "The platform treasury account needs to create a trustline for this token asset. Set PLATFORM_TREASURY_SECRET_KEY to enable automatic trustline creation.",
            }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            },
          );
        }
      } else {
        console.log("✅ Platform treasury trustline verified");
      }
    } catch (treasuryError) {
      console.error("Error checking treasury account:", treasuryError);
      const errorMessage =
        treasuryError instanceof Error
          ? treasuryError.message
          : String(treasuryError);
      return new Response(
        JSON.stringify({
          error: "Could not verify platform treasury account",
          details: errorMessage,
          platformTreasury: PLATFORM_TREASURY,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Load distribution account
    const distributionAccount = await server.loadAccount(
      distributionKeypair.publicKey(),
    );

    // IMPORTANT: Artist (issuer) cannot receive their own tokens
    // So we only send the platform fee to treasury
    // Artist's share remains in the distribution account (they can access it via the distribution account)
    // OR: We could create a separate artist holding account, but for now we'll keep it in distribution

    // Format amounts for Stellar (must be string with up to 7 decimal places)
    const platformAmountStr = platformAmount.toFixed(7);
    const artistAmountStr = artistAmount.toFixed(7);

    console.log(
      `Distribution amounts - Platform: ${platformAmountStr}, Artist share: ${artistAmountStr} (stays in distribution account)`,
    );

    // Validate amounts
    if (parseFloat(platformAmountStr) <= 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid platform amount",
          message: `Platform amount must be greater than 0. Calculated: ${platformAmountStr}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate that distribution account has enough balance
    const distributionBalance = distributionAccount.balances.find(
      (b: any) =>
        b.asset_code === tokenCodeUpper && b.asset_issuer === artistPublicKey,
    );

    if (!distributionBalance) {
      return new Response(
        JSON.stringify({
          error: "Distribution account has no token balance",
          message:
            "The distribution account does not have a balance for this token. Tokens may not have been emitted correctly.",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const availableBalance = parseFloat(distributionBalance.balance);
    if (availableBalance < parseFloat(platformAmountStr)) {
      return new Response(
        JSON.stringify({
          error: "Insufficient balance",
          message: `Distribution account has insufficient balance. Available: ${availableBalance}, Required: ${platformAmountStr}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    console.log(
      `Distribution account balance: ${availableBalance}, Sending: ${platformAmountStr}`,
    );
    console.log(
      `Artist's share remaining: ${artistAmountStr} (will be used to create sell offer)`,
    );

    // Calculate remaining balance after sending platform fee
    const remainingBalance = availableBalance - parseFloat(platformAmountStr);
    console.log(
      `Remaining balance after platform fee: ${remainingBalance.toFixed(7)}`,
    );

    // Validate we have enough for the sell offer (artist's share)
    if (remainingBalance < parseFloat(artistAmountStr)) {
      console.warn(
        `⚠️ Warning: Remaining balance (${remainingBalance.toFixed(7)}) is less than artist amount (${artistAmountStr}). Using available balance for sell offer.`,
      );
    }

    // Use the smaller of remaining balance or artist amount for the sell offer
    const sellOfferAmount =
      Math.min(remainingBalance, parseFloat(artistAmountStr)) / 2;

    // Create distribution transaction with payment and sell offer
    // Only send platform fee to treasury (artist cannot receive their own tokens)
    // Then create a sell offer for the artist's share at 1:1 XLM rate
    let transaction;
    try {
      const transactionBuilder = new TransactionBuilder(distributionAccount, {
        fee: BASE_FEE,
        networkPassphrase: networkPassphrase,
      })
        // Send platform fee to platform treasury
        .addOperation(
          Operation.payment({
            destination: PLATFORM_TREASURY,
            asset: asset,
            amount: platformAmountStr,
          }),
        );

      // Create sell offer for artist's share at 1:1 XLM rate
      // Price: 1 token = 1 XLM (numerator: 1, denominator: 1)
      if (sellOfferAmount > 0) {
        console.log(
          `Creating sell offer for ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} at 1:1 XLM rate`,
        );

        // Get native XLM asset for the sell offer
        let xlmAsset;
        try {
          xlmAsset = getNativeAsset();
          console.log("Native XLM asset created successfully");
        } catch (assetError) {
          console.error("Error creating native XLM asset:", assetError);
          // Continue without sell offer if we can't create native asset
          console.log(
            "⚠️ Skipping sell offer creation due to native asset error",
          );
        }

        if (xlmAsset) {
          try {
            // Verify the asset is native (optional check)
            const isNative = xlmAsset.isNative ? xlmAsset.isNative() : false;
            console.log(
              "XLM Asset type:",
              isNative ? "Native XLM" : "Custom asset",
            );

            // Create manage sell offer operation
            // Price format: string '1' means 1 token = 1 XLM
            // In Stellar, price is selling/buying, so '1' means 1 selling asset = 1 buying asset
            transactionBuilder.addOperation(
              Operation.manageSellOffer({
                selling: asset, // Selling the token
                buying: xlmAsset, // Buying XLM (native)
                amount: sellOfferAmount.toFixed(7), // Amount of tokens to sell
                price: "1", // Price: 1 token = 1 XLM (string format)
                offerId: 0, // 0 = create new offer
              }),
            );

            console.log(
              `✅ Sell offer operation added: ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} for XLM at 1:1 rate`,
            );
          } catch (offerError) {
            console.error("Error creating sell offer operation:", offerError);
            // Log error but continue - the payment to treasury is more important
            console.log(
              "⚠️ Warning: Could not create sell offer, but payment to treasury will proceed",
            );
          }
        }
      } else {
        console.log(
          "⚠️ No amount available for sell offer. Skipping sell offer creation.",
        );
      }

      transaction = transactionBuilder.setTimeout(180).build();

      console.log(
        "Transaction built successfully with",
        transaction.operations.length,
        "operation(s)",
      );
    } catch (txBuildError) {
      console.error("Error building transaction:", txBuildError);
      const errorMessage =
        txBuildError instanceof Error
          ? txBuildError.message
          : String(txBuildError);
      return new Response(
        JSON.stringify({
          error: "Failed to build transaction",
          message: "Could not build distribution transaction",
          details: errorMessage,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Sign transaction
    try {
      transaction.sign(distributionKeypair);
      console.log("Transaction signed successfully");
    } catch (signError) {
      console.error("Error signing transaction:", signError);
      const errorMessage =
        signError instanceof Error ? signError.message : String(signError);
      return new Response(
        JSON.stringify({
          error: "Failed to sign transaction",
          message: "Could not sign distribution transaction",
          details: errorMessage,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Submit transaction
    let result;
    try {
      result = await server.submitTransaction(transaction);
      console.log("✅ Distribution transaction submitted successfully!");

      // Get transaction operations for logging and response
      const operations = (transaction as any).operations || [];
      const network = Deno.env.get("STELLAR_NETWORK") || "TESTNET";
      const explorerBase =
        network === "PUBLIC"
          ? "https://stellar.expert/explorer/public"
          : network === "FUTURENET"
            ? "https://stellar.expert/explorer/futurenet"
            : "https://stellar.expert/explorer/testnet";

      console.log(
        "═══════════════════════════════════════════════════════════",
      );
      console.log("DISTRIBUTION TRANSACTION DETAILS:");
      console.log(
        "═══════════════════════════════════════════════════════════",
      );
      console.log("Transaction Hash:", result.hash);
      console.log(
        "From (Distribution Account):",
        distributionKeypair.publicKey(),
      );
      console.log("To (Platform Treasury):", PLATFORM_TREASURY);
      console.log("Asset:", `${tokenCodeUpper}-${artistPublicKey}`);
      console.log("Amount:", platformAmountStr, tokenCodeUpper);
      console.log("Network:", network);
      console.log("Transaction URL:", `${explorerBase}/tx/${result.hash}`);
      console.log(
        "Asset URL:",
        `${explorerBase}/asset/${tokenCodeUpper}-${artistPublicKey}`,
      );
      console.log(`Operations in transaction: ${operations.length}`);

      // Log operation details
      operations.forEach((op: any, idx: number) => {
        const opType = op.type || op.body?.type || "unknown";
        console.log(`  Operation ${idx + 1}:`, opType);
        if (opType === "payment" || op.body?.paymentOp) {
          const paymentOp = op.body?.paymentOp || op;
          console.log(
            `    - Payment: ${paymentOp.amount} ${tokenCodeUpper} to ${(paymentOp.destination || paymentOp.destination?.accountId?.ed25519 || "").slice(0, 8)}...`,
          );
        } else if (opType === "manageSellOffer" || op.body?.manageSellOfferOp) {
          const sellOp = op.body?.manageSellOfferOp || op;
          const price =
            sellOp.price ||
            (sellOp.priceN && sellOp.priceD
              ? `${sellOp.priceN}/${sellOp.priceD}`
              : "1");
          console.log(
            `    - Sell Offer: ${sellOp.amount} ${tokenCodeUpper} for XLM at ${price} rate`,
          );
          console.log(`    - Offer ID: ${sellOp.offerId || 0} (0 = new offer)`);
        }
      });

      console.log(
        "═══════════════════════════════════════════════════════════",
      );
      console.log("This transaction includes:");
      console.log(
        `  1. Payment: ${distributionKeypair.publicKey().slice(0, 8)}... sent ${platformAmountStr} ${tokenCodeUpper} to ${PLATFORM_TREASURY.slice(0, 8)}... (treasury)`,
      );
      if (sellOfferAmount > 0 && operations.length > 1) {
        console.log(
          `  2. Sell Offer: Created offer to sell ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} for XLM at 1:1 rate`,
        );
        console.log(
          `     - Buyers can purchase tokens at 1 ${tokenCodeUpper} = 1 XLM`,
        );
        console.log(`     - Offer will be visible on Stellar DEX orderbooks`);
      }
      console.log(
        "═══════════════════════════════════════════════════════════",
      );
    } catch (submitError) {
      console.error("Error submitting transaction:", submitError);
      const errorMessage =
        submitError instanceof Error
          ? submitError.message
          : String(submitError);
      return new Response(
        JSON.stringify({
          error: "Failed to submit transaction",
          message:
            "Could not submit distribution transaction to Stellar network",
          details: errorMessage,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Update status in database
    const { error: updateError } = await supabase
      .from("artist_tokens")
      .update({
        status: "distributed",
        distribution_tx_hash: result.hash,
        artist_amount: artistAmount.toString(),
        platform_amount: platformAmount.toString(),
        distributed_at: new Date().toISOString(),
      })
      .eq("id", tokenData.id);

    if (updateError) {
      console.error("Error updating database:", updateError);
    }

    // Record in distributions table for audit
    await supabase.from("token_distributions").insert({
      token_id: tokenData.id,
      artist_public_key: artistPublicKey,
      artist_amount: artistAmount.toString(),
      platform_amount: platformAmount.toString(),
      tx_hash: result.hash,
      distributed_at: new Date().toISOString(),
    });

    // Build Stellar Explorer URLs for easy access
    // Get network and build explorer URLs (redefine here since they're in try block scope)
    const responseNetwork = Deno.env.get("STELLAR_NETWORK") || "TESTNET";
    const responseExplorerBase =
      responseNetwork === "PUBLIC"
        ? "https://stellar.expert/explorer/public"
        : responseNetwork === "FUTURENET"
          ? "https://stellar.expert/explorer/futurenet"
          : "https://stellar.expert/explorer/testnet";

    // Get operations from transaction to determine if sell offer was included
    const transactionOperations = (transaction as any).operations || [];
    const includesSellOffer = transactionOperations.length > 1;
    const sellOfferInfo =
      includesSellOffer && sellOfferAmount > 0
        ? {
            amount: sellOfferAmount.toFixed(7),
            price: "1:1",
            selling: tokenCodeUpper,
            buying: "XLM",
            note: "Sell offer created for artist share at 1:1 XLM rate",
          }
        : null;

    return new Response(
      JSON.stringify({
        success: true,
        artistAmount: artistAmount.toString(), // Amount allocated to artist (used for sell offer)
        platformAmount: platformAmount.toString(), // Amount sent to platform treasury
        transactionHash: result.hash,
        transactionUrl: `${responseExplorerBase}/tx/${result.hash}`,
        assetUrl: `${responseExplorerBase}/asset/${tokenCodeUpper}-${artistPublicKey}`,
        distributionAccount: distributionKeypair.publicKey(),
        platformTreasury: PLATFORM_TREASURY,
        sellOffer: sellOfferInfo,
        operationsCount: transactionOperations.length,
        note: includesSellOffer
          ? `Artist share (${sellOfferAmount.toFixed(7)} ${tokenCodeUpper}) has been placed as a sell offer at 1:1 XLM rate. The offer is available on the Stellar DEX for buyers.`
          : "Artist share remains in distribution account. Issuer cannot receive own tokens in Stellar.",
        message: `Distribution completed successfully! Platform fee (${platformAmountStr} ${tokenCodeUpper}) sent to treasury.${includesSellOffer ? ` Sell offer created for ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} at 1:1 XLM rate. Buyers can now purchase tokens on the Stellar DEX.` : ` Artist share (${artistAmountStr} ${tokenCodeUpper}) remains in distribution account.`}`,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);

    let errorMessage = "Distribution failed";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "response" in error
    ) {
      const stellarError = error as any;
      if (stellarError.response?.data?.extras?.result_codes) {
        errorMessage = `Transaction failed: ${stellarError.response.data.extras.result_codes.transaction || "Unknown error"}`;
      }
    }

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
```

## File: supabase/functions/README.md

````markdown
# Supabase Edge Functions for Token Creation

This directory contains 6 Supabase Edge Functions for the token creation flow.

## Functions

1. **prepare-token** - Creates distribution account, funds it, and automatically creates trustline
2. **status** - Checks token creation status (used for polling)
3. **emission-xdr** - Generates unsigned XDR for token emission
4. **submit-signed** - Submits signed emission transaction to Stellar
5. **distribute** - Executes token distribution to artist and platform
6. **list-distributed-tokens** - Lists all artist tokens with status 'distributed' (for explorer)

## Setup

### 1. Environment Variables

Set these environment variables in your Supabase project:

```bash
# Supabase (automatically available)
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stellar Network Configuration
STELLAR_NETWORK=PUBLIC  # or TESTNET, FUTURENET
HORIZON_URL=https://horizon.stellar.org  # Optional, auto-configured based on STELLAR_NETWORK

# Platform Configuration
PLATFORM_TREASURY_PUBLIC_KEY=GXXXXX...  # Platform treasury public key
PLATFORM_FUNDING_SECRET_KEY=SXXXXX...   # Secret key for funding distribution accounts (optional)

# Encryption
ENCRYPTION_KEY=your-256-bit-encryption-key  # Must be exactly 32 bytes or will be hashed to 32 bytes
```

### 2. Database Setup

Make sure you have run the database migrations from `supabase/functions/migrations/db-scheme.sql` to create the required tables:

- `artist_tokens`
- `token_distributions`

### 3. Deploy Functions

```bash
# Deploy all functions
supabase functions deploy prepare-token
supabase functions deploy status
supabase functions deploy emission-xdr
supabase functions deploy submit-signed
supabase functions deploy distribute
supabase functions deploy list-distributed-tokens

# Or deploy all at once (if supported)
supabase functions deploy
```

### 4. Set Environment Variables in Supabase

In your Supabase dashboard:

1. Go to Project Settings > Edge Functions
2. Add the environment variables listed above
3. Make sure `ENCRYPTION_KEY` is a secure random 32-byte string (you can generate one with: `openssl rand -base64 32`)

## Function Details

### prepare-token

**Endpoint:** `POST /functions/v1/prepare-token`

**Request Body:**

```json
{
  "artistPublicKey": "GXXXXX...",
  "tokenCode": "MYTOKEN",
  "tokenName": "My Token",
  "totalSupply": "1000000",
  "platformFeeBps": 1000,
  "description": "Optional description"
}
```

**Response:**

```json
{
  "success": true,
  "distributionAccount": "GXXXXX...",
  "tokenId": "uuid",
  "trustlineTxHash": "tx-hash"
}
```

**What it does:**

1. Validates input and artist account
2. Creates unique distribution keypair
3. Encrypts and stores distribution secret
4. Funds distribution account (if PLATFORM_FUNDING_SECRET_KEY is set)
5. Automatically creates trustline
6. Updates database status

### status

**Endpoint:** `GET /functions/v1/status?code=MYTOKEN&issuer=GXXXXX...`

**Response:**

```json
{
  "status": "trustline_created",
  "tokenCode": "MYTOKEN",
  "tokenName": "My Token",
  "totalSupply": "1000000",
  "artistAmount": null,
  "platformAmount": null,
  "createdAt": "2024-01-01T00:00:00Z",
  "distributedAt": null,
  "trustlineTxHash": "tx-hash",
  "emissionTxHash": null,
  "distributionTxHash": null
}
```

### emission-xdr

**Endpoint:** `POST /functions/v1/emission-xdr`

**Request Body:**

```json
{
  "artistPublicKey": "GXXXXX...",
  "tokenCode": "MYTOKEN",
  "totalSupply": "1000000"
}
```

**Response:**

```json
{
  "success": true,
  "xdr": "AAAA..."
}
```

### submit-signed

**Endpoint:** `POST /functions/v1/submit-signed`

**Request Body:**

```json
{
  "signedXDR": "AAAA...",
  "tokenCode": "MYTOKEN",
  "artistPublicKey": "GXXXXX..."
}
```

**Response:**

```json
{
  "success": true,
  "txHash": "tx-hash"
}
```

### distribute

**Endpoint:** `POST /functions/v1/distribute`

**Request Body:**

```json
{
  "artistPublicKey": "GXXXXX...",
  "tokenCode": "MYTOKEN"
}
```

**Response:**

```json
{
  "success": true,
  "artistAmount": "900000.0000000",
  "platformAmount": "100000.0000000",
  "transactionHash": "tx-hash"
}
```

### list-distributed-tokens

**Endpoint:** `GET /functions/v1/list-distributed-tokens?limit=100&offset=0`

**Query Parameters:**

- `limit` (optional): Number of tokens to return (default: 100)
- `offset` (optional): Number of tokens to skip (default: 0)

**Response:**

```json
{
  "tokens": [
    {
      "id": "uuid",
      "artist_public_key": "GXXXXX...",
      "artist_name": "Artist Name",
      "token_code": "MYTOKEN",
      "token_name": "My Token",
      "total_supply": "1000000",
      "description": "Token description",
      "image_url": "https://...",
      "status": "distributed",
      "distributed_at": "2024-01-01T00:00:00Z",
      "metadata": {
        "category": "music",
        "tags": ["electronic", "techno"],
        "total_holders": 100,
        "total_transactions": 50
      }
    }
  ],
  "count": 1,
  "limit": 100,
  "offset": 0
}
```

**What it does:**

1. Queries all artist_tokens with status = 'distributed'
2. Optionally fetches metadata for each token
3. Returns paginated results sorted by distributed_at (newest first)
4. Uses service role key to bypass RLS (allows public access to distributed tokens)

## Network Configuration

The functions automatically detect the network from the `STELLAR_NETWORK` environment variable:

- `PUBLIC` - Mainnet (default)
- `TESTNET` - Testnet
- `FUTURENET` - Futurenet

## Security Notes

1. **ENCRYPTION_KEY**: Must be kept secret and never exposed. Used to encrypt distribution account secrets.
2. **PLATFORM_FUNDING_SECRET_KEY**: Only needed if you want automatic account funding. Keep this secure.
3. **PLATFORM_TREASURY_PUBLIC_KEY**: Public key is safe, but make sure the corresponding secret key is secure.
4. **Service Role Key**: Has full database access, keep it secure.

## Testing

Test each function individually using curl or your frontend:

```bash
# Test prepare-token
curl -X POST https://your-project.supabase.co/functions/v1/prepare-token \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"artistPublicKey":"GXXXXX...","tokenCode":"TEST","tokenName":"Test Token","totalSupply":"1000000"}'

# Test status
curl "https://your-project.supabase.co/functions/v1/status?code=TEST&issuer=GXXXXX..." \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

## Troubleshooting

1. **Account funding fails**: Make sure `PLATFORM_FUNDING_SECRET_KEY` is set and the funding account has enough XLM
2. **Trustline creation fails**: Ensure the distribution account is funded before creating trustline
3. **Encryption errors**: Verify `ENCRYPTION_KEY` is set and is a valid string
4. **Database errors**: Ensure all migrations have been run and tables exist

## Flow Diagram

```
1. prepare-token
   ├─ Create distribution account
   ├─ Fund account
   └─ Create trustline automatically

2. status (polling)
   └─ Check if trustline_created

3. emission-xdr
   └─ Generate XDR for artist to sign

4. submit-signed
   └─ Submit signed transaction

5. distribute
   ├─ Calculate amounts
   ├─ Send to artist
   └─ Send to platform treasury
```
````

## File: supabase/migrations/db-scheme.sql

```sql
-- ============================================
-- SCHEMA DE BASE DE DATOS PARA PLATAFORMA DE TOKENS
-- Compatible con Supabase/PostgreSQL
-- ============================================

-- Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- TABLA PRINCIPAL: artist_tokens
-- ============================================
CREATE TABLE artist_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Información del artista
    artist_public_key VARCHAR(56) NOT NULL,
    artist_email VARCHAR(255),
    artist_name VARCHAR(255),

    -- Información del token
    token_code VARCHAR(12) NOT NULL,
    token_name VARCHAR(255) NOT NULL,
    total_supply DECIMAL(20, 7) NOT NULL,
    description TEXT,
    image_url TEXT,

    -- Configuración de distribución
    platform_fee_bps INTEGER NOT NULL DEFAULT 1000, -- 1000 = 10%
    distribution_public_key VARCHAR(56) NOT NULL,
    distribution_secret_encrypted TEXT NOT NULL, -- Encriptado con AES-256-GCM

    -- Montos finales de distribución
    artist_amount DECIMAL(20, 7),
    platform_amount DECIMAL(20, 7),

    -- Estado del proceso
    status VARCHAR(50) NOT NULL DEFAULT 'created',
    -- Estados posibles:
    -- 'created' -> Token registrado en DB
    -- 'trustline_created' -> Trustline establecida
    -- 'tokens_emitted' -> Artista emitió los tokens
    -- 'distributed' -> Distribución completada
    -- 'failed' -> Error en el proceso

    -- Hashes de transacciones (para auditoría y transparencia)
    trustline_tx_hash VARCHAR(64),
    emission_tx_hash VARCHAR(64),
    distribution_tx_hash VARCHAR(64),

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    trustline_created_at TIMESTAMP WITH TIME ZONE,
    emitted_at TIMESTAMP WITH TIME ZONE,
    distributed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Constraints
    CONSTRAINT unique_token_per_artist UNIQUE (token_code, artist_public_key),
    CONSTRAINT valid_supply CHECK (total_supply > 0),
    CONSTRAINT valid_fee CHECK (platform_fee_bps >= 0 AND platform_fee_bps <= 2000)
);

-- ============================================
-- TABLA: token_distributions (para auditoría)
-- ============================================
CREATE TABLE token_distributions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,

    -- Información de distribución
    artist_public_key VARCHAR(56) NOT NULL,
    artist_amount DECIMAL(20, 7) NOT NULL,
    platform_amount DECIMAL(20, 7) NOT NULL,

    -- Hash de la transacción en Stellar
    tx_hash VARCHAR(64) NOT NULL,

    -- Metadata adicional
    distributed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Constraints
    CONSTRAINT valid_artist_amount CHECK (artist_amount >= 0),
    CONSTRAINT valid_platform_amount CHECK (platform_amount >= 0)
);

-- ============================================
-- TABLA: token_metadata (información adicional)
-- ============================================
CREATE TABLE token_metadata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,

    -- Metadata extendida
    website_url TEXT,
    twitter_handle VARCHAR(100),
    instagram_handle VARCHAR(100),
    discord_url TEXT,
    telegram_url TEXT,

    -- Información del token
    category VARCHAR(50), -- 'music', 'art', 'sports', etc.
    tags TEXT[], -- Array de tags

    -- Stats
    total_holders INTEGER DEFAULT 0,
    total_transactions INTEGER DEFAULT 0,
    market_cap_xlm DECIMAL(20, 7),

    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLA: token_transactions (historial de transacciones)
-- ============================================
CREATE TABLE token_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,

    -- Información de la transacción
    tx_hash VARCHAR(64) NOT NULL,
    tx_type VARCHAR(50) NOT NULL, -- 'payment', 'trade', 'burn', etc.

    -- Partes involucradas
    from_address VARCHAR(56),
    to_address VARCHAR(56),

    -- Montos
    amount DECIMAL(20, 7) NOT NULL,

    -- Stellar ledger info
    ledger_sequence INTEGER,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    -- Constraints
    CONSTRAINT unique_tx_hash UNIQUE (tx_hash)
);

-- ============================================
-- TABLA: marketplace_listings (para venta de tokens)
-- ============================================
CREATE TABLE marketplace_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,

    -- Información del vendedor
    seller_public_key VARCHAR(56) NOT NULL,

    -- Detalles de la venta
    amount_for_sale DECIMAL(20, 7) NOT NULL,
    price_per_token_xlm DECIMAL(20, 7) NOT NULL,
    total_price_xlm DECIMAL(20, 7) GENERATED ALWAYS AS (amount_for_sale * price_per_token_xlm) STORED,

    -- Estado
    status VARCHAR(50) NOT NULL DEFAULT 'active',
    -- Estados: 'active', 'partial', 'completed', 'cancelled'

    amount_sold DECIMAL(20, 7) DEFAULT 0,
    amount_remaining DECIMAL(20, 7) GENERATED ALWAYS AS (amount_for_sale - amount_sold) STORED,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE,

    -- Constraints
    CONSTRAINT valid_sale_amount CHECK (amount_for_sale > 0),
    CONSTRAINT valid_price CHECK (price_per_token_xlm > 0)
);

-- ============================================
-- TABLA: marketplace_sales (historial de ventas)
-- ============================================
CREATE TABLE marketplace_sales (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    listing_id UUID NOT NULL REFERENCES marketplace_listings(id) ON DELETE CASCADE,
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,

    -- Información de la venta
    buyer_public_key VARCHAR(56) NOT NULL,
    seller_public_key VARCHAR(56) NOT NULL,

    -- Montos
    amount DECIMAL(20, 7) NOT NULL,
    price_per_token_xlm DECIMAL(20, 7) NOT NULL,
    total_price_xlm DECIMAL(20, 7) NOT NULL,

    -- Comisión de la plataforma (2-5%)
    platform_fee_xlm DECIMAL(20, 7),

    -- Hash de la transacción en Stellar
    tx_hash VARCHAR(64) NOT NULL,

    -- Timestamps
    sold_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLA: rewards (definiciones de recompensas NFT)
-- ============================================
CREATE TABLE rewards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    artist_public_key VARCHAR(56) NOT NULL,
    nft_contract_id VARCHAR(56) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para búsquedas rápidas
CREATE INDEX idx_rewards_artist ON rewards(artist_public_key);
CREATE INDEX idx_rewards_contract ON rewards(nft_contract_id);

-- ============================================
-- TABLA: platform_analytics (métricas de la plataforma)
-- ============================================
CREATE TABLE platform_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Métricas generales
    total_tokens_created INTEGER DEFAULT 0,
    total_artists INTEGER DEFAULT 0,
    total_tokens_distributed DECIMAL(30, 7) DEFAULT 0,
    total_xlm_volume DECIMAL(30, 7) DEFAULT 0,

    -- Ingresos de la plataforma
    total_platform_fees_tokens DECIMAL(30, 7) DEFAULT 0,
    total_platform_fees_xlm DECIMAL(30, 7) DEFAULT 0,

    -- Por período
    period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    period_end TIMESTAMP WITH TIME ZONE NOT NULL,

    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    CONSTRAINT unique_period UNIQUE (period_start, period_end)
);

-- ============================================
-- ÍNDICES PARA MEJORAR PERFORMANCE
-- ============================================

-- Índices para búsquedas frecuentes
CREATE INDEX idx_artist_tokens_artist ON artist_tokens(artist_public_key);
CREATE INDEX idx_artist_tokens_code ON artist_tokens(token_code);
CREATE INDEX idx_artist_tokens_status ON artist_tokens(status);
CREATE INDEX idx_artist_tokens_created ON artist_tokens(created_at DESC);

CREATE INDEX idx_token_distributions_token ON token_distributions(token_id);
CREATE INDEX idx_token_distributions_date ON token_distributions(distributed_at DESC);

CREATE INDEX idx_marketplace_listings_token ON marketplace_listings(token_id);
CREATE INDEX idx_marketplace_listings_seller ON marketplace_listings(seller_public_key);
CREATE INDEX idx_marketplace_listings_status ON marketplace_listings(status);
CREATE INDEX idx_marketplace_listings_active ON marketplace_listings(status, expires_at)
    WHERE status = 'active';

CREATE INDEX idx_marketplace_sales_token ON marketplace_sales(token_id);
CREATE INDEX idx_marketplace_sales_buyer ON marketplace_sales(buyer_public_key);
CREATE INDEX idx_marketplace_sales_date ON marketplace_sales(sold_at DESC);

CREATE INDEX idx_token_transactions_token ON token_transactions(token_id);
CREATE INDEX idx_token_transactions_hash ON token_transactions(tx_hash);
CREATE INDEX idx_token_transactions_date ON token_transactions(created_at DESC);

-- ============================================
-- FUNCIONES Y TRIGGERS
-- ============================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para updated_at
CREATE TRIGGER update_artist_tokens_updated_at BEFORE UPDATE ON artist_tokens
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_marketplace_listings_updated_at BEFORE UPDATE ON marketplace_listings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_token_metadata_updated_at BEFORE UPDATE ON token_metadata
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) - Opcional con Supabase
-- ============================================

-- Habilitar RLS en tablas principales
ALTER TABLE artist_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_listings ENABLE ROW LEVEL SECURITY;

-- Política: Los artistas pueden ver solo sus propios tokens
CREATE POLICY "Artists can view own tokens" ON artist_tokens
    FOR SELECT
    USING (auth.uid()::text = artist_public_key);

-- Política: Todos pueden ver tokens distribuidos (para el explorador público)
CREATE POLICY "Anyone can view distributed tokens" ON artist_tokens
    FOR SELECT
    USING (status = 'distributed');

-- Política: Todos pueden ver listings activos
CREATE POLICY "Anyone can view active listings" ON marketplace_listings
    FOR SELECT
    USING (status = 'active');

-- Política: Solo el seller puede actualizar sus listings
CREATE POLICY "Sellers can update own listings" ON marketplace_listings
    FOR UPDATE
    USING (auth.uid()::text = seller_public_key);

-- ============================================
-- VISTAS ÚTILES
-- ============================================

-- Vista: Resumen de tokens por artista
CREATE OR REPLACE VIEW artist_token_summary AS
SELECT
    artist_public_key,
    COUNT(*) as total_tokens,
    SUM(CASE WHEN status = 'distributed' THEN 1 ELSE 0 END) as distributed_tokens,
    SUM(artist_amount) as total_artist_tokens,
    SUM(platform_amount) as total_platform_fees
FROM artist_tokens
GROUP BY artist_public_key;

-- Vista: Top tokens por volumen
CREATE OR REPLACE VIEW top_tokens_by_volume AS
SELECT
    at.id,
    at.token_code,
    at.token_name,
    at.artist_public_key,
    COUNT(DISTINCT ms.id) as total_sales,
    SUM(ms.amount) as total_volume_tokens,
    SUM(ms.total_price_xlm) as total_volume_xlm
FROM artist_tokens at
LEFT JOIN marketplace_sales ms ON at.id = ms.token_id
WHERE at.status = 'distributed'
GROUP BY at.id, at.token_code, at.token_name, at.artist_public_key
ORDER BY total_volume_xlm DESC NULLS LAST;

-- ============================================
-- DATOS DE EJEMPLO (SOLO PARA DESARROLLO)
-- ============================================

-- Insertar un token de ejemplo
-- INSERT INTO artist_tokens (
--     artist_public_key,
--     artist_email,
--     artist_name,
--     token_code,
--     token_name,
--     total_supply,
--     description,
--     platform_fee_bps,
--     distribution_public_key,
--     distribution_secret_encrypted,
--     status
-- ) VALUES (
--     'GARTIST123EXAMPLE456...',
--     'artist@example.com',
--     'Bad Bunny',
--     'BADBNNY',
--     'Bad Bunny Fan Token',
--     1000000,
--     'Token oficial para fans de Bad Bunny',
--     1000,
--     'GDIST123EXAMPLE456...',
--     'encrypted_secret_here',
--     'created'
-- );

-- ============================================
-- FUNCIONES DE CONSULTA ÚTILES
-- ============================================

-- Función: Obtener estadísticas de un token
CREATE OR REPLACE FUNCTION get_token_stats(token_uuid UUID)
RETURNS TABLE (
    total_holders BIGINT,
    total_transactions BIGINT,
    total_volume_xlm NUMERIC,
    avg_price_xlm NUMERIC
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(DISTINCT buyer_public_key) as total_holders,
        COUNT(*) as total_transactions,
        COALESCE(SUM(total_price_xlm), 0) as total_volume_xlm,
        COALESCE(AVG(price_per_token_xlm), 0) as avg_price_xlm
    FROM marketplace_sales
    WHERE token_id = token_uuid;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- PERMISOS
-- ============================================

-- Dar permisos a service_role para todas las operaciones
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;

-- Dar permisos de lectura a authenticated users (ajustar según necesidad)
GRANT SELECT ON artist_token_summary TO authenticated;
GRANT SELECT ON top_tokens_by_volume TO authenticated;
```

## File: index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <title>Dropsland - Where Music Meets Ownership</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Inconsolata:wght@500&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: README.md

```markdown
# Dropsland

---

✨ **Dropsland transforms beats into economies and fans into true stakeholders in the music they love.**

**Dropsland lets DJs fund their careers and lets fans own the journey.**

---

## The Problem

Behind every DJ drop lies a broken system: _Broken payouts. Disconnected fans. Opaque royalties._
Royalties take months to arrive, intermediaries swallow most of the profits, and fans — the lifeblood of the artist — remain excluded from the value they help create.

**Dropsland** changes that.

It’s a **Web3 platform where DJs tokenize their careers**, turning their art, reputation, and royalties into digital assets that fans can own, trade, and benefit from.

---

### ⚡ The Dropsland Model

Dropsland rebuilds the relationship between DJs, fans, and money — by launching DJ Tokens. Holding the DJ Token turns fans into insiders — unlocking exclusive digital and real-world experiences.

### 1. DJ Utility **Token**

A fan-powered access pass that connects artists and their communities.
Holding this token unlocks:

**Digital Perks**

- 🎵 Unlock unreleased tracks and behind-the-scenes drops
- 💬 Join fan-only chats and vote on upcoming decisions
- 🌐 Get early access to NFTs and collaborations

**Real-World Perks**

- 🎟️ Priority or discounted access to shows and events
- 🥂 VIP zones, meet-and-greets, or exclusive drinks
- 👕 Access to limited-edition merch

---

### 💿 The Dropsland Vision

Dropsland redefines what it means to support music:

- **Artists** can fund their careers, grow their community, and receive instant crypto payments.
- **Fans** can finally **own a piece of the beat** — not just stream it.
- **The industry** gains a transparent, decentralized infrastructure for music finance.

Every drop becomes a financial and emotional investment.
Every fan becomes a stakeholder in the music they love.

---

### 🌍 The Future of Music Economy

In Dropsland, DJs aren’t just creators — they’re **economies**.
Their tokenized careers align incentives between artists and fans, creating a new, borderless way to experience, fund, and grow music.

**Dropsland** — _Own the music. Fuel the movement._

---

## Why Now?

The timing couldn’t be better:

- 🎧 **Streaming dominates** — but payouts are smaller than ever.
- 🎤 **Live events are booming again** — yet artists still lack cash flow.
- 🔗 **Blockchain makes instant, global payments possible.**

The next generation of music lovers doesn’t want merch — they want **ownership.**

Dropsland makes that real.

---

## Core Problems Solved

| Category           | Old World                        | Dropsland                         |
| ------------------ | -------------------------------- | --------------------------------- |
| **Payments**       | Informal deals, late payouts     | On-chain, instant, transparent    |
| **Funding**        | No financing for independent DJs | Tokenized fan-powered funding     |
| **Fan Connection** | Likes & streams only             | Real ownership, voting & access   |
| **Incentives**     | DJs go unnoticed                 | Fans become promoters & investors |

---

## Competitive Table

| Category  | Player                    | Focus                          | Limitation |
| --------- | ------------------------- | ------------------------------ | ---------- |
| Royal     | Fan-owned royalties       | Single-song scope              |            |
| Async Art | NFT edits & collectibles  | No revenue share               |            |
| Viberate  | Data analytics            | Not tokenized                  |            |
| Dropsland | Dual-token career economy | Full stack: access + royalties |            |

…

---

# Dropsland Technical Architecture

Dropsland is a decentralized music ownership protocol built on Stellar Soroban.
It enables DJs to tokenize access and via composable smart contracts, allowing fans to hold verifiable digital and real-world rights.

---

## System Architecture

**Core Contracts:**

- **Utility Token Contract (DJNAME)** – Custom SEP-41 compliant token with fee logic and access gating. Only the Sale or Distribution contracts can mint new tokens.
- **Factory Contract** – Deploys a new Token + Sale + Distribution set for each DJ and links them under one artist ID.
- **Sale / Minting Contract** – Calculates dynamic token prices using a linear Bonding Curve formula and routes funds (e.g., 90% to DJ, 10% to Treasury).

**Off-Chain Services:**

- Reputation Oracle (verifies off-chain reputation → posts proof)
- Metadata Indexer (artist profiles, tracks, drops)
- Web App + Wallet integration

### DJ Token

…

### Factory Contract

…

### **Sale / Minting Contract**

…

---

## Token Economics

- **Utility Token Mechanics:** capped supply, bonding curve parameters, fee routing (e.g. % to treasury, % to DJ).
- **Token Mechanics:** Minting, ownership proofs, payout frequency, claim process.
- **Staking or Governance (in the future)**

| Parameter     | Description      | Example                         |
| ------------- | ---------------- | ------------------------------- |
| Cap           | Max supply       | 100,000                         |
| Curve type    | Linear           | `price = base + slope * supply` |
| Fee split     | Treasury %, DJ % | 10 / 90                         |
| Reserve token | USDC             | 1 USD peg                       |

---

## **Data & Oracles (In the future)**

Explain how real-world data would get verified and bridged on-chain.

- Input Sources: Spotify API, event invoices.
- Oracle Validation: …
- On-chain posting: …
- Future: …

---

## **Compliance & Security**

- **Compliance considerations:**
  - Utility token = access (non-security)
- **Security:**
  - Audits, contract modularity, minimal trust design
  - Use of Stellar account signatures, SEP-41 compliance
- **Privacy:**
  - User data off-chain, only hashes or references on-chain
  - Optional use of Privy or similar for encrypted access control

---
```

## File: tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--background)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 30s linear infinite",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
```

## File: tsconfig.app.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

## File: tsconfig.json

```json
{
  "files": [],
  "exclude": ["packages"],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## File: tsconfig.node.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts", "tailwind.config.ts"]
}
```

## File: vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      nodePolyfills({
        include: ["buffer"],
        globals: {
          Buffer: true,
        },
      }),
      wasm(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      exclude: ["@stellar/stellar-xdr-json"],
    },
    define: {
      global: "window",
    },
    envPrefix: "PUBLIC_",
    server: {
      proxy: {
        "/friendbot": {
          target: "http://localhost:8000/friendbot",
          changeOrigin: true,
        },
      },
    },
  };
});
```

## File: contracts/dj-fungible/src/contract.rs

```rust
//! Fungible AllowList Example Contract.

//! This contract showcases how to integrate the AllowList extension with a
//! SEP-41-compliant fungible token. It includes essential features such as
//! controlled token transfers by an admin who can allow or disallow specific
//! accounts.
use soroban_sdk::{
    contract, contracterror, contractimpl, contracttype, token, Address, Env, String,
};
use stellar_access::{
    access_control::{self as access_control, AccessControl},
    ownable::{self as ownable, Ownable},
};
use stellar_macros::{default_impl, only_owner};
use stellar_tokens::fungible::{
    allowlist::{AllowList, FungibleAllowList},
    burnable::FungibleBurnable,
    Base, FungibleToken,
};

#[contracterror]
#[repr(u32)]
pub enum Error {
    ContractInitialized = 0,
    ContractNotInitialized = 1,
    AmountMustBePositive = 2,
    UnauthorizedAccess = 3,
    TokenNotFound = 4,
    PaymentAmountTooLow = 5,
    SaleNotInitialized = 6,
    InsufficientTokens = 7,
}

#[contracttype]
pub enum DataKey {
    OrderPaymentToken,
    OrderAmount,
    OrderPrice,
}

#[contract]
pub struct ExampleContract;

#[contractimpl]
impl ExampleContract {
    pub fn __constructor(
        e: &Env,
        admin: Address,
        manager: Address,
        decimals: u32,
        name: String,
        symbol: String,
        initial_supply: i128,
    ) {
        Base::set_metadata(e, decimals, name, symbol);

        access_control::set_admin(e, &admin);
        ownable::set_owner(e, &admin);

        // create a role "manager" and grant it to `manager`
        // access_control::grant_role_no_auth(e, &admin, &manager, &symbol_short!("manager"));

        // Allow the admin to transfer tokens
        // AllowList::allow_user(e, &admin);

        // Mint initial supply to the admin
        Base::mint(e, &admin, initial_supply);
    }

    #[only_owner]
    pub fn create_order(
        e: &Env,
        payment_token: Address,
        amount: i128,
        price_per_token: i128,
    ) -> Result<(), Error> {
        // save info in storage
        e.storage()
            .instance()
            .set(&DataKey::OrderPaymentToken, &payment_token);
        e.storage()
            .instance()
            .set(&DataKey::OrderPrice, &price_per_token);
        e.storage().instance().set(&DataKey::OrderAmount, &amount);

        // save DJ's token into contract for escrow
        let dj_fungible_address = e.current_contract_address();
        let owner = ownable::get_owner(e).ok_or(Error::ContractNotInitialized)?;

        let token_client = token::Client::new(e, &dj_fungible_address);
        token_client.transfer(&owner, &dj_fungible_address, &amount);

        Ok(())
    }

    pub fn buy_tokens(e: &Env, fan: Address, payment_amount: i128) -> Result<(), Error> {
        fan.require_auth();

        let owner = ownable::get_owner(e).ok_or(Error::ContractNotInitialized)?;
        let price = get_order_price(e)?;
        let token = get_order_token(e)?;
        let dj_fungible_address = e.current_contract_address();

        let tokens_to_buy = payment_amount / price;
        if tokens_to_buy == 0 {
            return Err(Error::PaymentAmountTooLow);
        }

        let remaining_amount = get_order_amount(e)?;
        if remaining_amount < tokens_to_buy {
            return Err(Error::InsufficientTokens);
        }

        // fan pays contract
        let token_client = token::Client::new(e, &token);
        token_client.transfer(&fan, &dj_fungible_address, &payment_amount);

        // contract pays fan
        let dj_fungible_client = token::Client::new(e, &dj_fungible_address);
        dj_fungible_client.transfer(&dj_fungible_address, &fan, &tokens_to_buy);

        // contract pays dj
        token_client.transfer(&dj_fungible_address, &owner, &payment_amount);

        set_order_amount(e, remaining_amount - tokens_to_buy);

        Ok(())
    }
}

fn get_order_token(e: &Env) -> Result<Address, Error> {
    e.storage()
        .instance()
        .get(&DataKey::OrderPaymentToken)
        .ok_or(Error::SaleNotInitialized)?
}

fn get_order_amount(e: &Env) -> Result<i128, Error> {
    e.storage()
        .instance()
        .get(&DataKey::OrderAmount)
        .ok_or(Error::SaleNotInitialized)?
}

fn get_order_price(e: &Env) -> Result<i128, Error> {
    e.storage()
        .instance()
        .get(&DataKey::OrderPrice)
        .ok_or(Error::SaleNotInitialized)?
}

fn set_order_amount(e: &Env, amount: i128) {
    e.storage().instance().set(&DataKey::OrderAmount, &amount)
}

#[default_impl]
#[contractimpl]
impl FungibleToken for ExampleContract {
    type ContractType = AllowList;
}
// #[contractimpl]
// impl FungibleAllowList for ExampleContract {
//     fn allowed(e: &Env, account: Address) -> bool {
//         AllowList::allowed(e, &account)
//     }

//     #[only_role(operator, "manager")]
//     fn allow_user(e: &Env, user: Address, operator: Address) {
//         AllowList::allow_user(e, &user)
//     }

//     #[only_role(operator, "manager")]
//     fn disallow_user(e: &Env, user: Address, operator: Address) {
//         AllowList::disallow_user(e, &user)
//     }
// }

#[default_impl]
#[contractimpl]
impl AccessControl for ExampleContract {}

#[default_impl]
#[contractimpl]
impl FungibleBurnable for ExampleContract {}

#[default_impl]
#[contractimpl]
impl Ownable for ExampleContract {}
```

## File: src/components/BuyDialog.tsx

```typescript
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import { Alert, AlertDescription } from "./ui/alert.tsx";
import { Card, CardContent } from "./ui/card.tsx";
import { useBuyToken } from "../hooks/useBuyToken";
import { useWallet } from "../hooks/useWallet";

interface BuyDialogProps {
  visible: boolean;
  onClose: () => void;
  tokenSymbol: string;
  tokenIssuer: string;
}

export const BuyDialog: React.FC<BuyDialogProps> = ({
  visible,
  onClose,
  tokenSymbol,
  tokenIssuer,
}) => {
  const { address } = useWallet();
  const {
    buyToken,
    loading: buyLoading,
    error: buyError,
    checkingTrustline,
  } = useBuyToken();
  const [inputType, setInputType] = useState<"xlm" | "tokens">("xlm");
  const [amount, setAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const rate = 1.0; // Fixed rate: 1 XLM = 1 token (1:1)
  const [purchasedAmounts, setPurchasedAmounts] = useState<{
    xlm: number;
    tokens: number;
  } | null>(null);
  const [transactionUrl, setTransactionUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!visible) {
      setAmount("");
      setIsSubmitting(false);
      setIsSuccess(false);
      setError("");
      setInputType("xlm");
      setPurchasedAmounts(null);
      setTransactionUrl(null);
    }
  }, [visible]);

  // Update error from buy hook
  useEffect(() => {
    if (buyError) {
      setError(buyError);
    }
  }, [buyError]);

  // Calculate converted amounts (1:1 rate)
  const calculateXlmAmount = (tokenAmount: number): number => {
    return tokenAmount / rate; // 1 token = 1 XLM
  };

  const calculateTokenAmount = (xlmAmount: number): number => {
    return xlmAmount * rate; // 1 XLM = 1 token
  };

  const xlmAmount =
    inputType === "xlm"
      ? amount && !isNaN(parseFloat(amount))
        ? parseFloat(amount)
        : 0
      : amount && !isNaN(parseFloat(amount))
        ? calculateXlmAmount(parseFloat(amount))
        : 0;

  const tokenAmount =
    inputType === "tokens"
      ? amount && !isNaN(parseFloat(amount))
        ? parseFloat(amount)
        : 0
      : amount && !isNaN(parseFloat(amount))
        ? calculateTokenAmount(parseFloat(amount))
        : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate wallet connection
    if (!address) {
      setError("Please connect your wallet first");
      console.error("Wallet not connected");
      return;
    }

    // Validate token issuer
    if (!tokenIssuer) {
      setError("Token issuer is required");
      console.error("Token issuer not provided");
      return;
    }

    const amountNum = parseFloat(amount);
    if (!amount || isNaN(amountNum) || amountNum <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Calculate XLM amount to spend
      const xlmToSpend =
        inputType === "xlm" ? amountNum : calculateXlmAmount(amountNum);
      const tokensToReceive =
        inputType === "tokens" ? amountNum : calculateTokenAmount(amountNum);

      console.log("=== Starting Token Purchase ===");
      console.log("Token:", tokenSymbol);
      console.log("Issuer:", tokenIssuer);
      console.log("Buyer:", address);
      console.log("Amount XLM:", xlmToSpend);
      console.log("Expected tokens:", tokensToReceive);

      // Always use the buy token hook when tokenIssuer is provided
      // This will trigger wallet signing - the wallet should open automatically
      console.log("=== BuyDialog: Calling buyToken hook ===");
      console.log("This will open your wallet to sign the transaction");
      console.log(
        "If the wallet does not open, check the browser console for errors",
      );

      try {
        const result = await buyToken({
          tokenCode: tokenSymbol,
          tokenIssuer: tokenIssuer,
          amountXlm: xlmToSpend.toFixed(7),
          buyerPublicKey: address,
        });

        console.log("✅ Purchase successful!");
        console.log("Transaction hash:", result.txHash);
        console.log("Transaction URL:", result.transactionUrl);

        setTransactionUrl(result.transactionUrl);
      } catch (buyError) {
        // Re-throw to be caught by outer try-catch
        console.error("BuyDialog: Error in buyToken hook:", buyError);
        throw buyError;
      }

      // Store purchased amounts for success message
      setPurchasedAmounts({
        xlm: xlmToSpend,
        tokens: tokensToReceive,
      });

      setIsSuccess(true);

      setTimeout(() => {
        setAmount("");
        setIsSuccess(false);
        setIsSubmitting(false);
        setPurchasedAmounts(null);
        setTransactionUrl(null);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("❌ Error purchasing token:", error);
      console.error("Error details:", {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
        error,
      });

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Purchase failed. Please try again.";

      setError(errorMessage);
      setIsSubmitting(false);
      // Note: checkingTrustline is managed by useBuyToken hook, not here

      // Don't show success if there was an error
      setIsSuccess(false);
      setPurchasedAmounts(null);
    }
  };

  const handleClose = () => {
    if (!isSubmitting && !isSuccess) {
      setAmount("");
      setError("");
      onClose();
    }
  };

  return (
    <Dialog
      open={visible}
      onOpenChange={(open: boolean) => {
        if (!open) {
          handleClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-xl">
        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 text-center py-4">
            <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400">
              <div className="text-4xl">✓</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Purchase successful!
              </h3>
              <p className="text-sm text-muted-foreground">
                You've purchased{" "}
                {purchasedAmounts
                  ? purchasedAmounts.tokens.toFixed(7)
                  : "0.0000000"}{" "}
                {tokenSymbol}
              </p>
              <p className="text-sm text-muted-foreground">
                Paid{" "}
                {purchasedAmounts
                  ? purchasedAmounts.xlm.toFixed(7)
                  : "0.0000000"}{" "}
                XLM
              </p>
              {transactionUrl && (
                <a
                  href={transactionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block mt-2"
                >
                  View on Stellar Explorer
                </a>
              )}
            </div>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Buy {tokenSymbol}</DialogTitle>
              <DialogDescription>
                Use XLM to acquire {tokenSymbol} at a fixed 1:1 exchange rate.
              </DialogDescription>
            </DialogHeader>

            <form
              id="buyTokenForm"
              className="space-y-6"
              onSubmit={(e) => {
                void handleSubmit(e);
              }}
            >
              {/* Rate Display */}
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                    Current rate
                  </p>
                  <p className="text-3xl font-semibold text-amber-300">
                    1 XLM = 1 {tokenSymbol}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fixed 1:1 exchange rate
                  </p>
                </CardContent>
              </Card>

              {/* Input Type Toggle */}
              <div className="inline-flex w-full rounded-md border border-border/60 bg-background p-1 text-xs font-semibold text-muted-foreground">
                <button
                  type="button"
                  className={`flex-1 rounded-md px-3 py-2 transition ${
                    inputType === "xlm"
                      ? "bg-foreground text-background"
                      : "hover:text-foreground"
                  }`}
                  onClick={() => {
                    setInputType("xlm");
                    setAmount("");
                    setError("");
                  }}
                  disabled={isSubmitting || buyLoading || checkingTrustline}
                >
                  XLM
                </button>
                <button
                  type="button"
                  className={`flex-1 rounded-md px-3 py-2 transition ${
                    inputType === "tokens"
                      ? "bg-foreground text-background"
                      : "hover:text-foreground"
                  }`}
                  onClick={() => {
                    setInputType("tokens");
                    setAmount("");
                    setError("");
                  }}
                  disabled={isSubmitting || buyLoading || checkingTrustline}
                >
                  {tokenSymbol}
                </button>
              </div>

              {/* Amount Input */}
              <div className="space-y-2">
                <Label htmlFor="amount">
                  {inputType === "xlm"
                    ? "Amount to Pay (XLM)"
                    : `Amount to Buy (${tokenSymbol})`}
                </Label>
                <div className="relative">
                  <Input
                    id="amount"
                    type="number"
                    step="0.0000001"
                    min="0"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                      setError("");
                    }}
                    placeholder="0.0000000"
                    disabled={
                      isSubmitting || buyLoading || checkingTrustline || !address
                    }
                    required
                    autoFocus
                    className="pr-16 text-lg"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs font-semibold text-muted-foreground">
                    {inputType === "xlm" ? "XLM" : tokenSymbol}
                  </span>
                </div>
                {(error || buyError) && (
                  <Alert variant="destructive">
                    <AlertDescription>{error || buyError}</AlertDescription>
                  </Alert>
                )}
                {checkingTrustline && (
                  <Alert>
                    <AlertDescription className="text-amber-500">
                      Checking trustline...
                    </AlertDescription>
                  </Alert>
                )}
              </div>

              {/* Purchase Info */}
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      You will receive:
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {tokenAmount > 0
                        ? `${tokenAmount.toFixed(7)} ${tokenSymbol}`
                        : `0.0000000 ${tokenSymbol}`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t border-border/40 pt-3">
                    <span className="text-sm text-muted-foreground">
                      Pay with:
                    </span>
                    <span className="text-sm font-semibold text-amber-300">
                      {xlmAmount > 0
                        ? `${xlmAmount.toFixed(7)} XLM`
                        : "0.0000000 XLM"}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </form>

            <DialogFooter className="gap-2 sm:flex-row">
              <Button
                type="submit"
                form="buyTokenForm"
                disabled={
                  !amount ||
                  isNaN(parseFloat(amount)) ||
                  parseFloat(amount) <= 0 ||
                  isSubmitting ||
                  buyLoading ||
                  checkingTrustline ||
                  !address
                }
                className="min-w-[180px]"
              >
                {isSubmitting || buyLoading || checkingTrustline ? (
                  <span className="inline-flex items-center gap-2 text-sm">
                    <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    {checkingTrustline
                      ? "Checking trustline..."
                      : buyLoading
                        ? "Processing..."
                        : "Submitting..."}
                  </span>
                ) : (
                  <>
                    <span role="img" aria-hidden>
                      💰
                    </span>
                    Buy with XLM
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={handleClose}
                disabled={isSubmitting || buyLoading || checkingTrustline}
              >
                Cancel
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/components/CreateTokenForm.css

```css
/* Modal Overlay - Full screen backdrop */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 7, 18, 0.8);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  animation: fadeIn 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Modal Container */
.modal-container {
  background: #1f2937;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.75);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
  position: relative;
}

.modal-container.wizard-container {
  max-width: 600px;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Modal Header */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f9fafb;
  margin: 0;
  line-height: 1.4;
}

.modal-close-button {
  background: transparent;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  width: 32px;
  height: 32px;
}

.modal-close-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  color: #f9fafb;
}

.modal-close-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.modal-close-icon {
  width: 20px;
  height: 20px;
}

/* Modal Body */
.modal-body {
  padding: 2rem;
  overflow-y: auto;
  flex: 1;
}

.modal-body form {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}

.modal-description {
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.modal-inputs {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  color: #e5e7eb;
  font-size: 0.875rem;
  font-weight: 600;
  display: block;
}

.input-field {
  width: 100%;
  background: #111827;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 0.875rem 1.25rem;
  color: #f9fafb;
  font-size: 1rem;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.input-field::placeholder {
  color: #6b7280;
}

.input-field:focus {
  outline: none;
  border-color: #fcd34d;
  box-shadow: 0 0 0 4px rgba(252, 211, 77, 0.1);
}

.input-field:hover:not(:focus):not(:disabled) {
  border-color: rgba(255, 255, 255, 0.2);
}

.input-field:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #0f172a;
}

.symbol-preview {
  padding: 1rem 1.25rem;
  background: rgba(252, 211, 77, 0.15);
  border: 1px solid rgba(252, 211, 77, 0.3);
  border-radius: 10px;
  margin-top: 0.5rem;
}

.symbol-preview-text {
  color: #fcd34d;
  font-size: 0.875rem;
  margin: 0;
  line-height: 1.5;
}

.symbol-preview-text strong {
  color: #fbbf24;
  font-weight: 700;
}

/* Modal Footer */
.modal-footer {
  padding: 1.5rem 2rem 2rem 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  flex-shrink: 0;
}

.modal-button-primary {
  width: 100%;
  background: #fcd34d;
  color: #030712;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(252, 211, 77, 0.3);
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-button-primary:hover:not(:disabled) {
  background: #fbbf24;
  box-shadow: 0 6px 12px -2px rgba(252, 211, 77, 0.4);
  transform: translateY(-1px);
}

.modal-button-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px -1px rgba(252, 211, 77, 0.3);
}

.modal-button-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #6b7280;
  transform: none;
  box-shadow: none;
}

.modal-button-secondary {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  color: #d1d5db;
  font-weight: 600;
  font-size: 0.9375rem;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  padding: 0.875rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-button-secondary:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  color: #f3f4f6;
}

.modal-button-secondary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: rgba(255, 255, 255, 0.03);
}

/* Progress Indicator */
.progress-indicator {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.progress-bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 1rem;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #fcd34d, #fbbf24);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.progress-step {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
  transition: all 0.3s ease;
  cursor: default;
}

.progress-step.completed {
  background: #fcd34d;
  color: #030712;
}

.progress-step.active {
  background: #fcd34d;
  color: #030712;
  box-shadow: 0 0 0 4px rgba(252, 211, 77, 0.2);
}

/* Step Content */
.step-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  text-align: center;
  min-height: 200px;
  justify-content: center;
}

.step-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #f9fafb;
  margin: 0;
}

.step-description {
  color: #d1d5db;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
}

/* Loading Spinner */
.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(252, 211, 77, 0.2);
  border-top-color: #fcd34d;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Success Icon */
.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto;
}

.success-icon.large {
  width: 80px;
  height: 80px;
  font-size: 2.5rem;
}

/* Error Message */
.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #fca5a5;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.error-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

/* Info Box */
.info-box {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  width: 100%;
  text-align: left;
}

.info-text {
  color: #93c5fd;
  font-size: 0.875rem;
  margin: 0;
  word-break: break-all;
}

.mono-text {
  font-family: monospace;
  font-size: 0.8125rem;
}

/* Wallet Info */
.wallet-info {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  width: 100%;
}

.wallet-info-text {
  color: #86efac;
  font-size: 0.875rem;
  margin: 0;
}

.wallet-address {
  font-family: monospace;
  font-weight: 600;
  color: #22c55e;
}

/* Token Form */
.token-form {
  width: 100%;
  text-align: left;
}

/* Input Slider */
.input-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.input-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fcd34d;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.input-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fcd34d;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.fee-info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

/* Transaction Link */
.tx-link {
  color: #60a5fa;
  text-decoration: none;
  font-size: 0.875rem;
  word-break: break-all;
  transition: color 0.2s ease;
}

.tx-link:hover {
  color: #93c5fd;
  text-decoration: underline;
}

/* Distribution Summary */
.distribution-summary {
  background: rgba(252, 211, 77, 0.1);
  border: 1px solid rgba(252, 211, 77, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.distribution-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.distribution-item:last-child {
  border-bottom: none;
}

.distribution-item span {
  color: #d1d5db;
  font-size: 0.9375rem;
}

.distribution-item strong {
  color: #fcd34d;
  font-size: 1.125rem;
  font-weight: 700;
}

/* Token Summary */
.token-summary {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.summary-item:last-child {
  border-bottom: none;
}

.summary-item span {
  color: #9ca3af;
  font-size: 0.875rem;
}

.summary-item strong {
  color: #f9fafb;
  font-size: 1rem;
  font-weight: 600;
}

/* Next Steps */
.next-steps {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  width: 100%;
  text-align: left;
}

.next-steps h4 {
  color: #93c5fd;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.next-steps ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #bfdbfe;
  font-size: 0.875rem;
  line-height: 1.8;
}

.next-steps li {
  margin-bottom: 0.5rem;
}

/* Textarea */
textarea.input-field {
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

/* Responsive */
@media (max-width: 640px) {
  .modal-overlay {
    padding: 0.75rem;
  }

  .modal-container {
    max-width: 100%;
    max-height: calc(100vh - 1.5rem);
    border-radius: 12px;
  }

  .modal-header {
    padding: 1.5rem 1.5rem;
  }

  .modal-title {
    font-size: 1.25rem;
  }

  .modal-body {
    padding: 1.5rem;
  }

  .modal-footer {
    padding: 1.25rem 1.5rem 1.5rem 1.5rem;
  }

  .modal-inputs {
    gap: 1rem;
  }

  .input-field {
    padding: 0.75rem 1rem;
    font-size: 0.9375rem;
  }

  .progress-indicator {
    padding: 1rem 1.5rem;
  }

  .progress-steps {
    gap: 0.25rem;
  }

  .progress-step {
    width: 28px;
    height: 28px;
    font-size: 0.75rem;
  }

  .step-content {
    min-height: 150px;
    gap: 1rem;
  }

  .step-title {
    font-size: 1.25rem;
  }

  .step-description {
    font-size: 0.875rem;
  }

  .success-icon {
    width: 56px;
    height: 56px;
    font-size: 1.75rem;
  }

  .success-icon.large {
    width: 64px;
    height: 64px;
    font-size: 2rem;
  }

  .distribution-summary,
  .token-summary,
  .next-steps {
    padding: 1rem;
  }
}
```

## File: src/components/NetworkPill.tsx

```typescript
import React from "react";
import { useWallet } from "../hooks/useWallet";
import { stellarNetwork } from "../contracts/util";
import { cn } from "@/lib/utils";

// Format network name with first letter capitalized
const formatNetworkName = (name: string) =>
  // TODO: This is a workaround until @creit-tech/stellar-wallets-kit uses the new name for a local network.
  name === "STANDALONE"
    ? "Local"
    : name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const appNetwork = formatNetworkName(stellarNetwork);

const NetworkPill: React.FC = () => {
  const { network, address } = useWallet();

  // Check if there's a network mismatch
  const walletNetwork = formatNetworkName(network ?? "");
  const isNetworkMismatch = walletNetwork !== appNetwork;

  let title = "";
  let status: "neutral" | "error" | "success" = "neutral";

  if (!address) {
    title = "Connect your wallet using this network.";
  } else if (isNetworkMismatch) {
    title = `Wallet is on ${walletNetwork}, connect to ${appNetwork} instead.`;
    status = "error";
  } else {
    status = "success";
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition",
        status === "success" &&
          "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
        status === "error" && "border-red-400/40 bg-red-500/10 text-red-200",
        status === "neutral" &&
          "border-border/60 bg-background/50 text-muted-foreground",
      )}
      title={title}
    >
      <span
        className={cn(
          "size-2.5 rounded-full",
          status === "success" && "bg-emerald-400",
          status === "error" && "bg-red-400",
          status === "neutral" && "bg-muted-foreground/70",
        )}
      />
      <span>{appNetwork}</span>
    </div>
  );
};

export default NetworkPill;
```

## File: src/components/WalletButton.tsx

```typescript
import { useState } from "react";
import { useWallet } from "../hooks/useWallet";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { connectWallet, disconnectWallet } from "../util/wallet";
import { Button } from "./ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog.tsx";
import { Avatar, AvatarFallback } from "./ui/avatar.tsx";

export const WalletButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { address, isPending } = useWallet();
  const { xlm, isLoading } = useWalletBalance();
  const buttonLabel = isPending ? "Loading..." : "Connect";

  if (!address) {
    return (
      <Button
        type="button"
        size="sm"
        onClick={() => void connectWallet()}
        className="whitespace-nowrap"
        disabled={isPending}
      >
        {buttonLabel}
      </Button>
    );
  }

  const shortAddress = `${address.slice(0, 6)}…${address.slice(-4)}`;

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div className="flex items-center gap-3 text-sm">
        <p className="hidden text-xs font-medium uppercase tracking-wide text-muted-foreground/80 sm:block">
          Wallet Balance:{" "}
          <span className="text-foreground">
            {isLoading ? "…" : `${xlm} XLM`}
          </span>
        </p>
        <DialogTrigger asChild>
          <button
            type="button"
            className="focus-visible:ring-ring/60 inline-flex items-center gap-3 rounded-full border border-border/60 bg-[#0b0f1a]/80 px-3 py-1 text-left text-xs font-semibold uppercase tracking-wide text-foreground transition hover:border-accent focus-visible:outline-none focus-visible:ring-2"
          >
            <Avatar className="size-9 border border-border/60 bg-[#111827]">
              <AvatarFallback className="text-[0.6rem] font-semibold uppercase tracking-wider text-accent">
                {address.slice(-2)}
              </AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline-flex">{shortAddress}</span>
          </button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Disconnect wallet</DialogTitle>
          <DialogDescription>
            Connected as{" "}
            <span className="font-mono break-all text-foreground">
              {address}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-md border border-border/60 bg-muted/10 p-3 font-mono text-xs text-muted-foreground break-all">
          {address}
        </div>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => {
              void disconnectWallet().then(() => setIsDialogOpen(false));
            }}
          >
            Disconnect
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setIsDialogOpen(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/pages/Home.tsx

```typescript
import ScaffoldHome from "./ScaffoldHome";

export default function MainPage() {
  return <ScaffoldHome />;
}
```

## File: src/pages/Wallet.tsx

```typescript
import React from "react";
import { useWallet } from "../hooks/useWallet";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { connectWallet, type Balance } from "../util/wallet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useOwnedNfts } from "../hooks/useOwnedNfts";

const isCreditAsset = (
  balance: Balance,
): balance is Balance & { asset_code: string; asset_issuer: string } => {
  return (
    balance.asset_type !== "native" &&
    balance.asset_type !== "liquidity_pool_shares" &&
    "asset_code" in balance &&
    "asset_issuer" in balance
  );
};

const Wallet: React.FC = () => {
  const { address, isPending } = useWallet();
  const { xlm, balances, isLoading, error } = useWalletBalance();
  const {
    data: ownedCollections = [],
    isPending: ownedLoading,
    error: ownedError,
    refetch: refetchOwned,
  } = useOwnedNfts(address);
  const creditBalances = balances.filter(isCreditAsset);
  const formatContract = (value: string) =>
    value.length > 12 ? `${value.slice(0, 6)}…${value.slice(-4)}` : value;

  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Manage Assets
        </p>
        <h1 className="text-4xl font-bold text-white">Wallet</h1>
        <p className="text-muted-foreground">
          Check balances, review issued tokens, and understand what&apos;s
          inside your Dropsland wallet.
        </p>
      </section>

      {!address ? (
        <Card className="border-border/60 bg-background/70">
          <CardHeader>
            <CardTitle>Connect your wallet</CardTitle>
            <CardDescription>
              Hook up Freighter or any Stellar-compatible wallet to fetch
              balances and start interacting with Dropsland.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              type="button"
              onClick={() => void connectWallet()}
              disabled={isPending}
            >
              {isPending ? "Connecting..." : "Connect Wallet"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="border-border/60 bg-background/70">
            <CardHeader>
              <CardTitle>Wallet connected</CardTitle>
              <CardDescription>
                Your Stellar account is live on Dropsland.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border border-border/50 bg-[#05080f] p-4 font-mono text-xs text-muted-foreground break-all">
                {address}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-border/60 bg-background/60">
              <CardHeader>
                <CardTitle>Balance</CardTitle>
                <CardDescription>
                  Live XLM balance + funding status.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">
                    XLM
                  </p>
                  <p className="text-4xl font-bold text-white">
                    {isLoading ? "—" : `${xlm} XLM`}
                  </p>
                </div>
                {error ? (
                  <p className="text-sm text-red-400">{error.message}</p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    {Number(xlm.replace(/,/g, "")) > 0
                      ? "Account funded"
                      : "Fund your account to deploy and interact."}
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="border-border/60 bg-background/60">
              <CardHeader>
                <CardTitle>Held tokens</CardTitle>
                <CardDescription>
                  Issued assets detected in this wallet.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {creditBalances.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    No tokens yet. Collect some artist assets to see them here.
                  </p>
                ) : (
                  creditBalances.map((balance) => (
                    <div
                      key={`${balance.asset_code}-${balance.asset_issuer}`}
                      className="rounded-lg border border-border/40 bg-background/40 p-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-semibold text-white">
                            {balance.asset_code}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Issuer: {balance.asset_issuer.slice(0, 10)}...
                            {balance.asset_issuer.slice(-6)}
                          </p>
                        </div>
                        <span className="font-mono text-sm text-amber-200">
                          {balance.balance}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/60 bg-background/60">
            <CardHeader>
              <CardTitle>Owned NFTs</CardTitle>
              <CardDescription>
                Dropsland NFTs unlock IRL perks, early releases, and token-gated
                chats.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {ownedLoading ? (
                <p className="text-sm text-muted-foreground">
                  Checking Soroban contracts for your collectibles...
                </p>
              ) : ownedError ? (
                <div className="space-y-2">
                  <p className="text-sm text-red-400">
                    {ownedError instanceof Error
                      ? ownedError.message
                      : "Unable to load owned NFTs"}
                  </p>
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => void refetchOwned()}
                  >
                    Retry
                  </Button>
                </div>
              ) : ownedCollections.length === 0 ? (
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    No NFTs minted yet. Claim a reward from an artist to see it
                    here.
                  </p>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>Private listening parties & green room access.</li>
                    <li>Token airdrops + allowlist fast tracks.</li>
                    <li>Physical merch and IRL meetups.</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3 text-sm">
                  {ownedCollections.map((collection) => (
                    <div
                      key={collection.contractId}
                      className="rounded-md border border-border/40 bg-background/50 p-3"
                    >
                      <p className="text-sm font-semibold text-white">
                        Collection {formatContract(collection.contractId)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Token IDs: {collection.tokenIds.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Wallet;
```

## File: src/main.tsx

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@stellar/design-system/build/styles.min.css";
import { WalletProvider } from "./providers/WalletProvider.tsx";
import { ProfileTypeProvider } from "./providers/ProfileTypeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/sonner.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <ProfileTypeProvider>
          <BrowserRouter>
            <App />
            <Toaster richColors />
          </BrowserRouter>
        </ProfileTypeProvider>
      </WalletProvider>
    </QueryClientProvider>
  </StrictMode>,
);
```

## File: environments.toml

```toml
### Development environment configuration
[development.network]
rpc-url = "http://localhost:8000/rpc"
network-passphrase = "Standalone Network ; February 2017"
run-locally = true # automatically start the local network container, if not already running

# [development.network]
# rpc-url = "https://soroban-testnet.stellar.org"
# network-passphrase = "Test SDF Network ; September 2015"
# run-locally = false

[[development.accounts]]
name = "me" # Required. Keys for this account will be saved to `./.stellar/identity`
default = true # Optional. Whether to use this account as the `--source` for commands that need one.

[development.contracts.dj_fungible]
client = true
constructor_args = "--admin me --manager me --initial_supply 1000000000000000000000"

[development.contracts.dj_nft]
client = true
constructor_args = "--owner me --base_uri https://example.com --name MyNFT --symbol MYNFT"

[development.contracts.factory]
client = true
constructor_args = "--admin me --token CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC --fungible_wasm 8f83b54a717f9fb588ca00bf6aeab84a9286560a6156b4bd5e5f971d0fb58e58 --nft_wasm c310fe3728f1e3556fdd4b49fb632fac6423b81a3789f877e100c9f512317281"

# Rather than in one list, TOML allows specifying contracts in their own "sections"
[development.contracts.guess_the_number]
# Generate a contract client (NPM package) for this contract. This means:
#   - compile (build) the contract source to Wasm
#   - deploy the contract to the `network` specified above
#   - run any `init` script specified below
#   - generate an NPM client (also called the "TS Bindings") for the deployed
#     contract to the NPM workspace in `packages/*`
#   - import the contract for easy access in the frontend in `src/contracts`
#
# You can only use `client = true` when:
#   - the contract source must be part of the local Cargo workspace (in the
#     PROJECT_ROOT/contracts folder)
#   - The specified name here ("guess_the_number") must match the
#     underscored-version of the `name` in the contract's Cargo.toml.
#   - The environment is `development` or `testing`
client = true

# If your contract has a `__constructor`, specify your arguments to it here.
# These are the same arguments you could pass after the `--` in a call to
# `stellar contract deploy`
# Only available in `development` and `testing` environments
constructor_args = """
--admin me
"""

# Calls to the contract to make after it's deployed and initialized with
# `constructor_args`. Commands here will be appended to:
#
#     stellar contract invoke \
#         --id [this contract's id] \
#         --source [first (or `default`) account, specified above] \
#         --network [specified above] \
#         --
#
# That is, each line in this `init` script is *only* the part after the `--` in
# a `stellar contract invoke` command.
#
# To use another account as the `--source`, prefix the line with
# `STELLAR_ACCOUNT=other-account`.
#
# Only supported in `development` and `testing` environments.
after_deploy = """
reset
"""

# Coming Soon: Specify live contracts to bind & import in this project using the given name.
# During initialization, these contracts will also be "spooned" into the development network,
# meaning that their data will match the live network at the given sequence number.
# [development.contracts.eurc]
# environment = "production"
# address = "C..."
# at-ledger-sequence = 50153603

### Staging environment configuration
[staging.network]
rpc-url = "https://soroban-testnet.stellar.org"
network-passphrase = "Test SDF Network ; September 2015"

[[staging.accounts]]
name = "testnet-user"
default = true

[staging.contracts]
# soroban-atomic-swap-contract = { id = "C123..." }
# soroban-auth-contract = { id = "C234..." }
# soroban-errors-contract = { id = "C345..." }
# soroban-hello-world-contract = { id = "C456..." }
# soroban-increment-contract = { id = "C567..." }
# soroban-token-contract = { id = "C678..." }
# eurc = { id = "C789..." }

### Production environment configuration
[production.network]
rpc-url = "https://our-custom-rpc-provider.cool"
network-passphrase = "Public Global Stellar Network ; September 2015"

[[production.accounts]]
name = "official-team-account"
default = true

[production.contracts]
# soroban-atomic-swap-contract = { id = "C987..." }
# soroban-auth-contract = { id = "C876..." }
# soroban-errors-contract = { id = "C765..." }
# soroban-hello-world-contract = { id = "C654..." }
# soroban-increment-contract = { id = "C543..." }
# soroban-token-contract = { id = "C432..." }
# eurc = { id = "C321..." }
```

## File: eslint.config.js

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactDOM from "eslint-plugin-react-dom";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactX from "eslint-plugin-react-x";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { globalIgnores } from "eslint/config";

export default tseslint.config(
  globalIgnores([
    "dist",
    "packages",
    "src/contracts/*",
    "!src/contracts/util.ts",
    "target",
    "supabase/**/*",
  ]),
  {
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactDOM.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      reactX.configs["recommended-typescript"],
      prettier,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRoot: import.meta.dirname,
      },
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
```

## File: src/pages/Activity.tsx

```typescript
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ActivityType = "all" | "tokens" | "nfts" | "music" | "community";

type ActivityItem = {
  id: string;
  type:
    | "token_purchase"
    | "nft_mint"
    | "music_upload"
    | "community_interaction";
  title: string;
  description: string;
  timestamp: string;
  artist?: string;
};

const activityFilters: Array<{ id: ActivityType; label: string }> = [
  { id: "all", label: "All" },
  { id: "tokens", label: "Tokens" },
  { id: "nfts", label: "NFTs" },
  { id: "music", label: "Music" },
  { id: "community", label: "Community" },
];

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "token_purchase",
    title: "Token Purchase",
    description: "Purchased TOKEN1 from Artist Name",
    timestamp: "2 hours ago",
    artist: "Artist Name",
  },
  {
    id: "2",
    type: "nft_mint",
    title: "NFT Minted",
    description: "Minted exclusive NFT from Artist Name",
    timestamp: "5 hours ago",
    artist: "Artist Name",
  },
  {
    id: "3",
    type: "music_upload",
    title: "New Track Uploaded",
    description: "Artist Name uploaded a new track: 'Track Title'",
    timestamp: "1 day ago",
    artist: "Artist Name",
  },
  {
    id: "4",
    type: "community_interaction",
    title: "Community Update",
    description:
      "New perk unlocked: Early access to Artist Name's latest release",
    timestamp: "2 days ago",
    artist: "Artist Name",
  },
];

const getActivityIcon = (type: ActivityItem["type"]) => {
  switch (type) {
    case "token_purchase":
      return "💰";
    case "nft_mint":
      return "🖼️";
    case "music_upload":
      return "🎵";
    case "community_interaction":
      return "👥";
    default:
      return "📋";
  }
};

const Activity: React.FC = () => {
  const [filter, setFilter] = useState<ActivityType>("all");

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => {
          switch (filter) {
            case "tokens":
              return activity.type === "token_purchase";
            case "nfts":
              return activity.type === "nft_mint";
            case "music":
              return activity.type === "music_upload";
            case "community":
              return activity.type === "community_interaction";
            default:
              return true;
          }
        });

  return (
    <div className="container mx-auto space-y-8 px-4 py-10">
      <section className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
          Track Everything
        </p>
        <h1 className="text-4xl font-bold text-white">Activity</h1>
        <p className="text-muted-foreground">
          Purchases, mints, uploads, and community moments captured on-chain.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-white">Filter by Type</h2>
        <div className="flex flex-wrap gap-2">
          {activityFilters.map((tab) => (
            <Button
              key={tab.id}
              type="button"
              variant={filter === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </section>

      {filteredActivities.length > 0 ? (
        <div className="space-y-4">
          {filteredActivities.map((activity) => (
            <Card
              key={activity.id}
              className="border-border/60 bg-background/70"
            >
              <CardContent className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start">
                <div className="flex size-12 items-center justify-center rounded-full border border-border/50 bg-background/40 text-xl">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl text-white">
                        {activity.title}
                      </CardTitle>
                      <CardDescription>{activity.timestamp}</CardDescription>
                    </div>
                    {activity.artist && (
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        disabled
                      >
                        View {activity.artist}
                      </Button>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-border/60 bg-background/70">
          <CardContent className="py-8 text-center text-sm text-muted-foreground">
            No activity yet. Start collecting, minting, or uploading to see a
            trail here.
          </CardContent>
        </Card>
      )}

      <Card className="border-border/60 bg-background/70">
        <CardHeader>
          <CardTitle>Activity Types</CardTitle>
          <CardDescription>What you&apos;ll see in this feed.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-white">Token Purchases:</span>{" "}
            When you buy artist tokens with USDC.
          </p>
          <p>
            <span className="font-semibold text-white">NFT Mints:</span> When
            you collect limited visuals or membership passes.
          </p>
          <p>
            <span className="font-semibold text-white">Music Uploads:</span>{" "}
            Fresh tracks shipping from your favorite creators.
          </p>
          <p>
            <span className="font-semibold text-white">Community:</span>{" "}
            Unlocks, announcements, and token-gated news.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activity;
```

## File: src/index.css

```css
/* Import font for Stellar Design System */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Inconsolata:wght@500&display=swap");
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

/* Dark Theme Variables */
:root {
  --bg-primary: #030712;
  --bg-secondary: #111827;
  --bg-tertiary: #1f2937;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --text-tertiary: #9ca3af;
  --border: rgba(255, 255, 255, 0.15);
  --hover: rgba(255, 255, 255, 0.05);
  --shadow: rgba(0, 0, 0, 0.3);
  --transition: all 0.2s ease;
  --radius: 0.625rem;

  --background: #030712;
  --foreground: #f9fafb;
  --card: #0b1020;
  --card-foreground: #f9fafb;
  --popover: #0b0f1a;
  --popover-foreground: #f9fafb;
  --primary: #fcd34d;
  --primary-foreground: #030712;
  --secondary: #111827;
  --secondary-foreground: #f9fafb;
  --muted: #1f2330;
  --muted-foreground: #9ca3af;
  --accent: #fcd34d;
  --accent-foreground: #030712;
  --destructive: #f87171;
  --input: #1f2937;
  --ring: #fcd34d;
  --chart-1: #fbbf24;
  --chart-2: #34d399;
  --chart-3: #38bdf8;
  --chart-4: #c084fc;
  --chart-5: #fb7185;
  --sidebar: #05080f;
  --sidebar-foreground: #f9fafb;
  --sidebar-primary: #fcd34d;
  --sidebar-primary-foreground: #030712;
  --sidebar-accent: #1f2937;
  --sidebar-accent-foreground: #f9fafb;
  --sidebar-border: rgba(255, 255, 255, 0.08);
  --sidebar-ring: #fcd34d;
}

/* Global Dark Theme Styles */
* {
  box-sizing: border-box;
}

html {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family:
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: var(--transition);
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--bg-tertiary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #374151;
}

/* Link Styling */
a {
  color: var(--accent);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: #fbbf24;
  text-decoration: underline;
}

/* Selection Styling */
::selection {
  background-color: var(--accent);
  color: var(--bg-primary);
}

/* Focus Styles */
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Code and Monospace Styling */
code {
  background-color: var(--bg-secondary);
  color: var(--accent);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-size: 0.875em;
  font-family: "Inconsolata", monospace;
}

pre {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  color: var(--text-primary);
}

pre code {
  background-color: transparent;
  padding: 0;
  color: inherit;
}

/* Button Enhancements */
button {
  transition: var(--transition);
}

/* Card Enhancements */
[class*="Card"] {
  transition: var(--transition);
}

/* Input Enhancements */
input,
textarea,
select {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text-primary);
  transition: var(--transition);
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--accent);
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: var(--text-tertiary);
}

/* Global overrides for Stellar Design System Card components */
/* Use more specific selectors to override Stellar Design System defaults */
/* Target all possible Card variations */
div[class*="Card"],
section[class*="Card"],
article[class*="Card"],
[class*="Card"] {
  background-color: #111827 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  color: #f9fafb !important;
}

/* Force dark background on all Cards - highest priority */
* [class*="Card"],
* div[class*="Card"],
* section[class*="Card"] {
  background-color: #111827 !important;
}

/* Ensure borders are visible */
[class*="Card"] {
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

/* Ensure Text components inside Cards have proper colors */
[class*="Card"] [class*="Text"],
[class*="Card"] p:not([style*="color"]),
[class*="Card"] h1:not([style*="color"]),
[class*="Card"] h2:not([style*="color"]),
[class*="Card"] h3:not([style*="color"]),
[class*="Card"] h4:not([style*="color"]) {
  color: #f9fafb;
}

[class*="Card"] p[style*="color"] {
  /* Keep inline color styles but ensure visibility */
}

/* Modal dark theme - Enhanced & Centered */
[class*="Modal"] {
  background-color: #111827 !important;
  color: #f9fafb !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
  margin: auto !important;
  position: relative !important;
  max-height: 90vh !important;
  display: flex !important;
  flex-direction: column !important;
  z-index: 9999 !important;
}

[class*="Modal"] [class*="Modal_Content"],
[class*="Modal"] [class*="Modal_Body"] {
  background-color: transparent !important;
  color: #f9fafb !important;
}

/* Modal Overlay/Backdrop - Centered */
/* Target all possible overlay structures */
[class*="Modal_Overlay"],
[class*="Overlay"],
[class*="ModalOverlay"],
div[role="dialog"] ~ div,
body > div[style*="position: fixed"],
body > div[style*="z-index"]:has([class*="Modal"]) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgba(3, 7, 18, 0.8) !important;
  backdrop-filter: blur(8px);
  z-index: 9998 !important;
  padding: 20px !important;
  box-sizing: border-box !important;
  margin: 0 !important;
}

/* Ensure modals inside overlays are centered */
[class*="Modal_Overlay"] > [class*="Modal"],
[class*="Overlay"] > [class*="Modal"],
div[role="dialog"] {
  margin: 0 !important;
  align-self: center !important;
}

[class*="Modal"] [class*="Modal_Heading"],
[class*="Modal"] h1,
[class*="Modal"] h2,
[class*="Modal"] h3 {
  color: #f9fafb !important;
}

[class*="Modal"] p,
[class*="Modal"] [class*="Text"] {
  color: #d1d5db !important;
}

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.205 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.556 0 0);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## File: src/pages/Explore.tsx

```typescript
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
```

## File: src/pages/Profile.tsx

```typescript
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
```

## File: src/App.tsx

```typescript
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import { Code2 } from "lucide-react";
import ConnectAccount from "./components/ConnectAccount.tsx";
import BottomNav from "./components/BottomNav.tsx";
import ProfileTypeSelector from "./components/ProfileTypeSelector.tsx";
import HeaderLogo from "./components/HeaderLogo.tsx";
import Home from "./pages/Home.tsx";
import Debugger from "./pages/Debugger.tsx";
import Explore from "./pages/Explore.tsx";
import Wallet from "./pages/Wallet.tsx";
import Activity from "./pages/Activity.tsx";
import Profile from "./pages/Profile.tsx";
import { Button } from "./components/ui/button.tsx";

const AppLayout: React.FC = () => (
  <div className="flex min-h-screen flex-col bg-[#030712] text-foreground">
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-4">
        <div className="flex flex-1 items-center gap-4">
          <HeaderLogo />
          <div className="hidden h-6 w-px bg-border/40 lg:block" />
          <ProfileTypeSelector />
        </div>
        <div className="flex items-center gap-3">
          <ConnectAccount />
          <NavLink
            to="/debug"
            className="inline-flex"
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Button
                type="button"
                size="sm"
                variant={isActive ? "default" : "outline"}
                className="gap-2"
              >
                <Code2 className="size-4" />
                Debugger
              </Button>
            )}
          </NavLink>
        </div>
      </div>
    </header>
    <main className="flex-1 pb-24">
      <Outlet />
    </main>
    <footer className="border-t border-border/40 bg-background/80">
      <div className="container mx-auto flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Dropsland. All rights reserved.</p>
        <p className="text-muted-foreground/80">
          Built with Stellar + Tailwind.
        </p>
      </div>
    </footer>
    <BottomNav />
  </div>
);

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scaffold" element={<Home />} />
        <Route path="/debug" element={<Debugger />} />
        <Route path="/debug/:contractName" element={<Debugger />} />
      </Route>
    </Routes>
  );
}

export default App;
```

## File: package.json

```json
{
  "name": "scaffold-stellar-frontend",
  "type": "module",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "concurrently \"stellar scaffold watch --build-clients\" \"vite\"",
    "start": "concurrently \"stellar scaffold watch --build-clients\" \"vite\"",
    "build": "tsc -b && vite build",
    "install:contracts": "npm install --workspace=packages && npm run build --workspace=packages",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier . --write",
    "prepare": "husky"
  },
  "workspaces": ["packages/*"],
  "dependencies": {
    "@creit.tech/stellar-wallets-kit": "^1.9.5",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@stellar/design-system": "^3.1.5",
    "@stellar/stellar-sdk": "^14.2.0",
    "@stellar/stellar-xdr-json": "^23.0.0",
    "@tailwindcss/vite": "^4.1.17",
    "@tanstack/react-query": "^5.90.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lossless-json": "^4.2.0",
    "lucide-react": "^0.553.0",
    "next-themes": "^0.4.6",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.3",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "zod": "^4.1.11"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/lodash": "^4.17.20",
    "@types/node": "^24.10.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@types/react-router-dom": "^5.3.3",
    "@vitejs/plugin-react": "^5.0.4",
    "autoprefixer": "^10.4.21",
    "concurrently": "^9.2.1",
    "dotenv": "^17.2.3",
    "eslint": "^9.36.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-react-dom": "^2.0.3",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "eslint-plugin-react-x": "^2.0.3",
    "glob": "^11.0.3",
    "globals": "^16.4.0",
    "husky": "^9.1.7",
    "lint-staged": "^16.2.3",
    "postcss": "^8.5.6",
    "prettier": "3.6.2",
    "supabase": "^2.54.11",
    "tailwindcss": "^4.1.17",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.2",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.11",
    "vite-plugin-node-polyfills": "^0.24.0",
    "vite-plugin-wasm": "^3.5.0"
  },
  "lint-staged": {
    "**/*": [
      "eslint --fix --no-warn-ignored",
      "prettier --write --ignore-unknown"
    ]
  }
}
```

## File: src/components/CreateTokenForm.tsx

```typescript
import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog.tsx";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Textarea } from "./ui/textarea.tsx";
import { Alert, AlertDescription } from "./ui/alert.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { useWallet } from "../hooks/useWallet";
import { connectWallet } from "../util/wallet";
import { useTokenCreation } from "../hooks/useTokenCreation";
import type { TokenCreationFormData } from "../types/tokenCreation";
import { stellarNetwork } from "../contracts/util";

interface CreateTokenFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit?: (tokenName: string, symbol: string) => void | Promise<void>;
  onSuccess?: () => void;
}

// Fee Tiers
const FEE_TIERS = {
  BASIC: {
    name: "BASIC",
    platformFee: 5,
    description: "Standard tier for starting artists",
    color: "border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50",
    selectedColor: "border-blue-500 bg-blue-950/50 ring-2 ring-blue-500/50",
    accentColor: "text-blue-400",
    recommended: false,
  },
  PREMIUM: {
    name: "PREMIUM",
    platformFee: 10,
    description: "Popular choice with balanced fees",
    color: "border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50",
    selectedColor:
      "border-purple-500 bg-purple-950/50 ring-2 ring-purple-500/50",
    accentColor: "text-purple-400",
    recommended: true,
  },
  VIP: {
    name: "VIP",
    platformFee: 15,
    description: "Premium support and features",
    color: "border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50",
    selectedColor: "border-amber-500 bg-amber-950/50 ring-2 ring-amber-500/50",
    accentColor: "text-amber-400",
    recommended: false,
  },
} as const;

type FeeTierType = keyof typeof FEE_TIERS;

const STEPS = [
  "Connect Wallet",
  "Token Details",
  "Prepare Token",
  "Wait for Trustline",
  "Sign Emission",
  "Distribution",
  "Success",
];

export const CreateTokenForm: React.FC<CreateTokenFormProps> = ({
  visible,
  onClose,
  onSuccess,
}) => {
  const { address, isPending: walletPending } = useWallet();
  const {
    state,
    reset,
    setError,
    checkWalletConnection,
    handlePrepareToken,
    handleSignEmission,
    handleExecuteDistribution,
    goToStep,
  } = useTokenCreation();

  const [formData, setFormData] = useState<TokenCreationFormData>({
    tokenCode: "",
    tokenName: "",
    totalSupply: "1000000000", // Fixed at 1 billion
    description: "",
    platformFee: 10,
  });

  const [selectedTier, setSelectedTier] = useState<FeeTierType>("PREMIUM");

  // Sync tier selection with formData platformFee
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      platformFee: FEE_TIERS[selectedTier].platformFee,
    }));
  }, [selectedTier]);

  // Reset form when modal closes
  useEffect(() => {
    if (!visible) {
      reset();
      setFormData({
        tokenCode: "",
        tokenName: "",
        totalSupply: "1000000000", // Fixed at 1 billion
        description: "",
        platformFee: 10,
      });
      setSelectedTier("PREMIUM");
    }
  }, [visible, reset]);

  // Initialize step based on wallet connection
  useEffect(() => {
    if (visible) {
      if (address) {
        if (state.step === 1) {
          goToStep(2);
        }
      } else {
        goToStep(1);
      }
    }
  }, [visible, address, state.step, goToStep]);

  const handleClose = useCallback(() => {
    if (!state.loading && state.step !== 7) {
      reset();
      onClose();
    }
  }, [state.loading, state.step, reset, onClose]);

  // Handle escape key and body overflow
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible && !state.loading && state.step !== 7) {
        handleClose();
      }
    };

    if (visible) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [visible, state.loading, state.step, handleClose]);

  const handleConnectWallet = async () => {
    await connectWallet();
  };

  const handleFormSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    console.log("handleFormSubmit called", {
      formData,
      loading: state.loading,
    });

    if (!checkWalletConnection()) {
      console.log("Wallet not connected");
      return;
    }

    // Validate form
    if (!formData.tokenCode.trim() || !formData.tokenName.trim()) {
      setError("Please fill in all required fields");
      console.log("Validation failed: missing fields");
      return;
    }

    if (formData.tokenCode.length > 12) {
      setError("Token code must be 12 characters or less");
      console.log("Validation failed: token code too long");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(formData.tokenCode)) {
      setError("Token code can only contain letters and numbers");
      console.log("Validation failed: invalid token code format");
      return;
    }

    console.log("All validations passed, calling handlePrepareToken");
    // handlePrepareToken will set loading and move to step 3
    await handlePrepareToken(formData);
  };

  const getStellarExplorerUrl = (hash: string) => {
    if (stellarNetwork === "PUBLIC") {
      return `https://stellar.expert/explorer/public/tx/${hash}`;
    } else if (stellarNetwork === "TESTNET") {
      return `https://stellar.expert/explorer/testnet/tx/${hash}`;
    } else if (stellarNetwork === "FUTURENET") {
      return `https://stellar.expert/explorer/futurenet/tx/${hash}`;
    }
    return `#`;
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
              <p className="text-sm text-muted-foreground">
                Connect your Stellar wallet to create your token. You will be
                the issuer and have full control.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => {
                void handleConnectWallet();
              }}
              disabled={walletPending}
              className="w-full"
              size="lg"
            >
              {walletPending ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Connecting...
                </>
              ) : (
                "Connect Wallet"
              )}
            </Button>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            {state.loading ? (
              <div className="space-y-4 text-center">
                <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Creating Your Token</h3>
                  <p className="text-sm text-muted-foreground">
                    {state.loadingMessage ||
                      "Please wait while we prepare your token..."}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-semibold">Create Your Token</h3>
                  <p className="text-sm text-muted-foreground">
                    Fill in the details for your token. You can customize the
                    name, symbol, and supply.
                  </p>
                </div>

                {address && (
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-sm">
                        Wallet:{" "}
                        <span className="font-mono font-semibold">
                          {address.slice(0, 8)}...{address.slice(-8)}
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                )}

                <form
                  id="createTokenForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    void handleFormSubmit(e);
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="tokenCode">
                      Token Code (1-12 characters)
                    </Label>
                    <Input
                      id="tokenCode"
                      type="text"
                      value={formData.tokenCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tokenCode: e.target.value
                            .toUpperCase()
                            .replace(/[^A-Z0-9]/g, ""),
                        })
                      }
                      placeholder="MYTOKEN"
                      disabled={state.loading}
                      required
                      maxLength={12}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tokenName">Token Name</Label>
                    <Input
                      id="tokenName"
                      type="text"
                      value={formData.tokenName}
                      onChange={(e) =>
                        setFormData({ ...formData, tokenName: e.target.value })
                      }
                      placeholder="My Music Token"
                      disabled={state.loading}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description (Optional)</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe your token..."
                      disabled={state.loading}
                      rows={3}
                    />
                  </div>

                  {/* Total supply is fixed at 1 billion */}
                  <div className="bg-muted/30 rounded-lg p-3 border border-border/50">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Total Supply:
                      </span>
                      <strong className="text-sm font-mono">
                        1,000,000,000
                      </strong>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Fixed supply for all tokens
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-medium">
                      Select Fee Tier
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {(Object.keys(FEE_TIERS) as FeeTierType[]).map((tier) => {
                        const tierData = FEE_TIERS[tier];
                        const isSelected = selectedTier === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setSelectedTier(tier)}
                            disabled={state.loading}
                            className={`relative p-5 border rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm ${
                              isSelected
                                ? tierData.selectedColor
                                : tierData.color
                            }`}
                          >
                            {tierData.recommended && (
                              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                            <div className="text-center space-y-3">
                              <h4
                                className={`font-semibold text-base uppercase tracking-wide ${isSelected ? tierData.accentColor : "text-foreground"}`}
                              >
                                {tierData.name}
                              </h4>
                              <div
                                className={`text-3xl font-bold ${isSelected ? tierData.accentColor : "text-foreground"}`}
                              >
                                {tierData.platformFee}%
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {tierData.description}
                              </p>
                              <div className="pt-3 border-t border-border/50 text-xs space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">
                                    You receive:
                                  </span>
                                  <strong
                                    className={
                                      isSelected
                                        ? tierData.accentColor
                                        : "text-foreground"
                                    }
                                  >
                                    {100 - tierData.platformFee}%
                                  </strong>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">
                                    Platform fee:
                                  </span>
                                  <strong className="text-muted-foreground">
                                    {tierData.platformFee}%
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <div className="text-xs text-center text-muted-foreground bg-muted/30 rounded-lg p-3">
                      <span className="opacity-70">Selected: </span>
                      <strong className={FEE_TIERS[selectedTier].accentColor}>
                        {FEE_TIERS[selectedTier].name}
                      </strong>
                      <span className="opacity-70"> tier • You receive </span>
                      <strong className="text-foreground">
                        {100 - formData.platformFee}%
                      </strong>
                      <span className="opacity-70"> • Platform fee </span>
                      <strong className="text-foreground">
                        {formData.platformFee}%
                      </strong>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 text-center">
            <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Preparing Your Token</h3>
              <p className="text-sm text-muted-foreground">
                {state.loadingMessage ||
                  "We're creating a distribution account and setting up your token..."}
              </p>
            </div>
            {state.distributionAccount && (
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm">
                    Distribution Account:{" "}
                    <span className="font-mono">
                      {state.distributionAccount.slice(0, 20)}...
                    </span>
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4 text-center">
            {state.loading ? (
              <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="h-12 w-12 mx-auto text-green-500 flex items-center justify-center">
                <div className="text-4xl">✓</div>
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {state.loading ? "Processing..." : "Trustline Created"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {state.loading
                  ? state.loadingMessage ||
                    "Please wait while we process your request..."
                  : "The trustline has been successfully created. You can now sign the emission transaction."}
              </p>
            </div>
            {state.trustlineTxHash && (
              <Card>
                <CardContent className="pt-6">
                  <a
                    href={getStellarExplorerUrl(state.trustlineTxHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-mono"
                  >
                    View Transaction: {state.trustlineTxHash.slice(0, 8)}...
                  </a>
                </CardContent>
              </Card>
            )}
            {!state.loading && (
              <Button
                type="button"
                onClick={() => {
                  void handleSignEmission();
                }}
                disabled={state.loading}
                className="w-full"
                size="lg"
              >
                Sign Emission Transaction
              </Button>
            )}
          </div>
        );

      case 5:
        return (
          <div className="space-y-4 text-center">
            {state.loading ? (
              <div className="h-12 w-12 mx-auto text-primary flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
              </div>
            ) : (
              <div className="h-12 w-12 mx-auto text-green-500 flex items-center justify-center">
                <div className="text-4xl">✓</div>
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {state.loading
                  ? "Processing..."
                  : "Tokens Emitted Successfully"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {state.loading
                  ? state.loadingMessage ||
                    "Please wait while we process your request..."
                  : "Your tokens have been successfully created and sent to the distribution account. Click below to distribute the platform fee to the treasury."}
              </p>
            </div>
            {state.emissionTxHash && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Emission Transaction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={getStellarExplorerUrl(state.emissionTxHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-mono break-all"
                  >
                    View on Stellar Explorer: {state.emissionTxHash.slice(0, 8)}
                    ...{state.emissionTxHash.slice(-8)}
                  </a>
                </CardContent>
              </Card>
            )}
            <Alert>
              <AlertDescription className="text-left">
                <strong>Next step:</strong> Distribution will send the platform
                fee to the treasury. Your share will remain in the distribution
                account.
              </AlertDescription>
            </Alert>
            <Button
              type="button"
              onClick={() => {
                void handleExecuteDistribution();
              }}
              disabled={state.loading}
              className="w-full"
              size="lg"
            >
              {state.loading ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {state.loadingMessage || "Executing Distribution..."}
                </>
              ) : (
                "Execute Distribution"
              )}
            </Button>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4 text-center">
            <div className="h-12 w-12 mx-auto text-green-500 flex items-center justify-center">
              <div className="text-4xl">✓</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Distribution Complete</h3>
              <p className="text-sm text-muted-foreground">
                Your tokens have been distributed successfully! The platform fee
                has been sent to the treasury.
              </p>
            </div>
            {state.distributionTxHash && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Distribution Transaction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <a
                    href={getStellarExplorerUrl(state.distributionTxHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline font-mono break-all block"
                  >
                    View on Stellar Explorer:{" "}
                    {state.distributionTxHash.slice(0, 8)}...
                    {state.distributionTxHash.slice(-8)}
                  </a>
                  {state.tokenData && address && (
                    <a
                      href={`https://stellar.expert/explorer/${stellarNetwork === "PUBLIC" ? "public" : stellarNetwork === "FUTURENET" ? "futurenet" : "testnet"}/asset/${state.tokenData.tokenCode}-${address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline block"
                    >
                      View Asset Page
                    </a>
                  )}
                </CardContent>
              </Card>
            )}
            {state.artistAmount && state.platformAmount && state.tokenData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">
                    Distribution Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Platform Fee (sent to treasury):
                    </span>
                    <strong className="text-sm">
                      {parseFloat(state.platformAmount).toLocaleString()}{" "}
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">
                      Your Share (in distribution account):
                    </span>
                    <strong className="text-sm">
                      {parseFloat(state.artistAmount).toLocaleString()}{" "}
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <p className="text-xs text-muted-foreground italic mt-2">
                    Note: Your share remains in the distribution account. The
                    issuer cannot receive their own tokens in Stellar.
                  </p>
                </CardContent>
              </Card>
            )}
            <Button
              type="button"
              onClick={() => {
                goToStep(7);
                if (onSuccess) {
                  onSuccess();
                }
              }}
              className="w-full"
              size="lg"
            >
              Continue
            </Button>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4 text-center">
            <div className="h-16 w-16 mx-auto text-green-500 flex items-center justify-center">
              <div className="text-5xl">✓</div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Token Created Successfully!
              </h3>
              <p className="text-sm text-muted-foreground">
                Your token has been created and distributed. You can now share
                it with your community.
              </p>
            </div>
            {state.tokenData && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Token Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Token Code:</span>
                    <strong className="text-sm">
                      {state.tokenData.tokenCode}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Token Name:</span>
                    <strong className="text-sm">
                      {state.tokenData.tokenName}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Total Supply:</span>
                    <strong className="text-sm">
                      {parseFloat(state.tokenData.totalSupply).toLocaleString()}
                    </strong>
                  </div>
                </CardContent>
              </Card>
            )}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-left space-y-1 list-disc list-inside">
                  <li>Share your token code with your community</li>
                  <li>Set up your marketplace to sell tokens</li>
                  <li>Check the distribution on Stellar Explorer</li>
                </ul>
              </CardContent>
            </Card>
            <Button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="w-full"
              size="lg"
            >
              Done
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  if (!visible) {
    return null;
  }

  const canClose = !state.loading && state.step !== 7;
  const currentStepIndex = state.step - 1;
  const progressPercentage = (state.step / STEPS.length) * 100;

  return (
    <Dialog
      open={visible}
      onOpenChange={(open: boolean) => {
        if (!open && canClose) {
          handleClose();
        }
      }}
    >
      <DialogContent
        className="sm:max-w-2xl max-h-[90vh] overflow-y-auto"
        showCloseButton={canClose}
      >
        <DialogHeader>
          <DialogTitle>Create Your Token</DialogTitle>
          <DialogDescription>
            Follow the steps to create your Stellar token
          </DialogDescription>
        </DialogHeader>

        {/* Progress Indicator */}
        <div className="space-y-2">
          <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center">
            {STEPS.map((step, index) => (
              <div
                key={step}
                className={`flex flex-col items-center gap-1 flex-1 ${
                  index < currentStepIndex
                    ? "text-primary"
                    : index === currentStepIndex
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                }`}
                title={step}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 ${
                    index < currentStepIndex
                      ? "bg-primary text-primary-foreground border-primary"
                      : index === currentStepIndex
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-muted-foreground bg-background"
                  }`}
                >
                  {index < currentStepIndex ? "✓" : index + 1}
                </div>
                <span className="text-xs text-center hidden sm:block truncate w-full">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Error Message */}
        {state.error && (
          <Alert variant="destructive">
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}

        {/* Step Content */}
        <div className="min-h-[200px] py-4">{renderStep()}</div>

        {/* Footer */}
        {state.step === 2 && (
          <DialogFooter>
            <Button
              type="submit"
              form="createTokenForm"
              onClick={(e) => {
                e.preventDefault();
                console.log("Create Token button clicked", {
                  formData,
                  loading: state.loading,
                });
                // Set loading immediately for visual feedback
                if (!state.loading) {
                  // This will be set by handlePrepareToken, but we want immediate feedback
                  console.log("Triggering form submit");
                }
                void handleFormSubmit();
              }}
              disabled={
                !formData.tokenCode.trim() ||
                !formData.tokenName.trim() ||
                state.loading
              }
            >
              {state.loading ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {state.loadingMessage || "Creating..."}
                </>
              ) : (
                "Create Token"
              )}
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleClose}
              disabled={state.loading}
            >
              Cancel
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
```

## File: src/pages/ScaffoldHome.tsx

```typescript
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
    <div className="container mx-auto space-y-12 px-4 py-10">
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
```
