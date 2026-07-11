"use client";

import { memo } from "react";

import Word from "./Word";

import type { Passage } from "@/types";
import type { RenderLine } from "@/engine/renderer/types";

interface LineProps {
  line: RenderLine;
  passage: Passage;
}

function Line({
  line,
  passage,
}: LineProps) {
  return (
    <div
      data-line-id={line.lineId}
      className="
        flex
        flex-wrap
        items-baseline
        content-start
        w-full
        mb-[10px]
        leading-[52px]
        whitespace-normal
      "
      style={{
        minHeight: "52px",
      }}
    >
      {line.words.map((word) => (
        <Word
          key={word.wordId}
          word={word}
          passage={passage}
        />
      ))}
    </div>
  );
}

export default memo(Line);