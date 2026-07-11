import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo Section */}

          <div>
            <h2 className="text-3xl font-black text-white">
              SSC Typing Hub
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              India's modern typing practice platform for SSC,
              Railway, Court and State Government typing exams.
              Practice with exam-level passages and improve your
              speed, accuracy and confidence.
            </p>
          </div>

          {/* Practice Tests */}

          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Practice Tests
            </h3>

            <div className="space-y-3">

              <Link
                href="practice/cgl"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Easy Test
              </Link>

              <Link
                href="practice/chsl"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Moderate Test
              </Link>

              <Link
                href="/practice/gd"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Hard Test
              </Link>

            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Company
            </h3>

            <div className="space-y-3">

              <Link
                href="/about"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                About Us
              </Link>

              <Link
                href="/about/contact"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Contact
              </Link>

              <Link
                href="/blog"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Blog
              </Link>

              <Link
                href="/profile"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Profile
              </Link>

              <Link
                href="/results"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Results
              </Link>

            </div>
          </div>

          {/* Legal */}

          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Legal
            </h3>

            <div className="space-y-3">

              <Link
                href="/privacy-policy"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/disclaimer"
                className="block text-slate-400 hover:text-cyan-400 transition"
              >
                Disclaimer
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="mt-16 pt-8 border-t border-white/10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © 2026 SSC Typing Hub. All Rights Reserved.
            </p>

            <p className="text-slate-500 text-sm">
              Built By IITians • Made For Government Exam Aspirants
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}