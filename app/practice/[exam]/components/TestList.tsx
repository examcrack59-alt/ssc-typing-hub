import TestCard from "./TestCard";

import type {
  ExamType,
  TestItem,
} from "@/data/tests";
 

interface TestListProps {
  exam: ExamType;

  tests: TestItem[];
}

export default function TestList({
  exam,
  tests,
}: TestListProps) {
 

  return (
    <div className="space-y-5">
      {tests.map((test) => (
        <TestCard
          key={test.id}
          exam={exam}
          title={test.title}
          testNo={test.id}
          duration={`${test.duration} Minutes`}
          language={test.language}
          attempted="-"
          rank="-"
          progress={0}
          href={`/practice/${exam}/instructions?test=${test.id}`}
        />
      ))}
    </div>
  );
}