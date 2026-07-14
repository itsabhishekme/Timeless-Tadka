import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Timeless Tadka, our mission to preserve authentic Indian homemade recipes, regional cuisines, traditional spices, and culinary heritage.",
};

export default function AboutPage() {
  return (
    <main className="bg-amber-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-700 via-amber-700 to-red-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
            About Timeless Tadka
          </p>

          <h1 className="mb-6 text-5xl font-extrabold md:text-6xl">
            Preserving India's Culinary Heritage
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-orange-100">
            Bringing Emotional Homemade Recipes, Authentic Spices &
            Timeless Indian Traditions Back to Life.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              More Than Recipes. A Living Legacy.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Timeless Tadka was created to preserve the authentic flavors,
              traditions, and stories that have been passed from one
              generation to another. Every recipe carries memories of family,
              festivals, childhood, and culture.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-700">
              Our mission is to document regional cuisines, forgotten recipes,
              handmade spice blends, and traditional cooking techniques so
              future generations can continue experiencing the true taste of
              India.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="mb-6 text-2xl font-bold text-orange-700">
              What We Believe
            </h3>

            <ul className="space-y-5 text-gray-700">
              <li>🍛 Every recipe tells a story.</li>
              <li>🌶 Authentic spices create authentic flavors.</li>
              <li>👵 Grandmother's recipes are priceless treasures.</li>
              <li>🏡 Home cooking connects generations.</li>
              <li>🇮🇳 India's culinary heritage deserves preservation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Mission
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Preserve",
                desc: "Document authentic homemade recipes before they disappear.",
                icon: "📖",
              },
              {
                title: "Celebrate",
                desc: "Showcase regional cuisines from every corner of India.",
                icon: "🎉",
              },
              {
                title: "Educate",
                desc: "Teach traditional cooking techniques and spice knowledge.",
                icon: "🎓",
              },
              {
                title: "Inspire",
                desc: "Encourage families to cook and preserve traditions together.",
                icon: "❤️",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-amber-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 text-5xl">{item.icon}</div>

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-orange-800 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-8 text-4xl font-bold">
            Our Vision
          </h2>

          <p className="text-xl leading-9 text-orange-100">
            To become the world's leading digital archive of authentic Indian
            food culture, preserving recipes, traditions, stories, and
            culinary wisdom for generations to come.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Core Values
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            "Authenticity",
            "Heritage",
            "Family",
            "Community",
            "Sustainability",
            "Storytelling",
          ].map((value) => (
            <div
              key={value}
              className="rounded-2xl bg-white p-8 text-center shadow-lg"
            >
              <h3 className="text-2xl font-bold text-orange-700">
                {value}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-700 to-red-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Join Our Journey
          </h2>

          <p className="mb-10 text-lg text-orange-100">
            Explore authentic Indian recipes, discover forgotten traditions,
            and celebrate the timeless flavors of India with us.
          </p>

          <Link
            href="/recipes"
            className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-orange-700 transition hover:bg-orange-100"
          >
            Explore Recipes →
          </Link>
        </div>
      </section>
    </main>
  );
}