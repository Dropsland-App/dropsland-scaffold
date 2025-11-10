import * as Client from "fungible_allowlist_example";
import { rpcUrl } from "./util";

export default new Client.Client({
  networkPassphrase: "Standalone Network ; February 2017",
  contractId: "CCGKZT5WKRVAR2SHXSROSWODVI2XFTSD56VMEJ5CBO5OL5UZFFRM2CPQ",
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
