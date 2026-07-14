import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentic Indian Spices",
  description:
    "Explore the rich world of authentic Indian spices, their history, health benefits, traditional uses, and regional flavors with Timeless Tadka.",
};

const spices = [
  {
    name: "Turmeric",
    hindi: "Haldi",
    description:
      "Known as the Golden Spice of India, turmeric is widely used for cooking, traditional medicine, and religious ceremonies.",
    color: "bg-yellow-100",
  },
  {
    name: "Cumin",
    hindi: "Jeera",
    description:
      "A staple spice in Indian kitchens, cumin adds warmth and depth to curries, dals, rice, and spice blends.",
    color: "bg-amber-100",
  },
  {
    name: "Coriander",
    hindi: "Dhaniya",
    description:
      "Both coriander seeds and fresh leaves are essential ingredients in Indian cuisine, adding freshness and aroma.",
    color: "bg-green-100",
  },
  {
    name: "Red Chilli",
    hindi: "Lal Mirch",
    description:
      "From mild Kashmiri chili to fiery Guntur chili, Indian red chilies bring vibrant color and heat.",
    color: "bg-red-100",
  },
  {
    name: "Cardamom",
    hindi: "Elaichi",
    description:
      "A fragrant spice used in desserts, tea, biryanis, and festive dishes throughout India.",
    color: "bg-emerald-100",
  },
  {
    name: "Cloves",
    hindi: "Laung",
    description:
      "Aromatic cloves provide warmth and are commonly used in masalas, pulao, and Ayurvedic remedies.",
    color: "bg-orange-100",
  },
  {
    name: "Cinnamon",
    hindi: "Dalchini",
    description:
      "Sweet and woody, cinnamon is a key ingredient in garam masala and traditional sweets.",
    color: "bg-orange-50",
  },
  {
    name: "Black Pepper",
    hindi: "Kali Mirch",
    description:
      "Known as the King of Spices, black pepper has been traded from India for centuries.",
    color: "bg-gray-100",
  },
];

export default function SpicesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-700 via-red-700 to-yellow-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em]">
            Timeless Tadka
          </p>

          <h1 className="text-5xl font-bold md:text-6xl">
            Authentic Indian Spices
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-orange-100">
            Discover the soul of Indian cooking through authentic spices,
            traditional blends, regional flavors, and centuries-old culinary
            wisdom passed from generation to generation.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-stone-900">
            The Heart of Every Indian Kitchen
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Indian cuisine is celebrated worldwide for its extraordinary use of
            spices. Every spice contributes its own aroma, flavor, color, and
            health benefits. Together they create timeless recipes that define
            India's rich culinary heritage.
          </p>
        </div>
      </section>

      {/* Spice Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {spices.map((spice) => (
            <article
              key={spice.name}
              className={`${spice.color} rounded-2xl p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl`}
            >
              <h3 className="text-2xl font-bold text-stone-900">
                {spice.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-red-700">
                {spice.hindi}
              </p>

              <p className="mt-4 leading-7 text-stone-700">
                {spice.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-orange-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-4xl font-bold">
            "Every spice tells a story, every recipe preserves a tradition."
          </h2>

          <p className="mt-6 text-lg text-orange-100">
            At <strong>Timeless Tadka</strong>, we celebrate India's diverse
            culinary heritage by preserving authentic spice knowledge, regional
            cooking traditions, and recipes that have stood the test of time.
          </p>
        </div>
      </section>
    </main>
  );
}