"use client";

import { useState } from "react";

export default function ArabicCourses() {
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
            <a href="/" className="hover:text-yellow-400 transition">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
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
            ARABIC LANGUAGE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Arabic Courses
          </h1>

          <p className="text-green-100 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-8">
            Learn Arabic step by step and develop the language skills needed
            for reading, understanding and communication.
          </p>

        </div>
      </section>

      {/* Course Introduction */}
      <section className="px-8 py-20">

        <div className="max-w-5xl mx-auto">

          <p className="text-green-700 font-semibold tracking-widest">
            COURSE INTRODUCTION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            Build Your Arabic Language Skills
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            Our Arabic Courses are designed for students who want to learn
            Arabic from the basics or improve their existing language skills.
            Lessons can be structured according to the student's level and
            learning goals.
          </p>

          <p className="text-gray-600 mt-4 leading-8 text-lg">
            Students can develop their understanding of Arabic vocabulary,
            grammar, reading and sentence structure through guided online
            lessons.
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
              Develop Your Arabic Skills
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h3 className="text-xl font-bold text-green-950">
                Arabic Reading
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Improve your ability to read and recognize Arabic words and
                sentences.
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h3 className="text-xl font-bold text-green-950">
                Vocabulary
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Build useful Arabic vocabulary for learning and everyday
                communication.
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h3 className="text-xl font-bold text-green-950">
                Arabic Grammar
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Understand important grammar concepts and how Arabic sentences
                are structured.
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl border shadow-sm">

              <h3 className="text-xl font-bold text-green-950">
                Sentence Formation
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Practice forming correct Arabic sentences with guided
                exercises.
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
              Learn Arabic With Confidence
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-green-50 p-7 rounded-2xl border">

              <div className="text-3xl">📚</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Structured Learning
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Follow a clear learning path according to your current level
                and goals.
              </p>

            </div>

            <div className="bg-green-50 p-7 rounded-2xl border">

              <div className="text-3xl">🗣️</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Practical Skills
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Develop useful reading, vocabulary and communication skills.
              </p>

            </div>

            <div className="bg-green-50 p-7 rounded-2xl border">

              <div className="text-3xl">👨‍🏫</div>

              <h3 className="text-xl font-bold text-green-950 mt-5">
                Personal Guidance
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Receive individual attention and guidance from experienced
                teachers.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Who Can Join */}
      <section className="px-8 py-20 bg-green-950 text-white">

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-yellow-400 font-semibold tracking-widest">
              WHO CAN JOIN?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Arabic Learning for Different Levels
            </h2>

            <p className="text-green-100 mt-6 leading-8">
              Our Arabic Courses can be suitable for beginners as well as
              students who already have some knowledge of Arabic and want to
              improve their skills.
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
                Teenagers & Students
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">👨</span>
              <p className="text-lg font-semibold">
                Adults & Beginners
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Class Schedule */}
      <section className="px-8 py-20">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-green-700 font-semibold tracking-widest">
            FLEXIBLE SCHEDULE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            Learn According to Your Routine
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-7">
            Choose a suitable online class schedule according to your routine
            and learning needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="border rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-950">
                Online Classes
              </h3>

              <p className="text-gray-600 mt-3">
                Learn Arabic from the comfort of your home.
              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-950">
                Flexible Timing
              </h3>

              <p className="text-gray-600 mt-3">
                Select a suitable time according to your availability.
              </p>

            </div>

            <div className="border rounded-2xl p-6">

              <h3 className="text-xl font-bold text-green-950">
                Personalized Learning
              </h3>

              <p className="text-gray-600 mt-3">
                Lessons can be adapted to your level and learning goals.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Qualified Teachers */}
      <section className="px-8 py-20 bg-gray-50">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-green-700 font-semibold tracking-widest">
            QUALIFIED TEACHERS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
            Learn From Experienced Teachers
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Our teachers provide structured lessons, practical exercises and
            personal guidance to help students develop their Arabic language
            skills.
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
            Start Learning Arabic Today
          </h2>

          <p className="text-green-100 mt-5 max-w-2xl mx-auto leading-8">
            Book your 3-day free trial and begin your Arabic learning journey
            with Al Abrar Academy.
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

              <p>📱 WhatsApp: +92 XXX XXXXXXX</p>

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