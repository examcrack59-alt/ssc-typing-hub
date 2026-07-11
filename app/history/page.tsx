"use client";
import Link from "next/link";
 

import { useHistoryStore } from "@/store/history.store";
import { HistorySelectors } from "@/lib/history/history.selectors";

export default function HistoryPage() {
  const history = useHistoryStore(
    (state) => state.history
  );

  const latest =
    HistorySelectors.latest(history);

  return (
    <main className="p-8">
 <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 via-[#0A4EA3] to-cyan-700 p-8 shadow-xl">

  <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

    <div>

      <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur">
        📊 Performance History
      </div>

      <h1 className="mt-5 text-5xl font-black tracking-tight text-white">
        Previous Tests
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
        Review all completed typing tests, retry previous exams,
        compare your performance and monitor your improvement
        with detailed reports.
      </p>

    </div>

    <div className="grid grid-cols-2 gap-4">

      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">

        <p className="text-4xl font-black text-white">
          {latest.length}
        </p>

        <p className="mt-2 text-sm font-medium text-blue-100">
          Tests Taken
        </p>

      </div>

      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">

        <p className="text-4xl font-black text-green-300">
          {
            latest.filter(
              (item) => item.resultStatus === "PASS"
            ).length
          }
        </p>

        <p className="mt-2 text-sm font-medium text-blue-100">
          Tests Passed
        </p>

      </div>

    </div>

  </div>

</div>
      {latest.length === 0 ? (
       <div className="flex min-h-[70vh] items-center justify-center">
  <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">

   <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-6xl shadow-xl shadow-cyan-500/30">
      📊
    </div>

    <h2 className="mt-8 text-4xl font-black text-slate-900">
      No Practice History Yet
    </h2>

   <p className="mt-4 text-xl font-medium text-slate-600">
      You haven't completed any typing tests yet.
    </p>

    <p className="mt-2 text-slate-400">
      Complete your first practice test to unlock detailed
      reports, analytics, WPM tracking and performance history.
    </p>

    <div className="mt-8 grid gap-4 sm:grid-cols-2">

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-2xl">⚡</div>
        <h3 className="mt-2 font-semibold">
          Live WPM Tracking
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-2xl">🎯</div>
        <h3 className="mt-2 font-semibold">
          Accuracy Reports
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-2xl">📈</div>
        <h3 className="mt-2 font-semibold">
          Performance Analytics
        </h3>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-2xl">🏆</div>
        <h3 className="mt-2 font-semibold">
          Personal Records
        </h3>
      </div>

    </div>

    <Link
      href="/practice"
      className="
        mt-10
        inline-flex
        items-center
        justify-center
       rounded-2xl
       shadow-xl
shadow-blue-500/30
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        px-8
        py-3
        font-semibold
        text-white
        transition
        hover:scale-105
      "
    >
      🚀 Start Your First Test
    </Link>

  </div>
</div>
      ) : (
       <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
  <table className="w-full">
    <thead className="bg-slate-50">
      <tr className="text-left text-sm font-semibold text-slate-600">
        <th className="px-6 py-4">Date</th>
        <th className="px-6 py-4">Exam</th>
        <th className="px-6 py-4">Test</th>
        <th className="px-6 py-4">Net WPM</th>
        <th className="px-6 py-4">Accuracy</th>
        <th className="px-6 py-4">Status</th>
        <th className="px-6 py-4 text-center">Action</th>
      </tr>
    </thead>

    <tbody>
      {latest.map((item) => (
        <tr
          key={`${item.exam}-${item.testId}`}
          className="border-t border-slate-100 hover:bg-slate-50"
        >
          <td className="px-6 py-4">
            {new Date(item.date).toLocaleDateString()}
          </td>

          <td className="px-6 py-4 font-medium uppercase">
            {item.exam}
          </td>

          <td className="px-6 py-4">
            {item.title}
          </td>

          <td className="px-6 py-4 font-semibold text-[#0A4EA3]">
            {item.netWPM.toFixed(0)}
          </td>

          <td className="px-6 py-4">
            {item.accuracy.toFixed(0)}%
          </td>

          <td className="px-6 py-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.resultStatus === "PASS"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.resultStatus}
            </span>
          </td>
          <td className="px-6 py-4">
  <div className="flex items-center justify-center gap-2">
    <Link
     href={`/practice/${item.exam}/${item.testId}`}
      className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-blue-700"
    >
      Retry
    </Link>

  <Link
  href={`/history/${item.exam}/${item.testId}`}
  className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
>
  View
</Link>
  </div>
</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
               
             
         
      )}
    </main>
  );
}