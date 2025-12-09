-- =============================================================================
-- 1. CONFIGURATION
-- =============================================================================
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';
SET default_table_access_method = "heap";

-- =============================================================================
-- 2. SCHEMA SETUP
-- =============================================================================
CREATE SCHEMA IF NOT EXISTS "public";
ALTER SCHEMA "public" OWNER TO "pg_database_owner";
COMMENT ON SCHEMA "public" IS 'standard public schema';

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" SCHEMA "extensions";

-- =============================================================================
-- 3. GENERIC FUNCTIONS
-- =============================================================================

CREATE OR REPLACE FUNCTION "public"."update_updated_at_column"()
RETURNS "trigger"
LANGUAGE "plpgsql"
AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;
ALTER FUNCTION "public"."update_updated_at_column"() OWNER TO "postgres";

-- =============================================================================
-- 4. TABLES
-- =============================================================================

-- 4.1 Core Identity
CREATE TABLE IF NOT EXISTS "public"."profiles" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL,
    "wallet_address" character varying(56) NOT NULL,
    "username" text NOT NULL,
    "bio" text,
    "avatar_url" text,
    "role" character varying(20) DEFAULT 'FAN'::character varying,
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "profiles_pkey" PRIMARY KEY ("wallet_address"),
    CONSTRAINT "profiles_id_key" UNIQUE ("id")
);
ALTER TABLE "public"."profiles" OWNER TO "postgres";

-- 4.2 Artist Tokens
CREATE TABLE IF NOT EXISTS "public"."artist_tokens" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "artist_public_key" character varying(56) NOT NULL,
    "artist_email" character varying(255),
    "artist_name" character varying(255),
    "token_code" character varying(12) NOT NULL,
    "token_name" character varying(255) NOT NULL,
    "total_supply" numeric(20,7) NOT NULL,
    "description" "text",
    "image_url" "text",
    "platform_fee_bps" integer DEFAULT 1000 NOT NULL,
    "distribution_public_key" character varying(56) NOT NULL,
    "distribution_secret_encrypted" "text" NOT NULL,
    "artist_amount" numeric(20,7),
    "platform_amount" numeric(20,7),
    "status" character varying(50) DEFAULT 'created'::character varying NOT NULL,
    "trustline_tx_hash" character varying(64),
    "emission_tx_hash" character varying(64),
    "distribution_tx_hash" character varying(64),
    "created_at" timestamp with time zone DEFAULT "now"(),
    "trustline_created_at" timestamp with time zone,
    "emitted_at" timestamp with time zone,
    "distributed_at" timestamp with time zone,
    "updated_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "valid_fee" CHECK ((("platform_fee_bps" >= 0) AND ("platform_fee_bps" <= 2000))),
    CONSTRAINT "valid_supply" CHECK (("total_supply" > (0)::numeric))
);
ALTER TABLE "public"."artist_tokens" OWNER TO "postgres";

-- 4.3 NFT Rewards
CREATE TABLE IF NOT EXISTS "public"."rewards" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "artist_public_key" character varying(56) NOT NULL,
    "nft_contract_id" character varying(56) NOT NULL,
    "title" character varying(255) NOT NULL,
    "description" "text",
    "image_url" "text",
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."rewards" OWNER TO "postgres";

