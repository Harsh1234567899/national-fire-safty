"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Phone, Mail, MapPic, MapPin, CheckCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary-bg relative border-t border-border-custom">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column - Fixed Height Gap using items-start */}
          <div className="flex flex-col">
            <h2 className="text-accent font-bold tracking-[0.2em] mb-3 uppercase text-xs">
              Get In Touch
            </h2>
            <h3 className="font-bebas text-4xl md:text-5xl text-foreground mb-6 tracking-wider leading-none">
              LET&apos;S TALK <span className="text-primary">SAFETY</span>
            </h3>
            <p className="text-foreground-muted text-base mb-8 max-w-md leading-relaxed font-medium">
              Have a query or need a quote? Reach out to our Rajkot office today. We&apos;re here to help you secure your future.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-base mb-0.5">Our Location</h4>
                  <p className="text-foreground-muted text-sm leading-tight font-medium">{siteData.footer.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/5 rounded-lg flex items-center justify-center text-accent shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-base mb-0.5">Call Us</h4>
                  <p className="text-foreground-muted text-sm font-medium">{siteData.footer.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-base mb-0.5">Email Us</h4>
                  <p className="text-foreground-muted text-sm font-medium">{siteData.footer.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-52 rounded-2xl overflow-hidden border border-border-custom group shadow-xl mt-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.509576633542!2d70.79717267474928!3d22.29655994303204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb31dc1f8061%3A0x51ac68074b6d3ed3!2sNATIONAL%20MANUFACTURERS!5e0!3m2!1sen!2sin!4v1775726464841!5m2!1sen!2sin" className="w-full h-full border-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

          </div>

          {/* Right Column - Form Card */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-border-custom relative overflow-hidden shadow-2xl mt-8 lg:mt-0 self-start">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h4 className="font-bebas text-3xl text-foreground mb-3 tracking-wider">MESSAGE SENT!</h4>
                <p className="text-foreground-muted mb-6 max-w-xs text-sm font-medium">
                  Thank you for contacting National Fire Safety. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-accent font-bold border-b-2 border-accent text-sm"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-foreground-muted text-[10px] font-bold uppercase tracking-widest px-1">Full Name</label>
                    <input
                      name="from_name"
                      required
                      className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-foreground-muted text-[10px] font-bold uppercase tracking-widest px-1">Email Address</label>
                    <input
                      name="from_email"
                      type="email"
                      required
                      className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-foreground-muted text-[10px] font-bold uppercase tracking-widest px-1">Phone Number</label>
                    <input
                      name="phone"
                      required
                      className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                      placeholder="e.g. +91 99999 99999"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-foreground-muted text-[10px] font-bold uppercase tracking-widest px-1">Service Interested In</label>
                    <select
                      name="service"
                      className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-sm"
                    >
                      <option>Fire NOC</option>
                      <option>AMC Services</option>
                      <option>Product Inquiry</option>
                      <option>System Installation</option>
                      <option>Safety Audit</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-foreground-muted/40 text-[10px] font-bold uppercase tracking-widest px-1">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    className="w-full bg-background border border-border-custom rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold text-base flex items-center justify-center gap-3 transition-all shadow-md shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed group mt-2"
                >
                  {loading ? (
                    "SENDING..."
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            {/* Decors */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
