"use client";

import { notFound, useParams } from "next/navigation";
import { useHistoryStore } from "@/store/history.store";

export default function HistoryDetailPage() {
  const params = useParams();

  const exam = params.exam as string;
  const testId = Number(params.testId);

  const history = useHistoryStore(
    (state) => state.history
  );

  const item = history.find(
    (entry) =>
      entry.exam === exam &&
      entry.testId === testId
  );

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Test Result
      </h1>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <p className="text-sm text-slate-500">
              Exam
            </p>
            <p className="font-semibold">
              {item.exam.toUpperCase()}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Test
            </p>
            <p className="font-semibold">
              {item.title}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Net WPM
            </p>
            <p className="text-2xl font-bold text-[#0A4EA3]">
              {item.netWPM.toFixed(0)}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Accuracy
            </p>
            <p className="text-2xl font-bold">
              {item.accuracy.toFixed(0)}%
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Status
            </p>

            <p
              className={
                item.resultStatus === "PASS"
                  ? "font-bold text-green-600"
                  : "font-bold text-red-600"
              }
            >
              {item.resultStatus}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Attempt Date
            </p>

            <p className="font-semibold">
              {new Date(item.date).toLocaleString()}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}