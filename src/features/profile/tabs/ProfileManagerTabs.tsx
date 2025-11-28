import { Button } from "@/components/ui/button";
import { Plus, Sparkles } from "lucide-react";
import { TabsContent } from "@/components/ui/tabs";
import { RewardManagerCard } from "@/features/nfts/components/RewardManagerCard";

interface ProfileManagerTabsProps {
  artistAddress: string;
  onManageToken: () => void;
  onCreateCollection: () => void;
}

export const ProfileManagerTabs = ({
  artistAddress,
  onManageToken,
  onCreateCollection,
}: ProfileManagerTabsProps) => {
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Add New Collection Card */}
          <button
            onClick={onCreateCollection}
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
