import chslPractice1 from "./chsl-practice-1";
import chslPractice2 from "./chsl-practice-2";
import chslPractice3 from "./chsl-practice-3";
import chslPractice4 from "./chsl-practice-4";
import chslPractice5 from "./chsl-practice-5";

export const chslPracticePassages = {
  "chsl-practice-1": chslPractice1,
  "chsl-practice-2": chslPractice2,
  "chsl-practice-3": chslPractice3,
  "chsl-practice-4": chslPractice4,
  "chsl-practice-5": chslPractice5,
} as const;

export type ChslPracticePassageId =
  keyof typeof chslPracticePassages;