import { Passage } from "@/types";

import { createCharacters } from "./createCharacters";
import { createWords } from "./createWords";

/**
 * Converts raw passage text into an immutable Passage object.
 *
 * Flow:
 * Raw Text
 *    ↓
 * Characters
 *    ↓
 * Words
 *    ↓
 * Passage
 */
export function tokenize(
  id: string,
  title: string,
  text: string
): Passage {
  const characters = createCharacters(text);

  const words = createWords(characters);

  return {
    id,
    title,
    text,

    characters,

    words,

    lines: [],

    layoutCharacters: [],

    layoutWords: [],

    layoutLines: [],
  };
}