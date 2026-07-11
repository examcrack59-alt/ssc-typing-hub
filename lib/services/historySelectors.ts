import type { HistoryEntry } from "@/types/history";
export interface ExamPerformance {
  exam: string;
  totalTests: number;
  averageWPM: number;
  bestWPM: number;
  averageAccuracy: number;
  bestAccuracy: number;
  passRate: number;
}

export class HistoryAnalyticsSelectors {
  static examWisePerformance(
    history: HistoryEntry[]
  ): ExamPerformance[] {
    const grouped = new Map<string, HistoryEntry[]>();

    history.forEach((entry) => {
      const list = grouped.get(entry.exam) ?? [];
      list.push(entry);
      grouped.set(entry.exam, list);
    });

    return Array.from(grouped.entries()).map(([exam, tests]) => {
      const totalTests = tests.length;

      const averageWPM =
        tests.reduce((sum, item) => sum + item.netWPM, 0) /
        totalTests;

      const bestWPM = Math.max(
        ...tests.map((item) => item.netWPM)
      );

      const averageAccuracy =
        tests.reduce((sum, item) => sum + item.accuracy, 0) /
        totalTests;

      const bestAccuracy = Math.max(
        ...tests.map((item) => item.accuracy)
      );

    const passed = tests.filter(
  (item) => item.resultStatus === "PASS"
).length;
      return {
        exam,
        totalTests,
        averageWPM: Number(averageWPM.toFixed(2)),
        bestWPM,
        averageAccuracy: Number(
          averageAccuracy.toFixed(2)
        ),
        bestAccuracy,
        passRate: Number(
          ((passed / totalTests) * 100).toFixed(2)
        ),
      };
    });
  }
}