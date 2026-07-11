"use client";

interface WeeklyTrendItem {
  day: string;
  tests: number;
  averageWPM: number;
}

interface WeeklyTrendProps {
  data: WeeklyTrendItem[];
}

export default function WeeklyTrend({
  data,
}: WeeklyTrendProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-semibold">
          Weekly Trend
        </h2>

        <p className="text-sm text-gray-500">
          Last 7 days performance
        </p>
      </div>

      {data.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          No activity found.
        </div>
      ) : (
        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item.day}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="font-medium">{item.day}</p>

                <p className="text-sm text-gray-500">
                  {item.tests} Tests
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  {item.averageWPM} WPM
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}