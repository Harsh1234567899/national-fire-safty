"use client";
import React, { useState, useMemo, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProducts } from "@/data/allProducts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Search, 
  ShoppingBag, 
  LayoutGrid,
  Filter
} from "lucide-react";
import InquiryModal from "@/components/ui/InquiryModal";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const list = ["All"];
    const uniqueCats = new Set(allProducts.map(p => p.category));
    uniqueCats.forEach(cat => {
      if(cat) list.push(cat);
    });
    return list;
  }, []);

  // Extract subcategories for active category
  const subcategories = useMemo(() => {
    if (activeCategory === "All") return ["All"];
    const list = ["All"];
    const uniqueSubcats = new Set(
      allProducts.filter(p => p.category === activeCategory).map(p => p.subcategory)
    );
    uniqueSubcats.forEach(sub => {
      if(sub) list.push(sub);
    });
    return list;
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      // Category filter
      if (activeCategory !== "All" && p.category !== activeCategory) return false;
      // Subcategory filter
      if (activeCategory !== "All" && activeSubcategory !== "All" && p.subcategory !== activeSubcategory) return false;
      // Search filter
      if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, activeSubcategory, searchQuery]);

  const handleCategoryChange = (cat) => {
    startTransition(() => {
      setActiveCategory(cat);
      setActiveSubcategory("All");
    });
  };

  const handleSubcategoryChange = (sub) => {
    startTransition(() => setActiveSubcategory(sub));
  };

  const handleSearch = (val) => {
    startTransition(() => setSearchQuery(val));
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-hero-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1592838754746-4af9f09f526f?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-hero-bg/80 to-hero-bg z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="font-bebas text-5xl md:text-7xl tracking-wider mb-4">
            OUR <span className="text-accent">PRODUCTS</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base font-inter">
            Browse our complete catalog of industrial fire protection, safety gear, road safety products, and construction safety equipment.
          </p>
        </div>
      </section>

      <section className="py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Mobile Filter Toggle & Search bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <button 
              className="md:hidden w-full flex items-center justify-center gap-2 bg-white border border-border-custom px-4 py-3 rounded-xl font-bold text-sm"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <Filter size={18} />
              {showMobileFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
            </button>
            
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-white border border-border-custom rounded-full px-6 py-3 pl-12 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground-muted" size={18} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className={`md:w-1/4 ${showMobileFilters ? "block" : "hidden md:block"}`}>
              <div className="sticky top-28 bg-white p-6 rounded-2xl border border-border-custom shadow-sm">
                <h3 className="font-bold text-xs tracking-widest uppercase text-foreground-muted mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all font-medium ${
                        activeCategory === cat 
                          ? "bg-primary text-white font-bold shadow-md shadow-primary/20" 
                          : "text-foreground-muted hover:bg-secondary-bg hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Subcategories (only show if active category is not All and has subcategories) */}
                <AnimatePresence>
                  {activeCategory !== "All" && subcategories.length > 1 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-border-custom overflow-hidden"
                    >
                      <h3 className="font-bold text-xs tracking-widest uppercase text-foreground-muted mb-4">Subcategories</h3>
                      <div className="flex flex-col gap-2">
                        {subcategories.map(sub => (
                          <button
                            key={sub}
                            onClick={() => handleSubcategoryChange(sub)}
                            className={`text-left px-4 py-2 rounded-lg text-xs transition-all ${
                              activeSubcategory === sub 
                                ? "bg-accent/10 text-accent font-bold" 
                                : "text-foreground-muted hover:bg-secondary-bg hover:text-foreground"
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Product Grid */}
            <div className="md:w-3/4">
              <div className="mb-6 flex justify-between items-center text-sm text-foreground-muted">
                <p>
                  Showing <span className="font-bold text-foreground">{filteredProducts.length}</span> products
                  {isPending && <span className="ml-2 text-xs text-foreground-muted/50 italic">Updating...</span>}
                </p>
                {(activeCategory !== "All" || searchQuery !== "") && (
                  <button 
                    onClick={() => startTransition(() => { setActiveCategory("All"); setSearchQuery(""); })}
                    className="text-accent hover:underline text-xs font-bold"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {filteredProducts.length > 0 ? (
                  <motion.div
                    key={`${activeCategory}-${activeSubcategory}-${searchQuery}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: isPending ? 0.5 : 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="group bg-white rounded-2xl overflow-hidden border border-border-custom flex flex-col h-full hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                      >
                        <div className="relative h-48 overflow-hidden bg-white p-4 flex items-center justify-center border-b border-border-custom">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                          />
                          <div className="absolute bottom-3 left-3 flex flex-col gap-1 z-10">
                            <span className="px-2 py-1 bg-white/90 backdrop-blur-md text-[8px] font-bold text-primary uppercase tracking-[0.2em] rounded-sm shadow-sm inline-block w-fit">
                              {product.category}
                            </span>
                            {product.subcategory && product.subcategory !== "All" && (
                              <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[8px] font-bold text-white uppercase tracking-[0.2em] rounded-sm shadow-sm inline-block w-fit">
                                {product.subcategory}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="p-5 flex flex-col flex-grow">
                          <h4 className="font-bebas text-lg text-foreground mb-2 tracking-wider leading-tight">
                            {product.name}
                          </h4>
                          <p className="text-foreground-muted text-[11px] mb-6 line-clamp-3 leading-relaxed font-medium">
                            {product.description}
                          </p>
                          
                          <div className="mt-auto">
                            <button
                              onClick={() => setSelectedProduct(product.name)}
                              className="w-full bg-secondary-bg hover:bg-primary text-foreground hover:text-white py-2.5 rounded-lg font-bold text-[10px] tracking-widest uppercase transition-all flex items-center justify-center gap-2 border border-border-custom hover:border-primary"
                            >
                              <ShoppingBag size={14} className="text-primary group-hover:text-accent" />
                              INQUIRE
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-2xl border border-border-custom p-16 text-center flex flex-col items-center justify-center"
                  >
                    <LayoutGrid size={48} className="text-black/10 mb-4" />
                    <h3 className="text-xl font-bebas tracking-wider text-foreground mb-2">No Products Found</h3>
                    <p className="text-foreground-muted text-sm max-w-sm">
                      We couldn't find any products matching your current filters.
                    </p>
                    <button 
                      onClick={() => startTransition(() => { setActiveCategory("All"); setSearchQuery(""); })}
                      className="mt-6 px-6 py-2 bg-primary text-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary-dark transition-colors"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Inquiry Popup Modal */}
      <InquiryModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        productName={selectedProduct}
      />
    </main>
  );
}
