import { useQuery } from "@tanstack/react-query";
import { fetchRewardsByArtist } from "../services/rewards";
import type { Reward } from "../types/reward";

interface UseArtistRewardsOptions {
  enabled?: boolean;
  activeOnly?: boolean;
}

export function useArtistRewards(
  artistPublicKey?: string,
  options: UseArtistRewardsOptions = {},
) {
  const { enabled = true, activeOnly = true } = options;

  return useQuery<Reward[]>({
    queryKey: ["artistRewards", artistPublicKey, activeOnly],
    enabled: Boolean(artistPublicKey) && enabled,
    queryFn: async () => {
      if (!artistPublicKey) {
        return [];
      }
      return fetchRewardsByArtist(artistPublicKey, { activeOnly });
    },
    staleTime: 60_000,
  });
}
