"use client";
import { useTypingSettingsStore } from "@/store/typingSettings.store";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import TypingViewport from "./TypingViewport";
import TypingInput from "./input/TypingInput";
import ActionBar from "./footer/ActionBar";

import ProgressBar from "@/components/common/ProgressBar";

import type { Passage } from "@/types";
import type { RenderTree } from "@/engine/renderer/types";

interface TypingLayoutProps {
  passage: Passage;
  renderer: {
    tree: RenderTree;
  };
}

export default function TypingLayout({
  passage,
  renderer,
}: TypingLayoutProps) {

  const darkMode = useTypingSettingsStore(
    (state) => state.darkMode
  );

  return (
  <main
  className={`min-h-screen transition-colors duration-300 ${
    darkMode
      ? "bg-slate-900"
      : "bg-[#f3f5f9]"
  }`}
>

      {/* Header */}
      <Header />

     <div className="mx-auto max-w-[1700px] px-4 py-2">

        {/* Instruction Strip */}
        <div className="mb-3 rounded border bg-white px-4 py-2 shadow-sm">
          <span className="font-semibold text-blue-700">
            Instructions :
          </span>

          <span className="ml-2 text-sm text-slate-700">
            Type the given content exactly as shown. Do not make any mistakes.
          </span>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-12 gap-3">

          {/* Left Content */}
          <section className="col-span-9">

            <div className="rounded-lg border bg-white shadow-sm">

              {/* Progress */}
              <div className="border-b px-6 py-4">

                <ProgressBar value={25} />

              </div>

              {/* Passage */}
              <div className="p-3">

                <div className="rounded border bg-white">

                  <TypingViewport
                    passage={passage}
                    renderer={renderer}
                  />

                </div>

                {/* Typing Box */}
                <div className="mt-3">

                  <TypingInput />

                </div>

                {/* Keyboard */}
               <div className="mt-3">

                   

                </div>

                {/* Buttons */}
                <div className="mt-3">

                  <ActionBar />

                </div>

              </div>

            </div>

          </section>

          {/* Right Sidebar */}
          <aside
  className="
    col-span-3
    sticky
    top-3
    self-start
    max-h-[calc(100vh-110px)]
    overflow-y-auto
    pr-1
  "
>

           <div className="relative z-[9999]">
  <Sidebar />
</div>

          </aside>

        </div>

      </div>

      <Footer />

    </main>
  );
}