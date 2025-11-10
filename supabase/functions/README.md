# Supabase Edge Functions for Token Creation

This directory contains 6 Supabase Edge Functions for the token creation flow.

## Functions

1. **prepare-token** - Creates distribution account, funds it, and automatically creates trustline
2. **status** - Checks token creation status (used for polling)
3. **emission-xdr** - Generates unsigned XDR for token emission
4. **submit-signed** - Submits signed emission transaction to Stellar
5. **distribute** - Executes token distribution to artist and platform
6. **list-distributed-tokens** - Lists all artist tokens with status 'distributed' (for explorer)

## Setup

### 1. Environment Variables

Set these environment variables in your Supabase project:

```bash
# Supabase (automatically available)
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stellar Network Configuration
STELLAR_NETWORK=PUBLIC  # or TESTNET, FUTURENET
HORIZON_URL=https://horizon.stellar.org  # Optional, auto-configured based on STELLAR_NETWORK

# Platform Configuration
PLATFORM_TREASURY_PUBLIC_KEY=GXXXXX...  # Platform treasury public key
PLATFORM_FUNDING_SECRET_KEY=SXXXXX...   # Secret key for funding distribution accounts (optional)

# Encryption
ENCRYPTION_KEY=your-256-bit-encryption-key  # Must be exactly 32 bytes or will be hashed to 32 bytes
```

### 2. Database Setup

Make sure you have run the database migrations from `supabase/functions/migrations/db-scheme.sql` to create the required tables:

- `artist_tokens`
- `token_distributions`

### 3. Deploy Functions

```bash
# Deploy all functions
supabase functions deploy prepare-token
supabase functions deploy status
supabase functions deploy emission-xdr
supabase functions deploy submit-signed
supabase functions deploy distribute
supabase functions deploy list-distributed-tokens

# Or deploy all at once (if supported)
supabase functions deploy
```

### 4. Set Environment Variables in Supabase

In your Supabase dashboard:

1. Go to Project Settings > Edge Functions
2. Add the environment variables listed above
3. Make sure `ENCRYPTION_KEY` is a secure random 32-byte string (you can generate one with: `openssl rand -base64 32`)

## Function Details

### prepare-token

**Endpoint:** `POST /functions/v1/prepare-token`

**Request Body:**

```json
{
  "artistPublicKey": "GXXXXX...",
  "tokenCode": "MYTOKEN",
  "tokenName": "My Token",
  "totalSupply": "1000000",
  "platformFeeBps": 1000,
  "description": "Optional description"
}
```

**Response:**

```json
{
  "success": true,
  "distributionAccount": "GXXXXX...",
  "tokenId": "uuid",
  "trustlineTxHash": "tx-hash"
}
```

**What it does:**

1. Validates input and artist account
2. Creates unique distribution keypair
3. Encrypts and stores distribution secret
4. Funds distribution account (if PLATFORM_FUNDING_SECRET_KEY is set)
5. Automatically creates trustline
6. Updates database status

### status

**Endpoint:** `GET /functions/v1/status?code=MYTOKEN&issuer=GXXXXX...`

**Response:**

```json
{
  "status": "trustline_created",
  "tokenCode": "MYTOKEN",
  "tokenName": "My Token",
  "totalSupply": "1000000",
  "artistAmount": null,
  "platformAmount": null,
  "createdAt": "2024-01-01T00:00:00Z",
  "distributedAt": null,
  "trustlineTxHash": "tx-hash",
  "emissionTxHash": null,
  "distributionTxHash": null
}
```

### emission-xdr

**Endpoint:** `POST /functions/v1/emission-xdr`

**Request Body:**

```json
{
  "artistPublicKey": "GXXXXX...",
  "tokenCode": "MYTOKEN",
  "totalSupply": "1000000"
}
```

**Response:**

```json
{
  "success": true,
  "xdr": "AAAA..."
}
```

### submit-signed

**Endpoint:** `POST /functions/v1/submit-signed`

**Request Body:**

```json
{
  "signedXDR": "AAAA...",
  "tokenCode": "MYTOKEN",
  "artistPublicKey": "GXXXXX..."
}
```

**Response:**

```json
{
  "success": true,
  "txHash": "tx-hash"
}
```

### distribute

**Endpoint:** `POST /functions/v1/distribute`

**Request Body:**

```json
{
  "artistPublicKey": "GXXXXX...",
  "tokenCode": "MYTOKEN"
}
```

**Response:**

```json
{
  "success": true,
  "artistAmount": "900000.0000000",
  "platformAmount": "100000.0000000",
  "transactionHash": "tx-hash"
}
```

### list-distributed-tokens

**Endpoint:** `GET /functions/v1/list-distributed-tokens?limit=100&offset=0`

**Query Parameters:**

- `limit` (optional): Number of tokens to return (default: 100)
- `offset` (optional): Number of tokens to skip (default: 0)

**Response:**

```json
{
  "tokens": [
    {
      "id": "uuid",
      "artist_public_key": "GXXXXX...",
      "artist_name": "Artist Name",
      "token_code": "MYTOKEN",
      "token_name": "My Token",
      "total_supply": "1000000",
      "description": "Token description",
      "image_url": "https://...",
      "status": "distributed",
      "distributed_at": "2024-01-01T00:00:00Z",
      "metadata": {
        "category": "music",
        "tags": ["electronic", "techno"],
        "total_holders": 100,
        "total_transactions": 50
      }
    }
  ],
  "count": 1,
  "limit": 100,
  "offset": 0
}
```

**What it does:**

1. Queries all artist_tokens with status = 'distributed'
2. Optionally fetches metadata for each token
3. Returns paginated results sorted by distributed_at (newest first)
4. Uses service role key to bypass RLS (allows public access to distributed tokens)

## Network Configuration

The functions automatically detect the network from the `STELLAR_NETWORK` environment variable:

- `PUBLIC` - Mainnet (default)
- `TESTNET` - Testnet
- `FUTURENET` - Futurenet

## Security Notes

1. **ENCRYPTION_KEY**: Must be kept secret and never exposed. Used to encrypt distribution account secrets.
2. **PLATFORM_FUNDING_SECRET_KEY**: Only needed if you want automatic account funding. Keep this secure.
3. **PLATFORM_TREASURY_PUBLIC_KEY**: Public key is safe, but make sure the corresponding secret key is secure.
4. **Service Role Key**: Has full database access, keep it secure.

## Testing

Test each function individually using curl or your frontend:

```bash
# Test prepare-token
curl -X POST https://your-project.supabase.co/functions/v1/prepare-token \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"artistPublicKey":"GXXXXX...","tokenCode":"TEST","tokenName":"Test Token","totalSupply":"1000000"}'

# Test status
curl "https://your-project.supabase.co/functions/v1/status?code=TEST&issuer=GXXXXX..." \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

## Troubleshooting

1. **Account funding fails**: Make sure `PLATFORM_FUNDING_SECRET_KEY` is set and the funding account has enough XLM
2. **Trustline creation fails**: Ensure the distribution account is funded before creating trustline
3. **Encryption errors**: Verify `ENCRYPTION_KEY` is set and is a valid string
4. **Database errors**: Ensure all migrations have been run and tables exist

## Flow Diagram

```
1. prepare-token
   ├─ Create distribution account
   ├─ Fund account
   └─ Create trustline automatically

2. status (polling)
   └─ Check if trustline_created

3. emission-xdr
   └─ Generate XDR for artist to sign

4. submit-signed
   └─ Submit signed transaction

5. distribute
   ├─ Calculate amounts
   ├─ Send to artist
   └─ Send to platform treasury
```
