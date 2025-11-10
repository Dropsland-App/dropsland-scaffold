drop extension if exists "pg_net";


  create table "public"."artist_tokens" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "artist_public_key" character varying(56) not null,
    "artist_email" character varying(255),
    "artist_name" character varying(255),
    "token_code" character varying(12) not null,
    "token_name" character varying(255) not null,
    "total_supply" numeric(20,7) not null,
    "description" text,
    "image_url" text,
    "platform_fee_bps" integer not null default 1000,
    "distribution_public_key" character varying(56) not null,
    "distribution_secret_encrypted" text not null,
    "artist_amount" numeric(20,7),
    "platform_amount" numeric(20,7),
    "status" character varying(50) not null default 'created'::character varying,
    "trustline_tx_hash" character varying(64),
    "emission_tx_hash" character varying(64),
    "distribution_tx_hash" character varying(64),
    "created_at" timestamp with time zone default now(),
    "trustline_created_at" timestamp with time zone,
    "emitted_at" timestamp with time zone,
    "distributed_at" timestamp with time zone,
    "updated_at" timestamp with time zone default now()
      );


alter table "public"."artist_tokens" enable row level security;


  create table "public"."marketplace_listings" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "seller_public_key" character varying(56) not null,
    "amount_for_sale" numeric(20,7) not null,
    "price_per_token_xlm" numeric(20,7) not null,
    "total_price_xlm" numeric(20,7) generated always as ((amount_for_sale * price_per_token_xlm)) stored,
    "status" character varying(50) not null default 'active'::character varying,
    "amount_sold" numeric(20,7) default 0,
    "amount_remaining" numeric(20,7) generated always as ((amount_for_sale - amount_sold)) stored,
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now(),
    "expires_at" timestamp with time zone
      );


alter table "public"."marketplace_listings" enable row level security;


  create table "public"."marketplace_sales" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "listing_id" uuid not null,
    "token_id" uuid not null,
    "buyer_public_key" character varying(56) not null,
    "seller_public_key" character varying(56) not null,
    "amount" numeric(20,7) not null,
    "price_per_token_xlm" numeric(20,7) not null,
    "total_price_xlm" numeric(20,7) not null,
    "platform_fee_xlm" numeric(20,7),
    "tx_hash" character varying(64) not null,
    "sold_at" timestamp with time zone default now()
      );



  create table "public"."platform_analytics" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "total_tokens_created" integer default 0,
    "total_artists" integer default 0,
    "total_tokens_distributed" numeric(30,7) default 0,
    "total_xlm_volume" numeric(30,7) default 0,
    "total_platform_fees_tokens" numeric(30,7) default 0,
    "total_platform_fees_xlm" numeric(30,7) default 0,
    "period_start" timestamp with time zone not null,
    "period_end" timestamp with time zone not null,
    "created_at" timestamp with time zone default now()
      );



  create table "public"."token_distributions" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "artist_public_key" character varying(56) not null,
    "artist_amount" numeric(20,7) not null,
    "platform_amount" numeric(20,7) not null,
    "tx_hash" character varying(64) not null,
    "distributed_at" timestamp with time zone default now()
      );



  create table "public"."token_metadata" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "website_url" text,
    "twitter_handle" character varying(100),
    "instagram_handle" character varying(100),
    "discord_url" text,
    "telegram_url" text,
    "category" character varying(50),
    "tags" text[],
    "total_holders" integer default 0,
    "total_transactions" integer default 0,
    "market_cap_xlm" numeric(20,7),
    "created_at" timestamp with time zone default now(),
    "updated_at" timestamp with time zone default now()
      );



  create table "public"."token_transactions" (
    "id" uuid not null default extensions.uuid_generate_v4(),
    "token_id" uuid not null,
    "tx_hash" character varying(64) not null,
    "tx_type" character varying(50) not null,
    "from_address" character varying(56),
    "to_address" character varying(56),
    "amount" numeric(20,7) not null,
    "ledger_sequence" integer,
    "created_at" timestamp with time zone default now()
      );


CREATE UNIQUE INDEX artist_tokens_pkey ON public.artist_tokens USING btree (id);

CREATE INDEX idx_artist_tokens_artist ON public.artist_tokens USING btree (artist_public_key);

CREATE INDEX idx_artist_tokens_code ON public.artist_tokens USING btree (token_code);

