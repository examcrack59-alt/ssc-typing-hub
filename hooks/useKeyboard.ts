"use client";

import { useCallback } from "react";

import { useTypingStore } from "@/store";
import { handleKeyDown } from "@/engine/typing/keydown";
import { useOfficialTimerStore } from "@/hooks/timer/timer.store";
import {
  processBackspace,
  processCharacter,
} from "@/engine/typing/typing";

import type { Passage } from "@/types";

export interface UseKeyboardResult {
  onKeyDown: (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

export function useKeyboard(
  passage: Passage
): UseKeyboardResult {
   

  const finished = useTypingStore(
    (state) => state.finished
  );
const startOfficialTimer = useOfficialTimerStore(
  (state) => state.start
);
  const onKeyDown = useCallback(
    (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      const result = handleKeyDown(
        event.nativeEvent
      );

      if (result.isIgnored) {
        return;
      }
// Get latest Zustand state
      const store = useTypingStore.getState();

      if (store.finished || finished) {
        event.preventDefault();
        return;
      }

    // Backspace
// Remove character from input
if (result.isBackspace) {
  store.removeCharacter();

  processBackspace(
    passage,
    store
  );

  return;
}

      // Ignore Enter for now
      if (result.isEnter) {
        return;
      }
      // Start test on first key press
if (!store.started) {
  store.start();
  startOfficialTimer();
}
      // Update typing input
processCharacter(
  result.character,
  passage,
  store
);

store.appendCharacter(result.character);
    },
    [
  passage,
  finished,
]
  );

  return {
    onKeyDown,
  };
}