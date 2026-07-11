import { create } from "zustand";

export interface ResultStore {
  grossWPM: number;
netWPM: number;
rawWPM: number;

cpm: number;

accuracy: number;
errorPenalty: number;
  correctCharacters: number;
  incorrectCharacters: number;
  skippedCharacters: number;
  extraCharacters: number;

  totalWords: number;
  typedWords: number;

  completed: boolean;
  resultStatus: "PASS" | "FAIL";

  elapsedTime: number;
  totalTime: number;

  backspaceCount: number;


typedCharacters: number;

completionPercentage: number;
   
 
  exam: string;
  difficulty: string;
  testId: number;

  setResults: (
    results: Partial<ResultStore>
  ) => void;

  reset: () => void;
}

const initialState: Omit<
  ResultStore,
  "setResults" | "reset"
> = {
  grossWPM: 0,
netWPM: 0,
rawWPM: 0,

cpm: 0,

accuracy: 100,
errorPenalty: 0,

  correctCharacters: 0,
  incorrectCharacters: 0,
  skippedCharacters: 0,
  extraCharacters: 0,
typedCharacters: 0,
  totalWords: 0,
  typedWords: 0,

  completed: false,
  resultStatus: "FAIL",

  elapsedTime: 0,
  totalTime: 600,

  backspaceCount: 0,
  




completionPercentage: 0,
  exam: "",
  difficulty: "",
  testId: 1,
};

export const useResultStore = create<ResultStore>((set) => ({
  ...initialState,

  setResults: (results) =>
    set((state) => ({
      ...state,
      ...results,
    })),

  reset: () =>
    set({
      ...initialState,
    }),
}));