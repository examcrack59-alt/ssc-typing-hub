import { TESTS, type TestItem, type ExamType } from "@/data/tests";

export class TestRepository {
  static getAll(): TestItem[] {
    return TESTS;
  }

  static getByExam(exam: ExamType): TestItem[] {
    return TESTS.filter((test) => test.exam === exam);
  }

  static getById(
    exam: ExamType,
    id: number
  ): TestItem | undefined {
    return TESTS.find(
      (test) =>
        test.exam === exam &&
        test.id === id
    );
  }

  static getTotal(exam: ExamType): number {
    return this.getByExam(exam).length;
  }

  static getFirst(exam: ExamType): TestItem | undefined {
    return this.getByExam(exam)[0];
  }

  static getFreeTests(exam: ExamType): TestItem[] {
    return this.getByExam(exam).filter(
      (test) => test.free
    );
  }
}