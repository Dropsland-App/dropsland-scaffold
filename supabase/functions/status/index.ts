// Status - Check token creation status
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
    const tokenCode = url.searchParams.get("code");
    const issuer = url.searchParams.get("issuer");

    if (!tokenCode || !issuer) {
      return new Response(
        JSON.stringify({
          error: "Missing required parameters: code and issuer",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const { data, error } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCode.toUpperCase())
      .eq("artist_public_key", issuer)
      .single();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        status: data.status,
        tokenCode: data.token_code,
        tokenName: data.token_name,
        totalSupply: data.total_supply,
        artistAmount: data.artist_amount || null,
        platformAmount: data.platform_amount || null,
        createdAt: data.created_at,
        distributedAt: data.distributed_at || null,
        trustlineTxHash: data.trustline_tx_hash || null,
        emissionTxHash: data.emission_tx_hash || null,
        distributionTxHash: data.distribution_tx_hash || null,
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
