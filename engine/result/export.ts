 import type { TypingResult } from "./result";

export function exportResult(
  result: TypingResult
): string {
  return JSON.stringify(result, null, 2);
}