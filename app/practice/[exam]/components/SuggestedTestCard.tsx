"use client";

import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  Languages,
  Share2,
  Users,
} from "lucide-react";

interface SuggestedTestCardProps {
  title: string;
  questions: number;
  duration: string;
  language: string;
  users: string;
  href: string;
}

export default function SuggestedTestCard({
  title,
 questions,
  duration,
  language,
  users,
  href,
}: SuggestedTestCardProps) {
  return (
    <section>

      <h2 className="mb-5 text-3xl font-bold text-slate-900">
        Suggested Next Test
      </h2>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">

        <div className="flex flex-col items-center justify-between gap-6 p-6 lg:flex-row">

          {/* Left */}

          <div className="flex items-start gap-5">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">

              <CalendarDays
                className="text-blue-600"
                size={30}
              />

            </div>

            <div>

              <h3 className="text-2xl font-semibold text-slate-900">
                {title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-500">

                <span className="flex items-center gap-2">
                  <Users size={16} />
                  {users}
                </span>

                <span className="flex items-center gap-2">
                  {questions} Questions
                </span>

                <span className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {duration}
                </span>

                <span className="flex items-center gap-2">
                  <Languages size={16} />
                  {language}
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <Link
            href={href}
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Start Now
          </Link>

        </div>

        <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">

          <span className="text-blue-600 text-sm font-medium">
            {language}
          </span>

          <button className="flex items-center gap-2 text-green-600 hover:text-green-700">

            <Share2 size={16} />

            Share

          </button>

        </div>

      </div>

    </section>
  );
}