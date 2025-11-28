import React from "react";
import { Play, Lock, Loader2, Pause, Music } from "lucide-react";

import { useMusicAccess } from "../../hooks/useMusicAccess";
import { useAudioStore } from "../../store/useAudioStore";
import { getPublicAssetUrl } from "../../services/music";
import type { Track } from "../../types/music";
import { cn } from "@/lib/utils";

interface TrackCardProps {
  track: Track;
  onUnlockRequest: (track: Track) => void;
}

export const TrackCard: React.FC<TrackCardProps> = ({
  track,
  onUnlockRequest,
}) => {
  const { playTrack, currentTrack, isPlaying, togglePlay } = useAudioStore();
  const access = useMusicAccess(track);
  const isCurrent = currentTrack?.id === track.id;
  const isPlayingCurrent = isCurrent && isPlaying;

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (access.status === "unlocked") {
      isPlayingCurrent ? togglePlay() : playTrack(track);
    } else if (access.status === "locked") {
      onUnlockRequest(track);
    }
  };

  return (
    <div className="group relative flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:bg-white/10 hover:border-white/10 hover:shadow-lg hover:-translate-y-0.5">
      {/* Cover Art - Slightly larger with glow effect */}
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg shadow-md group-hover:shadow-primary/20">
        {track.cover_image_url ? (
          <img
            src={getPublicAssetUrl(track.cover_image_url) || ""}
            alt={track.title}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110",
              access.status === "locked" && "opacity-60 grayscale-[50%]",
            )}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <Music className="h-6 w-6 text-gray-600" />
          </div>
        )}

        {/* Play/Lock Overlay - Always visible on mobile, hover on desktop */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            onClick={handleAction}
            disabled={access.status === "loading"}
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-primary hover:text-black"
          >
            {access.status === "loading" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : access.status === "locked" ? (
              <Lock className="h-4 w-4" />
            ) : isPlayingCurrent ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="h-4 w-4 fill-current ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h4
            className={cn(
              "truncate font-bold text-base",
              isCurrent ? "text-primary" : "text-foreground",
            )}
          >
            {track.title}
          </h4>
          {access.status === "locked" && (
            <span className="inline-flex items-center rounded-md border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-500">
              Locked
            </span>
          )}
        </div>
        <p className="truncate text-sm text-muted-foreground font-medium">
          {track.profiles?.username || "Unknown Artist"}
        </p>
      </div>
    </div>
  );
};
