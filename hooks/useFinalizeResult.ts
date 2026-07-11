"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { HistoryService } from "@/lib/history/history.service";
import { getTestById } from "@/lib/exams/getExamTests";

import { createStats } from "@/engine/stats/stats";
import { useTypingStore } from "@/store";
import { useResultStore } from "@/store/result.store";
import { useTestProgressStore } from "@/store/testProgress.store";

export function useFinalizeResult() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const timer = useTypingStore((state) => state.timer);
  const status = useTypingStore((state) => state.status);
  const backspaceCount = useTypingStore(
  (state) => state.backspaceCount
);
   

  const setResults = useResultStore(
    (state) => state.setResults
  );

  const saveProgress = useTestProgressStore(
    (state) => state.saveProgress
  );

  const exam = searchParams.get("exam") ?? "cgl";
  const testId = Number(searchParams.get("id") ?? "1");
  const currentTest = getTestById(exam, testId);

const requiredWPMMap: Record<string, number> = {
  cgl: 35,
  chsl: 35,
  mts: 30,
  gd: 30,
  cpo: 35,
  stenographer: 80,
};

const requiredWPM =
  requiredWPMMap[exam.toLowerCase()] ?? 35;

  const finalizeResult = () => {
    const store = useTypingStore.getState();

store.finish();

const latestTimer = useTypingStore.getState().timer;
    const correctCharacters = status.filter(
      (value) => value === "correct"
    ).length;

    const incorrectCharacters = status.filter(
      (value) => value === "incorrect"
    ).length;

    const extraCharacters = status.filter(
      (value) => value === "extra"
    ).length;

    const skippedCharacters = status.filter(
      (value) => value === "skipped"
    ).length;

    // Official elapsed time from timestamps
   const elapsedTime = Math.max(
  latestTimer.elapsedSeconds,
  1
);
console.log("START:", latestTimer.startTimestamp);
console.log("END:", latestTimer.endTimestamp);
console.log("ELAPSED:", latestTimer.elapsedSeconds);
console.log("ELAPSED USED:", elapsedTime);

    // Official SSC Stats Engine
    const stats = createStats(
      correctCharacters,
      incorrectCharacters,
      extraCharacters,
      skippedCharacters,
      status.length,
      elapsedTime
    );

const {
  grossWPM,
  netWPM,
  rawWPM,
  cpm,
  accuracy,
  errorPenalty,
  completionPercentage,
  typedCharacters,
} = stats;

    const resultStatus =
      accuracy >= 95 &&
      netWPM >= requiredWPM
        ? "PASS"
        : "FAIL";

 

console.log("typedCharacters =", typedCharacters);
console.log("correctCharacters =", correctCharacters);
console.log("incorrectCharacters =", incorrectCharacters);
console.log("extraCharacters =", extraCharacters);
console.log("skippedCharacters =", skippedCharacters);

console.log("grossWPM =", grossWPM);
console.log("netWPM =", netWPM);
console.log("rawWPM =", rawWPM);
console.log("cpm =", cpm);
console.log("accuracy =", accuracy);

console.log("==================================");

    setResults({
      
      grossWPM,
      netWPM,
      rawWPM,

      cpm,

      accuracy,
      errorPenalty,
      completionPercentage,

      typedCharacters,
      backspaceCount,

      correctCharacters,
      incorrectCharacters,
      extraCharacters,
      skippedCharacters,

      totalWords: Math.round(status.length / 5),

      typedWords: Math.round(
        typedCharacters / 5
      ),

      elapsedTime,

      totalTime: timer.totalSeconds,

      completed: true,

      resultStatus,

      exam,
     difficulty: searchParams.get("difficulty") ?? "Official",
      testId,
    });
    if (currentTest) {
  HistoryService.saveResult({
    exam,
    testId,

    title: currentTest.title,
    category: currentTest.category,

    date: new Date().toISOString(),

    duration: currentTest.duration,

    elapsedTime,

    grossWPM,
    netWPM,
    rawWPM,

    accuracy,
    cpm,

    correctCharacters,
    incorrectCharacters,
    extraCharacters,
    skippedCharacters,

    completionPercentage,

    backspaceCount,

    resultStatus,
  });
}
console.log(
  "History Saved:",
  HistoryService.getHistory()
);

    saveProgress({
      exam,
      testId,

      attempted: true,
      completed: true,

      bestWpm: netWPM,
      bestAccuracy: accuracy,

      lastAttemptAt: new Date().toISOString(),
    });

    router.push("/result");
  };

  return {
    finalizeResult,
  };
}