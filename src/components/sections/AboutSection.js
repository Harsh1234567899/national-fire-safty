"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
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
                  className="rounded-2xl w-full h-64 object-cover border border-white/10"
                  alt="Fire Safety 1"
                />
                <div className="bg-primary p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                  <span className="font-bebas text-5xl text-white">15+</span>
                  <span className="text-white/80 text-sm font-bold uppercase tracking-widest">
                    Years of Excellence
                  </span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1649836215936-41c76a724233?q=80&w=600&auto=format&fit=crop"
                  className="rounded-2xl w-full h-80 object-cover border border-white/10"
                  alt="Fire Safety 2"
                />
              </div>
            </div>
            {/* Background shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-3xl rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase text-sm">
              Our Legacy in {siteData.location.split(",")[0]}
            </h2>
            <h3 className="font-bebas text-5xl md:text-6xl text-white mb-6 tracking-wider">
              YOUR SAFETY IS OUR <span className="text-secondary">IDENTITY</span>
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed font-inter">
              Founded in Rajkot, {siteData.companyName} has grown to become a leading name in fire protection and safety consultancy across Gujarat. We believe that fire safety is not just about equipment, but about creating a culture of preparedness.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                "Certified Fire Engineers",
                "ISO Quality Standards",
                "24/7 Support Hotline",
                "Government Approved",
                "Timely Maintenance",
                "Cost-Effective Solutions",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-primary" size={20} />
                  <span className="text-white/80 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors group"
            >
              LEARN MORE ABOUT US
              <CheckCircle className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
