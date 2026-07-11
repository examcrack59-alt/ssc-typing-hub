import type { HistoryEntry } from "@/types/history";

export class HistorySelectors {
  static latest(history: HistoryEntry[]): HistoryEntry[] {
    return [...history].sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );
  }

  static byExam(
    history: HistoryEntry[],
    exam: string
  ): HistoryEntry[] {
    return history.filter(
      (item) => item.exam === exam
    );
  }

  static passed(
    history: HistoryEntry[]
  ): HistoryEntry[] {
    return history.filter(
      (item) => item.resultStatus === "PASS"
    );
  }

  static failed(
    history: HistoryEntry[]
  ): HistoryEntry[] {
    return history.filter(
      (item) => item.resultStatus === "FAIL"
    );
  }

  static totalTests(
    history: HistoryEntry[]
  ): number {
    return history.length;
  }

  static latestAttempt(
    history: HistoryEntry[]
  ): HistoryEntry | undefined {
    return this.latest(history)[0];
  }
}