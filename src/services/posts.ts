import { supabase } from "@/util/supabase";
import type { Post, CreatePostPayload } from "../types/post";

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

// --- Social Interactions ---

export async function toggleLike(postId: string, userPublicKey: string) {
  // 1. Check if like exists
  const { data: existingLike, error: fetchError } = await supabase
    .from("post_likes")
    .select("*")
    .eq("post_id", postId)
    .eq("user_public_key", userPublicKey)
    .maybeSingle();

  if (fetchError) throw fetchError;

  if (existingLike) {
    // 2. Unlike (Delete)
    const { error } = await supabase
      .from("post_likes")
      .delete()
      .eq("post_id", postId)
      .eq("user_public_key", userPublicKey);

    if (error) throw error;
    return "unliked";
  } else {
    // 3. Like (Insert)
    const { error } = await supabase.from("post_likes").insert({
      post_id: postId,
      user_public_key: userPublicKey,
    });

    if (error) throw error;
    return "liked";
  }
}

export interface Comment {
  id: string;
  post_id: string;
  user_public_key: string;
  content: string;
  created_at: string;
  profiles: {
    username: string;
    avatar_url: string;
  };
}

export async function getComments(postId: string): Promise<Comment[]> {
  const { data, error } = await supabase
    .from("comments")
    .select(
      `
      *,
      profiles:user_public_key (
        username,
        avatar_url
      )
    `,
    )
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data as Comment[];
}

export async function addComment(
  postId: string,
  userPublicKey: string,
  content: string,
): Promise<Comment> {
  const { data, error } = await supabase
    .from("comments")
    .insert({
      post_id: postId,
      user_public_key: userPublicKey,
      content,
    })
    .select(
      `
      *,
      profiles:user_public_key (
        username,
        avatar_url
      )
    `,
    )
    .single();

  if (error) throw error;
  return data as Comment;
}
