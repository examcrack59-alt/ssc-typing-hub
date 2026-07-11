import type { HistoryEntry } from "@/types/history";

import {
  HistoryAnalyticsSelectors,
  ExamPerformance,
} from "./historySelectors";

export interface AnalyticsOverview {
  totalTests: number;
  totalPracticeTime: number;
  averageWPM: number;
  bestWPM: number;
  averageAccuracy: number;
  bestAccuracy: number;
  passRate: number;
}

export interface WeeklyTrendItem {
  day: string;
  tests: number;
  averageWPM: number;
}

export interface AnalyticsData {
  overview: AnalyticsOverview;
  examPerformance: ExamPerformance[];
  weeklyTrend: WeeklyTrendItem[];
}

export class AnalyticsService {
  static getOverview(history: HistoryEntry[]): AnalyticsOverview {
   const totalTests = history.length;

    if (totalTests === 0) {
      return {
        totalTests: 0,
        totalPracticeTime: 0,
        averageWPM: 0,
        bestWPM: 0,
        averageAccuracy: 0,
        bestAccuracy: 0,
        passRate: 0,
      };
    }

    const totalPracticeTime = history.reduce(
      (sum, item) => sum + item.duration,
      0
    );

    const averageWPM =
      history.reduce((sum, item) => sum + item.netWPM, 0) / totalTests;

    const bestWPM = Math.max(...history.map((item) => item.netWPM));

    const averageAccuracy =
      history.reduce((sum, item) => sum + item.accuracy, 0) / totalTests;

    const bestAccuracy = Math.max(
      ...history.map((item) => item.accuracy)
    );

   const passed = history.filter(
  (item) => item.resultStatus === "PASS"
).length;

    const passRate = (passed / totalTests) * 100;

    return {
      totalTests,
      totalPracticeTime,
      averageWPM: Number(averageWPM.toFixed(2)),
      bestWPM,
      averageAccuracy: Number(averageAccuracy.toFixed(2)),
      bestAccuracy,
      passRate: Number(passRate.toFixed(2)),
    };
  }
  static getWeeklyTrend(
  history: HistoryEntry[]
): WeeklyTrendItem[] {
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  });

  const grouped = new Map<
    string,
    {
      totalTests: number;
      totalWPM: number;
    }
  >();

  history.forEach((item) => {
    const day = formatter.format(new Date(item.date));

    const current = grouped.get(day);

    if (current) {
      current.totalTests += 1;
      current.totalWPM += item.netWPM;
    } else {
      grouped.set(day, {
        totalTests: 1,
        totalWPM: item.netWPM,
      });
    }
  });

  return Array.from(grouped.entries()).map(
    ([day, value]) => ({
      day,
      tests: value.totalTests,
      averageWPM: Number(
        (value.totalWPM / value.totalTests).toFixed(2)
      ),
    })
  );
}

  static getAnalytics(history: HistoryEntry[]): AnalyticsData {
  return {
  overview: this.getOverview(history),
  examPerformance:
    HistoryAnalyticsSelectors.examWisePerformance(history),
  weeklyTrend: this.getWeeklyTrend(history),
};
  }
}