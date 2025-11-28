import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";

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
    // Changed: Removed border, added subtle background hover, increased padding
    <div className="group relative overflow-hidden rounded-2xl bg-[#111827]/40 p-0 transition-all hover:bg-[#111827]/60 border border-white/5 mb-6">
      {/* Header */}
      <div className="flex items-start justify-between p-5 pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border border-white/10">
            <AvatarImage src={post.artistAvatar} />
            <AvatarFallback>{post.artistName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm hover:underline cursor-pointer">
                {post.artistName}
              </span>
              <span className="text-xs text-muted-foreground">
                · {post.timestamp}
              </span>
            </div>
            {post.type === "token_launch" && (
              <Badge
                variant="secondary"
                className="mt-0.5 h-5 bg-primary/10 text-[10px] text-primary hover:bg-primary/20"
              >
                🚀 Token Launch
              </Badge>
            )}
          </div>
        </div>
        <button className="text-muted-foreground hover:text-white">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 pb-3">
        <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-wrap">
          {post.content}
        </p>
      </div>

      {/* Image - Edge to Edge if desired, or rounded inner */}
      {post.image && (
        <div className="px-5 pb-4">
          <div className="relative overflow-hidden rounded-xl border border-white/5">
            <img
              src={post.image}
              alt="Post content"
              className="w-full object-cover max-h-[500px]"
            />
          </div>
        </div>
      )}

      {/* Footer / Actions */}
      <div className="flex items-center justify-between border-t border-white/5 px-5 py-3 bg-black/20">
        <div className="flex gap-6">
          <button className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-red-400 group/like">
            <Heart className="h-4 w-4 group-hover/like:scale-110 transition-transform" />
            <span>{post.stats.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-blue-400">
            <MessageCircle className="h-4 w-4" />
            <span>{post.stats.comments}</span>
          </button>
          <button className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-white">
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        {post.actionLabel && (
          <Button
            size="sm"
            onClick={post.onAction}
            className="h-8 rounded-full font-semibold bg-white text-black hover:bg-gray-200"
          >
            {post.actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};
