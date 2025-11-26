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

-- =============================================================================
-- 3. FUNCTIONS
-- =============================================================================

-- Function: get_token_stats
-- Returns statistics for a specific token
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
    FROM marketplace_sales
    WHERE token_id = token_uuid;
END;
$$;

ALTER FUNCTION "public"."get_token_stats"("token_uuid" "uuid") OWNER TO "postgres";

-- Function: update_updated_at_column
-- Trigger function to auto-update timestamps
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

-- Table: artist_tokens
CREATE TABLE IF NOT EXISTS "public"."artist_tokens" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
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

-- Table: marketplace_listings
CREATE TABLE IF NOT EXISTS "public"."marketplace_listings" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
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
    "expires_at" timestamp with time zone,
    CONSTRAINT "valid_price" CHECK (("price_per_token_xlm" > (0)::numeric)),
    CONSTRAINT "valid_sale_amount" CHECK (("amount_for_sale" > (0)::numeric))
);

ALTER TABLE "public"."marketplace_listings" OWNER TO "postgres";

-- Table: marketplace_sales
CREATE TABLE IF NOT EXISTS "public"."marketplace_sales" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "listing_id" "uuid" NOT NULL,
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

-- Table: platform_analytics
CREATE TABLE IF NOT EXISTS "public"."platform_analytics" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
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

-- Table: rewards
CREATE TABLE IF NOT EXISTS "public"."rewards" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "artist_public_key" character varying(56) NOT NULL,
    "nft_contract_id" character varying(56) NOT NULL,
    "title" character varying(255) NOT NULL,
    "description" "text",
    "image_url" "text",
    "is_active" boolean DEFAULT true,
    "created_at" timestamp with time zone DEFAULT "now"()
);

ALTER TABLE "public"."rewards" OWNER TO "postgres";

-- Table: token_distributions
CREATE TABLE IF NOT EXISTS "public"."token_distributions" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "token_id" "uuid" NOT NULL,
    "artist_public_key" character varying(56) NOT NULL,
    "artist_amount" numeric(20,7) NOT NULL,
    "platform_amount" numeric(20,7) NOT NULL,
    "tx_hash" character varying(64) NOT NULL,
    "distributed_at" timestamp with time zone DEFAULT "now"(),
    CONSTRAINT "valid_artist_amount" CHECK (("artist_amount" >= (0)::numeric)),
    CONSTRAINT "valid_platform_amount" CHECK (("platform_amount" >= (0)::numeric))
);

ALTER TABLE "public"."token_distributions" OWNER TO "postgres";

-- Table: token_metadata
CREATE TABLE IF NOT EXISTS "public"."token_metadata" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
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

