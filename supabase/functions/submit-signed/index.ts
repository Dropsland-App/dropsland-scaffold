// Submit Signed - Submit signed emission transaction to Stellar
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
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
    const { signedXDR, tokenCode, artistPublicKey } = await req.json();

    if (!signedXDR || !tokenCode || !artistPublicKey) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields: signedXDR, tokenCode, artistPublicKey",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Verify token exists
    const { data: tokenData, error: tokenError } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCode.toUpperCase())
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (tokenError || !tokenData) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Parse and submit transaction
    try {
      const TransactionBuilder = getStellarClass("TransactionBuilder");
      if (!TransactionBuilder) {
        throw new Error("TransactionBuilder class not found in Stellar SDK");
      }

      const transaction = TransactionBuilder.fromXDR(
        signedXDR,
        networkPassphrase,
      );

      const result = await server.submitTransaction(transaction as any);

      // Check if transaction includes trustline creation (multiple operations)
      // The emission transaction may include trustline creation as the first operation
      const operations = (transaction as any).operations;
      const includesTrustline = operations && operations.length > 1;

      // Update status in database
      const updateData: any = {
        status: "tokens_emitted",
        emission_tx_hash: result.hash,
        emitted_at: new Date().toISOString(),
      };

      // If trustline was created as part of emission, also record it
      if (includesTrustline) {
        console.log("Emission transaction included trustline creation");
        // Note: The trustline was created, but we use the same tx hash
        // The database should reflect that trustline exists after this transaction
      }

      const { error: updateError } = await supabase
        .from("artist_tokens")
        .update(updateData)
        .eq("token_code", tokenCode.toUpperCase())
        .eq("artist_public_key", artistPublicKey);

      if (updateError) {
        console.error("Error updating database:", updateError);
        // Transaction was submitted successfully, but DB update failed
        // Return success but log the error
      }

      return new Response(
        JSON.stringify({
          success: true,
          txHash: result.hash,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    } catch (stellarError: any) {
      console.error("Stellar transaction error:", stellarError);

      // Parse Stellar error for better message
      let errorMessage = "Transaction submission failed";
      let errorDetails: any = {};

      if (stellarError.response) {
        const errorData = stellarError.response.data;
        console.error(
          "Stellar error data:",
          JSON.stringify(errorData, null, 2),
        );

        if (errorData && errorData.extras && errorData.extras.result_codes) {
          const resultCodes = errorData.extras.result_codes;
          const transactionCode = resultCodes.transaction;
          const operationCodes = resultCodes.operations || [];

          errorDetails = {
            transactionCode,
            operationCodes,
            fullResultCodes: resultCodes,
          };

          // Map common error codes to user-friendly messages
          const errorMessages: Record<string, string> = {
            tx_failed: "Transaction failed",
            tx_insufficient_fee: "Insufficient transaction fee",
            tx_too_early: "Transaction submitted too early",
            tx_too_late: "Transaction expired",
            tx_missing_operation: "Transaction missing operations",
            tx_bad_auth: "Transaction authentication failed",
            tx_bad_auth_extra: "Transaction has extra signatures",
            op_underfunded: "Account has insufficient balance",
            op_low_reserve: "Account does not meet minimum reserve requirement",
            op_line_full: "Trustline limit reached",
            op_no_trust: "No trustline exists for this asset",
            op_not_authorized: "Operation not authorized",
            op_no_issuer: "Issuer account does not exist",
            op_success: "Operation succeeded",
          };

          // Build detailed error message
          let messages: string[] = [];
          if (transactionCode) {
            messages.push(
              `Transaction: ${errorMessages[transactionCode] || transactionCode}`,
            );
          }

          operationCodes.forEach((opCode: string, index: number) => {
            messages.push(
              `Operation ${index + 1}: ${errorMessages[opCode] || opCode}`,
            );
          });

          errorMessage =
            messages.join(". ") || "Transaction failed on Stellar network";

          // Add more context based on error codes
          if (
            operationCodes.includes("op_underfunded") ||
            operationCodes.includes("op_low_reserve")
          ) {
            errorMessage +=
              ". The artist account may not have enough XLM to pay for transaction fees or maintain minimum balance.";
          } else if (operationCodes.includes("op_no_trust")) {
            errorMessage +=
              ". Trustline creation failed - the artist account may not have enough XLM to create a trustline.";
          } else if (operationCodes.includes("op_line_full")) {
            errorMessage += ". Trustline limit is too low or already reached.";
          }
        } else if (errorData && errorData.detail) {
          errorMessage = errorData.detail;
        } else if (errorData && errorData.title) {
          errorMessage = errorData.title;
        }
      } else if (stellarError.message) {
        errorMessage = stellarError.message;
      }

      return new Response(
        JSON.stringify({
          error: errorMessage,
          details: errorDetails,
          stellarError: stellarError.response?.data || stellarError.message,
        }),
        {
          status: 400,
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
