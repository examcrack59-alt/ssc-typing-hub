import { stenographerMockPassages } from "./mock";
import { stenographerPracticePassages } from "./practice";
import { stenographerReExamPassages } from "./re-exam";

export const stenographerPassages = {
  ...stenographerMockPassages,
  ...stenographerPracticePassages,
  ...stenographerReExamPassages,
} as const;

export type StenographerPassageId =
  keyof typeof stenographerPassages;