CREATE INDEX idx_artist_tokens_created ON public.artist_tokens USING btree (created_at DESC);

CREATE INDEX idx_artist_tokens_status ON public.artist_tokens USING btree (status);

CREATE INDEX idx_marketplace_listings_active ON public.marketplace_listings USING btree (status, expires_at) WHERE ((status)::text = 'active'::text);

CREATE INDEX idx_marketplace_listings_seller ON public.marketplace_listings USING btree (seller_public_key);

CREATE INDEX idx_marketplace_listings_status ON public.marketplace_listings USING btree (status);

CREATE INDEX idx_marketplace_listings_token ON public.marketplace_listings USING btree (token_id);

CREATE INDEX idx_marketplace_sales_buyer ON public.marketplace_sales USING btree (buyer_public_key);

CREATE INDEX idx_marketplace_sales_date ON public.marketplace_sales USING btree (sold_at DESC);

CREATE INDEX idx_marketplace_sales_token ON public.marketplace_sales USING btree (token_id);

CREATE INDEX idx_token_distributions_date ON public.token_distributions USING btree (distributed_at DESC);

CREATE INDEX idx_token_distributions_token ON public.token_distributions USING btree (token_id);

CREATE INDEX idx_token_transactions_date ON public.token_transactions USING btree (created_at DESC);

CREATE INDEX idx_token_transactions_hash ON public.token_transactions USING btree (tx_hash);

CREATE INDEX idx_token_transactions_token ON public.token_transactions USING btree (token_id);

CREATE UNIQUE INDEX marketplace_listings_pkey ON public.marketplace_listings USING btree (id);

CREATE UNIQUE INDEX marketplace_sales_pkey ON public.marketplace_sales USING btree (id);

CREATE UNIQUE INDEX platform_analytics_pkey ON public.platform_analytics USING btree (id);

CREATE UNIQUE INDEX token_distributions_pkey ON public.token_distributions USING btree (id);

CREATE UNIQUE INDEX token_metadata_pkey ON public.token_metadata USING btree (id);

CREATE UNIQUE INDEX token_transactions_pkey ON public.token_transactions USING btree (id);

CREATE UNIQUE INDEX unique_period ON public.platform_analytics USING btree (period_start, period_end);

CREATE UNIQUE INDEX unique_token_per_artist ON public.artist_tokens USING btree (token_code, artist_public_key);

CREATE UNIQUE INDEX unique_tx_hash ON public.token_transactions USING btree (tx_hash);

alter table "public"."artist_tokens" add constraint "artist_tokens_pkey" PRIMARY KEY using index "artist_tokens_pkey";

alter table "public"."marketplace_listings" add constraint "marketplace_listings_pkey" PRIMARY KEY using index "marketplace_listings_pkey";

alter table "public"."marketplace_sales" add constraint "marketplace_sales_pkey" PRIMARY KEY using index "marketplace_sales_pkey";

alter table "public"."platform_analytics" add constraint "platform_analytics_pkey" PRIMARY KEY using index "platform_analytics_pkey";

alter table "public"."token_distributions" add constraint "token_distributions_pkey" PRIMARY KEY using index "token_distributions_pkey";

alter table "public"."token_metadata" add constraint "token_metadata_pkey" PRIMARY KEY using index "token_metadata_pkey";

alter table "public"."token_transactions" add constraint "token_transactions_pkey" PRIMARY KEY using index "token_transactions_pkey";

alter table "public"."artist_tokens" add constraint "unique_token_per_artist" UNIQUE using index "unique_token_per_artist";

alter table "public"."artist_tokens" add constraint "valid_fee" CHECK (((platform_fee_bps >= 0) AND (platform_fee_bps <= 2000))) not valid;

alter table "public"."artist_tokens" validate constraint "valid_fee";

alter table "public"."artist_tokens" add constraint "valid_supply" CHECK ((total_supply > (0)::numeric)) not valid;

alter table "public"."artist_tokens" validate constraint "valid_supply";

alter table "public"."marketplace_listings" add constraint "marketplace_listings_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."marketplace_listings" validate constraint "marketplace_listings_token_id_fkey";

alter table "public"."marketplace_listings" add constraint "valid_price" CHECK ((price_per_token_xlm > (0)::numeric)) not valid;

alter table "public"."marketplace_listings" validate constraint "valid_price";

