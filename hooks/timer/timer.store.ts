import { create } from "zustand";
import type { OfficialTimer } from "./timer.types";

interface TimerStore extends OfficialTimer {
  initialize: (seconds: number) => void;

  start: () => void;
  pause: () => void;
  resume: () => void;
  finish: () => void;

  tick: () => void;

  reset: () => void;
}

const initialState: OfficialTimer = {
  totalSeconds: 600,
  remainingSeconds: 600,

  elapsedSeconds: 0,

  started: false,
  paused: false,
  finished: false,

  startTimestamp: null,
  endTimestamp: null,
};

export const useOfficialTimerStore =
  create<TimerStore>((set, get) => ({
    ...initialState,

    initialize: (seconds) =>
      set({
        ...initialState,
        totalSeconds: seconds,
        remainingSeconds: seconds,
      }),

    start: () => {
      const state = get();

      if (state.started) return;

      set({
        started: true,
        paused: false,

        startTimestamp: Date.now(),
      });
    },

    pause: () =>
      set({
        paused: true,
      }),

    resume: () =>
      set({
        paused: false,
      }),

    finish: () => {
      const state = get();

      if (state.finished) return;

      const end = Date.now();

      const elapsed =
        state.startTimestamp == null
          ? 0
          : Math.round(
              (end - state.startTimestamp) / 1000
            );

      set({
        finished: true,
        paused: true,

        endTimestamp: end,
        elapsedSeconds: elapsed,
      });
    },

    tick: () => {
      const state = get();

      if (
        !state.started ||
        state.paused ||
        state.finished
      ) {
        return;
      }

      const remaining = Math.max(
        state.remainingSeconds - 1,
        0
      );

      set({
        remainingSeconds: remaining,
      });

      if (remaining === 0) {
        get().finish();
      }
    },

    reset: () =>
      set((state) => ({
        ...initialState,

        totalSeconds: state.totalSeconds,
        remainingSeconds: state.totalSeconds,
      })),
  }));