import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Edit3, Share2, Settings, Users, Layers, Disc } from "lucide-react";
import { StatItem } from "./components/StatItem";

interface ProfileHeaderProps {
  username?: string;
  address?: string;
  type: "DJ" | "Fan";
  bio?: string; // Although not used in the original code explicitly passed as prop, it was hardcoded or derived. The user's example added it.
  // In the original code, bio text was hardcoded based on type.
  // "Electronic music producer..." vs "Music collector..."
  // The user's example in prompt had `bio` prop.
  // I will keep the logic from the original file for now if bio is not passed, or use the prop.
  // Let's check the original code again.
  // Original:
  // <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
  //   {type === "DJ"
  //     ? "Electronic music producer & visual artist. Building the future of sound on Stellar. Join my exclusive community for unreleased drops."
  //     : "Music collector and early supporter of the underground scene."}
  // </p>
  // The user's example:
  // <p>{bio}</p>
  // I will support both by defaulting to the hardcoded strings if bio is missing, to maintain behavior.
  onShare?: () => void;
  onEdit?: () => void;
}

export const ProfileHeader = ({
  address,
  type,
  username,
  bio,
  onShare,
  onEdit,
}: ProfileHeaderProps) => {
  const coverGradient =
    type === "DJ"
      ? "bg-gradient-to-r from-purple-900/60 via-blue-900/40 to-[#030712]"
      : "bg-gradient-to-r from-emerald-900/60 via-teal-900/40 to-[#030712]";

  const defaultBio =
    type === "DJ"
      ? "Electronic music producer & visual artist. Building the future of sound on Stellar. Join my exclusive community for unreleased drops."
      : "Music collector and early supporter of the underground scene.";

  return (
    <div className="relative mb-12 group">
      {/* 1. Cinematic Cover Background (Keeps full width) */}
      <div className="absolute inset-0 h-80 w-full overflow-hidden">
        <div className={cn("absolute inset-0 opacity-50", coverGradient)} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
      </div>

      {/* 2. Content Container (Now constrained to center) */}
      <div className="relative pt-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-end gap-8">
          {/* Avatar Area */}
          <div className="relative shrink-0">
            <div className="relative h-40 w-40 rounded-full p-1 bg-gradient-to-b from-white/20 to-black/20 backdrop-blur-md shadow-2xl">
              <Avatar className="h-full w-full border-4 border-[#030712]">
                <AvatarImage
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username || address}`}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold bg-[#111827]">
                  {username?.[0] || "U"}
                </AvatarFallback>
              </Avatar>

              {/* Edit Button (Hover) */}
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-2 right-2 h-8 w-8 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={onEdit}
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Info Area */}
          <div className="flex-1 pb-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-white tracking-tight">
                    {username || "Unnamed User"}
                  </h1>
                  <Badge
                    variant="outline"
                    className={cn(
                      "border-white/10 backdrop-blur-md px-3 py-1",
                      type === "DJ"
                        ? "bg-purple-500/10 text-purple-300"
                        : "bg-emerald-500/10 text-emerald-300",
                    )}
                  >
                    {type === "DJ" ? "Artist Account" : "Fan Account"}
                  </Badge>
                </div>
                <p className="text-muted-foreground font-mono text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {address}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/10 hover:bg-white/10"
                  onClick={onShare}
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-white/5 border-white/10 hover:bg-white/10"
                  onClick={onEdit}
                >
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Bio & Stats Row */}
            <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center pt-4 border-t border-white/5">
              <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                {bio || defaultBio}
              </p>

              {type === "DJ" && (
                <div className="flex flex-wrap gap-3">
                  <StatItem label="Holders" value="1.2k" icon={Users} />
                  <StatItem label="Collections" value="5" icon={Layers} />
                  <StatItem label="Volume" value="8.4k" icon={Disc} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
