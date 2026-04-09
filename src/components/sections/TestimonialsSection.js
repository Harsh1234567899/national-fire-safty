"use client";
import React from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Bhai",
      role: "Industrial Plant Manager",
      text: "National Fire Safety transformed our plant's safety protocols. Their hydrant system installation is top-notch. Highly recommended in Metoda GIDC.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Apartment Society Secretary",
      text: "The annual maintenance service is incredibly reliable. They remind us of refills and drills without we having to ask. Best in Rajkot!",
      rating: 5,
    },
    {
      name: "Amit Shah",
      role: "Retail Chain Owner",
      text: "Quick NOC clearance and professional staff. They handled everything from audit to certification effortlessly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase text-sm">
            Client Reviews
          </h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-white tracking-wider">
            WHAT PEOPLE <span className="text-secondary">SAY</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/5 p-8 rounded-3xl relative group hover:border-primary/30 transition-all"
            >
              <Quote className="text-primary/20 absolute top-8 right-8 group-hover:text-primary/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-white/70 italic mb-8 font-inter leading-relaxed">
                &quot;{item.text}&quot;
              </p>
              
              <div>
                <h4 className="text-white font-bold tracking-wider">{item.name}</h4>
                <p className="text-primary text-xs font-bold uppercase tracking-widest">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-0"></div>
    </section>
  );
};

export default TestimonialsSection;
