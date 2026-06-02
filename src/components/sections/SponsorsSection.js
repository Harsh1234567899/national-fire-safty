import React from "react";
import { siteData } from "@/data/siteData";

const SponsorsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-secondary-bg border-y border-border-custom overflow-hidden">
      <div className="container mx-auto px-4 mb-6 md:mb-10 text-center">
        <span className="text-foreground-muted/40 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]">
          OFFICIAL PARTNERS & TRUSTED BRANDS
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Marquee Group 1 */}
        <div className="flex animate-marquee whitespace-nowrap gap-6 md:gap-16 items-center py-2 md:py-4 pr-6 md:pr-16">
          {siteData.sponsors.map((sponsor, i) => (
            <div
              key={`s1-${i}`}
              className="flex items-center gap-2 md:gap-5 bg-white px-5 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl border border-border-custom hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-6 h-6 md:w-10 md:h-10 bg-primary/5 rounded-md md:rounded-lg flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors text-[10px] md:text-lg">
                {sponsor.name.charAt(0)}
              </div>
              <span className="text-foreground-muted group-hover:text-primary font-bebas text-xs sm:text-sm md:text-2xl lg:text-3xl tracking-widest uppercase transition-colors">
                {sponsor.name}
              </span>
            </div>
          ))}
        </div>

        {/* Marquee Group 2 (Infinite Loop) */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-6 md:gap-16 items-center py-2 md:py-4 pr-6 md:pr-16">
          {siteData.sponsors.map((sponsor, i) => (
            <div
              key={`s2-${i}`}
              className="flex items-center gap-2 md:gap-5 bg-white px-5 py-3 md:px-10 md:py-5 rounded-xl md:rounded-2xl border border-border-custom hover:border-primary/40 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="w-6 h-6 md:w-10 md:h-10 bg-primary/5 rounded-md md:rounded-lg flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors text-[10px] md:text-lg">
                {sponsor.name.charAt(0)}
              </div>
              <span className="text-foreground-muted group-hover:text-primary font-bebas text-xs sm:text-sm md:text-2xl lg:text-3xl tracking-widest uppercase transition-colors">
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
