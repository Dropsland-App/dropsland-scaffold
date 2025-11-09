import React, { useState } from "react";
import { Button, Layout, Text } from "@stellar/design-system";
import { CreateTokenForm } from "../components/CreateTokenForm";
import { useProfileType } from "../hooks/useProfileType";
import { useWallet } from "../hooks/useWallet";
import { Box } from "../components/layout/Box";
import { createToken } from "../util/createToken";

const Home: React.FC = () => {
  const { profileType } = useProfileType();
  const { address, signTransaction } = useWallet();
  const [showCreateTokenForm, setShowCreateTokenForm] = useState(false);
  const [isCreatingToken, setIsCreatingToken] = useState(false);
  const [tokenCreationError, setTokenCreationError] = useState<string | null>(
    null,
  );
  const [tokenCreationSuccess, setTokenCreationSuccess] = useState<{
    tokenAddress: string;
    transactionHash: string;
  } | null>(null);

  const handleCreateToken = async (tokenName: string, symbol: string) => {
    if (!address) {
      setTokenCreationError("Please connect your wallet first");
      return;
    }

    if (!signTransaction) {
      setTokenCreationError("Wallet signing is not available");
      return;
    }

    setIsCreatingToken(true);
    setTokenCreationError(null);
    setTokenCreationSuccess(null);

    try {
      const result = await createToken({
        owner: address,
        name: tokenName,
        symbol: symbol,
        decimals: 7,
        signTransaction,
      });

      setTokenCreationSuccess(result);
      console.log("Token created successfully:", result);

      // Close the form after a short delay to show success
      setTimeout(() => {
        setShowCreateTokenForm(false);
        setTokenCreationSuccess(null);
      }, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create token";
      setTokenCreationError(errorMessage);
      console.error("Error creating token:", error);
    } finally {
      setIsCreatingToken(false);
    }
  };

  return (
    <Layout.Content>
      <Layout.Inset>
        {/* Hero Section */}
        <Box gap="lg" style={{ marginBottom: "3rem", padding: "2rem 0" }}>
          <Text
            as="h1"
            size="xl"
            style={{
              marginBottom: "1rem",
              color: "#f9fafb",
              fontWeight: "700",
            }}
          >
            Welcome to Dropsland
          </Text>
          <Text
            as="p"
            size="lg"
            style={{
              marginBottom: "1rem",
              color: "#fcd34d",
              fontWeight: "600",
            }}
          >
            Where Music Meets Ownership
          </Text>
          <Text
            as="p"
            size="md"
            style={{
              marginBottom: "1rem",
              maxWidth: "800px",
              color: "#d1d5db",
              lineHeight: "1.6",
            }}
          >
            Dropsland is a Web3 platform where DJs can create their own token
            and share it with their community. Fans can collect exclusive NFTs
            that unlock perks like early track access, private events, and
            special content. Artists can upload their music directly, bypassing
            intermediaries and connecting authentically with their audience.
          </Text>
          <Text
            as="p"
            size="md"
            style={{ maxWidth: "800px", color: "#d1d5db", lineHeight: "1.6" }}
          >
            Everything runs on a transparent, decentralized, and global
            blockchain infrastructure. Dropsland redefines how electronic music
            is shared, supported, and experienced.
          </Text>
        </Box>

        {profileType === "DJ" ? (
          /* DJ Dashboard */
          <Box gap="lg">
            <Box gap="md" style={{ marginBottom: "2rem" }}>
              <Text
                as="h2"
                size="lg"
                style={{ color: "#f9fafb", fontWeight: "600" }}
              >
                DJ Dashboard
              </Text>
              <Text
                as="p"
                size="md"
                style={{ color: "#d1d5db", maxWidth: "600px" }}
              >
                Create your own token and build your community. Share exclusive
                content, offer special perks, and connect directly with your
                fans.
              </Text>
              <Button
                variant="primary"
                size="md"
                onClick={() => setShowCreateTokenForm(true)}
                style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}
              >
                Create Your Token
              </Button>
            </Box>
          </Box>
        ) : (
          /* Fan View */
          <Box gap="lg">
            <Box gap="md">
              <Text
                as="h2"
                size="lg"
                style={{ color: "#f9fafb", fontWeight: "600" }}
              >
                Discover Artists
              </Text>
              <Text
                as="p"
                size="md"
                style={{ color: "#d1d5db", maxWidth: "600px" }}
              >
                Explore the Dropsland community. Collect exclusive NFTs, support
                your favorite DJs, and unlock special perks.
              </Text>
            </Box>
            <Box
              gap="md"
              style={{
                marginTop: "2rem",
                padding: "1.5rem",
                backgroundColor: "#111827",
                border: "1px solid rgba(252, 211, 77, 0.2)",
                borderRadius: "12px",
              }}
            >
              <Text
                as="h3"
                size="md"
                style={{
                  color: "#fcd34d",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Why Dropsland?
              </Text>
              <Box gap="sm">
                <Text
                  as="p"
                  size="sm"
                  style={{ color: "#d1d5db", lineHeight: "1.6" }}
                >
                  •{" "}
                  <strong style={{ color: "#f9fafb" }}>
                    Direct Connection:
                  </strong>{" "}
                  Connect directly with artists, no intermediaries
                </Text>
                <Text
                  as="p"
                  size="sm"
                  style={{ color: "#d1d5db", lineHeight: "1.6" }}
                >
                  •{" "}
                  <strong style={{ color: "#f9fafb" }}>Exclusive Perks:</strong>{" "}
                  Unlock early access, private events, and special content
                </Text>
                <Text
                  as="p"
                  size="sm"
                  style={{ color: "#d1d5db", lineHeight: "1.6" }}
                >
                  • <strong style={{ color: "#f9fafb" }}>Ownership:</strong> Own
                  your NFTs and tokens on the blockchain
                </Text>
                <Text
                  as="p"
                  size="sm"
                  style={{ color: "#d1d5db", lineHeight: "1.6" }}
                >
                  • <strong style={{ color: "#f9fafb" }}>Transparency:</strong>{" "}
                  Built on decentralized, transparent blockchain infrastructure
                </Text>
              </Box>
            </Box>
          </Box>
        )}
      </Layout.Inset>
      <CreateTokenForm
        visible={showCreateTokenForm}
        onClose={() => {
          setShowCreateTokenForm(false);
          setTokenCreationError(null);
          setTokenCreationSuccess(null);
        }}
        onSubmit={handleCreateToken}
        isSubmitting={isCreatingToken}
        error={tokenCreationError}
        success={tokenCreationSuccess}
      />
    </Layout.Content>
  );
};

export default Home;
