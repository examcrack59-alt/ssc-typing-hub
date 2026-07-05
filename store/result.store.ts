import { create } from "zustand";

export interface ResultStore {
  grossWPM: number;
  netWPM: number;
  rawWPM: number;

  accuracy: number;

  correctCharacters: number;
  incorrectCharacters: number;
  skippedCharacters: number;
  extraCharacters: number;

  totalWords: number;
  typedWords: number;

  completed: boolean;

  setResults: (
    results: Partial<ResultStore>
  ) => void;

  reset: () => void;
}

const initialState = {
  grossWPM: 0,
  netWPM: 0,
  rawWPM: 0,

  accuracy: 100,

  correctCharacters: 0,
  incorrectCharacters: 0,
  skippedCharacters: 0,
  extraCharacters: 0,

  totalWords: 0,
  typedWords: 0,

  completed: false,
};

export const useResultStore = create<ResultStore>((set) => ({
  ...initialState,

  setResults: (results) =>
    set((state) => ({
      ...state,
      ...results,
    })),

  reset: () => set(initialState),
}));