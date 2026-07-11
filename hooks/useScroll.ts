"use client";

import {
  RefObject,
  useCallback,
  useEffect,
} from "react";

import { useTypingStore } from "@/store";

export interface UseScrollResult {
  scrollToCaret: () => void;
}

export function useScroll(
  containerRef: RefObject<HTMLElement | null>
): UseScrollResult {

  const currentLine = useTypingStore(
    (state) => state.currentLine
  );

  const scrollToCaret = useCallback(() => {
    if (!containerRef.current) return;

    const activeLine =
      containerRef.current.querySelector(
        `[data-line-id="${currentLine}"]`
      );

    if (!activeLine) return;

   activeLine.scrollIntoView({
  behavior: "auto",
  block: "center",
});
  }, [containerRef, currentLine]);
useEffect(() => {
  scrollToCaret();
}, [scrollToCaret]);
  return {
    scrollToCaret,
  };
}