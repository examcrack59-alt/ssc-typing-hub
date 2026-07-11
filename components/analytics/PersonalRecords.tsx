"use client";

interface PersonalRecordsProps {
  bestWPM: number;
  bestAccuracy: number;
  totalTests: number;
  totalPracticeTime: number;
}

const records = [
  {
    label: "Best WPM",
    key: "bestWPM",
    suffix: "",
  },
  {
    label: "Best Accuracy",
    key: "bestAccuracy",
    suffix: "%",
  },
  {
    label: "Total Tests",
    key: "totalTests",
    suffix: "",
  },
  {
    label: "Practice Time",
    key: "totalPracticeTime",
    suffix: " min",
  },
] as const;

export default function PersonalRecords(
  props: PersonalRecordsProps
) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-semibold">
        Personal Records
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {records.map((record) => (
          <div
            key={record.key}
            className="rounded-lg border p-4"
          >
            <p className="text-sm text-gray-500">
              {record.label}
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              {props[record.key]}
              {record.suffix}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}