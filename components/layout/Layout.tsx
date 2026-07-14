// components/layout/Layout.tsx

import { ReactNode } from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-900">
      {/* Header */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}