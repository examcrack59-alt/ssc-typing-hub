"use client";

import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardFilters from "./LeaderboardFilters";
import TopPodium from "./TopPodium";
import YourRankCard from "./YourRankCard";
import LeaderboardTable from "./LeaderboardTable";

import { useState } from "react";
import { LeaderboardService } from "@/lib/leaderboard/leaderboard.service";

export default function LeaderboardPage() {
  const [activeFilter, setActiveFilter] = useState("overall");
  const [search, setSearch] = useState("");

  const { players, topPlayers, currentUser } =
    LeaderboardService.getLeaderboard();

  return (
    <div className="space-y-6">
      <LeaderboardHeader totalPlayers={players.length} />

      <LeaderboardFilters
        activeFilter={activeFilter}
        search={search}
        onFilterChange={setActiveFilter}
        onSearchChange={setSearch}
      />

      {currentUser && <YourRankCard player={currentUser} />}

      <TopPodium players={topPlayers} />

      <LeaderboardTable players={players} />
    </div>
  );
}