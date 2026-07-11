export interface KeyDownResult {
  character: string;
  isBackspace: boolean;
  isEnter: boolean;
  isIgnored: boolean;
}

const IGNORED_KEYS = new Set([
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
  "Delete",
  "NumLock",
  "ScrollLock",
  "Pause",
]);

export function handleKeyDown(
  event: KeyboardEvent
): KeyDownResult {

  // Ignore shortcuts
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return {
      character: "",
      isBackspace: false,
      isEnter: false,
      isIgnored: true,
    };
  }

  // Ignore function keys
  if (
    event.key.startsWith("F") &&
    event.key.length <= 3
  ) {
    return {
      character: "",
      isBackspace: false,
      isEnter: false,
      isIgnored: true,
    };
  }

  // Ignore navigation keys
  if (IGNORED_KEYS.has(event.key)) {
    return {
      character: "",
      isBackspace: false,
      isEnter: false,
      isIgnored: true,
    };
  }

  // Backspace
  if (event.key === "Backspace") {
    event.preventDefault();

    return {
      character: "",
      isBackspace: true,
      isEnter: false,
      isIgnored: false,
    };
  }

  // Enter
  if (event.key === "Enter") {
    event.preventDefault();

    return {
      character: "",
      isBackspace: false,
      isEnter: true,
      isIgnored: false,
    };
  }

  // Printable characters only
  if (event.key.length !== 1) {
    return {
      character: "",
      isBackspace: false,
      isEnter: false,
      isIgnored: true,
    };
  }

  event.preventDefault();

  return {
    character: event.key,
    isBackspace: false,
    isEnter: false,
    isIgnored: false,
  };
}