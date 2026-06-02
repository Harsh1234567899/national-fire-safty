import React from "react";
import { siteData } from "@/data/siteData";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import FooterScrollButton from "./FooterScrollButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <div className="bg-white p-1 rounded-lg">
                <img src="/images/logo.webp" alt="Logo" className="h-9 w-auto object-contain" />
              </div>
              <span className="font-bebas text-2xl tracking-wider text-white">
                NATIONAL <span className="text-secondary">FIRE SAFETY</span>
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
              Rajkot&apos;s premier fire safety equipment and service provider. Protecting lives and property with certified expertise.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i} href="#"
                  aria-label="Social Link"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/20 transition-all border border-white/10"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {siteData.navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-2 group font-medium">
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">Services</h4>
            <ul className="space-y-3 text-white/60 text-sm font-medium">
              {siteData.services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-accent transition-colors">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl text-white mb-6 tracking-wider">Contact Us</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex gap-3 items-start">
                <MapPin className="text-accent shrink-0 mt-0.5" size={16} />
                <span className="text-white/60 text-sm">{siteData.footer.address}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-accent shrink-0" size={16} />
                <span className="text-white/60 text-sm">{siteData.footer.phone}</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-accent shrink-0" size={16} />
                <span className="text-white/60 text-sm">{siteData.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            © {currentYear} National Fire Safety. All rights reserved.
          </p>
          <FooterScrollButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
