export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-black">
            Contact Us
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions, suggestions, or need support?
            We're here to help you with your typing practice journey.
          </p>

        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT */}

            <div>

              <h2 className="text-4xl font-black text-slate-900">
                Get In Touch
              </h2>

              <p className="mt-6 text-slate-600 leading-relaxed">
                If you have any questions regarding SSC Typing Hub,
                technical issues, business inquiries, feedback, or
                suggestions, feel free to contact us.
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-slate-600 mt-2">
                    support@ssctypinghub.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Website
                  </h3>

                  <p className="text-slate-600 mt-2">
                    www.ssctypinghub.com
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Response Time
                  </h3>

                  <p className="text-slate-600 mt-2">
                    Usually within 24-48 business hours.
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">

              <h2 className="text-3xl font-black mb-8">
                Send A Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-slate-300
                    outline-none
                    focus:border-blue-500
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-slate-300
                    outline-none
                    focus:border-blue-500
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-slate-300
                    outline-none
                    focus:border-blue-500
                  "
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="
                    w-full
                    p-4
                    rounded-xl
                    border
                    border-slate-300
                    outline-none
                    resize-none
                    focus:border-blue-500
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-4
                    rounded-xl
                    font-bold
                    transition
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}