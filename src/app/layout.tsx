import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const editorialSerif = Instrument_Serif({
  variable: "--font-editorial",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tharusha Rathnayaka | Software Engineer",
    template: "%s | Tharusha Rathnayaka",
  },
  description:
    "Portfolio of Tharusha Rathnayaka, a software engineer and full-stack developer building web, mobile, and AI-powered systems.",
  openGraph: {
    title: "Tharusha Rathnayaka | Software Engineer",
    description:
      "Full-stack, mobile, and AI-powered software projects by Tharusha Rathnayaka.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${editorialSerif.variable} h-full antialiased`}
    >
      <body id="top">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Suspense fallback={null}><Navbar /></Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
