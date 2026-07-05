import Character from "./Character";

import type { Passage } from "@/types";
import type { RenderWord } from "@/engine/renderer/types";

interface WordProps {
  word: RenderWord;
  passage: Passage;
}

export default function Word({
  word,
  passage,
}: WordProps) {
  return (
    <>
      {word.characters.map((character) => (
        <Character
          key={character.characterId}
          characterId={character.characterId}
          passage={passage}
        />
      ))}

      {" "}
    </>
  );
}