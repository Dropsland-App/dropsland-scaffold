import { supabase } from "@/util/supabase";

export interface ActivityItem {
  id: string;
  type: "token_purchase" | "nft_mint" | "music_upload";
  title: string;
  description: string;
  created_at: string;
  actor_key: string;
  image: string | null;
}

export async function fetchActivityFeed(
  limit = 20,
  offset = 0,
): Promise<ActivityItem[]> {
  const { data, error } = await supabase
    .from("activity_feed")
    .select("*")
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) throw error;
  return data as ActivityItem[];
}