-- Table: token_transactions
CREATE TABLE IF NOT EXISTS "public"."token_transactions" (
    "id" "uuid" DEFAULT "extensions"."uuid_generate_v4"() NOT NULL,
    "token_id" "uuid" NOT NULL,
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

-- View: artist_token_summary
CREATE OR REPLACE VIEW "public"."artist_token_summary" AS
 SELECT "artist_public_key",
    "count"(*) AS "total_tokens",
    "sum"(
        CASE
            WHEN (("status")::"text" = 'distributed'::"text") THEN 1
            ELSE 0
        END) AS "distributed_tokens",
    "sum"("artist_amount") AS "total_artist_tokens",
    "sum"("platform_amount") AS "total_platform_fees"
   FROM "public"."artist_tokens"
  GROUP BY "artist_public_key";

ALTER VIEW "public"."artist_token_summary" OWNER TO "postgres";

-- View: top_tokens_by_volume
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

-- =============================================================================
-- 6. CONSTRAINTS (Primary Keys & Unique)
-- =============================================================================

-- Primary Keys
ALTER TABLE ONLY "public"."artist_tokens" ADD CONSTRAINT "artist_tokens_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."marketplace_listings" ADD CONSTRAINT "marketplace_listings_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."marketplace_sales" ADD CONSTRAINT "marketplace_sales_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."platform_analytics" ADD CONSTRAINT "platform_analytics_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."rewards" ADD CONSTRAINT "rewards_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."token_distributions" ADD CONSTRAINT "token_distributions_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."token_metadata" ADD CONSTRAINT "token_metadata_pkey" PRIMARY KEY ("id");
ALTER TABLE ONLY "public"."token_transactions" ADD CONSTRAINT "token_transactions_pkey" PRIMARY KEY ("id");

-- Unique Constraints
ALTER TABLE ONLY "public"."platform_analytics" ADD CONSTRAINT "unique_period" UNIQUE ("period_start", "period_end");
ALTER TABLE ONLY "public"."artist_tokens" ADD CONSTRAINT "unique_token_per_artist" UNIQUE ("token_code", "artist_public_key");
ALTER TABLE ONLY "public"."token_transactions" ADD CONSTRAINT "unique_tx_hash" UNIQUE ("tx_hash");

-- =============================================================================
-- 7. INDEXES
-- =============================================================================

-- artist_tokens indexes
CREATE INDEX "idx_artist_tokens_artist" ON "public"."artist_tokens" USING "btree" ("artist_public_key");
CREATE INDEX "idx_artist_tokens_code" ON "public"."artist_tokens" USING "btree" ("token_code");
CREATE INDEX "idx_artist_tokens_created" ON "public"."artist_tokens" USING "btree" ("created_at" DESC);
CREATE INDEX "idx_artist_tokens_status" ON "public"."artist_tokens" USING "btree" ("status");

-- marketplace_listings indexes
CREATE INDEX "idx_marketplace_listings_active" ON "public"."marketplace_listings" USING "btree" ("status", "expires_at") WHERE (("status")::"text" = 'active'::"text");
CREATE INDEX "idx_marketplace_listings_seller" ON "public"."marketplace_listings" USING "btree" ("seller_public_key");
CREATE INDEX "idx_marketplace_listings_status" ON "public"."marketplace_listings" USING "btree" ("status");
CREATE INDEX "idx_marketplace_listings_token" ON "public"."marketplace_listings" USING "btree" ("token_id");

-- marketplace_sales indexes
CREATE INDEX "idx_marketplace_sales_buyer" ON "public"."marketplace_sales" USING "btree" ("buyer_public_key");
CREATE INDEX "idx_marketplace_sales_date" ON "public"."marketplace_sales" USING "btree" ("sold_at" DESC);
CREATE INDEX "idx_marketplace_sales_token" ON "public"."marketplace_sales" USING "btree" ("token_id");

-- rewards indexes
CREATE INDEX "idx_rewards_artist" ON "public"."rewards" USING "btree" ("artist_public_key");
CREATE INDEX "idx_rewards_contract" ON "public"."rewards" USING "btree" ("nft_contract_id");

-- token_distributions indexes
CREATE INDEX "idx_token_distributions_date" ON "public"."token_distributions" USING "btree" ("distributed_at" DESC);
CREATE INDEX "idx_token_distributions_token" ON "public"."token_distributions" USING "btree" ("token_id");

-- token_transactions indexes
CREATE INDEX "idx_token_transactions_date" ON "public"."token_transactions" USING "btree" ("created_at" DESC);
CREATE INDEX "idx_token_transactions_hash" ON "public"."token_transactions" USING "btree" ("tx_hash");
CREATE INDEX "idx_token_transactions_token" ON "public"."token_transactions" USING "btree" ("token_id");

-- =============================================================================
-- 8. TRIGGERS
-- =============================================================================

CREATE OR REPLACE TRIGGER "update_artist_tokens_updated_at"
BEFORE UPDATE ON "public"."artist_tokens"
FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();

CREATE OR REPLACE TRIGGER "update_marketplace_listings_updated_at"
BEFORE UPDATE ON "public"."marketplace_listings"
FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();

CREATE OR REPLACE TRIGGER "update_token_metadata_updated_at"
BEFORE UPDATE ON "public"."token_metadata"
FOR EACH ROW EXECUTE FUNCTION "public"."update_updated_at_column"();

-- =============================================================================
-- 9. FOREIGN KEYS
-- =============================================================================

ALTER TABLE ONLY "public"."marketplace_listings"
    ADD CONSTRAINT "marketplace_listings_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."marketplace_sales"
    ADD CONSTRAINT "marketplace_sales_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "public"."marketplace_listings"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."marketplace_sales"
    ADD CONSTRAINT "marketplace_sales_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."token_distributions"
    ADD CONSTRAINT "token_distributions_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."token_metadata"
    ADD CONSTRAINT "token_metadata_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

ALTER TABLE ONLY "public"."token_transactions"
    ADD CONSTRAINT "token_transactions_token_id_fkey" FOREIGN KEY ("token_id") REFERENCES "public"."artist_tokens"("id") ON DELETE CASCADE;

-- =============================================================================
-- 10. SECURITY & RLS
-- =============================================================================

-- Enable RLS on Tables
ALTER TABLE "public"."artist_tokens" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "public"."marketplace_listings" ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view active listings" ON "public"."marketplace_listings"
FOR SELECT USING ((("status")::"text" = 'active'::"text"));

CREATE POLICY "Anyone can view distributed tokens" ON "public"."artist_tokens"
FOR SELECT USING ((("status")::"text" = 'distributed'::"text"));

CREATE POLICY "Artists can view own tokens" ON "public"."artist_tokens"
FOR SELECT USING ((("auth"."uid"())::"text" = ("artist_public_key")::"text"));

CREATE POLICY "Sellers can update own listings" ON "public"."marketplace_listings"
FOR UPDATE USING ((("auth"."uid"())::"text" = ("seller_public_key")::"text"));

-- =============================================================================
-- 11. PERMISSIONS
-- =============================================================================

-- Schema Permissions
GRANT USAGE ON SCHEMA "public" TO "postgres";
GRANT USAGE ON SCHEMA "public" TO "anon";
GRANT USAGE ON SCHEMA "public" TO "authenticated";
GRANT USAGE ON SCHEMA "public" TO "service_role";

-- Function Permissions
GRANT ALL ON FUNCTION "public"."get_token_stats"("token_uuid" "uuid") TO "anon";
GRANT ALL ON FUNCTION "public"."get_token_stats"("token_uuid" "uuid") TO "authenticated";
GRANT ALL ON FUNCTION "public"."get_token_stats"("token_uuid" "uuid") TO "service_role";

GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "anon";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "authenticated";
GRANT ALL ON FUNCTION "public"."update_updated_at_column"() TO "service_role";

-- Table Permissions
GRANT ALL ON TABLE "public"."artist_tokens" TO "anon";
GRANT ALL ON TABLE "public"."artist_tokens" TO "authenticated";
GRANT ALL ON TABLE "public"."artist_tokens" TO "service_role";

GRANT ALL ON TABLE "public"."artist_token_summary" TO "anon";
GRANT ALL ON TABLE "public"."artist_token_summary" TO "authenticated";
GRANT ALL ON TABLE "public"."artist_token_summary" TO "service_role";

GRANT ALL ON TABLE "public"."marketplace_listings" TO "anon";
GRANT ALL ON TABLE "public"."marketplace_listings" TO "authenticated";
GRANT ALL ON TABLE "public"."marketplace_listings" TO "service_role";

GRANT ALL ON TABLE "public"."marketplace_sales" TO "anon";
GRANT ALL ON TABLE "public"."marketplace_sales" TO "authenticated";
GRANT ALL ON TABLE "public"."marketplace_sales" TO "service_role";

GRANT ALL ON TABLE "public"."platform_analytics" TO "anon";
GRANT ALL ON TABLE "public"."platform_analytics" TO "authenticated";
GRANT ALL ON TABLE "public"."platform_analytics" TO "service_role";

GRANT ALL ON TABLE "public"."rewards" TO "anon";
GRANT ALL ON TABLE "public"."rewards" TO "authenticated";
GRANT ALL ON TABLE "public"."rewards" TO "service_role";

GRANT ALL ON TABLE "public"."token_distributions" TO "anon";
GRANT ALL ON TABLE "public"."token_distributions" TO "authenticated";
GRANT ALL ON TABLE "public"."token_distributions" TO "service_role";

GRANT ALL ON TABLE "public"."token_metadata" TO "anon";
GRANT ALL ON TABLE "public"."token_metadata" TO "authenticated";
GRANT ALL ON TABLE "public"."token_metadata" TO "service_role";

GRANT ALL ON TABLE "public"."token_transactions" TO "anon";
GRANT ALL ON TABLE "public"."token_transactions" TO "authenticated";
GRANT ALL ON TABLE "public"."token_transactions" TO "service_role";

GRANT ALL ON TABLE "public"."top_tokens_by_volume" TO "anon";
GRANT ALL ON TABLE "public"."top_tokens_by_volume" TO "authenticated";
GRANT ALL ON TABLE "public"."top_tokens_by_volume" TO "service_role";

-- Default Privileges
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON SEQUENCES TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON FUNCTIONS TO "service_role";

ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "postgres";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "anon";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "authenticated";
ALTER DEFAULT PRIVILEGES FOR ROLE "postgres" IN SCHEMA "public" GRANT ALL ON TABLES TO "service_role";
