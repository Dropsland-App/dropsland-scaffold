// List Distributed Tokens - Get all artist tokens with status 'distributed'
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { corsHeaders, handleCORS } from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get("limit") || "100");
    const offset = parseInt(url.searchParams.get("offset") || "0");

    // Query artist_tokens with status 'distributed'
    // Also join with token_metadata if available for additional info
    const { data: tokens, error } = await supabase
      .from("artist_tokens")
      .select(
        `
        id,
        artist_public_key,
        artist_email,
        artist_name,
        token_code,
        token_name,
        total_supply,
        description,
        image_url,
        platform_fee_bps,
        artist_amount,
        platform_amount,
        status,
        trustline_tx_hash,
        emission_tx_hash,
        distribution_tx_hash,
        created_at,
        distributed_at,
        updated_at
      `,
      )
      .eq("status", "distributed")
      .order("distributed_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) {
      console.error("Error fetching distributed tokens:", error);
      return new Response(
        JSON.stringify({
          error: "Error fetching tokens",
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Optionally fetch metadata for each token
    const tokensWithMetadata = await Promise.all(
      (tokens || []).map(async (token) => {
        const { data: metadata } = await supabase
          .from("token_metadata")
          .select("*")
          .eq("token_id", token.id)
          .single();

        return {
          ...token,
          metadata: metadata || null,
        };
      }),
    );

    return new Response(
      JSON.stringify({
        tokens: tokensWithMetadata,
        count: tokensWithMetadata.length,
        limit,
        offset,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
