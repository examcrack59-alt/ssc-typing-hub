"use client";
import { useResultStore } from "@/store/result.store";

import {
  Gauge,
  Zap,
  Target,
  Trophy,
  TrendingUp,
} from "lucide-react";

interface ScoreCardProps {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  bg: string;
  icon: React.ReactNode;
}

function ScoreCard({
  title,
  value,
  subtitle,
  color,
  bg,
  icon,
}: ScoreCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Top Gradient */}
      <div className={`h-2 w-full ${bg}`} />

      {/* Glow */}
      <div
        className="
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          bg-slate-200/30
          blur-3xl
          transition
          group-hover:scale-125
        "
      />

      <div className="relative p-6">

        {/* Icon */}
        <div
          className={`
            mb-6
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            ${bg}
            text-white
            shadow-lg
          `}
        >
          {icon}
        </div>

        {/* Title */}
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </p>

        {/* Value */}
        <h2 className={`mt-3 text-4xl font-black ${color}`}>
          {value}
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-sm text-slate-500">
          {subtitle}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">

          <span className="text-xs font-semibold text-green-600">
            Live Result
          </span>

          <div className="flex items-center gap-1 text-green-600">

            <TrendingUp size={16} />

            <span className="text-xs font-bold">
              +4%
            </span>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function ScoreCards() {
const {
  netWPM,
  grossWPM,
  rawWPM,
  cpm,
  accuracy,
} = useResultStore();

const score = Math.round(
  (netWPM * 0.7) + (accuracy * 0.3)
);
  return (
    <section className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

      <ScoreCard
        title="Net Speed"
        value={`${netWPM.toFixed(2)} WPM`}
        subtitle="Final Typing Speed"
        color="text-blue-700"
        bg="bg-gradient-to-r from-blue-600 to-cyan-500"
        icon={<Gauge size={28} />}
      />

      

      <ScoreCard
        title="Accuracy"
        value={`${accuracy.toFixed(2)}%`}
        subtitle="Typing Accuracy"
        color="text-orange-500"
        bg="bg-gradient-to-r from-orange-500 to-amber-500"
        icon={<Target size={28} />}
      />

      <ScoreCard
  title="Raw Speed"
  value={`${rawWPM.toFixed(2)} WPM`}
  subtitle="Correct Characters Speed"
  color="text-purple-600"
  bg="bg-gradient-to-r from-purple-600 to-fuchsia-500"
  icon={<Trophy size={28} />}
/>
 

    </section>
  );
}