"use client";

import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen } from "lucide-react";
interface Props {
  slug: string;
  title: string;
  image: string;
  duration: string;
  tests: number;
  description: string;
}

export default function ExamCard({
  slug,
  title,
  image,
  duration,
  tests,
  description,
}: Props) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
      {/* Header */}

      <div className="bg-[#EEF5FF] p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow">

              <Image
                src={image}
                alt={title}
                width={42}
                height={42}
              />

            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-800">
                {title}
              </h2>

              <p className="text-sm text-slate-500">
                {description}
              </p>

            </div>

          </div>

          <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow">

            <Users
              size={13}
              className="mr-1 inline"
            />

            125k+

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-5 p-5">

        <div className="flex items-center justify-between text-sm">

          <div className="flex items-center gap-2 text-slate-600">

            <BookOpen size={17} />

            {tests} Practice Tests

          </div>

          <div className="font-semibold text-[#0A4EA3]">
            40%
          </div>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-200">

          <div className="h-full w-[40%] rounded-full bg-cyan-500" />

        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">

          <div>

            <p className="text-slate-500">
              Duration
            </p>

            <h4 className="font-semibold">
              {duration}
            </h4>

          </div>

          <div>

            <p className="text-slate-500">
              Language
            </p>

            <h4 className="font-semibold">
              English
            </h4>

          </div>

        </div>

        <div className="border-t pt-4">

          <div className="space-y-1 text-sm">

            <p>✅ Easy - 10 Tests</p>

            <p>🟡 Moderate - 15 Tests</p>

            <p>🔴 Hard - 15 Tests</p>

          </div>

        </div>

       <Link
  href={`/practice/${slug}`}
  className="
    mt-3
    block
    w-full
    rounded-xl
    bg-cyan-500
    py-3
    text-center
    font-semibold
    text-white
    transition
    hover:bg-cyan-600
  "
>
  View Test Series
</Link>

      </div>
    </div>
  );
}