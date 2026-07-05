"use client";

import { useEffect } from "react";

import TypingLayout from "./TypingLayout";

import { useTyping } from "@/hooks/useTyping";

const SAMPLE_TEXT = `The quick brown fox jumps over the lazy dog. This is the first version of the SSC Typing Engine.`;

export default function TypingRoot() {
  const {
    passage,
    renderer,
    initializeEngine,
  } = useTyping({
    id: "ssc-demo",
    title: "SSC Demo",
    text: SAMPLE_TEXT,
  });

  useEffect(() => {
    initializeEngine();
  }, [initializeEngine]);

  return (
    <TypingLayout
      passage={passage}
      renderer={renderer}
    />
  );
}