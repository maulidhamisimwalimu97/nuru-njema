"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        bg-gradient-to-br from-cyan-500 to-blue-600
        text-white
        shadow-lg shadow-cyan-500/30
        hover:shadow-cyan-500/50
        hover:scale-110
        active:scale-95
        transition-all duration-300 ease-in-out
        border border-white/20
        backdrop-blur-md
        ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
      `}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}