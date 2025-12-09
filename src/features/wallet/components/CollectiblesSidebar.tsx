import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Layers, Loader2, TrendingUp } from "lucide-react";
import { OwnedCollection } from "@/hooks/useOwnedNfts";

interface CollectiblesSidebarProps {
  collections: OwnedCollection[];
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
}

export const CollectiblesSidebar = ({
  collections,
  isLoading,
  error,
  onRetry,
}: CollectiblesSidebarProps) => {
  const formatAddress = (addr: string) =>
    `${addr.slice(0, 4)}...${addr.slice(-4)}`;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-purple-400" /> Collectibles
        </h3>
        {collections.length > 0 && (
          <Badge
            variant="secondary"
            className="bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
          >
            {collections.length} Items
          </Badge>
        )}
      </div>

      <div className="rounded-2xl border border-white/5 bg-[#0b1020]/50 p-4 min-h-[300px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full gap-2 py-10">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            <p className="text-xs text-muted-foreground">
              Syncing collectibles...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-sm text-red-400 mb-2">Failed to load NFTs</p>
            <Button size="sm" variant="outline" onClick={onRetry}>
              Retry
            </Button>
          </div>
        ) : collections.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-10 text-center space-y-4">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
              <Layers className="w-6 h-6 text-white/20" />
            </div>
            <div className="space-y-1">
              <p className="font-medium text-white">No collectibles yet</p>
              <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">
                Claim rewards from artists to build your collection.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {collections.map((collection) => (
              <div
                key={collection.contractId}
                className="group relative aspect-square rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/5 p-3 flex flex-col justify-between hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />

                <div className="relative z-10 flex justify-end">
                  <Badge className="bg-black/40 backdrop-blur-md text-[10px] h-5 px-1.5">
                    x{collection.tokenIds.length}
                  </Badge>
                </div>

                <div className="relative z-10">
                  <p className="text-xs font-bold text-white truncate group-hover:text-purple-300 transition-colors">
                    {formatAddress(collection.contractId)}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Collection
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Tip Box */}
      <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
        <div className="flex gap-3">
          <TrendingUp className="w-5 h-5 text-blue-400 shrink-0" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-blue-100">Did you know?</p>
            <p className="text-xs text-blue-200/70 leading-relaxed">
              Holding artist tokens often grants you voting rights on their next
              release. Check the "Explore" tab to find new DAOs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
