import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Festival Recipes",
  description:
    "Celebrate Indian festivals with authentic traditional recipes, sweets, snacks, festive meals, and cultural food traditions.",
};

const festivals = [
  {
    name: "Diwali",
    month: "October / November",
    image: "/images/festivals/diwali.jpg",
    description:
      "Traditional sweets, savory snacks, festive thalis, and family recipes.",
  },
  {
    name: "Holi",
    month: "March",
    image: "/images/festivals/holi.jpg",
    description:
      "Gujiya, Thandai, Dahi Bhalla, Malpua, and colorful festive treats.",
  },
  {
    name: "Navratri",
    month: "September / October",
    image: "/images/festivals/navratri.jpg",
    description:
      "Satvik fasting recipes, vrat snacks, fruit dishes, and special meals.",
  },
  {
    name: "Ganesh Chaturthi",
    month: "August / September",
    image: "/images/festivals/ganesh.jpg",
    description:
      "Traditional Modak, Puran Poli, and festive Maharashtrian recipes.",
  },
  {
    name: "Onam",
    month: "August / September",
    image: "/images/festivals/onam.jpg",
    description:
      "Authentic Kerala Sadya with over twenty traditional dishes.",
  },
  {
    name: "Pongal",
    month: "January",
    image: "/images/festivals/pongal.jpg",
    description:
      "Traditional South Indian harvest festival recipes and sweets.",
  },
  {
    name: "Eid",
    month: "Varies",
    image: "/images/festivals/eid.jpg",
    description:
      "Biryani, Sheer Khurma, Kebabs, Haleem, and festive delicacies.",
  },
  {
    name: "Christmas",
    month: "December",
    image: "/images/festivals/christmas.jpg",
    description:
      "Indian Christmas cakes, cookies, plum cakes, and festive desserts.",
  },
];

export default function FestivalsPage() {
  return (
    <main className="min-h-screen bg-amber-50">
      {/* Hero */}

      <section className="bg-gradient-to-r from-orange-700 via-red-700 to-yellow-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Festival Recipes & Traditions
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-orange-100">
            Every Indian festival has its own unique flavors, sweets,
            traditions, and family recipes. Discover authentic festive meals
            passed down through generations.
          </p>
        </div>
      </section>

      {/* Intro */}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-5 text-4xl font-bold text-orange-800">
            Celebrate Through Food
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            Festivals are incomplete without traditional food. From Diwali
            sweets to Holi delicacies, every celebration carries recipes filled
            with love, memories, and culture. Timeless Tadka preserves these
            treasured family traditions for generations to come.
          </p>
        </div>
      </section>

      {/* Festival Cards */}

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {festivals.map((festival) => (
          <article
            key={festival.name}
            className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={festival.image}
              alt={festival.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                {festival.month}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {festival.name}
              </h3>

              <p className="mt-3 text-gray-600">
                {festival.description}
              </p>

              <Link
                href="/recipes"
                className="mt-6 inline-block rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                Explore Recipes →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Quote */}

      <section className="bg-orange-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Food Brings Every Celebration to Life
          </h2>

          <p className="text-xl leading-9 text-orange-100 italic">
            "Every festival has a story. Every recipe preserves a tradition.
            Every shared meal strengthens family bonds and keeps our heritage
            alive."
          </p>
        </div>
      </section>
    </main>
  );
}