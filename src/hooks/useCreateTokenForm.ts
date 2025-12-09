import { useState, useEffect } from "react";
import { useTokenCreation } from "./useTokenCreation";
import { useProfile } from "./useProfile";

export const FEE_TIERS = {
  BASIC: {
    name: "BASIC",
    platformFee: 5,
    description: "Standard tier",
    color: "border-slate-700/50 bg-slate-900/30",
    selectedColor: "border-blue-500 bg-blue-950/50 ring-2 ring-blue-500/50",
    accentColor: "text-blue-400",
  },
  PREMIUM: {
    name: "PREMIUM",
    platformFee: 10,
    description: "Popular choice",
    color: "border-slate-700/50 bg-slate-900/30",
    selectedColor:
      "border-purple-500 bg-purple-950/50 ring-2 ring-purple-500/50",
    accentColor: "text-purple-400",
  },
  VIP: {
    name: "VIP",
    platformFee: 15,
    description: "Premium support",
    color: "border-slate-700/50 bg-slate-900/30",
    selectedColor: "border-amber-500 bg-amber-950/50 ring-2 ring-amber-500/50",
    accentColor: "text-amber-400",
  },
} as const;

export type FeeTierType = keyof typeof FEE_TIERS;

export function useCreateTokenForm(visible: boolean) {
  const { stage, error, result, createToken, reset } = useTokenCreation();
  const { profile } = useProfile();
  const [selectedTier, setSelectedTier] = useState<FeeTierType>("PREMIUM");

  const [formData, setFormData] = useState({
    artistName: "",
    tokenCode: "",
    tokenName: "",
    description: "",
    totalSupply: "1000000000",
    platformFee: 10,
  });

  // Sync artist name with profile
  useEffect(() => {
    if (profile?.username && formData.artistName !== profile.username) {
      setFormData((prev) => ({ ...prev, artistName: profile.username }));
    }
  }, [profile, formData.artistName]);

  // Reset form when modal closes/opens
  useEffect(() => {
    if (!visible) {
      reset();
      setFormData((prev) => ({
        ...prev,
        artistName: profile?.username || "",
        tokenCode: "",
        tokenName: "",
        description: "",
        totalSupply: "1000000000",
        platformFee: 10,
      }));
      setSelectedTier("PREMIUM");
    }
  }, [visible, profile, reset]);

  // Update fee when tier changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      platformFee: FEE_TIERS[selectedTier].platformFee,
    }));
  }, [selectedTier]);

  const handleSubmit = () => createToken(formData);

  const updateField = (
    field: keyof typeof formData,
    value: string | number,
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Logic to clean token code
  const handleTokenCodeChange = (raw: string) => {
    const clean = raw
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "")
      .slice(0, 12);
    updateField("tokenCode", clean);
  };

  return {
    formData,
    updateField,
    handleTokenCodeChange,
    selectedTier,
    setSelectedTier,
    handleSubmit,
    stage,
    error,
    result,
    reset,
  };
}
