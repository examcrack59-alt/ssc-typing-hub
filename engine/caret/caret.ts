import type { Passage } from "@/types";

export interface CaretPosition {
  character: number;
  word: number;
  line: number;
}

export function getCaretPosition(
  passage: Passage,
  characterIndex: number
): CaretPosition {
  const layout =
    passage.layoutCharacters[characterIndex];

  if (!layout) {
    return {
      character: characterIndex,
      word: 0,
      line: 0,
    };
  }

  return {
    character: characterIndex,
    word: layout.wordId,
    line: layout.lineId,
  };
}