alter table "public"."marketplace_listings" add constraint "valid_sale_amount" CHECK ((amount_for_sale > (0)::numeric)) not valid;

alter table "public"."marketplace_listings" validate constraint "valid_sale_amount";

alter table "public"."marketplace_sales" add constraint "marketplace_sales_listing_id_fkey" FOREIGN KEY (listing_id) REFERENCES public.marketplace_listings(id) ON DELETE CASCADE not valid;

alter table "public"."marketplace_sales" validate constraint "marketplace_sales_listing_id_fkey";

alter table "public"."marketplace_sales" add constraint "marketplace_sales_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."marketplace_sales" validate constraint "marketplace_sales_token_id_fkey";

alter table "public"."platform_analytics" add constraint "unique_period" UNIQUE using index "unique_period";

alter table "public"."token_distributions" add constraint "token_distributions_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."token_distributions" validate constraint "token_distributions_token_id_fkey";

alter table "public"."token_distributions" add constraint "valid_artist_amount" CHECK ((artist_amount >= (0)::numeric)) not valid;

alter table "public"."token_distributions" validate constraint "valid_artist_amount";

alter table "public"."token_distributions" add constraint "valid_platform_amount" CHECK ((platform_amount >= (0)::numeric)) not valid;

alter table "public"."token_distributions" validate constraint "valid_platform_amount";

alter table "public"."token_metadata" add constraint "token_metadata_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."token_metadata" validate constraint "token_metadata_token_id_fkey";

alter table "public"."token_transactions" add constraint "token_transactions_token_id_fkey" FOREIGN KEY (token_id) REFERENCES public.artist_tokens(id) ON DELETE CASCADE not valid;

alter table "public"."token_transactions" validate constraint "token_transactions_token_id_fkey";

alter table "public"."token_transactions" add constraint "unique_tx_hash" UNIQUE using index "unique_tx_hash";

set check_function_bodies = off;

create or replace view "public"."artist_token_summary" as  SELECT artist_public_key,
    count(*) AS total_tokens,
    sum(
        CASE
            WHEN ((status)::text = 'distributed'::text) THEN 1
            ELSE 0
        END) AS distributed_tokens,
    sum(artist_amount) AS total_artist_tokens,
    sum(platform_amount) AS total_platform_fees
   FROM public.artist_tokens
  GROUP BY artist_public_key;


CREATE OR REPLACE FUNCTION public.get_token_stats(token_uuid uuid)
 RETURNS TABLE(total_holders bigint, total_transactions bigint, total_volume_xlm numeric, avg_price_xlm numeric)
 LANGUAGE plpgsql
AS $function$
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
$function$
;

create or replace view "public"."top_tokens_by_volume" as  SELECT at.id,
    at.token_code,
    at.token_name,
    at.artist_public_key,
    count(DISTINCT ms.id) AS total_sales,
    sum(ms.amount) AS total_volume_tokens,
    sum(ms.total_price_xlm) AS total_volume_xlm
   FROM (public.artist_tokens at
     LEFT JOIN public.marketplace_sales ms ON ((at.id = ms.token_id)))
  WHERE ((at.status)::text = 'distributed'::text)
  GROUP BY at.id, at.token_code, at.token_name, at.artist_public_key
  ORDER BY (sum(ms.total_price_xlm)) DESC NULLS LAST;


CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$function$
;

grant delete on table "public"."artist_tokens" to "anon";

grant insert on table "public"."artist_tokens" to "anon";

grant references on table "public"."artist_tokens" to "anon";

grant select on table "public"."artist_tokens" to "anon";

grant trigger on table "public"."artist_tokens" to "anon";

grant truncate on table "public"."artist_tokens" to "anon";

grant update on table "public"."artist_tokens" to "anon";

grant delete on table "public"."artist_tokens" to "authenticated";

grant insert on table "public"."artist_tokens" to "authenticated";

grant references on table "public"."artist_tokens" to "authenticated";

grant select on table "public"."artist_tokens" to "authenticated";

grant trigger on table "public"."artist_tokens" to "authenticated";

grant truncate on table "public"."artist_tokens" to "authenticated";

grant update on table "public"."artist_tokens" to "authenticated";

grant delete on table "public"."artist_tokens" to "service_role";

grant insert on table "public"."artist_tokens" to "service_role";

grant references on table "public"."artist_tokens" to "service_role";

