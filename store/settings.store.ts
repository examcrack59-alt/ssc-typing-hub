import { create } from "zustand";

export interface SettingsStore {
  // Appearance
  darkMode: boolean;

  // Typography
  fontSize: number;
  lineHeight: number;
  fontFamily: string;

  // Layout
  passageWidth: number;
  wordSpacing: number;

  // Behaviour
  soundEnabled: boolean;
  smoothCaret: boolean;
  showKeyboard: boolean;

  // Actions
  setDarkMode: (value: boolean) => void;
  setFontSize: (value: number) => void;
  setLineHeight: (value: number) => void;
  setFontFamily: (value: string) => void;
  setPassageWidth: (value: number) => void;
  setWordSpacing: (value: number) => void;
  setSoundEnabled: (value: boolean) => void;
  setSmoothCaret: (value: boolean) => void;
  setShowKeyboard: (value: boolean) => void;

  reset: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  darkMode: false,

  fontSize: 22,
  lineHeight: 44,
  fontFamily: "Arial",

  passageWidth: 900,
  wordSpacing: 8,

  soundEnabled: false,
  smoothCaret: true,
  showKeyboard: false,

  setDarkMode: (value) => set({ darkMode: value }),

  setFontSize: (value) => set({ fontSize: value }),

  setLineHeight: (value) => set({ lineHeight: value }),

  setFontFamily: (value) => set({ fontFamily: value }),

  setPassageWidth: (value) => set({ passageWidth: value }),

  setWordSpacing: (value) => set({ wordSpacing: value }),

  setSoundEnabled: (value) => set({ soundEnabled: value }),

  setSmoothCaret: (value) => set({ smoothCaret: value }),

  setShowKeyboard: (value) => set({ showKeyboard: value }),

  reset: () =>
    set({
      darkMode: false,
      fontSize: 22,
      lineHeight: 44,
      fontFamily: "Arial",
      passageWidth: 900,
      wordSpacing: 8,
      soundEnabled: false,
      smoothCaret: true,
      showKeyboard: false,
    }),
}));