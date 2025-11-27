// src/components/NftCard.tsx
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
      className={`border-border/60 bg-background/60 flex flex-col h-full ${className}`}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden rounded-t-xl bg-muted/20">
        {reward.imageUrl ? (
          <img
            src={reward.imageUrl}
            alt={reward.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-4xl">
            🎁
          </div>
        )}
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 backdrop-blur-md bg-black/50 text-white hover:bg-black/70"
        >
          NFT
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-white leading-tight truncate">
          {reward.title}
        </CardTitle>
        <CardDescription className="text-xs font-mono">
          Issuer: {shortenAddress(reward.artistPublicKey)}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
          {reward.description || "No description provided."}
        </p>

        <div className="mt-auto pt-2">
          <Button
            variant="outline"
            className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
            onClick={() => onAction && onAction(reward)}
          >
            {actionLabel}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
