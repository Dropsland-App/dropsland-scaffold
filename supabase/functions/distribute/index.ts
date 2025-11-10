// Distribute - Execute token distribution to artist and platform
// @ts-ignore - Deno runtime
import * as StellarSdk from "https://cdn.jsdelivr.net/npm/@stellar/stellar-sdk@14.2.0/+esm";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";
import {
  corsHeaders,
  handleCORS,
  getStellarNetwork,
  decryptSecret,
  BASE_FEE,
  getStellarClass,
} from "../_shared/utils.ts";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

const PLATFORM_TREASURY = Deno.env.get("PLATFORM_TREASURY_PUBLIC_KEY")!;
const { server, networkPassphrase } = getStellarNetwork();

Deno.serve(async (req) => {
  // Handle CORS preflight
  const corsResponse = handleCORS(req);
  if (corsResponse) {
    return corsResponse;
  }

  try {
    const { artistPublicKey, tokenCode } = await req.json();

    if (!artistPublicKey || !tokenCode) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: artistPublicKey, tokenCode",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!PLATFORM_TREASURY) {
      return new Response(
        JSON.stringify({ error: "Platform treasury not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Normalize token code to uppercase
    const tokenCodeUpper = tokenCode.toUpperCase();

    // Get token data from database
    const { data: tokenData, error } = await supabase
      .from("artist_tokens")
      .select("*")
      .eq("token_code", tokenCodeUpper)
      .eq("artist_public_key", artistPublicKey)
      .single();

    if (error || !tokenData) {
      return new Response(JSON.stringify({ error: "Token not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (tokenData.status !== "tokens_emitted") {
      if (tokenData.status === "distributed") {
        return new Response(
          JSON.stringify({
            error: "Distribution already completed",
            message: "This token has already been distributed.",
            currentStatus: tokenData.status,
            distributionTxHash: tokenData.distribution_tx_hash,
            distributedAt: tokenData.distributed_at,
            platformAmount: tokenData.platform_amount,
            artistAmount: tokenData.artist_amount,
          }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      return new Response(
        JSON.stringify({
          error:
            "Token is not ready for distribution. Tokens must be emitted first.",
          currentStatus: tokenData.status,
          requiredStatus: "tokens_emitted",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Check if distribution was already completed (double-check)
    if (tokenData.distribution_tx_hash) {
      console.log(
        "⚠️ Warning: Distribution transaction hash already exists:",
        tokenData.distribution_tx_hash,
      );
      console.log(
        "This token may have already been distributed. Checking transaction...",
      );

      // Optionally, you could verify the transaction exists on-chain here
      // For now, we'll just log a warning and proceed with the check above
    }

    // Get Stellar SDK classes
    const Keypair = getStellarClass("Keypair");
    const Asset = getStellarClass("Asset");
    const TransactionBuilder = getStellarClass("TransactionBuilder");
    const Operation = getStellarClass("Operation");
    const Memo = getStellarClass("Memo");

    if (!Keypair || !Asset || !TransactionBuilder || !Operation || !Memo) {
      throw new Error("Required Stellar SDK classes not found");
    }

    // Helper to get native XLM asset
    // In Stellar SDK, native XLM is created using Asset.native() static method
    // Since we're using getStellarClass which returns the class constructor,
    // we need to access the static method through StellarSdk namespace
    const getNativeAsset = () => {
      try {
        // Method 1: Access through StellarSdk namespace (most reliable)
        // The StellarSdk namespace has the Asset class with native() static method
        if (StellarSdk && (StellarSdk as any).Asset) {
          const StellarAsset = (StellarSdk as any).Asset;
          if (typeof StellarAsset.native === "function") {
            const nativeAsset = StellarAsset.native();
            console.log(
              "✅ Native XLM asset created via StellarSdk.Asset.native()",
            );
            return nativeAsset;
          }
        }

        // Method 2: Try accessing through the Asset class we got from getStellarClass
        // Note: getStellarClass might return the constructor, but native() might be on the namespace
        if (Asset && typeof (Asset as any).native === "function") {
          const nativeAsset = (Asset as any).native();
          console.log("✅ Native XLM asset created via Asset.native()");
          return nativeAsset;
        }

        // Method 3: Try to access through prototype or static properties
        const AssetConstructor = Asset.constructor || Asset;
        if (
          AssetConstructor &&
          typeof (AssetConstructor as any).native === "function"
        ) {
          const nativeAsset = (AssetConstructor as any).native();
          console.log(
            "✅ Native XLM asset created via AssetConstructor.native()",
          );
          return nativeAsset;
        }

        // Method 4: Last resort - try to inspect StellarSdk structure
        console.warn(
          "⚠️ Could not find Asset.native() method. Inspecting StellarSdk structure...",
        );
        console.log("StellarSdk keys:", Object.keys(StellarSdk || {}));
        console.log("Asset type:", typeof Asset);
        console.log(
          "Asset properties:",
          Object.getOwnPropertyNames(Asset || {}),
        );

        // If all else fails, we'll need to construct it manually
        // But this is not recommended as it may not work correctly
        throw new Error(
          "Could not create native XLM asset: Asset.native() method not found",
        );
      } catch (error) {
        console.error("Error creating native asset:", error);
        throw new Error(
          `Failed to create native XLM asset: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    };

    // Decrypt distribution secret
    let distributionSecret: string;
    try {
      distributionSecret = await decryptSecret(
        tokenData.distribution_secret_encrypted,
      );
      console.log(
        "Distribution secret decrypted successfully, length:",
        distributionSecret.length,
      );
    } catch (decryptError) {
      console.error("Failed to decrypt distribution secret:", decryptError);
      const errorMessage =
        decryptError instanceof Error
          ? decryptError.message
          : String(decryptError);
      return new Response(
        JSON.stringify({
          error: "Failed to decrypt distribution secret",
          message: errorMessage,
          hint: "This may indicate an ENCRYPTION_KEY mismatch between prepare-token and distribute functions. Ensure the same ENCRYPTION_KEY is used for both.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate secret format before creating keypair
    if (!distributionSecret || typeof distributionSecret !== "string") {
      return new Response(
        JSON.stringify({
          error: "Invalid decrypted secret",
          message: "The decrypted distribution secret is not a valid string.",
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (
      !distributionSecret.startsWith("S") ||
      distributionSecret.length !== 56
    ) {
      console.error(
        "Invalid secret format - Length:",
        distributionSecret.length,
        "Starts with S:",
        distributionSecret.startsWith("S"),
        "First 10 chars:",
        distributionSecret.substring(0, 10),
      );
      return new Response(
        JSON.stringify({
          error: "Invalid distribution secret format",
          message: `The decrypted distribution secret is not a valid Stellar secret key. Expected: 56 characters starting with 'S', got: ${distributionSecret.length} characters starting with '${distributionSecret.substring(0, 1)}'`,
          secretLength: distributionSecret.length,
          secretPrefix: distributionSecret.substring(0, 5),
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create keypair from secret
    let distributionKeypair;
    try {
      distributionKeypair = Keypair.fromSecret(distributionSecret);
      console.log(
        "Distribution keypair created successfully, public key:",
        distributionKeypair.publicKey(),
      );
    } catch (keypairError) {
      console.error("Error creating keypair from secret:", keypairError);
      const errorMessage =
        keypairError instanceof Error
          ? keypairError.message
          : String(keypairError);
      return new Response(
        JSON.stringify({
          error: "Failed to create distribution keypair",
          message:
            "Could not create keypair from decrypted secret. The secret key may be corrupted or invalid.",
          details: errorMessage,
          secretLength: distributionSecret.length,
          secretPrefix: distributionSecret.substring(0, 5),
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Calculate distribution amounts first (before creating asset)
    const totalSupply = parseFloat(tokenData.total_supply);

    if (isNaN(totalSupply) || totalSupply <= 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid total supply",
          message: `Total supply must be a positive number. Got: ${tokenData.total_supply}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const platformFeeBps = tokenData.platform_fee_bps || 1000;
    const platformAmount = (totalSupply * platformFeeBps) / 10000;
    const artistAmount = totalSupply - platformAmount;

    console.log(
      `Total supply: ${totalSupply}, Platform fee: ${platformFeeBps}bps, Platform amount: ${platformAmount}, Artist amount: ${artistAmount}`,
    );

    // Validate artist public key format
    if (!artistPublicKey || typeof artistPublicKey !== "string") {
      return new Response(
        JSON.stringify({
          error: "Invalid artist public key",
          message: "Artist public key must be a valid string",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    if (!artistPublicKey.startsWith("G") || artistPublicKey.length !== 56) {
      return new Response(
        JSON.stringify({
          error: "Invalid artist public key format",
          message: `Artist public key must be a valid Stellar public key (56 characters starting with 'G'). Got: ${artistPublicKey.length} characters starting with '${artistPublicKey.substring(0, 1)}'`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate token code (already normalized above)
    if (
      !tokenCodeUpper ||
      tokenCodeUpper.length < 1 ||
      tokenCodeUpper.length > 12
    ) {
      return new Response(
        JSON.stringify({
          error: "Invalid token code",
          message: `Token code must be 1-12 characters. Got: ${tokenCodeUpper.length} characters`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Create asset
    let asset;
    try {
      asset = new Asset(tokenCodeUpper, artistPublicKey);
      console.log(
        "Asset created successfully:",
        asset.getCode(),
        asset.getIssuer(),
      );
    } catch (assetError) {
      console.error("Error creating asset:", assetError);
      const errorMessage =
        assetError instanceof Error ? assetError.message : String(assetError);
      return new Response(
        JSON.stringify({
          error: "Failed to create asset",
          message: "Could not create Stellar asset object",
          details: errorMessage,
          tokenCode: tokenCodeUpper,
          issuer: artistPublicKey,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // IMPORTANT: In Stellar, the ISSUER account CANNOT receive its own tokens
    // The issuer cannot create a trustline for its own asset, so it cannot hold balances
    // Therefore, we CANNOT send tokens to the artist (issuer) during distribution
    //
    // Distribution strategy:
    // - Send platform fee to platform treasury (requires trustline)
    // - Keep artist's share in the distribution account (or send to a separate artist-controlled account)
    // - The distribution account already has a trustline and can hold tokens

    console.log(
      "⚠️ Note: Artist (issuer) cannot receive tokens of their own asset in Stellar",
    );
    console.log(
      "Distribution will send platform fee to treasury and keep artist share in distribution account",
    );

    // Verify artist account exists (for logging/verification only)
    try {
      await server.loadAccount(artistPublicKey);
      console.log("✅ Artist account verified");
    } catch (accountError) {
      console.error("Error checking artist account:", accountError);
      const errorMessage =
        accountError instanceof Error
          ? accountError.message
          : String(accountError);
      return new Response(
        JSON.stringify({
          error: "Could not verify artist account",
          details: errorMessage,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Verify platform treasury has trustline, create it automatically if we have the secret
    let treasuryHasTrustline = false;
    try {
      const treasuryAccount = await server.loadAccount(PLATFORM_TREASURY);
      treasuryHasTrustline = treasuryAccount.balances.some(
        (b: any) =>
          b.asset_code === tokenCodeUpper && b.asset_issuer === artistPublicKey,
      );

      if (!treasuryHasTrustline) {
        console.log(
          "⚠️ Platform treasury does not have trustline. Attempting to create it...",
        );

        // Try to create trustline automatically if we have the treasury secret
        const treasurySecret = Deno.env.get("PLATFORM_TREASURY_SECRET_KEY");

        if (treasurySecret) {
          try {
            // Validate treasury secret format
            const trimmedSecret = treasurySecret.trim().replace(/\0/g, "");
            if (!trimmedSecret.startsWith("S") || trimmedSecret.length !== 56) {
              console.error(
                "Invalid treasury secret format - Length:",
                trimmedSecret.length,
                "Starts with S:",
                trimmedSecret.startsWith("S"),
              );
              return new Response(
                JSON.stringify({
                  error: "Invalid platform treasury secret key format",
                  message: `PLATFORM_TREASURY_SECRET_KEY must be a valid Stellar secret key (56 characters starting with 'S'). Got: ${trimmedSecret.length} characters starting with '${trimmedSecret.substring(0, 1)}'`,
                  hint: "Ensure PLATFORM_TREASURY_SECRET_KEY is a valid Stellar secret key, not a mnemonic phrase. Convert mnemonic to secret key first if needed.",
                }),
                {
                  status: 500,
                  headers: {
                    ...corsHeaders,
                    "Content-Type": "application/json",
                  },
                },
              );
            }

            const treasuryKeypair = Keypair.fromSecret(trimmedSecret);
            console.log(
              "Treasury keypair created successfully, public key:",
              treasuryKeypair.publicKey(),
            );

            // Ensure totalSupply is a valid string for Stellar (max 922337203685.4775807)
            const trustlineLimit =
              totalSupply > 922337203685.4775807
                ? "922337203685.4775807"
                : totalSupply.toFixed(7);

            console.log(
              "Creating treasury trustline with limit:",
              trustlineLimit,
            );

            const treasuryTrustlineTx = new TransactionBuilder(
              treasuryAccount,
              {
                fee: BASE_FEE,
                networkPassphrase: networkPassphrase,
              },
            )
              .addOperation(
                Operation.changeTrust({
                  asset: asset,
                  limit: trustlineLimit,
                }),
              )
              .setTimeout(180)
              .build();

            treasuryTrustlineTx.sign(treasuryKeypair);
            const trustlineResult =
              await server.submitTransaction(treasuryTrustlineTx);
            console.log(
              "✅ Platform treasury trustline created:",
              trustlineResult.hash,
            );
            treasuryHasTrustline = true;
          } catch (trustlineError) {
            console.error("Error creating treasury trustline:", trustlineError);
            const errorMessage =
              trustlineError instanceof Error
                ? trustlineError.message
                : String(trustlineError);
            return new Response(
              JSON.stringify({
                error: "Failed to create platform treasury trustline",
                message:
                  "Could not automatically create trustline for platform treasury. Please ensure the treasury account has created a trustline for this token.",
                details: errorMessage,
                tokenCode: tokenCodeUpper,
                assetIssuer: artistPublicKey,
                platformTreasury: PLATFORM_TREASURY,
                hint: "Check that PLATFORM_TREASURY_SECRET_KEY is correct and the treasury account has sufficient XLM balance.",
              }),
              {
                status: 400,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
              },
            );
          }
        } else {
          // No treasury secret available, require manual trustline creation
          return new Response(
            JSON.stringify({
              error: "Platform treasury trustline required",
              message:
                "Platform treasury does not have a trustline for this token. Please ensure the treasury account has created a trustline before distribution.",
              tokenCode: tokenCodeUpper,
              assetIssuer: artistPublicKey,
              platformTreasury: PLATFORM_TREASURY,
              instructions:
                "The platform treasury account needs to create a trustline for this token asset. Set PLATFORM_TREASURY_SECRET_KEY to enable automatic trustline creation.",
            }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            },
          );
        }
      } else {
        console.log("✅ Platform treasury trustline verified");
      }
    } catch (treasuryError) {
      console.error("Error checking treasury account:", treasuryError);
      const errorMessage =
        treasuryError instanceof Error
          ? treasuryError.message
          : String(treasuryError);
      return new Response(
        JSON.stringify({
          error: "Could not verify platform treasury account",
          details: errorMessage,
          platformTreasury: PLATFORM_TREASURY,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Load distribution account
    const distributionAccount = await server.loadAccount(
      distributionKeypair.publicKey(),
    );

    // IMPORTANT: Artist (issuer) cannot receive their own tokens
    // So we only send the platform fee to treasury
    // Artist's share remains in the distribution account (they can access it via the distribution account)
    // OR: We could create a separate artist holding account, but for now we'll keep it in distribution

    // Format amounts for Stellar (must be string with up to 7 decimal places)
    const platformAmountStr = platformAmount.toFixed(7);
    const artistAmountStr = artistAmount.toFixed(7);

    console.log(
      `Distribution amounts - Platform: ${platformAmountStr}, Artist share: ${artistAmountStr} (stays in distribution account)`,
    );

    // Validate amounts
    if (parseFloat(platformAmountStr) <= 0) {
      return new Response(
        JSON.stringify({
          error: "Invalid platform amount",
          message: `Platform amount must be greater than 0. Calculated: ${platformAmountStr}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Validate that distribution account has enough balance
    const distributionBalance = distributionAccount.balances.find(
      (b: any) =>
        b.asset_code === tokenCodeUpper && b.asset_issuer === artistPublicKey,
    );

    if (!distributionBalance) {
      return new Response(
        JSON.stringify({
          error: "Distribution account has no token balance",
          message:
            "The distribution account does not have a balance for this token. Tokens may not have been emitted correctly.",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const availableBalance = parseFloat(distributionBalance.balance);
    if (availableBalance < parseFloat(platformAmountStr)) {
      return new Response(
        JSON.stringify({
          error: "Insufficient balance",
          message: `Distribution account has insufficient balance. Available: ${availableBalance}, Required: ${platformAmountStr}`,
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    console.log(
      `Distribution account balance: ${availableBalance}, Sending: ${platformAmountStr}`,
    );
    console.log(
      `Artist's share remaining: ${artistAmountStr} (will be used to create sell offer)`,
    );

    // Calculate remaining balance after sending platform fee
    const remainingBalance = availableBalance - parseFloat(platformAmountStr);
    console.log(
      `Remaining balance after platform fee: ${remainingBalance.toFixed(7)}`,
    );

    // Validate we have enough for the sell offer (artist's share)
    if (remainingBalance < parseFloat(artistAmountStr)) {
      console.warn(
        `⚠️ Warning: Remaining balance (${remainingBalance.toFixed(7)}) is less than artist amount (${artistAmountStr}). Using available balance for sell offer.`,
      );
    }

    // Use the smaller of remaining balance or artist amount for the sell offer
    const sellOfferAmount =
      Math.min(remainingBalance, parseFloat(artistAmountStr)) / 2;

    // Create distribution transaction with payment and sell offer
    // Only send platform fee to treasury (artist cannot receive their own tokens)
    // Then create a sell offer for the artist's share at 1:1 XLM rate
    let transaction;
    try {
      const transactionBuilder = new TransactionBuilder(distributionAccount, {
        fee: BASE_FEE,
        networkPassphrase: networkPassphrase,
      })
        // Send platform fee to platform treasury
        .addOperation(
          Operation.payment({
            destination: PLATFORM_TREASURY,
            asset: asset,
            amount: platformAmountStr,
          }),
        );

      // Create sell offer for artist's share at 1:1 XLM rate
      // Price: 1 token = 1 XLM (numerator: 1, denominator: 1)
      if (sellOfferAmount > 0) {
        console.log(
          `Creating sell offer for ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} at 1:1 XLM rate`,
        );

        // Get native XLM asset for the sell offer
        let xlmAsset;
        try {
          xlmAsset = getNativeAsset();
          console.log("Native XLM asset created successfully");
        } catch (assetError) {
          console.error("Error creating native XLM asset:", assetError);
          // Continue without sell offer if we can't create native asset
          console.log(
            "⚠️ Skipping sell offer creation due to native asset error",
          );
        }

        if (xlmAsset) {
          try {
            // Verify the asset is native (optional check)
            const isNative = xlmAsset.isNative ? xlmAsset.isNative() : false;
            console.log(
              "XLM Asset type:",
              isNative ? "Native XLM" : "Custom asset",
            );

            // Create manage sell offer operation
            // Price format: string '1' means 1 token = 1 XLM
            // In Stellar, price is selling/buying, so '1' means 1 selling asset = 1 buying asset
            transactionBuilder.addOperation(
              Operation.manageSellOffer({
                selling: asset, // Selling the token
                buying: xlmAsset, // Buying XLM (native)
                amount: sellOfferAmount.toFixed(7), // Amount of tokens to sell
                price: "1", // Price: 1 token = 1 XLM (string format)
                offerId: 0, // 0 = create new offer
              }),
            );

            console.log(
              `✅ Sell offer operation added: ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} for XLM at 1:1 rate`,
            );
          } catch (offerError) {
            console.error("Error creating sell offer operation:", offerError);
            // Log error but continue - the payment to treasury is more important
            console.log(
              "⚠️ Warning: Could not create sell offer, but payment to treasury will proceed",
            );
          }
        }
      } else {
        console.log(
          "⚠️ No amount available for sell offer. Skipping sell offer creation.",
        );
      }

      transaction = transactionBuilder.setTimeout(180).build();

      console.log(
        "Transaction built successfully with",
        transaction.operations.length,
        "operation(s)",
      );
    } catch (txBuildError) {
      console.error("Error building transaction:", txBuildError);
      const errorMessage =
        txBuildError instanceof Error
          ? txBuildError.message
          : String(txBuildError);
      return new Response(
        JSON.stringify({
          error: "Failed to build transaction",
          message: "Could not build distribution transaction",
          details: errorMessage,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Sign transaction
    try {
      transaction.sign(distributionKeypair);
      console.log("Transaction signed successfully");
    } catch (signError) {
      console.error("Error signing transaction:", signError);
      const errorMessage =
        signError instanceof Error ? signError.message : String(signError);
      return new Response(
        JSON.stringify({
          error: "Failed to sign transaction",
          message: "Could not sign distribution transaction",
          details: errorMessage,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Submit transaction
    let result;
    try {
      result = await server.submitTransaction(transaction);
      console.log("✅ Distribution transaction submitted successfully!");

      // Get transaction operations for logging and response
      const operations = (transaction as any).operations || [];
      const network = Deno.env.get("STELLAR_NETWORK") || "TESTNET";
      const explorerBase =
        network === "PUBLIC"
          ? "https://stellar.expert/explorer/public"
          : network === "FUTURENET"
            ? "https://stellar.expert/explorer/futurenet"
            : "https://stellar.expert/explorer/testnet";

      console.log(
        "═══════════════════════════════════════════════════════════",
      );
      console.log("DISTRIBUTION TRANSACTION DETAILS:");
      console.log(
        "═══════════════════════════════════════════════════════════",
      );
      console.log("Transaction Hash:", result.hash);
      console.log(
        "From (Distribution Account):",
        distributionKeypair.publicKey(),
      );
      console.log("To (Platform Treasury):", PLATFORM_TREASURY);
      console.log("Asset:", `${tokenCodeUpper}-${artistPublicKey}`);
      console.log("Amount:", platformAmountStr, tokenCodeUpper);
      console.log("Network:", network);
      console.log("Transaction URL:", `${explorerBase}/tx/${result.hash}`);
      console.log(
        "Asset URL:",
        `${explorerBase}/asset/${tokenCodeUpper}-${artistPublicKey}`,
      );
      console.log(`Operations in transaction: ${operations.length}`);

      // Log operation details
      operations.forEach((op: any, idx: number) => {
        const opType = op.type || op.body?.type || "unknown";
        console.log(`  Operation ${idx + 1}:`, opType);
        if (opType === "payment" || op.body?.paymentOp) {
          const paymentOp = op.body?.paymentOp || op;
          console.log(
            `    - Payment: ${paymentOp.amount} ${tokenCodeUpper} to ${(paymentOp.destination || paymentOp.destination?.accountId?.ed25519 || "").slice(0, 8)}...`,
          );
        } else if (opType === "manageSellOffer" || op.body?.manageSellOfferOp) {
          const sellOp = op.body?.manageSellOfferOp || op;
          const price =
            sellOp.price ||
            (sellOp.priceN && sellOp.priceD
              ? `${sellOp.priceN}/${sellOp.priceD}`
              : "1");
          console.log(
            `    - Sell Offer: ${sellOp.amount} ${tokenCodeUpper} for XLM at ${price} rate`,
          );
          console.log(`    - Offer ID: ${sellOp.offerId || 0} (0 = new offer)`);
        }
      });

      console.log(
        "═══════════════════════════════════════════════════════════",
      );
      console.log("This transaction includes:");
      console.log(
        `  1. Payment: ${distributionKeypair.publicKey().slice(0, 8)}... sent ${platformAmountStr} ${tokenCodeUpper} to ${PLATFORM_TREASURY.slice(0, 8)}... (treasury)`,
      );
      if (sellOfferAmount > 0 && operations.length > 1) {
        console.log(
          `  2. Sell Offer: Created offer to sell ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} for XLM at 1:1 rate`,
        );
        console.log(
          `     - Buyers can purchase tokens at 1 ${tokenCodeUpper} = 1 XLM`,
        );
        console.log(`     - Offer will be visible on Stellar DEX orderbooks`);
      }
      console.log(
        "═══════════════════════════════════════════════════════════",
      );
    } catch (submitError) {
      console.error("Error submitting transaction:", submitError);
      const errorMessage =
        submitError instanceof Error
          ? submitError.message
          : String(submitError);
      return new Response(
        JSON.stringify({
          error: "Failed to submit transaction",
          message:
            "Could not submit distribution transaction to Stellar network",
          details: errorMessage,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // Update status in database
    const { error: updateError } = await supabase
      .from("artist_tokens")
      .update({
        status: "distributed",
        distribution_tx_hash: result.hash,
        artist_amount: artistAmount.toString(),
        platform_amount: platformAmount.toString(),
        distributed_at: new Date().toISOString(),
      })
      .eq("id", tokenData.id);

    if (updateError) {
      console.error("Error updating database:", updateError);
    }

    // Record in distributions table for audit
    await supabase.from("token_distributions").insert({
      token_id: tokenData.id,
      artist_public_key: artistPublicKey,
      artist_amount: artistAmount.toString(),
      platform_amount: platformAmount.toString(),
      tx_hash: result.hash,
      distributed_at: new Date().toISOString(),
    });

    // Build Stellar Explorer URLs for easy access
    // Get network and build explorer URLs (redefine here since they're in try block scope)
    const responseNetwork = Deno.env.get("STELLAR_NETWORK") || "TESTNET";
    const responseExplorerBase =
      responseNetwork === "PUBLIC"
        ? "https://stellar.expert/explorer/public"
        : responseNetwork === "FUTURENET"
          ? "https://stellar.expert/explorer/futurenet"
          : "https://stellar.expert/explorer/testnet";

    // Get operations from transaction to determine if sell offer was included
    const transactionOperations = (transaction as any).operations || [];
    const includesSellOffer = transactionOperations.length > 1;
    const sellOfferInfo =
      includesSellOffer && sellOfferAmount > 0
        ? {
            amount: sellOfferAmount.toFixed(7),
            price: "1:1",
            selling: tokenCodeUpper,
            buying: "XLM",
            note: "Sell offer created for artist share at 1:1 XLM rate",
          }
        : null;

    return new Response(
      JSON.stringify({
        success: true,
        artistAmount: artistAmount.toString(), // Amount allocated to artist (used for sell offer)
        platformAmount: platformAmount.toString(), // Amount sent to platform treasury
        transactionHash: result.hash,
        transactionUrl: `${responseExplorerBase}/tx/${result.hash}`,
        assetUrl: `${responseExplorerBase}/asset/${tokenCodeUpper}-${artistPublicKey}`,
        distributionAccount: distributionKeypair.publicKey(),
        platformTreasury: PLATFORM_TREASURY,
        sellOffer: sellOfferInfo,
        operationsCount: transactionOperations.length,
        note: includesSellOffer
          ? `Artist share (${sellOfferAmount.toFixed(7)} ${tokenCodeUpper}) has been placed as a sell offer at 1:1 XLM rate. The offer is available on the Stellar DEX for buyers.`
          : "Artist share remains in distribution account. Issuer cannot receive own tokens in Stellar.",
        message: `Distribution completed successfully! Platform fee (${platformAmountStr} ${tokenCodeUpper}) sent to treasury.${includesSellOffer ? ` Sell offer created for ${sellOfferAmount.toFixed(7)} ${tokenCodeUpper} at 1:1 XLM rate. Buyers can now purchase tokens on the Stellar DEX.` : ` Artist share (${artistAmountStr} ${tokenCodeUpper}) remains in distribution account.`}`,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error:", error);

    let errorMessage = "Distribution failed";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "response" in error
    ) {
      const stellarError = error as any;
      if (stellarError.response?.data?.extras?.result_codes) {
        errorMessage = `Transaction failed: ${stellarError.response.data.extras.result_codes.transaction || "Unknown error"}`;
      }
    }

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
