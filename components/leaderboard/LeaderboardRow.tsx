"use client";

import { ArrowDown, ArrowUp, Medal, Minus } from "lucide-react";

import type { LeaderboardPlayer } from "@/lib/leaderboard/leaderboard.types";

interface LeaderboardRowProps {
  player: LeaderboardPlayer;
}

function getRankColor(rank: number) {
  if (rank === 1) {
    return "bg-yellow-100 text-yellow-700 border-yellow-200";
  }

  if (rank === 2) {
    return "bg-slate-100 text-slate-700 border-slate-200";
  }

  if (rank === 3) {
    return "bg-orange-100 text-orange-700 border-orange-200";
  }

  return "bg-slate-50 text-slate-700 border-slate-200";
}

function getAvatarGradient(id: string) {
  const gradients = [
    "from-blue-500 to-indigo-600",
    "from-purple-500 to-pink-600",
    "from-emerald-500 to-green-600",
    "from-orange-500 to-red-500",
    "from-cyan-500 to-blue-500",
    "from-violet-500 to-fuchsia-500",
  ];

  let hash = 0;

  for (let i = 0; i < id.length; i++) {
    hash += id.charCodeAt(i);
  }

  return gradients[hash % gradients.length];
}

export default function LeaderboardRow({
  player,
}: LeaderboardRowProps) {
  return (
    <div
      className={`grid items-center gap-4 border-b border-slate-100 px-6 py-4 transition-colors duration-200 lg:grid-cols-7 ${
        player.isCurrentUser ? "bg-blue-50" : "hover:bg-slate-50"
      }`}
    >
      {/* Rank */}
      <div>
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-bold ${getRankColor(
            player.rank
          )}`}
        >
          {player.rank <= 3 ? <Medal size={18} /> : `#${player.rank}`}
        </span>
      </div>

      {/* Player */}
      <div className="lg:col-span-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${getAvatarGradient(
              player.id
            )} font-bold text-white shadow`}
          >
            {player.avatar}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-slate-900">{player.name}</p>

              {player.isCurrentUser && (
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                  You
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500">{player.badge}</p>
          </div>
        </div>
      </div>

      {/* WPM */}
      <div>
        <p className="font-semibold text-slate-900">{player.bestWPM}</p>
        <p className="text-xs text-slate-500">WPM</p>
      </div>

      {/* Accuracy */}
      <div>
        <p className="font-semibold text-slate-900">
          {player.accuracy}%
        </p>
        <p className="text-xs text-slate-500">Accuracy</p>
      </div>

      {/* Tests */}
      <div>
        <p className="font-semibold text-slate-900">
          {player.totalTests}
        </p>
        <p className="text-xs text-slate-500">Tests</p>
      </div>

      {/* Trend */}
      <div className="flex items-center gap-1">
        {player.trend > 0 ? (
          <>
            <ArrowUp size={16} className="text-green-600" />
            <span className="font-medium text-green-600">
              +{player.trend}
            </span>
          </>
        ) : player.trend < 0 ? (
          <>
            <ArrowDown size={16} className="text-red-600" />
            <span className="font-medium text-red-600">
              {player.trend}
            </span>
          </>
        ) : (
          <>
            <Minus size={16} className="text-slate-400" />
            <span className="text-slate-500">--</span>
          </>
        )}
      </div>
    </div>
  );
}