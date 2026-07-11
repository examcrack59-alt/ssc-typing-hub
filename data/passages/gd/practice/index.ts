import gdPractice1 from "./gd-practice-1";
import gdPractice2 from "./gd-practice-2";
import gdPractice3 from "./gd-practice-3";
import gdPractice4 from "./gd-practice-4";
import gdPractice5 from "./gd-practice-5";

export const gdPracticePassages = {
  "gd-practice-1": gdPractice1,
  "gd-practice-2": gdPractice2,
  "gd-practice-3": gdPractice3,
  "gd-practice-4": gdPractice4,
  "gd-practice-5": gdPractice5,
} as const;

export type GdPracticePassageId =
  keyof typeof gdPracticePassages;