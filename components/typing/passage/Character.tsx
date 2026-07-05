"use client";

import { useTypingStore } from "@/store";

import type { Passage } from "@/types";

interface CharacterProps {
  characterId: number;
  passage: Passage;
}

export default function Character({
  characterId,
  passage,
}: CharacterProps) {
  const status = useTypingStore(
    (state) => state.status[characterId]
  );

  const currentCharacter = useTypingStore(
    (state) => state.currentCharacter
  );

  const character = passage.characters[characterId];

  let color = "#9ca3af";

  switch (status) {
    case "correct":
      color = "#22c55e";
      break;

    case "incorrect":
      color = "#ef4444";
      break;

    case "extra":
      color = "#f97316";
      break;

    case "skipped":
      color = "#eab308";
      break;
  }

  return (
    <span
      data-character-id={characterId}
      style={{
        color,
        position: "relative",
      }}
    >
      {character.char}

      {currentCharacter === characterId && (
        <span
          style={{
            position: "absolute",
            left: -1,
            top: 0,
            bottom: 0,
            width: 2,
            background: "#3b82f6",
          }}
        />
      )}
    </span>
  );
}