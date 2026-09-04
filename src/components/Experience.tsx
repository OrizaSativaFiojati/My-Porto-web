"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioContent } from "@/data/content";

export function Experience() {
  const { experience } = portfolioContent;

  return (
    <section id="experience" className="py-12 sm:py-16 px-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">Work Experience</h2>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="space-y-4"
      >
        {experience.map((exp) => (
          <motion.div key={`${exp.company}-${exp.role}`} variants={fadeUp} className="glass-panel rounded-2xl p-6 space-y-2 border border-amber-200/60 shadow-sm hover:border-amber-400 transition-colors">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{exp.period}</span>
            <h3 className="text-xl font-bold text-stone-900">{exp.role} · <span className="text-amber-800">{exp.company}</span></h3>
            <p className="text-stone-700 text-sm leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
