import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditions",
  description:
    "Explore India's timeless food traditions, family recipes, regional cuisines, festivals, and culinary heritage through Timeless Tadka.",
};

const traditions = [
  {
    title: "Grandmother's Kitchen",
    description:
      "Traditional recipes lovingly passed down through generations, preserving authentic flavors and family memories.",
    emoji: "👵",
  },
  {
    title: "Regional Heritage",
    description:
      "Discover the unique cuisines, ingredients, and cooking techniques from every corner of India.",
    emoji: "🗺️",
  },
  {
    title: "Festival Celebrations",
    description:
      "Celebrate Indian festivals with authentic festive dishes, sweets, and traditional family recipes.",
    emoji: "🎉",
  },
  {
    title: "Village Cooking",
    description:
      "Experience rustic recipes prepared using age-old methods, clay pots, wood-fired stoves, and fresh local ingredients.",
    emoji: "🏡",
  },
  {
    title: "Authentic Indian Spices",
    description:
      "Learn how spices have shaped Indian cuisine for centuries and discover their cultural significance.",
    emoji: "🌶️",
  },
  {
    title: "Seasonal Cooking",
    description:
      "Traditional recipes inspired by seasonal ingredients and the wisdom of Indian home kitchens.",
    emoji: "🌿",
  },
];

export default function TraditionsPage() {
  return (
    <main className="bg-amber-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-900 via-amber-800 to-yellow-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-5xl font-extrabold">
            Timeless Indian Traditions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Every recipe tells a story. Every spice carries a legacy. Every meal
            preserves generations of love, culture, and heritage.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-bold text-gray-900">
          Preserving India's Culinary Heritage
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          India's culinary traditions have been shaped over thousands of years by
          families, festivals, agriculture, spirituality, and regional diversity.
          At <strong>Timeless Tadka</strong>, we believe recipes are more than
          instructions—they are living memories that connect generations.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-700">
          Our mission is to document authentic homemade recipes, forgotten
          regional dishes, traditional cooking methods, and cultural stories so
          future generations can continue experiencing the true taste of India.
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {traditions.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 text-5xl">{item.emoji}</div>

              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-orange-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-3xl font-semibold italic">
            "Traditions are not inherited—they are preserved through every meal,
            every celebration, and every generation."
          </blockquote>

          <p className="mt-8 text-orange-200">
            — Timeless Tadka
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Join Our Journey
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
          Help us preserve India's extraordinary culinary heritage. Explore
          authentic recipes, discover forgotten traditions, celebrate regional
          flavors, and share your family's treasured recipes with the world.
        </p>

        <button className="mt-10 rounded-xl bg-orange-700 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-800">
          Explore Traditional Recipes
        </button>
      </section>
    </main>
  );
}