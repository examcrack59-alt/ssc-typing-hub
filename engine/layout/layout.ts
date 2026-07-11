import { Passage, LayoutCharacter, LayoutWord, LayoutLine } from "@/types";
import { TextMeasurer } from "./measure";
import { createWordMetrics } from "./wordMetrics";
import { breakLines } from "./breakLines";

export interface LayoutOptions {
  maxWidth: number;
  lineHeight: number;
  wordSpacing?: number;
}

export function createLayout(
  passage: Passage,
  measurer: TextMeasurer,
  options: LayoutOptions
): Passage {
  const metrics = createWordMetrics(
    passage.words,
    measurer
  );

  const lines = breakLines(
    passage.words,
    metrics,
    {
      maxWidth: options.maxWidth,
      wordSpacing: options.wordSpacing,
    }
  );

  const layoutCharacters: LayoutCharacter[] = [];

  const layoutWords: LayoutWord[] = [];

  const layoutLines: LayoutLine[] = [];

  let y = 0;

  for (const line of lines) {
    let x = 0;

    layoutLines.push({
      lineId: line.id,
      y,
      width: options.maxWidth,
      height: options.lineHeight,
    });

    for (const wordId of line.wordIds) {
      const word = passage.words[wordId];

      const wordWidth = metrics[wordId].width;

    layoutWords.push({
  wordId,
  lineId: line.id,
  x,
  y,
  width: wordWidth,
  height: options.lineHeight,
});
      let characterX = x;

      for (const characterId of word.characterIds) {
        const character =
          passage.characters[characterId];

        const width =
          measurer.measureCharacter(character.char);

       layoutCharacters.push({
  characterId,
  wordId,
  lineId: line.id,
  x: characterX,
  y,
  width,
  height: options.lineHeight,
});

        characterX += width;
      }

      x += wordWidth + (options.wordSpacing ?? 4);
    }

    y += options.lineHeight;
  }

  return {
    ...passage,
    lines,
    layoutCharacters,
    layoutWords,
    layoutLines,
  };
}