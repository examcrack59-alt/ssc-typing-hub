"use client";

import { useMemo } from "react";

import { useTypingStore } from "@/store";

export interface UseStatsResult {
  wpm: number;
  accuracy: number;
  errors: number;
  typedCharacters: number;
}

export function useStats(): UseStatsResult {
  const { stats, status } = useTypingStore((state) => ({
    stats: state.stats,
    status: state.status,
  }));

  const typedCharacters = useMemo(() => {
    const typedStates = new Set([
      "correct",
      "incorrect",
      "extra",
      "skipped",
    ]);

    return status.filter((state) =>
      typedStates.has(state)
    ).length;
  }, [status]);

  return {
    // New Stats Engine
    wpm: stats.netWPM,
    accuracy: stats.accuracy,

    // Old errors field removed → calculate from current stats
    errors:
      stats.incorrectCharacters +
      stats.extraCharacters +
      stats.skippedCharacters,

    typedCharacters,
  };
}