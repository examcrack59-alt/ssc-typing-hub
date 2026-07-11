"use client";

import { useHistoryStore } from "@/store/history.store";
import { HistorySelectors } from "@/lib/history/history.selectors";

export default function RecentActivity() {
  const history = useHistoryStore(
    (state) => state.history
  );

  const latest =
    HistorySelectors.latest(history).slice(0, 5);

  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900">
          Recent Activity
        </h2>

        <span className="text-sm text-slate-500">
          Last 5 Attempts
        </span>
      </div>

      {latest.length === 0 ? (
        <div className="py-8 text-center text-slate-500">
          No tests attempted yet.
        </div>
      ) : (
        <div className="space-y-3">
          {latest.map((item) => (
            <div
              key={`${item.exam}-${item.testId}`}
              className="flex items-center justify-between rounded-xl border border-slate-100 p-4"
            >
              <div>
                <p className="font-semibold text-slate-900">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.exam.toUpperCase()} •{" "}
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>

              <div className="text-right">
                <p className="font-bold text-[#0A4EA3]">
                  {item.netWPM.toFixed(0)} WPM
                </p>

                <p className="text-sm text-slate-500">
                  {item.accuracy.toFixed(0)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}