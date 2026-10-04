"use client";

import { useState } from "react";

export default function TajweedAndTarteel() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="bg-green-950 text-white px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Al Abrar Academy
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
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

          {/* Mobile Menu Button */}
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
          <div className="md:hidden mt-5 flex flex-col gap-4 border-t border-white/10 pt-5">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>

            <a href="/#about" className="hover:text-yellow-400">
              About Us
            </a>

            <a href="/#courses" className="hover:text-yellow-400">
              Courses
            </a>

            <a href="/#pricing" className="hover:text-yellow-400">
              Pricing
            </a>

            <a href="/#contact" className="hover:text-yellow-400">
              Contact
            </a>

            <a
              href="/#free-trial"
              className="bg-yellow-500 text-green-950 px-5 py-2 rounded-lg font-bold w-fit"
            >
              Free Trial
            </a>
          </div>
        )}
      </nav>

      {/* Course Header */}
      <section className="bg-green-950 text-white px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold tracking-widest">
            QURAN RECITATION
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Tajweed and Tarteel Course
          </h1>

          <p className="text-green-100 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-8">
            Improve your Quran recitation with proper Tajweed rules,
            pronunciation and beautiful Tarteel.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
              Children & Adults
            </span>

            <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm">
              Online Classes
            </span>

            <span className="bg-yellow-500 text-green-950 px-4 py-2 rounded-full text-sm font-semibold">
              3-Day Free Trial
            </span>
          </div>
        </div>
      </section>

      {/* Course Introduction */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-green-700 font-semibold tracking-widest">
            COURSE INTRODUCTION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            Recite the Quran Correctly and Beautifully
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            The Tajweed and Tarteel Course is designed for students who want
            to improve the accuracy, pronunciation and quality of their Quran
            recitation.
          </p>

          <p className="text-gray-600 mt-4 leading-8 text-lg">
            Students learn important Tajweed rules and receive practical
            guidance to improve their recitation while developing a calm,
            clear and confident style of reading.
          </p>
        </div>
      </section>

      {/* What You Will Learn */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              WHAT YOU WILL LEARN
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
              Improve Your Quran Recitation
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Build stronger recitation skills through Tajweed instruction,
              pronunciation practice and guided Quran reading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                Tajweed Rules
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn essential Tajweed rules and understand how they are
                applied during Quran recitation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                Correct Pronunciation
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Improve the pronunciation of Arabic letters and Quranic words
                through guided practice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                Makharij
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Develop a better understanding of the correct articulation
                points of Arabic letters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold text-green-950">
                Tarteel Recitation
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Practice clear, measured and confident Quran recitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              COURSE BENEFITS
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
              Grow in Your Quran Recitation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-7 rounded-2xl border">
              <div className="text-3xl">📖</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Better Accuracy
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Improve your reading accuracy by learning and applying
                essential Tajweed rules.
              </p>
            </div>

            <div className="bg-green-50 p-7 rounded-2xl border">
              <div className="text-3xl">🎙️</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Clear Recitation
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Develop clearer pronunciation and a more confident style of
                Quran recitation.
              </p>
            </div>

            <div className="bg-green-50 p-7 rounded-2xl border">
              <div className="text-3xl">👨‍🏫</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Personal Guidance
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Receive individual correction and guidance from qualified
                Quran teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This Course For? */}
      <section className="px-8 py-20 bg-green-950 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-semibold tracking-widest">
              WHO IS THIS COURSE FOR?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              For Students at Different Levels
            </h2>

            <p className="text-green-100 mt-6 leading-8">
              This course is suitable for students who already know basic
              Quran reading and want to improve their Tajweed, pronunciation
              and recitation.
            </p>
          </div>

          <div className="bg-white/10 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-3xl">👦</span>

              <p className="text-lg font-semibold">
                Children & Young Learners
              </p>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <span className="text-3xl">🎓</span>

              <p className="text-lg font-semibold">
                Teenagers
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">👨</span>

              <p className="text-lg font-semibold">
                Adults
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Classes Work */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              HOW CLASSES WORK
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
              A Simple & Structured Learning Process
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
              Our online Tajweed classes are designed to provide focused
              instruction, regular practice and clear recitation guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-7 shadow-sm">
              <div className="text-green-700 font-bold text-sm tracking-widest">
                01
              </div>

              <h3 className="text-xl font-bold text-green-950 mt-3">
                Choose Your Schedule
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Select a suitable class time according to your routine and
                availability.
              </p>
            </div>

            <div className="border rounded-2xl p-7 shadow-sm">
              <div className="text-green-700 font-bold text-sm tracking-widest">
                02
              </div>

              <h3 className="text-xl font-bold text-green-950 mt-3">
                Meet Your Teacher
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn with a qualified Quran teacher who guides you according
                to your recitation level.
              </p>
            </div>

            <div className="border rounded-2xl p-7 shadow-sm">
              <div className="text-green-700 font-bold text-sm tracking-widest">
                03
              </div>

              <h3 className="text-xl font-bold text-green-950 mt-3">
                Recite & Practise
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Practise Quran recitation while receiving guidance on Tajweed,
                pronunciation and articulation.
              </p>
            </div>

            <div className="border rounded-2xl p-7 shadow-sm">
              <div className="text-green-700 font-bold text-sm tracking-widest">
                04
              </div>

              <h3 className="text-xl font-bold text-green-950 mt-3">
                Review & Improve
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Review your learning and continue improving your recitation
                step by step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Online Learning */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              FLEXIBLE ONLINE LEARNING
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
              Learn From the Comfort of Your Home
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
              Continue improving your Quran recitation through convenient
              online classes designed around your learning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <div className="text-3xl">🕒</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Flexible Timings
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Choose a suitable time based on your availability and daily
                routine.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <div className="text-3xl">💻</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Online Classes
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Learn Quran recitation from the comfort of your home through
                online classes.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border shadow-sm">
              <div className="text-3xl">🤝</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Personal Guidance
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Receive focused correction and guidance throughout your
                learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualified Teachers */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-green-700 font-semibold tracking-widest">
            QUALIFIED TEACHERS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            Learn From Experienced Quran Teachers
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Our teachers provide step-by-step guidance, pronunciation
            correction and practical Tajweed training to help students improve
            their Quran recitation.
          </p>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="px-8 py-20 bg-green-950 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-400 font-semibold tracking-widest">
            START LEARNING
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Improve Your Quran Recitation
          </h2>

          <p className="text-green-100 mt-5 max-w-2xl mx-auto leading-8">
            Book your 3-day free trial and begin improving your Quran
            recitation with Al Abrar Academy.
          </p>

          <a
            href="/#free-trial"
            className="inline-block mt-8 bg-yellow-500 text-green-950 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Book Your Free Trial
          </a>
        </div>
      </section>

      {/* Back to Courses */}
      <section className="px-8 py-12 text-center">
        <a
          href="/#courses"
          className="text-green-700 font-semibold hover:text-green-950 transition"
        >
          ← Back to Courses
        </a>
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
              Learn Quran and essential Islamic knowledge from the comfort of
              your home with qualified teachers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a href="/" className="hover:text-white">
                Home
              </a>

              <a href="/#about" className="hover:text-white">
                About Us
              </a>

              <a href="/#courses" className="hover:text-white">
                Courses
              </a>

              <a href="/#pricing" className="hover:text-white">
                Pricing
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
              <p>📧 Email: info@alabrarquranacademy.com</p>

              <p>📱 WhatsApp: +92 300 0219756</p>

              <p>🌍 Online Quran Classes Worldwide</p>
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