"use client";

import { useState } from "react";

export default function MemorizeQuranPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="bg-green-950 text-white px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          <a href="/#home" className="text-2xl font-bold">
            Al Abrar Academy
          </a>

          <div className="hidden md:flex items-center gap-7 font-medium">

            <a href="/#home" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="/#about" className="hover:text-yellow-400 transition">
              About Us
            </a>

            <a href="/#courses" className="hover:text-yellow-400 transition">
              Courses
            </a>

            <a href="/#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>

            <a
              href="/#free-trial"
              className="bg-yellow-500 text-green-950 px-5 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Free Trial
            </a>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden mt-5 flex flex-col gap-4 text-center border-t border-white/10 pt-5">

            <a
              href="/#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </a>

            <a
              href="/#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              About Us
            </a>

            <a
              href="/#courses"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Courses
            </a>

            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </a>

            <a
              href="/#free-trial"
              onClick={() => setMenuOpen(false)}
              className="bg-yellow-500 text-green-950 px-5 py-2 rounded-lg font-bold"
            >
              Free Trial
            </a>

          </div>
        )}
      </nav>


      {/* Course Header */}
      <section className="bg-green-950 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold tracking-widest">
            QURAN COURSE
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Quran Memorization
          </h1>

          <p className="text-green-100 mt-6 text-lg leading-8 max-w-3xl mx-auto">
            Memorize the Quran with a structured learning approach,
            regular revision and guidance from qualified Quran teachers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">

            <div className="bg-white/10 border border-white/10 rounded-xl px-6 py-4">
              <p className="font-bold">Children & Adults</p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl px-6 py-4">
              <p className="font-bold">Online Classes</p>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl px-6 py-4">
              <p className="font-bold">3-Day Free Trial</p>
            </div>

          </div>

        </div>
      </section>


      {/* Course Introduction */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">

          <p className="text-green-700 font-semibold tracking-widest">
            COURSE INTRODUCTION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-2">
            Begin Your Quran Memorization Journey
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Our Quran Memorization course is designed to help students
            memorize the Quran in a structured and manageable way.
            Students are guided according to their learning level and
            receive support throughout their memorization journey.
          </p>

          <p className="text-gray-600 mt-4 leading-8 text-lg">
            Along with memorization, students are encouraged to revise
            previously memorized portions regularly so that their
            memorization remains strong and consistent.
          </p>

        </div>
      </section>


      {/* What You Will Learn */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold tracking-widest">
              WHAT YOU WILL LEARN
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-2">
              Build Strong Quran Memorization Skills
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ New Lesson Memorization
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn new Quranic verses step by step with proper
                guidance and repetition.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Daily Revision
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Regular revision helps students strengthen and retain
                previously memorized portions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Correct Recitation
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Improve pronunciation and recitation while memorizing
                the Quran.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Consistent Progress
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Follow a structured routine that helps students make
                steady progress in their memorization.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Benefits */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold tracking-widest">
              COURSE BENEFITS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-2">
              Benefits of Quran Memorization
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-green-50 p-7 rounded-2xl border border-green-100 text-center">

              <div className="text-4xl">📖</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Structured Progress
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn and revise according to a clear and manageable
                memorization routine.
              </p>

            </div>

            <div className="bg-green-50 p-7 rounded-2xl border border-green-100 text-center">

              <div className="text-4xl">🔁</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Regular Revision
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Strengthen memorization through regular revision and
                continuous practice.
              </p>

            </div>

            <div className="bg-green-50 p-7 rounded-2xl border border-green-100 text-center">

              <div className="text-4xl">👨‍🏫</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Teacher Guidance
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Receive guidance and correction from qualified Quran
                teachers throughout your learning journey.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Who Can Join + Schedule */}
      <section className="px-6 py-20 bg-gray-50">

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Who Can Join */}
          <div className="bg-white p-8 rounded-2xl border shadow-sm">

            <p className="text-green-700 font-semibold tracking-widest">
              WHO CAN JOIN?
            </p>

            <h2 className="text-3xl font-bold text-green-950 mt-2">
              This Course Is For
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li>✓ Children who want to memorize the Quran</li>

              <li>✓ Adults interested in Quran memorization</li>

              <li>✓ Students starting their Hifz journey</li>

              <li>✓ Students continuing their existing memorization</li>

              <li>✓ Students who want regular revision and guidance</li>

            </ul>

          </div>


          {/* Schedule */}
          <div className="bg-white p-8 rounded-2xl border shadow-sm">

            <p className="text-green-700 font-semibold tracking-widest">
              CLASS SCHEDULE
            </p>

            <h2 className="text-3xl font-bold text-green-950 mt-2">
              Flexible Online Classes
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Students can learn Quran memorization online according
              to a suitable schedule. The learning routine can be
              organized according to the student's level and availability.
            </p>

            <div className="mt-6 space-y-4">

              <div className="border rounded-xl p-4">

                <h3 className="font-bold text-green-950">
                  Flexible Timings
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Choose a suitable class time according to your routine.
                </p>

              </div>

              <div className="border rounded-xl p-4">

                <h3 className="font-bold text-green-950">
                  Online Learning
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Join your Quran memorization class from anywhere
                  in the world.
                </p>

              </div>

              <div className="border rounded-xl p-4">

                <h3 className="font-bold text-green-950">
                  Regular Revision
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  Maintain your memorization through consistent revision.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Qualified Teachers */}
      <section className="px-6 py-20">

        <div className="max-w-5xl mx-auto">

          <div className="bg-green-950 text-white rounded-3xl p-8 md:p-12">

            <div className="max-w-3xl">

              <p className="text-yellow-400 font-semibold tracking-widest">
                QUALIFIED TEACHERS
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mt-3">
                Learn with Proper Guidance
              </h2>

              <p className="text-green-100 mt-5 leading-8 text-lg">
                Our students receive guidance from qualified Quran
                teachers throughout their memorization journey. Teachers
                help students with new lessons, recitation, revision
                and consistent progress.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* Free Trial CTA */}
      <section className="px-6 py-20 bg-gray-50">

        <div className="max-w-4xl mx-auto">

          <div className="bg-green-950 text-white rounded-3xl p-10 md:p-14 text-center">

            <p className="text-yellow-400 font-semibold tracking-widest">
              START YOUR JOURNEY
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Start Your 3-Day Free Trial
            </h2>

            <p className="text-green-100 mt-5 leading-7 max-w-2xl mx-auto">
              Experience our online Quran memorization classes and
              discover a structured way to begin or continue your
              Hifz journey.
            </p>

            <a
              href="/#free-trial"
              className="inline-block mt-8 bg-yellow-500 text-green-950 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Start Free Trial
            </a>

            <div className="mt-5">

              <a
                href="/#courses"
                className="text-green-100 hover:text-yellow-400 transition underline"
              >
                ← Back to Courses
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* Footer */}
      <footer className="bg-gray-950 text-white">

        <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-2xl font-bold">
              Al Abrar
            </h2>

            <p className="text-gray-400 mt-2">
              Online Quran Academy
            </p>

            <p className="text-gray-400 mt-5 leading-7">
              Learn Quran and essential Islamic knowledge from the
              comfort of your home with qualified teachers.
            </p>

          </div>


          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="/#home" className="hover:text-white">
                Home
              </a>

              <a href="/#about" className="hover:text-white">
                About Us
              </a>

              <a href="/#courses" className="hover:text-white">
                Courses
              </a>

              <a href="/#contact" className="hover:text-white">
                Contact
              </a>

              <a href="/#free-trial" className="hover:text-white">
                Free Trial
              </a>

            </div>

          </div>


          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>
                📧 Email: info@alabrarquranacademy.com
              </p>

              <p>
                📱 WhatsApp: +92 XXX XXXXXXX
              </p>

              <p>
                🌍 Online Quran Classes Worldwide
              </p>

            </div>

          </div>

        </div>


        <div className="border-t border-gray-800">

          <div className="max-w-6xl mx-auto px-8 py-5 text-center text-gray-500 text-sm">
            © 2026 Al Abrar Online Quran Academy. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}