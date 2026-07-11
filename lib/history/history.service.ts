import type { HistoryEntry } from "@/types/history";
import { useHistoryStore } from "@/store/history.store";

export class HistoryService {
  static getHistory(): HistoryEntry[] {
    return useHistoryStore.getState().history;
  }

  static saveResult(entry: HistoryEntry): void {
    useHistoryStore.getState().addResult(entry);
  }

  static clear(): void {
    useHistoryStore.getState().clearHistory();
  }

  static getByTestId(
    exam: string,
    testId: number
  ): HistoryEntry | undefined {
    return useHistoryStore
      .getState()
      .history.find(
        (item) =>
          item.exam === exam &&
          item.testId === testId
      );
  }
}