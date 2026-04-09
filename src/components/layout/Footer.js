"use client";
import React from "react";
import { siteData } from "@/data/siteData";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

// Fallback icons if these are missing in some versions
const SocialIcon = ({ icon: Icon, ...props }) => {
  return Icon ? <Icon {...props} /> : null;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Logo and About */}
          <div className="lg:col-span-1 border-r border-white/5 pr-8">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/images/logo.jpg" 
                alt="National Fire Safety Logo" 
                className="h-10 w-auto object-contain rounded" 
              />
              <span className="font-bebas text-3xl tracking-wider text-white">
                NATIONAL <span className="text-primary">FIRE SAFETY</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Based in Rajkot, we are Gujarat&apos;s premier fire safety equipment and service provider. Dedicated to protecting lives and property through innovation and maintenance.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:text-primary hover:bg-white/10 transition-all border border-white/10"
                >
                  <SocialIcon icon={social.Icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-2xl text-white mb-8 tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {siteData.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bebas text-2xl text-white mb-8 tracking-wider">Services</h4>
            <ul className="space-y-4 text-white/40">
              {siteData.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bebas text-2xl text-white mb-8 tracking-wider">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-primary shrink-0" size={20} />
                <span className="text-white/40 text-sm font-inter">
                  {siteData.footer.address}
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-primary shrink-0" size={20} />
                <span className="text-white/40 text-sm font-inter">
                  {siteData.footer.phone}
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-primary shrink-0" size={20} />
                <span className="text-white/40 text-sm font-inter">
                  {siteData.footer.email}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © {currentYear} NATIONAL FIRE SAFTY. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-primary transition-colors group"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Back to Top</span>
            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
              <ArrowUp size={18} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
