import chslReExam1 from "./chsl-reexam-1";
import chslReExam2 from "./chsl-reexam-2";
import chslReExam3 from "./chsl-reexam-3";
import chslReExam4 from "./chsl-reexam-4";
import chslReExam5 from "./chsl-reexam-5";

export const chslReExamPassages = {
  "chsl-reexam-1": chslReExam1,
  "chsl-reexam-2": chslReExam2,
  "chsl-reexam-3": chslReExam3,
  "chsl-reexam-4": chslReExam4,
  "chsl-reexam-5": chslReExam5,
} as const;

export type ChslReExamPassageId =
  keyof typeof chslReExamPassages;