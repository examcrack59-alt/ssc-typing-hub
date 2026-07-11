"use client";

import { useEffect, useRef } from "react";

import { useKeyboard } from "@/hooks/useKeyboard";
import { useTypingContext } from "@/context/TypingContext";
import { useTypingStore } from "@/store";
import { useTypingWindow } from "@/hooks/useTypingWindow";
 


export default function TypingInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Get passage from context
  const { passage } = useTypingContext();
  const typedText = useTypingStore(
  (state) => state.typedText
);
 
 const currentCharacter = useTypingStore(
  (state) => state.currentCharacter
);

const typedHistory = typedText.slice(
  0,
  currentCharacter
);
 
  // Pass passage to keyboard hook
  const { onKeyDown } = useKeyboard(passage);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
  if (!previewRef.current) return;

  previewRef.current.scrollTo({
    top: previewRef.current.scrollHeight,
    behavior: "smooth",
  });
}, [typedHistory]);

  const handleBlur = () => {
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  };

  return (
    <div className="mt-8 w-full relative">
      <p
  className="
    mb-3
    rounded-md
    border
    border-blue-200
    bg-blue-50
    px-4
    py-2
    text-sm
    text-blue-700
    font-medium
  "
>
  Press any key on your keyboard to start typing. The test will begin automatically on your first keystroke.
</p>
       
<div
  ref={previewRef}
  onClick={() => inputRef.current?.focus()}
  className="
    relative
    overflow-y-auto
    overflow-x-hidden
    rounded-lg
    border
    border-slate-300
    bg-white
    px-6
    py-5
    h-[132px]
    cursor-text
  "
>
 <div
className="
  w-full
  min-h-full
  whitespace-pre-wrap
  break-words
  text-[20px]
  leading-9
  font-medium
"
>
 {typedHistory.length === 0 ? (
  <div
    className="
      text-slate-300
      text-[20px]
      leading-9
      font-medium
    "
  >
    |
  </div>
) : (
  <div
    className="
      whitespace-pre-wrap
      break-words
      text-[20px]
      leading-9
      font-medium
      text-black
    "
  >
    {typedHistory}

    <span
      className="
        inline-block
        ml-[2px]
        w-[2px]
        h-7
        bg-blue-600
        animate-pulse
        align-middle
      "
    />
  </div>
)}
</div>
    
      </div>

      <input
        ref={inputRef}
        type="text"
        style={{
  caretColor: "transparent",
}}
        autoFocus
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode="none"
        placeholder=""
        value={typedText}

onChange={() => {}}
      className="
  absolute
  left-0
  top-0
  w-[1px]
  h-[1px]
  opacity-0
  pointer-events-none
  caret-transparent
"
        onKeyDown={onKeyDown}
        onBlur={handleBlur}
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        onCut={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      />

     
    </div>
  );
}