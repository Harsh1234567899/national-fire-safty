"use client";
import React from "react";
import { ArrowUp } from "lucide-react";

export default function FooterScrollButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors group"
    >
      <span className="text-[10px] font-bold uppercase tracking-widest">Back to Top</span>
      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors border border-white/10">
        <ArrowUp size={14} />
      </div>
    </button>
  );
}
