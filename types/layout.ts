/**
 * Character layout information.
 *
 * Used by:
 * - Renderer
 * - Caret Engine
 * - Typing Engine
 * - Scroll Engine
 */
export interface LayoutCharacter {
  characterId: number;

  /**
   * Parent word lookup (O(1))
   */
  wordId: number;

  /**
   * Parent line lookup (O(1))
   */
  lineId: number;

  x: number;

  y: number;

  width: number;

  height: number;
}

/**
 * Word layout information.
 */
export interface LayoutWord {
  wordId: number;

  /**
   * Parent line lookup (O(1))
   */
  lineId: number;

  x: number;

  y: number;

  width: number;

  height: number;
}

/**
 * Line layout information.
 */
export interface LayoutLine {
  lineId: number;

  y: number;

  width: number;

  height: number;
}