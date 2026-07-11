import stenographerReExam1 from "./stenographer-reexam-1";
import stenographerReExam2 from "./stenographer-reexam-2";
import stenographerReExam3 from "./stenographer-reexam-3";
import stenographerReExam4 from "./stenographer-reexam-4";
import stenographerReExam5 from "./stenographer-reexam-5";

export const stenographerReExamPassages = {
  "stenographer-reexam-1": stenographerReExam1,
  "stenographer-reexam-2": stenographerReExam2,
  "stenographer-reexam-3": stenographerReExam3,
  "stenographer-reexam-4": stenographerReExam4,
  "stenographer-reexam-5": stenographerReExam5,
} as const;

export type StenographerReExamPassageId =
  keyof typeof stenographerReExamPassages;