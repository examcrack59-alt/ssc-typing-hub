"use client";

import Image from "next/image";

interface InstructionHeaderProps {
  testName: string;
}

export default function InstructionHeader({
  testName,
}: InstructionHeaderProps) {
  return (
    <header className="h-[58px] border-b border-slate-200 bg-white shadow-sm">

      <div className="flex h-full items-center justify-between px-5">

        {/* Left */}

        <div className="flex items-center gap-4">

          {/* Logo */}

          <div className="flex items-center gap-3">

            {/* Replace logo later */}

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A4EA3] text-white font-bold">
              S
            </div>

            <div>

              <h2 className="text-[18px] font-bold text-slate-900">
                SSC Typing Hub
              </h2>

            </div>

          </div>

          <div className="h-6 w-px bg-slate-300" />

          <h1 className="text-[18px] font-medium text-slate-700">
            {testName}
          </h1>

        </div>

      </div>

    </header>
  );
}