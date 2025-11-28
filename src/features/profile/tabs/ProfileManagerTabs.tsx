import { Button } from "@/components/ui/button";
import { Plus, Sparkles, Layers, Loader2, ExternalLink } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { RewardManagerCard } from "@/features/nfts/components/RewardManagerCard";
import { useArtistNftCollections } from "@/hooks/useArtistNftCollections";
import { Badge } from "@/components/ui/badge";

interface ProfileManagerTabsProps {
  artistAddress: string;
  onManageToken: () => void;
  onCreateCollection: () => void;
}

const shorten = (value: string) =>
  value.length > 12 ? `${value.slice(0, 6)}…${value.slice(-5)}` : value;

export const ProfileManagerTabs = ({
  artistAddress,
  onManageToken,
  onCreateCollection,
}: ProfileManagerTabsProps) => {
  // 1. Fetch the collections
  const {
    data: collections = [],
    isPending: isLoadingCollections,
    error: collectionsError,
  } = useArtistNftCollections(artistAddress);

  return (
    <>
      {/* --- DJ: TOKEN TAB --- */}
      <TabsContent value="token" className="space-y-6">
        <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Manage Your Economy
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Control supply, update metadata, and monitor the performance of
              your social token.
            </p>
          </div>
          <Button
            size="lg"
            onClick={onManageToken}
            className="font-bold shrink-0"
          >
            <Plus className="w-5 h-5 mr-2" /> Launch / Edit Token
          </Button>
        </div>
      </TabsContent>

      {/* --- DJ: COLLECTIONS & REWARDS --- */}
      <TabsContent value="collections" className="space-y-6">
        {isLoadingCollections ? (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin mb-4" />
            <p>Loading your collections...</p>
          </div>
        ) : collectionsError ? (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="text-red-400 mb-2">Failed to load collections</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 1. Add New Collection Card */}
            <button
              onClick={onCreateCollection}
              className="flex flex-col items-center justify-center aspect-[4/3] rounded-2xl border border-dashed border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-white">New Collection</span>
            </button>

            {/* 2. Render Existing Collections */}
            {collections.map((collection) => (
              <div
                key={collection.contractId}
                className="group relative flex flex-col justify-between aspect-[4/3] rounded-2xl border border-white/5 bg-[#0b1020] overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="font-mono text-[10px]"
                    >
                      {collection.symbol}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 truncate">
                    {collection.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <span>{shorten(collection.contractId)}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(collection.contractId);
                      }}
                      className="hover:text-white transition-colors"
                      title="Copy ID"
                    >
                      <span className="sr-only">Copy</span>
                      📋
                    </button>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 bg-black/20 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className="text-xs text-muted-foreground">
                    Soroban NFT
                  </span>
                  <a
                    href={`https://stellar.expert/explorer/testnet/contract/${collection.contractId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs flex items-center gap-1 text-primary hover:underline"
                  >
                    View <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </TabsContent>

      <TabsContent value="rewards">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <RewardManagerCard
              artistPublicKey={artistAddress}
              onRequestCreateCollection={onCreateCollection}
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
                    <strong>VIP Access:</strong> Use the NFT contract ID to gate
                    a private Discord channel.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TabsContent>
    </>
  );
};
