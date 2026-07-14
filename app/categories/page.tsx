import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recipe Categories",
  description:
    "Explore authentic Indian recipes by category, including breakfast, curries, sweets, snacks, festival foods, spices, and regional cuisines.",
};

const categories = [
  {
    id: 1,
    title: "Breakfast",
    description: "Start your day with traditional Indian breakfasts.",
    emoji: "🍛",
    href: "/recipes?category=breakfast",
  },
  {
    id: 2,
    title: "Lunch",
    description: "Wholesome homemade meals from every region of India.",
    emoji: "🍲",
    href: "/recipes?category=lunch",
  },
  {
    id: 3,
    title: "Dinner",
    description: "Comforting family dinners full of authentic flavors.",
    emoji: "🥘",
    href: "/recipes?category=dinner",
  },
  {
    id: 4,
    title: "Snacks",
    description: "Street food and homemade evening snacks.",
    emoji: "🥟",
    href: "/recipes?category=snacks",
  },
  {
    id: 5,
    title: "Festival Foods",
    description: "Traditional recipes for every Indian celebration.",
    emoji: "🎉",
    href: "/festivals",
  },
  {
    id: 6,
    title: "Traditional Sweets",
    description: "Classic Indian desserts passed through generations.",
    emoji: "🍮",
    href: "/recipes?category=sweets",
  },
  {
    id: 7,
    title: "Regional Cuisine",
    description: "Discover recipes from every state of India.",
    emoji: "🗺️",
    href: "/traditions",
  },
  {
    id: 8,
    title: "Authentic Spices",
    description: "Learn about Indian spices and homemade masalas.",
    emoji: "🌶️",
    href: "/spices",
  },
];

export default function CategoriesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <section className="text-center">
        <p className="text-orange-600 font-semibold uppercase tracking-widest">
          Explore
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Recipe Categories
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          Discover authentic Indian homemade recipes organized by meal,
          festivals, regional traditions, sweets, snacks, and timeless culinary
          heritage.
        </p>
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="rounded-2xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">{category.emoji}</div>

            <h2 className="mt-6 text-2xl font-semibold">
              {category.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {category.description}
            </p>

            <span className="mt-6 inline-block font-medium text-orange-600">
              Explore →
            </span>
          </Link>
        ))}
      </section>

      <section className="mt-24 rounded-3xl bg-orange-50 p-12 text-center">
        <h2 className="text-4xl font-bold">
          Every Recipe Has a Story
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-700">
          At <strong>Timeless Tadka</strong>, every dish carries memories,
          traditions, and generations of love. Explore India's diverse culinary
          heritage through authentic homemade recipes, regional flavors, and
          timeless cooking traditions.
        </p>
      </section>
    </main>
  );
}