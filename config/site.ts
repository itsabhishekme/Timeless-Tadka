// ===============================================
// Timeless Tadka
// Site Configuration
// ===============================================

export const siteConfig = {
  // Basic Information
  name: "Timeless Tadka",

  shortName: "Timeless Tadka",

  title:
    "Timeless Tadka | Bringing Emotional Homemade Recipes, Authentic Spices & Timeless Indian Traditions Back to Life",

  description:
    "Timeless Tadka preserves India's authentic homemade recipes, regional cuisines, traditional spices, festive dishes, and culinary heritage through stories, culture, and timeless cooking traditions.",

  tagline:
    "Bringing Emotional Homemade Recipes, Authentic Spices & Timeless Indian Traditions Back to Life.",

  url: "https://timelesstadka.com",

  logo: "/logos/logo.png",

  logoDark: "/logos/logo-dark.png",

  favicon: "/favicon.ico",

  ogImage: "/images/og-cover.jpg",

  locale: "en_IN",

  language: "en",

  timezone: "Asia/Kolkata",

  themeColor: "#8B4513",

  backgroundColor: "#FFFDF8",

  creator: "Timeless Tadka",

  publisher: "Timeless Tadka",

  copyright: `© ${new Date().getFullYear()} Timeless Tadka. All Rights Reserved.`,

  // Contact
  contact: {
    email: "hello@timelesstadka.com",
    support: "support@timelesstadka.com",
  },

  // Social Links
  social: {
    youtube: "https://youtube.com/@timelesstadka",
    instagram: "https://instagram.com/timelesstadka",
    facebook: "https://facebook.com/timelesstadka",
    x: "https://x.com/timelesstadka",
    pinterest: "https://pinterest.com/timelesstadka",
    threads: "https://threads.net/@timelesstadka",
    linkedin: "https://linkedin.com/company/timelesstadka",
  },

  // Navigation
  navigation: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Recipes",
      href: "/recipes",
    },
    {
      title: "Categories",
      href: "/categories",
    },
    {
      title: "Spices",
      href: "/spices",
    },
    {
      title: "Traditions",
      href: "/traditions",
    },
    {
      title: "Festivals",
      href: "/festivals",
    },
    {
      title: "Stories",
      href: "/stories",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  // Footer
  footer: {
    about:
      "Timeless Tadka celebrates India's rich culinary heritage by preserving authentic homemade recipes, regional cuisines, traditional spices, and family food stories.",

    quickLinks: [
      "/recipes",
      "/categories",
      "/spices",
      "/traditions",
      "/festivals",
      "/stories",
    ],

    legal: [
      "/privacy-policy",
      "/terms",
    ],
  },

  // SEO
  seo: {
    keywords: [
      "Indian Recipes",
      "Traditional Indian Food",
      "Homemade Recipes",
      "Authentic Indian Cuisine",
      "Indian Spices",
      "Village Recipes",
      "Grandmother Recipes",
      "Regional Indian Food",
      "Festival Recipes",
      "Traditional Cooking",
      "Indian Heritage Food",
      "Ayurvedic Recipes",
      "Indian Kitchen",
      "Food Stories",
      "Timeless Tadka",
    ],
  },

  // Home Page Sections
  homeSections: [
    "hero",
    "featuredRecipes",
    "recipeCategories",
    "traditionalSpices",
    "festivalSpecials",
    "foodStories",
    "newsletter",
  ],

  // Default Pagination
  pagination: {
    pageSize: 12,
  },

  // API
  api: {
    baseUrl: "/api",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export default siteConfig;