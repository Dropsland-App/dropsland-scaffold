import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Reward } from "../types/reward";
import { cn } from "@/lib/utils";

interface NftCardProps {
  reward: Reward;
  onAction?: (reward: Reward) => void;
  actionLabel?: string;
  className?: string;
}

const shortenAddress = (addr: string) =>
  `${addr.slice(0, 6)}...${addr.slice(-4)}`;

export const NftCard: React.FC<NftCardProps> = ({
  reward,
  onAction,
  actionLabel = "View Details",
  className,
}) => {
  return (
    <Card
      className={cn(
        "group relative flex flex-col overflow-hidden border-white/5 bg-[#151a2a] hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 p-0 gap-0",
        className,
      )}
    >
      {/* FIXED: Image is now edge-to-edge (no padding on parent) */}
      <div className="relative aspect-square w-full overflow-hidden bg-black/20">
        {reward.imageUrl ? (
          <img
            src={reward.imageUrl}
            alt={reward.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-purple-900/20 to-blue-900/20">
            <span className="text-4xl">🎁</span>
          </div>
        )}

        {/* Floating Badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 backdrop-blur-md bg-black/60 text-white border border-white/10"
        >
          NFT
        </Badge>
      </div>

      {/* Content Section */}
      <CardHeader className="p-5 pb-2">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-lg font-bold text-white leading-tight line-clamp-1">
            {reward.title}
          </CardTitle>
        </div>
        <CardDescription className="text-xs font-mono text-purple-300/80">
          Issuer: {shortenAddress(reward.artistPublicKey)}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-5 pt-2 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {reward.description || "No description provided."}
        </p>

        {/* FIXED: Button pushed to bottom with mt-auto */}
        <div className="mt-auto">
          <Button
            variant="outline"
            className="w-full border-white/10 bg-white/5 hover:bg-purple-500 hover:text-white hover:border-transparent transition-all font-medium"
            onClick={() => onAction && onAction(reward)}
          >
            {actionLabel}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
