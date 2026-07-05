import type { CharacterStatus } from "@/types";

/**
 * Character validation result.
 */
export interface ValidationResult {
  status: CharacterStatus;
  correct: boolean;
}

/**
 * Compares the expected character with the typed character.
 *
 * Pure function.
 * No store access.
 * No side effects.
 */
export function validateCharacter(
  expected: string,
  typed: string
): ValidationResult {
  // Exact match
  if (expected === typed) {
    return {
      status: "correct",
      correct: true,
    };
  }

  // Wrong character
  return {
    status: "incorrect",
    correct: false,
  };
}