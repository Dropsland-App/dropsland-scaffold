import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Sparkles, Share2 } from "lucide-react";

interface ProfileOverviewTabProps {
  profileType: "DJ" | "Fan";
  onCreateDrop: () => void;
  onShare: () => void;
}

export const ProfileOverviewTab = ({
  profileType,
  onCreateDrop,
  onShare,
}: ProfileOverviewTabProps) => {
  return (
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
            {profileType === "DJ" ? "Active Members" : "Communities Joined"}
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
        onClick={profileType === "DJ" ? onCreateDrop : onShare}
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
  );
};
