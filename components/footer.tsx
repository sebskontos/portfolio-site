"use client";

import React from "react";
import { useTheme } from "@/context/theme-context";

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">
        <span className="font-semibold">© 2025 Sebastian Skontos. All rights reserved.</span>
      </p>

      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend.
      </p>
    </footer>
  );
}
