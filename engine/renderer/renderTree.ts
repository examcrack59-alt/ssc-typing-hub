import { Passage } from "@/types";
import {
  RenderCharacter,
  RenderLine,
  RenderTree,
  RenderWord,
} from "./types";

/**
 * Builds an immutable render tree from a Passage.
 * This function is pure:
 * - No DOM access
 * - No random values
 * - No typing state
 * - Same input => Same output
 */
export function buildRenderTree(
  passage: Passage
): RenderTree {
  const lines: RenderLine[] = [];

  for (let i = 0; i < passage.lines.length; i++) {
    const line = passage.lines[i];

    const words: RenderWord[] = [];

    for (let j = 0; j < line.wordIds.length; j++) {
      const wordId = line.wordIds[j];

      const word = passage.words[wordId];

      if (!word) continue;

      const characters: RenderCharacter[] = [];

      for (let k = 0; k < word.characterIds.length; k++) {
        characters.push({
          characterId: word.characterIds[k],
        });
      }

      words.push({
        wordId,
        characters,
      });
    }

    lines.push({
      lineId: line.id,
      words,
    });
  }

  return {
    lines,
  };
}