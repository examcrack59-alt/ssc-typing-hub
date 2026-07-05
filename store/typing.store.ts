import { create } from "zustand";
import { CharacterStatus } from "@/types/typingState";

export interface TypingStore {
  // Engine State
  started: boolean;
  paused: boolean;
  finished: boolean;

  // Cursor
  currentCharacter: number;
  currentWord: number;
  currentLine: number;

  // Character Status Pool
  status: CharacterStatus[];
  // UI
focused: boolean;

  // Actions
  initialize: (characterCount: number) => void;
  
setFocused: (focused: boolean) => void;
  setCurrentCharacter: (index: number) => void;

  setCurrentWord: (index: number) => void;

  setCurrentLine: (index: number) => void;

  updateCharacterStatus: (
    index: number,
    status: CharacterStatus
  ) => void;

  start: () => void;

  pause: () => void;

  resume: () => void;

  finish: () => void;

  reset: () => void;
}

export const useTypingStore =
  create<TypingStore>((set) => ({
    started: false,
    paused: false,
    finished: false,

    currentCharacter: 0,
    currentWord: 0,
    currentLine: 0,

    status: [],
    focused: false,

currentIndex: 0,

    initialize: (characterCount) =>
  set({
    status: new Array(characterCount).fill("idle"),

    currentCharacter: 0,
    currentWord: 0,
    currentLine: 0,

    focused: false,

    started: false,
    paused: false,
    finished: false,
  }),
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
setFocused: (focused) =>
  set({
    focused,
  }),
    updateCharacterStatus: (index, status) =>
      set((state) => {
        const next = [...state.status];
        next[index] = status;

        return {
          status: next,
        };
      }),

    start: () =>
      set({
        started: true,
      }),

    pause: () =>
      set({
        paused: true,
      }),

    resume: () =>
      set({
        paused: false,
      }),

    finish: () =>
      set({
        finished: true,
      }),

    reset: () =>
  set({
    started: false,
    paused: false,
    finished: false,

    currentCharacter: 0,
    currentWord: 0,
    currentLine: 0,

    focused: false,

    status: [],
  }),
  }));