"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { allProducts } from "@/data/allProducts";
import { 
  Search, 
  ShoppingBag, 
  Flame, 
  HardHat, 
  Flag, 
  Construction, 
  Bell,
  LayoutGrid,
  ChevronRight
} from "lucide-react";

// Mapping category names to icons
const iconMap = {
  "Fire Systems": Flame,
  "Safety Gear": HardHat,
  "Road Safety": Flag,
  "Construction": Construction,
  "Detection": Bell,
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-accent font-bold tracking-[0.2em] mb-4 uppercase text-xs">
            Inventory & Catalog
          </h2>
          <h3 className="font-bebas text-5xl md:text-6xl text-foreground tracking-wider">
            PREMIUM INDUSTRIAL <span className="text-primary">SAFETY HARDWARE</span>
          </h3>
          <p className="text-foreground-muted mt-4 max-w-xl text-sm leading-relaxed font-medium">
            Browse our comprehensive range of certified safety equipment sourced from the industry's most trusted manufacturers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Product Grid */}
          <div className="w-full">
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {allProducts.slice(0, 6).map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-border-custom flex flex-col h-full hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
                  >
                        <div className="relative h-56 overflow-hidden bg-white p-4 flex items-center justify-center border-b border-border-custom">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                          />
                          <div className="absolute top-4 right-4 bg-white/90 text-primary p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm backdrop-blur-md z-10">
                            <Search size={18} />
                          </div>
                          <div className="absolute bottom-4 left-4 z-10">
                        <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[9px] font-bold text-accent uppercase tracking-[0.2em] rounded-md border border-border-custom shadow-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="font-bebas text-xl text-foreground mb-2 tracking-wider">
                        {product.name}
                      </h4>
                      <p className="text-foreground-muted text-xs mb-6 line-clamp-2 leading-relaxed font-medium">
                        {product.description}
                      </p>
                      
                      <div className="mt-auto">
                        <a
                          href="#contact"
                          className="w-full bg-secondary-bg hover:bg-primary text-foreground hover:text-white py-3 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2 border border-border-custom group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 font-inter"
                        >
                          <ShoppingBag size={16} className="text-primary group-hover:text-accent" />
                          INQUIRY NOW
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            <div className="mt-12 flex justify-center">
              <a
                href="/products"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-xl shadow-primary/20 flex items-center gap-3 group"
              >
                VIEW ALL PRODUCTS
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
