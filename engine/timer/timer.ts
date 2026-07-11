export interface TypingTimer {
  duration: number;
  remaining: number;
  started: boolean;
  finished: boolean;
}

export class TimerEngine {
  private duration: number;
  private remaining: number;

  constructor(duration = 600) {
    this.duration = duration;
    this.remaining = duration;
  }

  getState(): TypingTimer {
    return {
      duration: this.duration,
      remaining: this.remaining,
      started: this.remaining !== this.duration,
      finished: this.remaining <= 0,
    };
  }

  tick() {
    if (this.remaining > 0) {
      this.remaining--;
    }
  }

  reset() {
    this.remaining = this.duration;
  }

  set(seconds: number) {
    this.remaining = seconds;
  }

  getTimeString() {
    const min = Math.floor(this.remaining / 60);
    const sec = this.remaining % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
}