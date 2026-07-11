export interface AccuracyResult {
  correct: number;
  incorrect: number;
  accuracy: number;
}

export function calculateAccuracy(
  correct: number,
  incorrect: number
): AccuracyResult {
  const total = correct + incorrect;

  if (total === 0) {
    return {
      correct,
      incorrect,
      accuracy: 100,
    };
  }

  return {
    correct,
    incorrect,
    accuracy: Number(
      ((correct / total) * 100).toFixed(2)
    ),
  };
}