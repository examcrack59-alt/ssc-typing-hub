export type ResultStatus = "PASS" | "FAIL";

export type TestCategory = "mock" | "re-exam" | "practice";

export interface HistoryEntry {
  exam: string;

  testId: number;

  title: string;

  category: TestCategory;

  date: string;

  duration: number;

  elapsedTime: number;

  grossWPM: number;

  netWPM: number;

  rawWPM: number;

  accuracy: number;

  cpm: number;

  correctCharacters: number;

  incorrectCharacters: number;

  extraCharacters: number;

  skippedCharacters: number;

  completionPercentage: number;

  backspaceCount: number;

  resultStatus: ResultStatus;
}