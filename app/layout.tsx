"use client";

import type React from "react";
import { usePathname } from "next/navigation";

import { Toaster } from "react-hot-toast";

import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import PageLoader from "@/components/page-loader";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname.startsWith("/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground">

        {/* 🔔 GLOBAL TOAST SYSTEM */}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "14px",
            },
            success: {
              style: {
                background: "#16a34a",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#16a34a",
              },
            },
            error: {
              style: {
                background: "#dc2626",
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#dc2626",
              },
            },
          }}
        />

        {/* Page Loader */}
        {!isAuthPage && <PageLoader />}

        {/* Navigation */}
        {!isAuthPage && <Navigation />}

        {/* Page Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        {!isAuthPage && <Footer />}

        {/* Back To Top Button */}
        {!isAuthPage && <BackToTop />}

      </body>
    </html>
  );
}