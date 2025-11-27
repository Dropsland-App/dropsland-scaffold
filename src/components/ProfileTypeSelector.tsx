import React from "react";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";

const ProfileTypeSelector: React.FC = () => {
  const { profileType, isLoading } = useProfileType();
  const { address } = useWallet();

  // If not connected, we don't show a role badge
  if (!address) return null;

  if (isLoading) {
    return <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />;
  }

  return (
    <div className="flex items-center gap-2">
      <Badge
        variant="outline"
        className={`${
          profileType === "DJ"
            ? "border-accent text-accent bg-accent/10"
            : "border-muted-foreground text-muted-foreground"
        }`}
      >
        {profileType === "DJ" ? "DJ Account" : "Fan Account"}
      </Badge>
    </div>
  );
};

export default ProfileTypeSelector;
