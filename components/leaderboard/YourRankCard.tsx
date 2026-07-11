"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Trophy,
  Gauge,
  Target,
  FileText,
  Clock3,
} from "lucide-react";

import type { LeaderboardPlayer } from "@/lib/leaderboard/leaderboard.types";

interface YourRankCardProps {
  player: LeaderboardPlayer | null;
}

export default function YourRankCard({
  player,
}: YourRankCardProps) {
  if (!player) return null;

  const topPercent = (
    (player.rank / 500) *
    100
  ).toFixed(1);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Your Ranking
          </p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            #{player.rank}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Top {topPercent}% of all players
          </p>
        </div>

        <div className="rounded-full bg-amber-100 p-3">
          <Trophy
            size={24}
            className="text-amber-600"
          />
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2">
        {player.trend > 0 ? (
          <>
            <ArrowUpRight
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold text-green-600">
              +{player.trend}
            </span>
          </>
        ) : player.trend < 0 ? (
          <>
            <ArrowDownRight
              size={18}
              className="text-red-600"
            />

            <span className="font-semibold text-red-600">
              {player.trend}
            </span>
          </>
        ) : (
          <>
            <Minus
              size={18}
              className="text-slate-500"
            />

            <span className="font-semibold text-slate-500">
              No Change
            </span>
          </>
        )}

        <span className="text-sm text-slate-500">
          This Week
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Stat
          icon={<Gauge size={18} />}
          label="Best WPM"
          value={player.bestWPM}
        />

        <Stat
          icon={<Target size={18} />}
          label="Accuracy"
          value={`${player.accuracy}%`}
        />

        <Stat
          icon={<FileText size={18} />}
          label="Tests"
          value={player.totalTests}
        />

        <Stat
          icon={<Clock3 size={18} />}
          label="Practice"
          value={`${player.totalPracticeTime} min`}
        />
      </div>

      <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
        <span className="text-sm text-slate-500">
          Current Badge
        </span>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {player.badge}
        </span>
      </div>
    </div>
  );
}

interface StatProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

function Stat({
  icon,
  label,
  value,
}: StatProps) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="mb-2 flex items-center gap-2 text-slate-500">
        {icon}
        <span className="text-sm">{label}</span>
      </div>

      <p className="text-xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}