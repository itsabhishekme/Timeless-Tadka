// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Layout from "@/components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timelesstadka.com"),

  title: {
    default: "Timeless Tadka",
    template: "%s | Timeless Tadka",
  },

  description:
    "Bringing Emotional Homemade Recipes, Authentic Spices & Timeless Indian Traditions Back to Life.",

  keywords: [
    "Timeless Tadka",
    "Indian Recipes",
    "Traditional Recipes",
    "Authentic Indian Food",
    "Indian Cuisine",
    "Homemade Recipes",
    "Regional Indian Recipes",
    "Traditional Indian Cooking",
    "Indian Spices",
    "Festival Recipes",
    "Village Food",
    "Ayurvedic Food",
    "Grandmother Recipes",
    "Indian Food Culture",
    "Heritage Recipes",
  ],

  authors: [
    {
      name: "Timeless Tadka Team",
    },
  ],

  creator: "Timeless Tadka",

  publisher: "Timeless Tadka",

  applicationName: "Timeless Tadka",

  category: "Food & Drink",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://timelesstadka.com",
    siteName: "Timeless Tadka",
    title: "Timeless Tadka",
    description:
      "Bringing Emotional Homemade Recipes, Authentic Spices & Timeless Indian Traditions Back to Life.",

    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Timeless Tadka",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Timeless Tadka",
    description:
      "Bringing Emotional Homemade Recipes, Authentic Spices & Timeless Indian Traditions Back to Life.",
    creator: "@TimelessTadka",
    images: ["/images/og-cover.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/favicon.ico",
      },
    ],
  },

  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${inter.className} bg-white text-neutral-900 antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}