"use client";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { siteData } from "@/data/siteData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  }, [isOpen]);

  // Mobile menu rendered as a Portal
  const mobileMenu = mounted && createPortal(
    <div
      style={{ zIndex: 99999 }}
      className={`fixed inset-0 bg-hero-bg flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${
        isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsOpen(false)}
        style={{ zIndex: 100000 }}
        className="absolute top-8 right-8 text-white/50 hover:text-accent transition-all"
      >
        <X size={36} />
      </button>

      <div className="flex flex-col items-center justify-center gap-10 p-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white p-2 rounded-xl shadow-2xl">
            <img
              src="/images/logo.jpg"
              alt="National Fire Safety Logo"
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col font-bebas tracking-wider leading-[1.1] text-left">
            <span className="text-2xl md:text-3xl font-bold italic text-accent">NATIONAL</span>
            <span className="text-xl md:text-2xl font-bold text-white">FIRE SAFETY</span>
          </div>
        </div>
        {siteData.navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-white text-4xl font-bebas tracking-[0.2em] hover:text-accent transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="/#contact"
          className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/40 active:scale-95 transition-transform"
          onClick={() => setIsOpen(false)}
        >
          GET QUOTE
        </a>
      </div>
    </div>,
    document.body
  );

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-black/5" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Always in white container for visibility */}
            <a href="/#home" className="flex items-center gap-3 group relative">
              <div className="bg-white p-1.5 rounded-lg shadow-sm group-hover:shadow-md transition-all transform group-hover:scale-105 duration-300">
                <img
                  src="/images/logo.jpg"
                  alt="National Fire Safety Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <h1 className="flex flex-col font-bebas tracking-wider leading-[1.1]">
                <span className={`text-xl md:text-2xl font-bold italic text-accent`}>NATIONAL</span>
                <span className={`text-base md:text-lg font-bold ${scrolled ? "text-foreground" : "text-white"}`}>FIRE SAFETY</span>
                <span className="sr-only">Fire and Safety Rajkot, Fire Equipments, Road Safety Products, National Fire Safety Rajkot</span>
              </h1>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {siteData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-bold transition-all uppercase text-xs tracking-[0.2em] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full ${
                    scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-primary/20 active:scale-95"
              >
                <PhoneCall size={18} />
                GET QUOTE
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${
                scrolled ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
};

export default Navbar;
