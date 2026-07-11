"use client";

import {
  User,
  GraduationCap,
  BadgeCheck,
  Globe,
} from "lucide-react";

interface CandidatePanelProps {
  name?: string;
  exam?: string;
  language?: string;
}

export default function CandidatePanel({
  name = "Demo User",
  exam = "SSC CGL",
  language = "English",
}: CandidatePanelProps) {
  return (
    <aside className="w-[320px] border-l border-slate-200 bg-white">

      <div className="sticky top-0 flex h-full flex-col items-center p-8">

        {/* Avatar */}

        <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-700 shadow-lg">

          <User
            size={70}
            className="text-white"
          />

        </div>

        {/* Name */}

        <h2 className="mt-8 text-2xl font-bold text-slate-900">
          {name}
        </h2>

        <p className="mt-2 text-slate-500">
          SSC Aspirant
        </p>

        {/* Divider */}

        <div className="my-8 h-px w-full bg-slate-200" />

        {/* Details */}

        <div className="w-full space-y-5">

          <div className="flex items-center gap-3">

            <GraduationCap
              size={20}
              className="text-blue-600"
            />

            <div>

              <p className="text-xs uppercase tracking-wide text-slate-400">
                Examination
              </p>

              <p className="font-semibold text-slate-800">
                {exam}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <Globe
              size={20}
              className="text-green-600"
            />

            <div>

              <p className="text-xs uppercase tracking-wide text-slate-400">
                Language
              </p>

              <p className="font-semibold text-slate-800">
                {language}
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <BadgeCheck
              size={20}
              className="text-purple-600"
            />

            <div>

              <p className="text-xs uppercase tracking-wide text-slate-400">
                Status
              </p>

              <p className="font-semibold text-green-600">
                Ready for Test
              </p>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}