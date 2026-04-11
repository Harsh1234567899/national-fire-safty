"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { MapPin, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background border-y border-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold tracking-[0.2em] mb-4 uppercase text-xs">
              Our Portfolio
            </h2>
            <h3 className="font-bebas text-5xl md:text-6xl text-foreground tracking-wider">
              SUCCESSFUL <span className="text-primary">PROTECTION</span>
            </h3>
          </div>
          <p className="text-foreground-muted lg:max-w-sm font-inter leading-relaxed text-sm">
            Explore our latest fire safety installations across Rajkot and beyond, ensuring security for diverse infrastructures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[460px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-bg/90 via-hero-bg/20 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <MapPin size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">{project.location}</span>
                </div>
                <h4 className="font-bebas text-3xl text-white mb-3 tracking-wider leading-tight">
                  {project.title}
                </h4>
                <p className="text-white/60 text-sm mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
