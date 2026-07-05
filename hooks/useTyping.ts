"use client";

import { useCallback, useRef } from "react";

import { handleKeyDown } from "@/engine/typing";
import { useTypingStore } from "@/store";

export interface UseTypingOptions {
  id: string;
}

export function useTyping(_: UseTypingOptions) {
  const inputRef = useRef<HTMLInputElement>(null);

  const text = useTypingStore((s) => s.text);
  const typed = useTypingStore((s) => s.typed);
  const currentIndex = useTypingStore((s) => s.currentIndex);

  const setTyped = useTypingStore((s) => s.setTyped);
  const setCurrentIndex = useTypingStore((s) => s.setCurrentIndex);

  const focus = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const blur = useCallback(() => {
    inputRef.current?.blur();
  }, []);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const result = handleKeyDown(event, {
        text,
        typed,
        currentIndex,
      });

      if (!result) return;

      setTyped(result.typed);
      setCurrentIndex(result.nextIndex);
    },
    [
      text,
      typed,
      currentIndex,
      setTyped,
      setCurrentIndex,
    ]
  );

  return {
    inputRef,
    focus,
    blur,
    onKeyDown,
    currentIndex,
    typed,
  };
}

export default useTyping;