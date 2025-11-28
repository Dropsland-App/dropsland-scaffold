export type PostType = "token_launch" | "nft_drop" | "update";

export interface Post {
  id: string;
  artist_public_key: string;
  type: PostType;
  content: string;
  image_url?: string;
  reference_id?: string; // Contract ID or Token Code
  likes_count: number;
  comments_count: number;
  created_at: string;

  // Joined fields from Profiles table
  profiles?: {
    username: string;
    avatar_url: string;
  };
}

export interface CreatePostPayload {
  artist_public_key: string;
  type: PostType;
  content: string;
  image_url?: string;
  reference_id?: string;
}
