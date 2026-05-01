import React from "react";
import { Star, Quote } from "lucide-react";
import { TestimonialHeader, TestimonialCardAnimated } from "./TestimonialCardAnimated";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Bhai",
      role: "Industrial Plant Manager",
      text: "National Fire Safety transformed our plant's safety protocols. Their hydrant system installation is top-notch. Highly recommended in Metoda GIDC.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Apartment Society Secretary",
      text: "The annual maintenance service is incredibly reliable. They remind us of refills and drills without we having to ask. Best in Rajkot!",
      rating: 5,
    },
    {
      name: "Amit Shah",
      role: "Retail Chain Owner",
      text: "Quick NOC clearance and professional staff. They handled everything from audit to certification effortlessly.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-secondary-bg relative overflow-hidden border-y border-border-custom">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <TestimonialHeader />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <TestimonialCardAnimated key={i} delay={i * 0.1}>
              <Quote className="text-primary/10 absolute top-8 right-8 group-hover:text-primary/20 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground-muted italic mb-8 font-inter leading-relaxed font-medium">
                &quot;{item.text}&quot;
              </p>
              
              <div>
                <h4 className="text-foreground font-bold tracking-wider">{item.name}</h4>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mt-1">{item.role}</p>
              </div>
            </TestimonialCardAnimated>
          ))}
        </div>
      </div>
      
      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-3xl -z-0"></div>
    </section>
  );
};

export default TestimonialsSection;
