import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import storage from "../util/storage";

export type ProfileType = "DJ" | "Fan";

interface ProfileTypeContextType {
  profileType: ProfileType;
  setProfileType: (type: ProfileType) => void;
}

const ProfileTypeContext = createContext<ProfileTypeContextType | undefined>(
  undefined,
);

export const ProfileTypeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [profileType, setProfileTypeState] = useState<ProfileType>(() => {
    // Load from localStorage or default to "Fan"
    try {
      const stored = storage.getItem("profileType");
      if (typeof stored === "string" && (stored === "DJ" || stored === "Fan")) {
        return stored as ProfileType;
      }
      return "Fan";
    } catch {
      return "Fan";
    }
  });

  useEffect(() => {
    // Save to localStorage whenever profileType changes
    storage.setItem("profileType", profileType);
  }, [profileType]);

  const setProfileType = (type: ProfileType) => {
    setProfileTypeState(type);
  };

  const contextValue = useMemo(
    () => ({
      profileType,
      setProfileType,
    }),
    [profileType],
  );

  return (
    <ProfileTypeContext value={contextValue}>{children}</ProfileTypeContext>
  );
};

export { ProfileTypeContext };
export type { ProfileTypeContextType };
