import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import { corsHeaders, handleCORS } from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

type CreateRewardPayload = {
  artistPublicKey?: string;
  nftContractId?: string;
  title?: string;
  description?: string | null;
  imageUrl?: string | null;
  isActive?: boolean;
};

Deno.serve(async (req) => {
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: CreateRewardPayload;
  try {
    payload = (await req.json()) as CreateRewardPayload;
  } catch (error) {
    console.error("Invalid JSON body", error);
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const artistPublicKey = (payload.artistPublicKey || "").trim();
  const nftContractId = (payload.nftContractId || "").trim();
  const title = (payload.title || "").trim();
  const description = payload.description?.trim() || null;
  const imageUrl = payload.imageUrl?.trim() || null;
  const isActive = payload.isActive ?? true;

  const missing: string[] = [];
  if (!artistPublicKey) missing.push("artistPublicKey");
  if (!nftContractId) missing.push("nftContractId");
  if (!title) missing.push("title");

  if (missing.length > 0) {
    return new Response(
      JSON.stringify({
        error: `Missing required fields: ${missing.join(", ")}`,
      }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  try {
    const { data, error } = await supabase
      .from("rewards")
      .insert({
        artist_public_key: artistPublicKey,
        nft_contract_id: nftContractId,
        title,
        description,
        image_url: imageUrl,
        is_active: isActive,
      })
      .select()
      .single();

    if (error) {
      console.error("Error inserting reward", error);
      return new Response(
        JSON.stringify({
          error: "Failed to create reward",
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(JSON.stringify({ data }), {
      status: 201,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Unexpected error", error);
    return new Response(
      JSON.stringify({
        error:
          error instanceof Error ? error.message : "Unexpected error occurred",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
