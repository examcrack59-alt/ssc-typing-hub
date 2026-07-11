 

export interface TypingStats {
  grossWPM: number;
  netWPM: number;
  rawWPM: number;

  cpm: number;

  accuracy: number;

  errorPenalty: number;

  typedCharacters: number;

  correctCharacters: number;
  incorrectCharacters: number;

  extraCharacters: number;
  skippedCharacters: number;

  completionPercentage: number;
}

export function createStats(
  correctCharacters: number,
  incorrectCharacters: number,
  extraCharacters: number,
  skippedCharacters: number,
  totalCharacters: number,
  elapsedSeconds: number
): TypingStats {
  const safeElapsedSeconds = Math.max(
    1,
    elapsedSeconds
  );

  const typedCharacters =
  correctCharacters +
  incorrectCharacters +
  extraCharacters;
  const minutes =
    safeElapsedSeconds / 60;

  // Gross WPM
const grossWPM = Number(
  (
    typedCharacters /
    5 /
    Math.max(minutes, 1 / 60)
  ).toFixed(2)
);

const errorPenalty = Number(
  (
    (incorrectCharacters +
      extraCharacters +
      skippedCharacters) /
    5 /
    Math.max(minutes, 1 / 60)
  ).toFixed(2)
);

  // Net WPM
const netWPM = Math.max(
0,
Number(
(grossWPM - errorPenalty).toFixed(2)
)
);


const rawWPM = Number(
(
correctCharacters /
5 /
minutes
).toFixed(2)
);

  // Accuracy
 const accuracy =
typedCharacters === 0
? 100
: Number(
(
(correctCharacters /
typedCharacters) *
100
).toFixed(2)
);
  // CPM
const cpm = Math.round(
  typedCharacters /
    Math.max(minutes, 1 / 60)
);
const completionPercentage = Number(
(
typedCharacters /
Math.max(totalCharacters,1) *
100
).toFixed(2)
);

  return {

grossWPM,

netWPM,

rawWPM,

cpm,

accuracy,

errorPenalty,

typedCharacters,

correctCharacters,

incorrectCharacters,

extraCharacters,

skippedCharacters,

completionPercentage,

};
}