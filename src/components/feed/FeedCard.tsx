import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, PlayCircle } from "lucide-react";

export type PostType = "token_launch" | "nft_drop" | "update";

export interface FeedPost {
  id: string;
  artistName: string;
  artistHandle: string;
  artistAvatar: string;
  timestamp: string;
  type: PostType;
  content: string;
  image?: string;
  stats: {
    likes: number;
    comments: number;
  };
  actionLabel?: string;
  onAction?: () => void;
}

export const FeedCard: React.FC<{ post: FeedPost }> = ({ post }) => {
  return (
    <Card className="border-border/40 bg-background/60 hover:bg-background/80 transition-colors">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
        <Avatar className="h-10 w-10 border border-border/50">
          <AvatarImage src={post.artistAvatar} alt={post.artistName} />
          <AvatarFallback>{post.artistName[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">
                {post.artistName}
              </span>
              <span className="text-sm text-muted-foreground">
                @{post.artistHandle}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {post.timestamp}
            </span>
          </div>
          {post.type === "token_launch" && (
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
            >
              🚀 Token Launch
            </Badge>
          )}
          {post.type === "nft_drop" && (
            <Badge
              variant="outline"
              className="border-purple-500/50 text-purple-400 bg-purple-500/10"
            >
              💎 NFT Drop
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pb-3">
        <p className="text-sm text-foreground/90 whitespace-pre-wrap">
          {post.content}
        </p>

        {post.image && (
          <div className="relative overflow-hidden rounded-md border border-border/50">
            <img
              src={post.image}
              alt="Post content"
              className="w-full h-auto object-cover max-h-[400px]"
            />
            {post.type === "update" && post.image.includes("cover") && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <PlayCircle className="w-16 h-16 text-white" />
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col gap-3 pt-0">
        {post.actionLabel && (
          <Button
            className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold"
            onClick={post.onAction}
          >
            {post.actionLabel}
          </Button>
        )}

        <div className="flex w-full justify-between items-center pt-2 border-t border-border/40 text-muted-foreground">
          <button className="flex items-center gap-2 text-xs hover:text-red-400 transition-colors">
            <Heart className="w-4 h-4" /> {post.stats.likes}
          </button>
          <button className="flex items-center gap-2 text-xs hover:text-blue-400 transition-colors">
            <MessageCircle className="w-4 h-4" /> {post.stats.comments}
          </button>
          <button className="flex items-center gap-2 text-xs hover:text-foreground transition-colors">
            <Share2 className="w-4 h-4" /> Share
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};
