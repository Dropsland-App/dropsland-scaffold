import type { Result } from "@stellar/stellar-sdk/contract";

interface ResultLike<T> {
  isOk(): boolean;
  unwrap(): T;
  unwrapErr(): { message?: string } | string;
}

export function unwrapResult<T>(
  result: Result<T> | undefined,
  label: string,
): T {
  const typed = result as ResultLike<T> | undefined;
  if (!typed || typeof typed.isOk !== "function") {
    throw new Error(`${label}: missing result payload`);
  }

  if (!typed.isOk()) {
    const err = typed.unwrapErr();
    const message =
      typeof err === "string"
        ? err
        : err?.message || `Unknown error while executing ${label}`;
    throw new Error(message);
  }

  return typed.unwrap();
}
