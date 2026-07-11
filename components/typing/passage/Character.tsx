"use client";

import { useEffect, useMemo, useState } from "react";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const status = useTypingStore(
    (state) => state.status[characterId]
  );

  const currentCharacter = useTypingStore(
    (state) => state.currentCharacter
  );

  const character = passage.characters[characterId];

  const colorClass = useMemo(() => {
    switch (status) {
      case "correct":
        return "text-[#16a34a]";

      case "incorrect":
        return "text-[#dc2626]";

      case "extra":
        return "bg-red-600 text-white";

      case "skipped":
        return "text-yellow-600";

      default:
        return "text-[#1f2937]";
    }
  }, [status]);

  const isCurrent =
    mounted && currentCharacter === characterId;

  return (
    <span
      className={`
  typing-passage
  relative
  inline-block
  select-none
  align-baseline
  tracking-normal
  ${colorClass}
`}
    >
      <span
  className="
    whitespace-pre
  "
>
  {character.char}
</span>

      {isCurrent && (
        <span
  className="
    absolute
    left-[-1px]
    top-1/2
    -translate-y-1/2
    h-[30px]
    w-[2px]
    rounded-full
    bg-blue-600
    animate-pulse
  "
/>
      )}
    </span>
  );
}