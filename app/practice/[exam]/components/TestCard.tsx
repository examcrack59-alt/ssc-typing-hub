"use client";

import Link from "next/link";
import {
  Clock3,
  HelpCircle,
  Share2,
  Zap,
  CheckCircle2,
} from "lucide-react";

import { useTestProgressStore } from "@/store/testProgress.store";

interface TestCardProps {
  exam: string;

  title: string;

  testNo: number;

  duration: string;

  language: string;

  attempted: string;

  rank: string;

  progress: number;

  href: string;
}

export default function TestCard({
  exam,
  title,
  testNo,
  duration,
  language,
  href,
}: TestCardProps) {
 const progress = useTestProgressStore((state) =>
  state.getProgress(exam, testNo)
);

  const isCompleted = progress?.completed ?? false;

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Top */}

      <div className="flex items-center justify-between px-6 py-5">
        {/* Left */}

        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-[28px] font-semibold text-slate-900">
              {title}
            </h3>

            {isCompleted && (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                <CheckCircle2 size={15} />
                Completed
              </span>
            )}

            <span className="flex items-center gap-1 text-sm text-slate-400">
              <Zap
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
              15.7K Users
            </span>
          </div>

          <div className="mt-3 flex items-center gap-6 text-[16px] text-slate-500">
            <span className="flex items-center gap-2">
              <HelpCircle size={16} />
              1 Questions
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={16} />
              {duration}
            </span>
          </div>
        </div>

        {/* Right */}

        <Link
          href={href}
          className="rounded-md bg-cyan-500 px-12 py-3 text-lg font-medium text-white transition hover:bg-cyan-600"
        >
          {isCompleted ? "Re-Attempt" : "Start Now"}
        </Link>
      </div>

      {/* Bottom */}

      <div className="flex items-center justify-between border-t bg-slate-50 px-6 py-3">
        <span className="text-[16px] text-blue-600">
          {language}
        </span>

        <button className="flex items-center gap-2 text-[15px] text-green-600 transition hover:text-green-700">
          <Share2 size={16} />
          Share
        </button>
      </div>
    </div>
  );
}