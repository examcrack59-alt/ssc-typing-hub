import { RenderLine } from "./types";

export function getVisibleLines(
  lines: RenderLine[],
  start: number,
  end: number
): RenderLine[] {
  return lines.slice(start, end + 1);
}