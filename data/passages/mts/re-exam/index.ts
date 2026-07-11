import mtsReExam1 from "./mts-reexam-1";
import mtsReExam2 from "./mts-reexam-2";
import mtsReExam3 from "./mts-reexam-3";
import mtsReExam4 from "./mts-reexam-4";
import mtsReExam5 from "./mts-reexam-5";

export const mtsReExamPassages = {
  "mts-reexam-1": mtsReExam1,
  "mts-reexam-2": mtsReExam2,
  "mts-reexam-3": mtsReExam3,
  "mts-reexam-4": mtsReExam4,
  "mts-reexam-5": mtsReExam5,
} as const;

export type MtsReExamPassageId =
  keyof typeof mtsReExamPassages;