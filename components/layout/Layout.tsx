import type { ReactNode } from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-amber-50 via-stone-50 to-orange-50 text-stone-900 selection:bg-amber-500 selection:text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Top Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-orange-200/20 blur-3xl" />

        {/* Left Glow */}
        <div className="absolute left-0 top-1/3 h-[350px] w-[350px] rounded-full bg-yellow-200/20 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-red-100/20 blur-3xl" />

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:30px_30px] opacity-20" />
      </div>

      {/* ================= Header ================= */}

      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        <Navbar />
      </header>

      {/* ================= Main ================= */}

      <main
        id="main-content"
        className="relative flex-1"
      >
        {children}
      </main>

      {/* ================= Footer ================= */}

      <Footer />

      {/* Scroll Progress Indicator */}

      <div className="pointer-events-none fixed left-0 top-0 z-[999] h-1 w-full bg-transparent">
        <div className="h-full w-0 bg-gradient-to-r from-orange-500 via-amber-500 to-red-500" />
      </div>

      {/* Decorative Bottom Gradient */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-orange-100/40 to-transparent" />

      {/* Accessibility Skip Link */}

      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[9999] -translate-y-20 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 focus:translate-y-0"
      >
        Skip to Content
      </a>

      {/* Decorative Border */}

      <div className="pointer-events-none absolute inset-0 border border-orange-100/40" />
    </div>
  );
}