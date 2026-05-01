import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL('https://nationalfiresafety.com'),
  title: "National Fire Safety | Best Fire Safety Solutions in Rajkot",
  description: "Premier fire safety service provider in Rajkot, Gujarat. Specializing in Fire NOC, Industrial AMC, fire extinguishers, and safety audits.",
  keywords: ["fire safety rajkot", "fire NOC rajkot", "fire extinguisher gujarat", "industrial safety equipment", "AMC services fire", "fire hydrant system"],
  authors: [{ name: "National Fire Safety" }],
  creator: "National Fire Safety",
  publisher: "National Fire Safety",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "National Fire Safety | Fire Safety Solutions in Rajkot",
    description: "Premier fire safety service provider in Rajkot, Gujarat. Specializing in Fire NOC, AMC, and safety hardware.",
    url: 'https://nationalfiresafety.com',
    siteName: 'National Fire Safety',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "National Fire Safety | Fire Safety Solutions in Rajkot",
    description: "Premier fire safety service provider in Rajkot, Gujarat.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
