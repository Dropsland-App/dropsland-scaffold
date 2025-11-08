import React, { useState } from "react";
import { Layout, Text, Button, Input } from "@stellar/design-system";
import { Box } from "../components/layout/Box";
import { BuyDialog } from "../components/BuyDialog";

interface Artist {
  id: string;
  name: string;
  handle: string;
  avatar?: string;
  genres: string[];
  isFeatured: boolean;
  tokenSymbol?: string;
}

const Explore: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "artists" | "tokens" | "nfts">(
    "all",
  );
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isBuyDialogOpen, setIsBuyDialogOpen] = useState(false);

  // Sample artist data
  const artists: Artist[] = [
    {
      id: "1",
      name: "iamjuampi",
      handle: "iamjuampi",
      genres: ["Tech-House"],
      isFeatured: true,
      tokenSymbol: "JUAMPI",
    },
    {
      id: "2",
      name: "Banger",
      handle: "banger",
      genres: ["DNB", "Tech-House"],
      isFeatured: true,
      tokenSymbol: "BANG",
    },
  ];

  const handleBuyClick = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsBuyDialogOpen(true);
  };

  const handleBuyConfirm = async (amount: number) => {
    if (!selectedArtist) return;

    // Simulate purchase transaction
    // In a real app, this would call your blockchain/SDK functions
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(`Purchasing ${amount} ${selectedArtist.tokenSymbol} with USDC`);

    // Here you would integrate with your actual purchase logic
    // For example:
    // await purchaseToken(selectedArtist.tokenSymbol, amount);
  };

  return (
    <Layout.Content>
      <Layout.Inset>
        <Box gap="lg">
          {/* Header */}
          <Box gap="md" style={{ padding: "1rem 0" }}>
            <Text
              as="h1"
              size="xl"
              style={{ color: "#f9fafb", fontWeight: "700" }}
            >
              Explore
            </Text>
            <Text as="p" size="md" style={{ color: "#d1d5db" }}>
              Discover artists, tokens, NFTs, and music on Dropsland
            </Text>
          </Box>

          {/* Search and Filters */}
          <Box gap="md" style={{ marginBottom: "2rem" }}>
            <Input
              id="search"
              label="Search"
              fieldSize="md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search artists, tokens, or NFTs..."
            />
            <Box gap="sm" direction="row" wrap="wrap">
              <Button
                variant={filter === "all" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("all")}
                style={{
                  transition: "all 0.2s ease",
                }}
              >
                All
              </Button>
              <Button
                variant={filter === "artists" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("artists")}
                style={{
                  transition: "all 0.2s ease",
                }}
              >
                Artists
              </Button>
              <Button
                variant={filter === "tokens" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("tokens")}
                style={{
                  transition: "all 0.2s ease",
                }}
              >
                Tokens
              </Button>
              <Button
                variant={filter === "nfts" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("nfts")}
                style={{
                  transition: "all 0.2s ease",
                }}
              >
                NFTs
              </Button>
            </Box>
          </Box>

          {/* Artist List */}
          {(filter === "all" || filter === "artists") && (
            <Box gap="md">
              <Box gap="sm">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Artists
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Discover talented DJs and artists creating their own tokens
                  and communities
                </Text>
              </Box>
              <Box gap="sm">
                {artists
                  .filter(() => {
                    if (filter === "artists") return true;
                    if (filter === "all") return true;
                    return false;
                  })
                  .filter((artist) => {
                    if (!searchQuery) return true;
                    const query = searchQuery.toLowerCase();
                    return (
                      artist.name.toLowerCase().includes(query) ||
                      artist.handle.toLowerCase().includes(query) ||
                      artist.genres.some((g) => g.toLowerCase().includes(query))
                    );
                  })
                  .map((artist) => (
                    <div
                      key={artist.id}
                      className="artist-card"
                      style={{
                        backgroundColor: "#111827",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        padding: "1rem 1.5rem",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#1f2937";
                        e.currentTarget.style.borderColor =
                          "rgba(252, 211, 77, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#111827";
                        e.currentTarget.style.borderColor =
                          "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      {/* Avatar */}
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          backgroundColor: "#1f2937",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          border: "2px solid rgba(255, 255, 255, 0.1)",
                          overflow: "hidden",
                        }}
                      >
                        {artist.avatar ? (
                          <img
                            src={artist.avatar}
                            alt={artist.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <Text
                            as="span"
                            size="lg"
                            style={{
                              color: "#fcd34d",
                              fontWeight: "600",
                            }}
                          >
                            {artist.name.charAt(0).toUpperCase()}
                          </Text>
                        )}
                      </div>

                      {/* Artist Info */}
                      <Box gap="xs" style={{ flex: 1, minWidth: 0 }}>
                        <Box
                          direction="row"
                          align="center"
                          gap="xs"
                          style={{ flexWrap: "wrap" }}
                        >
                          <Text
                            as="h3"
                            size="md"
                            style={{
                              fontWeight: "600",
                              color: "#f9fafb",
                              margin: 0,
                            }}
                          >
                            {artist.name}
                          </Text>
                          {artist.isFeatured && (
                            <span
                              style={{
                                color: "#fcd34d",
                                fontSize: "1.25rem",
                                lineHeight: 1,
                                display: "inline-flex",
                                alignItems: "center",
                              }}
                            ></span>
                          )}
                        </Box>
                        <Text
                          as="p"
                          size="sm"
                          style={{
                            color: "#9ca3af",
                            margin: 0,
                          }}
                        >
                          @{artist.handle}
                        </Text>
                        <Box
                          direction="row"
                          gap="xs"
                          wrap="wrap"
                          style={{ marginTop: "0.25rem" }}
                        >
                          {artist.genres.map((genre) => (
                            <span
                              key={genre}
                              style={{
                                backgroundColor: "#1f2937",
                                color: "#f9fafb",
                                padding: "0.25rem 0.75rem",
                                borderRadius: "6px",
                                fontSize: "0.75rem",
                                fontWeight: "500",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                              }}
                            >
                              {genre}
                            </span>
                          ))}
                        </Box>
                      </Box>

                      {/* Buy Button */}
                      <button
                        type="button"
                        onClick={() => handleBuyClick(artist)}
                        style={{
                          backgroundColor: "#fcd34d",
                          color: "#030712",
                          fontWeight: "600",
                          padding: "0.5rem 1.25rem",
                          borderRadius: "8px",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          flexShrink: 0,
                          cursor: "pointer",
                          fontSize: "0.875rem",
                          transition: "all 0.2s ease",
                          whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#fbbf24";
                          e.currentTarget.style.transform = "translateY(-1px)";
                          e.currentTarget.style.boxShadow =
                            "0 4px 8px rgba(252, 211, 77, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#fcd34d";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <span style={{ fontSize: "1rem" }}>💰</span>
                        <span>Buy</span>
                      </button>
                    </div>
                  ))}
              </Box>
            </Box>
          )}
        </Box>
      </Layout.Inset>

      {/* Buy Dialog */}
      {selectedArtist && (
        <BuyDialog
          visible={isBuyDialogOpen}
          onClose={() => {
            setIsBuyDialogOpen(false);
            setSelectedArtist(null);
          }}
          tokenSymbol={selectedArtist.tokenSymbol || ""}
          onConfirm={handleBuyConfirm}
        />
      )}
    </Layout.Content>
  );
};

export default Explore;
