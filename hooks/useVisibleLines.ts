"use client";

import { useMemo } from "react";

import { useTypingContext } from "@/context/TypingContext";
import { useTypingStore } from "@/store";

export interface VisibleLine {
  id: number;
  completed: string;
  remaining: string;
}

export function useVisibleLines(): VisibleLine[] {
  const { passage } = useTypingContext();

  const currentLine = useTypingStore(
    (state) => state.currentLine
  );

  const currentCharacter = useTypingStore(
    (state) => state.currentCharacter
  );

  return useMemo(() => {
    const visible: VisibleLine[] = [];

    for (
      let lineId = currentLine;
      lineId < currentLine + 3;
      lineId++
    ) {
      const chars = passage.layoutCharacters.filter(
        (c) => c.lineId === lineId
      );

      if (!chars.length) continue;

      const start = chars[0].characterId;
      const end =
        chars[chars.length - 1].characterId;

      let completed = "";
      let remaining = "";

      for (let i = start; i <= end; i++) {
        const ch = passage.characters[i].char;

        if (i < currentCharacter) {
          completed += ch;
        } else {
          remaining += ch;
        }
      }

      visible.push({
        id: lineId,
        completed,
        remaining,
      });
    }

    return visible;
  }, [
    passage,
    currentLine,
    currentCharacter,
  ]);
}