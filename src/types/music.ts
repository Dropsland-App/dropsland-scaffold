export interface Track {
  id: string;
  artist_public_key: string;
  title: string;
  description?: string;
  cover_image_url?: string;

  // Storage Paths
  audio_file_path: string;
  preview_file_path?: string;

  // Access Control
  is_public: boolean;
  required_token_id?: string; // ID of the fungible token required
  min_token_amount?: number; // Amount needed (e.g. 10)
  required_reward_id?: string; // ID of the NFT required

  created_at: string;

  // Joined fields from Supabase
  artist_tokens?: {
    token_code: string;
    token_name: string;
    artist_public_key: string; // Assuming this is available or we use track.artist_public_key
  };
  rewards?: {
    title: string;
    nft_contract_id: string;
  };
}

export interface StreamResponse {
  url: string; // The signed, temporary URL to play the full song
}
