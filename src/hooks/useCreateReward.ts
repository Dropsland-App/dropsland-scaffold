import { useCallback, useState } from "react";
import { toast } from "sonner";
import { createReward } from "../services/rewards";
import type { Reward } from "../types/reward";
import { useWallet } from "./useWallet";

interface RewardFormValues {
  nftContractId: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export function useCreateReward() {
  const { address } = useWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitReward = useCallback(
    async (values: RewardFormValues): Promise<Reward | null> => {
      if (!address) {
        setError("Wallet not connected");
        return null;
      }

      setLoading(true);
      setError(null);
      const toastId = toast.loading("Saving reward definition...");

      try {
        const reward = await createReward({
          artistPublicKey: address,
          nftContractId: values.nftContractId,
          title: values.title,
          description: values.description,
          imageUrl: values.imageUrl,
        });

        toast.success("Reward saved", {
          id: toastId,
          description: "Fans can now claim this drop",
        });

        return reward;
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unable to save reward";
        setError(message);
        toast.error("Failed to save reward", {
          id: toastId,
          description: message,
        });
        return null;
      } finally {
        setLoading(false);
      }
    },
    [address],
  );

  return { submitReward, loading, error };
}
