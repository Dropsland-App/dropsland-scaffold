import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { uploadTrack } from "@/services/music";
import { useWallet } from "@/hooks/useWallet";
import { toast } from "sonner";
import { Loader2, UploadCloud } from "lucide-react";

interface UploadTrackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const UploadTrackDialog: React.FC<UploadTrackDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const { address } = useWallet();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false); // Default to gated/private
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const { mutate: handleUpload, isPending } = useMutation({
    mutationFn: uploadTrack,
    onSuccess: () => {
      toast.success("Track uploaded successfully!");
      // Invalidate queries to refresh the track list
      queryClient.invalidateQueries({ queryKey: ["artistTracks"] });
      queryClient.invalidateQueries({ queryKey: ["publicTracks"] });

      // Reset Form
      setTitle("");
      setDescription("");
      setAudioFile(null);
      setCoverFile(null);
      setIsPublic(false);
      onOpenChange(false);
    },
    onError: (error) => {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Upload failed");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return toast.error("Wallet not connected");
    if (!audioFile) return toast.error("Audio file is required");
    if (!title) return toast.error("Title is required");

    handleUpload({
      artistPublicKey: address,
      title,
      description,
      audioFile,
      coverFile: coverFile || undefined,
      isPublic,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload New Track</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Track Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Midnight City"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="About this track..."
              rows={2}
            />
          </div>

          {/* Audio File */}
          <div className="space-y-2">
            <Label htmlFor="audio">Audio File (MP3, WAV)</Label>
            <Input
              id="audio"
              type="file"
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
              required
              className="cursor-pointer"
            />
          </div>

          {/* Cover Art */}
          <div className="space-y-2">
            <Label htmlFor="cover">Cover Art (Optional)</Label>
            <Input
              id="cover"
              type="file"
              accept="image/*"
              onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
              className="cursor-pointer"
            />
          </div>

          {/* Visibility Toggle */}
          <div className="flex items-center space-x-2 pt-2">
            <input
              type="checkbox"
              id="isPublic"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="isPublic"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Make Public?
              </label>
              <p className="text-[10px] text-muted-foreground">
                If unchecked, this track will be locked (Token Gated logic
                applies).
              </p>
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="ghost"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <UploadCloud className="mr-2 h-4 w-4" /> Upload
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
