import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Timeless Tadka",
  description:
    "The page you're looking for doesn't exist. Explore authentic Indian recipes, traditional spices, and timeless culinary heritage on Timeless Tadka.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-orange-50 via-amber-50 to-white px-6">
      <section className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
          Error 404
        </span>

        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Lost in the Kitchen?
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          The page you're looking for couldn't be found. It may have been
          moved, deleted, or never existed.
        </p>

        <p className="mt-4 text-gray-500">
          Let's take you back to authentic Indian recipes, regional cuisines,
          homemade spices, and timeless traditions.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Back to Home
          </Link>

          <Link
            href="/recipes"
            className="rounded-lg border border-orange-600 px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
          >
            Browse Recipes
          </Link>

          <Link
            href="/categories"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Explore Categories
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🥘</div>
            <h2 className="text-lg font-semibold">Traditional Recipes</h2>
            <p className="mt-2 text-sm text-gray-600">
              Discover authentic homemade recipes passed down through
              generations.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🌶️</div>
            <h2 className="text-lg font-semibold">Authentic Spices</h2>
            <p className="mt-2 text-sm text-gray-600">
              Learn about Indian spices, masalas, and traditional cooking
              techniques.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-4xl">🏡</div>
            <h2 className="text-lg font-semibold">Food Traditions</h2>
            <p className="mt-2 text-sm text-gray-600">
              Explore the heritage, festivals, and stories behind every meal.
            </p>
          </div>
        </div>

        <p className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Timeless Tadka. Preserving India's
          culinary heritage, one recipe at a time.
        </p>
      </section>
    </main>
  );
}