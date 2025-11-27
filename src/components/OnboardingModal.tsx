import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProfile } from "../hooks/useProfile";
import { useWallet } from "../hooks/useWallet";
import { toast } from "sonner";

export const OnboardingModal: React.FC = () => {
  const { address } = useWallet();
  const { profile, isLoading, createProfile, isCreating } = useProfile();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"DJ" | "FAN">("FAN");
  const [isOpen, setIsOpen] = useState(false);

  // Show modal only if: Wallet connected AND Not Loading AND No Profile found
  useEffect(() => {
    if (address && !isLoading && !profile) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [address, isLoading, profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!address || !username.trim()) return;

    try {
      await createProfile({
        wallet_address: address,
        username: username.trim(),
        role: role,
        bio: "",
        avatar_url: "",
      });
      toast.success("Profile created!");
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to create profile");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      {/* Prevent closing by clicking outside */}
      <DialogContent
        className="sm:max-w-md"
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>Welcome to Dropsland</DialogTitle>
          <DialogDescription>
            Claim your identity to start collecting and creating.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username / Artist Name</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. DJ Solar"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>I am a...</Label>
            <div className="flex gap-2">
              <Button
                type="button"
                variant={role === "DJ" ? "default" : "outline"}
                className="flex-1"
                onClick={() => setRole("DJ")}
              >
                DJ / Artist
              </Button>
              <Button
                type="button"
                variant={role === "FAN" ? "default" : "outline"}
                className="flex-1"
                onClick={() => setRole("FAN")}
              >
                Fan
              </Button>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isCreating}>
            {isCreating ? "Creating..." : "Create Profile"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
