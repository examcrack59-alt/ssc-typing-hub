import stenographerPractice1 from "./stenographer-practice-1";
import stenographerPractice2 from "./stenographer-practice-2";
import stenographerPractice3 from "./stenographer-practice-3";
import stenographerPractice4 from "./stenographer-practice-4";
import stenographerPractice5 from "./stenographer-practice-5";

export const stenographerPracticePassages = {
  "stenographer-practice-1": stenographerPractice1,
  "stenographer-practice-2": stenographerPractice2,
  "stenographer-practice-3": stenographerPractice3,
  "stenographer-practice-4": stenographerPractice4,
  "stenographer-practice-5": stenographerPractice5,
} as const;

export type StenographerPracticePassageId =
  keyof typeof stenographerPracticePassages;