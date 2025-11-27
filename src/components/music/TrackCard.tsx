import React from "react";
import { Play, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMusicAccess } from "../../hooks/useMusicAccess";
import { useAudioStore } from "../../store/useAudioStore";
import { getPublicAssetUrl } from "../../services/music";
import type { Track } from "../../types/music";
import { cn } from "@/lib/utils";

interface TrackCardProps {
  track: Track;
  onUnlockRequest: (track: Track) => void; // Callback to open Buy Modal
}

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  onUnlockRequest,
}) => {
  const { playTrack, currentTrack, isPlaying } = useAudioStore();
  const access = useMusicAccess(track);

  const isCurrent = currentTrack?.id === track.id;
  const isPlayingCurrent = isCurrent && isPlaying;

  const handleAction = () => {
    if (access.status === "unlocked") {
      if (isPlayingCurrent) {
        // Option to pause via context if needed, or just do nothing
      } else {
        void playTrack(track);
      }
    } else if (access.status === "locked") {
      onUnlockRequest(track);
    }
  };

  return (
    <Card className="group relative overflow-hidden border-border/40 bg-background/40 transition-colors hover:bg-background/60">
      <CardContent className="flex items-center gap-4 p-4">
        {/* Cover Art Container */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-muted">
          {track.cover_image_url && (
            <img
              src={getPublicAssetUrl(track.cover_image_url) || ""}
              alt={track.title}
              className={cn(
                "h-full w-full object-cover transition-opacity",
                access.status === "locked" && "opacity-50 grayscale",
              )}
            />
          )}

          {/* Overlay Action Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full"
              onClick={handleAction}
              disabled={access.status === "loading"}
            >
              {access.status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : access.status === "locked" ? (
                <Lock className="h-4 w-4" />
              ) : isPlayingCurrent ? (
                <div className="h-3 w-3 bg-foreground rounded-sm animate-pulse" /> // Pause symbol equivalent
              ) : (
                <Play className="h-4 w-4 fill-current ml-0.5" />
              )}
            </Button>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h4
              className={cn(
                "truncate font-semibold",
                isCurrent && "text-primary",
              )}
            >
              {track.title}
            </h4>
            {access.status === "locked" && (
              <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium text-amber-500">
                LOCKED
              </span>
            )}
          </div>

          <p className="truncate text-sm text-muted-foreground">
            {access.status === "locked" &&
            access.reason === "insufficient_tokens"
              ? `Requires ${access.requirement}`
              : access.status === "locked" && access.reason === "nft_required"
                ? `Requires ${access.requirement}`
                : "Artist Name"}{" "}
            {/* Replace with dynamic artist name */}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
