import { Character } from "@/types";

/**
 * Creates an immutable character pool from raw passage text.
 *
 * Rules:
 * - Every character gets a unique sequential id.
 * - Status is always "idle" initially.
 * - wordId is assigned later by createWords().
 */
export function createCharacters(text: string): Character[] {
  const characters: Character[] = [];

  for (let i = 0; i < text.length; i++) {
    characters.push({
      id: i,
      index: i,
      char: text[i],
      status: "idle",
      wordId: -1,
    });
  }

  return characters;
}