-- 4.3.1 Reward Claims
CREATE TABLE IF NOT EXISTS "public"."reward_claims" (
    "id" "uuid" DEFAULT gen_random_uuid() PRIMARY KEY,
    "reward_id" "uuid" NOT NULL,
    "claimer_public_key" character varying(56) NOT NULL,
    "tx_hash" character varying(64) NOT NULL,
    "claimed_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."reward_claims" OWNER TO "postgres";

-- 4.4 Posts
CREATE TABLE IF NOT EXISTS "public"."posts" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "artist_public_key" character varying(56) NOT NULL,
    "type" character varying(20) NOT NULL CHECK (type IN ('token_launch', 'nft_drop', 'update')),
    "content" text NOT NULL,
    "image_url" text,
    "reference_id" text,
    "likes_count" integer DEFAULT 0,
    "comments_count" integer DEFAULT 0,
    "created_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."posts" OWNER TO "postgres";

-- 4.4.1 Post Likes
CREATE TABLE IF NOT EXISTS "public"."post_likes" (
    "user_public_key" character varying(56) NOT NULL,
    "post_id" "uuid" NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"(),
    PRIMARY KEY ("user_public_key", "post_id")
);
ALTER TABLE "public"."post_likes" OWNER TO "postgres";

-- 4.5 Tracks
CREATE TABLE IF NOT EXISTS "public"."tracks" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "artist_public_key" character varying(56) NOT NULL,
    "title" character varying(255) NOT NULL,
    "description" "text",
    "cover_image_url" "text",
    "audio_file_path" "text" NOT NULL,
    "preview_file_path" "text",
    "is_public" boolean DEFAULT false,
    "required_token_id" "uuid",
    "min_token_amount" numeric(20,7) DEFAULT 0,
    "required_reward_id" "uuid",
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."tracks" OWNER TO "postgres";

-- 4.6 Engagement
CREATE TABLE IF NOT EXISTS "public"."play_history" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "user_public_key" character varying(56) NOT NULL,
    "track_id" "uuid" NOT NULL,
    "listened_seconds" integer DEFAULT 0,
    "played_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."play_history" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."comments" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "track_id" "uuid",
    "post_id" "uuid",
    "user_public_key" character varying(56) NOT NULL,
    "content" "text" NOT NULL,
    "user_tier" character varying(50),
    "created_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "comment_target_check" CHECK (
        ("track_id" IS NOT NULL AND "post_id" IS NULL) OR
        ("track_id" IS NULL AND "post_id" IS NOT NULL)
    )
);
ALTER TABLE "public"."comments" OWNER TO "postgres";

-- 4.7 Marketplace Tables
CREATE TABLE IF NOT EXISTS "public"."marketplace_listings" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "token_id" "uuid" NOT NULL,
    "seller_public_key" character varying(56) NOT NULL,
    "amount_for_sale" numeric(20,7) NOT NULL,
    "price_per_token_xlm" numeric(20,7) NOT NULL,
    "total_price_xlm" numeric(20,7) GENERATED ALWAYS AS (("amount_for_sale" * "price_per_token_xlm")) STORED,
    "status" character varying(50) DEFAULT 'active'::character varying NOT NULL,
    "amount_sold" numeric(20,7) DEFAULT 0,
    "amount_remaining" numeric(20,7) GENERATED ALWAYS AS (("amount_for_sale" - "amount_sold")) STORED,
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"(),
    "expires_at" timestamp with time zone
);
ALTER TABLE "public"."marketplace_listings" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."marketplace_sales" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "listing_id" "uuid",
    "token_id" "uuid" NOT NULL,
    "buyer_public_key" character varying(56) NOT NULL,
    "seller_public_key" character varying(56) NOT NULL,
    "amount" numeric(20,7) NOT NULL,
    "price_per_token_xlm" numeric(20,7) NOT NULL,
    "total_price_xlm" numeric(20,7) NOT NULL,
    "platform_fee_xlm" numeric(20,7),
    "tx_hash" character varying(64) NOT NULL,
    "sold_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."marketplace_sales" OWNER TO "postgres";

