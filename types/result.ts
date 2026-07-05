import { TypingStats } from "./stats";

export interface Result {
  completed: boolean;

  duration: number;

  stats: TypingStats;
}