import { Word } from "@/types";
import { TextMeasurer } from "./measure";

export interface WordMetric {
  wordId: number;
  width: number;
}

export type WordMetrics = WordMetric[];

/**
 * Pre-compute width of every word.
 *
 * This runs only when:
 * - Passage changes
 * - Font changes
 * - Font size changes
 *
 * It should NEVER run on every key press.
 */
export function createWordMetrics(
  words: Word[],
  measurer: TextMeasurer
): WordMetrics {
  const metrics: WordMetrics = new Array(words.length);

  for (let i = 0; i < words.length; i++) {
    metrics[i] = {
      wordId: words[i].id,
      width: measurer.measureWord(words[i].text),
    };
  }

  return metrics;
}