-- 4.8 Analytics
CREATE TABLE IF NOT EXISTS "public"."platform_analytics" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "total_tokens_created" integer DEFAULT 0,
    "total_artists" integer DEFAULT 0,
    "total_tokens_distributed" numeric(30,7) DEFAULT 0,
    "total_xlm_volume" numeric(30,7) DEFAULT 0,
    "total_platform_fees_tokens" numeric(30,7) DEFAULT 0,
    "total_platform_fees_xlm" numeric(30,7) DEFAULT 0,
    "period_start" timestamp with time zone NOT NULL,
    "period_end" timestamp with time zone NOT NULL,
    "created_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."platform_analytics" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."token_distributions" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "token_id" "uuid" NOT NULL,
    "artist_public_key" character varying(56) NOT NULL,
    "artist_amount" numeric(20,7) NOT NULL,
    "platform_amount" numeric(20,7) NOT NULL,
    "tx_hash" character varying(64) NOT NULL,
    "distributed_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."token_distributions" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."token_metadata" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "token_id" "uuid" NOT NULL,
    "website_url" "text",
    "twitter_handle" character varying(100),
    "instagram_handle" character varying(100),
    "discord_url" "text",
    "telegram_url" "text",
    "category" character varying(50),
    "tags" "text"[],
    "total_holders" integer DEFAULT 0,
    "total_transactions" integer DEFAULT 0,
    "market_cap_xlm" numeric(20,7),
    "created_at" timestamp with time zone DEFAULT "now"(),
    "updated_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."token_metadata" OWNER TO "postgres";

CREATE TABLE IF NOT EXISTS "public"."token_transactions" (
    "id" "uuid" DEFAULT gen_random_uuid() NOT NULL PRIMARY KEY,
    "token_id" "uuid",
    "tx_hash" character varying(64) NOT NULL,
    "tx_type" character varying(50) NOT NULL,
    "from_address" character varying(56),
    "to_address" character varying(56),
    "amount" numeric(20,7) NOT NULL,
    "ledger_sequence" integer,
    "created_at" timestamp with time zone DEFAULT "now"()
);
ALTER TABLE "public"."token_transactions" OWNER TO "postgres";

-- =============================================================================
-- 5. VIEWS
-- =============================================================================

CREATE OR REPLACE VIEW "public"."artist_token_summary" AS
 SELECT "artist_public_key",
    "count"(*) AS "total_tokens",
    "sum"(CASE WHEN "status" = 'distributed' THEN 1 ELSE 0 END) AS "distributed_tokens",
    "sum"("artist_amount") AS "total_artist_tokens",
    "sum"("platform_amount") AS "total_platform_fees"
   FROM "public"."artist_tokens"
  GROUP BY "artist_public_key";
ALTER VIEW "public"."artist_token_summary" OWNER TO "postgres";

CREATE OR REPLACE VIEW "public"."top_tokens_by_volume" AS
 SELECT "at"."id",
    "at"."token_code",
    "at"."token_name",
    "at"."artist_public_key",
    "count"(DISTINCT "ms"."id") AS "total_sales",
    "sum"("ms"."amount") AS "total_volume_tokens",
    "sum"("ms"."total_price_xlm") AS "total_volume_xlm"
   FROM ("public"."artist_tokens" "at"
     LEFT JOIN "public"."marketplace_sales" "ms" ON (("at"."id" = "ms"."token_id")))
  WHERE (("at"."status")::"text" = 'distributed'::"text")
  GROUP BY "at"."id", "at"."token_code", "at"."token_name", "at"."artist_public_key"
  ORDER BY ("sum"("ms"."total_price_xlm")) DESC NULLS LAST;
ALTER VIEW "public"."top_tokens_by_volume" OWNER TO "postgres";

CREATE OR REPLACE VIEW "public"."activity_feed" AS
-- Token Purchases
SELECT
    ms.id::text as id,
    'token_purchase' as type,
    p.username || ' bought $' || at.token_code as title,
    'Swapped ' || ms.total_price_xlm || ' XLM for ' || ms.amount || ' Tokens' as description,
    ms.sold_at as created_at,
    ms.buyer_public_key as actor_key,
    at.image_url as image
FROM "public"."marketplace_sales" ms
JOIN "public"."profiles" p ON ms.buyer_public_key = p.wallet_address
JOIN "public"."artist_tokens" at ON ms.token_id = at.id

UNION ALL

-- NFT Mints
SELECT
    rc.id::text as id,
    'nft_mint' as type,
    p.username || ' minted ' || r.title as title,
    'Claimed exclusive reward from ' || ap.username as description,
    rc.claimed_at as created_at,
    rc.claimer_public_key as actor_key,
    r.image_url as image
