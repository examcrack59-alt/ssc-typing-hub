import { create } from "zustand";
import { CharacterStatus } from "@/types/typingState";

/* ==========================================
   OFFICIAL SSC TIMER
========================================== */

export interface TypingTimer {
  totalSeconds: number;

  remainingSeconds: number;

  startTimestamp: number | null;

  endTimestamp: number | null;

  elapsedSeconds: number;
}

/* ==========================================
   OFFICIAL SSC STATS
========================================== */

export interface TypingStats {
  grossWPM: number;

  netWPM: number;

  rawWPM: number;

  cpm: number;

  accuracy: number;

  errors: number;

  typedCharacters: number;

  correctCharacters: number;

  incorrectCharacters: number;

  extraCharacters: number;

  skippedCharacters: number;

  backspaceCount: number;

  completionPercentage: number;
}

/* ==========================================
   STORE
========================================== */

export interface TypingStore {
  /* Engine */
backspaceCount: number;
  started: boolean;

  paused: boolean;

  finished: boolean;

  focused: boolean;

  /* Test */

  exam: string;

  language: string;

  duration: string;

  setExam: (exam: string) => void;

  setLanguage: (language: string) => void;

  setDuration: (duration: string) => void;

  /* Cursor */

  currentCharacter: number;

  currentWord: number;

  currentLine: number;

  /* Passage */

  status: CharacterStatus[];

  typedText: string;

  /* Stats */

  stats: TypingStats;

  /* Timer */

  timer: TypingTimer;

  /* Actions */

  initialize: (characterCount: number) => void;

  reset: () => void;

  start: () => void;

  pause: () => void;

  resume: () => void;

  finish: () => void;

  endTest: () => void;

  resetTest: () => void;

  setFocused: (focused: boolean) => void;

  setCurrentCharacter: (index: number) => void;

  setCurrentWord: (index: number) => void;

  setCurrentLine: (index: number) => void;

  updateCharacterStatus: (
    index: number,
    status: CharacterStatus
  ) => void;

  appendCharacter: (character: string) => void;

  removeCharacter: () => void;

  clearTypedText: () => void;

  setTypedText: (text: string) => void;

  incrementBackspace: () => void;

  setTimer: (remainingSeconds: number) => void;

  tickTimer: () => void;

  resetTimer: () => void;

  setTotalTime: (seconds: number) => void;

  setStats: (
    stats: Partial<TypingStats>
  ) => void;
}

/* ==========================================
   INITIAL STATS
========================================== */

export const initialStats: TypingStats = {
  grossWPM: 0,

  netWPM: 0,

  rawWPM: 0,

  cpm: 0,

  accuracy: 100,

  errors: 0,

  typedCharacters: 0,

  correctCharacters: 0,

  incorrectCharacters: 0,

  extraCharacters: 0,

  skippedCharacters: 0,

  backspaceCount: 0,

  completionPercentage: 0,
};

/* ==========================================
   INITIAL TIMER
========================================== */

