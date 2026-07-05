import { Character, Word } from "@/types";

/**
 * Creates words from the character pool.
 *
 * Rules:
 * - Space (" ") is treated as a word separator.
 * - Consecutive spaces are ignored.
 * - Characters are NOT copied.
 * - Every character receives its wordId.
 */
export function createWords(characters: Character[]): Word[] {
  const words: Word[] = [];

  let wordId = 0;
  let start = -1;
  let currentWord = "";

  for (let i = 0; i <= characters.length; i++) {
    const isEnd = i === characters.length;
    const isSpace = !isEnd && characters[i].char === " ";

    if (!isEnd && !isSpace) {
      if (start === -1) {
        start = i;
      }

      currentWord += characters[i].char;
      continue;
    }

    if (start !== -1) {
      const characterIds: number[] = [];

      for (let j = start; j < i; j++) {
        characters[j].wordId = wordId;
        characterIds.push(characters[j].id);
      }

      words.push({
        id: wordId,
        text: currentWord,
        characterIds,
        start,
        end: i - 1,
      });

      wordId++;
      start = -1;
      currentWord = "";
    }
  }

  return words;
}