FROM "public"."reward_claims" rc
JOIN "public"."profiles" p ON rc.claimer_public_key = p.wallet_address
JOIN "public"."rewards" r ON rc.reward_id = r.id
JOIN "public"."profiles" ap ON r.artist_public_key = ap.wallet_address

UNION ALL

-- Music Uploads
SELECT
    t.id::text as id,
    'music_upload' as type,
    'New Drop: ' || t.title as title,
    p.username || ' uploaded a new track' as description,
    t.created_at as created_at,
    t.artist_public_key as actor_key,
    t.cover_image_url as image
FROM "public"."tracks" t
JOIN "public"."profiles" p ON t.artist_public_key = p.wallet_address
WHERE t.is_public = true

UNION ALL

-- Transfers
SELECT
    tt.id::text as id,
    'community_interaction' as type,
    p.username || ' sent ' || tt.amount || ' ' || COALESCE(at.token_code, 'XLM') as title,
    'Transfer to ' || SUBSTRING(tt.to_address, 1, 4) || '...' || SUBSTRING(tt.to_address, -4) as description,
    tt.created_at as created_at,
    tt.from_address as actor_key,
    COALESCE(at.image_url, 'https://api.dicebear.com/7.x/shapes/svg?seed=XLM') as image
FROM "public"."token_transactions" tt
JOIN "public"."profiles" p ON tt.from_address = p.wallet_address
LEFT JOIN "public"."artist_tokens" at ON tt.token_id = at.id;
ALTER VIEW "public"."activity_feed" OWNER TO "postgres";

-- =============================================================================
-- 6. FUNCTIONS REQUIRING TABLES
-- =============================================================================

CREATE OR REPLACE FUNCTION "public"."get_token_stats"("token_uuid" "uuid")
RETURNS TABLE("total_holders" bigint, "total_transactions" bigint, "total_volume_xlm" numeric, "avg_price_xlm" numeric)
LANGUAGE "plpgsql"
AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(DISTINCT buyer_public_key) as total_holders,
        COUNT(*) as total_transactions,
        COALESCE(SUM(total_price_xlm), 0) as total_volume_xlm,
        COALESCE(AVG(price_per_token_xlm), 0) as avg_price_xlm
    FROM "public"."marketplace_sales"
    WHERE token_id = token_uuid;
END;
$$;
ALTER FUNCTION "public"."get_token_stats"("token_uuid" "uuid") OWNER TO "postgres";

-- =============================================================================
-- 7. FOREIGN KEYS (Idempotent)
-- =============================================================================

-- Artist Tokens
ALTER TABLE "public"."artist_tokens" DROP CONSTRAINT IF EXISTS "fk_artist";
ALTER TABLE "public"."artist_tokens" ADD CONSTRAINT "fk_artist" FOREIGN KEY ("artist_public_key") REFERENCES "public"."profiles"("wallet_address");

-- Rewards
ALTER TABLE "public"."rewards" DROP CONSTRAINT IF EXISTS "fk_reward_artist";
ALTER TABLE "public"."rewards" ADD CONSTRAINT "fk_reward_artist" FOREIGN KEY ("artist_public_key") REFERENCES "public"."profiles"("wallet_address");

-- Reward Claims
ALTER TABLE "public"."reward_claims" DROP CONSTRAINT IF EXISTS "fk_claim_reward";
ALTER TABLE "public"."reward_claims" ADD CONSTRAINT "fk_claim_reward" FOREIGN KEY ("reward_id") REFERENCES "public"."rewards"("id");

ALTER TABLE "public"."reward_claims" DROP CONSTRAINT IF EXISTS "fk_claim_user";
ALTER TABLE "public"."reward_claims" ADD CONSTRAINT "fk_claim_user" FOREIGN KEY ("claimer_public_key") REFERENCES "public"."profiles"("wallet_address");

-- Posts
ALTER TABLE "public"."posts" DROP CONSTRAINT IF EXISTS "posts_artist_public_key_fkey";
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_artist_public_key_fkey" FOREIGN KEY ("artist_public_key") REFERENCES "public"."profiles"("wallet_address");

