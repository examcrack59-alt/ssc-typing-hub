import type { CharacterStatus } from "@/types";

/**
 * Validation Result
 */
export interface ValidationResult {
  status: CharacterStatus;
  correct: boolean;
}

/**
 * Validate typed character against expected character.
 *
 * Pure Function
 * No Store Access
 * No Side Effects
 */
export function validateCharacter(
  expected: string,
  typed: string
): ValidationResult {

  // Empty input
  if (typed.length === 0) {
    return {
      status: "idle",
      correct: false,
    };
  }

  // Correct character
  if (expected === typed) {
    return {
      status: "correct",
      correct: true,
    };
  }

  // Extra character
  if (expected === undefined || expected === null) {
    return {
      status: "extra",
      correct: false,
    };
  }

  // Skipped character
  if (typed === " " && expected !== " ") {
    return {
      status: "skipped",
      correct: false,
    };
  }

  // Incorrect character
  return {
    status: "incorrect",
    correct: false,
  };
}

/**
 * Check Backspace
 */
export function isBackspace(key: string): boolean {
  return key === "Backspace";
}

/**
 * Check Space
 */
export function isSpace(key: string): boolean {
  return key === " ";
}

/**
 * Check Enter
 */
export function isEnter(key: string): boolean {
  return key === "Enter";
}