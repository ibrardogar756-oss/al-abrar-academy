"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="bg-green-950 text-white px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold">Al Abrar</h2>
            <p className="text-sm text-green-200">
              Online Quran Academy
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>

            <a href="#about" className="hover:text-yellow-400">
              About Us
            </a>

            <a href="#courses" className="hover:text-yellow-400">
              Courses
            </a>
<a href="#fees" className="hover:text-yellow-400">
  Fees
</a>
            <a href="#contact" className="hover:text-yellow-400">
              Contact
            </a>

            <a
              href="#free-trial"
              className="bg-yellow-500 text-green-950 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400"
            >
              Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden mt-5 border-t border-green-800 pt-5">
            <div className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                About Us
              </a>

              <a
                href="#courses"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Courses
              </a>
<a
  href="#fees"
  onClick={() => setMenuOpen(false)}
  className="hover:text-yellow-400"
>
  Fees
</a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Contact
              </a>

              <a
                href="#free-trial"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-500 text-green-950 px-5 py-3 rounded-lg font-semibold hover:bg-yellow-400"
              >
                Free Trial
              </a>

            </div>
          </div>
        )}
      </nav>
      {/* Home / Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-green-950 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">

          <div className="grid md:grid-cols-2 items-center gap-12">

            {/* Left Side - Text */}
            <div className="text-center md:text-left">

              <p className="text-yellow-400 font-semibold tracking-widest">
                AL ABRAR ACADEMY
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
                Learn Quran Online with Qualified Teachers
              </h1>

              <p className="text-green-100 text-lg mt-6 max-w-xl mx-auto md:mx-0">
                Learn the Quran and essential Islamic knowledge from the
                comfort of your home through flexible online classes.
              </p>

              <a
                href="#free-trial"
                className="inline-block mt-8 bg-yellow-500 text-green-950 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition"
              >
                Start Your Free Trial
              </a>

            </div>

            {/* Right Side - Online Quran Class */}
            <div className="relative flex justify-center">

              <div className="relative w-full max-w-lg">

                <img
                  src="/home-quran.png"
                  alt="Child attending an online class"
                  className="w-full h-[350px] md:h-[430px] object-cover rounded-3xl shadow-2xl"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-green-950/10"></div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-green-900/40"></div>

      </section>
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="text-green-700 font-semibold tracking-widest">
              OUR COURSES
            </p>

            <h2 className="text-4xl font-bold text-green-950 mt-2">
              Explore Our Quran Courses
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose from our carefully designed Quran and Islamic learning
              programs for children and adults.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


            {/* Quran Reading with Tajweed */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <img
                src="https://quranspecialistonline.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-15-at-12.48.56-AM.jpeg"
                alt="Quran Reading with Tajweed"
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-950">
                  Quran Reading with Tajweed
                </h3>

                <p className="text-gray-600 mt-3">
                  Learn to read the Holy Quran correctly with proper
                  pronunciation and Tajweed rules.
                </p>

                <a
                  href="/courses/quran-with-tajweed"
                  className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>


            {/* Quran Memorization */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <img
                src="https://abuzahra.org/cdn/shop/files/59681a3d34db048e03cdccdff9ac5807.jpg?v=1733670193&width=3200"
                alt="Quran Memorization"
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-950">
                  Quran Memorization
                </h3>

                <p className="text-gray-600 mt-3">
                  Memorize the Holy Quran with a structured program,
                  regular revision and guidance from qualified teachers.
                </p>

                <a
                  href="/courses/memorize-quran"
                  className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>


            {/* Basic Islamic Education */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <img
                src="https://images.pexels.com/photos/37350652/pexels-photo-37350652/free-photo-of-young-boy-reading-quran-in-classroom.jpeg?auto=compress&dpr=1&h=750&w=1260"
                alt="Basic Islamic Education"
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-950">
                  Basic Islamic Education
                </h3>

                <p className="text-gray-600 mt-3">
                  Learn essential Islamic teachings, duas, manners,
                  basic beliefs and everyday Islamic practices.
                </p>

                <a
                  href="/courses/basic-islamic-education"
                  className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>


            {/* Tajweed and Tarteel Course */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <img
                src="https://cdn.majalahpama.my/2024/06/quran1.jpg"
                alt="Tajweed and Tarteel Course"
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-950">
                  Tajweed and Tarteel Course
                </h3>

                <p className="text-gray-600 mt-3">
                  Improve your Quran recitation with Tajweed,
                  correct pronunciation and beautiful Tarteel.
                </p>

                <a
                  href="/courses/tajweed-and-tarteel"
                  className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>


            {/* Arabic Courses */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <img
                src="https://alhuda.com.ng/static/media/3.30123f01e83a8781b909.png"
                alt="Arabic Courses"
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-950">
                  Arabic Courses
                </h3>

                <p className="text-gray-600 mt-3">
                  Learn Arabic reading, vocabulary and basic language
                  skills to better understand the Quran.
                </p>

                <a
                  href="/courses/arabic-courses"
                  className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>


            {/* Quran Translation */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">

              <img
                src="https://areeb-academy.com/wp-content/uploads/2024/05/boy-girl-reading-quran_746565-59726.jpg"
                alt="Quran Translation"
                className="w-full h-52 object-cover"
              />

              <div className="p-7">

                <h3 className="text-2xl font-bold text-green-950">
                  Quran Translation
                </h3>

                <p className="text-gray-600 mt-3">
                  Understand the meanings and messages of the Holy Quran
                  through clear and easy translation.
                </p>

                <a
                  href="/courses/quran-translation"
                  className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Learn More →
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-20 bg-white">

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-bold text-green-950 mt-2">
            Why Choose Al Abrar?
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide a convenient and reliable way to learn the Quran
            and essential Islamic knowledge from home.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="text-center p-8 rounded-2xl bg-gray-50 border">
            <div className="text-4xl mb-4">👨‍🏫</div>

            <h3 className="text-xl font-bold text-green-950">
              Qualified Teachers
            </h3>

            <p className="text-gray-600 mt-3">
              Learn from experienced and qualified Quran teachers.
            </p>
          </div>


          <div className="text-center p-8 rounded-2xl bg-gray-50 border">
            <div className="text-4xl mb-4">🕐</div>

            <h3 className="text-xl font-bold text-green-950">
              Flexible Timings
            </h3>

            <p className="text-gray-600 mt-3">
              Choose class timings that fit your daily routine.
            </p>
          </div>


          <div className="text-center p-8 rounded-2xl bg-gray-50 border">
            <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>

            <h3 className="text-xl font-bold text-green-950">
              Children & Adults
            </h3>

            <p className="text-gray-600 mt-3">
              Quran learning programs are available for children and adults.
            </p>
          </div>


          <div className="text-center p-8 rounded-2xl bg-gray-50 border">
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-xl font-bold text-green-950">
              One-to-One Classes
            </h3>

            <p className="text-gray-600 mt-3">
              Personalized online classes with individual attention.
            </p>
          </div>


          <div className="text-center p-8 rounded-2xl bg-gray-50 border">
            <div className="text-4xl mb-4">🌍</div>

            <h3 className="text-xl font-bold text-green-950">
              Learn From Anywhere
            </h3>

            <p className="text-gray-600 mt-3">
              Join your Quran class from anywhere with an internet connection.
            </p>
          </div>


          <div className="text-center p-8 rounded-2xl bg-gray-50 border">
            <div className="text-4xl mb-4">🎁</div>

            <h3 className="text-xl font-bold text-green-950">
              3-Day Free Trial
            </h3>

            <p className="text-gray-600 mt-3">
              Try our online Quran classes before making a commitment.
            </p>
          </div>

        </div>
      </section>
      {/* About Us Section */}
<section id="about" className="px-8 py-20 bg-green-950 text-white">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left Content */}
    <div>
      <p className="text-yellow-400 font-semibold tracking-widest">
        ABOUT AL ABRAR
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
        Learn the Quran with Confidence and Understanding
      </h2>

      <p className="text-green-100 mt-6 leading-8 text-lg">
        Al Abrar Academy provides online Quran and Islamic education for
        children and adults. Our aim is to make Quran learning accessible,
        engaging and meaningful for students around the world.
      </p>

      <p className="text-green-100 mt-4 leading-8 text-lg">
        With qualified teachers and personalized online classes, students can
        learn from the comfort of their homes in a supportive and convenient
        learning environment.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="border border-white/10 rounded-xl p-4 bg-white/5">
          <h3 className="font-bold text-lg">Qualified Teachers</h3>
          <p className="text-green-100 text-sm mt-1">
            Learn from experienced Quran teachers.
          </p>
        </div>

        <div className="border border-white/10 rounded-xl p-4 bg-white/5">
          <h3 className="font-bold text-lg">Flexible Online Classes</h3>
          <p className="text-green-100 text-sm mt-1">
            Learn comfortably from your home.
          </p>
        </div>
      </div>

      <a
        href="#courses"
        className="inline-block mt-8 bg-yellow-500 text-green-950 px-7 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
      >
        Explore Our Courses
      </a>
    </div>

    {/* Right Card */}
    <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/10 shadow-xl">

     <img
  src="/about-quran.png"
  alt="Online Quran learning at Al Abrar Academy"
  className="w-full h-[350px] md:h-[430px] object-cover rounded-3xl shadow-2xl"
/>

      <h3 className="text-2xl font-bold">
        Quran & Islamic Education
      </h3>

      <p className="text-green-100 mt-4 leading-7">
        Learn, understand and practice Islamic teachings
        in a simple and structured way.
      </p>
    </div>

  </div>
</section>
      {/* How It Works Section */}
      <section className="px-8 py-20 bg-gray-50">

        <div className="text-center mb-12">

          <p className="text-green-700 font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="text-4xl font-bold text-green-950 mt-2">
            Start Learning in 3 Simple Steps
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Getting started with Al Abrar Online Quran Academy is simple
            and convenient.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="text-center bg-white p-8 rounded-2xl border shadow-sm">

            <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-xl font-bold">
              1
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Book a Free Trial
            </h3>

            <p className="text-gray-600 mt-3">
              Contact us and book your free trial class at a convenient time.
            </p>

          </div>


          <div className="text-center bg-white p-8 rounded-2xl border shadow-sm">

            <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-xl font-bold">
              2
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Choose Your Schedule
            </h3>

            <p className="text-gray-600 mt-3">
              Select a suitable class schedule according to your routine.
            </p>

          </div>


          <div className="text-center bg-white p-8 rounded-2xl border shadow-sm">

            <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-xl font-bold">
              3
            </div>

            <h3 className="text-xl font-bold text-green-950 mt-6">
              Start Learning
            </h3>

            <p className="text-gray-600 mt-3">
              Join your online Quran classes and begin your learning journey.
            </p>

          </div>

        </div>
      </section>
{/* Our Teachers Section */}
<section className="px-8 py-20 bg-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-green-700 font-semibold tracking-widest">
        OUR TEACHERS
      </p>

      <h2 className="text-4xl font-bold text-green-950 mt-2">
        Learn with Experienced & Qualified Teachers
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
        Our teachers provide structured online learning with
        personalized guidance for children and adults.
      </p>
    </div>

    <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl border shadow-sm p-8 md:p-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Teacher Profile */}
        <div className="text-center md:text-left">

          <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-green-950 text-white flex items-center justify-center text-4xl">
            👨‍🏫
          </div>

          <h3 className="text-2xl font-bold text-green-950 mt-6">
            Experienced Quran Teacher
          </h3>

          <p className="text-green-700 font-semibold mt-2">
            Quran & Islamic Education
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            Learn from an experienced teacher with a broad teaching
            approach covering Quran, Tafseer, Arabic and essential
            Islamic education.
          </p>

        </div>

        {/* Teaching Areas */}
        <div className="bg-white rounded-xl border p-6">

          <h4 className="text-xl font-bold text-green-950 mb-5">
            Areas of Teaching
          </h4>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-xl">📖</span>
              <span className="text-gray-700 font-medium">
                Quran Reading & Tajweed
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">🕌</span>
              <span className="text-gray-700 font-medium">
                Quran Memorization
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">📚</span>
              <span className="text-gray-700 font-medium">
                Quran Tafseer in English
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">🔤</span>
              <span className="text-gray-700 font-medium">
                Arabic Language
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">🌙</span>
              <span className="text-gray-700 font-medium">
                Basic Islamic Education
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* FAQ Section */}
<section className="px-8 py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-green-700 font-semibold tracking-widest">
        FREQUENTLY ASKED QUESTIONS
      </p>

      <h2 className="text-4xl font-bold text-green-950 mt-2">
        Frequently Asked Questions
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
        Find answers to some of the common questions about
        our online Quran and Islamic education classes.
      </p>
    </div>

    <div className="space-y-4">

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          How do online Quran classes work?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          Our classes are conducted online through a convenient video
          learning platform. Students can join their scheduled class
          from the comfort of their home.
        </p>
      </details>

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          Who can join Al Abrar Academy?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          Our online Quran and Islamic education programs are available
          for both children and adults.
        </p>
      </details>

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          Do you offer one-to-one classes?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          Yes. Students can learn through personalized one-to-one online
          classes with individual attention from their teacher.
        </p>
      </details>

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          Can I choose my preferred class time?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          We aim to provide flexible class timings so students can choose
          a suitable schedule according to their routine and availability.
        </p>
      </details>

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          Which courses do you offer?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          We currently offer Quran Reading with Tajweed, Quran
          Memorization, Basic Islamic Education, Tajweed and Tarteel,
          Arabic Courses, and Quran Translation.
        </p>
      </details>

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          Is there a free trial?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          Yes. Students can request a 3-day free trial to experience
          our online Quran learning program before making a commitment.
        </p>
      </details>

      <details className="bg-white border rounded-xl p-6 shadow-sm">
        <summary className="font-bold text-lg text-green-950 cursor-pointer">
          Can students join from other countries?
        </summary>

        <p className="text-gray-600 mt-4 leading-7">
          Yes. Al Abrar Academy provides online Quran and Islamic
          education for students living in different countries.
        </p>
      </details>

    </div>

  </div>
</section>
{/* Fee Structure Section */}
<section id="fees" className="px-8 py-20 bg-white">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
      <p className="text-green-700 font-semibold tracking-widest">
        FEE STRUCTURE
      </p>

      <h2 className="text-4xl font-bold text-green-950 mt-2">
        Choose Your Learning Plan
      </h2>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
        Flexible monthly plans for students and families around the world.
        All classes are one-to-one and 30 minutes long.
      </p>
    </div>

    {/* UK Plans */}
    <div className="mb-14">
      <h3 className="text-2xl font-bold text-green-950 text-center mb-8">
        🇬🇧 UK Plans
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            5 Days / Week
          </h4>
          <p className="text-gray-500 mt-2">
            20 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            £40
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            3 Days / Week
          </h4>
          <p className="text-gray-500 mt-2">
            12 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            £30
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            2 Days / Week
          </h4>
          <p className="text-gray-500 mt-2">
            8 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            £25
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            Weekend Classes
          </h4>
          <p className="text-gray-500 mt-2">
            8 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            £25
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

      </div>
    </div>

    {/* USA Plans */}
    <div>
      <h3 className="text-2xl font-bold text-green-950 text-center mb-8">
        🇺🇸 USA Plans
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            5 Days / Week
          </h4>
          <p className="text-gray-500 mt-2">
            20 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            $55
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            3 Days / Week
          </h4>
          <p className="text-gray-500 mt-2">
            12 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            $40
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            2 Days / Week
          </h4>
          <p className="text-gray-500 mt-2">
            8 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            $30
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

        <div className="border rounded-2xl p-7 text-center shadow-sm">
          <h4 className="text-xl font-bold text-green-950">
            Weekend Classes
          </h4>
          <p className="text-gray-500 mt-2">
            8 classes / month
          </p>
          <p className="text-4xl font-bold text-green-700 mt-5">
            $30
          </p>
          <p className="text-gray-500 mt-2">
            per month
          </p>
        </div>

      </div>
    </div>

  </div>
</section>
      {/* Free Trial Section */}
<section id="free-trial" className="px-8 py-20 bg-green-950 text-white">

  <div className="max-w-5xl mx-auto text-center">

    <p className="text-yellow-400 font-semibold">
      START YOUR JOURNEY
    </p>

    <h2 className="text-4xl font-bold mt-3">
      Ready to Learn the Quran?
    </h2>

    <p className="text-green-100 mt-5 max-w-2xl mx-auto">
      Book your 3-day free trial and experience personalized
      online Quran classes from the comfort of your home.
    </p>

    <div className="mt-10 bg-white text-gray-900 rounded-2xl p-8 max-w-2xl mx-auto text-left">

      <h3 className="text-2xl font-bold text-green-950 text-center mb-6">
        Book Your Free Trial
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
          <label className="block font-semibold mb-2">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Country
          </label>

          <input
            type="text"
            placeholder="e.g. UK, USA"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            WhatsApp Number
          </label>

          <input
            type="tel"
            placeholder="Enter your WhatsApp number"
            className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        <div className="md:col-span-2">

          <label className="block font-semibold mb-2">
            Course
          </label>

          <select className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-700">

            <option>Select a course</option>
            <option>Quran Reading with Tajweed</option>
            <option>Quran Memorization</option>
            <option>Basic Islamic Education</option>
            <option>Tajweed and Tarteel Course</option>
            <option>Arabic Courses</option>
            <option>Quran Translation</option>

          </select>

        </div>

      </div>

      
<button
  type="button"
  onClick={() =>
    alert(
      "Thank you! Your free trial request has been received. Our team will contact you shortly to confirm your class schedule."
    )
  }
  className="w-full mt-6 bg-green-950 text-white py-3 rounded-lg font-bold hover:bg-green-800"
>
  Request Free Trial
</button>

<a
  href="https://wa.me/923000219756"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full mt-3 block text-center bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
>
  Contact Us on WhatsApp
</a>


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
              Learn Quran and essential Islamic knowledge
              from the comfort of your home with qualified teachers.
            </p>

          </div>


          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#home" className="hover:text-white">
                Home
              </a>

              <a href="#about" className="hover:text-white">
                About Us
              </a>

              <a href="#courses" className="hover:text-white">
                Courses
              </a>

              <a href="#contact" className="hover:text-white">
                Contact
              </a>

              <a href="#free-trial" className="hover:text-white">
                Free Trial
              </a>

            </div>

          </div>


          <div id="contact">

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