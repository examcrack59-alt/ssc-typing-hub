import { notFound } from "next/navigation";
import ExamPageClient from "./ExamPageClient";

const EXAMS = {
  cgl: {
    name: "SSC CGL",
    slug: "cgl",
  },
  chsl: {
    name: "SSC CHSL",
    slug: "chsl",
  },
  mts: {
    name: "SSC MTS",
    slug: "mts",
  },
  gd: {
    name: "SSC GD",
    slug: "gd",
  },
  cpo: {
    name: "SSC CPO",
    slug: "cpo",
  },
  stenographer: {
    name: "SSC Stenographer",
    slug: "stenographer",
  },
  railway: {
    name: "Railway",
    slug: "railway",
  },
} as const;

interface PageProps {
  params: Promise<{
    exam: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { exam } = await params;

  const examData = EXAMS[exam as keyof typeof EXAMS];

  if (!examData) {
    notFound();
  }

  return <ExamPageClient exam={examData} />;
}