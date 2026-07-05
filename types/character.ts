export type CharacterStatus =
  | "idle"
  | "current"
  | "correct"
  | "incorrect"
  | "extra"
  | "skipped";

export interface Character {
  id: number;

  char: string;

  status: CharacterStatus;

  wordId: number;

  index: number;
}