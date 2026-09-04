"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioContent } from "@/data/content";

export function Skills() {
  const { skills } = portfolioContent;

  return (
    <section id="skills" className="py-12 sm:py-16 px-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">Skills & Tech Stack</h2>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
      >
        {(Object.entries(skills) as [string, string[]][]).map(([category, items]) => (
          <motion.div key={category} variants={fadeUp} className="glass-panel rounded-2xl p-5 space-y-3 border border-amber-200/60 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 capitalize border-b border-amber-200/40 pb-1.5">{category}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item: string) => (
                <span key={item} className="text-xs bg-stone-100 text-stone-800 font-medium px-2.5 py-1 rounded-md border border-stone-200">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
