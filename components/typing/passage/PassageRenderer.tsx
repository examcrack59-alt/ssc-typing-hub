import Line from "./Line";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface PassageRendererProps {
  passage: Passage;
  tree: RenderTree;
}

export default function PassageRenderer({
  passage,
  tree,
}: PassageRendererProps) {
  return (
    <div
      style={{
        fontSize: 22,
        lineHeight: "44px",
        userSelect: "none",
        whiteSpace: "pre-wrap",
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