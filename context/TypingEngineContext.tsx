"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface TypingEngineContextValue {
  passage: Passage;
  renderer: {
    tree: RenderTree;
  };

  initializeEngine: () => void;
}

const TypingEngineContext =
  createContext<TypingEngineContextValue | null>(null);

interface TypingEngineProviderProps {
  children: ReactNode;

  passage: Passage;

  renderer: {
    tree: RenderTree;
  };

  initializeEngine: () => void;
}

export function TypingEngineProvider({
  children,
  passage,
  renderer,
  initializeEngine,
}: TypingEngineProviderProps) {
  const value = useMemo(
    () => ({
      passage,
      renderer,
      initializeEngine,
    }),
    [passage, renderer, initializeEngine]
  );

  return (
    <TypingEngineContext.Provider value={value}>
      {children}
    </TypingEngineContext.Provider>
  );
}

export function useTypingEngine() {
  const context = useContext(TypingEngineContext);

  if (!context) {
    throw new Error(
      "useTypingEngine must be used inside TypingEngineProvider"
    );
  }

  return context;
}