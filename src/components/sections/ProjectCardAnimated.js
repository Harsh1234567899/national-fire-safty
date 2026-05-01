"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectCardAnimated({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group relative h-[460px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
    >
      {children}
    </motion.div>
  );
}
