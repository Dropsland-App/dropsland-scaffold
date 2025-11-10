// Token Purchase Service - Buy tokens from Stellar DEX offers
import {
  Asset,
  Horizon,
  TransactionBuilder,
  Operation,
  BASE_FEE,
  Transaction,
} from "@stellar/stellar-sdk";
import { network, networkPassphrase } from "../contracts/util";

// Types for Horizon API responses
interface HorizonAsset {
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
}

interface HorizonOfferRecord {
  id: string | number;
  selling: HorizonAsset;
  buying: HorizonAsset;
  amount: string;
  price: string;
  price_r: {
    n: number;
    d: number;
  };
}

interface HorizonBalanceRecord {
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
  balance: string;
  limit?: string;
}

interface StellarErrorResponse {
  response?: {
    data?: {
      extras?: {
        result_codes?: {
          transaction?: string;
          operations?: string[];
        };
      };
    };
  };
}

// Get Horizon server
const getServer = (): Horizon.Server => {
  return new Horizon.Server(network.horizonUrl, {
    allowHttp: network.id === "custom" || network.id === "testnet",
  });
};

export interface TokenOffer {
  id: string;
  selling: {
    asset_type: string;
    asset_code?: string;
    asset_issuer?: string;
  };
  buying: {
    asset_type: string;
    asset_code?: string;
    asset_issuer?: string;
  };
  amount: string;
  price: string;
  price_r: {
    n: number;
    d: number;
  };
}

export interface BuyTokenParams {
  tokenCode: string;
  tokenIssuer: string;
  amountXlm: string; // Amount of XLM to spend
  buyerPublicKey: string;
}

export interface BuyTokenResponse {
  success: boolean;
  txHash: string;
  transactionUrl?: string;
  tokensReceived?: string;
  xlmSpent?: string;
}

/**
 * Get available offers for a token
 */
