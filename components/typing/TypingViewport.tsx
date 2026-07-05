import PassageRenderer from "./passage/PassageRenderer";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface TypingViewportProps {
  passage: Passage;
  renderer: {
    tree: RenderTree;
  };
}

export default function TypingViewport({
  passage,
  renderer,
}: TypingViewportProps) {
  return (
    <section>
      <PassageRenderer
        passage={passage}
        tree={renderer.tree}
      />
    </section>
  );
}