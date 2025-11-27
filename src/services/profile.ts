/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL! as string;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY! as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface UserProfile {
  wallet_address: string;
  username: string;
  bio?: string;
  avatar_url?: string;
  role: "DJ" | "FAN";
}

export async function fetchProfile(
  address: string,
): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("wallet_address", address)
    .maybeSingle();

  if (error) throw error;
  return data;
}

export async function createProfile(
  profile: UserProfile,
): Promise<UserProfile> {
  const { data, error } = await supabase
    .from("profiles")
    .upsert([profile])
    .select()
    .single();

  if (error) throw error;
  return data;
}
