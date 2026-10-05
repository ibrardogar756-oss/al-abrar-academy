"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

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
            <a
              href="#home"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href="#courses"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Courses
            </a>
            <a
              href="#pricing"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href="#free-trial"
              className="bg-yellow-500 text-green-950 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              Book a Free Trial
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
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                About Us
              </a>
              <a
                href="#courses"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Courses
              </a>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition-colors duration-200"
              >
                Contact
              </a>
              <a
                href="#free-trial"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-500 text-green-950 px-5 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                Book a Free Trial
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
              <p className="text-yellow-400 font-semibold tracking-widest animate-[fadeUp_0.7s_ease-out_both]">
                AL ABRAR ACADEMY
              </p>

              <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight animate-[fadeUp_0.8s_ease-out_0.1s_both]">
                Learn Quran Online with Qualified Teachers
              </h1>

              <p className="text-green-100 text-lg mt-6 max-w-xl mx-auto md:mx-0 animate-[fadeUp_0.8s_ease-out_0.2s_both]">
                Learn the Quran and essential Islamic knowledge from the
                comfort of your home through flexible online classes.
              </p>

              <a
                href="#free-trial"
                className="inline-block mt-8 bg-yellow-500 text-green-950 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition animate-[fadeUp_0.8s_ease-out_0.3s_both]"
              >
                Book a Free Trial
              </a>
            </div>

            {/* Right Side - Online Quran Class */}
            <div className="relative flex justify-center animate-[fadeUp_0.9s_ease-out_0.2s_both]">
              <div className="relative w-full max-w-lg">
                <img
                  src="/home-quran.png"
                  alt="Child attending an online class"
                  className="w-full h-[350px] md:h-[430px] object-cover rounded-3xl shadow-2xl"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-green-950/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-green-900/40" />
      </section>

      {/* Kids & Adults */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-green-950">
                Quran Classes for Kids & Adults
              </h2>

              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Learn the Quran online with qualified teachers through
                flexible, personalized classes designed for both children and
                adults.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={100}>
              <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-green-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-green-950 mb-4">
                  Quran Classes for Kids
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Help your children learn Quran reading, Tajweed,
                  memorization, and basic Islamic education in a friendly and
                  supportive online learning environment.
                </p>

                <a
                  href="#free-trial"
                  className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Book a Free Trial
                </a>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="bg-white rounded-2xl shadow-md p-8 text-center border border-green-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-green-950 mb-4">
                  Quran Classes for Adults
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Learn Quran reading, Tajweed, memorization, Arabic, and
                  Islamic studies with flexible online classes designed around
                  your schedule.
                </p>

                <a
                  href="#free-trial"
                  className="inline-block bg-green-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
                >
                  Book a Free Trial
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
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
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quran Reading with Tajweed */}
            <Reveal delay={80}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src="https://quranspecialistonline.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-15-at-12.48.56-AM.jpeg"
                    alt="Quran Reading with Tajweed"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

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
            </Reveal>

            {/* Quran Memorization */}
            <Reveal delay={140}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src="https://abuzahra.org/cdn/shop/files/59681a3d34db048e03cdccdff9ac5807.jpg?v=1733670193&width=3200"
                    alt="Quran Memorization"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

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
            </Reveal>

            {/* Basic Islamic Education */}
            <Reveal delay={200}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/37350652/pexels-photo-37350652/free-photo-of-young-boy-reading-quran-in-classroom.jpeg?auto=compress&dpr=1&h=750&w=1260"
                    alt="Basic Islamic Education"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-green-950">
                    Basic Islamic Education
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Learn essential Islamic teachings, duas, manners, basic
                    beliefs and everyday Islamic practices.
                  </p>

                  <a
                    href="/courses/basic-islamic-education"
                    className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Tajweed and Tarteel Course */}
            <Reveal delay={80}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src="https://cdn.majalahpama.my/2024/06/quran1.jpg"
                    alt="Tajweed and Tarteel Course"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-green-950">
                    Tajweed and Tarteel Course
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Improve your Quran recitation with Tajweed, correct
                    pronunciation and beautiful Tarteel.
                  </p>

                  <a
                    href="/courses/tajweed-and-tarteel"
                    className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Arabic Courses */}
            <Reveal delay={140}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src="https://alhuda.com.ng/static/media/3.30123f01e83a8781b909.png"
                    alt="Arabic Courses"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-green-950">
                    Arabic Courses
                  </h3>

                  <p className="text-gray-600 mt-3">
                    Learn Arabic reading, vocabulary and basic language skills
                    to better understand the Quran.
                  </p>

                  <a
                    href="/courses/arabic-courses"
                    className="mt-5 inline-block text-green-700 font-semibold hover:text-green-900 transition"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Quran Translation */}
            <Reveal delay={200}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition duration-300">
                <div className="overflow-hidden">
                  <img
                    src="https://areeb-academy.com/wp-content/uploads/2024/05/boy-girl-reading-quran_746565-59726.jpg"
                    alt="Quran Translation"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-sm font-semibold tracking-widest text-green-700 uppercase mb-3">
                WHY CHOOSE US
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Why Choose Al Abrar Academy?
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                We make Quran learning simple, personal, and convenient for
                children and adults through live one-to-one online classes.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                icon: "👨‍🏫",
                title: "Qualified Quran Teachers",
                description:
                  "Learn with experienced and qualified teachers who guide you through your Quran learning journey.",
              },
              {
                number: "02",
                icon: "💻",
                title: "One-to-One Classes",
                description:
                  "Get individual attention in every lesson with a learning approach focused on your needs and progress.",
              },
              {
                number: "03",
                icon: "🕐",
                title: "Flexible Timings",
                description:
                  "Choose class timings that fit your daily routine, making Quran learning easier to manage.",
              },
              {
                number: "04",
                icon: "👨‍👩‍👧‍👦",
                title: "For Kids & Adults",
                description:
                  "Our Quran and Islamic learning programs are designed for both children and adults.",
              },
              {
                number: "05",
                icon: "🌍",
                title: "Learn From Anywhere",
                description:
                  "Join your live Quran class from home or anywhere with a suitable internet connection.",
              },
              {
                number: "06",
                icon: "🎁",
                title: "3-Day Free Trial",
                description:
                  "Experience our online Quran classes with a 3-day free trial before making a commitment.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 70}>
                <div className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-green-50 text-green-700">
                      <span className="text-xl leading-none">
                        {item.icon}
                      </span>

                      <span className="text-[10px] font-bold mt-1">
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-7 right-7 h-0.5 scale-x-0 bg-green-600 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="px-8 py-20 bg-green-950 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <Reveal>
            <div>
              <p className="text-yellow-400 font-semibold tracking-widest">
                ABOUT AL ABRAR
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Learn the Quran with Confidence and Understanding
              </h2>

              <p className="text-green-100 mt-6 leading-8 text-lg">
                Al Abrar Academy provides online Quran and Islamic education
                for children and adults. Our aim is to make Quran learning
                accessible, engaging and meaningful for students around the
                world.
              </p>

              <p className="text-green-100 mt-4 leading-8 text-lg">
                With qualified teachers and personalized online classes,
                students can learn from the comfort of their homes in a
                supportive and convenient learning environment.
              </p>

              {/* Additional About Details */}
              <p className="text-green-100 mt-4 leading-8 text-lg">
                We focus on creating a simple and structured learning
                experience where students can build their Quran reading,
                Tajweed, memorization, Arabic and essential Islamic knowledge
                according to their learning needs.
              </p>

              <p className="text-green-100 mt-4 leading-8 text-lg">
                Our approach combines personal attention with flexible online
                learning, helping children and adults continue their Quran
                education alongside their daily routines.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="border border-white/10 rounded-xl p-4 bg-white/5 transition-all duration-300 hover:bg-white/10">
                  <h3 className="font-bold text-lg">
                    Qualified Teachers
                  </h3>

                  <p className="text-green-100 text-sm mt-1">
                    Learn from experienced Quran teachers.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5 transition-all duration-300 hover:bg-white/10">
                  <h3 className="font-bold text-lg">
                    Flexible Online Classes
                  </h3>

                  <p className="text-green-100 text-sm mt-1">
                    Learn comfortably from your home.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5 transition-all duration-300 hover:bg-white/10">
                  <h3 className="font-bold text-lg">
                    For Kids & Adults
                  </h3>

                  <p className="text-green-100 text-sm mt-1">
                    Learning options for different ages and levels.
                  </p>
                </div>

                <div className="border border-white/10 rounded-xl p-4 bg-white/5 transition-all duration-300 hover:bg-white/10">
                  <h3 className="font-bold text-lg">
                    Personal Attention
                  </h3>

                  <p className="text-green-100 text-sm mt-1">
                    One-to-one lessons focused on student needs.
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
          </Reveal>

          {/* Right Card */}
          <Reveal delay={180}>
            <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-1">
              <img
                src="/about-quran.png"
                alt="Online Quran learning at Al Abrar Academy"
                className="w-full h-[350px] md:h-[430px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
              />

              <h3 className="text-2xl font-bold mt-6">
                Quran & Islamic Education
              </h3>

              <p className="text-green-100 mt-4 leading-7">
                Learn, understand and practice Islamic teachings in a simple
                and structured way.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block text-sm font-semibold tracking-widest text-green-700 uppercase mb-3">
                HOW IT WORKS
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Start Learning in 4 Simple Steps
              </h2>

              <p className="text-gray-600 text-lg leading-8">
                Getting started with Al Abrar Online Quran Academy is simple,
                convenient, and designed to make your learning journey easy.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                icon: "🎁",
                title: "Book a Free Trial",
                description:
                  "Request your free trial and choose a convenient time to get started.",
              },
              {
                number: "02",
                icon: "👨‍🏫",
                title: "Meet Your Tutor",
                description:
                  "Meet your tutor and experience a personalized online Quran lesson.",
              },
              {
                number: "03",
                icon: "💻",
                title: "Start Your Classes",
                description:
                  "Choose your schedule and begin your regular one-to-one Quran classes.",
              },
              {
                number: "04",
                icon: "📖",
                title: "Learn & Progress",
                description:
                  "Continue learning with guidance, practice, and steady progress.",
              },
            ].map((item, index) => (
              <Reveal key={item.number} delay={index * 100}>
                <div className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-green-50 text-green-700">
                      <span className="text-2xl leading-none">
                        {item.icon}
                      </span>

                      <span className="text-[10px] font-bold mt-1">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-7 right-7 h-0.5 scale-x-0 bg-green-600 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Teachers Section */}
      <section className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
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
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl border shadow-sm p-8 md:p-10 transition-all duration-300 hover:shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Teacher Profile */}
                <div className="text-center md:text-left">
                  <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-green-950 text-white flex items-center justify-center text-4xl transition-transform duration-300 hover:scale-105">
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
          </Reveal>
        </div>
      </section>

      {/* Trust / Credibility Section */}
      <section className="px-6 sm:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-green-700 font-semibold tracking-wide uppercase">
                WHY AL ABRAR ACADEMY
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-green-950 mt-3">
                Learn the Quran with Care, Guidance & Flexibility
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                Our goal is to make Quran and Islamic learning accessible
                through qualified teaching, personal attention, and flexible
                online classes.
              </p>
            </div>
          </Reveal>

          {/* Trust Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
            {/* Mission */}
            <Reveal delay={80}>
              <div className="group bg-green-50 border border-green-100 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-2xl">
                  📖
                </div>

                <h3 className="text-lg font-bold text-green-950 mt-5">
                  Our Mission
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  To make Quran and Islamic learning accessible and easy to
                  follow for students of different ages and learning levels.
                </p>
              </div>
            </Reveal>

            {/* Qualified Teaching */}
            <Reveal delay={140}>
              <div className="group bg-green-50 border border-green-100 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-2xl">
                  👨‍🏫
                </div>

                <h3 className="text-lg font-bold text-green-950 mt-5">
                  Qualified Teaching
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Students learn with teachers who are focused on clear,
                  structured, and respectful Quranic education.
                </p>
              </div>
            </Reveal>

            {/* One-to-One */}
            <Reveal delay={200}>
              <div className="group bg-green-50 border border-green-100 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-2xl">
                  👤
                </div>

                <h3 className="text-lg font-bold text-green-950 mt-5">
                  1-to-1 Classes
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Personal attention helps teachers focus on each student's
                  reading, progress, and individual learning needs.
                </p>
              </div>
            </Reveal>

            {/* Flexible Learning */}
            <Reveal delay={260}>
              <div className="group bg-green-50 border border-green-100 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-2xl">
                  🕐
                </div>

                <h3 className="text-lg font-bold text-green-950 mt-5">
                  Flexible Learning
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Flexible online scheduling makes it easier for students and
                  families to fit Quran learning into their daily routine.
                </p>
              </div>
            </Reveal>

            {/* Free Trial */}
            <Reveal delay={320}>
              <div className="group bg-green-50 border border-green-100 rounded-2xl p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-14 h-14 mx-auto rounded-full bg-green-950 text-white flex items-center justify-center text-2xl">
                  🎁
                </div>

                <h3 className="text-lg font-bold text-green-950 mt-5">
                  3-Day Free Trial
                </h3>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  Students can experience our online Quran learning approach
                  through a 3-day free trial before deciding to continue.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Bottom Trust Statement */}
          <Reveal delay={150}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm">
                No pressure. No complicated process. Just start learning and
                experience the difference for yourself.
              </p>

              <a
                href="#free-trial"
                className="inline-block mt-5 bg-green-950 text-white px-7 py-3 rounded-xl font-semibold transition hover:bg-green-800 hover:shadow-md"
              >
                Book a Free Trial
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-green-700 font-semibold tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </p>

              <h2 className="text-4xl font-bold text-green-950 mt-2">
                Frequently Asked Questions
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
                Find answers to some of the common questions about our online
                Quran and Islamic education classes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-4">
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
                  How long is each class?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Class duration depends on the student&apos;s age, course,
                  and learning needs. The schedule and class duration can be
                  discussed when arranging the trial and regular classes.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  Can I choose my preferred class time?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  We aim to provide flexible class timings so students can
                  choose a suitable schedule according to their routine and
                  availability.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  Who can join Al Abrar Academy?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Our online Quran and Islamic education programs are
                  available for both children and adults. We welcome beginners
                  as well as students who already have some Quran learning
                  experience.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  Are male and female tutors available?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Yes. Male and female tutors may be available depending on
                  the course, student requirements, and preferred schedule. We
                  aim to match students with a suitable tutor.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  How do online Quran classes work?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Our classes are conducted online through Microsoft Teams.
                  Students can join their scheduled one-to-one class from the
                  comfort of their home using a computer, tablet, or suitable
                  mobile device.
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
                  How much do the courses cost?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Our pricing depends on the selected class plan and weekly
                  schedule. You can view our available plans in the Pricing
                  section and choose the option that best suits your
                  requirements.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  What happens if a student misses a class?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  If a student is unable to attend a scheduled class, parents
                  or students should inform the academy as early as possible.
                  Make-up arrangements may be discussed depending on the
                  circumstances and tutor availability.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  Which countries do you serve?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Al Abrar Academy provides online Quran and Islamic education
                  for students living in different countries, including
                  families in the UK, USA, and other locations where online
                  classes are suitable.
                </p>
              </details>

              <details className="bg-white border rounded-xl p-6 shadow-sm">
                <summary className="font-bold text-lg text-green-950 cursor-pointer">
                  How can I pay for the courses?
                </summary>

                <p className="text-gray-600 mt-4 leading-7">
                  Payment options will be provided by the academy when
                  enrolling. We will share the available payment method and
                  instructions based on the student&apos;s country and selected
                  course plan.
                </p>
              </details>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 sm:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-green-700 font-semibold tracking-widest">
                PRICING
              </p>

              <h2 className="text-4xl font-bold text-green-950 mt-2">
                Choose Your Learning Plan
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7">
                Flexible monthly plans for students and families around the
                world. All classes are one-to-one, 30-minute sessions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 5 Days / Week */}
            <Reveal delay={70}>
              <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-950">
                  5 Days / Week
                </h3>

                <p className="text-gray-500 mt-2">
                  20 classes / month
                </p>

                <p className="text-4xl font-bold text-green-700 mt-5">
                  £40 / $55
                </p>

                <p className="text-gray-500 mt-2">
                  per month
                </p>

                <a
                  href="#free-trial"
                  className="inline-block mt-6 px-6 py-3 rounded-full bg-green-800 text-white font-semibold hover:bg-green-900 transition"
                >
                  Book a Free Trial
                </a>
              </div>
            </Reveal>

            {/* 3 Days / Week */}
            <Reveal delay={130}>
              <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-950">
                  3 Days / Week
                </h3>

                <p className="text-gray-500 mt-2">
                  12 classes / month
                </p>

                <p className="text-4xl font-bold text-green-700 mt-5">
                  £30 / $40
                </p>

                <p className="text-gray-500 mt-2">
                  per month
                </p>

                <a
                  href="#free-trial"
                  className="inline-block mt-6 px-6 py-3 rounded-full bg-green-800 text-white font-semibold hover:bg-green-900 transition"
                >
                  Book a Free Trial
                </a>
              </div>
            </Reveal>

            {/* 2 Days / Week */}
            <Reveal delay={190}>
              <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-950">
                  2 Days / Week
                </h3>

                <p className="text-gray-500 mt-2">
                  8 classes / month
                </p>

                <p className="text-4xl font-bold text-green-700 mt-5">
                  £25 / $30
                </p>

                <p className="text-gray-500 mt-2">
                  per month
                </p>

                <a
                  href="#free-trial"
                  className="inline-block mt-6 px-6 py-3 rounded-full bg-green-800 text-white font-semibold hover:bg-green-900 transition"
                >
                  Book a Free Trial
                </a>
              </div>
            </Reveal>

            {/* Weekend Classes */}
            <Reveal delay={250}>
              <div className="border rounded-2xl p-7 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-bold text-green-950">
                  Weekend Classes
                </h3>

                <p className="text-gray-500 mt-2">
                  8 classes / month
                </p>

                <p className="text-4xl font-bold text-green-700 mt-5">
                  £25 / $30
                </p>

                <p className="text-gray-500 mt-2">
                  per month
                </p>

                <a
                  href="#free-trial"
                  className="inline-block mt-6 px-6 py-3 rounded-full bg-green-800 text-white font-semibold hover:bg-green-900 transition"
                >
                  Book a Free Trial
                </a>
              </div>
            </Reveal>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Prices shown in GBP (£) and USD ($).
          </p>
        </div>
      </section>

      {/* Free Trial Section */}
      <section
        id="free-trial"
        className="px-6 sm:px-8 py-20 bg-green-950 text-white"
      >
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-yellow-400 font-semibold tracking-wide">
              START YOUR JOURNEY
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Ready to Learn the Quran?
            </h2>

            <p className="text-green-100 mt-5 max-w-2xl mx-auto leading-relaxed">
              Book your 3-day free trial and experience personalized online
              Quran classes from the comfort of your home.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 bg-white text-gray-900 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto text-left shadow-xl transition-all duration-500 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-green-950 text-center">
                Book Your Free Trial
              </h3>

              <p className="text-gray-500 text-center text-sm mt-2 mb-7">
                Fill in your details and we’ll contact you to arrange your
                trial class.
              </p>

              <form
                onSubmit={async (event) => {
                  event.preventDefault();

                  const form = event.currentTarget;
                  const formData = new FormData(form);

                  const countryCode = String(
                    formData.get("whatsappCountryCode") ?? ""
                  ).trim();

                  const whatsappNumber = String(
                    formData.get("whatsappNumber") ?? ""
                  ).trim();

                  const fullWhatsappNumber = `${countryCode}${whatsappNumber.replace(
                    /^0+/,
                    ""
                  )}`;

                  try {
                    const response = await fetch(
                      "/api/free-trial",
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          name: formData.get("name"),
                          email: formData.get("email"),
                          country: formData.get("country"),
                          whatsappNumber: fullWhatsappNumber,
                          course: formData.get("course"),
                        }),
                      }
                    );

                    const data = await response.json();

                    if (!response.ok) {
                      alert(
                        data.message ||
                          "Unable to submit your free trial request. Please try again."
                      );
                      return;
                    }

                    alert(
                      data.message ||
                        "Thank you! Your free trial request has been received. Our team will contact you shortly to confirm your class schedule."
                    );

                    form.reset();
                  } catch (error) {
                    console.error(
                      "Free Trial Submission Error:",
                      error
                    );

                    alert(
                      "Something went wrong. Please check your internet connection and try again."
                    );
                  }
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address
                      <span className="text-gray-400 font-normal ml-1">
                        (Optional)
                      </span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email if available"
                      className="w-full border border-gray-300 rounded-xl px-4 py-3.5 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Country
                    </label>

                    <select
                      name="country"
                      required
                      defaultValue=""
                      className="w-full border border-gray-300 rounded-xl px-4 py-3.5 outline-none bg-white transition focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option>Afghanistan</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Argentina</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Bangladesh</option>
                      <option>Belgium</option>
                      <option>Brazil</option>
                      <option>Canada</option>
                      <option>China</option>
                      <option>Denmark</option>
                      <option>Egypt</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>Germany</option>
                      <option>Greece</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Italy</option>
                      <option>Japan</option>
                      <option>Jordan</option>
                      <option>Kenya</option>
                      <option>Kuwait</option>
                      <option>Lebanon</option>
                      <option>Libya</option>
                      <option>Malaysia</option>
                      <option>Mexico</option>
                      <option>Morocco</option>
                      <option>Netherlands</option>
                      <option>New Zealand</option>
                      <option>Nigeria</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Qatar</option>
                      <option>Russia</option>
                      <option>Saudi Arabia</option>
                      <option>Singapore</option>
                      <option>South Africa</option>
                      <option>South Korea</option>
                      <option>Spain</option>
                      <option>Sudan</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Turkey</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      WhatsApp Number
                    </label>

                    <div className="flex flex-col sm:flex-row border border-gray-300 rounded-xl overflow-hidden transition focus-within:border-green-700 focus-within:ring-2 focus-within:ring-green-700/20">
                      <select
                        name="whatsappCountryCode"
                        required
                        defaultValue="+92"
                        aria-label="WhatsApp country code"
                        className="sm:w-36 bg-gray-50 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-3.5 outline-none text-gray-900 text-sm font-medium"
                      >
                        <option value="+92">🇵🇰 +92 Pakistan</option>
                        <option value="+44">🇬🇧 +44 UK</option>
                        <option value="+1">🇺🇸 +1 USA</option>
                        <option value="+1">🇨🇦 +1 Canada</option>
                        <option value="+61">🇦🇺 +61 Australia</option>
                        <option value="+971">🇦🇪 +971 UAE</option>
                        <option value="+966">🇸🇦 +966 Saudi Arabia</option>
                        <option value="+974">🇶🇦 +974 Qatar</option>
                        <option value="+965">🇰🇼 +965 Kuwait</option>
                        <option value="+973">🇧🇭 +973 Bahrain</option>
                        <option value="+968">🇴🇲 +968 Oman</option>
                        <option value="+91">🇮🇳 +91 India</option>
                        <option value="+880">🇧🇩 +880 Bangladesh</option>
                        <option value="+94">🇱🇰 +94 Sri Lanka</option>
                        <option value="+60">🇲🇾 +60 Malaysia</option>
                        <option value="+65">🇸🇬 +65 Singapore</option>
                        <option value="+86">🇨🇳 +86 China</option>
                        <option value="+81">🇯🇵 +81 Japan</option>
                        <option value="+82">🇰🇷 +82 South Korea</option>
                        <option value="+49">🇩🇪 +49 Germany</option>
                        <option value="+33">🇫🇷 +33 France</option>
                        <option value="+39">🇮🇹 +39 Italy</option>
                        <option value="+34">🇪🇸 +34 Spain</option>
                        <option value="+31">🇳🇱 +31 Netherlands</option>
                        <option value="+41">🇨🇭 +41 Switzerland</option>
                        <option value="+90">🇹🇷 +90 Turkey</option>
                        <option value="+27">🇿🇦 +27 South Africa</option>
                        <option value="+20">🇪🇬 +20 Egypt</option>
                        <option value="+234">🇳🇬 +234 Nigeria</option>
                        <option value="+254">🇰🇪 +254 Kenya</option>
                        <option value="+212">🇲🇦 +212 Morocco</option>
                        <option value="+213">🇩🇿 +213 Algeria</option>
                        <option value="+218">🇱🇾 +218 Libya</option>
                        <option value="+249">🇸🇩 +249 Sudan</option>
                        <option value="+962">🇯🇴 +962 Jordan</option>
                        <option value="+961">🇱🇧 +961 Lebanon</option>
                        <option value="+964">🇮🇶 +964 Iraq</option>
                        <option value="+98">🇮🇷 +98 Iran</option>
                        <option value="+93">🇦🇫 +93 Afghanistan</option>
                        <option value="+7">🇷🇺 +7 Russia</option>
                        <option value="+380">🇺🇦 +380 Ukraine</option>
                        <option value="+48">🇵🇱 +48 Poland</option>
                        <option value="+351">🇵🇹 +351 Portugal</option>
                        <option value="+30">🇬🇷 +30 Greece</option>
                        <option value="+47">🇳🇴 +47 Norway</option>
                        <option value="+46">🇸🇪 +46 Sweden</option>
                        <option value="+45">🇩🇰 +45 Denmark</option>
                        <option value="+358">🇫🇮 +358 Finland</option>
                        <option value="+353">🇮🇪 +353 Ireland</option>
                        <option value="+52">🇲🇽 +52 Mexico</option>
                        <option value="+55">🇧🇷 +55 Brazil</option>
                        <option value="+54">🇦🇷 +54 Argentina</option>
                        <option value="+56">🇨🇱 +56 Chile</option>
                        <option value="+57">🇨🇴 +57 Colombia</option>
                        <option value="+51">🇵🇪 +51 Peru</option>
                        <option value="+64">🇳🇿 +64 New Zealand</option>
                      </select>

                      <input
                        type="tel"
                        name="whatsappNumber"
                        placeholder="300 1234567"
                        required
                        inputMode="tel"
                        className="flex-1 min-w-0 px-4 py-3.5 outline-none text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    <p className="text-xs text-gray-500 mt-2">
                      We’ll use WhatsApp to confirm your free trial.
                    </p>
                  </div>

                  {/* Course */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Course
                    </label>

                    <select
                      name="course"
                      required
                      defaultValue=""
                      className="w-full border border-gray-300 rounded-xl px-4 py-3.5 outline-none bg-white transition focus:border-green-700 focus:ring-2 focus:ring-green-700/20"
                    >
                      <option value="" disabled>
                        Select a course
                      </option>
                      <option>Quran Reading with Tajweed</option>
                      <option>Quran Memorization</option>
                      <option>Basic Islamic Education</option>
                      <option>Tajweed and Tarteel Course</option>
                      <option>Arabic Courses</option>
                      <option>Quran Translation</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-7 bg-green-950 text-white py-3.5 rounded-xl font-bold transition hover:bg-green-800 hover:shadow-md"
                >
                  Request Free Trial
                </button>
              </form>

              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/923000219756"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-3 block text-center bg-green-600 text-white py-3.5 rounded-xl font-bold transition hover:bg-green-700 hover:shadow-md"
              >
                Contact Us on WhatsApp
              </a>

              <p className="text-center text-xs text-gray-400 mt-4">
                Prefer WhatsApp? You can contact us directly and our team will
                help you arrange your free trial.
              </p>
            </div>
          </Reveal>
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
              Learn Quran and essential Islamic knowledge from the comfort of
              your home with qualified teachers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="#home"
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>

              <a
                href="#about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>

              <a
                href="#courses"
                className="hover:text-white transition-colors duration-200"
              >
                Courses
              </a>

              <a
                href="#pricing"
                className="hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>

              <a
                href="#contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>

              <a
                href="#free-trial"
                className="hover:text-white transition-colors duration-200"
              >
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

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/923000219756"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg px-5 py-3 flex items-center gap-2 font-semibold transition"
      >
        <span className="text-xl">💬</span>
        WhatsApp
      </a>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </main>
  );
}