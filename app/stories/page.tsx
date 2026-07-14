import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Discover the stories behind India's timeless recipes, traditional kitchens, forgotten ingredients, and the people preserving our culinary heritage.",
};

const stories = [
  {
    id: 1,
    title: "The Story Behind Every Recipe",
    description:
      "Every traditional recipe carries generations of love, memories, and culture. Discover how family recipes become timeless treasures.",
    category: "Heritage",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Grandmother's Kitchen",
    description:
      "Step into the warm kitchens where spices were hand-ground, meals were slow-cooked, and every dish was prepared with love.",
    category: "Family",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Forgotten Village Recipes",
    description:
      "Explore authentic recipes from rural India that are slowly disappearing with time but deserve to be remembered.",
    category: "Village Life",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "The Magic of Indian Spices",
    description:
      "Learn how traditional spice blends shaped regional cuisines and why every household had its own secret masala.",
    category: "Spices",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Festivals Through Food",
    description:
      "Celebrate India's festivals by discovering the recipes, customs, and emotions that make every occasion unforgettable.",
    category: "Festivals",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Preserving Culinary Heritage",
    description:
      "A journey dedicated to documenting traditional recipes before they disappear forever.",
    category: "Culture",
    readTime: "5 min read",
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-5xl font-bold md:text-6xl">
            Stories of Tradition
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-orange-100">
            Beyond recipes lies a world of memories, culture, family traditions,
            forgotten kitchens, and the people who keep India's culinary
            heritage alive.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900">
            Every Recipe Has a Story
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Food is more than ingredients—it is memory, identity, emotion, and
            tradition. Every recipe carries the wisdom of generations and the
            warmth of countless family gatherings. Through Timeless Tadka, we
            document these stories so they can continue inspiring future
            generations.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                {story.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {story.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {story.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {story.readTime}
                </span>

                <Link
                  href="#"
                  className="font-semibold text-orange-600 hover:text-orange-700"
                >
                  Read Story →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-orange-700 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <blockquote className="text-3xl font-semibold italic leading-relaxed">
            "When recipes are preserved, memories survive. When traditions are
            shared, cultures live forever."
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Share Your Family Story
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Help preserve India's culinary heritage by sharing your family's
          recipes, traditions, and food memories with Timeless Tadka.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
        >
          Submit Your Story
        </Link>
      </section>
    </main>
  );
}