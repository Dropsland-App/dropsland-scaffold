import React from "react";
import { Layout, Text, Card, Button } from "@stellar/design-system";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { Box } from "../components/layout/Box";

const Profile: React.FC = () => {
  const { profileType } = useProfileType();
  const { address } = useWallet();

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
              Profile
            </Text>
            <Text as="p" size="md" style={{ color: "#d1d5db" }}>
              {profileType === "DJ"
                ? "Manage your artist profile, tokens, and community"
                : "View your collected NFTs, tokens, and favorite artists"}
            </Text>
          </Box>

          {/* Profile Info */}
          <div
            style={{
              backgroundColor: "#111827",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <Card>
              <Box gap="sm">
                <Text
                  as="h2"
                  size="md"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  {profileType === "DJ" ? "Artist Profile" : "Fan Profile"}
                </Text>
                <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                  Profile Type:{" "}
                  <strong style={{ color: "#fcd34d" }}>{profileType}</strong>
                </Text>
                {address && (
                  <Text
                    as="p"
                    size="xs"
                    style={{
                      wordBreak: "break-all",
                      fontFamily: "monospace",
                      color: "#9ca3af",
                      backgroundColor: "#030712",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      marginTop: "0.5rem",
                    }}
                  >
                    Wallet: {address}
                  </Text>
                )}
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                >
                  Edit Profile
                </Button>
              </Box>
            </Card>
          </div>

          {profileType === "DJ" ? (
            /* DJ Profile View */
            <Box gap="lg">
              {/* Created Tokens */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Your Tokens
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Tokens you've created for your community
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        No tokens created yet. Create your first token to start
                        building your community!
                      </Text>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Uploaded Music */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Your Music
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Tracks you've uploaded directly to the platform
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        No tracks uploaded yet. Upload your first track to share
                        with your community!
                      </Text>
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled
                        style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
                      >
                        Upload Music
                      </Button>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Community Stats */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Community Stats
                </Text>
                <Box gap="md" direction="row" wrap="wrap">
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          Token Holders
                        </Text>
                      </Box>
                    </Card>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          NFTs Minted
                        </Text>
                      </Box>
                    </Card>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          Tracks Uploaded
                        </Text>
                      </Box>
                    </Card>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          Total Plays
                        </Text>
                      </Box>
                    </Card>
                  </div>
                </Box>
              </Box>

              {/* Fan Base */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Your Fan Base
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Connect with your community and see who's supporting your
                  music
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        Your fan base will appear here as people collect your
                        tokens and NFTs.
                      </Text>
                    </Box>
                  </Card>
                </div>
              </Box>
            </Box>
          ) : (
            /* Fan Profile View */
            <Box gap="lg">
              {/* Collected NFTs */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Your NFTs
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Exclusive NFTs you've collected from artists
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        No NFTs collected yet. Explore artists and start
                        collecting exclusive NFTs!
                      </Text>
                      <Text
                        as="p"
                        size="sm"
                        style={{
                          marginTop: "1rem",
                          color: "#d1d5db",
                          fontWeight: "600",
                        }}
                      >
                        NFTs unlock perks like:
                      </Text>
                      <Box
                        gap="xs"
                        style={{ marginLeft: "1rem", marginTop: "0.5rem" }}
                      >
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          • Early track access
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          • Private events
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          • Special content
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          • Exclusive merchandise
                        </Text>
                      </Box>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Owned Tokens */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Your Tokens
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Tokens you've collected from artists
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        No tokens collected yet. Support your favorite artists
                        by collecting their tokens!
                      </Text>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Favorite Artists */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Favorite Artists
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Artists you're following and supporting
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        Start following artists to see them here. Explore the
                        platform to discover new talent!
                      </Text>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Unlocked Perks */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Unlocked Perks
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Special perks and benefits you've unlocked through NFTs
                </Text>
                <div
                  style={{
                    backgroundColor: "#111827",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <Card>
                    <Box gap="sm">
                      <Text
                        as="p"
                        size="sm"
                        style={{ fontStyle: "italic", color: "#9ca3af" }}
                      >
                        Collect NFTs to unlock exclusive perks from your
                        favorite artists!
                      </Text>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Collection Stats */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Collection Stats
                </Text>
                <Box gap="md" direction="row" wrap="wrap">
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          NFTs Collected
                        </Text>
                      </Box>
                    </Card>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          Tokens Owned
                        </Text>
                      </Box>
                    </Card>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          Artists Followed
                        </Text>
                      </Box>
                    </Card>
                  </div>
                  <div
                    style={{
                      flex: "1",
                      minWidth: "200px",
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <Card>
                      <Box gap="sm">
                        <Text
                          as="h3"
                          size="md"
                          style={{
                            fontWeight: "700",
                            color: "#fcd34d",
                            fontSize: "1.5rem",
                          }}
                        >
                          0
                        </Text>
                        <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                          Perks Unlocked
                        </Text>
                      </Box>
                    </Card>
                  </div>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Layout.Inset>
    </Layout.Content>
  );
};

export default Profile;
