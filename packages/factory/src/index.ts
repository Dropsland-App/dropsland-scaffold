import { Buffer } from "buffer";
import { Address } from "@stellar/stellar-sdk";
import {
  AssembledTransaction,
  Client as ContractClient,
  ClientOptions as ContractClientOptions,
  MethodOptions,
  Result,
  Spec as ContractSpec,
} from "@stellar/stellar-sdk/contract";
import type {
  u32,
  i32,
  u64,
  i64,
  u128,
  i128,
  u256,
  i256,
  Option,
  Typepoint,
  Duration,
} from "@stellar/stellar-sdk/contract";
export * from "@stellar/stellar-sdk";
export * as contract from "@stellar/stellar-sdk/contract";
export * as rpc from "@stellar/stellar-sdk/rpc";

if (typeof window !== "undefined") {
  //@ts-ignore Buffer exists
  window.Buffer = window.Buffer || Buffer;
}

export const networks = {
  testnet: {
    networkPassphrase: "Test SDF Network ; September 2015",
    contractId: "CAMR3MNJVTMKRHTSGOLDG3QMOI2KX2RGAHT5I4OKQ3735PDQWAFAYTNR",
  },
} as const;

export type DataKey =
  | { tag: "Admin"; values: void }
  | { tag: "Token"; values: void }
  | { tag: "FungibleWasm"; values: void }
  | { tag: "NftWasm"; values: void }
  | { tag: "DeployNonce"; values: void }
  | { tag: "TokenRegistry"; values: void }
  | { tag: "TokenInfo"; values: readonly [string] };

export const Errors = {
  0: { message: "ContractInitialized" },
  1: { message: "ContractNotInitialized" },
  2: { message: "AmountMustBePositive" },
  3: { message: "UnauthorizedAccess" },
  4: { message: "TokenNotFound" },
  5: { message: "InvalidArgument" },
};

export enum TokenType {
  Sac = 0,
  Custom = 1,
  Fungible = 2,
  Nft = 3,
}

export interface RegistryEntry {
  issuer: string;
  token_type: TokenType;
}

export interface Client {
  /**
   * Construct and simulate a deploy transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  deploy: (
    {
      wasm_hash,
      salt,
      constructor_args,
      token_type,
    }: {
      wasm_hash: Buffer;
      salt: Buffer;
      constructor_args: Array<any>;
      token_type: TokenType;
    },
    options?: {
      /**
       * The fee to pay for the transaction. Default: BASE_FEE
       */
      fee?: number;

      /**
       * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
       */
      timeoutInSeconds?: number;

      /**
       * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
       */
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<Result<string>>>;

  /**
   * Construct and simulate a deploy_sac transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  deploy_sac: (
    { issuer, serialized_asset }: { issuer: string; serialized_asset: Buffer },
    options?: {
      /**
       * The fee to pay for the transaction. Default: BASE_FEE
       */
      fee?: number;

      /**
       * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
       */
      timeoutInSeconds?: number;

      /**
       * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
       */
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<string>>;

  /**
   * Construct and simulate a create_fungible transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  create_fungible: (
    {
      owner,
      decimals,
      name,
      symbol,
    }: { owner: string; decimals: u32; name: string; symbol: string },
    options?: {
      /**
       * The fee to pay for the transaction. Default: BASE_FEE
       */
      fee?: number;

      /**
       * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
       */
      timeoutInSeconds?: number;

      /**
       * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
       */
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<Result<string>>>;

  /**
   * Construct and simulate a create_nft transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  create_nft: (
    {
      owner,
      base_uri,
      name,
      symbol,
    }: { owner: string; base_uri: string; name: string; symbol: string },
    options?: {
      /**
       * The fee to pay for the transaction. Default: BASE_FEE
       */
      fee?: number;

      /**
       * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
       */
      timeoutInSeconds?: number;

      /**
       * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
       */
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<Result<string>>>;

  /**
   * Construct and simulate a get_token_info transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_token_info: (
    { token_addr }: { token_addr: string },
    options?: {
      /**
       * The fee to pay for the transaction. Default: BASE_FEE
       */
      fee?: number;

