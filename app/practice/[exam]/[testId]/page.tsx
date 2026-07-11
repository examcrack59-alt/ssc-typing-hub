import { notFound } from "next/navigation";
import Link from "next/link";

import { getTestById } from "@/lib/exams/getExamTests";

interface Props {
  params: Promise<{
    exam: string;
    testId: string;
  }>;
}

export default async function PracticeTestPage({
  params,
}: Props) {
  const { exam, testId } = await params;

  const test = getTestById(
    exam,
    Number(testId)
  );

  if (!test) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <h1 className="text-3xl font-bold">
          {test.title}
        </h1>

        <p className="mt-2 text-slate-600">
          {exam.toUpperCase()} • {test.duration} Minutes
        </p>

        <div className="mt-8 grid gap-4 rounded-xl bg-slate-50 p-6">

          <div className="flex justify-between">
            <span>Language</span>
            <span>{test.language}</span>
          </div>

          <div className="flex justify-between">
            <span>Category</span>
            <span>{test.category}</span>
          </div>

          <div className="flex justify-between">
            <span>Duration</span>
            <span>{test.duration} Minutes</span>
          </div>

        </div>

        <div className="mt-8 flex justify-end">
          <Link
            href={`/typing?exam=${exam}&id=${test.id}`}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Start Test
          </Link>
        </div>

      </div>
    </main>
  );
}