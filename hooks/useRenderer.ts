"use client";

import { useMemo } from "react";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

import { createRenderer } from "@/engine/renderer";

export interface UseRendererResult {
  renderer: {
    tree: RenderTree;
  };

  totalLines: number;
  totalWords: number;
  totalCharacters: number;
}

export function useRenderer(
  passage: Passage | null
): UseRendererResult | null {

  const renderer = useMemo(() => {
    if (!passage) {
      return null;
    }

    return createRenderer(passage);
  }, [passage]);

  const totals = useMemo(() => {
    if (!passage) {
      return {
        totalLines: 0,
        totalWords: 0,
        totalCharacters: 0,
      };
    }

    return {
      totalLines: passage.lines.length,
      totalWords: passage.words.length,
      totalCharacters: passage.characters.length,
    };
  }, [passage]);

  if (!renderer) {
    return null;
  }

  return {
    renderer,

    totalLines: totals.totalLines,

    totalWords: totals.totalWords,

    totalCharacters: totals.totalCharacters,
  };
}