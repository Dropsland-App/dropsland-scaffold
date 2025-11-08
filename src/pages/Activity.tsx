import React, { useState } from "react";
import { Layout, Text, Card, Button } from "@stellar/design-system";
import { Box } from "../components/layout/Box";

type ActivityType = "all" | "tokens" | "nfts" | "music" | "community";

interface ActivityItem {
  id: string;
  type:
    | "token_purchase"
    | "nft_mint"
    | "music_upload"
    | "community_interaction";
  title: string;
  description: string;
  timestamp: string;
  user?: string;
  artist?: string;
}

const Activity: React.FC = () => {
  const [filter, setFilter] = useState<ActivityType>("all");

  // Placeholder activity data
  const activities: ActivityItem[] = [
    {
      id: "1",
      type: "token_purchase",
      title: "Token Purchase",
      description: "Purchased TOKEN1 from Artist Name",
      timestamp: "2 hours ago",
      artist: "Artist Name",
    },
    {
      id: "2",
      type: "nft_mint",
      title: "NFT Minted",
      description: "Minted exclusive NFT from Artist Name",
      timestamp: "5 hours ago",
      artist: "Artist Name",
    },
    {
      id: "3",
      type: "music_upload",
      title: "New Track Uploaded",
      description: "Artist Name uploaded a new track: 'Track Title'",
      timestamp: "1 day ago",
      artist: "Artist Name",
    },
    {
      id: "4",
      type: "community_interaction",
      title: "Community Update",
      description:
        "New perk unlocked: Early access to Artist Name's latest release",
      timestamp: "2 days ago",
      artist: "Artist Name",
    },
  ];

  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "token_purchase":
        return "💰";
      case "nft_mint":
        return "🖼️";
      case "music_upload":
        return "🎵";
      case "community_interaction":
        return "👥";
      default:
        return "📋";
    }
  };

  const filteredActivities =
    filter === "all"
      ? activities
      : activities.filter((activity) => {
          switch (filter) {
            case "tokens":
              return activity.type === "token_purchase";
            case "nfts":
              return activity.type === "nft_mint";
            case "music":
              return activity.type === "music_upload";
            case "community":
              return activity.type === "community_interaction";
            default:
              return true;
          }
        });

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
              Activity
            </Text>
            <Text as="p" size="md" style={{ color: "#d1d5db" }}>
              Track your activity and interactions on Dropsland
            </Text>
          </Box>

          {/* Filters */}
          <Box gap="md" style={{ marginBottom: "2rem" }}>
            <Text
              as="h2"
              size="md"
              style={{ color: "#f9fafb", fontWeight: "600" }}
            >
              Filter by Type
            </Text>
            <Box gap="sm" direction="row" wrap="wrap">
              <Button
                variant={filter === "all" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("all")}
                style={{ transition: "all 0.2s ease" }}
              >
                All
              </Button>
              <Button
                variant={filter === "tokens" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("tokens")}
                style={{ transition: "all 0.2s ease" }}
              >
                Token Purchases
              </Button>
              <Button
                variant={filter === "nfts" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("nfts")}
                style={{ transition: "all 0.2s ease" }}
              >
                NFT Mints
              </Button>
              <Button
                variant={filter === "music" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("music")}
                style={{ transition: "all 0.2s ease" }}
              >
                Music Uploads
              </Button>
              <Button
                variant={filter === "community" ? "primary" : "secondary"}
                size="sm"
                onClick={() => setFilter("community")}
                style={{ transition: "all 0.2s ease" }}
              >
                Community
              </Button>
            </Box>
          </Box>

          {/* Activity Feed */}
          <Box gap="md">
            <Text
              as="h2"
              size="lg"
              style={{ color: "#f9fafb", fontWeight: "600" }}
            >
              Recent Activity
            </Text>
            {filteredActivities.length > 0 ? (
              <Box gap="md">
                {filteredActivities.map((activity) => (
                  <div
                    key={activity.id}
                    style={{
                      backgroundColor: "#111827",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.backgroundColor = "#1f2937";
                      e.currentTarget.style.borderColor =
                        "rgba(252, 211, 77, 0.3)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.backgroundColor = "#111827";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.1)";
                    }}
                  >
                    <Card>
                      <Box gap="sm" direction="row" align="start">
                        <Box
                          gap="sm"
                          style={{ marginTop: "0.25rem", fontSize: "1.5rem" }}
                        >
                          {getActivityIcon(activity.type)}
                        </Box>
                        <Box gap="xs" style={{ flex: 1 }}>
                          <Box
                            gap="sm"
                            direction="row"
                            justify="space-between"
                            align="center"
                          >
                            <Text
                              as="h3"
                              size="md"
                              style={{ fontWeight: "600", color: "#f9fafb" }}
                            >
                              {activity.title}
                            </Text>
                            <Text as="p" size="xs" style={{ color: "#9ca3af" }}>
                              {activity.timestamp}
                            </Text>
                          </Box>
                          <Text as="p" size="sm" style={{ color: "#d1d5db" }}>
                            {activity.description}
                          </Text>
                          {activity.artist && (
                            <Button
                              variant="tertiary"
                              size="sm"
                              disabled
                              style={{ marginTop: "0.5rem" }}
                            >
                              View {activity.artist}
                            </Button>
                          )}
                        </Box>
                      </Box>
                    </Card>
                  </div>
                ))}
              </Box>
            ) : (
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
                      No activity found for the selected filter. Your activity
                      will appear here as you interact with the platform.
                    </Text>
                  </Box>
                </Card>
              </div>
            )}
          </Box>

          {/* Activity Types Info */}
          <div
            style={{
              backgroundColor: "#111827",
              border: "1px solid rgba(252, 211, 77, 0.2)",
              borderRadius: "12px",
              padding: "1.5rem",
            }}
          >
            <Card>
              <Box gap="sm">
                <Text
                  as="h3"
                  size="md"
                  style={{ color: "#fcd34d", fontWeight: "600" }}
                >
                  Activity Types
                </Text>
                <Box gap="xs">
                  <Text
                    as="p"
                    size="sm"
                    style={{ color: "#d1d5db", lineHeight: "1.6" }}
                  >
                    <strong style={{ color: "#f9fafb" }}>
                      Token Purchases:
                    </strong>{" "}
                    When you buy tokens from artists
                  </Text>
                  <Text
                    as="p"
                    size="sm"
                    style={{ color: "#d1d5db", lineHeight: "1.6" }}
                  >
                    <strong style={{ color: "#f9fafb" }}>NFT Mints:</strong>{" "}
                    When you mint or collect exclusive NFTs
                  </Text>
                  <Text
                    as="p"
                    size="sm"
                    style={{ color: "#d1d5db", lineHeight: "1.6" }}
                  >
                    <strong style={{ color: "#f9fafb" }}>Music Uploads:</strong>{" "}
                    When artists you follow upload new tracks
                  </Text>
                  <Text
                    as="p"
                    size="sm"
                    style={{ color: "#d1d5db", lineHeight: "1.6" }}
                  >
                    <strong style={{ color: "#f9fafb" }}>
                      Community Interactions:
                    </strong>{" "}
                    Perks unlocked, events, and community updates
                  </Text>
                </Box>
              </Box>
            </Card>
          </div>
        </Box>
      </Layout.Inset>
    </Layout.Content>
  );
};

export default Activity;
