// Token Creation API Service
import type {
  TokenCreationParams,
  PrepareTokenResponse,
  TokenStatusResponse,
  EmissionXDRResponse,
  SubmitSignedResponse,
  DistributionResponse,
} from "../types/tokenCreation";

// Error response types
interface ErrorResponse {
  error?: string;
  message?: string;
  requiresArtistSignature?: boolean;
  trustlineXDR?: string;
  requiresTrustline?: boolean;
  details?: {
    operationCodes?: string[];
    transactionCode?: string;
  };
  stellarError?: unknown;
}

// Get API base URL from environment or use relative path
const getApiBaseUrl = (): { baseUrl: string; isSupabase: boolean } => {
  // Check for Supabase URL or custom API URL
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
  const apiUrl = import.meta.env.PUBLIC_API_BASE_URL as string | undefined;

  // Debug logging (remove in production)
  if (import.meta.env.DEV) {
    console.log("Environment variables:", {
      PUBLIC_SUPABASE_URL: supabaseUrl ? "✓ Set" : "✗ Not set",
      PUBLIC_API_BASE_URL: apiUrl ? "✓ Set" : "✗ Not set",
    });
  }

  if (supabaseUrl) {
    // If using Supabase, construct edge function URLs
    const baseUrl = `${supabaseUrl}/functions/v1`;
    if (import.meta.env.DEV) {
      console.log("Using Supabase Edge Functions:", baseUrl);
    }
    return { baseUrl, isSupabase: true };
  }

  if (apiUrl) {
    if (import.meta.env.DEV) {
      console.log("Using custom API URL:", apiUrl);
    }
    return { baseUrl: apiUrl, isSupabase: false };
  }

  // Default to relative API path (assumes API is on same domain)
  console.warn(
    "⚠️ No PUBLIC_SUPABASE_URL or PUBLIC_API_BASE_URL found. Using default /api path. This will likely fail!",
  );
  console.warn("Please set PUBLIC_SUPABASE_URL in your .env file");
  return { baseUrl: "/api", isSupabase: false };
};

const { baseUrl: API_BASE_URL, isSupabase } = getApiBaseUrl();

/**
 * Prepare token creation - creates distribution account
 */
export async function prepareToken(
  params: TokenCreationParams,
): Promise<PrepareTokenResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/prepare-token`
    : `${API_BASE_URL}/tokens/prepare`;

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

  console.log("Preparing token with params:", params);
  console.log("Request URL:", url);

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    let errorData: ErrorResponse;
    try {
      errorData = (await response.json()) as ErrorResponse;
    } catch {
      const text = await response.text().catch(() => "Unknown error");
      errorData = { error: text || `HTTP error! status: ${response.status}` };
    }

    console.error(`Distribution Error (${response.status}):`, errorData);

    // If trustline is required, throw a special error with XDR
    if (errorData.requiresArtistSignature && errorData.trustlineXDR) {
      const error = new Error(
        errorData.message || errorData.error || "Trustline required",
      );
      (
        error as Error & { trustlineXDR?: string; requiresTrustline?: boolean }
      ).trustlineXDR = errorData.trustlineXDR;
      (
        error as Error & { trustlineXDR?: string; requiresTrustline?: boolean }
      ).requiresTrustline = true;
      throw error;
    }

    throw new Error(
      errorData.error ||
        errorData.message ||
        `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<PrepareTokenResponse>;
}

/**
 * Check token status
 */
export async function checkTokenStatus(
  tokenCode: string,
  artistPublicKey: string,
): Promise<TokenStatusResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/status`
    : `${API_BASE_URL}/tokens/status`;

  const params = new URLSearchParams({
    code: tokenCode,
    issuer: artistPublicKey,
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
    const error = (await response
      .json()
      .catch(() => ({ error: "Unknown error" }))) as ErrorResponse;
    throw new Error(
      error.error || error.message || `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<TokenStatusResponse>;
}

/**
 * Get emission XDR for signing
 */
export async function getEmissionXDR(
  artistPublicKey: string,
  tokenCode: string,
  totalSupply: string,
): Promise<EmissionXDRResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/emission-xdr`
    : `${API_BASE_URL}/tokens/emission-xdr`;

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

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      artistPublicKey,
      tokenCode,
      totalSupply,
    }),
  });

  if (!response.ok) {
    const error = (await response
      .json()
      .catch(() => ({ error: "Unknown error" }))) as ErrorResponse;
    throw new Error(
      error.error || error.message || `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<EmissionXDRResponse>;
}

/**
 * Submit signed transaction
 */
export async function submitSignedTransaction(
  signedXDR: string,
  tokenCode: string,
  artistPublicKey: string,
): Promise<SubmitSignedResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/submit-signed`
    : `${API_BASE_URL}/tokens/submit-signed`;

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

  console.log("Submitting signed transaction for token:", tokenCode);

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      signedXDR,
      tokenCode,
      artistPublicKey,
    }),
  });

  if (!response.ok) {
    let errorData: ErrorResponse;
    try {
      errorData = (await response.json()) as ErrorResponse;
    } catch {
      const text = await response.text().catch(() => "Unknown error");
      errorData = { error: text || `HTTP error! status: ${response.status}` };
    }

    console.error(`Submit Signed Error (${response.status}):`, errorData);

    // Extract detailed error message
    let errorMessage =
      errorData.error ||
      errorData.message ||
      `HTTP error! status: ${response.status}`;

    // If there are Stellar error details, include them
    if (errorData.details) {
      if (
        errorData.details.operationCodes &&
        errorData.details.operationCodes.length > 0
      ) {
        errorMessage += ` Operation errors: ${errorData.details.operationCodes.join(", ")}`;
      }
      if (errorData.details.transactionCode) {
        errorMessage += ` Transaction: ${errorData.details.transactionCode}`;
      }
    }

    if (errorData.stellarError) {
      console.error("Full Stellar error:", errorData.stellarError);
    }

    throw new Error(errorMessage);
  }

  return response.json() as Promise<SubmitSignedResponse>;
}

/**
 * Execute token distribution
 */
export async function executeDistribution(
  artistPublicKey: string,
  tokenCode: string,
): Promise<DistributionResponse> {
  const url = isSupabase
    ? `${API_BASE_URL}/distribute`
    : `${API_BASE_URL}/tokens/distribute`;

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

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      artistPublicKey,
      tokenCode,
    }),
  });

  if (!response.ok) {
    const error = (await response
      .json()
      .catch(() => ({ error: "Unknown error" }))) as ErrorResponse;
    throw new Error(
      error.error || error.message || `HTTP error! status: ${response.status}`,
    );
  }

  return response.json() as Promise<DistributionResponse>;
}
