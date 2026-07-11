import cpoPractice1 from "./cpo-practice-1";
import cpoPractice2 from "./cpo-practice-2";
import cpoPractice3 from "./cpo-practice-3";
import cpoPractice4 from "./cpo-practice-4";
import cpoPractice5 from "./cpo-practice-5";

export const cpoPracticePassages = {
  "cpo-practice-1": cpoPractice1,
  "cpo-practice-2": cpoPractice2,
  "cpo-practice-3": cpoPractice3,
  "cpo-practice-4": cpoPractice4,
  "cpo-practice-5": cpoPractice5,
} as const;

export type CpoPracticePassageId =
  keyof typeof cpoPracticePassages;