import Word from "./Word";

import type { Passage } from "@/types";
import type { RenderLine } from "@/engine/renderer/types";

interface LineProps {
  line: RenderLine;
  passage: Passage;
}

export default function Line({
  line,
  passage,
}: LineProps) {
  return (
    <div>
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