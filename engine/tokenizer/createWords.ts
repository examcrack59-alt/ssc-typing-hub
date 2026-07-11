import { Character, Word } from "@/types";

/**
 * Converts character pool into words.
 *
 * Rules:
 * - Space is treated as separator.
 * - Consecutive spaces are ignored.
 * - Character objects are reused.
 * - Every character gets a wordId.
 * - Output is deterministic.
 */
export function createWords(
  characters: Character[]
): Word[] {
  const words: Word[] = [];

  let wordId = 0;
  let startIndex = -1;
  let text = "";

  for (let i = 0; i <= characters.length; i++) {
    const endOfText = i === characters.length;

    const currentChar = endOfText
      ? " "
      : characters[i].char;

    const separator = currentChar === " ";

    if (!separator) {
      if (startIndex === -1) {
        startIndex = i;
      }

      text += currentChar;
      continue;
    }

    if (startIndex === -1) {
      continue;
    }

    const characterIds: number[] = [];

    for (let j = startIndex; j < i; j++) {
      characters[j].wordId = wordId;
      characterIds.push(characters[j].id);
    }

    words.push({
      id: wordId,
      text,
      characterIds,
      start: startIndex,
      end: i - 1,
    });

    wordId++;
    startIndex = -1;
    text = "";
  }

  return words;
}