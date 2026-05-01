import React from "react";
import { siteData } from "@/data/siteData";
import * as Icons from "lucide-react";
import { ServiceHeader, ServiceCardAnimated } from "./ServiceCardAnimated";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary-bg relative border-y border-border-custom">
      <div className="container mx-auto px-4 md:px-8">
        <ServiceHeader />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, i) => {
            const IconComponent = Icons[service.icon];
            return (
              <ServiceCardAnimated key={service.id} delay={i * 0.1}>
                {/* Background numbers */}
                <span className="absolute -right-4 -bottom-4 text-9xl font-bebas text-black/[0.03] group-hover:text-white/10 transition-colors pointer-events-none">
                  0{i + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
                    {IconComponent && <IconComponent className="text-primary group-hover:text-white transition-colors" size={32} />}
                  </div>
                  <h4 className="font-bebas text-3xl text-foreground mb-4 tracking-wider group-hover:text-white transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-foreground-muted leading-relaxed group-hover:text-white/80 transition-colors font-medium">
                    {service.description}
                  </p>
                </div>
                
                {/* Decorative bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary group-hover:bg-accent transition-colors"></div>
              </ServiceCardAnimated>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
