import { supabase } from "@/util/supabase";
import type { Track, StreamResponse } from "../types/music";

/**
 * 1. Fetch Tracks
 * Gets all tracks to display in the feed/profile.
 * Joins with artist_tokens/rewards to get details for the UI lock icons.
 */
export async function fetchTracks(artistPublicKey?: string): Promise<Track[]> {
  let query = supabase
    .from("tracks")
    .select(
      `
      *,
      artist_tokens:required_token_id (token_code, token_name, artist_public_key),
      rewards:required_reward_id (title),
      profiles:artist_public_key (username, avatar_url)
    `,
    )
    .order("created_at", { ascending: false });

  if (artistPublicKey) {
    query = query.eq("artist_public_key", artistPublicKey);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching tracks:", error);
    throw error;
  }

  return data as Track[];
}

/**
 * 2. Get Public Asset URL
 * Generates the public URL for Cover Art or 30s Previews.
 * No Edge Function needed for these - they are in the public bucket.
 */
export function getPublicAssetUrl(path: string | undefined): string | null {
  if (!path) return null;

  const { data } = supabase.storage.from("music-public").getPublicUrl(path);

  return data.publicUrl;
}

type SecureStreamFunctionResponse = {
  data: StreamResponse | null;
  error: { message: string } | null;
};

/**
 * 3. Secure Stream (The Gatekeeper)
 * Calls the Edge Function to verify ownership and get a signed URL
 * for the full quality audio file.
 */
export async function getSecureStreamUrl(
  trackId: string,
  userPublicKey: string,
): Promise<string | null> {
  const { data, error }: SecureStreamFunctionResponse =
    await supabase.functions.invoke<StreamResponse>("secure-stream", {
      body: {
        track_id: trackId,
        user_public_key: userPublicKey,
      },
    });

  if (error) {
    console.error("Streaming access denied:", error);
    throw new Error("You do not have access to stream this track.");
  }

  return data?.url ?? null;
}
