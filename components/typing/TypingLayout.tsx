import TypingViewport from "./TypingViewport";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface TypingLayoutProps {
  passage: Passage;
  renderer: {
    tree: RenderTree;
  };
}

export default function TypingLayout({
  passage,
  renderer,
}: TypingLayoutProps) {
  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "60px auto",
        padding: 24,
      }}
    >
      <TypingViewport
        passage={passage}
        renderer={renderer}
      />
    </main>
  );
}