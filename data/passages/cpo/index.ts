import { cpoMockPassages } from "./mock";
import { cpoPracticePassages } from "./practice";
import { cpoReExamPassages } from "./re-exam";

export const cpoPassages = {
  ...cpoMockPassages,
  ...cpoPracticePassages,
  ...cpoReExamPassages,
} as const;

export type CpoPassageId = keyof typeof cpoPassages;