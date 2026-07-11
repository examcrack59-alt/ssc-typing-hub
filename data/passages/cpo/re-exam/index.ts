import cpoReExam1 from "./cpo-reexam-1";
import cpoReExam2 from "./cpo-reexam-2";
import cpoReExam3 from "./cpo-reexam-3";
import cpoReExam4 from "./cpo-reexam-4";
import cpoReExam5 from "./cpo-reexam-5";

export const cpoReExamPassages = {
  "cpo-reexam-1": cpoReExam1,
  "cpo-reexam-2": cpoReExam2,
  "cpo-reexam-3": cpoReExam3,
  "cpo-reexam-4": cpoReExam4,
  "cpo-reexam-5": cpoReExam5,
} as const;

export type CpoReExamPassageId =
  keyof typeof cpoReExamPassages;