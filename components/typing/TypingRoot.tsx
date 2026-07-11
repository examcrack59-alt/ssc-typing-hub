"use client";
import { useEffect, useRef } from "react";

import { useSearchParams } from "next/navigation";
import { useTypingStore } from "@/store";

import TypingLayout from "./TypingLayout";

import { useTyping } from "@/hooks/useTyping";

import { TypingProvider } from "@/context/TypingContext";
import { TypingEngineProvider } from "@/context/TypingEngineContext";

import { getPassage } from "@/lib/passages/getPassage";
import { getTestById } from "@/lib/exams/getExamTests";
 


export default function TypingRoot() {
  const initializedRef = useRef(false);
  const searchParams = useSearchParams();

  const exam = searchParams.get("exam") ?? "cgl";
  const id = Number(searchParams.get("id") ?? "1");
const setExam = useTypingStore((state) => state.setExam);
const setLanguage = useTypingStore((state) => state.setLanguage);
const setDuration = useTypingStore((state) => state.setDuration);
 const started = useTypingStore(
  (state) => state.started
);

const finished = useTypingStore(
  (state) => state.finished
);

  // Centralized Passage
const currentTest = getTestById(exam, id);

if (!currentTest) {
  throw new Error("Test not found");
}

const passageText = getPassage(
  currentTest.passageId
);

const selectedPassage = {
  title: currentTest.title,
  text: passageText,
};
 
useEffect(() => {
  initializedRef.current = false;
}, [exam, id]);
 const {
  mounted,
  passage,
  renderer,
  initializeEngine,
} = useTyping({
    id: `${exam}-${id}`,

    title: selectedPassage.title,

    text: selectedPassage.text,

    fontSize: 18,

    fontFamily: "Poppins",

    maxWidth: 860,

    lineHeight: 34,
  });

 useEffect(() => {
  if (!mounted || !passage) return;

  if (initializedRef.current) return;

  initializedRef.current = true;

  const examNames: Record<string, string> = {
    cgl: "SSC CGL",
    chsl: "SSC CHSL",
    mts: "SSC MTS",
    gd: "SSC GD",
    cpo: "SSC CPO",
    stenographer: "SSC STENOGRAPHER",
  };

  setExam(examNames[exam] ?? exam);

  setLanguage("English");

 setDuration(
  currentTest?.duration
    ? `${currentTest.duration} Minutes`
    : "10 Minutes"
);

  initializeEngine();
 
}, [
  mounted,
  passage,
  exam,
  currentTest,
  initializeEngine,
  setExam,
  setLanguage,
  setDuration,
]);
  // Loading
  useEffect(() => {
  if (!started || finished) return;

  const interval = setInterval(() => {
    useTypingStore.getState().tickTimer();
  }, 1000);

  return () => clearInterval(interval);
}, [started, finished]);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-xl bg-white px-8 py-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-700">
            Loading Typing Engine...
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Preparing typing test...
          </p>
        </div>
      </div>
    );
  }

  // Error

  if (!passage || !renderer) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <div className="rounded-xl bg-white px-8 py-6 shadow-lg">
          <h2 className="text-xl font-semibold text-red-600">
            Failed to Load Typing Engine
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Please refresh the page.
          </p>
        </div>
      </div>
    );
  }

  return (
  <TypingProvider
    passage={passage}
    renderer={renderer}
  >
    <TypingEngineProvider
      passage={passage}
      renderer={renderer}
      initializeEngine={initializeEngine}
    >

     

      <TypingLayout
        passage={passage}
        renderer={renderer}
      />

    </TypingEngineProvider>
  </TypingProvider>
);
}