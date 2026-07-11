"use client";
 

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
    const router = useRouter();

const [exam, setExam] = useState("SSC CGL");

const [language, setLanguage] =
  useState("English");

const [duration, setDuration] =
  useState("15");
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">

      <h1 className="mb-8 text-center text-4xl font-bold text-blue-700">
        SSC Typing Test
      </h1>

      <div className="grid grid-cols-12 gap-8">

        {/* Left */}

        <div className="col-span-7 rounded-xl border bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-semibold">
            Test Setup
          </h2>

          <div className="space-y-6">

            <div>
              <label className="mb-2 block font-medium">
                Select Exam
              </label>

             <select
  value={exam}
  onChange={(e) =>
    setExam(e.target.value)
  }
  className="w-full rounded-lg border p-3"
>
                <option>SSC CGL</option>
                <option>SSC CHSL</option>
                <option>SSC MTS</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Language
              </label>

              <select
  value={language}
  onChange={(e) =>
    setLanguage(e.target.value)
  }
  className="w-full rounded-lg border p-3"
>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">
                Test Duration
              </label>

             <select
  value={duration}
  onChange={(e) =>
    setDuration(e.target.value)
  }
  className="w-full rounded-lg border p-3"
>
                <option>5 Minutes</option>
                <option>10 Minutes</option>
                <option>15 Minutes</option>
              </select>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="col-span-5 rounded-xl border bg-white p-8 shadow">

          <h2 className="mb-6 text-2xl font-semibold">
            Instructions
          </h2>

          <ul className="space-y-4 text-slate-700">

            <li>✔ Timer starts after first key press.</li>

            <li>✔ Backspace is allowed.</li>

            <li>✔ Accuracy is calculated automatically.</li>

            <li>✔ Type exactly as shown.</li>

            <li>✔ Finish before timer ends.</li>

          </ul>

          <button
            className="
              mt-10
              w-full
              rounded-lg
              bg-blue-700
              py-4
              text-lg
              font-semibold
              text-white
              hover:bg-blue-800
            "
          >
            START TEST
           <button
  onClick={() => router.push("/typing")}
  className="..."
>
  START TEST
</button>
          </button>

        </div>

      </div>

    </div>
  );
}