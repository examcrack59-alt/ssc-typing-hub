import { cglPassages } from "@/data/passages/cgl";
import { chslPassages } from "@/data/passages/chsl";
import { mtsPassages } from "@/data/passages/mts";
import { gdPassages } from "@/data/passages/gd";
import { cpoPassages } from "@/data/passages/cpo";
import { stenographerPassages } from "@/data/passages/stenographer";

type PassageMap = Record<string, string>;

const passages: PassageMap = {
  ...cglPassages,

  ...chslPassages,

  ...mtsPassages,

  ...gdPassages,

  ...cpoPassages,

  ...stenographerPassages,
};

export function getPassage(passageId: string): string {
  const passage = passages[passageId];

  if (!passage) {
    throw new Error(
      `Passage not found: ${passageId}`
    );
  }

  return passage;
}