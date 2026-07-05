/**
 * High Performance Text Measurement Engine
 *
 * Uses a hidden canvas to measure text exactly once.
 * Results are cached for ultra-fast lookups.
 */

export interface MeasureOptions {
  fontSize: number;
  fontFamily: string;
  fontWeight?: string;
}

export class TextMeasurer {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;

  private charCache = new Map<string, number>();
  private wordCache = new Map<string, number>();

  constructor(private options: MeasureOptions) {
    this.canvas = document.createElement("canvas");

    const ctx = this.canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Unable to create CanvasRenderingContext2D");
    }

    this.context = ctx;

    this.updateFont();
  }

  /**
   * Updates canvas font.
   * Call this when font size/family changes.
   */
  updateFont(options?: Partial<MeasureOptions>) {
    if (options) {
      this.options = {
        ...this.options,
        ...options,
      };
    }

    const {
      fontSize,
      fontFamily,
      fontWeight = "400",
    } = this.options;

    this.context.font =
      `${fontWeight} ${fontSize}px ${fontFamily}`;

    this.clearCache();
  }

  /**
   * Measures a single character.
   */
  measureCharacter(char: string): number {
    const cached = this.charCache.get(char);

    if (cached !== undefined) {
      return cached;
    }

    const width = this.context.measureText(char).width;

    this.charCache.set(char, width);

    return width;
  }

  /**
   * Measures a complete word.
   */
  measureWord(word: string): number {
    const cached = this.wordCache.get(word);

    if (cached !== undefined) {
      return cached;
    }

    const width = this.context.measureText(word).width;

    this.wordCache.set(word, width);

    return width;
  }

  /**
   * Measures any text.
   */
  measure(text: string): number {
    return this.context.measureText(text).width;
  }

  /**
   * Clears measurement caches.
   */
  clearCache() {
    this.charCache.clear();
    this.wordCache.clear();
  }

  /**
   * Returns cache statistics.
   * Useful for debugging.
   */
  getStats() {
    return {
      characterCache: this.charCache.size,
      wordCache: this.wordCache.size,
    };
  }
}