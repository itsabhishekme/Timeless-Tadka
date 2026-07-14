// config/navigation.ts

export interface NavItem {
  id: number;
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export const navigation: NavItem[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    description: "Return to the homepage",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    description: "Learn about Timeless Tadka",
  },
  {
    id: 3,
    title: "Recipes",
    href: "/recipes",
    description: "Explore authentic homemade recipes",
  },
  {
    id: 4,
    title: "Categories",
    href: "/categories",
    description: "Browse recipes by category",
  },
  {
    id: 5,
    title: "Spices",
    href: "/spices",
    description: "Discover traditional Indian spices",
  },
  {
    id: 6,
    title: "Traditions",
    href: "/traditions",
    description: "Indian food culture & traditions",
  },
  {
    id: 7,
    title: "Festivals",
    href: "/festivals",
    description: "Festival recipes from across India",
  },
  {
    id: 8,
    title: "Stories",
    href: "/stories",
    description: "Food stories & culinary heritage",
  },
  {
    id: 9,
    title: "Search",
    href: "/search",
    description: "Search recipes and spices",
  },
  {
    id: 10,
    title: "Contact",
    href: "/contact",
    description: "Get in touch with us",
  },
];

export const footerNavigation = [
  {
    title: "Explore",
    links: [
      { title: "Home", href: "/" },
      { title: "Recipes", href: "/recipes" },
      { title: "Categories", href: "/categories" },
      { title: "Spices", href: "/spices" },
      { title: "Traditions", href: "/traditions" },
      { title: "Festivals", href: "/festivals" },
      { title: "Stories", href: "/stories" },
    ],
  },

  {
    title: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
  },
  {
    name: "Pinterest",
    url: "https://pinterest.com",
  },
  {
    name: "X",
    url: "https://x.com",
  },
];

export const quickLinks = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snacks",
  "Desserts",
  "Street Food",
  "Festival Specials",
  "Traditional Sweets",
  "Pickles",
  "Regional Cuisine",
];

export default navigation;