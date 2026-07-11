"use client";

import { Crown, Medal, Trophy } from "lucide-react";
import type { LeaderboardPlayer } from "@/lib/leaderboard/leaderboard.types";

interface TopPodiumProps {
  players: LeaderboardPlayer[];
}

const topStyles = [
  {
    icon: Crown,
    iconClass: "text-yellow-600",
    border: "border-yellow-200",
    bg: "bg-yellow-50",
    badge: "bg-yellow-500",
  },
  {
    icon: Medal,
    iconClass: "text-slate-600",
    border: "border-slate-200",
    bg: "bg-slate-50",
    badge: "bg-slate-500",
  },
  {
    icon: Trophy,
    iconClass: "text-orange-600",
    border: "border-orange-200",
    bg: "bg-orange-50",
    badge: "bg-orange-500",
  },
];

const avatarGradients = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-emerald-500 to-green-600",
];

export default function TopPodium({
  players,
}: TopPodiumProps) {
  const topPlayers = players.slice(0, 3);

  if (!topPlayers.length) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          🏆 Top Performers
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Highest ranked typing performers.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {topPlayers.map((player, index) => {
          const style = topStyles[index];
          const Icon = style.icon;

          return (
            <div
              key={player.id}
              className={`relative rounded-2xl border ${style.border} ${style.bg} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              {/* Rank Badge */}
              <div
                className={`absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full ${style.badge} text-sm font-bold text-white`}
              >
                #{player.rank}
              </div>

              {/* Icon */}
              <Icon
                size={28}
                className={style.iconClass}
              />

              {/* Avatar */}
              <div
                className={`mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${
                  avatarGradients[index]
                } text-xl font-bold text-white shadow-md`}
              >
                {player.avatar}
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {player.name}
              </h3>

              <p className="text-sm text-slate-500">
                {player.badge}
              </p>

              {/* Stats */}
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Best WPM
                  </span>

                  <span className="font-semibold text-slate-900">
                    {player.bestWPM}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Accuracy
                  </span>

                  <span className="font-semibold text-green-600">
                    {player.accuracy}%
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Tests
                  </span>

                  <span className="font-semibold text-slate-900">
                    {player.totalTests}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Streak
                  </span>

                  <span className="font-semibold text-orange-600">
                    🔥 {player.streak}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}