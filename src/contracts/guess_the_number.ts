import * as Client from "guess_the_number";
import { rpcUrl } from "./util";

export default new Client.Client({
  networkPassphrase: "Standalone Network ; February 2017",
  contractId: "CDJ6Q4FI7CKCXOHC5W4RTSPHGINKYY4RA6QOGALR7DMT3JPHD2T5DGV6",
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
