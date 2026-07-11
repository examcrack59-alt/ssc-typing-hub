export interface SpeedResult {
  characters: number;
  words: number;
  minutes: number;
  wpm: number;
}

export function calculateSpeed(
  characters: number,
  elapsedSeconds: number
): SpeedResult {

  const minutes = elapsedSeconds / 60;

  const words = characters / 5;

  const wpm =
    minutes <= 0
      ? 0
      : Math.round(words / minutes);

  return {
    characters,
    words,
    minutes,
    wpm,
  };
}