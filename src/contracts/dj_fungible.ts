import * as Client from "dj_fungible";
import { rpcUrl } from "./util";

export default new Client.Client({
  networkPassphrase: "Standalone Network ; February 2017",
  contractId: "CAKI2FPNYMC4TIS2VBSFY5V22ZN6LPNDQTZJNHSLUZVI6IDH3PYTIHJX",
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
