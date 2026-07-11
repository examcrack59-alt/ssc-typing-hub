export type ExamType =
  | "cgl"
  | "chsl"
  | "mts"
  | "gd"
  | "cpo"
  | "stenographer"
  | "railway";

export interface TestItem {
  
  id: number;

  exam: ExamType;
  category:
  | "mock"
  | "re-exam"
  | "practice";

  title: string;

  duration: number;

  questions: number;

  language: "English";

  users: string;

  free: boolean;

  // Bridge between Test Metadata & Typing Passage
  passageId: string;
}

function createTests(
  exam: ExamType,
  total: number,
  category: TestItem["category"],
  startId: number,
  prefix: string
): TestItem[] {
  return Array.from(
    { length: total },
    (_, index): TestItem => ({
     id: startId + index,
      exam,
      category,

      title: `Typing Mock Test ${index + 1}`,

      duration: 15,

      questions: 1,

      language: "English",

      // Stable user count (No Random Hydration Issue)
      users: `${15 + index}K`,

      free: index < 2,

      // Future Proof Passage Mapping
      passageId: `${prefix}-${index + 1}`,
    })
  );
}

export const TESTS: TestItem[] = [
// ======================
// SSC CGL
// ======================
...createTests("cgl", 20, "mock", 1, "cgl-mock"),
...createTests("cgl", 5, "re-exam", 21, "cgl-reexam"),
...createTests("cgl", 5, "practice", 26, "cgl-practice"),

// ======================
// SSC CHSL
// ======================
...createTests("chsl", 20, "mock", 1, "chsl-mock"),
...createTests("chsl", 5, "re-exam", 21, "chsl-reexam"),
...createTests("chsl", 5, "practice", 26, "chsl-practice"),

// ======================
// SSC MTS
// ======================
...createTests("mts", 20, "mock", 1, "mts-mock"),
...createTests("mts", 5, "re-exam", 21, "mts-reexam"),
...createTests("mts", 5, "practice", 26, "mts-practice"),

// ======================
// SSC GD
// ======================
...createTests("gd", 20, "mock", 1, "gd-mock"),
...createTests("gd", 5, "re-exam", 21, "gd-reexam"),
...createTests("gd", 5, "practice", 26, "gd-practice"),

// ======================
// SSC CPO
// ======================
...createTests("cpo", 20, "mock", 1, "cpo-mock"),
...createTests("cpo", 5, "re-exam", 21, "cpo-reexam"),
...createTests("cpo", 5, "practice", 26, "cpo-practice"),

// ======================
// SSC STENOGRAPHER
// ======================
...createTests("stenographer", 20, "mock", 1, "stenographer-mock"),
...createTests("stenographer", 5, "re-exam", 21, "stenographer-reexam"),
...createTests("stenographer", 5, "practice", 26, "stenographer-practice"),

// ======================
// RAILWAY
// ======================
...createTests("railway", 20, "mock", 1, "railway-mock"),
...createTests("railway", 5, "re-exam", 21, "railway-reexam"),
...createTests("railway", 5, "practice", 26, "railway-practice"),
];