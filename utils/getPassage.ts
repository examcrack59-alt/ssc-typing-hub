import { PASSAGES } from "@/constants/passages";
import { TESTS } from "@/data/tests";

export function getPassage(
  exam: string,
  difficulty: string,
  id: number
) {
  // Find test metadata
  const test = TESTS.find(
    (item) =>
      item.exam === exam &&
      item.id === id
  );

  // If test doesn't exist fallback
  if (!test) {
    return PASSAGES.cgl.easy[0];
  }

  // Read passageId from metadata
  const passageId = test.passageId;

  // Current passage format:
  // cgl_easy_1
  const parts = passageId.split("_");

  const examKey = parts[0];
  const difficultyKey = parts[1];
  const passageIndex = Number(parts[2]) - 1;

  const examPassages =
    PASSAGES[examKey as keyof typeof PASSAGES];

  if (!examPassages) {
    return PASSAGES.cgl.easy[0];
  }

  const difficultyPassages =
    examPassages[
      difficultyKey as keyof typeof examPassages
    ];

  if (
    !difficultyPassages ||
    difficultyPassages.length === 0
  ) {
    return PASSAGES.cgl.easy[0];
  }

  return (
    difficultyPassages[passageIndex] ??
    difficultyPassages[0]
  );
}