"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

// ─── Slider data (16:9 and 3:2 high-quality WebP) ───────────────────────────
const slides = [
  { src: "/images/slider1.webp", alt: "Industrial fire safety equipment", link: "/products?category=Fire Systems" },
  { src: "/images/slider2.webp", alt: "Professional safety gear solutions", link: "/products?category=Safety Gear" },
  { src: "/images/slider3.webp", alt: "Road safety products", link: "/products?category=Road Safety" },
  { src: "/images/slider4.webp", alt: "Construction safety nets and harness", link: "/products?category=Construction" },
  { src: "/images/slider5.webp", alt: "Fire extinguisher and hydrant systems", link: "/products?category=Construction" },
  { src: "/images/slider6.webp", alt: "Premium industrial safety hardware", link: "/products?category=Safety Gear" },
];

const SLIDE_INTERVAL = 3000;     // 3 seconds exactly between slides
const FADE_DURATION = 0.8;      // 0.8 seconds smooth transition

// ─── Dots indicator (Clean light-theme dots) ────────────────────────────────
const Dots = ({ current, goTo }) => (
  <div className="flex items-center gap-2.5" role="tablist" aria-label="Slide indicators">
    {slides.map((_, i) => (
      <button
        key={i}
        role="tab"
        aria-selected={i === current}
        aria-label={`Go to slide ${i + 1}`}
        onClick={() => goTo(i)}
        className={`rounded-full transition-all duration-300 cursor-pointer h-2 ${i === current
            ? "w-6 bg-[#D97706]"
            : "w-2 bg-slate-300 hover:bg-slate-400"
          }`}
      />
    ))}
  </div>
);

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Robust setTimeout pattern: resets timer on manual click or slide change
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [current]);

  // Keyboard navigation support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")
        setCurrent((p) => (p - 1 + slides.length) % slides.length);
      if (e.key === "ArrowRight")
        setCurrent((p) => (p + 1) % slides.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = useCallback((i) => setCurrent(i), []);

  return (
    <section id="home" className="relative bg-background overflow-hidden" aria-label="Hero slideshow">

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE VIEW (< md)
          Layout: Spacer → Image Slider → Dots → Text Content below (White Theme)
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col">
        <div className="h-20" aria-hidden="true" /> {/* Navbar spacer */}

        {/* Slider container: locked to aspect-video (16:9) to prevent jumping */}
        <div className="relative w-full aspect-video bg-secondary-bg overflow-hidden border-b border-slate-100/50">
          <AnimatePresence mode="sync">
            <motion.div
              key={`mob-${current}`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
            >
              <Link href={slides[current].link} className="cursor-pointer block w-full h-full relative z-20">
                <Image
                  src={slides[current].src}
                  alt={slides[current].alt}
                  fill
                  className="object-contain"
                  priority={current === 0}
                  sizes="100vw"
                  quality={100}
                  unoptimized
                />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots spacer block */}
        <div className="flex justify-center py-4.5 bg-background">
          <Dots current={current} goTo={goTo} />
        </div>

        {/* Text content block below slider */}
        <div className="bg-background px-5 pb-14 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-secondary-bg text-slate-800 text-[9px] font-bold tracking-[0.2em] uppercase mb-5">
            <ShieldCheck size={12} className="text-[#D97706]" />
            TRUSTED &amp; QUALITY SINCE 38+ YEARS
          </div>

          <p className="text-slate-600 text-sm max-w-sm mb-7 leading-relaxed font-medium">
            {siteData.tagline} High-end industrial fire protection &amp; safety solutions across Gujarat.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <a
              href="#contact"
              className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/10 group active:scale-95"
            >
              REQUEST A FREE QUOTE
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/products"
              className="w-full bg-secondary-bg hover:bg-slate-200/70 text-slate-800 border border-[#1E40AF] px-6 py-3.5 rounded-xl font-bold text-sm transition-all text-center active:scale-95 block"
            >
              VIEW CATALOG
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
            {siteData.stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#D97706] leading-none tracking-wider">
                  {stat.value}
                </span>
                <span className="text-slate-400 text-[9px] uppercase tracking-widest font-bold mt-1 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP VIEW (md+)
          Layout: 2-Column Premium Split Screen (White Theme)
          Left column = Solid White content. Right column = Light Gray background
      ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen items-stretch relative">

        {/* Left Column: Text & Content (45% Width) */}
        <div className="w-[45%] bg-background flex flex-col justify-center pl-10 pr-8 lg:pl-16 lg:pr-12 pt-28 pb-20 border-r border-slate-100/50">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-secondary-bg text-slate-800 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              <ShieldCheck size={14} className="text-[#D97706]" />
              TRUSTED &amp; QUALITY SINCE 38+ YEARS
            </div>

            <p className="text-slate-600 text-base lg:text-lg mb-8 leading-relaxed font-medium">
              {siteData.tagline} We deliver high-end industrial fire protection and safety solutions across india with certified expertise.
            </p>

            <div className="flex flex-col gap-3.5 mb-10 max-w-sm">
              <a
                href="#contact"
                className="w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-7 py-3.5 rounded-xl font-bold text-sm lg:text-base flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-blue-900/10 group active:scale-95"
              >
                REQUEST A FREE QUOTE
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/products"
                className="w-full bg-secondary-bg hover:bg-slate-200/70 text-slate-800 border border-[#1E40AF] px-7 py-3.5 rounded-xl font-bold text-sm lg:text-base transition-all text-center active:scale-95 block"
              >
                VIEW CATALOG
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 max-w-sm">
              {siteData.stats.slice(0, 4).map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="text-2xl lg:text-3xl font-bold text-[#D97706] leading-none tracking-wider">
                    {stat.value}
                  </span>
                  <span className="text-slate-400 text-[9px] uppercase tracking-widest font-bold mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Slideshow Image (55% Width) */}
        <div className="w-[55%] bg-secondary-bg relative flex items-center justify-center p-8 lg:p-12 self-stretch pt-24">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 bg-white">
            <AnimatePresence mode="sync">
              <motion.div
                key={`desk-${current}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
              >
                <Link href={slides[current].link} className="cursor-pointer block w-full h-full relative z-20">
                  <Image
                    src={slides[current].src}
                    alt={slides[current].alt}
                    fill
                    className="object-contain"
                    priority={current === 0}
                    sizes="50vw"
                    quality={100}
                    unoptimized
                  />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Premium Subtle Ambient Shadow around frame */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.03)] pointer-events-none z-10" />
          </div>

          {/* Dots Indicator Overlay for Desktop */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 bg-background/90 backdrop-blur-md px-4 py-2.5 rounded-full border border-slate-200/50 shadow-lg shadow-slate-200/40">
            <Dots current={current} goTo={goTo} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
