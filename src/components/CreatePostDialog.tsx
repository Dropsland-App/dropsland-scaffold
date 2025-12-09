import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useFeed } from "@/hooks/useFeed";
import { useWallet } from "@/hooks/useWallet";
import type { PostType } from "@/types/post";

export const CreatePostDialog: React.FC<{
  open: boolean;
  onOpenChange: (o: boolean) => void;
}> = ({ open, onOpenChange }) => {
  const { address } = useWallet();
  const { createPost, isCreating } = useFeed();
  const [content, setContent] = useState("");
  const [type, setType] = useState<PostType>("update");

  const handleSubmit = async () => {
    if (!address || !content) return;

    await createPost({
      artist_public_key: address,
      type,
      content,
      image_url:
        type === "token_launch"
          ? "https://api.dicebear.com/7.x/shapes/svg?seed=Token"
          : undefined, // Placeholder logic
    });

    setContent("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Post Type</Label>
            <Select value={type} onValueChange={(v) => setType(v as PostType)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="update">General Update</SelectItem>
                <SelectItem value="token_launch">Token Launch</SelectItem>
                <SelectItem value="nft_drop">NFT Drop</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Content</Label>
            <Textarea
              placeholder="What's happening in your music journey?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => void handleSubmit()}
            disabled={isCreating || !content}
          >
            {isCreating ? "Publishing..." : "Post"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
