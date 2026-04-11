"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background border-y border-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1595306394931-b35768661692?q=80&w=600&auto=format&fit=crop"
                  className="rounded-2xl w-full h-64 object-cover border border-black/5 shadow-md"
                  alt="Fire Safety 1"
                />
                <div className="bg-primary p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-xl shadow-primary/20">
                  <span className="font-bebas text-5xl text-white">15+</span>
                  <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest mt-1">
                    Years of Excellence
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1649836215936-41c76a724233?q=80&w=600&auto=format&fit=crop"
                  className="rounded-2xl w-full h-80 object-cover border border-black/5 shadow-md"
                  alt="Fire Safety 2"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold tracking-[0.2em] mb-4 uppercase text-xs">
              Our Legacy in {siteData.location.split(",")[0]}
            </h2>
            <h3 className="font-bebas text-5xl md:text-6xl text-foreground mb-6 tracking-wider leading-tight">
              PRECISION PROTECTION <span className="text-primary">ENGINEERED</span>
            </h3>
            <p className="text-foreground-muted text-lg mb-8 leading-relaxed font-inter">
              Founded in Rajkot, {siteData.companyName} has been the cornerstone of industrial safety for over a decade. We specialize in providing end-to-end fire security systems that protect high-value assets and human life with unyielding reliability.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Certified Fire Engineers",
                "ISO 9001:2015 Standards",
                "24/7 Response Units",
                "Govt. Licensed Agency",
                "Comprehensive AMCs",
                "Premium Safety Hardware",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  <span className="text-foreground-muted font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-colors group"
            >
              LEARN MORE ABOUT OUR MISSION
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
