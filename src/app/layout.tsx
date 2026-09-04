import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { BubbleBackground } from "@/components/BubbleBackground";
import { Navbar } from "@/components/Navbar";
import { SocialDock } from "@/components/SocialDock";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oriza Sativa | Fullstack Developer & Software Engineer",
  description: "Portfolio of Oriza Sativa - Fullstack Developer specializing in Golang, Next.js, React, TypeScript, microservices, and REST APIs. Based in Jakarta, Indonesia.",
  keywords: [
    "Oriza Sativa",
    "Oriza Sativa Fiojati",
    "Fullstack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Golang Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Indonesia",
    "Jakarta Programmer",
  ],
  authors: [{ name: "Oriza Sativa" }],
  openGraph: {
    title: "Oriza Sativa | Fullstack Developer Portfolio",
    description: "Engineering scalable web applications with Golang, React, Next.js, and TypeScript.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable}`}>
      <body className="antialiased min-h-screen relative bg-stone-50 text-stone-900 font-sans">
        <BubbleBackground />
        <Navbar />
        <SocialDock />
        <main>{children}</main>
      </body>
    </html>
  );
}
