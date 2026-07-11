"use client";

import type { ExamPerformance } from "@/lib/services/historySelectors";

interface ExamPerformanceTableProps {
  data: ExamPerformance[];
}

export default function ExamPerformanceTable({
  data,
}: ExamPerformanceTableProps) {
  if (data.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center text-gray-500">
        No exam performance available yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="min-w-full">
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Exam
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold">
              Tests
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold">
              Avg WPM
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold">
              Best WPM
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold">
              Avg Accuracy
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold">
              Best Accuracy
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold">
              Pass Rate
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.exam}
              className="border-b last:border-0 hover:bg-gray-50"
            >
              <td className="px-4 py-3 font-medium">
                {item.exam}
              </td>

              <td className="px-4 py-3 text-right">
                {item.totalTests}
              </td>

              <td className="px-4 py-3 text-right">
                {item.averageWPM}
              </td>

              <td className="px-4 py-3 text-right font-semibold">
                {item.bestWPM}
              </td>

              <td className="px-4 py-3 text-right">
                {item.averageAccuracy}%
              </td>

              <td className="px-4 py-3 text-right font-semibold">
                {item.bestAccuracy}%
              </td>

              <td className="px-4 py-3 text-right">
                {item.passRate}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}