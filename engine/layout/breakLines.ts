import { Line, Word } from "@/types";
import { WordMetrics } from "./wordMetrics";

export interface BreakLinesOptions {
  maxWidth: number;
  wordSpacing?: number;
}

/**
 * Break words into lines based on available width.
 *
 * Rules:
 * - Uses precomputed word metrics.
 * - Does NOT calculate x/y positions.
 * - Only decides which words belong to which line.
 * - O(n) complexity.
 */
export function breakLines(
  words: Word[],
  metrics: WordMetrics,
  options: BreakLinesOptions
): Line[] {
  const {
    maxWidth,
    wordSpacing = 8,
  } = options;

  const lines: Line[] = [];

  let currentLine: number[] = [];
  let currentWidth = 0;
  let lineId = 0;

  for (const word of words) {
    const metric = metrics[word.id];

    if (!metric) {
      throw new Error(`Missing metric for word ${word.id}`);
    }

    const wordWidth = metric.width;

    const requiredWidth =
      currentLine.length === 0
        ? wordWidth
        : wordWidth + wordSpacing;

    if (currentWidth + requiredWidth <= maxWidth) {
      currentLine.push(word.id);
      currentWidth += requiredWidth;
    } else {
      if (currentLine.length > 0) {
        lines.push({
          id: lineId++,
          wordIds: currentLine,
        });
      }

      currentLine = [word.id];
      currentWidth = wordWidth;
    }
  }

  if (currentLine.length > 0) {
    lines.push({
      id: lineId,
      wordIds: currentLine,
    });
  }

  return lines;
}