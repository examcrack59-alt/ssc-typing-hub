"use client";

import { forwardRef } from "react";

export interface HiddenInputProps {
  onKeyDown: (event: KeyboardEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const HiddenInput = forwardRef<HTMLInputElement, HiddenInputProps>(
  ({ onKeyDown, onFocus, onBlur }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        tabIndex={-1}
        value=""
        readOnly
        aria-hidden="true"
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={(e) => {
          onKeyDown(e.nativeEvent);
        }}
        style={{
          position: "fixed",
          opacity: 0,
          pointerEvents: "none",
          width: 1,
          height: 1,
          left: 0,
          top: 0,
        }}
      />
    );
  }
);

HiddenInput.displayName = "HiddenInput";

export default HiddenInput;