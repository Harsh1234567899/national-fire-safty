import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

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
  title: "National Fire Safety | Fire Safety Solutions in Rajkot",
  description: "Premier fire safety service provider in Rajkot, Gujarat. Specializing in NOC, AMC, fire equipment, and safety audits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bebasNeue.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
