import { TestRepository } from "@/lib/repositories/testRepository";
import type { TestItem } from "@/data/tests";

export interface SearchResult {
  id: number;
  title: string;
  exam: string;
  category: string;
  href: string;
}

const EXAM_NAMES: Record<string, string> = {
  cgl: "SSC CGL",
  chsl: "SSC CHSL",
  mts: "SSC MTS",
  gd: "SSC GD",
  cpo: "SSC CPO",
  stenographer: "SSC Stenographer",
  railway: "Railway",
};

export class SearchService {
  static search(query: string): SearchResult[] {
    const keyword = query.trim().toLowerCase();

    if (!keyword) return [];

    const tests = TestRepository.getAll();

    return tests
      .filter((test) => this.matches(test, keyword))
      .map((test) => ({
        id: test.id,
        title: `${EXAM_NAMES[test.exam]} • ${this.getCategoryName(
          test.category
        )} ${test.id}`,
        exam: EXAM_NAMES[test.exam],
        category: this.getCategoryName(test.category),
        href: `/practice/${test.exam}`,
      }))
      .slice(0, 10);
  }

  private static matches(test: TestItem, keyword: string): boolean {
    const examName = EXAM_NAMES[test.exam];

    const searchable = [
      examName,
      test.exam,
      test.title,
      test.category,
      test.passageId,

      `${examName} Mock`,
      `${examName} Practice`,
      `${examName} Re Exam`,
      `${examName} Mock Test`,
      `${examName} Practice Test`,
      `${examName} Previous Year`,
      `${examName} Typing`,
      `SSC`,
      `Typing`,
      `${test.id}`,
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(keyword);
  }

  private static getCategoryName(category: TestItem["category"]) {
    switch (category) {
      case "mock":
        return "Mock Test";

      case "practice":
        return "Practice Test";

      case "re-exam":
        return "Previous Year";

      default:
        return category;
    }
  }
}