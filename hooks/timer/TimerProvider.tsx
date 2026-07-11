"use client";

import { useEffect } from "react";
import { useOfficialTimerStore } from "./timer.store";

export default function TimerProvider() {
  const started = useOfficialTimerStore(
    (s) => s.started
  );

  const paused = useOfficialTimerStore(
    (s) => s.paused
  );

  const finished = useOfficialTimerStore(
    (s) => s.finished
  );

  const tick = useOfficialTimerStore(
    (s) => s.tick
  );

  useEffect(() => {
    if (!started) return;

    if (paused) return;

    if (finished) return;

    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [
    started,
    paused,
    finished,
    tick,
  ]);

  return null;
}