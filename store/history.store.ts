import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { HistoryEntry } from "@/types/history";

interface HistoryStore {
  history: HistoryEntry[];

  addResult: (entry: HistoryEntry) => void;

  clearHistory: () => void;

  getByTestId: (testId: number) => HistoryEntry | undefined;
}

export const useHistoryStore = create<HistoryStore>()(
  persist(
    (set, get) => ({
      history: [],

      addResult: (entry) => {
        const history = get().history;

        const existingIndex = history.findIndex(
          (item) =>
            item.exam === entry.exam &&
            item.testId === entry.testId
        );

        let updatedHistory: HistoryEntry[];

       if (existingIndex >= 0) {
  updatedHistory = [...history];

  const existing = updatedHistory[existingIndex];

  const isBetter =
    entry.netWPM > existing.netWPM ||
    (
      entry.netWPM === existing.netWPM &&
      entry.accuracy > existing.accuracy
    ) ||
    (
      entry.netWPM === existing.netWPM &&
      entry.accuracy === existing.accuracy &&
      entry.completionPercentage >
        existing.completionPercentage
    );

  updatedHistory[existingIndex] = isBetter
    ? entry
    : {
        ...existing,
        date: entry.date,
        elapsedTime: entry.elapsedTime,
      };
} else {
  updatedHistory = [entry, ...history];
}

        updatedHistory.sort(
          (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );

        set({
          history: updatedHistory,
        });
      },

      clearHistory: () => {
        set({
          history: [],
        });
      },

      getByTestId: (testId) => {
        return get().history.find(
          (item) => item.testId === testId
        );
      },
    }),
    {
      name: "ssc-typing-history",
      version: 1,

      storage: createJSONStorage(() => localStorage),
      
    }
  )
);