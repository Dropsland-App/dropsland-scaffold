-- ============================================
-- SCHEMA DE BASE DE DATOS PARA PLATAFORMA DE TOKENS
-- Compatible con Supabase/PostgreSQL
-- ============================================

-- Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- TABLA PRINCIPAL: artist_tokens
-- ============================================
CREATE TABLE artist_tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Información del artista
    artist_public_key VARCHAR(56) NOT NULL,
    artist_email VARCHAR(255),
    artist_name VARCHAR(255),
    
    -- Información del token
    token_code VARCHAR(12) NOT NULL,
    token_name VARCHAR(255) NOT NULL,
    total_supply DECIMAL(20, 7) NOT NULL,
    description TEXT,
    image_url TEXT,
    
    -- Configuración de distribución
    platform_fee_bps INTEGER NOT NULL DEFAULT 1000, -- 1000 = 10%
    distribution_public_key VARCHAR(56) NOT NULL,
    distribution_secret_encrypted TEXT NOT NULL, -- Encriptado con AES-256-GCM
    
    -- Montos finales de distribución
    artist_amount DECIMAL(20, 7),
    platform_amount DECIMAL(20, 7),
    
    -- Estado del proceso
    status VARCHAR(50) NOT NULL DEFAULT 'created',
    -- Estados posibles:
    -- 'created' -> Token registrado en DB
    -- 'trustline_created' -> Trustline establecida
    -- 'tokens_emitted' -> Artista emitió los tokens
    -- 'distributed' -> Distribución completada
    -- 'failed' -> Error en el proceso
    
    -- Hashes de transacciones (para auditoría y transparencia)
    trustline_tx_hash VARCHAR(64),
    emission_tx_hash VARCHAR(64),
    distribution_tx_hash VARCHAR(64),
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    trustline_created_at TIMESTAMP WITH TIME ZONE,
    emitted_at TIMESTAMP WITH TIME ZONE,
    distributed_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT unique_token_per_artist UNIQUE (token_code, artist_public_key),
    CONSTRAINT valid_supply CHECK (total_supply > 0),
    CONSTRAINT valid_fee CHECK (platform_fee_bps >= 0 AND platform_fee_bps <= 2000)
);

-- ============================================
-- TABLA: token_distributions (para auditoría)
-- ============================================
CREATE TABLE token_distributions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,
    
    -- Información de distribución
    artist_public_key VARCHAR(56) NOT NULL,
    artist_amount DECIMAL(20, 7) NOT NULL,
    platform_amount DECIMAL(20, 7) NOT NULL,
    
    -- Hash de la transacción en Stellar
    tx_hash VARCHAR(64) NOT NULL,
    
    -- Metadata adicional
    distributed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT valid_artist_amount CHECK (artist_amount >= 0),
    CONSTRAINT valid_platform_amount CHECK (platform_amount >= 0)
);

-- ============================================
-- TABLA: token_metadata (información adicional)
-- ============================================
CREATE TABLE token_metadata (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,
    
    -- Metadata extendida
    website_url TEXT,
    twitter_handle VARCHAR(100),
    instagram_handle VARCHAR(100),
    discord_url TEXT,
    telegram_url TEXT,
    
    -- Información del token
    category VARCHAR(50), -- 'music', 'art', 'sports', etc.
    tags TEXT[], -- Array de tags
    
    -- Stats
    total_holders INTEGER DEFAULT 0,
    total_transactions INTEGER DEFAULT 0,
    market_cap_xlm DECIMAL(20, 7),
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLA: token_transactions (historial de transacciones)
-- ============================================
CREATE TABLE token_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,
    
    -- Información de la transacción
    tx_hash VARCHAR(64) NOT NULL,
    tx_type VARCHAR(50) NOT NULL, -- 'payment', 'trade', 'burn', etc.
    
    -- Partes involucradas
    from_address VARCHAR(56),
    to_address VARCHAR(56),
    
    -- Montos
    amount DECIMAL(20, 7) NOT NULL,
    
    -- Stellar ledger info
    ledger_sequence INTEGER,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT unique_tx_hash UNIQUE (tx_hash)
);