export const initialTimer: TypingTimer = {
  totalSeconds: 600,

  remainingSeconds: 600,

  startTimestamp: null,

  endTimestamp: null,

  elapsedSeconds: 0,
};

 export const useTypingStore =
 create<TypingStore>((set) => ({

    /* ===========================
       ENGINE
    =========================== */

    started: false,
    paused: false,
    finished: false,
    focused: false,

    /* ===========================
       TEST INFO
    =========================== */

    exam: "SSC CGL",
    language: "English",
    duration: "10 Minutes",

    /* ===========================
       CURSOR
    =========================== */

    currentCharacter: 0,
    currentWord: 0,
    currentLine: 0,

    /* ===========================
       PASSAGE
    =========================== */

    status: [],

    typedText: "",

    backspaceCount: 0,

    /* ===========================
       ENGINE DATA
    =========================== */

    stats: {
      ...initialStats,
    },

    timer: {
      ...initialTimer,
    },

    /* ===========================
       INITIALIZE
    =========================== */

    initialize: (characterCount) =>
      set(() => ({
        started: false,
        paused: false,
        finished: false,
        focused: false,

        currentCharacter: 0,
        currentWord: 0,
        currentLine: 0,

        typedText: "",

        backspaceCount: 0,

        status: new Array(characterCount).fill("idle"),

        stats: {
          ...initialStats,
        },

        timer: {
          ...initialTimer,
        },
      })),

    /* ===========================
       START TEST
    =========================== */

    start: () =>
      set((state) => {

        if (state.started) return state;

        return {
          started: true,

          paused: false,

          timer: {
            ...state.timer,

            startTimestamp: Date.now(),

            endTimestamp: null,

            elapsedSeconds: 0,
          },
        };
      }),

    /* ===========================
       FINISH TEST
    =========================== */

    finish: () =>
      set((state) => {

        if (state.finished) return state;

        const endTimestamp = Date.now();

   const elapsedSeconds =
  state.timer.startTimestamp == null
    ? state.timer.totalSeconds
    : Math.max(
        1,
        Math.ceil(
          (endTimestamp -
            state.timer.startTimestamp) /
            1000
        )
      );
        return {
          finished: true,

          paused: true,

          timer: {
            ...state.timer,

            endTimestamp,

            elapsedSeconds,
          },
        };
      }),

    endTest: () =>
      set({
        finished: true,
        paused: true,
      }),

    pause: () =>
      set({
        paused: true,
      }),

    resume: () =>
      set({
        paused: false,
      }),
      /* ==========================================
   BASIC SETTINGS
========================================== */

setFocused: (focused) =>
  set({
    focused,
  }),

setExam: (exam) =>
  set({
    exam,
  }),

setLanguage: (language) =>
  set({
    language,
  }),

setDuration: (duration) =>
  set((state) => {

    let seconds = 600;

    switch (duration) {
      case "5 Minutes":
        seconds = 300;
        break;

      case "10 Minutes":
        seconds = 600;
        break;

      case "15 Minutes":
        seconds = 900;
        break;

      case "20 Minutes":
        seconds = 1200;
        break;

      case "30 Minutes":
        seconds = 1800;
        break;
    }

    return {

      duration,

      timer: {

        ...state.timer,

        totalSeconds: seconds,

        remainingSeconds: seconds,

        startTimestamp: null,

        endTimestamp: null,

        elapsedSeconds: 0,

      },

    };

  }),

/* ==========================================
   CURSOR
========================================== */

setCurrentCharacter: (index) =>
  set({
    currentCharacter: index,
  }),

setCurrentWord: (index) =>
  set({
    currentWord: index,
  }),

setCurrentLine: (index) =>
  set({
    currentLine: index,
  }),

/* ==========================================
   CHARACTER STATUS
========================================== */

updateCharacterStatus: (index, status) =>
  set((state) => {

    const next = [...state.status];

    next[index] = status;

    return {

      status: next,

    };

  }),

/* ==========================================
   INPUT
========================================== */

setTypedText: (text) =>
  set({
    typedText: text,
  }),

appendCharacter: (character) =>
  set((state) => ({
    typedText:
      state.typedText + character,
  })),

removeCharacter: () =>
  set((state) => ({
    typedText:
      state.typedText.slice(0, -1),
  })),

clearTypedText: () =>
  set({
    typedText: "",
  }),
incrementBackspace: () =>
  set((state) => ({
    backspaceCount:
      state.backspaceCount + 1,

    stats: {
      ...state.stats,
      backspaceCount:
        state.backspaceCount + 1,
    },
  })),

/* ==========================================
   RESET TEST
========================================== */

resetTest: () =>
  set((state) => ({

    started: false,

    paused: false,

    finished: false,

    focused: false,

    currentCharacter: 0,

    currentWord: 0,

    currentLine: 0,

    typedText: "",

    backspaceCount: 0,

    status: new Array(
      state.status.length
    ).fill("idle"),

    stats: {

      ...initialStats,

    },

    timer: {

      ...state.timer,

      remainingSeconds:
        state.timer.totalSeconds,

      startTimestamp: null,

      endTimestamp: null,

      elapsedSeconds: 0,

    },

  })),
  /* ==========================================
   TIMER
========================================== */

setTimer: (remainingSeconds) =>
  set((state) => {

    const remaining = Math.max(
      0,
      Math.min(
        remainingSeconds,
        state.timer.totalSeconds
      )
    );

    return {
      timer: {
        ...state.timer,
        remainingSeconds: remaining,
      },
    };

  }),

tickTimer: () =>
  set((state) => {

    if (
      state.finished ||
      state.paused ||
      !state.started
    ) {
      return state;
    }

    const remaining = Math.max(
      state.timer.remainingSeconds - 1,
      0
    );

    if (remaining === 0) {

      const endTimestamp = Date.now();

      return {

        finished: true,

        paused: true,

        timer: {

          ...state.timer,

          remainingSeconds: 0,

          endTimestamp,

        elapsedSeconds:
  state.timer.startTimestamp == null
    ? state.timer.totalSeconds
    : Math.max(
        1,
        Math.ceil(
          (endTimestamp -
            state.timer.startTimestamp) /
            1000
        )
      ),

        },

      };

    }

    return {

      timer: {

        ...state.timer,

        remainingSeconds: remaining,

      },

    };

  }),

resetTimer: () =>
  set((state) => ({

    timer: {

      ...state.timer,

      remainingSeconds:
        state.timer.totalSeconds,

      startTimestamp: null,

      endTimestamp: null,

      elapsedSeconds: 0,

    },

  })),

setTotalTime: (seconds) =>
  set((state) => ({

    timer: {

      ...state.timer,

      totalSeconds: seconds,

      remainingSeconds: seconds,

      startTimestamp: null,

      endTimestamp: null,

      elapsedSeconds: 0,

    },

  })),

/* ==========================================
   STATS
========================================== */

setStats: (stats) =>
  set((state) => ({

    stats: {

      ...state.stats,

      ...stats,

    },

  })),

/* ==========================================
   RESET STORE
========================================== */

reset: () =>
  set({

    started: false,

    paused: false,

    finished: false,

    focused: false,

    exam: "SSC CGL",

    language: "English",

    duration: "10 Minutes",

    currentCharacter: 0,

    currentWord: 0,

    currentLine: 0,

    status: [],

    typedText: "",

    backspaceCount: 0,

    stats: {

      ...initialStats,

    },

    timer: {

      ...initialTimer,

    },

  }),

}));