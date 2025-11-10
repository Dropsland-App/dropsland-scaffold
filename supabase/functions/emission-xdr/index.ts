// Emission XDR - Generate unsigned XDR for token emission
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  BASE_FEE,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const { server, networkPassphrase } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const { artistPublicKey, tokenCode, totalSupply } = await req.json();

    if (!artistPublicKey || !tokenCode || !totalSupply) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields: artistPublicKey, tokenCode, totalSupply",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Get token data from database
    const { data: tokenData, error } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCode.toUpperCase())
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (error || !tokenData) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Allow emission if trustline is created OR if status is 'created' (we'll create trustline in this transaction)
    if (
      tokenData.status !== "trustline_created" &&
      tokenData.status !== "created"
    ) {
      return new Response(
        JSON.stringify({
          error: "Token is not ready for emission.",
          currentStatus: tokenData.status,
          message: 'Token must be in "created" or "trustline_created" status',
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Get Stellar SDK classes
    const Asset = getStellarClass("Asset");
    const TransactionBuilder = getStellarClass("TransactionBuilder");
    const Operation = getStellarClass("Operation");

    if (!Asset || !TransactionBuilder || !Operation) {
      throw new Error("Required Stellar SDK classes not found");
    }

    // Create asset
    const asset = new Asset(tokenCode.toUpperCase(), artistPublicKey);

    // Load artist account
    const artistAccount = await server.loadAccount(artistPublicKey);

    // IMPORTANT: The artist is the ISSUER of the token
    // In Stellar, the issuer account does NOT need a trustline for its own asset
    // The issuer can directly send/pay tokens without a trustline
    // Only the RECIPIENT (distribution account) needs a trustline (already created in prepare-token)

    // Check artist account balance
    const nativeBalance = artistAccount.balances.find(
      (b: any) => b.asset_type === "native",
    );
    const balance = nativeBalance ? parseFloat(nativeBalance.balance) : 0;
    console.log(`Artist account balance: ${balance} XLM`);

    // Calculate required fees: base fee per operation
    // Only 1 operation needed: payment (issuer doesn't need trustline)
    const operationsCount = 1; // payment only
    const transactionFee = (parseFloat(BASE_FEE) * operationsCount) / 10000000; // Convert stroops to XLM
    const minRequiredBalance = transactionFee + 1; // 1 XLM buffer for minimum reserve

    console.log(
      `Operations: ${operationsCount} (payment only - issuer doesn't need trustline)`,
    );
    console.log(`Transaction fee: ${transactionFee} XLM`);
    console.log(
      `Minimum required balance: ${minRequiredBalance} XLM, Current balance: ${balance} XLM`,
    );

    if (balance < minRequiredBalance) {
      return new Response(
        JSON.stringify({
          error: "Insufficient balance",
          message: `Artist account has insufficient XLM balance. Required: ~${minRequiredBalance.toFixed(2)} XLM for transaction fees, Current: ${balance.toFixed(2)} XLM. Please fund the artist account with at least ${minRequiredBalance.toFixed(2)} XLM.`,
          currentBalance: balance,
          requiredBalance: minRequiredBalance,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create unsigned transaction with payment operation only
    // The artist (issuer) can send tokens directly without a trustline
    const transactionBuilder = new TransactionBuilder(artistAccount, {
      fee: BASE_FEE,
      networkPassphrase: networkPassphrase,
    });

    // Add payment operation (emission)
    // This creates and sends tokens from artist (issuer) to distribution account
    // Since artist is the issuer, no trustline is needed for the artist
    transactionBuilder.addOperation(
      Operation.payment({
        destination: tokenData.distribution_public_key,
        asset: asset,
        amount: totalSupply,
      }),
    );

    const transaction = transactionBuilder
      .setTimeout(300) // 5 minutes for signing
      .build();

    const xdr = transaction.toXDR();

    return new Response(
      JSON.stringify({
        success: true,
        xdr: xdr,
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
