"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface TypingContextValue {
  passage: Passage;
  renderer: {
    tree: RenderTree;
  };
}

const TypingContext =
  createContext<TypingContextValue | null>(null);

interface TypingProviderProps {
  children: ReactNode;
  passage: Passage;
  renderer: {
    tree: RenderTree;
  };
}

export function TypingProvider({
  children,
  passage,
  renderer,
}: TypingProviderProps) {
  const value = useMemo(
    () => ({
      passage,
      renderer,
    }),
    [passage, renderer]
  );

  return (
    <TypingContext.Provider value={value}>
      {children}
    </TypingContext.Provider>
  );
}

export function useTypingContext() {
  const context = useContext(TypingContext);

  if (!context) {
    throw new Error(
      "useTypingContext must be used inside TypingProvider"
    );
  }

  return context;
}