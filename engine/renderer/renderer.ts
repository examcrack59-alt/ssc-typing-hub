import { Passage } from "@/types";

import { buildRenderTree } from "./renderTree";
import type { RenderTree } from "./types";

export interface Renderer {
  tree: RenderTree;
}

export function createRenderer(
  passage: Passage
): Renderer {
  return {
    tree: buildRenderTree(passage),
  };
}