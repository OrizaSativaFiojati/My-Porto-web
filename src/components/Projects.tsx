"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioContent } from "@/data/content";

export function Projects() {
  const { projects } = portfolioContent;

  return (
    <section id="projects" className="py-12 sm:py-16 px-6 max-w-5xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 text-center">Featured Projects</h2>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((proj) => (
          <motion.div key={proj.title} variants={fadeUp} className="glass-panel rounded-2xl p-6 flex flex-col justify-between space-y-4 border border-amber-200/60 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-stone-900">{proj.title}</h3>
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${proj.title} on GitHub`}
                  className="text-stone-700 hover:text-amber-600 transition-colors p-1"
                >
                  <FaGithub className="w-5 h-5 text-stone-900 hover:text-amber-600 transition-colors" />
                </a>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{proj.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {proj.tags.map((tag) => (
                <span key={tag} className="text-xs bg-amber-100 text-amber-900 font-semibold border border-amber-300/50 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
