"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Recipes", href: "/recipes" },
  { name: "Categories", href: "/categories" },
  { name: "Spices", href: "/spices" },
  { name: "Traditions", href: "/traditions" },
  { name: "Festivals", href: "/festivals" },
  { name: "Stories", href: "/stories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight text-amber-700">
            Timeless Tadka
          </span>

          <span className="text-xs text-gray-500">
            Taste. Tradition. Together.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-200 font-medium ${
                  active
                    ? "text-amber-700"
                    : "text-gray-700 hover:text-amber-700"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="rounded-full border border-gray-200 p-2 transition hover:bg-amber-50"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <Link
            href="/recipes"
            className="rounded-full bg-amber-600 px-5 py-2 text-white transition hover:bg-amber-700"
          >
            Explore Recipes
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-2 px-6 py-5">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 transition ${
                    active
                      ? "bg-amber-100 font-semibold text-amber-700"
                      : "text-gray-700 hover:bg-amber-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/recipes"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 block rounded-lg bg-amber-600 px-4 py-3 text-center font-medium text-white hover:bg-amber-700"
            >
              Explore Recipes
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}