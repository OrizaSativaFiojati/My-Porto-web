"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { portfolioContent } from "@/data/content";

export function About() {
  const { about } = portfolioContent;

  return (
    <section id="about" className="py-12 sm:py-16 px-6 max-w-4xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="glass-panel rounded-3xl p-8 sm:p-10 space-y-6 shadow-sm border border-amber-200/60"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">{about.title}</h2>
        <p className="text-stone-700 leading-relaxed text-base sm:text-lg">{about.description}</p>
        <div className="pt-4 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Education</span>
            <h3 className="text-lg font-bold text-stone-900">{about.education.institution}</h3>
            <p className="text-sm text-stone-600">{about.education.degree} ({about.education.period})</p>
          </div>
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Academic Record</span>
            <p className="text-lg font-bold text-stone-900">GPA: {about.education.gpa}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
