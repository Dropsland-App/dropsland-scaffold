import { create } from "zustand";
import type { Track } from "../types/music";
import { getSecureStreamUrl, getPublicAssetUrl } from "../services/music";
import { toast } from "sonner";

interface AudioState {
  currentTrack: Track | null;
  isPlaying: boolean;
  progress: number;
  playTrack: (track: Track) => Promise<void>;
  togglePlay: () => void;
}

// Singleton Audio instance
const audio = new Audio();

export const useAudioStore = create<AudioState>((set, get) => {
  const updateProgress = () => {
    if (audio.duration) {
      set({ progress: (audio.currentTime / audio.duration) * 100 });
    }
  };

  audio.addEventListener("timeupdate", updateProgress);
  audio.addEventListener("ended", () => set({ isPlaying: false }));
  audio.addEventListener("play", () => set({ isPlaying: true }));
  audio.addEventListener("pause", () => set({ isPlaying: false }));

  return {
    currentTrack: null,
    isPlaying: false,
    progress: 0,

    playTrack: async (track: Track) => {
      const { currentTrack } = get();

      if (currentTrack?.id === track.id) {
        void audio.play().catch((error) => {
          console.error("Resume failed:", error);
          set({ isPlaying: false });
        });
        set({ isPlaying: true });
        return;
      }

      try {
        set({ currentTrack: track, isPlaying: true });

        let sourceUrl = "";

        if (track.is_public) {
          sourceUrl = getPublicAssetUrl(track.audio_file_path) || "";
        } else {
          const userPublicKey = localStorage.getItem("walletAddress");
          if (!userPublicKey) throw new Error("Wallet not connected");

          const secureUrl = await getSecureStreamUrl(track.id, userPublicKey);
          if (!secureUrl) throw new Error("Failed to sign URL");
          sourceUrl = secureUrl;
        }

        audio.src = sourceUrl;
        await audio.play();
      } catch (error) {
        console.error("Playback failed:", error);
        set({ isPlaying: false, currentTrack: null });
        toast.error("Playback Error", {
          description:
            error instanceof Error ? error.message : "Could not play track",
        });
      }
    },

    togglePlay: () => {
      const { currentTrack, isPlaying } = get();
      if (!currentTrack) return;

      if (isPlaying) {
        audio.pause();
      } else {
        void audio.play().catch((error) => {
          console.error("Playback failed:", error);
          set({ isPlaying: false });
        });
      }
    },
  };
});
