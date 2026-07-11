import { cglMockPassages } from "./mock";
import { cglPracticePassages } from "./practice";
import { cglReExamPassages } from "./re-exam";

export const cglPassages = {
  ...cglMockPassages,
  ...cglPracticePassages,
  ...cglReExamPassages,
} as const;

export type CglPassageId = keyof typeof cglPassages;