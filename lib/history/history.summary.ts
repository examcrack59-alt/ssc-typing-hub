import type { HistoryEntry } from "@/types/history";
export interface HistorySummary {
  totalTests: number;

  passedTests: number;

  failedTests: number;

  averageNetWPM: number;

  bestNetWPM: number;

  averageAccuracy: number;

  bestAccuracy: number;

  totalPracticeTime: number;
}

export class HistorySummaryService {
  static build(
    history: HistoryEntry[]
  ): HistorySummary {
    if (history.length === 0) {
      return {
        totalTests: 0,

        passedTests: 0,

        failedTests: 0,

        averageNetWPM: 0,

        bestNetWPM: 0,

        averageAccuracy: 0,

        bestAccuracy: 0,

        totalPracticeTime: 0,
      };
    }

    const totalTests = history.length;

    const passedTests = history.filter(
      (item) => item.resultStatus === "PASS"
    ).length;

    const failedTests =
      totalTests - passedTests;

    const totalNetWPM = history.reduce(
      (sum, item) => sum + item.netWPM,
      0
    );

    const totalAccuracy = history.reduce(
      (sum, item) => sum + item.accuracy,
      0
    );

    const bestNetWPM = Math.max(
      ...history.map((item) => item.netWPM)
    );

    const bestAccuracy = Math.max(
      ...history.map((item) => item.accuracy)
    );

    const totalPracticeTime = history.reduce(
      (sum, item) => sum + item.elapsedTime,
      0
    );

    return {
      totalTests,

      passedTests,

      failedTests,

      averageNetWPM:
        totalNetWPM / totalTests,

      bestNetWPM,

      averageAccuracy:
        totalAccuracy / totalTests,

      bestAccuracy,

      totalPracticeTime,
    };
  }
}