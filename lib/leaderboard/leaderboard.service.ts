import { generateLeaderboard } from "./leaderboard.generator";
import type { LeaderboardPlayer } from "./leaderboard.types";

export interface LeaderboardResult {
  players: LeaderboardPlayer[];
  topPlayers: LeaderboardPlayer[];
  currentUser: LeaderboardPlayer | null;
}

function calculateScore(player: LeaderboardPlayer) {
  return (
    player.bestWPM * 0.6 +
    player.accuracy * 0.3 +
    player.totalTests * 0.1
  );
}

function assignRanks(players: LeaderboardPlayer[]) {
  return players.map((player, index) => ({
    ...player,
    rank: index + 1,
  }));
}

export class LeaderboardService {
  static getLeaderboard(currentUser?: LeaderboardPlayer): LeaderboardResult {
    const players = [...generateLeaderboard(500)];

    if (currentUser) {
      players.push(currentUser);
    }

    players.sort((a, b) => calculateScore(b) - calculateScore(a));

    const rankedPlayers = assignRanks(players);

    const user =
      rankedPlayers.find((player) => player.isCurrentUser) ?? null;

    return {
      players: rankedPlayers,
      topPlayers: rankedPlayers.slice(0, 3),
      currentUser: user,
    };
  }

  static getNearbyPlayers(
    players: LeaderboardPlayer[],
    rank: number,
    range = 3
  ) {
    const start = Math.max(rank - range - 1, 0);
    const end = Math.min(rank + range, players.length);

    return players.slice(start, end);
  }

  static searchPlayers(
    players: LeaderboardPlayer[],
    keyword: string
  ) {
    if (!keyword.trim()) return players;

    return players.filter((player) =>
      player.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}