import type { CreateRewardPayload, Reward } from "../types/reward";

interface RewardRecord {
  id: string;
  artist_public_key: string;
  nft_contract_id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
}

interface RewardErrorResponse {
  error?: string;
  message?: string;
}

interface FetchRewardsOptions {
  activeOnly?: boolean;
}

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
  | string
  | undefined;

const functionsBaseUrl = supabaseUrl
  ? `${supabaseUrl}/functions/v1`
  : undefined;
const restBaseUrl = supabaseUrl ? `${supabaseUrl}/rest/v1` : undefined;

const authHeaders = supabaseAnonKey
  ? {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
    }
  : undefined;

const requireSupabaseConfig = (context: string) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      `${context}: Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY environment variables`,
    );
  }
};

const mapReward = (record: RewardRecord): Reward => ({
  id: record.id,
  artistPublicKey: record.artist_public_key,
  nftContractId: record.nft_contract_id,
  title: record.title,
  description: record.description,
  imageUrl: record.image_url,
  isActive: record.is_active,
  createdAt: record.created_at,
});

export async function createReward(
  payload: CreateRewardPayload,
): Promise<Reward> {
  requireSupabaseConfig("createReward");
  if (!functionsBaseUrl || !authHeaders) {
    throw new Error("createReward: Supabase Edge Functions URL not configured");
  }

  const response = await fetch(`${functionsBaseUrl}/create-reward`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...authHeaders,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorBody = (await response
      .json()
      .catch(() => ({}))) as RewardErrorResponse;
    throw new Error(
      errorBody.error || errorBody.message || "Failed to create reward",
    );
  }

  const { data } = (await response.json()) as { data: RewardRecord };
  return mapReward(data);
}

export async function fetchRewardsByArtist(
  artistPublicKey: string,
  options: FetchRewardsOptions = {},
): Promise<Reward[]> {
  requireSupabaseConfig("fetchRewardsByArtist");
  if (!restBaseUrl || !authHeaders) {
    throw new Error("fetchRewardsByArtist: Supabase REST URL not configured");
  }

  const params = new URLSearchParams({
    select: "*",
    order: "created_at.desc",
    artist_public_key: `eq.${artistPublicKey}`,
  });

  if (options.activeOnly !== false) {
    params.set("is_active", "eq.true");
  }

  const response = await fetch(`${restBaseUrl}/rewards?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      ...authHeaders,
    },
  });

  if (!response.ok) {
    const errorBody = (await response
      .json()
      .catch(() => ({}))) as RewardErrorResponse;
    throw new Error(
      errorBody.error || errorBody.message || "Error loading rewards",
    );
  }

  const records = (await response.json()) as RewardRecord[];
  return records.map(mapReward);
}
