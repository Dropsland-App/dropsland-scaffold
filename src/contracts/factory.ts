import * as Client from "factory";
import { rpcUrl } from "./util";

export default new Client.Client({
  networkPassphrase: "Standalone Network ; February 2017",
  contractId: "CB7VSV7T4NOQ6MTNZLNFAEBFPLOHZBSE66M2BX2YCUVUMMQN2XPC2K3U",
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
