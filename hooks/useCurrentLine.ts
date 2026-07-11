"use client";

import { useMemo } from "react";

import { useTypingStore } from "@/store";
import { useTypingContext } from "@/context/TypingContext";

export function useCurrentLine() {
  const { passage } = useTypingContext();

  const typedText = useTypingStore(
    (state) => state.typedText
  );

  const currentLine = useTypingStore(
    (state) => state.currentLine
  );

  const currentCharacter = useTypingStore(
    (state) => state.currentCharacter
  );

  return useMemo(() => {
    const characters = passage.layoutCharacters.filter(
      (c) => c.lineId === currentLine
    );

    if (characters.length === 0) {
      return {
        completed: "",
        remaining: "",
      };
    }

    const start = characters[0].characterId;
    const end =
      characters[characters.length - 1].characterId;

    let lineText = "";

    for (let i = start; i <= end; i++) {
      lineText += passage.characters[i].char;
    }

    const typedCount = Math.max(
      0,
      currentCharacter - start
    );

    return {
      completed: typedText.slice(0, typedCount),
      remaining: lineText.slice(typedCount),
    };
  }, [
    passage,
    typedText,
    currentLine,
    currentCharacter,
  ]);
}