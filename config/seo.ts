// config/seo.ts

import type { Metadata } from "next";

export const siteConfig = {
  name: "Timeless Tadka",

  shortName: "Timeless Tadka",

  title: "Timeless Tadka | Authentic Indian Recipes & Culinary Heritage",

  description:
    "Bringing Emotional Homemade Recipes, Authentic Spices & Timeless Indian Traditions Back to Life.",

  url: "https://timelesstadka.com",

  ogImage: "/images/og-cover.jpg",

  logo: "/logos/logo.png",

  creator: "Timeless Tadka",

  author: "Timeless Tadka",

  locale: "en_IN",

  keywords: [
    "Indian Recipes",
    "Authentic Indian Food",
    "Traditional Recipes",
    "Indian Cuisine",
    "Indian Spices",
    "Homemade Recipes",
    "Regional Indian Food",
    "Festival Recipes",
    "Village Recipes",
    "Grandmother Recipes",
    "Ayurvedic Food",
    "Indian Desserts",
    "Pickles",
    "Masala",
    "Heritage Cooking",
    "Food Stories",
    "Timeless Tadka",
  ],

  social: {
    youtube: "",
    instagram: "",
    facebook: "",
    x: "",
    pinterest: "",
  },
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Timeless Tadka",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.author,
    },
  ],

  creator: siteConfig.creator,

  publisher: siteConfig.name,

  keywords: [...siteConfig.keywords],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@TimelessTadka",
    images: [siteConfig.ogImage],
  },

  category: "Food",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
};

export function createMetadata(
  title?: string,
  description?: string,
  image?: string
): Metadata {
  return {
    title: title ?? siteConfig.title,

    description: description ?? siteConfig.description,

    openGraph: {
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",

      images: [
        {
          url: image ?? siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.title,
      description: description ?? siteConfig.description,
      images: [image ?? siteConfig.ogImage],
    },
  };
}