-- ============================================
-- TABLA: marketplace_listings (para venta de tokens)
-- ============================================
CREATE TABLE marketplace_listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,
    
    -- Información del vendedor
    seller_public_key VARCHAR(56) NOT NULL,
    
    -- Detalles de la venta
    amount_for_sale DECIMAL(20, 7) NOT NULL,
    price_per_token_xlm DECIMAL(20, 7) NOT NULL,
    total_price_xlm DECIMAL(20, 7) GENERATED ALWAYS AS (amount_for_sale * price_per_token_xlm) STORED,
    
    -- Estado
    status VARCHAR(50) NOT NULL DEFAULT 'active',
    -- Estados: 'active', 'partial', 'completed', 'cancelled'
    
    amount_sold DECIMAL(20, 7) DEFAULT 0,
    amount_remaining DECIMAL(20, 7) GENERATED ALWAYS AS (amount_for_sale - amount_sold) STORED,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    expires_at TIMESTAMP WITH TIME ZONE,
    
    -- Constraints
    CONSTRAINT valid_sale_amount CHECK (amount_for_sale > 0),
    CONSTRAINT valid_price CHECK (price_per_token_xlm > 0)
);

-- ============================================
-- TABLA: marketplace_sales (historial de ventas)
-- ============================================
CREATE TABLE marketplace_sales (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    listing_id UUID NOT NULL REFERENCES marketplace_listings(id) ON DELETE CASCADE,
    token_id UUID NOT NULL REFERENCES artist_tokens(id) ON DELETE CASCADE,
    
    -- Información de la venta
    buyer_public_key VARCHAR(56) NOT NULL,
    seller_public_key VARCHAR(56) NOT NULL,
    
    -- Montos
    amount DECIMAL(20, 7) NOT NULL,
    price_per_token_xlm DECIMAL(20, 7) NOT NULL,
    total_price_xlm DECIMAL(20, 7) NOT NULL,
    
    -- Comisión de la plataforma (2-5%)
    platform_fee_xlm DECIMAL(20, 7),
    
    -- Hash de la transacción en Stellar
    tx_hash VARCHAR(64) NOT NULL,
    
    -- Timestamps
    sold_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- TABLA: rewards (definiciones de recompensas NFT)
-- ============================================
CREATE TABLE rewards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    artist_public_key VARCHAR(56) NOT NULL,
    nft_contract_id VARCHAR(56) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para búsquedas rápidas
CREATE INDEX idx_rewards_artist ON rewards(artist_public_key);
CREATE INDEX idx_rewards_contract ON rewards(nft_contract_id);

-- ============================================
-- TABLA: platform_analytics (métricas de la plataforma)
-- ============================================
CREATE TABLE platform_analytics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Métricas generales
    total_tokens_created INTEGER DEFAULT 0,
    total_artists INTEGER DEFAULT 0,
    total_tokens_distributed DECIMAL(30, 7) DEFAULT 0,
    total_xlm_volume DECIMAL(30, 7) DEFAULT 0,
    
    -- Ingresos de la plataforma
    total_platform_fees_tokens DECIMAL(30, 7) DEFAULT 0,
    total_platform_fees_xlm DECIMAL(30, 7) DEFAULT 0,
    
    -- Por período
    period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT unique_period UNIQUE (period_start, period_end)
);

-- ============================================
-- ÍNDICES PARA MEJORAR PERFORMANCE
-- ============================================

-- Índices para búsquedas frecuentes
CREATE INDEX idx_artist_tokens_artist ON artist_tokens(artist_public_key);
CREATE INDEX idx_artist_tokens_code ON artist_tokens(token_code);
CREATE INDEX idx_artist_tokens_status ON artist_tokens(status);
CREATE INDEX idx_artist_tokens_created ON artist_tokens(created_at DESC);

CREATE INDEX idx_token_distributions_token ON token_distributions(token_id);
CREATE INDEX idx_token_distributions_date ON token_distributions(distributed_at DESC);

CREATE INDEX idx_marketplace_listings_token ON marketplace_listings(token_id);
CREATE INDEX idx_marketplace_listings_seller ON marketplace_listings(seller_public_key);
CREATE INDEX idx_marketplace_listings_status ON marketplace_listings(status);
CREATE INDEX idx_marketplace_listings_active ON marketplace_listings(status, expires_at) 
    WHERE status = 'active';

CREATE INDEX idx_marketplace_sales_token ON marketplace_sales(token_id);
CREATE INDEX idx_marketplace_sales_buyer ON marketplace_sales(buyer_public_key);
CREATE INDEX idx_marketplace_sales_date ON marketplace_sales(sold_at DESC);

