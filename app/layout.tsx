import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nuru Njema Foundation",
  description:
    "Empowering youth through digital skills, innovation, and education in Tanzania.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground">

        {/* NAVIGATION */}
        <Navigation />

        {/* PAGE CONTENT */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}