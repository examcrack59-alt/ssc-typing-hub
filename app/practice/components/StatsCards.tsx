"use client";
import { useHistoryStore } from "@/store/history.store";
import { HistorySummaryService } from "@/lib/history/history.summary";

const stats = [
  {
    title: "Practice Tests",
    value: "214",
  },
  {
    title: "Best WPM",
    value: "72",
  },
  {
    title: "Accuracy",
    value: "98%",
  },
  {
    title: "Practice Hours",
    value: "126",
  },
];

export default function StatsCards() {
  const history = useHistoryStore(
  (state) => state.history
);

const summary =
  HistorySummaryService.build(history);

const stats = [
  {
    title: "Practice Tests",
    value: summary.totalTests.toString(),
  },
  {
    title: "Best WPM",
    value: summary.bestNetWPM.toFixed(0),
  },
  {
    title: "Accuracy",
    value: `${summary.bestAccuracy.toFixed(0)}%`,
  },
  {
    title: "Practice Hours",
    value: (
      summary.totalPracticeTime / 3600
    ).toFixed(1),
  },
];
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h2 className="mt-3 text-4xl font-black text-[#0A4EA3]">
            {item.value}
          </h2>
        </div>
      ))}

    </div>
  );
}