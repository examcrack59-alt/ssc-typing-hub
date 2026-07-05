import { Passage } from "@/types";
import { buildRenderTree } from "./renderTree";

export function createRenderer(
  passage: Passage
) {
  const tree = buildRenderTree(passage);

  return {
    tree,
  };
}