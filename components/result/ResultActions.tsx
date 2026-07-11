"use client";

import { useRouter } from "next/navigation";
import { useResultStore } from "@/store/result.store";

import {
  RotateCcw,
  ArrowLeft,
  ArrowRight,
  Home,
} from "lucide-react";

export default function ResultActions() {
  const router = useRouter();
 const {
  exam,
  testId,
  resultStatus,
} = useResultStore();
 const TOTAL_TESTS = 30;

const hasPrevious = testId > 1;
const hasNext = testId < TOTAL_TESTS;

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

      <div className="mb-6">

        <h2 className="text-2xl font-black text-slate-800">
         {resultStatus === "PASS"
  ? "Congratulations!"
  : "Keep Practicing"}
        </h2>

        <p className="mt-2 text-slate-500">
         {resultStatus === "PASS"
  ? "You have successfully completed this test. Continue with the next challenge."
  : "Don't worry. Practice the same test again or revise previous lessons to improve your score."}
        </p>

      </div>

     <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {/* Practice Again */}
        <button
          onClick={() =>
  router.push(
    `/typing?exam=${exam.toLowerCase()}&id=${testId}`
  )
}
          className="group rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          <RotateCcw className="mx-auto mb-3" size={28} />

          <h3 className="font-bold">Practice Again</h3>

          <p className="mt-1 text-sm text-blue-100">
          Restart this SSC typing test
          </p>
        </button>

        {/* Next Test */}
      <button
  disabled={!hasNext}
  onClick={() => {
    if (!hasNext) return;

    router.push(
      `/typing?exam=${exam.toLowerCase()}&id=${testId + 1}`
    );
  }}
  className={`group rounded-2xl p-5 text-white shadow-lg transition ${
    hasNext
      ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:-translate-y-1 hover:shadow-xl"
      : "cursor-not-allowed bg-slate-400"
  }`}
>
  <ArrowRight className="mx-auto mb-3" size={28} />

  <h3 className="font-bold">Next Test</h3>

  <p className="mt-1 text-sm">
   {hasNext ? "Continue Practice" : "No More Tests"}
  </p>
</button>

        {/* Dashboard */}
       <button
  disabled={!hasPrevious}
  onClick={() => {
    if (!hasPrevious) return;

    router.push(
      `/typing?exam=${exam.toLowerCase()}&id=${testId - 1}`
    );
  }}
  className={`group rounded-2xl p-5 text-white shadow-lg transition ${
    hasPrevious
      ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:-translate-y-1 hover:shadow-xl"
      : "cursor-not-allowed bg-slate-400"
  }`}
>
  <ArrowLeft className="mx-auto mb-3" size={28} />

  <h3 className="font-bold">Previous Test</h3>

  <p className="mt-1 text-sm">
   {hasPrevious ? "Open Previous Test" : "First Test"}
  </p>
</button>
       <button
  onClick={() => router.push("/practice")}
  className="group rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600 p-5 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
>
  <Home className="mx-auto mb-3" size={28} />

  <h3 className="font-bold">Dashboard</h3>

  <p className="mt-1 text-sm text-purple-100">
   Back to Dashboard
  </p>
</button>  
      </div>
<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">

  <div className="flex flex-col items-center justify-between gap-3 md:flex-row">

    <div>

      <h3 className="text-lg font-bold text-slate-800">
        Test Progress
      </h3>

      <p className="text-sm text-slate-500">
        Test {testId} of {TOTAL_TESTS}
      </p>

    </div>

    <div className="w-full md:w-72">

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
          style={{
            width: `${(testId / TOTAL_TESTS) * 100}%`,
          }}
        />

      </div>

    </div>

  </div>

</div>
    </section>
  );
}