export type ValidateAmountResult = { valid: boolean; error?: string; normalized?: string };

export function validateAmount(input: string, options: { maxDecimals?: number } = {}): ValidateAmountResult {
  const maxDecimals = options.maxDecimals ?? 7; // XLM typically uses up to 7 decimals
  const trimmed = (input ?? "").trim();

  if (!trimmed) {
    return { valid: false, error: "Amount is required" };
  }

  // Only digits and optional single dot (no scientific notation, no commas)
  if (!/^\d+(\.\d+)?$/.test(trimmed)) {
    return { valid: false, error: "Amount must be a valid number" };
  }

  const parts = trimmed.split(".");
  if (parts[1] && parts[1].length > maxDecimals) {
    return { valid: false, error: `Amount cannot have more than ${maxDecimals} decimal places` };
  }

  const value = Number(trimmed);
  if (!isFinite(value) || value <= 0) {
    return { valid: false, error: "Amount must be greater than zero" };
  }

  return { valid: true, normalized: trimmed };
}
