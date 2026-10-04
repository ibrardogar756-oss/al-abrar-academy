"use client";

import { useState } from "react";

export default function QuranWithTajweedPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-green-950 text-white px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/#home" className="text-2xl font-bold">
            Al Abrar Academy
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7 font-medium">
            <a
              href="/#home"
              className="hover:text-yellow-400 transition"
            >
              Home
            </a>

            <a
              href="/#about"
              className="hover:text-yellow-400 transition"
            >
              About Us
            </a>

            <a
              href="/#courses"
              className="hover:text-yellow-400 transition"
            >
              Courses
            </a>

            <a
              href="/#pricing"
              className="hover:text-yellow-400 transition"
            >
              Pricing
            </a>

            <a
              href="/#contact"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>

            <a
              href="/#free-trial"
              className="bg-yellow-500 text-green-950 px-5 py-2 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
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
              href="/#pricing"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              Pricing
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
            Quran Reading with Tajweed
          </h1>

          <p className="text-green-100 mt-6 text-lg leading-8 max-w-3xl mx-auto">
            Learn to read the Holy Quran correctly and confidently with
            proper pronunciation, essential Tajweed rules, and guidance
            from qualified Quran teachers.
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
            Learn Quran Reading with Confidence
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Our Quran Reading with Tajweed course is designed to help
            students develop accurate Quran reading, clear pronunciation,
            and a stronger understanding of essential Tajweed rules.
          </p>

          <p className="text-gray-600 mt-4 leading-8 text-lg">
            Whether a student is beginning their Quran learning journey
            or wants to improve their existing recitation, lessons are
            structured according to their current level and learning needs.
            Our teachers provide step-by-step guidance in a supportive
            online learning environment.
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
              Build Strong Quran Reading Skills
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
              Students develop the core skills needed for more accurate,
              clear, and confident Quran recitation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Quran Reading
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Improve your ability to read Quranic text accurately,
                smoothly, and with greater confidence.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Tajweed Rules
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn essential Tajweed rules and understand how to apply
                them during Quran recitation.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Makharij
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn the correct articulation points and pronunciation
                of Quranic letters.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                ✓ Fluency & Accuracy
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Develop clearer, smoother, and more accurate Quran
                recitation through guided practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              COURSE BENEFITS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-2">
              Why Learn with Al Abrar Academy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-7 rounded-2xl border border-green-100 text-center">
              <div className="text-4xl">📖</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Structured Learning
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn step by step according to your current Quran
                reading level and learning needs.
              </p>
            </div>

            <div className="bg-green-50 p-7 rounded-2xl border border-green-100 text-center">
              <div className="text-4xl">👨‍🏫</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Qualified Teachers
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Receive guidance, correction, and support from qualified
                Quran teachers.
              </p>
            </div>

            <div className="bg-green-50 p-7 rounded-2xl border border-green-100 text-center">
              <div className="text-4xl">🏠</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Learn from Home
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Attend your Quran classes online from the comfort of
                your home, wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Course For + How Classes Work */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Who Is This Course For */}
          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <p className="text-green-700 font-semibold tracking-widest">
              WHO IS THIS COURSE FOR?
            </p>

            <h2 className="text-3xl font-bold text-green-950 mt-2">
              Suitable for Different Learning Levels
            </h2>

            <ul className="mt-6 space-y-4 text-gray-600">
              <li>
                ✓ Children learning Quran from the beginning
              </li>

              <li>
                ✓ Adults who want to improve Quran reading
              </li>

              <li>
                ✓ Beginners with basic Quran reading ability
              </li>

              <li>
                ✓ Students who want to improve their Tajweed
              </li>

              <li>
                ✓ Students who want better pronunciation and fluency
              </li>
            </ul>
          </div>

          {/* How Classes Work */}
          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <p className="text-green-700 font-semibold tracking-widest">
              HOW CLASSES WORK
            </p>

            <h2 className="text-3xl font-bold text-green-950 mt-2">
              A Simple & Structured Learning Process
            </h2>

            <div className="mt-6 space-y-4">
              <div className="border rounded-xl p-4">
                <h3 className="font-bold text-green-950">
                  1. Choose Your Schedule
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-6">
                  Select a suitable class time according to your routine
                  and availability.
                </p>
              </div>

              <div className="border rounded-xl p-4">
                <h3 className="font-bold text-green-950">
                  2. Meet Your Teacher
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-6">
                  Attend your online lesson with guidance from a
                  qualified Quran teacher.
                </p>
              </div>

              <div className="border rounded-xl p-4">
                <h3 className="font-bold text-green-950">
                  3. Learn & Practise
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-6">
                  Read, practise pronunciation, learn Tajweed rules, and
                  receive corrections during your lessons.
                </p>
              </div>

              <div className="border rounded-xl p-4">
                <h3 className="font-bold text-green-950">
                  4. Improve Step by Step
                </h3>

                <p className="text-gray-600 text-sm mt-1 leading-6">
                  Continue practising according to your level and work
                  towards clearer and more confident recitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Learning */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="max-w-3xl">
              <p className="text-green-700 font-semibold tracking-widest">
                FLEXIBLE ONLINE LEARNING
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
                Quran Classes Designed Around Your Routine
              </h2>

              <p className="text-gray-600 mt-5 leading-8 text-lg">
                We understand that every student and family has a
                different routine. Our online learning approach provides
                convenient scheduling while keeping the learning process
                structured and focused.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="bg-green-50 rounded-xl p-5 text-center border border-green-100">
                  <h3 className="font-bold text-green-950">
                    Flexible Timings
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Choose a suitable class time.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-5 text-center border border-green-100">
                  <h3 className="font-bold text-green-950">
                    Online Classes
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Learn from anywhere in the world.
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-5 text-center border border-green-100">
                  <h3 className="font-bold text-green-950">
                    Personal Guidance
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    Learn according to your needs.
                  </p>
                </div>
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
                Our students learn with qualified Quran teachers who
                guide them through Quran reading, pronunciation, and
                Tajweed. Teachers focus on the student's learning needs
                and help them improve step by step.
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
              Book Your 3-Day Free Trial
            </h2>

            <p className="text-green-100 mt-5 leading-7 max-w-2xl mx-auto">
              Experience our online Quran classes and discover a
              comfortable, structured, and supportive way to learn Quran
              with Tajweed.
            </p>

            <a
              href="/#free-trial"
              className="inline-block mt-8 bg-yellow-500 text-green-950 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
            >
              Book Your Free Trial
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
              <a
                href="/#home"
                className="hover:text-white"
              >
                Home
              </a>

              <a
                href="/#about"
                className="hover:text-white"
              >
                About Us
              </a>

              <a
                href="/#courses"
                className="hover:text-white"
              >
                Courses
              </a>

              <a
                href="/#pricing"
                className="hover:text-white"
              >
                Pricing
              </a>

              <a
                href="/#contact"
                className="hover:text-white"
              >
                Contact
              </a>

              <a
                href="/#free-trial"
                className="hover:text-white"
              >
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
                📱 WhatsApp: +92 300 0219756
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