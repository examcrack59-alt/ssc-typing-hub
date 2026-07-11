import { chslMockPassages } from "./mock";
import { chslPracticePassages } from "./practice";
import { chslReExamPassages } from "./re-exam";

export const chslPassages = {
  ...chslMockPassages,
  ...chslPracticePassages,
  ...chslReExamPassages,
} as const;

export type ChslPassageId = keyof typeof chslPassages;