export type LeaderboardBadge =
  | "Champion"
  | "Elite"
  | "Speedster"
  | "Accuracy Master"
  | "Consistent"
  | "Rising Star";

export interface LeaderboardPlayer {
  id: string;

  rank: number;

  name: string;

  avatar: string;

  bestWPM: number;

  accuracy: number;

  totalTests: number;

  totalPracticeTime: number;

  badge: LeaderboardBadge;

  trend: number;

  streak: number;

  isCurrentUser: boolean;
}