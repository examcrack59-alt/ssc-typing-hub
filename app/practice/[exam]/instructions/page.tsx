import InstructionPageClient from "./InstructionPageClient";

interface Props {
  params: Promise<{
    exam: string;
  }>;

  searchParams: Promise<{
    test?: string;
  }>;
}

export default async function Page({
  params,
  searchParams,
}: Props) {
  const { exam } = await params;
  const { test } = await searchParams;

  return (
    <InstructionPageClient
      exam={exam}
      test={test ?? "1"}
    />
  );
}