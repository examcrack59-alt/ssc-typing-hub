export type CharacterStatus =
  | "idle"
  | "current"
  | "correct"
  | "incorrect"
  | "extra"
  | "skipped";

export interface TypingState {
  // Engine
  started: boolean;
  finished: boolean;
  paused: boolean;

  // Passage
  text: string;

  // User Input
  typed: string[];

  // Cursor
  currentCharacter: number;
  currentWord: number;
  currentLine: number;

  /**
   * Alias used by the typing engine.
   * Must always stay synchronized with currentCharacter.
   */
  currentIndex: number;

  // Character Status
  status: CharacterStatus[];

  // UI
  focused: boolean;
}