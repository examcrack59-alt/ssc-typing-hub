"use client";

interface InstructionContentProps {
  accepted: boolean;
  onAcceptedChange: (value: boolean) => void;
}

export default function InstructionContent({
  accepted,
  onAcceptedChange,
}: InstructionContentProps) {
  return (
    <section className="flex-1 overflow-y-auto bg-white px-10 py-8">

      {/* Title */}

      <h1 className="text-3xl font-bold text-slate-900">
        General Instructions
      </h1>

      <p className="mt-2 text-slate-500">
        Please read all the instructions carefully before starting the
        typing test.
      </p>

      {/* Info Box */}

      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">

        <h3 className="font-semibold text-blue-700">
          Important Information
        </h3>

        <p className="mt-2 text-[15px] leading-7 text-slate-700">
          The timer starts immediately after clicking the <b>Next</b>
          button. Once the test begins, you cannot pause or restart it.
        </p>

      </div>

      {/* Instructions */}

      <div className="mt-10 space-y-5">

        {[
          "Read all instructions carefully before starting the examination.",
          "Ensure that your keyboard is working properly before beginning the test.",
          "The timer starts immediately after clicking the Next button.",
          "Do not refresh or close your browser during the test.",
          "The test will be submitted automatically when the time expires.",
          "Use only your physical keyboard. Copy-paste is not allowed.",
          "Switching tabs or minimizing the browser may affect your test.",
          "Check your internet connection before starting.",
          "Read each paragraph carefully before typing.",
          "Click Next only when you are fully ready.",
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
          >
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
              {index + 1}
            </div>

            <p className="leading-8 text-slate-700">
              {item}
            </p>
          </div>
        ))}

      </div>

      {/* Warning */}

      <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5">

        <h3 className="font-semibold text-red-700">
          Warning
        </h3>

        <p className="mt-2 text-[15px] leading-7 text-slate-700">
          Do not refresh the browser or press the Back button during the
          examination. Doing so may end your attempt.
        </p>

      </div>

      {/* Checkbox */}

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">

        <label className="flex cursor-pointer items-start gap-3">

         <input
  type="checkbox"
  checked={accepted}
  onChange={(e) => onAcceptedChange(e.target.checked)}
  className="mt-1 h-5 w-5 rounded border-slate-300 accent-blue-600"
/>

          <span className="leading-7 text-slate-700">
            I have read and understood all the instructions. I am ready
            to start the typing test.
          </span>

        </label>

      </div>

    </section>
  );
}