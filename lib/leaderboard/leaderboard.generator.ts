import { BADGES, FIRST_NAMES, LAST_NAMES } from "./leaderboard.constants";
import type { LeaderboardBadge, LeaderboardPlayer } from "./leaderboard.types";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function randomBetween(seed: number, min: number, max: number) {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}

function getName(seed: number) {
  const first =
    FIRST_NAMES[randomBetween(seed + 11, 0, FIRST_NAMES.length - 1)];

  const last =
    LAST_NAMES[randomBetween(seed + 27, 0, LAST_NAMES.length - 1)];

  return `${first} ${last}`;
}

function getBadge(rank: number): LeaderboardBadge {
  if (rank <= 3) return "Champion";
  if (rank <= 10) return "Elite";
  if (rank <= 30) return "Speedster";
  if (rank <= 75) return "Accuracy Master";
  if (rank <= 150) return "Consistent";

  return "Rising Star";
}

export function generateLeaderboard(
  totalPlayers = 500
): LeaderboardPlayer[] {
  const players: LeaderboardPlayer[] = [];

  for (let rank = 1; rank <= totalPlayers; rank++) {
    const decay = rank / totalPlayers;

    const bestWPM = Number(
      (74 - decay * 28 + seededRandom(rank) * 1.2).toFixed(1)
    );

    const accuracy = Number(
      (99.7 - decay * 5 + seededRandom(rank + 90) * 0.4).toFixed(2)
    );

    const totalTests = Math.round(
      900 - decay * 780 + randomBetween(rank + 100, 0, 40)
    );

    const totalPracticeTime = Math.round(
      totalTests * (9 + seededRandom(rank + 50))
    );

    const trend = randomBetween(rank + 15, -6, 8);

    const streak = randomBetween(rank + 41, 1, 45);

    players.push({
      id: `player-${rank}`,

      rank,

      name: getName(rank),

      avatar: getName(rank)
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),

      bestWPM,

      accuracy,

      totalTests,

      totalPracticeTime,

      badge: getBadge(rank),

      trend,

      streak,

      isCurrentUser: false,
    });
  }

  return players;
}