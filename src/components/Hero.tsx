"use client";

import React from "react";
import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioContent } from "@/data/content";

export function Hero() {
  const { hero, personal } = portfolioContent;

  return (
    <section id="hero" className="min-h-screen pt-28 pb-16 flex items-center justify-center px-6">
      <svg className="absolute w-0 h-0 pointer-events-none">
        <defs>
          <clipPath id="organic-mirror-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5,0.02 C 0.85,-0.05 1,0.2 0.98,0.52 C 0.96,0.85 0.75,0.98 0.45,0.99 C 0.15,1 -0.02,0.8 0.01,0.48 C 0.04,0.16 0.15,0.09 0.5,0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.p variants={fadeUp} className="text-amber-600 font-bold tracking-wide text-sm uppercase">
            {hero.headline} 👋
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-6xl font-extrabold text-stone-900 leading-tight">
            {personal.name}
          </motion.h1>
          <motion.h2 variants={fadeUp} className="text-xl sm:text-2xl font-semibold text-amber-700">
            {personal.role}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
            {hero.subheadline}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 inline-flex items-center gap-2"
            >
              {hero.ctaPrimary}
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="bg-stone-900 hover:bg-stone-800 text-stone-100 font-semibold px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="relative">
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 group">
            <div
              className="absolute inset-0 bg-amber-400 opacity-80 transform translate-x-3 translate-y-3 -z-10 shadow-xl transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"
              style={{ clipPath: "url(#organic-mirror-clip)" }}
            />
            
            <div
              className="w-full h-full relative overflow-hidden bg-stone-100 shadow-2xl border-2 border-white"
              style={{ clipPath: "url(#organic-mirror-clip)" }}
            >
              <Image
                src="/images/profile.jpg"
                alt={personal.name}
                fill
                sizes="(max-width: 640px) 256px, 288px"
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="absolute -bottom-3 -left-3 bg-stone-900 text-amber-300 font-bold text-xs px-4 py-2 rounded-2xl shadow-2xl border border-amber-400/50 z-20 flex items-center gap-1.5 transform -rotate-2">
              <span>Fullstack Developer ✨</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
