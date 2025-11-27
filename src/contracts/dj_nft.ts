import * as Client from "dj_nft";
import { rpcUrl } from "./util";

export default new Client.Client({
  networkPassphrase: "Test SDF Network ; September 2015",
  contractId: "CBTROKYE2U7SBP5YM5YSTBQPA7EMJ74VTVW7QBE4YWH7AKLZKA4JQXRQ",
  rpcUrl,
  allowHttp: true,
  publicKey: undefined,
});
