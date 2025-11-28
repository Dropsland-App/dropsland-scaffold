import { supabase } from "@/util/supabase";
import type { Track, StreamResponse } from "../types/music";
import { v4 as uuidv4 } from "uuid";

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

  if (error) throw new Error(error.message);

  return data as Track[];
}

export interface UploadTrackPayload {
  artistPublicKey: string;
  title: string;
  description: string;
  audioFile: File;
  coverFile?: File;
  isPublic: boolean;
}

export async function uploadTrack(payload: UploadTrackPayload): Promise<void> {
  const {
    artistPublicKey,
    title,
    description,
    audioFile,
    coverFile,
    isPublic,
  } = payload;

  // 1. Upload Audio to Private Bucket
  const audioPath = `${artistPublicKey}/${uuidv4()}-${audioFile.name}`;
  const { error: audioError } = await supabase.storage
    .from("music-private") // Ensure this bucket exists and is private
    .upload(audioPath, audioFile);

  if (audioError) throw new Error(`Audio upload failed: ${audioError.message}`);

  // 2. Upload Cover to Public Bucket (Optional)
  let coverPath = null;
  if (coverFile) {
    coverPath = `${artistPublicKey}/${uuidv4()}-${coverFile.name}`;
    const { error: coverError } = await supabase.storage
      .from("music-public") // Ensure this bucket exists and is public
      .upload(coverPath, coverFile);

    if (coverError)
      throw new Error(`Cover upload failed: ${coverError.message}`);
  }

  // 3. Insert Record into Database
  const { error: dbError } = await supabase.from("tracks").insert({
    artist_public_key: artistPublicKey,
    title,
    description,
    audio_file_path: audioPath,
    cover_image_url: coverPath, // Store the path, getPublicAssetUrl handles the rest
    is_public: isPublic,
    // For now, we default gates to null. You can extend this form later to select specific tokens.
    min_token_amount: 0,
  });

  if (dbError) throw new Error(dbError.message);
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
