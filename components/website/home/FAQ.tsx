"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this similar to the SSC typing test?",
      a: "Yes. The passages are designed to closely match SSC CGL, CHSL, MTS, Railway, Court Typing and other government typing exam patterns for a realistic practice experience.",
    },
    {
      q: "Can I practice for free?",
      a: "Absolutely! You can access multiple typing tests and passages free of cost before choosing any premium features.",
    },
    {
      q: "How is WPM calculated?",
      a: "Words Per Minute (WPM) is calculated using correctly typed words during the selected test duration while considering typing accuracy.",
    },
    {
      q: "How can I improve typing accuracy?",
      a: "Practice consistently, maintain proper finger placement, avoid rushing, and focus on reducing mistakes before increasing speed.",
    },
    {
      q: "Do I get performance reports?",
      a: "Yes. You'll receive detailed reports including WPM, CPM, Accuracy, Errors, Time Analysis and your overall typing progress.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[#050B1F] py-28">

      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 text-cyan-300 backdrop-blur-xl font-semibold">
            ❓ Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white">
            Got Questions?
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need to know before starting your typing journey.
          </p>

        </div>

        {/* FAQ Cards */}

        <div className="space-y-6">

          {faqs.map((item, index) => {

            const active = open === index;

            return (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                "
              >

                {/* Glow */}

                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    items-center
                    justify-between
                    p-7
                    text-left
                  "
                >

                  <span className="text-lg md:text-xl font-bold text-white">
                    {item.q}
                  </span>

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-cyan-500/10
                      border
                      border-cyan-400/20
                      transition-all
                      duration-300
                      ${active ? "rotate-180 bg-cyan-500/20" : ""}
                    `}
                  >
                    <ChevronDown className="text-cyan-300" size={22} />
                  </div>

                </button>

                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-500
                    ${active ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >

                  <div className="px-7 pb-7 text-slate-300 leading-8">

                    {item.a}

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}