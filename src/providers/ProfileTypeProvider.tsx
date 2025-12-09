import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import storage from "../util/storage";
import { useProfile } from "../hooks/useProfile";
import { useWallet } from "../hooks/useWallet";

export type ProfileType = "DJ" | "Fan";

interface ProfileTypeContextType {
  profileType: ProfileType;
  setProfileType: (type: ProfileType) => void;
  isLoading: boolean;
}

const ProfileTypeContext = createContext<ProfileTypeContextType | undefined>(
  undefined,
);

export const ProfileTypeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { address } = useWallet();
  const { profile, isLoading: isProfileLoading } = useProfile();

  // Default to "Fan" (View Only mode) if not connected or no role found
  const [profileType, setProfileTypeState] = useState<ProfileType>("Fan");

  useEffect(() => {
    // 1. If wallet is disconnected, default to Fan
    if (!address) {
      setProfileTypeState("Fan");
      return;
    }

    // 2. If profile exists in DB, force that role
    if (profile?.role) {
      // Normalize DB role ("FAN"/"DJ") to App type ("Fan"/"DJ")
      const role = profile.role === "DJ" ? "DJ" : "Fan";
      setProfileTypeState(role);
      storage.setItem("profileType", role);
    }
    // 3. If connected but no profile yet (onboarding), we rely on localStorage
    //    or default until they complete the OnboardingModal.
    else {
      const stored = storage.getItem("profileType");
      if (typeof stored === "string" && (stored === "DJ" || stored === "Fan")) {
        setProfileTypeState(stored as ProfileType);
      }
    }
  }, [profile, address]);

  const setProfileType = (type: ProfileType) => {
    // We only allow manual setting if we are NOT synced with a profile
    // (Useful for debugging or pre-onboarding state)
    if (!profile) {
      setProfileTypeState(type);
      storage.setItem("profileType", type);
    }
  };

  const contextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
      isLoading: isProfileLoading,
    }),
    [profileType, isProfileLoading, profile],
  );

  return (
    <ProfileTypeContext value={contextValue}>{children}</ProfileTypeContext>
  );
};

export { ProfileTypeContext };
export type { ProfileTypeContextType };
