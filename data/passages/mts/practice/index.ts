import mtsPractice1 from "./mts-practice-1";
import mtsPractice2 from "./mts-practice-2";
import mtsPractice3 from "./mts-practice-3";
import mtsPractice4 from "./mts-practice-4";
import mtsPractice5 from "./mts-practice-5";

export const mtsPracticePassages = {
  "mts-practice-1": mtsPractice1,
  "mts-practice-2": mtsPractice2,
  "mts-practice-3": mtsPractice3,
  "mts-practice-4": mtsPractice4,
  "mts-practice-5": mtsPractice5,
} as const;

export type MtsPracticePassageId =
  keyof typeof mtsPracticePassages;