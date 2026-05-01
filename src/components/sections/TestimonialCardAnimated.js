"use client";
import React from "react";
import { motion } from "framer-motion";

export function TestimonialHeader({ children }) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-primary font-bold tracking-[0.2em] mb-4 uppercase text-xs"
      >
        Client Reviews
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-bebas text-5xl md:text-6xl text-foreground tracking-wider"
      >
        WHAT PEOPLE <span className="text-accent">SAY</span>
      </motion.h3>
    </div>
  );
}

export function TestimonialCardAnimated({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white border border-border-custom p-8 rounded-3xl relative group hover:border-primary transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300"
    >
      {children}
    </motion.div>
  );
}
