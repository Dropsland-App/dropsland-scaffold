import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchProfile, createProfile } from "../services/profile";
import { useWallet } from "./useWallet";

export function useProfile() {
  const { address } = useWallet();
  const queryClient = useQueryClient();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", address],
    queryFn: () => (address ? fetchProfile(address) : null),
    enabled: !!address,
    staleTime: Infinity, // Profile doesn't change often
  });

  const mutation = useMutation({
    mutationFn: createProfile,
    onSuccess: (newProfile) => {
      // Update cache immediately
      queryClient.setQueryData(
        ["profile", newProfile.wallet_address],
        newProfile,
      );
    },
  });

  return {
    profile,
    isLoading,
    createProfile: mutation.mutateAsync,
    isCreating: mutation.isPending,
  };
}
