import { gdMockPassages } from "./mock";
import { gdPracticePassages } from "./practice";
import { gdReExamPassages } from "./re-exam";

export const gdPassages = {
  ...gdMockPassages,
  ...gdPracticePassages,
  ...gdReExamPassages,
} as const;

export type GdPassageId = keyof typeof gdPassages;