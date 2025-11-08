import React from "react";
import { Icon } from "@stellar/design-system";
import { useWallet } from "../hooks/useWallet";
import { stellarNetwork } from "../contracts/util";
import styles from "./NetworkPill.module.css";

// Format network name with first letter capitalized
const formatNetworkName = (name: string) =>
  // TODO: This is a workaround until @creit-tech/stellar-wallets-kit uses the new name for a local network.
  name === "STANDALONE"
    ? "Local"
    : name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

const appNetwork = formatNetworkName(stellarNetwork);

const NetworkPill: React.FC = () => {
  const { network, address } = useWallet();

  // Check if there's a network mismatch
  const walletNetwork = formatNetworkName(network ?? "");
  const isNetworkMismatch = walletNetwork !== appNetwork;

  let title = "";
  let statusClass = styles.neutral;
  let iconColor = "#9ca3af";

  if (!address) {
    title = "Connect your wallet using this network.";
    statusClass = styles.neutral;
    iconColor = "#9ca3af";
  } else if (isNetworkMismatch) {
    title = `Wallet is on ${walletNetwork}, connect to ${appNetwork} instead.`;
    statusClass = styles.error;
    iconColor = "#FF3B30";
  } else {
    statusClass = styles.success;
    iconColor = "#2ED06E";
  }

  return (
    <div className={`${styles.networkPill} ${statusClass}`} title={title}>
      <Icon.Circle color={iconColor} />
      <span className={styles.networkText}>{appNetwork}</span>
    </div>
  );
};

export default NetworkPill;
