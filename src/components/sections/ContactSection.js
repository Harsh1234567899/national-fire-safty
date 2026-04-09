"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS logic
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing. Please update .env.local");
      setTimeout(() => {
        setLoading(false);
        setSuccess(true); // Simulate success for demo
      }, 1000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again later.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col h-full">
            <h2 className="text-primary font-bold tracking-[0.2em] mb-4 uppercase text-sm">
              Get In Touch
            </h2>
            <h3 className="font-bebas text-5xl md:text-6xl text-white mb-8 tracking-wider">
              LET&apos;S TALK <span className="text-secondary">SAFETY</span>
            </h3>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Have a query or need a quote? Reach out to our Rajkot office today. We&apos;re here to help you secure your future.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-white/50">{siteData.footer.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-white/50">{siteData.footer.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-white/50">{siteData.footer.email}</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-auto h-64 rounded-2xl overflow-hidden border border-white/10 group">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.509576633542!2d70.79717267474928!3d22.29655994303204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb31dc1f8061%3A0x51ac68074b6d3ed3!2sNATIONAL%20MANUFACTURERS!5e0!3m2!1sen!2sin!4v1775726464841!5m2!1sen!2sin" className="w-full h-full border-0 transition-all duration-500"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            
          </div>

          <div className="bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-xl relative overflow-hidden">
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={48} />
                </div>
                <h4 className="font-bebas text-4xl text-white mb-4 tracking-wider">MESSAGE SENT!</h4>
                <p className="text-white/60 mb-8 max-w-xs">
                  Thank you for contacting National Fire Safety. We will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="text-primary font-bold border-b-2 border-primary"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-1">Full Name</label>
                    <input
                      name="from_name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-1">Email Address</label>
                    <input
                      name="from_email"
                      type="email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-1">Phone Number</label>
                    <input
                      name="phone"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g. +91 99999 99999"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-1">Service Interested In</label>
                    <select
                      name="service"
                      className="w-full bg-zinc-800 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option>Fire NOC</option>
                      <option>AMC Services</option>
                      <option>Product Inquiry</option>
                      <option>System Installation</option>
                      <option>Safety Audit</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/50 text-xs font-bold uppercase tracking-widest px-1">Your Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-secondary text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    "SENDING..."
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            {/* Decors */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
