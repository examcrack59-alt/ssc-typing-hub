import type { Passage } from "@/types";
import type { TypingStore } from "@/store/typing.store";

import { validateCharacter } from "./validation";

export function processCharacter(
  typedCharacter: string,
  passage: Passage,
  store: TypingStore
) {
  if (store.finished) {
    return;
  }

  const currentIndex = store.currentCharacter;

  if (currentIndex >= passage.characters.length) {
    store.finish();
    return;
  }

  const expectedCharacter =
    passage.characters[currentIndex].char;

  const result = validateCharacter(
    expectedCharacter,
    typedCharacter
  );

  if (!store.started) {
    store.start();
  }

  store.updateCharacterStatus(
    currentIndex,
    result.status
  );

  const nextCharacter = currentIndex + 1;

  store.setCurrentCharacter(nextCharacter);

  if (nextCharacter >= passage.characters.length) {
    store.finish();
    return result;
  }

  const layout =
    passage.layoutCharacters[nextCharacter];

  store.setCurrentWord(layout.wordId);

  store.setCurrentLine(layout.lineId);

  return result;
}