/**
 * High Performance Text Measurement Engine
 * SSR Safe Version
 */

export interface MeasureOptions {
  fontSize: number;
  fontFamily: string;
  fontWeight?: string;
}

export class TextMeasurer {
  private canvas: HTMLCanvasElement | null = null;
  private context: CanvasRenderingContext2D | null = null;

  private charCache = new Map<string, number>();
  private wordCache = new Map<string, number>();

  constructor(private options: MeasureOptions) {
    // Browser me hi canvas create karo
    if (typeof document !== "undefined") {
      this.canvas = document.createElement("canvas");

      const ctx = this.canvas.getContext("2d");

      if (ctx) {
        this.context = ctx;
        this.updateFont();
      }
    }
  }

  /**
   * Updates canvas font.
   */
  updateFont(options?: Partial<MeasureOptions>) {
    if (options) {
      this.options = {
        ...this.options,
        ...options,
      };
    }

    if (!this.context) return;

    const {
      fontSize,
      fontFamily,
      fontWeight = "400",
    } = this.options;

   this.context.font =
  `${fontWeight} ${fontSize}px "${fontFamily}", Arial, sans-serif`;

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

    let width: number;

    if (this.context) {
      width = this.context.measureText(char).width;
    } else {
      // SSR fallback
      width = this.options.fontSize * 0.58;
    }

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

    let width: number;

    if (this.context) {
      width = this.context.measureText(word).width;
    } else {
      width =
  word.length *
  this.options.fontSize *
  0.58;
    }

    this.wordCache.set(word, width);

    return width;
  }

  /**
   * Measures any text.
   */
  measure(text: string): number {
    if (!this.context) {
      return (
  text.length *
  this.options.fontSize *
  0.58
);
    }

    return this.context.measureText(text).width;
  }

  /**
   * Clears caches.
   */
  clearCache() {
    this.charCache.clear();
    this.wordCache.clear();
  }

  /**
   * Cache statistics.
   */
  getStats() {
    return {
      characterCache: this.charCache.size,
      wordCache: this.wordCache.size,
    };
  }
}