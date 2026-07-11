import gdReExam1 from "./gd-reexam-1";
import gdReExam2 from "./gd-reexam-2";
import gdReExam3 from "./gd-reexam-3";
import gdReExam4 from "./gd-reexam-4";
import gdReExam5 from "./gd-reexam-5";

export const gdReExamPassages = {
  "gd-reexam-1": gdReExam1,
  "gd-reexam-2": gdReExam2,
  "gd-reexam-3": gdReExam3,
  "gd-reexam-4": gdReExam4,
  "gd-reexam-5": gdReExam5,
} as const;

export type GdReExamPassageId =
  keyof typeof gdReExamPassages;