import React from "react";
import { Layout, Text, Card, Button } from "@stellar/design-system";
import { useWallet } from "../hooks/useWallet";
import { useWalletBalance } from "../hooks/useWalletBalance";
import { connectWallet, type Balance } from "../util/wallet";
import { Box } from "../components/layout/Box";

// Type guard to check if balance is a credit asset
const isCreditAsset = (
  balance: Balance,
): balance is Balance & { asset_code: string; asset_issuer: string } => {
  return (
    balance.asset_type !== "native" &&
    balance.asset_type !== "liquidity_pool_shares" &&
    "asset_code" in balance &&
    "asset_issuer" in balance
  );
};

const Wallet: React.FC = () => {
  const { address, isPending } = useWallet();
  const { xlm, balances, isLoading, error } = useWalletBalance();

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
              Wallet
            </Text>
            <Text as="p" size="md" style={{ color: "#d1d5db" }}>
              Manage your assets, tokens, and NFTs on Dropsland
            </Text>
          </Box>

          {!address ? (
            /* Not Connected */
            <div
              style={{
                backgroundColor: "#111827",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
              }}
            >
              <Card>
                <Box gap="md" style={{ padding: "2rem", textAlign: "center" }}>
                  <Text
                    as="h2"
                    size="lg"
                    style={{ color: "#f9fafb", fontWeight: "600" }}
                  >
                    Connect Your Wallet
                  </Text>
                  <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                    Connect your wallet to view your balance, owned tokens,
                    NFTs, and transaction history.
                  </Text>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => void connectWallet()}
                    disabled={isPending}
                    style={{ alignSelf: "center", marginTop: "1rem" }}
                  >
                    {isPending ? "Connecting..." : "Connect Wallet"}
                  </Button>
                </Box>
              </Card>
            </div>
          ) : (
            /* Connected */
            <Box gap="lg">
              {/* Wallet Connection Status */}
              <div
                style={{
                  backgroundColor: "#111827",
                  border: "1px solid rgba(252, 211, 77, 0.3)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <Card>
                  <Box gap="sm">
                    <Text
                      as="h2"
                      size="md"
                      style={{ color: "#fcd34d", fontWeight: "600" }}
                    >
                      Wallet Connected
                    </Text>
                    <Text
                      as="p"
                      size="sm"
                      style={{
                        wordBreak: "break-all",
                        fontFamily: "monospace",
                        color: "#9ca3af",
                        backgroundColor: "#030712",
                        padding: "0.75rem",
                        borderRadius: "6px",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                      }}
                    >
                      {address}
                    </Text>
                  </Box>
                </Card>
              </div>

              {/* Balance */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Balance
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
                      {isLoading ? (
                        <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                          Loading balance...
                        </Text>
                      ) : error ? (
                        <Text as="p" size="md" style={{ color: "#ef4444" }}>
                          {error.message}
                        </Text>
                      ) : (
                        <>
                          <Text
                            as="h3"
                            size="md"
                            style={{
                              fontWeight: "700",
                              color: "#fcd34d",
                              fontSize: "1.5rem",
                            }}
                          >
                            {xlm} XLM
                          </Text>
                          <Text as="p" size="sm" style={{ color: "#9ca3af" }}>
                            Native Stellar balance
                          </Text>
                        </>
                      )}
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
                  Owned Tokens
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Tokens you've collected from artists on Dropsland
                </Text>
                {balances && balances.length > 1 ? (
                  <Box gap="md">
                    {balances.filter(isCreditAsset).map((balance) => (
                      <div
                        key={`${balance.asset_code}-${balance.asset_issuer}`}
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
                          <Box
                            gap="sm"
                            direction="row"
                            justify="space-between"
                            align="center"
                          >
                            <Box gap="xs">
                              <Text
                                as="h3"
                                size="md"
                                style={{ fontWeight: "600", color: "#fcd34d" }}
                              >
                                {balance.asset_code}
                              </Text>
                              <Text
                                as="p"
                                size="sm"
                                style={{ color: "#d1d5db" }}
                              >
                                Balance: {balance.balance}
                              </Text>
                              {balance.asset_issuer && (
                                <Text
                                  as="p"
                                  size="xs"
                                  style={{
                                    fontFamily: "monospace",
                                    color: "#9ca3af",
                                    backgroundColor: "#030712",
                                    padding: "0.5rem",
                                    borderRadius: "4px",
                                    display: "inline-block",
                                  }}
                                >
                                  {balance.asset_issuer.slice(0, 20)}...
                                </Text>
                              )}
                            </Box>
                            <Button variant="secondary" size="sm" disabled>
                              View Details
                            </Button>
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
                          No tokens found. Start collecting tokens from your
                          favorite artists!
                        </Text>
                      </Box>
                    </Card>
                  </div>
                )}
              </Box>

              {/* Owned NFTs */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Owned NFTs
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Exclusive NFTs that unlock special perks and content
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
                        No NFTs in your wallet yet. Explore the platform to
                        collect exclusive NFTs from artists!
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

              {/* Transaction History */}
              <Box gap="md">
                <Text
                  as="h2"
                  size="lg"
                  style={{ color: "#f9fafb", fontWeight: "600" }}
                >
                  Transaction History
                </Text>
                <Text as="p" size="md" style={{ color: "#d1d5db" }}>
                  Recent transactions and activity on your wallet
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
                        No transactions yet. Your transaction history will
                        appear here.
                      </Text>
                    </Box>
                  </Card>
                </div>
              </Box>

              {/* Info Card */}
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
                      About Your Wallet
                    </Text>
                    <Text
                      as="p"
                      size="sm"
                      style={{ color: "#d1d5db", lineHeight: "1.6" }}
                    >
                      Your wallet is your gateway to the Dropsland ecosystem.
                      Collect tokens from artists, mint and own exclusive NFTs,
                      and unlock special perks. All transactions are recorded on
                      the blockchain for complete transparency.
                    </Text>
                  </Box>
                </Card>
              </div>
            </Box>
          )}
        </Box>
      </Layout.Inset>
    </Layout.Content>
  );
};

export default Wallet;
