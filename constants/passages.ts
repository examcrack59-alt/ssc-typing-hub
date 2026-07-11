import { cglEasyPassages } from "@/constants/passages/cgl/easy";
import { cglModeratePassages } from "@/constants/passages/cgl/moderate";
import { cglHardPassages } from "@/constants/passages/cgl/hard";

export type Difficulty = "easy" | "moderate" | "hard";

export interface PassageData {
  id: number;
  title: string;
  text: string;
}

export interface ExamPassages {
  easy: PassageData[];
  moderate: PassageData[];
  hard: PassageData[];
}

export const PASSAGES: Record<string, ExamPassages> = {
  cgl: {
    easy: cglEasyPassages,
    moderate: cglModeratePassages,
    hard: cglHardPassages,
  },

  chsl: {
    easy: [],
    moderate: [],
    hard: [],
  },

  gd: {
    easy: [],
    moderate: [],
    hard: [],
  },

  mts: {
    easy: [],
    moderate: [],
    hard: [],
  },

  cpo: {
    easy: [],
    moderate: [],
    hard: [],
  },

  railway: {
    easy: [],
    moderate: [],
    hard: [],
  },

  stenographer: {
    easy: [],
    moderate: [],
    hard: [],
  },
};

export const SSC_PASSAGE_500 = cglEasyPassages[0].text;