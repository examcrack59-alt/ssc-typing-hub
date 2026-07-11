export interface OfficialTimer {
  totalSeconds: number;
  remainingSeconds: number;

  elapsedSeconds: number;

  started: boolean;
  paused: boolean;
  finished: boolean;

  startTimestamp: number | null;
  endTimestamp: number | null;
}