export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div
              className="
                w-32
                h-32
                rounded-full
                bg-white/20
                border-4
                border-white/30
                flex
                items-center
                justify-center
                text-4xl
                font-black
              "
            >
              AK
            </div>

            <div>
              <h1 className="text-5xl font-black">
                Amit Kumar
              </h1>

              <p className="mt-3 text-blue-100 text-lg">
                SSC CGL Aspirant
              </p>

              <p className="mt-2 text-blue-100">
                Member Since January 2026
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* STATS */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-blue-50 rounded-3xl p-8 border">
              <p className="text-slate-500">
                Current WPM
              </p>

              <h2 className="text-5xl font-black text-blue-600 mt-3">
                42
              </h2>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 border">
              <p className="text-slate-500">
                Accuracy
              </p>

              <h2 className="text-5xl font-black text-green-600 mt-3">
                97%
              </h2>
            </div>

            <div className="bg-orange-50 rounded-3xl p-8 border">
              <p className="text-slate-500">
                Tests Taken
              </p>

              <h2 className="text-5xl font-black text-orange-600 mt-3">
                128
              </h2>
            </div>

            <div className="bg-purple-50 rounded-3xl p-8 border">
              <p className="text-slate-500">
                Best WPM
              </p>

              <h2 className="text-5xl font-black text-purple-600 mt-3">
                58
              </h2>
            </div>

          </div>

        </div>
      </section>

      {/* PROFILE DETAILS */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {/* LEFT */}

            <div className="bg-slate-50 rounded-3xl p-8 border">

              <h2 className="text-2xl font-black mb-6">
                Profile Details
              </h2>

              <div className="space-y-4">

                <div>
                  <p className="text-slate-500">
                    Full Name
                  </p>

                  <p className="font-semibold">
                    Amit Kumar
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    amit@example.com
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Target Exam
                  </p>

                  <p className="font-semibold">
                    SSC CGL
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">
                    Experience Level
                  </p>

                  <p className="font-semibold">
                    Intermediate
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border">

              <h2 className="text-2xl font-black mb-6">
                Recent Performance
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border">
                  <span>SSC CGL Practice Set 1</span>
                  <span className="font-bold text-blue-600">
                    41 WPM
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border">
                  <span>SSC CGL Practice Set 2</span>
                  <span className="font-bold text-blue-600">
                    43 WPM
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border">
                  <span>SSC CHSL Mock Test</span>
                  <span className="font-bold text-blue-600">
                    45 WPM
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border">
                  <span>Railway Typing Test</span>
                  <span className="font-bold text-blue-600">
                    47 WPM
                  </span>
                </div>

                <div className="flex justify-between items-center bg-white p-5 rounded-2xl border">
                  <span>Court Typing Practice</span>
                  <span className="font-bold text-blue-600">
                    49 WPM
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}