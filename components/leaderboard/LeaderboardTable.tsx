"use client";

import type { LeaderboardPlayer } from "@/lib/leaderboard/leaderboard.types";
import LeaderboardRow from "./LeaderboardRow";

interface LeaderboardTableProps {
  players: LeaderboardPlayer[];
}

export default function LeaderboardTable({
  players,
}: LeaderboardTableProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-6 gap-4 border-b bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-600">
        <div>Rank</div>
        <div className="col-span-2">Player</div>
        <div>WPM</div>
        <div>Accuracy</div>
        <div>Tests</div>
        <div>Trend</div>
      </div>

      {players.map((player) => (
        <LeaderboardRow
          key={player.id}
          player={player}
        />
      ))}
    </section>
  );
}