-- Post Likes
ALTER TABLE "public"."post_likes" DROP CONSTRAINT IF EXISTS "fk_like_user";
ALTER TABLE "public"."post_likes" ADD CONSTRAINT "fk_like_user" FOREIGN KEY ("user_public_key") REFERENCES "public"."profiles"("wallet_address") ON DELETE CASCADE;

ALTER TABLE "public"."post_likes" DROP CONSTRAINT IF EXISTS "fk_like_post";
ALTER TABLE "public"."post_likes" ADD CONSTRAINT "fk_like_post" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;

-- Tracks
ALTER TABLE "public"."tracks" DROP CONSTRAINT IF EXISTS "fk_track_artist";
ALTER TABLE "public"."tracks" ADD CONSTRAINT "fk_track_artist" FOREIGN KEY ("artist_public_key") REFERENCES "public"."profiles"("wallet_address");

ALTER TABLE "public"."tracks" DROP CONSTRAINT IF EXISTS "fk_track_token";
ALTER TABLE "public"."tracks" ADD CONSTRAINT "fk_track_token" FOREIGN KEY ("required_token_id") REFERENCES "public"."artist_tokens"("id");

ALTER TABLE "public"."tracks" DROP CONSTRAINT IF EXISTS "fk_track_reward";
ALTER TABLE "public"."tracks" ADD CONSTRAINT "fk_track_reward" FOREIGN KEY ("required_reward_id") REFERENCES "public"."rewards"("id");

-- Play History
ALTER TABLE "public"."play_history" DROP CONSTRAINT IF EXISTS "fk_history_user";
ALTER TABLE "public"."play_history" ADD CONSTRAINT "fk_history_user" FOREIGN KEY ("user_public_key") REFERENCES "public"."profiles"("wallet_address");

ALTER TABLE "public"."play_history" DROP CONSTRAINT IF EXISTS "fk_history_track";
ALTER TABLE "public"."play_history" ADD CONSTRAINT "fk_history_track" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id");

-- Comments
ALTER TABLE "public"."comments" DROP CONSTRAINT IF EXISTS "fk_comment_user";
ALTER TABLE "public"."comments" ADD CONSTRAINT "fk_comment_user" FOREIGN KEY ("user_public_key") REFERENCES "public"."profiles"("wallet_address");

ALTER TABLE "public"."comments" DROP CONSTRAINT IF EXISTS "fk_comment_track";
ALTER TABLE "public"."comments" ADD CONSTRAINT "fk_comment_track" FOREIGN KEY ("track_id") REFERENCES "public"."tracks"("id") ON DELETE CASCADE;

ALTER TABLE "public"."comments" DROP CONSTRAINT IF EXISTS "fk_comment_post";
ALTER TABLE "public"."comments" ADD CONSTRAINT "fk_comment_post" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE CASCADE;

-- Marketplace Listings
ALTER TABLE "public"."marketplace_listings" DROP CONSTRAINT IF EXISTS "marketplace_listings_token_id_fkey";
ALTER TABLE "public"."marketplace_listings" ADD CONSTRAINT "marketplace_listings_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

-- Marketplace Sales
ALTER TABLE "public"."marketplace_sales" DROP CONSTRAINT IF EXISTS "marketplace_sales_listing_id_fkey";
ALTER TABLE "public"."marketplace_sales" ADD CONSTRAINT "marketplace_sales_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "public"."marketplace_listings"("id") ON DELETE CASCADE;

ALTER TABLE "public"."marketplace_sales" DROP CONSTRAINT IF EXISTS "marketplace_sales_token_id_fkey";
ALTER TABLE "public"."marketplace_sales" ADD CONSTRAINT "marketplace_sales_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

-- Token Distributions
ALTER TABLE "public"."token_distributions" DROP CONSTRAINT IF EXISTS "token_distributions_token_id_fkey";
ALTER TABLE "public"."token_distributions" ADD CONSTRAINT "token_distributions_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

