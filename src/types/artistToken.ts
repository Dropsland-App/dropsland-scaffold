// Artist Token Types

export interface TokenMetadata {
  id: string;
  token_id: string;
  website_url?: string;
  twitter_handle?: string;
  instagram_handle?: string;
  discord_url?: string;
  telegram_url?: string;
  category?: string;
  tags?: string[];
  total_holders?: number;
  total_transactions?: number;
  market_cap_xlm?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ArtistToken {
  id: string;
  artist_public_key: string;
  artist_email?: string;
  artist_name?: string;
  token_code: string;
  token_name: string;
  total_supply: string;
  description?: string;
  image_url?: string;
  platform_fee_bps: number;
  artist_amount?: string;
  platform_amount?: string;
  status: string;
  trustline_tx_hash?: string;
  emission_tx_hash?: string;
  distribution_tx_hash?: string;
  created_at: string;
  distributed_at?: string;
  updated_at?: string;
  metadata?: TokenMetadata | null;
}

export interface ListDistributedTokensResponse {
  tokens: ArtistToken[];
  count: number;
  limit: number;
  offset: number;
}

// Frontend-friendly interface for displaying tokens
export interface TokenDisplay {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  genres: string[];
  isFeatured: boolean;
  tokenSymbol: string;
  tokenIssuer: string;
  description?: string;
  imageUrl?: string;
  totalSupply?: string;
  distributedAt?: string;
}
