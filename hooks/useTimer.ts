"use client";

import { useEffect, useRef, useState } from "react";

import { useTypingStore } from "@/store";

interface UseTimerOptions {
  duration?: number;
  autoStart?: boolean;
  onFinish?: () => void;
}

export function useTimer({
  duration = 600,
  autoStart = false,
  onFinish,
}: UseTimerOptions = {}) {
  const [remaining, setRemaining] = useState(duration);
  useEffect(() => {
  console.log("TIMER MOUNT", {
    duration,
  });
}, []);

const remainingRef = useRef(duration);
  const [running, setRunning] = useState(autoStart);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(
  null
);

  const setTimer = useTypingStore(
  (state) => state.setTimer
);

const startTyping = useTypingStore(
  (state) => state.start
);

const finishTyping = useTypingStore(
  (state) => state.finish
);

useEffect(() => {
  remainingRef.current = duration;

  setRemaining(duration);

  setTimer(duration);
}, [duration, setTimer]);
  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {

remainingRef.current = Math.max(
  remainingRef.current - 1,
  0
);

if (remainingRef.current === 0) {
  remainingRef.current = 0;

  clearInterval(intervalRef.current!);

  finishTyping();

  setRunning(false);

  onFinish?.();
}

  setRemaining(remainingRef.current);

}, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
 }, [running, onFinish, finishTyping]);

const start = () => {
  if (running) return;

  startTyping();
console.log("START TIMER", {
  duration,
  remaining: remainingRef.current,
  running,
});
  setRunning(true);
};

  const pause = () => {
  if (!running) return;

  setRunning(false);
};

  const resume = () => {
  if (running) return;

  setRunning(true);
};

const reset = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  remainingRef.current = duration;

  setRunning(false);

  setRemaining(duration);
console.log("RESET TIMER", {
  duration,
  remaining: remainingRef.current,
});
  setTimer(duration);
};
useEffect(() => {
 console.log("Timer Update", {
  remaining,
  duration,
});

  setTimer(remaining);
  
}, [remaining, setTimer]);
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const formatted = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
useEffect(() => {
  return () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };
}, []);
  return {
    remaining,
    formatted,
    running,

    start,
    pause,
    resume,
    reset,
  };
}