import { TimerEngine } from "./timer";

export interface CountdownOptions {
  duration?: number;
  onTick?: (remaining: number) => void;
  onFinish?: () => void;
}

export class Countdown {
  private timer: TimerEngine;

  private interval: NodeJS.Timeout | null = null;

  constructor(private options: CountdownOptions = {}) {
    this.timer = new TimerEngine(
      options.duration ?? 600
    );
  }

  start() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.timer.tick();

      this.options.onTick?.(
        this.timer.getState().remaining
      );

      if (this.timer.getState().finished) {
        this.stop();
        this.options.onFinish?.();
      }
    }, 1000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  reset() {
    this.stop();
    this.timer.reset();
  }

  getTimer() {
    return this.timer;
  }
}