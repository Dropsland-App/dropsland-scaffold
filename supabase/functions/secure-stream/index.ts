import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  getStellarClass,
  Stellar,
} from "../_shared/utils.ts";

// RPC URLs for Soroban (needed for NFT checks)
const RPC_URLS = {
  TESTNET: "https://soroban-testnet.stellar.org",
  FUTURENET: "https://rpc-futurenet.stellar.org",
  PUBLIC: "https://soroban-rpc.mainnet.stellar.org", // or specific provider
};

console.info("Secure Stream Function Started");

Deno.serve(async (req: Request) => {
  // 1. Handle CORS using shared utility
  const corsResponse = handleCORS(req);
  if (corsResponse) return corsResponse;

  try {
    const { track_id, user_public_key } = await req.json();

    if (!track_id || !user_public_key) {
      throw new Error("Missing track_id or user_public_key");
    }

    // 2. Initialize Supabase Client
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    // 3. Fetch Track Metadata & Gating Rules
    // We join with artist_tokens and rewards to get the on-chain IDs needed for verification
    const { data: track, error } = await supabaseClient
      .from("tracks")
      .select(
        `
        *,
        artist_tokens:required_token_id (token_code, artist_public_key),
        rewards:required_reward_id (nft_contract_id)
      `,
      )
      .eq("id", track_id)
      .single();

    if (error || !track) throw new Error("Track not found");

    // 4. Get Network Config & SDK Classes
    const { network, server: horizonServer } = getStellarNetwork();

    // Load required classes using your shared helper
    const Contract = getStellarClass("Contract");
    const Address = getStellarClass("Address");

    // 5. Verification Logic
    let hasAccess = false;

    // --- CASE A: Public Track ---
    if (track.is_public) {
      hasAccess = true;
    }

    // --- CASE B: Fungible Token Gate (Uses Horizon) ---
    else if (track.required_token_id && track.artist_tokens) {
      try {
        const account = await horizonServer.loadAccount(user_public_key);

        // Find the specific asset balance
        // Note: SDK types in Deno can be tricky, treating as any for safety
        const balanceLine = (account.balances as any[]).find(
          (b: any) =>
            b.asset_code === track.artist_tokens.token_code &&
            b.asset_issuer === track.artist_tokens.artist_public_key,
        );

        const balance = balanceLine ? parseFloat(balanceLine.balance) : 0;

        if (balance >= (track.min_token_amount || 0)) {
          hasAccess = true;
        }
      } catch (e) {
        console.error(
          "Horizon check failed (Account likely not funded/found):",
          e,
        );
        // User might not have an account yet, so access remains false
      }
    }

    // --- CASE C: NFT Reward Gate (Uses Soroban RPC) ---
    else if (track.required_reward_id && track.rewards) {
      try {
        // Setup RPC Server
        const rpcUrl =
          RPC_URLS[network as keyof typeof RPC_URLS] || RPC_URLS.TESTNET;
        const rpcServer = new Stellar.rpc.Server(rpcUrl);

        // Instantiate Contract
        const contract = new Contract(track.rewards.nft_contract_id);

        // Call 'balance' function: fn(owner) -> int
        const operation = contract.call(
          "balance",
          new Address(user_public_key),
        );

        // Simulate Transaction
        // We use simulate because we just need to read state, not submit a tx
        const response = await rpcServer.simulateTransaction(operation.toXDR());

        if (Stellar.rpc.Api.isSimulationSuccess(response)) {
          // Parse result (scval to js number)
          const result = response.result.retval;
          // Handle ScVal parsing safely
          const balance = result.u32() ?? result.i32() ?? 0;

          if (balance > 0) {
            hasAccess = true;
          }
        }
      } catch (e) {
        console.error("Soroban NFT check failed:", e);
      }
    }

    if (!hasAccess) {
      return new Response(
        JSON.stringify({
          error: "Access Denied: Insufficient tokens or ownership.",
        }),
        {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // 6. Generate Signed URL (Valid for 1 Hour)
    const { data: signData, error: signError } = await supabaseClient.storage
      .from("music-private")
      .createSignedUrl(track.audio_file_path, 3600);

    if (signError) throw signError;

    // 7. Log History (Fire and forget, don't block response)
    supabaseClient
      .from("play_history")
      .insert({
        user_public_key,
        track_id,
      })
      .then(({ error }) => {
        if (error) console.error("Failed to log history:", error);
      });

    // 8. Success Response
    return new Response(JSON.stringify({ url: signData.signedUrl }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Secure Stream Error:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
