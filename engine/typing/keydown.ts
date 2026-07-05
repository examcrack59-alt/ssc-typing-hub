export interface KeyDownResult {
  character: string;
  isBackspace: boolean;
  isIgnored: boolean;
}

const IGNORE_KEYS = new Set([
  "Shift",
  "Control",
  "Alt",
  "Meta",
  "CapsLock",
  "Tab",
  "Escape",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Insert",
]);

export function handleKeyDown(
  event: KeyboardEvent
): KeyDownResult {
  if (
    event.ctrlKey ||
    event.metaKey ||
    event.altKey
  ) {
    return {
      character: "",
      isBackspace: false,
      isIgnored: true,
    };
  }

  if (IGNORE_KEYS.has(event.key)) {
    return {
      character: "",
      isBackspace: false,
      isIgnored: true,
    };
  }

  if (event.key === "Backspace") {
    event.preventDefault();

    return {
      character: "",
      isBackspace: true,
      isIgnored: false,
    };
  }

  if (event.key.length !== 1) {
    return {
      character: "",
      isBackspace: false,
      isIgnored: true,
    };
  }

  event.preventDefault();

  return {
    character: event.key,
    isBackspace: false,
    isIgnored: false,
  };
}