import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Abrar Academy | Online Quran & Islamic Education",

  description:
    "Al Abrar Academy provides online Quran and Islamic education for children and adults, including Quran reading with Tajweed, Quran memorization, Arabic and more.",

  keywords: [
    "Online Quran Academy",
    "Learn Quran Online",
    "Quran Classes Online",
    "Quran with Tajweed",
    "Quran Memorization",
    "Online Quran Classes for Kids",
    "Online Quran Classes for Adults",
    "Islamic Education",
    "Al Abrar Academy",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Al Abrar Academy | Online Quran & Islamic Education",
    description:
      "Learn Quran online with qualified teachers. Quran reading with Tajweed, memorization, Arabic and Islamic education for children and adults.",
    type: "website",
  },

  verification: {
    google: "C3AkSIkC_WPgrFeTPtJGubnw0ONphaCDfLKHH0d0pAk",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}