-- Token Metadata
ALTER TABLE "public"."token_metadata" DROP CONSTRAINT IF EXISTS "token_metadata_token_id_fkey";
ALTER TABLE "public"."token_metadata" ADD CONSTRAINT "token_metadata_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

-- Token Transactions
ALTER TABLE "public"."token_transactions" DROP CONSTRAINT IF EXISTS "token_transactions_token_id_fkey";
ALTER TABLE "public"."token_transactions" ADD CONSTRAINT "token_transactions_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

-- =============================================================================
-- 8. UNIQUE CONSTRAINTS (Idempotent)
-- =============================================================================

ALTER TABLE "public"."platform_analytics" DROP CONSTRAINT IF EXISTS "unique_period";
ALTER TABLE "public"."platform_analytics" ADD CONSTRAINT "unique_period" UNIQUE ("period_start", "period_end");

ALTER TABLE "public"."artist_tokens" DROP CONSTRAINT IF EXISTS "unique_token_per_artist";
ALTER TABLE "public"."artist_tokens" ADD CONSTRAINT "unique_token_per_artist" UNIQUE ("token_code", "artist_public_key");

ALTER TABLE "public"."token_transactions" DROP CONSTRAINT IF EXISTS "unique_tx_hash";
ALTER TABLE "public"."token_transactions" ADD CONSTRAINT "unique_tx_hash" UNIQUE ("tx_hash");

-- =============================================================================
-- 9. INDEXES, TRIGGERS & RLS
-- =============================================================================

CREATE INDEX IF NOT EXISTS "idx_artist_tokens_artist" ON "public"."artist_tokens" USING "btree" ("artist_public_key");
CREATE INDEX IF NOT EXISTS "idx_artist_tokens_code" ON "public"."artist_tokens" USING "btree" ("token_code");
CREATE INDEX IF NOT EXISTS "idx_artist_tokens_status" ON "public"."artist_tokens" USING "btree" ("status");
CREATE INDEX IF NOT EXISTS "idx_marketplace_listings_active" ON "public"."marketplace_listings" USING "btree" ("status", "expires_at") WHERE ("status"::text = 'active'::text);
CREATE INDEX IF NOT EXISTS "idx_rewards_artist" ON "public"."rewards" USING "btree" ("artist_public_key");
CREATE INDEX IF NOT EXISTS "idx_posts_created_at" ON "public"."posts" ("created_at" DESC);
CREATE INDEX IF NOT EXISTS "idx_posts_artist" ON "public"."posts" ("artist_public_key");
CREATE INDEX IF NOT EXISTS "idx_tracks_artist" ON "public"."tracks" USING "btree" ("artist_public_key");
CREATE INDEX IF NOT EXISTS "idx_tracks_public" ON "public"."tracks" USING "btree" ("is_public");
CREATE INDEX IF NOT EXISTS "idx_comments_track" ON "public"."comments" USING "btree" ("track_id");
CREATE INDEX IF NOT EXISTS "idx_play_history_user" ON "public"."play_history" USING "btree" ("user_public_key");

CREATE OR REPLACE TRIGGER "update_artist_tokens_updated_at" BEFORE UPDATE ON "public"."artist_tokens" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();
CREATE OR REPLACE TRIGGER "update_marketplace_listings_updated_at" BEFORE UPDATE ON "public"."marketplace_listings" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();
CREATE OR REPLACE TRIGGER "update_token_metadata_updated_at" BEFORE UPDATE ON "public"."token_metadata" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();
CREATE OR REPLACE TRIGGER "update_tracks_updated_at" BEFORE UPDATE ON "public"."tracks" FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();

ALTER TABLE "public"."profiles" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."posts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."artist_tokens" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."marketplace_listings" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."tracks" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."comments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."play_history" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."post_likes" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."reward_claims" ENABLE ROW LEVEL SECURITY;

-- Note: Policies are dropped first to avoid errors on rerun
DROP POLICY IF EXISTS "Public can view profiles" ON "public"."profiles";
CREATE POLICY "Public can view profiles" ON "public"."profiles" FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert their own profile" ON "public"."profiles";
CREATE POLICY "Users can insert their own profile" ON "public"."profiles" FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update their own profile" ON "public"."profiles";
CREATE POLICY "Users can update their own profile" ON "public"."profiles" FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public can view posts" ON "public"."posts";
CREATE POLICY "Public can view posts" ON "public"."posts" FOR SELECT USING (true);

