import { useCallback, useEffect, useMemo, useState } from "react";
 

import { tokenize } from "@/engine/tokenizer";
import { TextMeasurer, createLayout } from "@/engine/layout";
import { createRenderer } from "@/engine/renderer";

import { useTypingStore } from "@/store";
 

export interface UseTypingOptions {
  id: string;
  title: string;
  text: string;

  fontSize?: number;
  fontFamily?: string;

  maxWidth?: number;
  lineHeight?: number;
}

export function useTyping({
  id,
  title,
  text,
  fontSize = 18,
  fontFamily = "Poppins",
  maxWidth = 860,
  lineHeight = 32,
}: UseTypingOptions) {
  const initialize = useTypingStore(
    (state) => state.initialize
  );
const started = useTypingStore(
  (state) => state.started
);
const duration = useTypingStore(
  (state) => state.duration
);
 const setTotalTime = useTypingStore(
  (state) => state.setTotalTime
);

const resetTimer = useTypingStore(
  (state) => state.resetTimer
);
const durationInSeconds = useMemo(() => {
  switch (duration) {
    case "5 Minutes":
      return 300;

    case "10 Minutes":
      return 600;

    case "15 Minutes":
      return 900;

    case "20 Minutes":
      return 1200;

    case "30 Minutes":
      return 1800;

    default:
      return 600;
  }
}, [duration]);

 
const [mounted, setMounted] = useState(false);
useEffect(() => {
  setMounted(true);
}, []);
 

  const passage = useMemo(() => {
    if (!mounted) return null;

    const tokenized = tokenize(id, title, text);

    const measurer = new TextMeasurer({
      fontSize,
      fontFamily,
    });

    return createLayout(tokenized, measurer, {
      maxWidth,
      lineHeight,
    });
  }, [
    mounted,
    id,
    title,
    text,
    fontSize,
    fontFamily,
    maxWidth,
    lineHeight,
  ]);

  const renderer = useMemo(() => {
    if (!passage) return null;

    return createRenderer(passage);
  }, [passage]);

const initializeEngine = useCallback(() => {
  if (!passage) return;

initialize(passage.characters.length);

setTotalTime(durationInSeconds);

resetTimer();

  // Timer reset TypingRoot se hoga
}, [ initialize,
  passage,
  durationInSeconds,
  setTotalTime,
  resetTimer,]);
 return {
  mounted,
  passage,
  renderer,


  initializeEngine,
};
}