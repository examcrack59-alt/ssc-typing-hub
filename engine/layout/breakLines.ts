import { Line, Word } from "@/types";
import { WordMetrics } from "./wordMetrics";

export interface BreakLinesOptions {
  maxWidth: number;
  wordSpacing?: number;
}

/**
 * Professional SSC-style line breaker.
 *
 * Features:
 * ✅ O(n)
 * ✅ Better balanced lines
 * ✅ Less awkward line breaks
 * ✅ Cleaner paragraph layout
 */
export function breakLines(
  words: Word[],
  metrics: WordMetrics,
  options: BreakLinesOptions
): Line[] {
  const {
    maxWidth,
    wordSpacing = 4,
  } = options;

  const lines: Line[] = [];

  let currentLine: number[] = [];
  let currentWidth = 0;
  let lineId = 0;

  const MIN_FILL = 0.88;

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

    // Word fits in current line
    if (
      currentLine.length === 0 ||
      currentWidth + requiredWidth <= maxWidth
    ) {
      currentLine.push(word.id);
      currentWidth += requiredWidth;
      continue;
    }

    // Previous line is too short
    if (
      currentWidth / maxWidth < MIN_FILL &&
      currentLine.length > 1
    ) {
      currentLine.push(word.id);

      lines.push({
        id: lineId++,
        wordIds: currentLine,
      });

      currentLine = [];
      currentWidth = 0;

      continue;
    }

    // Finish current line
    lines.push({
      id: lineId++,
      wordIds: currentLine,
    });

    // Start new line
    currentLine = [word.id];
    currentWidth = wordWidth;
  }

  // Push remaining words
  if (currentLine.length > 0) {
    lines.push({
      id: lineId++,
      wordIds: currentLine,
    });
  }

  return lines;
}