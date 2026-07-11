"use client";

import { useMemo } from "react";

import { useTypingContext } from "@/context/TypingContext";
import { useTypingStore } from "@/store";

export function useTypingWindow() {
  const { passage } = useTypingContext();

  const typedText = useTypingStore(
    (state) => state.typedText
  );

  const currentCharacter = useTypingStore(
    (state) => state.currentCharacter
  );

  return useMemo(() => {
    // Start me blank
    if (currentCharacter === 0) {
      return [];
    }

    // Typed lines
    const lines: string[] = [];
    const lineMap = new Map<number, string>();

    let currentLineText = "";

    for (let i = 0; i < currentCharacter; i++) {
      const layout = passage.layoutCharacters[i];

      if (!layout) continue;

      currentLineText += typedText[i] ?? "";

      const next = passage.layoutCharacters[i + 1];

      // New line detect
      if (!next || next.lineId !== layout.lineId) {
        lineMap.set(layout.lineId, currentLineText);
currentLineText = "";
      }
    }

    // Last unfinished line
   if (currentLineText.length > 0) {
  const last =
    passage.layoutCharacters[currentCharacter - 1];

  if (last) {
    lineMap.set(last.lineId, currentLineText);
  }
}

    // Sirf last 3 lines
const MAX_VISIBLE_LINES = 3;

const currentLineId =
  passage.layoutCharacters[
    Math.max(currentCharacter - 1, 0)
  ]?.lineId ?? 0;

const startLine = Math.max(
  0,
  currentLineId - (MAX_VISIBLE_LINES - 1)
);

const visible: string[] = [];

for (
  let line = startLine;
  line <= currentLineId;
  line++
) {
  visible.push(lineMap.get(line) ?? "");
}

return visible;
}, [
  typedText,
  currentCharacter,
  passage,
]);
}

 