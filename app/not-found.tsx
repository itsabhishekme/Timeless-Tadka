import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 • Page Not Found | Timeless Tadka",
  description:
    "Oops! The page you're looking for doesn't exist. Return to Timeless Tadka and continue exploring authentic Indian recipes, regional cuisines, homemade spices, festivals, culinary stories, and timeless food traditions.",

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title: "404 • Page Not Found | Timeless Tadka",
    description:
      "Explore authentic Indian recipes, regional cuisines, homemade spices, and timeless culinary traditions.",
    type: "website",
  },
};

const quickLinks = [
  {
    title: "Traditional Recipes",
    description:
      "Authentic homemade recipes collected from families across India.",
    href: "/recipes",
    emoji: "🥘",
  },
  {
    title: "Regional Cuisines",
    description:
      "Travel through India's diverse culinary landscape, one state at a time.",
    href: "/categories",
    emoji: "🗺️",
  },
  {
    title: "Authentic Spices",
    description:
      "Discover the ingredients and masalas that define Indian cooking.",
    href: "/spices",
    emoji: "🌶️",
  },
  {
    title: "Festival Foods",
    description:
      "Celebrate every Indian festival with traditional festive recipes.",
    href: "/festivals",
    emoji: "🎉",
  },
  {
    title: "Food Traditions",
    description:
      "Explore centuries-old cooking customs and family traditions.",
    href: "/traditions",
    emoji: "🏡",
  },
  {
    title: "Food Stories",
    description:
      "Read documentaries, cultural stories, and the history behind iconic dishes.",
    href: "/stories",
    emoji: "📖",
  },
];

export default function NotFound() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-200 blur-3xl" />
      </div>

      <section className="container mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="w-full">

          {/* Badge */}

          <div className="flex justify-center">
            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-orange-700">
              Error 404
            </span>
          </div>

          {/* 404 */}

          <h1 className="mt-10 text-center text-8xl font-black text-orange-600 md:text-[10rem]">
            404
          </h1>

          {/* Heading */}

          <h2 className="mt-4 text-center text-4xl font-extrabold text-gray-900 md:text-6xl">
            Lost in the Kitchen?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xl leading-9 text-gray-600">
            It looks like the recipe you're searching for has wandered off.
            The page may have been moved, renamed, or never existed.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-500">
            Don't worry—our kitchen is still full of authentic Indian recipes,
            regional cuisines, traditional spices, festival delicacies,
            forgotten dishes, and timeless culinary stories waiting to be
            explored.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/"
              className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700"
            >
              🏠 Back Home
            </Link>

            <Link
              href="/recipes"
              className="rounded-xl border-2 border-orange-600 px-8 py-4 font-semibold text-orange-700 transition-all hover:bg-orange-50"
            >
              🍛 Browse Recipes
            </Link>

            <Link
              href="/search"
              className="rounded-xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all hover:bg-gray-100"
            >
              🔍 Search Website
            </Link>

          </div>

          {/* Feature Cards */}

          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {quickLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-orange-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="text-5xl">{item.emoji}</div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-orange-600">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-6 font-semibold text-orange-600">
                  Explore →
                </div>
              </Link>
            ))}

          </div>

          {/* Quote */}

          <div className="mx-auto mt-24 max-w-4xl rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h3 className="text-center text-3xl font-bold text-gray-900">
              Where Every Recipe Tells a Story.
            </h3>

            <p className="mt-4 text-center text-lg italic text-orange-700">
              Every Tradition Lives Forever.
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-gray-600">
              Timeless Tadka is dedicated to preserving India's culinary
              heritage through authentic homemade recipes, regional cuisines,
              traditional spices, forgotten cooking techniques, festival foods,
              and the stories that connect generations through food.
            </p>

          </div>

          {/* Footer */}

          <div className="mt-20 border-t border-orange-100 pt-10 text-center">

            <p className="text-lg font-semibold text-gray-800">
              Timeless Tadka
            </p>

            <p className="mt-2 text-gray-500">
              Bringing Emotional Homemade Recipes, Authentic Spices &
              Timeless Indian Traditions Back to Life.
            </p>

            <p className="mt-8 text-sm text-gray-400">
              © {new Date().getFullYear()} Timeless Tadka. All Rights Reserved.
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}