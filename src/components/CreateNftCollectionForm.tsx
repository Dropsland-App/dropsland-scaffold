import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useCreateNftCollection } from "@/hooks/useCreateNftCollection";

interface CreateNftCollectionFormProps {
  visible: boolean;
  onClose: () => void;
}

export const CreateNftCollectionForm: React.FC<
  CreateNftCollectionFormProps
> = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [baseUri, setBaseUri] = useState("");
  const { createCollection, loading, error } = useCreateNftCollection();

  useEffect(() => {
    if (!visible) {
      setName("");
      setSymbol("");
      setBaseUri("");
    }
  }, [visible]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    const result = await createCollection({ name, symbol, baseUri });
    if (result) {
      onClose();
    }
  };

  return (
    <Dialog open={visible} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md" showCloseButton={!loading}>
        <DialogHeader>
          <DialogTitle>Create NFT Collection</DialogTitle>
          <DialogDescription>
            Deploy a new NFT smart contract to reward your fans.
          </DialogDescription>
        </DialogHeader>
        <form
          id="nft-collection-form"
          onSubmit={(event) => void handleSubmit(event)}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="collection-name">Collection Name</Label>
            <Input
              id="collection-name"
              placeholder='e.g., "Genesis Merch Pass"'
              value={name}
              onChange={(event) => setName(event.target.value)}
              disabled={loading}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="collection-symbol">Symbol</Label>
            <Input
              id="collection-symbol"
              placeholder='e.g., "MERCH"'
              value={symbol}
              onChange={(event) => setSymbol(event.target.value.toUpperCase())}
              disabled={loading}
              maxLength={12}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="collection-base-uri">Base URI</Label>
            <Input
              id="collection-base-uri"
              placeholder='e.g., "ipfs://bafybeic.../metadata/"'
              value={baseUri}
              onChange={(event) => setBaseUri(event.target.value)}
              disabled={loading}
              required
            />
            <p className="text-xs text-muted-foreground">
              This is the metadata URL prefix for your NFTs (e.g.,{" "}
              <code className="font-mono">ipfs://.../</code>).
            </p>
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
        <DialogFooter>
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button type="submit" form="nft-collection-form" disabled={loading}>
            {loading ? (
              <>
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                Creating...
              </>
            ) : (
              "Create Collection"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
