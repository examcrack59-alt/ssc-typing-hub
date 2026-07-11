"use client";
import { useResultStore } from "@/store/result.store";

import {
  Trophy,
  User,
  Calendar,
  Clock3,
  FileText,
  CheckCircle2,
} from "lucide-react";

interface ResultHeaderProps {
  exam: string;
  difficulty: string;
  testId: number;
  candidate: string;
  duration: string;
}

export default function ResultHeader({
  exam,
  difficulty,
  testId,
  candidate,
  duration,
}: ResultHeaderProps) {

  const {
    resultStatus,
    completionPercentage,
    netWPM,
    accuracy,
  } = useResultStore();

  const examNames: Record<string, string> = {
  cgl: "SSC CGL",
  chsl: "SSC CHSL",
  mts: "SSC MTS",
  gd: "SSC GD",
  cpo: "SSC CPO",
  stenographer: "SSC STENOGRAPHER",
};

const examTitle =
  examNames[exam.toLowerCase()] ?? exam;
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

      {/* Top Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#0A4EA3] via-[#2563eb] to-[#06b6d4] px-8 py-8">

        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>
            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-white/20 p-4 backdrop-blur">

                <Trophy
                  size={34}
                  className="text-yellow-300"
                />

              </div>
             

               

                <h1 className="text-4xl font-black text-white">
                  {examTitle} Typing Test Result
                </h1>

                <p className="mt-2 text-blue-100">
                  Skill Performance Report
                </p>

              </div>

            </div>
          </div>
           

          <div className="rounded-2xl bg-white/15 px-6 py-4 backdrop-blur">

  <div className="flex items-center gap-3">

    <CheckCircle2
      className={
        resultStatus === "PASS"
          ? "text-green-300"
          : "text-red-300"
      }
      size={22}
    />

    <div>

      <p className="text-xs uppercase tracking-widest text-blue-100">
        Final Result
      </p>

      <span
        className={`text-2xl font-black ${
          resultStatus === "PASS"
            ? "text-green-300"
            : "text-red-300"
        }`}
      >
        {resultStatus}
      </span>

    </div>

  </div>

</div>

             
      </div>

      {/* Details */}
      <div className="grid gap-5 p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3
2xl:grid-cols-4">

        <InfoCard
          icon={<User size={20} />}
          label="Candidate"
          value={candidate}
        />

        <InfoCard
          icon={<FileText size={20} />}
          label="Exam"
         value={examTitle}
        />

        <InfoCard
          icon={<Trophy size={20} />}
          label="Difficulty"
          value={difficulty || "Official"}
        />

        <InfoCard
          icon={<FileText size={20} />}
          label="Test ID"
          value={`#${testId}`}
        />

        <InfoCard
          icon={<Clock3 size={20} />}
          label="Duration"
          value={duration}
        />

        <InfoCard
          icon={<Calendar size={20} />}
          label="Date"
          value={new Date().toLocaleString("en-IN")}
        />
        <InfoCard
  icon={<CheckCircle2 size={20} />}
  label="Completion"
 value={`${(completionPercentage ?? 0).toFixed(0)} %`}
/>

<InfoCard
  icon={<Trophy size={20} />}
  label="Net Speed"
 value={`${(netWPM ?? 0).toFixed(2)} WPM`}
/>

<InfoCard
  icon={<Clock3 size={20} />}
  label="Accuracy"
 value={`${(accuracy ?? 0).toFixed(2)} %`}
/>

      </div>

    </section>
  );
}

interface InfoCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function InfoCard({
  label,
  value,
  icon,
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3 text-blue-700">
          {icon}
        </div>

        <div>

          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </p>

          <h3 className="mt-1 text-lg font-bold text-slate-800">
            {value}
          </h3>

        </div>

      </div>

    </div>
  );
}