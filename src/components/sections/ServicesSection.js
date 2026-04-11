"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import * as Icons from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary-bg relative border-y border-border-custom">
      <div className="container mx-auto px-4 md:px-8">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, i) => {
            const IconComponent = Icons[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-border-custom p-10 rounded-2xl hover:bg-primary transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/20"
              >
                {/* Background numbers */}
                <span className="absolute -right-4 -bottom-4 text-9xl font-bebas text-black/[0.03] group-hover:text-white/10 transition-colors pointer-events-none">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                    <IconComponent className="text-primary group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="font-bebas text-3xl text-foreground mb-4 tracking-wider group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-foreground-muted leading-relaxed group-hover:text-white/80 transition-colors font-medium">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary group-hover:bg-accent transition-colors"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
