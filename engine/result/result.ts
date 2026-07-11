import { createStats } from "@/engine/stats";

export interface TypingResult {
  grossWPM: number;
  netWPM: number;
  rawWPM: number;

  accuracy: number;

  correctCharacters: number;
  incorrectCharacters: number;
  skippedCharacters: number;
  extraCharacters: number;

  totalWords: number;
  typedWords: number;

  completed: boolean;
}

export interface CreateResultOptions {
  correctCharacters: number;
  incorrectCharacters: number;
  skippedCharacters: number;
  extraCharacters: number;

  totalWords: number;
  typedWords: number;

  elapsedSeconds: number;
}

export function createResult(
  options: CreateResultOptions
): TypingResult {
  const {
    correctCharacters,
    incorrectCharacters,
    skippedCharacters,
    extraCharacters,
    totalWords,
    typedWords,
    elapsedSeconds,
  } = options;

  const totalCharacters =
    correctCharacters +
    incorrectCharacters +
    skippedCharacters +
    extraCharacters;

  const stats = createStats(
    correctCharacters,
    incorrectCharacters,
    extraCharacters,
    skippedCharacters,
    totalCharacters,
    elapsedSeconds
  );

  return {
    grossWPM: stats.grossWPM,

    netWPM: stats.netWPM,

    rawWPM: stats.rawWPM,

    accuracy: stats.accuracy,

    correctCharacters,
    incorrectCharacters,
    skippedCharacters,
    extraCharacters,

    totalWords,
    typedWords,

    completed: true,
  };
}