import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Explore authentic Indian homemade recipes, regional cuisines, traditional spices, festive dishes, village cooking, and timeless family recipes from across India.",
};

const recipeCategories = [
  {
    title: "Breakfast",
    description: "Start your day with wholesome Indian breakfasts.",
    href: "/recipes/breakfast",
    emoji: "🍽️",
  },
  {
    title: "Lunch",
    description: "Traditional homemade lunch recipes.",
    href: "/recipes/lunch",
    emoji: "🍛",
  },
  {
    title: "Dinner",
    description: "Comforting dinners from every region.",
    href: "/recipes/dinner",
    emoji: "🥘",
  },
  {
    title: "Snacks",
    description: "Tea-time and evening snack recipes.",
    href: "/recipes/snacks",
    emoji: "🥟",
  },
  {
    title: "Street Food",
    description: "India's most loved street food recipes.",
    href: "/recipes/street-food",
    emoji: "🌮",
  },
  {
    title: "Festival Specials",
    description: "Celebrate every festival with authentic food.",
    href: "/recipes/festivals",
    emoji: "🎉",
  },
  {
    title: "Traditional Sweets",
    description: "Classic Indian desserts and sweets.",
    href: "/recipes/sweets",
    emoji: "🍮",
  },
  {
    title: "Village Recipes",
    description: "Authentic recipes from rural India.",
    href: "/recipes/village",
    emoji: "🏡",
  },
];

export default function RecipesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="text-center">
        <p className="text-orange-600 font-semibold uppercase tracking-widest">
          Timeless Tadka
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Authentic Indian Recipes
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
          Discover generations of authentic Indian recipes made with love,
          traditional spices, regional ingredients, and timeless cooking
          techniques. Every recipe tells a story of culture, heritage, and home.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {recipeCategories.map((recipe) => (
          <Link
            key={recipe.title}
            href={recipe.href}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="text-5xl">{recipe.emoji}</div>

            <h2 className="mt-5 text-2xl font-semibold">
              {recipe.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {recipe.description}
            </p>

            <span className="mt-6 inline-flex font-medium text-orange-600">
              Explore →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-24 rounded-3xl bg-orange-50 p-10">
        <h2 className="text-3xl font-bold">
          Why Timeless Tadka?
        </h2>

        <p className="mt-5 text-gray-700 leading-8">
          Timeless Tadka preserves India's rich culinary heritage by collecting
          authentic homemade recipes from every corner of the country. From
          grandmother's treasured recipes to forgotten regional delicacies, our
          mission is to keep traditional Indian cooking alive for future
          generations.
        </p>

        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          <li>✅ Authentic Homemade Recipes</li>
          <li>✅ Traditional Indian Spices</li>
          <li>✅ Regional Cuisine</li>
          <li>✅ Festival Food</li>
          <li>✅ Village Cooking</li>
          <li>✅ Family Heritage Recipes</li>
          <li>✅ Ayurvedic Cooking</li>
          <li>✅ Timeless Indian Traditions</li>
        </ul>
      </div>
    </section>
  );
}