grant select on table "public"."artist_tokens" to "service_role";

grant trigger on table "public"."artist_tokens" to "service_role";

grant truncate on table "public"."artist_tokens" to "service_role";

grant update on table "public"."artist_tokens" to "service_role";

grant delete on table "public"."marketplace_listings" to "anon";

grant insert on table "public"."marketplace_listings" to "anon";

grant references on table "public"."marketplace_listings" to "anon";

grant select on table "public"."marketplace_listings" to "anon";

grant trigger on table "public"."marketplace_listings" to "anon";

grant truncate on table "public"."marketplace_listings" to "anon";

grant update on table "public"."marketplace_listings" to "anon";

grant delete on table "public"."marketplace_listings" to "authenticated";

grant insert on table "public"."marketplace_listings" to "authenticated";

grant references on table "public"."marketplace_listings" to "authenticated";

grant select on table "public"."marketplace_listings" to "authenticated";

grant trigger on table "public"."marketplace_listings" to "authenticated";

grant truncate on table "public"."marketplace_listings" to "authenticated";

grant update on table "public"."marketplace_listings" to "authenticated";

grant delete on table "public"."marketplace_listings" to "service_role";

grant insert on table "public"."marketplace_listings" to "service_role";

grant references on table "public"."marketplace_listings" to "service_role";

grant select on table "public"."marketplace_listings" to "service_role";

grant trigger on table "public"."marketplace_listings" to "service_role";

grant truncate on table "public"."marketplace_listings" to "service_role";

grant update on table "public"."marketplace_listings" to "service_role";

grant delete on table "public"."marketplace_sales" to "anon";

grant insert on table "public"."marketplace_sales" to "anon";

grant references on table "public"."marketplace_sales" to "anon";

grant select on table "public"."marketplace_sales" to "anon";

grant trigger on table "public"."marketplace_sales" to "anon";

grant truncate on table "public"."marketplace_sales" to "anon";

grant update on table "public"."marketplace_sales" to "anon";

grant delete on table "public"."marketplace_sales" to "authenticated";

grant insert on table "public"."marketplace_sales" to "authenticated";

grant references on table "public"."marketplace_sales" to "authenticated";

grant select on table "public"."marketplace_sales" to "authenticated";

grant trigger on table "public"."marketplace_sales" to "authenticated";

grant truncate on table "public"."marketplace_sales" to "authenticated";

grant update on table "public"."marketplace_sales" to "authenticated";

grant delete on table "public"."marketplace_sales" to "service_role";

grant insert on table "public"."marketplace_sales" to "service_role";

grant references on table "public"."marketplace_sales" to "service_role";

grant select on table "public"."marketplace_sales" to "service_role";

grant trigger on table "public"."marketplace_sales" to "service_role";

grant truncate on table "public"."marketplace_sales" to "service_role";

grant update on table "public"."marketplace_sales" to "service_role";

grant delete on table "public"."platform_analytics" to "anon";

grant insert on table "public"."platform_analytics" to "anon";

grant references on table "public"."platform_analytics" to "anon";

grant select on table "public"."platform_analytics" to "anon";

grant trigger on table "public"."platform_analytics" to "anon";

grant truncate on table "public"."platform_analytics" to "anon";

grant update on table "public"."platform_analytics" to "anon";

grant delete on table "public"."platform_analytics" to "authenticated";

grant insert on table "public"."platform_analytics" to "authenticated";

grant references on table "public"."platform_analytics" to "authenticated";

grant select on table "public"."platform_analytics" to "authenticated";

grant trigger on table "public"."platform_analytics" to "authenticated";

grant truncate on table "public"."platform_analytics" to "authenticated";

grant update on table "public"."platform_analytics" to "authenticated";

grant delete on table "public"."platform_analytics" to "service_role";

grant insert on table "public"."platform_analytics" to "service_role";

grant references on table "public"."platform_analytics" to "service_role";

grant select on table "public"."platform_analytics" to "service_role";

grant trigger on table "public"."platform_analytics" to "service_role";

grant truncate on table "public"."platform_analytics" to "service_role";

grant update on table "public"."platform_analytics" to "service_role";

grant delete on table "public"."token_distributions" to "anon";

grant insert on table "public"."token_distributions" to "anon";

grant references on table "public"."token_distributions" to "anon";

grant select on table "public"."token_distributions" to "anon";

