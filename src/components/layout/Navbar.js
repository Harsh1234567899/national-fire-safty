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

  // Robust cross-browser scroll lock
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    if (isOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [isOpen]);

  // Mobile menu rendered as a Portal — completely outside the <nav> stacking context
  const mobileMenu = mounted && createPortal(
    <div
      style={{ zIndex: 99999 }}
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${
        isOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setIsOpen(false)}
        style={{ zIndex: 100000 }}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
      >
        <X size={36} />
      </button>

      {/* Menu Content */}
      <div className="flex flex-col items-center justify-center gap-10 p-8">
        <div className="bg-white p-2 rounded-xl mb-4 shadow-2xl">
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
            className="text-white text-4xl font-bebas tracking-[0.2em] hover:text-primary transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/40 active:scale-95 transition-transform"
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
          scrolled ? "bg-black/95 backdrop-blur-md py-2 shadow-xl border-b border-primary/20" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
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

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Portal-rendered mobile menu — renders directly in document.body */}
      {mobileMenu}
    </>
  );
};

export default Navbar;
