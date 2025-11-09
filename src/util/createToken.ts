import * as FactoryClient from "factory";
import { rpcUrl, networkPassphrase } from "../contracts/util";
import {
  rpc as StellarRpc,
  TransactionBuilder,
  xdr,
  contract,
} from "@stellar/stellar-sdk";

export interface CreateTokenParams {
  owner: string;
  name: string;
  symbol: string;
  decimals?: number;
  signTransaction: (
    xdr: string,
    opts?: {
      networkPassphrase?: string;
      address?: string;
      path?: string;
      submit?: boolean;
      submitUrl?: string;
    },
  ) => Promise<{ signedTxXdr: string; signerAddress?: string }>;
}

export interface CreateTokenResult {
  tokenAddress: string;
  transactionHash: string;
}

/**
 * Creates a fungible token using the factory contract
 */
export async function createToken({
  owner,
  name,
  symbol,
  decimals = 7, // Default to 7 decimals for Stellar tokens
  signTransaction,
}: CreateTokenParams): Promise<CreateTokenResult> {
  if (!owner) {
    throw new Error("Wallet address is required");
  }

  if (!name || !symbol) {
    throw new Error("Token name and symbol are required");
  }

  // Create a factory client instance with the wallet address as the source account
  const factoryContract = new FactoryClient.Client({
    networkPassphrase,
    contractId: "CBKUHYXGBVEUYZWKFDDD6JOSYWSHCCMGHYVJAUT4BGQYF7TMZCS7MMQN",
    rpcUrl,
    allowHttp: true,
    publicKey: owner, // Set the wallet address as the source account
  });

  // First, check if WASM is installed by getting the hash from factory
  let wasmHash: string | null = null;
  try {
    const wasmHashResult = await factoryContract.get_fungible_wasm();
    if (wasmHashResult && typeof wasmHashResult === "string") {
      wasmHash = wasmHashResult;
    } else if (
      wasmHashResult &&
      typeof wasmHashResult === "object" &&
      "ok" in wasmHashResult
    ) {
      wasmHash = wasmHashResult.ok as string;
    }
  } catch (error) {
    console.warn("Could not retrieve WASM hash from factory:", error);
  }

  // Create the transaction using the factory contract
  let assembledTx;
  try {
    assembledTx = await factoryContract.create_fungible(
      {
        owner,
        decimals,
        name,
        symbol,
      },
      {
        simulate: true, // Simulate first to validate
      },
    );
  } catch (simError: unknown) {
    // Check if simulation failed due to WASM not being installed
    const errorMessage =
      simError instanceof Error ? simError.message : String(simError);
    const errorStr = JSON.stringify(simError);

    // Try to extract WASM hash from error (it might be in diagnostic events)
    let extractedHash: string | null = wasmHash;
    const hashMatch = errorStr.match(/[a-f0-9]{64}/i);
    const errorMessageMatch =
      typeof errorMessage === "string"
        ? errorMessage.match(/[a-f0-9]{64}/i)
        : null;
    const matchedHash = hashMatch?.[0] || errorMessageMatch?.[0];
    if (matchedHash) {
      extractedHash = matchedHash;
    }

    if (
      typeof errorMessage === "string" &&
      (errorMessage.includes("MissingValue") ||
        errorMessage.includes("Wasm does not exist") ||
        errorMessage.includes("Storage"))
    ) {
      const hashDisplay = extractedHash || "unknown";
      const wasmHashInfo = `\n\nWASM Hash required: ${hashDisplay}\n\nTo fix this issue, install the dj-fungible WASM on the network:\n\nOption 1: Use the install script (recommended):\n  ./scripts/install-fungible-wasm.sh\n\nOption 2: Manual installation:\n  1. Build the dj-fungible contract: cd contracts/dj-fungible && make build\n  2. Install the WASM: stellar contract install --wasm target/wasm32v1-none/release/dj_fungible.wasm --network development --source-account me\n  3. Verify the hash matches: ${hashDisplay}\n\nNote: Make sure the installed WASM hash matches the hash stored in the factory contract.`;
      throw new Error(
        `Failed to create token: The fungible token WASM code is not installed on the network.${wasmHashInfo}`,
      );
    }
    throw simError;
  }

  // Get the transaction XDR
  const transactionXdr = assembledTx.toXDR();

  // Prepare the transaction using RPC
  const rpcServer = new StellarRpc.Server(rpcUrl, {
    allowHttp: new URL(rpcUrl).hostname === "localhost",
  });

  const transaction = TransactionBuilder.fromXDR(
    transactionXdr,
    networkPassphrase,
  );

  // Prepare the transaction (this adds resource limits and other required data)
  const preparedTx = await rpcServer.prepareTransaction(transaction);
  const preparedXdr = preparedTx.toXDR();

  // Sign the transaction
  const signResult = await signTransaction(preparedXdr, {
    networkPassphrase,
    address: owner,
  });

  if (!signResult?.signedTxXdr) {
    throw new Error("Transaction signing failed");
  }

  // Send the transaction
  const signedTransaction = TransactionBuilder.fromXDR(
    signResult.signedTxXdr,
    networkPassphrase,
  );

  const sendResult = await rpcServer.sendTransaction(signedTransaction);

  if (String(sendResult.status) !== "PENDING") {
    throw new Error(
      `Transaction failed to submit: ${String(sendResult.status)}`,
    );
  }

  // Wait for the transaction to be confirmed
  let txResponse;
  const MAX_ATTEMPTS = 30;
  let attempts = 0;

  while (attempts++ < MAX_ATTEMPTS) {
    try {
      txResponse = await rpcServer.getTransaction(sendResult.hash);

      if (String(txResponse.status) === "SUCCESS") {
        break;
      } else if (String(txResponse.status) === "FAILED") {
        // Try to extract WASM hash from diagnostic events or error message
        let extractedHash: string | null = wasmHash;
        try {
          // Check if diagnostic events are available
          if (
            "diagnosticEventsXdr" in txResponse &&
            txResponse.diagnosticEventsXdr
          ) {
            const eventsStr = JSON.stringify(txResponse.diagnosticEventsXdr);
            const hashMatch = eventsStr.match(/[a-f0-9]{64}/i);
            if (hashMatch?.[0]) {
              extractedHash = hashMatch[0];
            }
          }
        } catch {
          // Ignore parsing errors
        }

        const hashDisplay = extractedHash || "unknown";
        const wasmHashInfo = `\n\nWASM Hash required: ${hashDisplay}\n\nTo fix this issue, install the dj-fungible WASM on the network:\n\nOption 1: Use the install script (recommended):\n  ./scripts/install-fungible-wasm.sh\n\nOption 2: Manual installation:\n  1. Build the dj-fungible contract: cd contracts/dj-fungible && make build\n  2. Install the WASM: stellar contract install --wasm target/wasm32v1-none/release/dj_fungible.wasm --network development --source-account me\n  3. Verify the hash matches: ${hashDisplay}\n\nCheck the browser console for detailed error information.`;

        throw new Error(
          `Failed to create token: The transaction failed. This is likely because the fungible token WASM code is not installed on the network.${wasmHashInfo}`,
        );
      }
    } catch (error: unknown) {
      // Transaction might not be found yet, wait and retry
      if (attempts >= MAX_ATTEMPTS) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Transaction confirmation timeout: ${errorMessage}`);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }
  }

  if (!txResponse || String(txResponse.status) !== "SUCCESS") {
    throw new Error("Transaction confirmation timeout");
  }

  // Extract the token address from the result
  // Use the factory client's fromJSON method to parse the result
  try {
    if (!("resultXdr" in txResponse) || !txResponse.resultXdr) {
      throw new Error("Transaction result XDR is missing");
    }

    // Get the transaction result XDR
    const txResult = txResponse.resultXdr;

    // Get operation results
    const operationResults = txResult.result().results();
    if (!operationResults || operationResults.length === 0) {
      throw new Error("No operation results found in transaction");
    }

    // Get the invoke host function result
    const operationResult = operationResults[0];
    const invokeResult = operationResult.tr().invokeHostFunctionResult();

    if (!invokeResult) {
      throw new Error("No invoke host function result found");
    }

    // Check if the result is successful
    const success = invokeResult.success();
    if (!success) {
      // If the transaction was marked as successful but the invoke result failed,
      // this might indicate a WASM error or other contract error
      const hashDisplay = wasmHash || "unknown";
      const wasmHashInfo = `\n\nWASM Hash required: ${hashDisplay}\n\nTo fix this issue, install the dj-fungible WASM on the network:\n\nOption 1: Use the install script (recommended):\n  ./scripts/install-fungible-wasm.sh\n\nOption 2: Manual installation:\n  1. Build the dj-fungible contract: cd contracts/dj-fungible && make build\n  2. Install the WASM: stellar contract install --wasm target/wasm32v1-none/release/dj_fungible.wasm --network development --source-account me\n  3. Verify the hash matches: ${hashDisplay}\n\nCheck the browser console for detailed error information.`;

      throw new Error(
        `Contract invocation failed. This is likely because the fungible token WASM code is not installed on the network.${wasmHashInfo}`,
      );
    }

    // The success result is a Buffer containing the ScVal bytes
    // We need to parse it as an ScVal first, then decode it using the contract spec
    // Parse the Buffer to ScVal
    const returnScVal = xdr.ScVal.fromXDR(success);

    // Use the contract spec from the factory package to decode the result
    const contractSpec = new contract.Spec([
      "AAAAAAAAAAAAAAANX19jb25zdHJ1Y3RvcgAAAAAAAAMAAAAAAAAABWFkbWluAAAAAAAAEwAAAAAAAAAFdG9rZW4AAAAAAAATAAAAAAAAAA1mdW5naWJsZV93YXNtAAAAAAAD7gAAACAAAAABAAAD6QAAA+0AAAAAAAAAAw==",
      "AAAAAAAAAAAAAAAGZGVwbG95AAAAAAAEAAAAAAAAAAl3YXNtX2hhc2gAAAAAAAPuAAAAIAAAAAAAAAAEc2FsdAAAA+4AAAAgAAAAAAAAABBjb25zdHJ1Y3Rvcl9hcmdzAAAD6gAAAAAAAAAAAAAACnRva2VuX3R5cGUAAAAAB9AAAAAJVG9rZW5UeXBlAAAAAAAAAQAAA+kAAAATAAAAAw==",
      "AAAAAAAAAAAAAAAKZGVwbG95X3NhYwAAAAAAAgAAAAAAAAAGaXNzdWVyAAAAAAATAAAAAAAAABBzZXJpYWxpemVkX2Fzc2V0AAAADgAAAAEAAAAT",
      "AAAAAAAAAAAAAAAPY3JlYXRlX2Z1bmdpYmxlAAAAAAQAAAAAAAAABW93bmVyAAAAAAAAEwAAAAAAAAAIZGVjaW1hbHMAAAAEAAAAAAAAAARuYW1lAAAAEAAAAAAAAAAGc3ltYm9sAAAAAAAQAAAAAQAAA+kAAAATAAAAAw==",
    ]);

    // Use the contract spec to decode the result to native types
    // funcResToNative takes the function name as a string and the ScVal
    const decodedResults: unknown = contractSpec.funcResToNative(
      "create_fungible",
      returnScVal,
    );

    if (
      !decodedResults ||
      !Array.isArray(decodedResults) ||
      decodedResults.length === 0
    ) {
      throw new Error("Failed to decode contract result");
    }

    // The decoded result should be Result<string>
    const result: unknown = decodedResults[0];

    // Handle Result type - check if it's an object with ok/err properties
    if (result && typeof result === "object" && result !== null) {
      const resultObj = result as Record<string, unknown>;
      if (
        "err" in resultObj &&
        resultObj.err !== null &&
        resultObj.err !== undefined
      ) {
        let errorMsg: string;
        const errValue = resultObj.err;
        if (typeof errValue === "string") {
          errorMsg = errValue;
        } else if (typeof errValue === "object") {
          // Handle objects (including arrays, Error objects, etc.)
          try {
            errorMsg = JSON.stringify(errValue);
          } catch {
            // Fallback if JSON.stringify fails (e.g., circular reference)
            errorMsg = `Error object: ${errValue.constructor?.name || "Unknown"}`;
          }
        } else if (
          typeof errValue === "number" ||
          typeof errValue === "bigint"
        ) {
          errorMsg = errValue.toString();
        } else if (typeof errValue === "boolean") {
          errorMsg = errValue ? "true" : "false";
        } else if (typeof errValue === "symbol") {
          errorMsg = errValue.toString();
        } else {
          // This should never happen, but provide a safe fallback
          errorMsg = "Unknown error type";
        }
        throw new Error(`Token creation failed: ${errorMsg}`);
      }

      if ("ok" in resultObj && resultObj.ok) {
        // Ensure ok is a string
        if (typeof resultObj.ok === "string") {
          return {
            tokenAddress: resultObj.ok,
            transactionHash: sendResult.hash,
          };
        } else if (
          typeof resultObj.ok === "number" ||
          typeof resultObj.ok === "bigint"
        ) {
          return {
            tokenAddress: String(resultObj.ok),
            transactionHash: sendResult.hash,
          };
        } else {
          throw new Error(
            `Token creation failed: Unexpected type for token address: ${typeof resultObj.ok}`,
          );
        }
      }
    }

    // If result is directly a string, use it
    if (typeof result === "string") {
      return {
        tokenAddress: result,
        transactionHash: sendResult.hash,
      };
    }

    throw new Error("Token address not found in decoded result");
  } catch (error) {
    // If parsing fails, check if it's already a helpful error message
    if (error instanceof Error && error.message.includes("WASM")) {
      throw error;
    }

    // If parsing fails, provide a helpful error message
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    // Check for WASM-related errors in the message
    if (
      errorMessage.includes("MissingValue") ||
      errorMessage.includes("Storage") ||
      errorMessage.includes("Wasm does not exist")
    ) {
      // Try to extract hash from error message
      const hashMatch = errorMessage.match(/[a-f0-9]{64}/i);
      const hashDisplay = hashMatch?.[0] || wasmHash || "unknown";
      const wasmHashInfo = `\n\nWASM Hash required: ${hashDisplay}\n\nTo fix this issue, install the dj-fungible WASM on the network:\n\nOption 1: Use the install script (recommended):\n  ./scripts/install-fungible-wasm.sh\n\nOption 2: Manual installation:\n  1. Build the dj-fungible contract: cd contracts/dj-fungible && make build\n  2. Install the WASM: stellar contract install --wasm target/wasm32v1-none/release/dj_fungible.wasm --network development --source-account me\n  3. Verify the hash matches: ${hashDisplay}`;
      throw new Error(
        `Failed to create token: The fungible token WASM code is not installed on the network.${wasmHashInfo}`,
      );
    }

    throw new Error(
      `Failed to parse token address from transaction result: ${errorMessage}. Transaction hash: ${sendResult.hash}`,
    );
  }
}
