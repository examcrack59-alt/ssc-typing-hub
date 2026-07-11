import type { CharacterStatus } from "./character";

export interface TypingState {
  // Engine State
  started: boolean;
  finished: boolean;
  paused: boolean;

  // Focus
  focused: boolean;

  // Cursor
  currentCharacter: number;
  currentWord: number;
  currentLine: number;

  // Character Status
  status: CharacterStatus[];
}