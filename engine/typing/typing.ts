import type { Passage } from "@/types";
import type { TypingStore } from "@/store/typing.store";

import { validateCharacter } from "./validation";
import { calculateAccuracy } from "@/engine/stats";
export function processCharacter(
  typedCharacter: string,
  passage: Passage,
  store: TypingStore
) {
  // Test already finished
  if (store.finished) {
    return null;
  }

  const currentIndex = store.currentCharacter;

  // End of passage
  if (currentIndex >= passage.characters.length) {
    store.finish();
    return null;
  }

  // Start timer/test on first key
  if (!store.started) {
    store.start();
  }

  const expectedCharacter =
    passage.characters[currentIndex].char;

  // Validate typed character
  const result = validateCharacter(
    expectedCharacter,
    typedCharacter
  );

  // Update current character status
  store.updateCharacterStatus(
    currentIndex,
    result.status
  );
const nextStatus = [...store.status];

nextStatus[currentIndex] = result.status;

let correct = 0;
let incorrect = 0;
let extra = 0;
let skipped = 0;

for (const state of nextStatus) {
  switch (state) {
    case "correct":
      correct++;
      break;

    case "incorrect":
      incorrect++;
      break;

    case "extra":
      extra++;
      break;

    case "skipped":
      skipped++;
      break;
  }
}

for (const state of nextStatus) {
  if (state === "correct") {
    correct++;
    continue;
  }

  if (
    state === "incorrect" ||
    state === "extra" ||
    state === "skipped"
  ) {
    incorrect++;
  }
}

const accuracy = calculateAccuracy(
  correct,
  incorrect
).accuracy;

const typedCharacters =
  correct +
  incorrect +
  extra;

store.setStats({
  accuracy,

  errors:
    incorrect +
    extra +
    skipped,

  typedCharacters,

  correctCharacters: correct,

  incorrectCharacters: incorrect,

  extraCharacters: extra,

  skippedCharacters: skipped,

  completionPercentage: Number(
    (
      (typedCharacters /
        passage.characters.length) *
      100
    ).toFixed(2)
  ),
});
  // Move to next character
  const nextIndex = currentIndex + 1;

  store.setCurrentCharacter(nextIndex);

  // Test completed
  if (nextIndex >= passage.characters.length) {
  store.finish();
  store.clearTypedText();

  return result;
}

  // Update current word & line safely
  const layout =
    passage.layoutCharacters[nextIndex];

  if (layout) {
    store.setCurrentWord(layout.wordId);
    store.setCurrentLine(layout.lineId);
  }

  return result;
}

/**
 * Handle Backspace
 */
export function processBackspace(
  passage: Passage,
  store: TypingStore
) {
  if (store.finished) {
    return;
  }

  const currentIndex = store.currentCharacter;

  if (currentIndex <= 0) {
    return;
  }

  const previousIndex = currentIndex - 1;

  store.setCurrentCharacter(previousIndex);
  store.incrementBackspace();

  store.updateCharacterStatus(
    previousIndex,
    "idle"
  );
const nextStatus = [...store.status];

nextStatus[previousIndex] = "idle";

let correct = 0;
let incorrect = 0;

for (const state of nextStatus) {
  if (state === "correct") {
    correct++;
    continue;
  }

  if (
    state === "incorrect" ||
    state === "extra" ||
    state === "skipped"
  ) {
    incorrect++;
  }
}

 

const accuracy = calculateAccuracy(
  correct,
  incorrect
).accuracy;

store.setStats({
  accuracy,

  errors: incorrect,

  typedCharacters: correct + incorrect,

  correctCharacters: correct,

  incorrectCharacters: incorrect,
});
  const layout =
    passage.layoutCharacters[previousIndex];

  if (layout) {
    store.setCurrentWord(layout.wordId);
    store.setCurrentLine(layout.lineId);
  }
}