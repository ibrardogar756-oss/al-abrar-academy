"use client";

import { useState } from "react";

export default function QuranTranslation() {
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-5 flex flex-col gap-4 text-center">
            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="/#courses" onClick={() => setMenuOpen(false)}>
              Courses
            </a>
            <a href="/#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a href="/#free-trial" onClick={() => setMenuOpen(false)}>
              Free Trial
            </a>
          </div>
        )}
      </nav>

      {/* Course Header */}
      <section className="bg-green-950 text-white px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold tracking-widest">
            QURAN TRANSLATION
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Understand the Message of the Quran
          </h1>

          <p className="text-green-100 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Learn the meanings of the Quran in a simple and structured way.
            This course helps students understand Quranic verses and connect
            their meanings with everyday life.
          </p>

          <a
            href="/#free-trial"
            className="inline-block mt-8 bg-yellow-500 text-green-950 px-7 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Start Your Free Trial
          </a>

        </div>
      </section>

      {/* Course Introduction */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              COURSE INTRODUCTION
            </p>

            <h2 className="text-4xl font-bold text-green-950 mt-2">
              Learn the Quran with Meaning
            </h2>

            <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
              Understanding the Quran is an important part of developing a
              meaningful connection with Allah's Book. Our Quran Translation
              course introduces students to the meanings of Quranic verses
              through clear and easy-to-understand explanations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h3 className="text-2xl font-bold text-green-950">
                What You Will Learn
              </h3>

              <ul className="mt-5 space-y-3 text-gray-600">
                <li>✓ Meanings of selected Quranic verses</li>
                <li>✓ Important Quranic vocabulary</li>
                <li>✓ Basic understanding of Quranic messages</li>
                <li>✓ Context and lessons from selected verses</li>
                <li>✓ Practical guidance from the Quran</li>
              </ul>
            </div>

            <div className="bg-green-950 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold">
                Why Study Quran Translation?
              </h3>

              <p className="text-green-100 mt-5 leading-8">
                Quran translation helps students understand what they recite
                and reflect upon the guidance of the Quran. Learning with a
                qualified teacher also allows students to ask questions and
                understand difficult concepts in a structured way.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-green-700 font-semibold tracking-widest">
              COURSE BENEFITS
            </p>

            <h2 className="text-4xl font-bold text-green-950 mt-2">
              Build a Deeper Connection with the Quran
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
              <div className="text-4xl mb-5">📖</div>
              <h3 className="text-xl font-bold text-green-950">
                Understand Verses
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Understand the meanings and messages of selected Quranic
                verses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
              <div className="text-4xl mb-5">💡</div>
              <h3 className="text-xl font-bold text-green-950">
                Learn Important Lessons
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Discover practical lessons and guidance from the Quran.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border shadow-sm text-center">
              <div className="text-4xl mb-5">🌙</div>
              <h3 className="text-xl font-bold text-green-950">
                Strengthen Your Connection
              </h3>
              <p className="text-gray-600 mt-3 leading-7">
                Develop a stronger relationship with the Quran through
                understanding and reflection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <p className="text-green-700 font-semibold tracking-widest">
              WHO CAN JOIN?
            </p>

            <h2 className="text-4xl font-bold text-green-950 mt-2">
              Suitable for Different Learners
            </h2>

            <p className="text-gray-600 mt-5 leading-8">
              This course can be suitable for adults, teenagers and students
              who want to understand the meanings of the Quran and benefit
              from its guidance.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <ul className="space-y-4 text-gray-700">
              <li>✓ Adults who want to understand the Quran</li>
              <li>✓ Teenagers interested in Quranic meanings</li>
              <li>✓ Students who already read the Quran</li>
              <li>✓ Beginners who want structured guidance</li>
              <li>✓ Learners from around the world</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Flexible Schedule */}
      <section className="px-8 py-20 bg-green-950 text-white">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold tracking-widest">
            FLEXIBLE ONLINE CLASSES
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Learn According to Your Schedule
          </h2>

          <p className="text-green-100 max-w-2xl mx-auto mt-5 leading-8">
            Our online classes are designed to make Quran learning convenient
            for students living in different countries and time zones.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-xl">
                Flexible Timings
              </h3>
              <p className="text-green-100 mt-2">
                Choose a suitable class time according to your routine.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-xl">
                One-to-One Learning
              </h3>
              <p className="text-green-100 mt-2">
                Learn directly with a qualified teacher in an online class.
              </p>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-bold text-xl">
                Worldwide Access
              </h3>
              <p className="text-green-100 mt-2">
                Join your Quran classes from anywhere in the world.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Qualified Teachers */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-green-700 font-semibold tracking-widest">
            QUALIFIED TEACHERS
          </p>

          <h2 className="text-4xl font-bold text-green-950 mt-3">
            Learn with Guidance and Support
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Our teachers provide structured lessons and explain Quranic
            meanings in a clear and understandable way, helping students
            learn step by step.
          </p>

        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-4xl mx-auto bg-green-950 text-white rounded-2xl p-10 text-center">

          <p className="text-yellow-400 font-semibold">
            START YOUR JOURNEY
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Ready to Understand the Quran?
          </h2>

          <p className="text-green-100 mt-5 max-w-2xl mx-auto leading-8">
            Book your 3-day free trial and experience personalized online
            Quran learning from the comfort of your home.
          </p>

          <a
            href="/#free-trial"
            className="inline-block mt-8 bg-yellow-500 text-green-950 px-7 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            Book Your Free Trial
          </a>

        </div>
      </section>

      {/* Back to Courses */}
      <section className="px-8 pb-20 text-center bg-white">
        <a
          href="/#courses"
          className="inline-block border-2 border-green-950 text-green-950 px-7 py-3 rounded-lg font-bold hover:bg-green-950 hover:text-white transition"
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