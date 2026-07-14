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
    // Brand
    "Timeless Tadka",
    "Timeless Tadka Recipes",
    "Timeless Tadka India",
    "Timeless Tadka Food",

    // General
    "Indian Recipes",
    "Authentic Indian Recipes",
    "Traditional Indian Recipes",
    "Indian Food",
    "Indian Cuisine",
    "Indian Cooking",
    "Homemade Indian Food",
    "Homemade Recipes",
    "Authentic Homemade Recipes",
    "Traditional Cooking",
    "Home Style Cooking",
    "Family Recipes",
    "Indian Kitchen",
    "Indian Culinary Heritage",
    "Indian Food Culture",
    "Indian Food History",
    "Heritage Recipes",
    "Cultural Recipes",

    // Regional
    "North Indian Recipes",
    "South Indian Recipes",
    "East Indian Recipes",
    "West Indian Recipes",
    "Regional Indian Recipes",
    "Village Food",
    "Village Cooking",
    "Rural Indian Cuisine",
    "Local Indian Dishes",
    "State Wise Recipes",
    "Indian Regional Cuisine",

    // Traditional
    "Grandmother Recipes",
    "Grandma Recipes",
    "Mother's Recipes",
    "Traditional Family Recipes",
    "Ancient Indian Recipes",
    "Forgotten Indian Recipes",
    "Lost Recipes of India",
    "Old Indian Recipes",
    "Classic Indian Recipes",

    // Ingredients
    "Indian Spices",
    "Whole Spices",
    "Homemade Masala",
    "Indian Masala Recipes",
    "Spice Blends",
    "Traditional Masala",
    "Ayurvedic Herbs",
    "Fresh Ingredients",
    "Organic Indian Food",

    // Meals
    "Breakfast Recipes",
    "Lunch Recipes",
    "Dinner Recipes",
    "Evening Snacks",
    "Healthy Indian Meals",
    "Comfort Food",
    "Vegetarian Recipes",
    "Vegan Indian Recipes",
    "Jain Recipes",
    "Satvik Food",
    "Ayurvedic Food",

    // Bread & Rice
    "Indian Bread",
    "Chapati Recipes",
    "Roti Recipes",
    "Paratha Recipes",
    "Poori Recipes",
    "Naan Recipes",
    "Rice Recipes",
    "Biryani Recipes",
    "Pulao Recipes",

    // Curry
    "Indian Curry",
    "Vegetable Curry",
    "Paneer Recipes",
    "Dal Recipes",
    "Sabzi Recipes",
    "Gravy Recipes",
    "Traditional Curry",

    // Snacks
    "Indian Snacks",
    "Street Food",
    "Pakora Recipes",
    "Samosa Recipes",
    "Chaat Recipes",

    // Sweets
    "Indian Sweets",
    "Traditional Mithai",
    "Dessert Recipes",
    "Halwa Recipes",
    "Ladoo Recipes",
    "Kheer Recipes",
    "Sweet Recipes",

    // Pickles
    "Indian Pickles",
    "Homemade Pickles",
    "Chutney Recipes",
    "Papad Recipes",

    // Festivals
    "Festival Recipes",
    "Diwali Recipes",
    "Holi Recipes",
    "Navratri Recipes",
    "Eid Recipes",
    "Christmas Recipes",
    "Onam Recipes",
    "Pongal Recipes",
    "Ganesh Chaturthi Recipes",
    "Baisakhi Recipes",
    "Raksha Bandhan Recipes",
    "Makar Sankranti Recipes",

    // States
    "Punjabi Recipes",
    "Gujarati Recipes",
    "Rajasthani Recipes",
    "Maharashtrian Recipes",
    "Bengali Recipes",
    "Tamil Recipes",
    "Kannada Recipes",
    "Kerala Recipes",
    "Andhra Recipes",
    "Telangana Recipes",
    "Odia Recipes",
    "Assamese Recipes",
    "Kashmiri Recipes",
    "Goan Recipes",
    "Bihari Recipes",
    "Jharkhand Recipes",
    "Chhattisgarh Recipes",
    "Himachali Recipes",
    "Uttarakhand Recipes",

    // SEO Intent
    "Easy Indian Recipes",
    "Healthy Recipes",
    "Quick Recipes",
    "Best Indian Recipes",
    "Step by Step Recipes",
    "Recipe Videos",
    "Food Stories",
    "Recipe Collection",
    "Traditional Recipes Online",
    "Authentic Indian Cooking Guide",
    "Indian Food Blog",
    "Recipe Website",
    "Cooking Tips",
    "Kitchen Secrets",
    "Traditional Cooking Techniques",
    "Food Documentary",
    "Indian Culinary Stories",
    "Recipes with History",
    "Taste of India",
    "Indian Heritage",
    "Timeless Traditions",
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