"use client";

import { useRef } from "react";

import PassageRenderer from "./passage/PassageRenderer";
import { useScroll } from "@/hooks/useScroll";

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
  const containerRef =
  useRef<HTMLElement>(null);

useScroll(containerRef);
  return (
    <section
    ref={containerRef}
      className="
        relative
        h-[250px]
        w-full
        overflow-y-auto
        rounded-md
        border
        border-slate-300
        bg-white
        p-6
      "
    >
      <PassageRenderer
        passage={passage}
        tree={renderer.tree}
      />
    </section>
  );
}