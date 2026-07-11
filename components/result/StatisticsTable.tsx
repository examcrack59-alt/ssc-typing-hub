"use client";
import { useResultStore } from "@/store/result.store";

import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CornerDownLeft,
  Keyboard,
  Clock3,
  Ban,
  ShieldCheck,
  Trophy,
  CircleDot,
} from "lucide-react";

interface StatRowProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  color: string;
}

function StatRow({
  icon,
  label,
  value,
  color,
}: StatRowProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-slate-100
        bg-slate-50
        p-4
        transition-all
        duration-300
        hover:border-blue-200
        hover:bg-blue-50
      "
    >
      <div className="flex items-center gap-3">

        <div
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            ${color}
            text-white
            shadow
          `}
        >
          {icon}
        </div>

        <div>

          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

        </div>

      </div>

      <span className="text-2xl font-black text-slate-800">
        {value}
      </span>

    </div>
  );
}

export default function StatisticsTable() {
 const {
  correctCharacters,
  incorrectCharacters,
  extraCharacters,
  skippedCharacters,
  backspaceCount,
  elapsedTime,
  resultStatus,
} = useResultStore();

const totalTyped =
  correctCharacters +
  incorrectCharacters +
  extraCharacters;

const grossErrors =
  incorrectCharacters +
  extraCharacters +
  skippedCharacters;

const netErrors = incorrectCharacters;

const minutes = Math.floor(elapsedTime / 60);
const seconds = elapsedTime % 60;

const formattedTime = `${minutes
  .toString()
  .padStart(2, "0")}:${seconds
  .toString()
  .padStart(2, "0")}`;
  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-white shadow-lg">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

        <div>

          <h2 className="text-2xl font-black text-slate-800">
            Detailed Statistics
          </h2>

          <p className="mt-1 text-slate-500">
            Complete typing performance report
          </p>

        </div>

        <div className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
          SSC Analysis
        </div>

      </div>

      {/* Content */}

      <div className="grid gap-8 p-8 lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-4">

          <StatRow
            icon={<CheckCircle2 size={22} />}
            label="Correct Characters"
            value={correctCharacters}
            color="bg-green-600"
          />

          <StatRow
            icon={<XCircle size={22} />}
            label="Incorrect Characters"
            value={incorrectCharacters}
            color="bg-red-600"
          />

          <StatRow
            icon={<AlertTriangle size={22} />}
            label="Extra Characters"
            value={extraCharacters}
            color="bg-orange-500"
          />

          <StatRow
            icon={<Ban size={22} />}
            label="Skipped Characters"
            value={skippedCharacters}
            color="bg-yellow-500"
          />

          <StatRow
            icon={<CornerDownLeft size={22} />}
            label="Backspace Used"
            value={backspaceCount}
            color="bg-purple-600"
          />

        </div>

        {/* Right */}

        <div className="space-y-4">

          <StatRow
            icon={<Keyboard size={22} />}
            label="Total Typed"
            value={totalTyped}
            color="bg-cyan-600"
          />

          <StatRow
            icon={<Clock3 size={22} />}
            label="Elapsed Time"
            value={formattedTime}
            color="bg-blue-600"
          />

          <StatRow
            icon={<AlertTriangle size={22} />}
            label="Gross Errors"
            value={grossErrors}
            color="bg-red-500"
          />

          <StatRow
            icon={<ShieldCheck size={22} />}
            label="Net Errors"
           value={netErrors}
            color="bg-pink-600"
          />

        <StatRow
  icon={<Trophy size={22} />}
  label="Final Result"
  value={resultStatus}
  color={
    resultStatus === "PASS"
      ? "bg-emerald-600"
      : "bg-red-600"
  }
/>
        </div>

      </div>

      {/* Bottom Summary */}

      <div className="border-t border-slate-200 bg-slate-50 px-8 py-5">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div className="flex items-center gap-2 text-slate-600">
            <CircleDot
              size={18}
              className="text-green-600"
            />
            Excellent Accuracy Performance
          </div>

          <div className="rounded-xl bg-green-600 px-5 py-2 font-bold text-white shadow">
            READY FOR NEXT TEST
          </div>

        </div>

      </div>

    </section>
  );
}