export interface RenderCharacter {
  characterId: number;
}

export interface RenderWord {
  wordId: number;
  characters: RenderCharacter[];
}

export interface RenderLine {
  lineId: number;
  words: RenderWord[];
}

export interface RenderTree {
  lines: RenderLine[];
}