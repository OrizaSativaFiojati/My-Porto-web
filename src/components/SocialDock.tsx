"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { portfolioContent } from "@/data/content";

export function SocialDock() {
  const { personal } = portfolioContent;
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    window.location.href = `mailto:${personal.email}`;
  };

  return (
    <>
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-4 bg-stone-900 text-stone-100 p-3 rounded-2xl shadow-2xl border border-stone-800">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2.5 rounded-xl text-stone-200 hover:bg-stone-800 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2.5 rounded-xl text-stone-200 hover:bg-stone-800 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        <button
          onClick={handleEmailClick}
          aria-label="Send Email"
          className="p-2.5 rounded-xl text-stone-200 hover:bg-stone-800 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 relative"
        >
          <SiGmail className="w-5 h-5" />
        </button>
      </aside>

      {copied && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-stone-100 font-bold text-xs px-4 py-3 rounded-xl shadow-2xl border border-amber-500/50 flex items-center gap-2 animate-bounce">
          <span>✨ Email tersalin ke clipboard!</span>
        </div>
      )}
    </>
  );
}
