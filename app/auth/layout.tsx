"use client";

import { Toaster } from "react-hot-toast";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 🔔 GLOBAL TOAST SYSTEM */}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#16a34a",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#dc2626",
              color: "#fff",
            },
          },
        }}
      />

      {children}
    </>
  );
}