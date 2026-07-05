import { Character } from "./character";
import { Word } from "./word";
import { Line } from "./line";
import {
  LayoutCharacter,
  LayoutWord,
  LayoutLine,
} from "./layout";

export interface Passage {
  id: string;

  title: string;

  text: string;

  characters: Character[];

  words: Word[];

  lines: Line[];

  layoutCharacters: LayoutCharacter[];

  layoutWords: LayoutWord[];

  layoutLines: LayoutLine[];
}