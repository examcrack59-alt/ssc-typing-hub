import { mtsMockPassages } from "./mock";
import { mtsPracticePassages } from "./practice";
import { mtsReExamPassages } from "./re-exam";

export const mtsPassages = {
  ...mtsMockPassages,
  ...mtsPracticePassages,
  ...mtsReExamPassages,
} as const;

export type MtsPassageId = keyof typeof mtsPassages;