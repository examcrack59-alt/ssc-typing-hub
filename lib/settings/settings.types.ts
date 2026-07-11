export type ThemeMode = "light" | "dark" | "system";

export type FontFamily =
  | "Poppins"
  | "Roboto"
  | "Inter";

export interface AppearanceSettings {
  theme: ThemeMode;
  fontFamily: FontFamily;
  fontSize: number;
  lineHeight: number;
}

export interface TypingSettings {
  highlightCurrentWord: boolean;
  highlightErrors: boolean;
  liveWPM: boolean;
  liveAccuracy: boolean;
  autoScroll: boolean;
  showKeyboard: boolean;
  showTimer: boolean;
  showCharacterCounter: boolean;
}

export interface TestSettings {
  countdown: boolean;
  autoSubmit: boolean;
  pauseOnBlur: boolean;
  confirmBeforeExit: boolean;
  defaultDuration: number;
}

export interface SoundSettings {
  keySound: boolean;
  errorSound: boolean;
  completionSound: boolean;
  volume: number;
}

export interface PrivacySettings {
  showOnLeaderboard: boolean;
  publicProfile: boolean;
  shareStatistics: boolean;
}

export interface AccountSettings {
  username: string;
  avatar: string;
  preferredExam: string;
  language: "English";
}

export interface AppSettings {
  appearance: AppearanceSettings;
  typing: TypingSettings;
  test: TestSettings;
  sound: SoundSettings;
  privacy: PrivacySettings;
  account: AccountSettings;
}