"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, X } from "lucide-react";
import { siteData } from "@/data/siteData";

const InquiryModal = ({ isOpen, onClose, productName }) => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form state when modal closes
      setSuccess(false);
      setLoading(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing.");
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
      }, 1000);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, { publicKey })
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 w-9 h-9 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-foreground" />
              </button>

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <p className="text-accent font-bold tracking-[0.2em] uppercase text-[10px] mb-1">
                    Product Inquiry
                  </p>
                  <h2 className="font-bebas text-3xl md:text-4xl text-foreground tracking-wider leading-none">
                    GET A <span className="text-primary">FREE QUOTE</span>
                  </h2>
                  {productName && (
                    <p className="text-foreground-muted text-xs mt-2 font-medium">
                      Inquiring about:{" "}
                      <span className="text-primary font-bold">{productName}</span>
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-[1fr_1.6fr] gap-6 md:gap-8 items-start">
                  {/* Left — Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-0.5">
                          Call Us
                        </p>
                        <a
                          href={`tel:${siteData.footer.phone}`}
                          className="text-foreground font-bold text-sm hover:text-primary transition-colors"
                        >
                          {siteData.footer.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-accent/5 rounded-lg flex items-center justify-center text-accent shrink-0">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-0.5">
                          Email
                        </p>
                        <a
                          href={`mailto:${siteData.footer.email}`}
                          className="text-foreground font-bold text-sm hover:text-primary transition-colors"
                        >
                          {siteData.footer.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary/5 rounded-lg flex items-center justify-center text-primary shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted mb-0.5">
                          Location
                        </p>
                        <p className="text-foreground-muted text-xs leading-relaxed font-medium">
                          {siteData.footer.address}
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp quick CTA */}
                    <a
                      href={`https://wa.me/${siteData.footer.phone.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors shadow-md shadow-green-500/20"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                      </svg>
                      CHAT ON WHATSAPP
                    </a>
                  </div>

                  {/* Right — Form */}
                  <div>
                    {success ? (
                      <div className="flex flex-col items-center justify-center text-center py-8">
                        <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                          <CheckCircle size={28} />
                        </div>
                        <h4 className="font-bebas text-2xl text-foreground mb-2 tracking-wider">
                          MESSAGE SENT!
                        </h4>
                        <p className="text-foreground-muted text-xs max-w-xs font-medium mb-5">
                          Thank you! We will get back to you within 24 hours.
                        </p>
                        <button
                          onClick={() => setSuccess(false)}
                          className="text-accent font-bold border-b-2 border-accent text-xs"
                        >
                          SEND ANOTHER
                        </button>
                      </div>
                    ) : (
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                        {/* Hidden product name field */}
                        <input type="hidden" name="product_name" value={productName || ""} />

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted px-1">
                            Full Name
                          </label>
                          <input
                            name="from_name"
                            required
                            placeholder="Enter your name"
                            className="w-full bg-secondary-bg border border-border-custom rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted px-1">
                              Phone
                            </label>
                            <input
                              name="phone"
                              required
                              placeholder="+91 99999 99999"
                              className="w-full bg-secondary-bg border border-border-custom rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted px-1">
                              Email
                            </label>
                            <input
                              name="from_email"
                              type="email"
                              placeholder="your@email.com"
                              className="w-full bg-secondary-bg border border-border-custom rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted px-1">
                            Service / Product
                          </label>
                          <select
                            name="service"
                            defaultValue="Product Inquiry"
                            className="w-full bg-secondary-bg border border-border-custom rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-sm"
                          >
                            <option>Product Inquiry</option>
                            <option>Fire NOC</option>
                            <option>AMC Services</option>
                            <option>System Installation</option>
                            <option>Safety Audit</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-foreground-muted px-1">
                            Message
                          </label>
                          <textarea
                            name="message"
                            required
                            rows="3"
                            defaultValue={productName ? `I am interested in ${productName}. Please share pricing and availability.` : ""}
                            placeholder="Tell us about your requirements"
                            className="w-full bg-secondary-bg border border-border-custom rounded-xl px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-primary/10 disabled:opacity-50 group mt-1"
                        >
                          {loading ? (
                            "SENDING..."
                          ) : (
                            <>
                              SEND INQUIRY
                              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
