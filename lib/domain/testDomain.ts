import type { TestItem } from "@/data/tests";

export class TestDomain {
  static isFree(test: TestItem): boolean {
    return test.free;
  }

  static isPremium(test: TestItem): boolean {
    return !test.free;
  }

  static isActive(test: TestItem): boolean {
    return true;
  }

  static getDuration(test: TestItem): number {
    return test.duration;
  }

  static getLanguage(test: TestItem): string {
    return test.language;
  }

  static getPassageId(test: TestItem): string {
    return test.passageId;
  }

  static getDisplayTitle(test: TestItem): string {
    return test.title;
  }
}