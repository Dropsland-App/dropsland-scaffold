import * as Client from "factory";
import { rpcUrl } from "./util";

export default new Client.Client({
  networkPassphrase: "Test SDF Network ; September 2015",
  contractId: "CCY4WLOEC2CF6FEJGPZ4SKEXEPOGPIRIRFGMOEJAOI74EWN2EUWNZN4S",
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
