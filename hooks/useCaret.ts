"use client";

import { useMemo } from "react";

import { useTypingStore } from "@/store";

export interface CaretPosition {
  character: number;
  word: number;
  line: number;
}

export function useCaret() {
  const currentCharacter = useTypingStore(
    (state) => state.currentCharacter
  );

  const currentWord = useTypingStore(
    (state) => state.currentWord
  );

  const currentLine = useTypingStore(
    (state) => state.currentLine
  );

  const focused = useTypingStore(
    (state) => state.focused
  );

  const position = useMemo<CaretPosition>(
    () => ({
      character: currentCharacter,
      word: currentWord,
      line: currentLine,
    }),
    [
      currentCharacter,
      currentWord,
      currentLine,
    ]
  );

  return {
    focused,
    position,

    currentCharacter,
    currentWord,
    currentLine,
  };
}