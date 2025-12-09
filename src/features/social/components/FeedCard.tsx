import React, { useState } from "react";
import { toggleLike } from "@/services/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Send,
  Loader2,
} from "lucide-react";
import { usePostInteractions } from "@/hooks/usePostInteractions";
import { useWallet } from "@/hooks/useWallet";
import { toast } from "sonner";
import { formatDistanceToNow } from "date-fns";

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
  const { address } = useWallet();
  const { comments, isLoadingComments, submitComment, isSubmittingComment } =
    usePostInteractions(post.id);

  // Local state for optimistic UI
  const [isLiked, setIsLiked] = useState(false); // In a real app, check if user already liked
  const [likeCount, setLikeCount] = useState(post.stats.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleLike = async () => {
    if (!address) {
      toast.error("Please connect your wallet to like posts");
      return;
    }

    // Optimistic Update
    const previousLiked = isLiked;
    const previousCount = likeCount;

    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);
    setLikeCount((prev: number) => (newIsLiked ? prev + 1 : prev - 1));

    try {
      await toggleLike(post.id, address);
    } catch (error) {
      // Revert on error
      setIsLiked(previousLiked);
      setLikeCount(previousCount);
      console.error(error);
      toast.error("Failed to update like");
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) {
      toast.error("Please connect your wallet to comment");
      return;
    }
    if (!commentText.trim()) return;

    submitComment(
      { userPublicKey: address, content: commentText },
      {
        onSuccess: () => {
          setCommentText("");
        },
      },
    );
  };

  return (
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

      {/* Image */}
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
          <button
            onClick={() => void handleLike()}
            className={`flex items-center gap-2 text-xs transition-colors group/like ${
              isLiked
                ? "text-red-400"
                : "text-muted-foreground hover:text-red-400"
            }`}
          >
            <Heart
              className={`h-4 w-4 transition-transform group-hover/like:scale-110 ${
                isLiked ? "fill-current" : ""
              }`}
            />
            <span>{likeCount}</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-blue-400"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{comments?.length || post.stats.comments}</span>
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

      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-white/5 bg-black/40 px-5 py-4 space-y-4">
          {/* Comment List */}
          <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
            {isLoadingComments ? (
              <div className="flex justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-6 w-6 border border-white/10">
                    <AvatarImage src={comment.profiles?.avatar_url} />
                    <AvatarFallback>
                      {comment.profiles?.username?.[0] || "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {comment.profiles?.username || "Unknown"}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.created_at), {
                          addSuffix: true,
                        })}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300">{comment.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xs text-muted-foreground py-2">
                No comments yet. Be the first!
              </p>
            )}
          </div>

          {/* Add Comment Form */}
          <form onSubmit={handleCommentSubmit} className="flex gap-2">
            <Input
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="h-9 text-xs bg-white/5 border-white/10 focus-visible:ring-primary/50"
              disabled={isSubmittingComment}
            />
            <Button
              type="submit"
              size="icon"
              className="h-9 w-9 shrink-0"
              disabled={isSubmittingComment || !commentText.trim()}
            >
              {isSubmittingComment ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};
