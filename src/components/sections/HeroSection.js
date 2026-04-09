"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowRight, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles only on the client to keep it pure and stable
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100 + "%",
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black pt-20 md:pt-24 pb-12"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 z-0 opacity-50 mix-blend-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1712640379137-6d2532f887a7?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Modern Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-primary/25 to-transparent z-0"></div>

      {/* Animated Fire Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bottom-0 w-2 h-2 rounded-full bg-secondary opacity-30 blur-sm"
            initial={{
              x: p.x,
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-100%",
              opacity: [0, 0.5, 0],
              scale: [1, 2, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid lg:grid-cols-2 items-center gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              <ShieldCheck size={14} />
              TRUSTED SINCE 15+ YEARS
            </div>
            <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl text-white tracking-wider leading-[0.85] mb-5">
              <span className="text-secondary italic">NATIONAL</span> <br />
              <span className="text-white">FIRE SAFETY</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-inter mx-auto lg:mx-0">
              {siteData.tagline} We provide world-class fire protection systems and maintenance services for industrial and residential sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-2xl shadow-primary/40 group active:scale-95"
              >
                REQUEST A FREE QUOTE
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#products"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-base transition-all text-center"
              >
                VIEW PRODUCTS
              </a>
            </div>

            {/* Stats row - more compact */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mt-10 pt-8 border-t border-white/10 max-w-2xl mx-auto lg:mx-0">
              {siteData.stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start">
                  <span className="text-2xl md:text-3xl font-bebas text-secondary leading-none">{stat.value}</span>
                  <span className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest font-bold mt-1 text-center lg:text-left">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Image - Scaled down for height efficiency */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(220,38,38,0.15)] group aspect-square max-h-[440px] mx-auto">
              <img
                src="https://images.unsplash.com/photo-1722227089176-a981d2544b5f?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial Fire Protection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="font-bebas text-3xl mb-1 tracking-wider">PREMIUM PROTECTION</h3>
                  <p className="text-white/60 text-xs font-inter tracking-wide uppercase">Industrial Grade Systems & Support</p>
                </div>
              </div>
            </div>
            {/* Ambient Background Glows */}
            <div className="absolute -top-5 -right-5 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-5 -left-5 w-64 h-64 bg-secondary/15 rounded-full blur-[80px] -z-10 animate-pulse delay-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