export async function getTokenOffers(
  tokenCode: string,
  tokenIssuer: string,
): Promise<TokenOffer[]> {
  try {
    const server = getServer();
    const asset = new Asset(tokenCode, tokenIssuer);

    // Query offers where the token is being sold (selling asset)
    // The Horizon API allows filtering by selling asset
    const offers = await server.offers().selling(asset).call();

    // Filter for offers buying XLM (native asset)
    const sellOffers = offers.records.filter((offer: HorizonOfferRecord) => {
      const buying = offer.buying;
      return buying.asset_type === "native";
    });

    return sellOffers.map((offer: HorizonOfferRecord) => ({
      id: offer.id.toString(),
      selling: {
        asset_type: offer.selling.asset_type,
        asset_code: offer.selling.asset_code,
        asset_issuer: offer.selling.asset_issuer,
      },
      buying: {
        asset_type: offer.buying.asset_type,
        asset_code: offer.buying.asset_code,
        asset_issuer: offer.buying.asset_issuer,
      },
      amount: offer.amount,
      price: offer.price,
      price_r: offer.price_r,
    }));
  } catch (error) {
    console.error("Error fetching token offers:", error);
    throw new Error(
      `Failed to fetch offers: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Check if user has trustline for the token
 */
export async function hasTrustline(
  publicKey: string,
  tokenCode: string,
  tokenIssuer: string,
): Promise<boolean> {
  try {
    const server = getServer();
    const account = await server.loadAccount(publicKey);

    const balance = account.balances.find((b: HorizonBalanceRecord) => {
      if (b.asset_type === "native") return false;
      return b.asset_code === tokenCode && b.asset_issuer === tokenIssuer;
    });

    return !!balance;
  } catch (error) {
    console.error("Error checking trustline:", error);
    return false;
  }
}

/**
 * Create trustline XDR for user to sign
 */
export async function createTrustlineXDR(
  publicKey: string,
  tokenCode: string,
  tokenIssuer: string,
  limit: string = "922337203685.4775807", // Max limit
): Promise<string> {
  try {
    const server = getServer();
    const account = await server.loadAccount(publicKey);
    const asset = new Asset(tokenCode, tokenIssuer);

    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: String(networkPassphrase),
    })
      .addOperation(
        Operation.changeTrust({
          asset: asset,
          limit: limit,
        }),
      )
      .setTimeout(180)
      .build();

    return transaction.toXDR();
  } catch (error) {
    console.error("Error creating trustline XDR:", error);
    throw new Error(
      `Failed to create trustline: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Find best matching sell offer for immediate execution
 * Sell offers are where someone is selling the token (buying XLM)
 */
export async function findBestSellOffer(
  tokenCode: string,
  tokenIssuer: string,
  maxPrice: string = "1",
): Promise<TokenOffer | null> {
  try {
    const server = getServer();
    const asset = new Asset(tokenCode, tokenIssuer);
    const nativeAsset = Asset.native();

    // Query offers where the token is being sold (selling asset) for XLM (buying asset)
    const offers = await server
      .offers()
      .selling(asset)
      .buying(nativeAsset)
      .call();

    if (offers.records.length === 0) {
      console.log("No sell offers found for token");
      return null;
    }

    console.log(
      `Found ${offers.records.length} sell offers (selling token for XLM)`,
    );

    // Find offers at or better than our max price (1:1)
    // Price in Stellar is selling/buying, so for sell offers: price = amount of buying asset per selling asset
    // For sell offers: selling token, buying XLM, price = XLM per token
    // We want price <= 1 (1 XLM per token or better)
    const matchingOffers = offers.records.filter(
      (offer: HorizonOfferRecord) => {
        const offerPrice = parseFloat(offer.price);
        const isMatch = offerPrice <= parseFloat(maxPrice);
        console.log(
          `Offer ${offer.id}: price=${offerPrice}, amount=${offer.amount}, matches=${isMatch}`,
        );
        return isMatch;
      },
    );

    if (matchingOffers.length === 0) {
      console.log("No matching sell offers at price <=", maxPrice);
      return null;
    }

    // Sort by price (best first - lower price is better) and return the best offer
    matchingOffers.sort(
      (a: HorizonOfferRecord, b: HorizonOfferRecord) =>
        parseFloat(a.price) - parseFloat(b.price),
    );
    const bestOffer = matchingOffers[0];

    console.log(
      `Best offer: ID=${bestOffer.id}, price=${bestOffer.price}, amount=${bestOffer.amount}`,
    );

    return {
      id: bestOffer.id.toString(),
      selling: {
        asset_type: bestOffer.selling.asset_type,
        asset_code: bestOffer.selling.asset_code,
        asset_issuer: bestOffer.selling.asset_issuer,
      },
      buying: {
        asset_type: bestOffer.buying.asset_type,
        asset_code: bestOffer.buying.asset_code,
        asset_issuer: bestOffer.buying.asset_issuer,
      },
      amount: bestOffer.amount,
      price: bestOffer.price,
      price_r: bestOffer.price_r,
    };
  } catch (error) {
    console.error("Error finding sell offer:", error);
    return null;
  }
}

/**
 * Create path payment XDR for immediate execution
 * This will execute immediately if there's a matching offer
 */
export async function createPathPaymentXDR(
  params: BuyTokenParams,
): Promise<string> {
  try {
    const server = getServer();
    const account = await server.loadAccount(params.buyerPublicKey);
    const tokenAsset = new Asset(params.tokenCode, params.tokenIssuer);
    const xlmAsset = Asset.native();

    const xlmAmount = parseFloat(params.amountXlm);
    // At 1:1 rate, we get the same amount in tokens
    const minTokenAmount = (xlmAmount * 0.99).toFixed(7); // 1% slippage tolerance

    // Use pathPaymentStrictSend to immediately execute the trade
    // This will find the best path through the DEX and execute immediately
    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: String(networkPassphrase),
    })
      .addOperation(
        Operation.pathPaymentStrictSend({
          sendAsset: xlmAsset, // We're sending XLM
          sendAmount: xlmAmount.toFixed(7), // Amount of XLM to send
          destination: params.buyerPublicKey, // We receive tokens to our own account
          destAsset: tokenAsset, // We want to receive tokens
          destMin: minTokenAmount, // Minimum tokens we'll accept (with slippage)
        }),
      )
      .setTimeout(180)
      .build();

    return transaction.toXDR();
  } catch (error) {
    console.error("Error creating path payment XDR:", error);
    throw new Error(
      `Failed to create path payment: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Create buy offer XDR
 * This creates a buy offer that will match against existing sell offers on the DEX
 * If immediate execution is preferred, use createPathPaymentXDR instead
 */
export async function createBuyOfferXDR(
  params: BuyTokenParams,
): Promise<string> {
  try {
    const server = getServer();
    const account = await server.loadAccount(params.buyerPublicKey);
    const tokenAsset = new Asset(params.tokenCode, params.tokenIssuer);
    const xlmAsset = Asset.native();

    // Calculate how many tokens we can buy with the XLM amount
    // Price is 1:1 (1 token = 1 XLM), so tokens = XLM amount
    const tokenAmount = parseFloat(params.amountXlm);

    // Create a buy offer
    // manageBuyOffer: buying = asset we want to receive, selling = asset we're spending
    // Price: 1 token = 1 XLM (so price is "1" meaning 1 XLM per token)
    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: String(networkPassphrase),
    })
      .addOperation(
        Operation.manageBuyOffer({
          buying: tokenAsset, // We're buying tokens (what we want to receive)
          selling: xlmAsset, // We're selling XLM (what we're spending)
          buyAmount: tokenAmount.toFixed(7), // Amount of tokens we want to buy
          price: "1", // Price: 1 XLM = 1 token (price of buying asset in terms of selling asset)
          offerId: 0, // 0 = create new offer
        }),
      )
      .setTimeout(180)
      .build();

    return transaction.toXDR();
  } catch (error) {
    console.error("Error creating buy offer XDR:", error);
    throw new Error(
      `Failed to create buy offer: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Submit signed transaction to Stellar network
 */
export async function submitSignedTransaction(
  signedXDR: string,
): Promise<{ hash: string }> {
  try {
    const server = getServer();
    // Decode XDR using Transaction class
    const transaction = new Transaction(signedXDR, String(networkPassphrase));
    console.log("Submitting transaction to Stellar network...");
    console.log("Transaction source account:", transaction.source);
    console.log("Transaction operations:", transaction.operations.length);
    const result = await server.submitTransaction(transaction);
    console.log("✅ Transaction submitted successfully");
    console.log("Transaction hash:", result.hash);
    return { hash: result.hash };
  } catch (error: unknown) {
    console.error("❌ Error submitting transaction:", error);
    console.error("Error details:", error);
    if (error && typeof error === "object" && "response" in error) {
      const stellarError = error as StellarErrorResponse;
      if (stellarError.response?.data) {
        console.error("Stellar error response:", stellarError.response.data);
        if (stellarError.response.data.extras?.result_codes) {
          console.error(
            "Transaction result codes:",
            stellarError.response.data.extras.result_codes,
          );
        }
      }
    }
    throw new Error(
      `Failed to submit transaction: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * Get Stellar Explorer URL for transaction
 */
export function getTransactionUrl(txHash: string): string {
  const networkName =
    network.id === "testnet"
      ? "testnet"
      : network.id === "futurenet"
        ? "futurenet"
        : "public";
  return `https://stellar.expert/explorer/${networkName}/tx/${txHash}`;
}

/**
 * Get Stellar Explorer URL for asset
 */
export function getAssetUrl(tokenCode: string, tokenIssuer: string): string {
  const networkName =
    network.id === "testnet"
      ? "testnet"
      : network.id === "futurenet"
        ? "futurenet"
        : "public";
  return `https://stellar.expert/explorer/${networkName}/asset/${tokenCode}-${tokenIssuer}`;
}
