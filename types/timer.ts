export interface TimerState {
  duration: number;

  remaining: number;

  elapsed: number;

  running: boolean;

  finished: boolean;
}