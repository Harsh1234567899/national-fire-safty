"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Search, ShoppingBag } from "lucide-react";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...new Set(siteData.products.map((p) => p.category))];
  
  const filteredProducts = activeCategory === "All" 
    ? siteData.products 
    : siteData.products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase text-sm">
              Our Inventory
            </h2>
            <h3 className="font-bebas text-5xl md:text-6xl text-white tracking-wider">
              QUALITY FIRE <span className="text-secondary">EQUIPMENT</span>
            </h3>
          </div>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white/5 text-white/50 hover:bg-white/10"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Search size={20} />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="font-bebas text-2xl text-white mb-2 tracking-wider">
                    {product.name}
                  </h4>
                  <p className="text-white/50 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a
                      href="#contact"
                      className="w-full bg-white/5 hover:bg-primary text-white py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/20"
                    >
                      <ShoppingBag size={18} />
                      ENQUIRE NOW
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm italic">
            * All products are certified and comply with National Fire Safety standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
