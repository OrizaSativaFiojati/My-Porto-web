"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { portfolioContent } from "@/data/content";

export function Contact() {
  const { contact, personal } = portfolioContent;
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    window.location.href = `mailto:${personal.email}`;
  };

  return (
    <section id="contact" className="py-12 px-6 max-w-3xl mx-auto text-center space-y-6 block sm:hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="glass-panel rounded-3xl p-8 space-y-6 border border-amber-200/60 shadow-md relative"
      >
        <h2 className="text-2xl font-extrabold text-stone-900">{contact.title}</h2>
        <p className="text-stone-600 text-sm max-w-md mx-auto">{contact.subtitle}</p>
        
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={handleEmailClick}
            className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-6 py-3.5 rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2 text-sm"
          >
            <SiGmail className="w-4 h-4 text-stone-950" />
            Kirim Email / Copy Gmail
          </button>
          <a
            href={personal.resumeUrl}
            download
            className="bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold px-6 py-3.5 rounded-full transition-all shadow-md inline-flex items-center justify-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 border-t border-amber-200/40 text-stone-700">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors inline-flex items-center gap-2 text-sm font-medium">
            <FaGithub className="w-5 h-5 text-stone-900" /> GitHub
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors inline-flex items-center gap-2 text-sm font-medium">
            <FaLinkedin className="w-5 h-5 text-stone-900" /> LinkedIn
          </a>
        </div>

        {copied && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-stone-900 text-amber-300 font-bold text-xs px-4 py-2 rounded-xl shadow-xl border border-amber-500/50 whitespace-nowrap">
            ✨ Email tersalin ke clipboard!
          </div>
        )}
      </motion.div>
    </section>
  );
}
