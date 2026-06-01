"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      // wait for fade animation before removing
      setTimeout(() => setLoading(false), 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-white
        transition-opacity duration-500
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="text-center">
        <div className="h-14 w-14 rounded-full border-4 border-gray-300 border-t-cyan-600 animate-spin"></div>

        <p className="mt-4 text-gray-500 text-sm tracking-wide animate-pulse">
         
        </p>
      </div>
    </div>
  );
}