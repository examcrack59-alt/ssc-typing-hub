import { TestRepository } from "@/lib/repositories/testRepository";
import type { ExamType, TestItem } from "@/data/tests";

export function getExamTests(
  exam: string
): TestItem[] {
  return TestRepository.getByExam(
    exam as ExamType
  );
}

export function getTestById(
  exam: string,
  id: number
): TestItem | undefined {
  return TestRepository.getById(
    exam as ExamType,
    id
  );
}

export function getTotalTests(
  exam: string
): number {
  return TestRepository.getTotal(
    exam as ExamType
  );
}

export function getFirstTest(
  exam: string
): TestItem | undefined {
  return TestRepository.getFirst(
    exam as ExamType
  );
}

export function getFreeTests(
  exam: string
): TestItem[] {
  return TestRepository.getFreeTests(
    exam as ExamType
  );
}