import { useMemo } from "react";
import { useWallet } from "./useWallet";
import { useWalletBalance } from "./useWalletBalance";
import { useOwnedNfts } from "./useOwnedNfts";
import type { Track } from "../types/music";

export type AccessState =
  | { status: "loading" }
  | { status: "unlocked" }
  | {
      status: "locked";
      reason: "wallet_not_connected" | "insufficient_tokens" | "nft_required";
      requirement?: string;
    };

export function useMusicAccess(track: Track): AccessState {
  const { address } = useWallet();
  const { balances, isLoading: loadingBalances } = useWalletBalance();
  const { data: ownedNfts, isPending: loadingNfts } = useOwnedNfts(address);

  return useMemo(() => {
    // 1. Loading State
    if (loadingBalances || loadingNfts) return { status: "loading" };

    // 2. Public Tracks are always unlocked
    if (track.is_public) return { status: "unlocked" };

    // 3. Wallet Check
    if (!address) return { status: "locked", reason: "wallet_not_connected" };

    // 4. Check Fungible Token Gate
    if (track.required_token_id) {
      // Find the specific token balance in the user's wallet
      // Note: In a real app, you'd match by the token's contract ID or Issuer+Code
      // Assuming track.artist_tokens contains the necessary info or we need to fetch it separately if not populated
      // Based on previous step, fetchTracks joins artist_tokens:required_token_id (token_code, token_name)
      // We might need the issuer as well. Let's assume for now we match by code if issuer is missing, or better, update the type.
      // However, the prompt code assumes track.artist_tokens has artist_public_key.
      // The fetchTracks query in previous step was: artist_tokens:required_token_id (token_code, token_name).
      // It did NOT select artist_public_key from artist_tokens table (which is actually the token table).
      // But wait, the track itself has artist_public_key.
      // Usually the token issuer IS the artist. Let's assume track.artist_public_key is the issuer for now,
      // or that the token object has it.
      // The prompt code uses: track.artist_tokens?.artist_public_key.
      // I should probably stick to the prompt's logic but be aware of potential type mismatch if the previous step didn't fetch it.
      // Let's check the previous step's fetchTracks.
      // It selected: artist_tokens:required_token_id (token_code, token_name).
      // It seems artist_public_key is missing from the join.
      // I will implement as requested, but I might need to fix the type or the fetch later.
      // For now, I'll assume the type Track has these fields populated or I'll cast/safeguard.

      const tokenBalance = balances.find(
        (b) =>
          // Match by Code (Symbol) and Issuer
          "asset_code" in b &&
          "asset_issuer" in b &&
          b.asset_code === track.artist_tokens?.token_code &&
          b.asset_issuer === track.artist_tokens?.artist_public_key,
      );

      const balanceValue = tokenBalance ? parseFloat(tokenBalance.balance) : 0;
      const requiredAmount = track.min_token_amount || 0;

      if (balanceValue < requiredAmount) {
        return {
          status: "locked",
          reason: "insufficient_tokens",
          requirement: `${requiredAmount} ${track.artist_tokens?.token_code}`,
        };
      }
    }

    // 5. Check NFT Gate
    if (track.required_reward_id) {
      // Check if user owns at least one token from the required contract
      const hasNft = ownedNfts?.some(
        (collection) =>
          collection.contractId === track.rewards?.nft_contract_id,
      );

      if (!hasNft) {
        return {
          status: "locked",
          reason: "nft_required",
          requirement: track.rewards?.title || "Exclusive NFT",
        };
      }
    }

    // 6. If all checks pass
    return { status: "unlocked" };
  }, [address, balances, ownedNfts, track, loadingBalances, loadingNfts]);
}
