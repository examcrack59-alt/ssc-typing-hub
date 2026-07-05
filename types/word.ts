export interface Word {
  id: number;

  text: string;

  characterIds: number[];

  start: number;

  end: number;
}