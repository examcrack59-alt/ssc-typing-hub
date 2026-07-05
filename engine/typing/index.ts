export * from "./validation";
export * from "./typing";
export * from "./keydown";
import { validateCharacter } from "@/engine/typing";

console.log(validateCharacter("a", "a"));
// { status: "correct", correct: true }

console.log(validateCharacter("a", "b"));
// { status: "incorrect", correct: false }