grant trigger on table "public"."token_distributions" to "anon";

grant truncate on table "public"."token_distributions" to "anon";

grant update on table "public"."token_distributions" to "anon";

grant delete on table "public"."token_distributions" to "authenticated";

grant insert on table "public"."token_distributions" to "authenticated";

grant references on table "public"."token_distributions" to "authenticated";

grant select on table "public"."token_distributions" to "authenticated";

grant trigger on table "public"."token_distributions" to "authenticated";

grant truncate on table "public"."token_distributions" to "authenticated";

grant update on table "public"."token_distributions" to "authenticated";

grant delete on table "public"."token_distributions" to "service_role";

grant insert on table "public"."token_distributions" to "service_role";

grant references on table "public"."token_distributions" to "service_role";

grant select on table "public"."token_distributions" to "service_role";

grant trigger on table "public"."token_distributions" to "service_role";

grant truncate on table "public"."token_distributions" to "service_role";

grant update on table "public"."token_distributions" to "service_role";

grant delete on table "public"."token_metadata" to "anon";

grant insert on table "public"."token_metadata" to "anon";

grant references on table "public"."token_metadata" to "anon";

grant select on table "public"."token_metadata" to "anon";

grant trigger on table "public"."token_metadata" to "anon";

grant truncate on table "public"."token_metadata" to "anon";

grant update on table "public"."token_metadata" to "anon";

grant delete on table "public"."token_metadata" to "authenticated";

grant insert on table "public"."token_metadata" to "authenticated";

grant references on table "public"."token_metadata" to "authenticated";

grant select on table "public"."token_metadata" to "authenticated";

grant trigger on table "public"."token_metadata" to "authenticated";

grant truncate on table "public"."token_metadata" to "authenticated";

grant update on table "public"."token_metadata" to "authenticated";

grant delete on table "public"."token_metadata" to "service_role";

grant insert on table "public"."token_metadata" to "service_role";

grant references on table "public"."token_metadata" to "service_role";

grant select on table "public"."token_metadata" to "service_role";

grant trigger on table "public"."token_metadata" to "service_role";

grant truncate on table "public"."token_metadata" to "service_role";

grant update on table "public"."token_metadata" to "service_role";

grant delete on table "public"."token_transactions" to "anon";

grant insert on table "public"."token_transactions" to "anon";

grant references on table "public"."token_transactions" to "anon";

grant select on table "public"."token_transactions" to "anon";

grant trigger on table "public"."token_transactions" to "anon";

grant truncate on table "public"."token_transactions" to "anon";

grant update on table "public"."token_transactions" to "anon";

grant delete on table "public"."token_transactions" to "authenticated";

grant insert on table "public"."token_transactions" to "authenticated";

grant references on table "public"."token_transactions" to "authenticated";

grant select on table "public"."token_transactions" to "authenticated";

grant trigger on table "public"."token_transactions" to "authenticated";

grant truncate on table "public"."token_transactions" to "authenticated";

grant update on table "public"."token_transactions" to "authenticated";

grant delete on table "public"."token_transactions" to "service_role";

grant insert on table "public"."token_transactions" to "service_role";

grant references on table "public"."token_transactions" to "service_role";

grant select on table "public"."token_transactions" to "service_role";

grant trigger on table "public"."token_transactions" to "service_role";

grant truncate on table "public"."token_transactions" to "service_role";

grant update on table "public"."token_transactions" to "service_role";


  create policy "Anyone can view distributed tokens"
  on "public"."artist_tokens"
  as permissive
  for select
  to public
using (((status)::text = 'distributed'::text));



  create policy "Artists can view own tokens"
  on "public"."artist_tokens"
  as permissive
  for select
  to public
using (((auth.uid())::text = (artist_public_key)::text));



  create policy "Anyone can view active listings"
  on "public"."marketplace_listings"
  as permissive
  for select
  to public
using (((status)::text = 'active'::text));



  create policy "Sellers can update own listings"
  on "public"."marketplace_listings"
  as permissive
  for update
  to public
using (((auth.uid())::text = (seller_public_key)::text));


CREATE TRIGGER update_artist_tokens_updated_at BEFORE UPDATE ON public.artist_tokens FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_marketplace_listings_updated_at BEFORE UPDATE ON public.marketplace_listings FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_token_metadata_updated_at BEFORE UPDATE ON public.token_metadata FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


