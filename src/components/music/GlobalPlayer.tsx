import React from "react";
import { useAudioStore } from "../../store/useAudioStore";
import { Button } from "@/components/ui/button";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";
import { getPublicAssetUrl } from "../../services/music";

export const GlobalPlayer: React.FC = () => {
  const { currentTrack, isPlaying, togglePlay, progress } = useAudioStore();

  // If no track is loaded, don't render anything
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 pb-[env(safe-area-inset-bottom)]">
      {/* Progress Bar (Visual Only for now) */}
      <div className="h-1 w-full bg-muted/50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="relative h-12 w-12 overflow-hidden rounded-md bg-muted">
            {currentTrack.cover_image_url && (
              <img
                src={getPublicAssetUrl(currentTrack.cover_image_url) || ""}
                alt={currentTrack.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="truncate text-sm font-semibold text-foreground">
              {currentTrack.title}
            </span>
            <span className="truncate text-xs text-muted-foreground">
              {/* Note: In a real app, you'd fetch the artist name via the relationship */}
              Artist Public Key: {currentTrack.artist_public_key.slice(0, 4)}...
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <SkipBack className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            className="h-10 w-10 rounded-full shadow-lg"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-current" />
            ) : (
              <Play className="h-5 w-5 fill-current ml-0.5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
          >
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>

        {/* Volume / Extra Actions (Placeholder) */}
        <div className="w-1/3 flex justify-end">
          {/* Add volume slider here later */}
        </div>
      </div>
    </div>
  );
};
