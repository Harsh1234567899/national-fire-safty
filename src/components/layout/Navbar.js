"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { siteData } from "@/data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md py-2 shadow-xl border-b border-primary/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Container with subtle glow to make black text visible on dark nav */}
          <a href="#home" className="flex items-center group relative">
            <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:bg-white transition-all transform group-hover:scale-105 duration-300">
              <img 
                src="/images/logo.jpg" 
                alt="National Fire Safety Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {siteData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-primary font-bold transition-all uppercase text-xs tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/30 active:scale-95"
            >
              <PhoneCall size={18} />
              GET QUOTE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/98 z-40 transition-all duration-500 backdrop-blur-xl ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <div className="bg-white p-2 rounded-xl mb-4">
             <img 
               src="/images/logo.jpg" 
               alt="National Fire Safety Logo" 
               className="h-16 w-auto object-contain" 
             />
          </div>
          {siteData.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-4xl font-bebas tracking-[0.2em] hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/40"
            onClick={() => setIsOpen(false)}
          >
            GET QUOTE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
