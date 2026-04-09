"use client";
import React from "react";
import { siteData } from "@/data/siteData";

const SponsorsSection = () => {
  return (
    <section className="py-20 bg-zinc-950 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">
          OFFICIAL PARTNERS & TRUSTED BRANDS
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Marquee Group 1 */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center py-4 pr-16">
          {siteData.sponsors.map((sponsor, i) => (
            <div
              key={`s1-${i}`}
              className="flex items-center gap-6 bg-zinc-900/50 px-10 py-5 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 grayscale hover:grayscale-0 group shadow-lg"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors text-lg">
                {sponsor.name.charAt(0)}
              </div>
              <span className="text-white/40 group-hover:text-white font-bebas text-3xl tracking-widest uppercase transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

        {/* Marquee Group 2 (Infinite Loop) */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center py-4 pr-16">
          {siteData.sponsors.map((sponsor, i) => (
            <div
              key={`s2-${i}`}
              className="flex items-center gap-6 bg-zinc-900/50 px-10 py-5 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-300 grayscale hover:grayscale-0 group shadow-lg"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors text-lg">
                {sponsor.name.charAt(0)}
              </div>
              <span className="text-white/40 group-hover:text-white font-bebas text-3xl tracking-widest uppercase transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
