import type { AppSettings } from "./settings.types";

export const DEFAULT_SETTINGS: AppSettings = {
  appearance: {
    theme: "system",
    fontFamily: "Poppins",
    fontSize: 18,
    lineHeight: 1.8,
  },

  typing: {
    highlightCurrentWord: true,
    highlightErrors: true,
    liveWPM: true,
    liveAccuracy: true,
    autoScroll: true,
    showKeyboard: false,
    showTimer: true,
    showCharacterCounter: true,
  },

  test: {
    countdown: true,
    autoSubmit: true,
    pauseOnBlur: true,
    confirmBeforeExit: true,
    defaultDuration: 10,
  },

  sound: {
    keySound: false,
    errorSound: true,
    completionSound: true,
    volume: 80,
  },

  privacy: {
    showOnLeaderboard: true,
    publicProfile: true,
    shareStatistics: true,
  },

  account: {
    username: "Guest",
    avatar: "",
    preferredExam: "SSC CGL",
    language: "English",
  },
};