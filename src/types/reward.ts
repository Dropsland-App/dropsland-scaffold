export interface Reward {
  id: string;
  artistPublicKey: string;
  nftContractId: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  isActive: boolean;
  createdAt: string;
}

export interface CreateRewardPayload {
  artistPublicKey: string;
  nftContractId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  isActive?: boolean;
}
