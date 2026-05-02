import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'National Fire Safety',
    image: 'https://www.nationalmanufactures.com/images/logo.jpg',
    '@id': 'https://www.nationalmanufactures.com',
    url: 'https://www.nationalmanufactures.com',
    telephone: '+91 75738 02153',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '607 The Imperia, Limda Chowk, Subhash Road, Near Federal Bank',
      addressLocality: 'Rajkot',
      addressRegion: 'Gujarat',
      postalCode: '360001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.2965599,
      longitude: 70.7971726
    },
    description: 'Premier fire safety service provider in Rajkot, Gujarat. Specializing in Fire NOC, Industrial AMC, fire extinguishers, and safety audits.',
    areaServed: 'Rajkot, Gujarat and surrounding GIDC areas'
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroSection />
      <SponsorsSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
