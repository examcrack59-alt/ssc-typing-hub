"use client";

import { memo } from "react";

import Line from "./Line";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface PassageRendererProps {
  passage: Passage;
  tree: RenderTree;
}

function PassageRenderer({
  passage,
  tree,
}: PassageRendererProps) {
  return (
    <div
      className="
        typing-passage
        select-none
        whitespace-pre-wrap
        break-words
        text-[#1f2937]
        font-normal
        tracking-[0.02em]
        antialiased
      "
      style={{
        fontSize: "20px",
        lineHeight: "52px",
        fontWeight: 400,
        letterSpacing: "0.2px",
        wordSpacing: "1px",
        maxWidth: "100%",
      }}
    >
      {tree.lines.map((line) => (
        <Line
          key={line.lineId}
          line={line}
          passage={passage}
        />
      ))}
    </div>
  );
}

export default memo(PassageRenderer);