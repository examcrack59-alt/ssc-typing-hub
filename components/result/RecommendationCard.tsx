"use client";
import { useResultStore } from "@/store/result.store";

import {
  Sparkles,
  Trophy,
  TrendingUp,
  Target,
  ArrowRight,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function RecommendationCard() {
  const {
  accuracy,
  netWPM,
  resultStatus,
  exam,
} = useResultStore();

const grade =
  accuracy >= 98 && netWPM >= 45
    ? "A+"
    : accuracy >= 95 && netWPM >= 35
    ? "A"
    : accuracy >= 90
    ? "B+"
    : accuracy >= 85
    ? "B"
    : "C";

const performanceTitle =
  resultStatus === "PASS"
    ? "Excellent Performance"
    : "Keep Practicing";

const nextTarget = Math.max(
  35,
  Math.ceil(netWPM / 10) * 10 + 10
);
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Header */}
      <div className="relative border-b border-white/10 p-7">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-4 shadow-lg">

            <Sparkles
              size={30}
              className="text-white"
            />

          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-[3px] text-cyan-300">
             PERFORMANCE REPORT
            </p>

            <h2 className="mt-1 text-3xl font-black text-white">
             {performanceTitle}
            </h2>

          </div>

        </div>

      </div>

      {/* Grade */}
      <div className="relative p-7">

        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-widest text-cyan-300">
                PERFORMANCE GRADE
              </p>

              <h1 className="mt-3 text-7xl font-black text-white">
                {grade}
              </h1>

            </div>

            <div className="flex flex-col items-center">

              <Trophy
                size={70}
                className="text-yellow-400"
              />

              <span className="mt-3 rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-slate-900">
                TOP PERFORMANCE
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Strengths */}

      <div className="grid gap-4 px-7 md:grid-cols-2">

        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

          <div className="flex items-center gap-3">

            <ShieldCheck
              size={24}
              className="text-green-400"
            />

            <h3 className="font-bold text-green-300">
              Accuracy
            </h3>

          </div>

          <p className="mt-3 text-sm leading-7 text-slate-300">

            Outstanding typing accuracy with
            minimal mistakes.

          </p>

        </div>

        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

          <div className="flex items-center gap-3">

            <TrendingUp
              size={24}
              className="text-cyan-300"
            />

            <h3 className="font-bold text-cyan-300">
              Speed Growth
            </h3>

          </div>

          <p className="mt-3 text-sm leading-7 text-slate-300">

            Your typing rhythm is stable.
            Keep practicing to increase WPM.

          </p>

        </div>

      </div>

      {/* Goal */}

      <div className="mt-7 px-7">

        <div className="rounded-3xl bg-white/5 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-widest text-slate-400">
                NEXT TARGET
              </p>

              <h2 className="mt-2 text-4xl font-black text-white">
                {nextTarget} WPM
              </h2>

            </div>

            <div className="rounded-full bg-cyan-500 p-5 shadow-xl shadow-cyan-500/40">

              <Target
                size={32}
                className="text-white"
              />

            </div>

          </div>

          <div className="mt-6">

            <div className="h-3 overflow-hidden rounded-full bg-slate-700">

              <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

            </div>

            <div className="mt-2 flex justify-between text-sm text-slate-400">

              <span>Current {netWPM.toFixed(2)} WPM</span>

              <span>Target {nextTarget} WPM</span>

            </div>

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="px-7 py-7">

        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm uppercase tracking-widest text-cyan-300">
                NEXT RECOMMENDED TEST
              </p>

              <h2 className="mt-2 text-2xl font-black text-white">
                SSC CGL Moderate Test 02
              </h2>

              <p className="mt-2 text-slate-300">

                Ready to move to the next
                difficulty level.

              </p>

            </div>

            

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 bg-black/20 px-7 py-5">

        <div className="flex items-center justify-between">

          <div className="flex gap-2">

            <Star className="fill-yellow-400 text-yellow-400" />

            <Star className="fill-yellow-400 text-yellow-400" />

            <Star className="fill-yellow-400 text-yellow-400" />

            <Star className="fill-yellow-400 text-yellow-400" />

            <Star className="fill-yellow-400 text-yellow-400" />

          </div>

          <div className="flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2">

            <Zap
              size={18}
              className="text-green-400"
            />

            <span className="font-bold text-green-300">
              READY FOR SSC MODERATE
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}