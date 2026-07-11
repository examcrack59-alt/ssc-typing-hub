"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TypingSettingsStore {
  darkMode: boolean;

  highlightCurrentCharacter: boolean;

  highlightCurrentWord: boolean;

  highlightCurrentLine: boolean;

  showCursor: boolean;

  fontSize: number;

  lineHeight: number;

  setDarkMode: (value: boolean) => void;

  setHighlightCurrentCharacter: (value: boolean) => void;

  setHighlightCurrentWord: (value: boolean) => void;

  setHighlightCurrentLine: (value: boolean) => void;

  setShowCursor: (value: boolean) => void;

  setFontSize: (value: number) => void;

  setLineHeight: (value: number) => void;
}

export const useTypingSettingsStore =
  create<TypingSettingsStore>()(
    persist(
      (set) => ({
        darkMode: false,

        highlightCurrentCharacter: true,

        highlightCurrentWord: true,

        highlightCurrentLine: true,

        showCursor: true,

        fontSize: 18,

        lineHeight: 34,

        setDarkMode: (value) =>
          set({
            darkMode: value,
          }),

        setHighlightCurrentCharacter: (value) =>
          set({
            highlightCurrentCharacter: value,
          }),

        setHighlightCurrentWord: (value) =>
          set({
            highlightCurrentWord: value,
          }),

        setHighlightCurrentLine: (value) =>
          set({
            highlightCurrentLine: value,
          }),

        setShowCursor: (value) =>
          set({
            showCursor: value,
          }),

        setFontSize: (value) =>
          set({
            fontSize: value,
          }),

        setLineHeight: (value) =>
          set({
            lineHeight: value,
          }),
      }),
      {
        name: "typing-settings",
      }
    )
  );