CREATE INDEX idx_token_transactions_token ON token_transactions(token_id);
CREATE INDEX idx_token_transactions_hash ON token_transactions(tx_hash);
CREATE INDEX idx_token_transactions_date ON token_transactions(created_at DESC);

-- ============================================
-- FUNCIONES Y TRIGGERS
-- ============================================

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para updated_at
CREATE TRIGGER update_artist_tokens_updated_at BEFORE UPDATE ON artist_tokens
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_marketplace_listings_updated_at BEFORE UPDATE ON marketplace_listings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_token_metadata_updated_at BEFORE UPDATE ON token_metadata
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS) - Opcional con Supabase
-- ============================================

-- Habilitar RLS en tablas principales
ALTER TABLE artist_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace_listings ENABLE ROW LEVEL SECURITY;

-- Política: Los artistas pueden ver solo sus propios tokens
CREATE POLICY "Artists can view own tokens" ON artist_tokens
    FOR SELECT
    USING (auth.uid()::text = artist_public_key);

-- Política: Todos pueden ver tokens distribuidos (para el explorador público)
CREATE POLICY "Anyone can view distributed tokens" ON artist_tokens
    FOR SELECT
    USING (status = 'distributed');

-- Política: Todos pueden ver listings activos
CREATE POLICY "Anyone can view active listings" ON marketplace_listings
    FOR SELECT
    USING (status = 'active');

-- Política: Solo el seller puede actualizar sus listings
CREATE POLICY "Sellers can update own listings" ON marketplace_listings
    FOR UPDATE
    USING (auth.uid()::text = seller_public_key);

-- ============================================
-- VISTAS ÚTILES
-- ============================================

-- Vista: Resumen de tokens por artista
CREATE OR REPLACE VIEW artist_token_summary AS
SELECT 
    artist_public_key,
    COUNT(*) as total_tokens,
    SUM(CASE WHEN status = 'distributed' THEN 1 ELSE 0 END) as distributed_tokens,
    SUM(artist_amount) as total_artist_tokens,
    SUM(platform_amount) as total_platform_fees
FROM artist_tokens
GROUP BY artist_public_key;

-- Vista: Top tokens por volumen
CREATE OR REPLACE VIEW top_tokens_by_volume AS
SELECT 
    at.id,
    at.token_code,
    at.token_name,
    at.artist_public_key,
    COUNT(DISTINCT ms.id) as total_sales,
    SUM(ms.amount) as total_volume_tokens,
    SUM(ms.total_price_xlm) as total_volume_xlm
FROM artist_tokens at
LEFT JOIN marketplace_sales ms ON at.id = ms.token_id
WHERE at.status = 'distributed'
GROUP BY at.id, at.token_code, at.token_name, at.artist_public_key
ORDER BY total_volume_xlm DESC NULLS LAST;

-- ============================================
-- DATOS DE EJEMPLO (SOLO PARA DESARROLLO)
-- ============================================

-- Insertar un token de ejemplo
-- INSERT INTO artist_tokens (
--     artist_public_key,
--     artist_email,
--     artist_name,
--     token_code,
--     token_name,
--     total_supply,
--     description,
--     platform_fee_bps,
--     distribution_public_key,
--     distribution_secret_encrypted,
--     status
-- ) VALUES (
--     'GARTIST123EXAMPLE456...',
--     'artist@example.com',
--     'Bad Bunny',
--     'BADBNNY',
--     'Bad Bunny Fan Token',
--     1000000,
--     'Token oficial para fans de Bad Bunny',
--     1000,
--     'GDIST123EXAMPLE456...',
--     'encrypted_secret_here',
--     'created'
-- );

-- ============================================
-- FUNCIONES DE CONSULTA ÚTILES
-- ============================================

-- Función: Obtener estadísticas de un token
CREATE OR REPLACE FUNCTION get_token_stats(token_uuid UUID)
RETURNS TABLE (
    total_holders BIGINT,
    total_transactions BIGINT,
    total_volume_xlm NUMERIC,
    avg_price_xlm NUMERIC
) AS $$
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
$$ LANGUAGE plpgsql;

-- ============================================
-- PERMISOS
-- ============================================

-- Dar permisos a service_role para todas las operaciones
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;

-- Dar permisos de lectura a authenticated users (ajustar según necesidad)
GRANT SELECT ON artist_token_summary TO authenticated;
GRANT SELECT ON top_tokens_by_volume TO authenticated;