DROP POLICY IF EXISTS "Authenticated users can create posts" ON "public"."posts";
CREATE POLICY "Authenticated users can create posts" ON "public"."posts" FOR INSERT WITH CHECK (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Enable toggle like for all" ON "public"."post_likes";
CREATE POLICY "Enable toggle like for all" ON "public"."post_likes" FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Anyone can view active listings" ON "public"."marketplace_listings";
CREATE POLICY "Anyone can view active listings" ON "public"."marketplace_listings" FOR SELECT USING ("status"::text = 'active'::text);

DROP POLICY IF EXISTS "Anyone can view distributed tokens" ON "public"."artist_tokens";
CREATE POLICY "Anyone can view distributed tokens" ON "public"."artist_tokens" FOR SELECT USING ("status"::text = 'distributed'::text);

DROP POLICY IF EXISTS "Artists can view own tokens" ON "public"."artist_tokens";
CREATE POLICY "Artists can view own tokens" ON "public"."artist_tokens" FOR SELECT USING ((auth.uid())::text = (artist_public_key)::text);

DROP POLICY IF EXISTS "Sellers can update own listings" ON "public"."marketplace_listings";
CREATE POLICY "Sellers can update own listings" ON "public"."marketplace_listings" FOR UPDATE USING ((auth.uid())::text = (seller_public_key)::text);

DROP POLICY IF EXISTS "Public tracks view" ON "public"."tracks";
CREATE POLICY "Public tracks view" ON "public"."tracks" FOR SELECT USING (true);

DROP POLICY IF EXISTS "Artists manage own tracks" ON "public"."tracks";
CREATE POLICY "Artists manage own tracks" ON "public"."tracks" FOR ALL USING ((auth.uid())::text = (artist_public_key)::text);

DROP POLICY IF EXISTS "Public comments view" ON "public"."comments";
CREATE POLICY "Public comments view" ON "public"."comments" FOR SELECT USING (true);

DROP POLICY IF EXISTS "Enable comments for all" ON "public"."comments";
CREATE POLICY "Enable comments for all" ON "public"."comments" FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Users view own history" ON "public"."play_history";
CREATE POLICY "Users view own history" ON "public"."play_history" FOR SELECT USING ((auth.uid())::text = (user_public_key)::text);

DROP POLICY IF EXISTS "Users log own plays" ON "public"."play_history";
CREATE POLICY "Users log own plays" ON "public"."play_history" FOR INSERT WITH CHECK ((auth.uid())::text = (user_public_key)::text);

DROP POLICY IF EXISTS "Public view claims" ON "public"."reward_claims";
CREATE POLICY "Public view claims" ON "public"."reward_claims" FOR SELECT USING (true);

DROP POLICY IF EXISTS "Enable claims for all" ON "public"."reward_claims";
CREATE POLICY "Enable claims for all" ON "public"."reward_claims" FOR INSERT WITH CHECK (true);

GRANT USAGE ON SCHEMA "public" TO "postgres", "anon", "authenticated", "service_role";
GRANT ALL ON ALL TABLES IN SCHEMA "public" TO "postgres", "authenticated", "service_role";
GRANT ALL ON ALL SEQUENCES IN SCHEMA "public" TO "postgres", "authenticated", "service_role";
GRANT ALL ON ALL FUNCTIONS IN SCHEMA "public" TO "postgres", "authenticated", "service_role";
GRANT SELECT ON TABLE "public"."profiles", "public"."posts", "public"."artist_tokens", "public"."marketplace_listings", "public"."rewards", "public"."tracks", "public"."comments", "public"."post_likes", "public"."reward_claims", "public"."token_transactions", "public"."marketplace_sales" TO "anon";
GRANT SELECT ON "public"."activity_feed" TO "anon";