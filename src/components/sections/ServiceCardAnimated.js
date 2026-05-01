"use client";
import React from "react";
import { motion } from "framer-motion";

export function ServiceHeader({ children }) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-accent font-bold tracking-[0.2em] mb-4 uppercase text-xs"
      >
        What We Offer
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-bebas text-5xl md:text-6xl text-foreground tracking-wider"
      >
        EXPERT FIRE <span className="text-primary">SOLUTIONS</span>
      </motion.h3>
    </div>
  );
}

export function ServiceCardAnimated({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative bg-white border border-border-custom p-10 rounded-2xl hover:bg-primary transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/20"
    >
      {children}
    </motion.div>
  );
}
