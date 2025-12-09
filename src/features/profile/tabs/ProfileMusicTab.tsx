import { Button } from "@/components/ui/button";
import { Upload, Music } from "lucide-react";
import { TrackCard } from "@/features/music/components/TrackCard";
import { Track } from "@/types/music";

interface ProfileMusicTabProps {
  tracks: Track[] | undefined;
  isArtist: boolean;
  onUpload: () => void;
  onUnlockRequest: (track: Track) => void;
}

export const ProfileMusicTab = ({
  tracks,
  isArtist,
  onUpload,
  onUnlockRequest,
}: ProfileMusicTabProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl border border-white/5">
        <div>
          <h2 className="text-lg font-bold text-white">Discography</h2>
          <p className="text-sm text-muted-foreground">
            Your uploaded tracks and releases.
          </p>
        </div>
        {isArtist && (
          <Button
            className="font-semibold shadow-lg shadow-primary/20"
            onClick={onUpload}
          >
            <Upload className="w-4 h-4 mr-2" /> Upload Track
          </Button>
        )}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {tracks?.map((track) => (
          <TrackCard
            key={track.id}
            track={track}
            onUnlockRequest={() => onUnlockRequest(track)}
          />
        ))}
        {tracks?.length === 0 && (
          <div className="col-span-2 py-12 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-xl bg-white/5">
            <Music className="w-10 h-10 text-muted-foreground/50 mb-3" />
            <p className="text-muted-foreground">No tracks found.</p>
          </div>
        )}
      </div>
    </div>
  );
};
