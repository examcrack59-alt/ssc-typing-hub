"use client";

import { Trophy, Users } from "lucide-react";

interface LeaderboardHeaderProps {
  totalPlayers?: number;
}

export default function LeaderboardHeader({
  totalPlayers = 500,
}: LeaderboardHeaderProps) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100">
            <Trophy className="text-amber-600" size={24} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Leaderboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Compete with other typists and climb the rankings.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">
        <Users className="text-blue-600" size={22} />

        <div>
          <p className="text-2xl font-bold text-slate-900">
            {totalPlayers.toLocaleString()}
          </p>

          <p className="text-sm text-slate-500">
            Active Players
          </p>
        </div>
      </div>
    </div>
  );
}