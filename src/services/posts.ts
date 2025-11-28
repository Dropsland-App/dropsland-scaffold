import { createClient } from "@supabase/supabase-js";
import type { Post, CreatePostPayload } from "../types/post";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL!;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchFeed(): Promise<Post[]> {
  const { data, error } = await supabase
    .from("posts")
    .select(
      `
      *,
      profiles:artist_public_key (
        username,
        avatar_url
      )
    `,
    )
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Post[];
}

export async function createPost(payload: CreatePostPayload): Promise<Post> {
  const { data, error } = await supabase
    .from("posts")
    .insert([payload])
    .select()
    .single();

  if (error) throw error;
  return data;
}
