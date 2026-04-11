"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
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
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const list = ["All"];
    siteData.categories.forEach(cat => list.push(cat.name));
    return list;
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return siteData.products;
    return siteData.products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const categoryStats = useMemo(() => {
    const stats = { All: siteData.products.length };
    siteData.products.forEach(p => {
      stats[p.category] = (stats[p.category] || 0) + 1;
    });
    return stats;
  }, []);

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
          {/* Sidebar / Top Tabs */}
          <div className="lg:w-1/4">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex flex-col gap-2 sticky top-32">
              <h4 className="text-foreground-muted/40 text-[10px] uppercase tracking-widest font-bold mb-4 px-4">
                Browse Categories
              </h4>
              {categories.map((cat) => {
                const Icon = iconMap[cat] || LayoutGrid;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center justify-between p-4 rounded-xl font-bold text-sm tracking-wide transition-all group ${
                      isActive 
                        ? "bg-primary text-white shadow-lg shadow-primary/20" 
                        : "text-foreground-muted hover:bg-white hover:text-foreground border border-black/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className={isActive ? "text-accent" : "text-foreground-muted/60 group-hover:text-primary"} />
                      {cat.toUpperCase()}
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md ${
                      isActive ? "bg-white/20 text-white" : "bg-black/8 text-foreground-muted/60"
                    }`}>
                      {categoryStats[cat] || 0}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Categories Tabs */}
            <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-6 py-3 rounded-xl font-bold text-xs tracking-widest whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                      : "bg-white text-foreground-muted border-black/5"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <motion.div 
              layout
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-border-custom flex flex-col h-full hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
                  >
                    <div className="relative h-56 overflow-hidden bg-secondary-bg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 text-primary p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm backdrop-blur-md">
                        <Search size={18} />
                      </div>
                      <div className="absolute bottom-4 left-4">
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
            
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <LayoutGrid size={48} className="mx-auto text-black/10 mb-4" />
                <p className="text-foreground-muted font-medium italic">No products currently available in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
