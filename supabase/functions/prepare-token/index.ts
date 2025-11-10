// Prepare Token - Creates distribution account and trustline
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  encryptSecret,
  fundDistributionAccount,
  BASE_FEE,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const PLATFORM_TREASURY = Deno.env.get("PLATFORM_TREASURY_PUBLIC_KEY")!;
const { server, networkPassphrase, network } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    // Parse request body
    let requestBody;
    try {
      requestBody = await req.json();
      console.log(
        "Received request body:",
        JSON.stringify(requestBody, null, 2),
      );
    } catch (parseError) {
      console.error("Error parsing request body:", parseError);
      return new Response(
        JSON.stringify({
          error: "Invalid JSON in request body",
          details:
            parseError instanceof Error
              ? parseError.message
              : String(parseError),
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const {
      artistPublicKey,
      tokenCode,
      tokenName,
      totalSupply,
      platformFeeBps,
      description,
    } = requestBody;

    // Validations with detailed error messages
    const missingFields: string[] = [];
    if (!artistPublicKey) missingFields.push("artistPublicKey");
    if (!tokenCode) missingFields.push("tokenCode");
    if (!totalSupply) missingFields.push("totalSupply");

    if (missingFields.length > 0) {
      const errorMessage = `Missing required fields: ${missingFields.join(", ")}. Received: ${JSON.stringify({ artistPublicKey: !!artistPublicKey, tokenCode: !!tokenCode, totalSupply: !!totalSupply })}`;
      console.error(errorMessage);
      return new Response(
        JSON.stringify({
          error: `Missing required fields: ${missingFields.join(", ")}`,
          received: requestBody,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate token code format (1-12 alphanumeric characters)
    const tokenCodeUpper = String(tokenCode || "").toUpperCase();
    if (!/^[A-Z0-9]{1,12}$/.test(tokenCodeUpper)) {
      console.error(`Invalid token code format: ${tokenCode}`);
      return new Response(
        JSON.stringify({
          error: "Token code must be 1-12 alphanumeric characters",
          received: tokenCode,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate artist account exists on Stellar
    try {
      await server.loadAccount(artistPublicKey);
      console.log(`Artist account verified: ${artistPublicKey}`);
    } catch (accountError) {
      console.error(`Artist account load error:`, accountError);
      const errorMessage =
        accountError instanceof Error
          ? accountError.message
          : String(accountError);
      return new Response(
        JSON.stringify({
          error: "Artist account does not exist on Stellar network",
          details: errorMessage,
          artistPublicKey,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Check if token already exists
    const { data: existingToken } = await supabase
      .from("artist_tokens")
      .select("id")
      .eq("token_code", tokenCodeUpper)
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (existingToken) {
      return new Response(
        JSON.stringify({
          error: "Token with this code already exists for this artist",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create unique distribution wallet for this token
    const Keypair = getStellarClass("Keypair");
    if (!Keypair) {
      throw new Error("Keypair class not found in Stellar SDK");
    }
    const distributionKeypair = Keypair.random();

    // Encrypt the secret
    const secretKey = await encryptSecret(distributionKeypair.secret());

    // Convert totalSupply to string if it's a number
    const totalSupplyStr = String(totalSupply || "0");

    // Save to database
    console.log("Inserting token into database:", {
      artist_public_key: artistPublicKey,
      token_code: tokenCodeUpper,
      token_name: tokenName || tokenCodeUpper,
      total_supply: totalSupplyStr,
      platform_fee_bps: platformFeeBps || 1000,
    });

    const { data, error } = await supabase
      .from("artist_tokens")
      .insert({
        artist_public_key: artistPublicKey,
        token_code: tokenCodeUpper,
        token_name: tokenName || tokenCodeUpper,
        total_supply: totalSupplyStr,
        platform_fee_bps: platformFeeBps || 1000,
        description: description || null,
        distribution_public_key: distributionKeypair.publicKey(),
        distribution_secret_encrypted: secretKey,
        status: "created",
      })
      .select()
      .single();

    if (error) {
      console.error("DB Error:", error);
      return new Response(
        JSON.stringify({
          error: "Error saving to database",
          details: error.message,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Fund the distribution account (needs 2 XLM minimum)
    try {
      await fundDistributionAccount(
        distributionKeypair.publicKey(),
        server,
        networkPassphrase,
        network,
      );
      console.log("Distribution account funded successfully");
    } catch (fundingError) {
      console.error("Funding error:", fundingError);
      // For public network, funding is required
      if (network === "PUBLIC") {
        return new Response(
          JSON.stringify({
            error: "Account funding failed",
            details:
              fundingError instanceof Error
                ? fundingError.message
                : String(fundingError),
          }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      // For test networks, throw error to stop processing (friendbot should work)
      throw fundingError;
    }

    // Additional wait to ensure account is fully available
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Automatically create trustline
    try {
      const Asset = getStellarClass("Asset");
      const TransactionBuilder = getStellarClass("TransactionBuilder");
      const Operation = getStellarClass("Operation");

      if (!Asset || !TransactionBuilder || !Operation) {
        throw new Error("Required Stellar SDK classes not found");
      }

      const asset = new Asset(tokenCodeUpper, artistPublicKey);

      // Verify account exists (should already be verified after funding, but double-check)
      let distributionAccount;
      let retries = 5;
      let accountFound = false;

      while (retries > 0) {
        try {
          distributionAccount = await server.loadAccount(
            distributionKeypair.publicKey(),
          );
          accountFound = true;
          console.log(
            "Distribution account verified:",
            distributionKeypair.publicKey(),
          );
          break;
        } catch (loadError) {
          retries--;
          if (retries > 0) {
            console.log(
              `Account not yet available, retrying in 2 seconds... (${retries} retries left)`,
            );
            await new Promise((resolve) => setTimeout(resolve, 2000));
          } else {
            console.error("Final account load error:", loadError);
          }
        }
      }

      if (!accountFound || !distributionAccount) {
        throw new Error(
          `Distribution account not found after funding. Public key: ${distributionKeypair.publicKey()}. Network: ${network}`,
        );
      }

      // Create trustline
      const transaction = new TransactionBuilder(distributionAccount, {
        fee: BASE_FEE,
        networkPassphrase: networkPassphrase,
      })
        .addOperation(
          Operation.changeTrust({
            asset: asset,
            limit: totalSupplyStr,
          }),
        )
        .setTimeout(180)
        .build();

      transaction.sign(distributionKeypair);
      const result = await server.submitTransaction(transaction);

      // Update status in DB
      await supabase
        .from("artist_tokens")
        .update({
          status: "trustline_created",
          trustline_tx_hash: result.hash,
          trustline_created_at: new Date().toISOString(),
        })
        .eq("id", data.id);

      return new Response(
        JSON.stringify({
          success: true,
          distributionAccount: distributionKeypair.publicKey(),
          tokenId: data.id,
          trustlineTxHash: result.hash,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    } catch (trustlineError) {
      console.error("Trustline creation error:", trustlineError);
      // Return success but with warning - trustline can be created later
      return new Response(
        JSON.stringify({
          success: true,
          distributionAccount: distributionKeypair.publicKey(),
          tokenId: data.id,
          warning:
            "Token created but trustline creation failed. It will be retried automatically.",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }
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
