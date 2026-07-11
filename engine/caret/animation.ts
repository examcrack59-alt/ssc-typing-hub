export interface CaretAnimationState {
  visible: boolean;
  opacity: number;
}

export function getCaretAnimation(
  visible: boolean
): CaretAnimationState {
  return {
    visible,
    opacity: visible ? 1 : 0,
  };
}