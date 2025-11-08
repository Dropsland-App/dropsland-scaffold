import { use } from "react";
import {
  ProfileTypeContext,
  ProfileTypeContextType,
} from "../providers/ProfileTypeProvider";

export const useProfileType = (): ProfileTypeContextType => {
  const context = use(ProfileTypeContext);
  if (context === undefined) {
    throw new Error("useProfileType must be used within a ProfileTypeProvider");
  }
  return context;
};
