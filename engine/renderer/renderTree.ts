import { Passage } from "@/types";
import {
  RenderCharacter,
  RenderLine,
  RenderTree,
  RenderWord,
} from "./types";

/**
 * Converts a Passage into a React-friendly render tree.
 *
 * No positions are calculated here.
 * No typing state is used here.
 * Pure immutable structure.
 */
export function buildRenderTree(
  passage: Passage
): RenderTree {
  const lines: RenderLine[] = [];

  for (const line of passage.lines) {
    const renderWords: RenderWord[] = [];

    for (const wordId of line.wordIds) {
      const word = passage.words[wordId];

      const renderCharacters: RenderCharacter[] =
        word.characterIds.map((characterId) => ({
          characterId,
        }));

      renderWords.push({
        wordId,
        characters: renderCharacters,
      });
    }

    lines.push({
      lineId: line.id,
      words: renderWords,
    });
  }

  return {
    lines,
  };
}