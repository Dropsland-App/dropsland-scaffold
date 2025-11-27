// Token Creation Types

export interface TokenCreationParams {
  artistPublicKey: string;
  artistName: string;
  tokenCode: string;
  tokenName: string;
  totalSupply: string;
  platformFeeBps?: number; // basis points (1000 = 10%)
  description?: string;
  image?: string;
}

export interface PrepareTokenResponse {
  success: boolean;
  distributionAccount: string;
  tokenId?: string;
  trustlineTxHash?: string; // Trustline transaction hash if created automatically
  warning?: string; // Warning message if trustline creation failed
}

export interface TokenStatusResponse {
  status: TokenStatus;
  tokenCode: string;
  tokenName: string;
  totalSupply: string;
  artistAmount?: string;
  platformAmount?: string;
  createdAt?: string;
  distributedAt?: string;
  trustlineTxHash?: string;
  emissionTxHash?: string;
  distributionTxHash?: string;
}

export type TokenStatus =
  | "created"
  | "trustline_created"
  | "tokens_emitted"
  | "distributed"
  | "failed";

export interface EmissionXDRResponse {
  success: boolean;
  xdr: string;
}

export interface SubmitSignedResponse {
  success: boolean;
  txHash: string;
}

export interface DistributionResponse {
  success: boolean;
  artistAmount: string;
  platformAmount: string;
  transactionHash: string;
  transactionUrl?: string;
  assetUrl?: string;
  distributionAccount?: string;
  platformTreasury?: string;
  sellOffer?: {
    amount: string;
    price: string;
    selling: string;
    buying: string;
    note: string;
  };
  operationsCount?: number;
  note?: string;
  message?: string;
}

export interface TokenCreationState {
  step: number;
  loading: boolean;
  loadingMessage: string | null;
  error: string | null;
  tokenData: TokenCreationParams | null;
  distributionAccount: string | null;
  emissionXDR: string | null;
  trustlineTxHash: string | null;
  emissionTxHash: string | null;
  distributionTxHash: string | null;
  artistAmount: string | null;
  platformAmount: string | null;
}

export interface TokenCreationFormData {
  artistName: string;
  tokenCode: string;
  tokenName: string;
  totalSupply: string;
  description: string;
  platformFee: number; // percentage (10 = 10%)
}
