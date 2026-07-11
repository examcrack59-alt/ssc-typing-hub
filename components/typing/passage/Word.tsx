"use client";

import { memo } from "react";

import Character from "./Character";

import type { Passage } from "@/types";
import type { RenderWord } from "@/engine/renderer/types";

interface WordProps {
  word: RenderWord;
  passage: Passage;
}

function Word({
  word,
  passage,
}: WordProps) {
  return (
    <span
      data-word-id={word.wordId}
      className="
        inline-flex
        items-baseline
        align-baseline
        whitespace-nowrap
        mr-[6px]
        leading-[2.4rem]
      "
    >
      {word.characters.map((character) => (
        <Character
          key={character.characterId}
          characterId={character.characterId}
          passage={passage}
        />
      ))}
    </span>
  );
}

export default memo(Word);