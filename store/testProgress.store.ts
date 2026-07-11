import { create } from "zustand";

export interface TestProgress {
  exam: string;

  testId: number;

  completed: boolean;

  attempted: boolean;

  bestWpm: number;

  bestAccuracy: number;

  lastAttemptAt?: string;
}

interface TestProgressStore {
  progress: TestProgress[];

  saveProgress: (item: TestProgress) => void;

  getProgress: (
    exam: string,
    testId: number
  ) => TestProgress | undefined;

  getCompletedCount: (
    exam: string
  ) => number;

  getAttemptedCount: (
    exam: string
  ) => number;

  getBestWpm: (
    exam: string
  ) => number;

  getAverageAccuracy: (
    exam: string
  ) => number;

  resetProgress: () => void;
}

export const useTestProgressStore =
  create<TestProgressStore>((set, get) => ({
    progress: [],

    saveProgress: (item) =>
      set((state) => {
        const existing = state.progress.find(
          (progress) =>
            progress.exam === item.exam &&
            progress.testId === item.testId
        );

        if (existing) {
          return {
            progress: state.progress.map((progress) =>
              progress.exam === item.exam &&
              progress.testId === item.testId
                ? item
                : progress
            ),
          };
        }

        return {
          progress: [
            ...state.progress,
            item,
          ],
        };
      }),

    getProgress: (exam, testId) =>
      get().progress.find(
        (progress) =>
          progress.exam === exam &&
          progress.testId === testId
      ),

    getCompletedCount: (exam) =>
      get().progress.filter(
        (progress) =>
          progress.exam === exam &&
          progress.completed
      ).length,

    getAttemptedCount: (exam) =>
      get().progress.filter(
        (progress) =>
          progress.exam === exam
      ).length,

    getBestWpm: (exam) => {
      const tests = get().progress.filter(
        (progress) =>
          progress.exam === exam
      );

      if (tests.length === 0) {
        return 0;
      }

      return Math.max(
        ...tests.map(
          (progress) => progress.bestWpm
        )
      );
    },

    getAverageAccuracy: (exam) => {
      const tests = get().progress.filter(
        (progress) =>
          progress.exam === exam
      );

      if (tests.length === 0) {
        return 0;
      }

      const total = tests.reduce(
        (sum, progress) =>
          sum + progress.bestAccuracy,
        0
      );

      return Math.round(
        total / tests.length
      );
    },

    resetProgress: () =>
      set({
        progress: [],
      }),
  }));