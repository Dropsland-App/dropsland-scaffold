// Artist Tokens API Service
import type { ListDistributedTokensResponse } from "../types/artistToken";

// Error response types
interface ErrorResponse {
  error?: string;
  message?: string;
  details?: string;
}

// Get API base URL from environment or use relative path
const getApiBaseUrl = (): { baseUrl: string; isSupabase: boolean } => {
  // Check for Supabase URL or custom API URL
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
  const apiUrl = import.meta.env.PUBLIC_API_BASE_URL as string | undefined;

  if (supabaseUrl) {
    // If using Supabase, construct edge function URLs
    const baseUrl = `${supabaseUrl}/functions/v1`;
    return { baseUrl, isSupabase: true };
  }

  if (apiUrl) {
    return { baseUrl: apiUrl, isSupabase: false };
  }

  // Default to relative API path (assumes API is on same domain)
  console.warn(
    "⚠️ No PUBLIC_SUPABASE_URL or PUBLIC_API_BASE_URL found. Using default /api path.",
  );
  return { baseUrl: "/api", isSupabase: false };
};

const { baseUrl: API_BASE_URL, isSupabase } = getApiBaseUrl();

/**
 * List all distributed artist tokens
 */
export async function listDistributedTokens(
  limit: number = 100,
  offset: number = 0,
): Promise<ListDistributedTokensResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/list-distributed-tokens`
    : `${API_BASE_URL}/tokens/distributed`;

  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Supabase requires apikey header for Edge Functions
  const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;
  if (supabaseKey) {
    headers["apikey"] = supabaseKey;
    headers["Authorization"] = `Bearer ${supabaseKey}`;
  }

  const response = await fetch(`${url}?${params.toString()}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    let errorData: ErrorResponse;
    try {
      errorData = (await response.json()) as ErrorResponse;
    } catch {
      const text = await response.text().catch(() => "Unknown error");
      errorData = { error: text || `HTTP error! status: ${response.status}` };
    }

    console.error(
      `List Distributed Tokens Error (${response.status}):`,
      errorData,
    );
    throw new Error(
      errorData.error ||
        errorData.message ||
        `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<ListDistributedTokensResponse>;
}