      /**
       * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
       */
      timeoutInSeconds?: number;

      /**
       * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
       */
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<Result<RegistryEntry>>>;

  /**
   * Construct and simulate a get_all_tokens transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_all_tokens: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Result<Array<string>>>>;

  /**
   * Construct and simulate a get_fungible_metadata transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_fungible_metadata: (
    { token_addr }: { token_addr: string },
    options?: {
      /**
       * The fee to pay for the transaction. Default: BASE_FEE
       */
      fee?: number;

      /**
       * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
       */
      timeoutInSeconds?: number;

      /**
       * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
       */
      simulate?: boolean;
    },
  ) => Promise<AssembledTransaction<readonly [string, string, u32, string]>>;

  /**
   * Construct and simulate a get_fungible_wasm transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_fungible_wasm: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Result<Buffer>>>;

  /**
   * Construct and simulate a get_nft_wasm transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
   */
  get_nft_wasm: (options?: {
    /**
     * The fee to pay for the transaction. Default: BASE_FEE
     */
    fee?: number;

    /**
     * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
     */
    timeoutInSeconds?: number;

    /**
     * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
     */
    simulate?: boolean;
  }) => Promise<AssembledTransaction<Result<Buffer>>>;
}
export class Client extends ContractClient {
  static async deploy<T = Client>(
    /** Constructor/Initialization Args for the contract's `__constructor` method */
    {
      admin,
      token,
      fungible_wasm,
      nft_wasm,
    }: {
      admin: string;
      token: string;
      fungible_wasm: Buffer;
      nft_wasm: Buffer;
    },
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options: MethodOptions &
      Omit<ContractClientOptions, "contractId"> & {
        /** The hash of the Wasm blob, which must already be installed on-chain. */
        wasmHash: Buffer | string;
        /** Salt used to generate the contract's ID. Passed through to {@link Operation.createCustomContract}. Default: random. */
        salt?: Buffer | Uint8Array;
        /** The format used to decode `wasmHash`, if it's provided as a string. */
        format?: "hex" | "base64";
      },
  ): Promise<AssembledTransaction<T>> {
    return ContractClient.deploy(
      { admin, token, fungible_wasm, nft_wasm },
      options,
    );
  }
  constructor(public readonly options: ContractClientOptions) {
    super(
      new ContractSpec([
        "AAAAAAAAAAAAAAANX19jb25zdHJ1Y3RvcgAAAAAAAAQAAAAAAAAABWFkbWluAAAAAAAAEwAAAAAAAAAFdG9rZW4AAAAAAAATAAAAAAAAAA1mdW5naWJsZV93YXNtAAAAAAAD7gAAACAAAAAAAAAACG5mdF93YXNtAAAD7gAAACAAAAABAAAD6QAAA+0AAAAAAAAAAw==",
        "AAAAAAAAAAAAAAAGZGVwbG95AAAAAAAEAAAAAAAAAAl3YXNtX2hhc2gAAAAAAAPuAAAAIAAAAAAAAAAEc2FsdAAAA+4AAAAgAAAAAAAAABBjb25zdHJ1Y3Rvcl9hcmdzAAAD6gAAAAAAAAAAAAAACnRva2VuX3R5cGUAAAAAB9AAAAAJVG9rZW5UeXBlAAAAAAAAAQAAA+kAAAATAAAAAw==",
        "AAAAAAAAAAAAAAAKZGVwbG95X3NhYwAAAAAAAgAAAAAAAAAGaXNzdWVyAAAAAAATAAAAAAAAABBzZXJpYWxpemVkX2Fzc2V0AAAADgAAAAEAAAAT",
        "AAAAAAAAAAAAAAAPY3JlYXRlX2Z1bmdpYmxlAAAAAAQAAAAAAAAABW93bmVyAAAAAAAAEwAAAAAAAAAIZGVjaW1hbHMAAAAEAAAAAAAAAARuYW1lAAAAEAAAAAAAAAAGc3ltYm9sAAAAAAAQAAAAAQAAA+kAAAATAAAAAw==",
        "AAAAAAAAAAAAAAAKY3JlYXRlX25mdAAAAAAABAAAAAAAAAAFb3duZXIAAAAAAAATAAAAAAAAAAhiYXNlX3VyaQAAABAAAAAAAAAABG5hbWUAAAAQAAAAAAAAAAZzeW1ib2wAAAAAABAAAAABAAAD6QAAABMAAAAD",
        "AAAAAAAAAAAAAAAOZ2V0X3Rva2VuX2luZm8AAAAAAAEAAAAAAAAACnRva2VuX2FkZHIAAAAAABMAAAABAAAD6QAAB9AAAAANUmVnaXN0cnlFbnRyeQAAAAAAAAM=",
        "AAAAAAAAAAAAAAAOZ2V0X2FsbF90b2tlbnMAAAAAAAAAAAABAAAD6QAAA+oAAAATAAAAAw==",
        "AAAAAAAAAAAAAAAVZ2V0X2Z1bmdpYmxlX21ldGFkYXRhAAAAAAAAAQAAAAAAAAAKdG9rZW5fYWRkcgAAAAAAEwAAAAEAAAPtAAAABAAAABAAAAAQAAAABAAAABM=",
        "AAAAAAAAAAAAAAARZ2V0X2Z1bmdpYmxlX3dhc20AAAAAAAAAAAAAAQAAA+kAAAPuAAAAIAAAAAM=",
        "AAAAAAAAAAAAAAAMZ2V0X25mdF93YXNtAAAAAAAAAAEAAAPpAAAD7gAAACAAAAAD",
        "AAAAAgAAAAAAAAAAAAAAB0RhdGFLZXkAAAAABwAAAAAAAAAAAAAABUFkbWluAAAAAAAAAAAAAAAAAAAFVG9rZW4AAAAAAAAAAAAAAAAAAAxGdW5naWJsZVdhc20AAAAAAAAAAAAAAAdOZnRXYXNtAAAAAAAAAAAAAAAAC0RlcGxveU5vbmNlAAAAAAAAAAAAAAAADVRva2VuUmVnaXN0cnkAAAAAAAABAAAAAAAAAAlUb2tlbkluZm8AAAAAAAABAAAAEw==",
        "AAAABAAAAAAAAAAAAAAABUVycm9yAAAAAAAABgAAAAAAAAATQ29udHJhY3RJbml0aWFsaXplZAAAAAAAAAAAAAAAABZDb250cmFjdE5vdEluaXRpYWxpemVkAAAAAAABAAAAAAAAABRBbW91bnRNdXN0QmVQb3NpdGl2ZQAAAAIAAAAAAAAAElVuYXV0aG9yaXplZEFjY2VzcwAAAAAAAwAAAAAAAAANVG9rZW5Ob3RGb3VuZAAAAAAAAAQAAAAAAAAAD0ludmFsaWRBcmd1bWVudAAAAAAF",
        "AAAAAwAAAAAAAAAAAAAACVRva2VuVHlwZQAAAAAAAAQAAAAAAAAAA1NhYwAAAAAAAAAAAAAAAAZDdXN0b20AAAAAAAEAAAAAAAAACEZ1bmdpYmxlAAAAAgAAAAAAAAADTmZ0AAAAAAM=",
        "AAAAAQAAAAAAAAAAAAAADVJlZ2lzdHJ5RW50cnkAAAAAAAACAAAAAAAAAAZpc3N1ZXIAAAAAABMAAAAAAAAACnRva2VuX3R5cGUAAAAAB9AAAAAJVG9rZW5UeXBlAAAA",
      ]),
      options,
    );
  }
  public readonly fromJSON = {
    deploy: this.txFromJSON<Result<string>>,
    deploy_sac: this.txFromJSON<string>,
    create_fungible: this.txFromJSON<Result<string>>,
    create_nft: this.txFromJSON<Result<string>>,
    get_token_info: this.txFromJSON<Result<RegistryEntry>>,
    get_all_tokens: this.txFromJSON<Result<Array<string>>>,
    get_fungible_metadata: this.txFromJSON<
      readonly [string, string, u32, string]
    >,
    get_fungible_wasm: this.txFromJSON<Result<Buffer>>,
    get_nft_wasm: this.txFromJSON<Result<Buffer>>,
  };
}
