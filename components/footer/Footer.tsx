import Link from "next/link";
import { Globe, X, Play, Mail, MapPin, Phone, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Recipes", href: "/recipes" },
  { name: "Categories", href: "/categories" },
  { name: "Spices", href: "/spices" },
  { name: "Traditions", href: "/traditions" },
];

const exploreLinks = [
  { name: "Festival Recipes", href: "/festivals" },
  { name: "Stories", href: "/stories" },
  { name: "Search", href: "/search" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
  {
    icon: Play,
    href: "#",
    label: "YouTube",
  },
  {
    icon: X,
    href: "#",
    label: "X",
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400">
              Timeless Tadka
            </h2>

            <p className="mt-5 leading-7 text-stone-400">
              Bringing emotional homemade recipes, authentic spices and timeless
              Indian traditions back to life. Every recipe carries history,
              culture and the warmth of home.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-stone-700 p-2 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-orange-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Explore
            </h3>

            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-orange-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-orange-400" size={18} />
                <span>hello@timelesstadka.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-orange-400" size={18} />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-orange-400" size={18} />
                <span>India</span>
              </div>

              <p className="pt-3 text-sm leading-6 text-stone-500">
                Sharing India's culinary heritage with the world through
                authentic recipes, storytelling, documentaries and traditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-stone-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-stone-500 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-orange-400">
              Timeless Tadka
            </span>
            . All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <Heart
              size={16}
              className="fill-red-500 text-red-500"
            />
            for Indian Food & Culture
          </p>
        </div>
      </div>
    </footer>
  );
}