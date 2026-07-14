import Image from "next/image";
import Link from "next/link";

export interface FestivalCardProps {
  id: string;
  title: string;
  festival: string;
  description: string;
  image: string;
  slug: string;

  state?: string;
  season?: string;
  recipes?: number;

  duration?: string;
  difficulty?: "Easy" | "Medium" | "Hard";

  featured?: boolean;
  vegetarian?: boolean;
  traditional?: boolean;

  yearRound?: boolean;

  traditions?: string[];

  accentColor?: string;
}

export default function FestivalCard({
  title,
  festival,
  description,
  image,
  slug,

  state,
  season,
  recipes,

  duration,
  difficulty,

  featured = false,
  vegetarian = false,
  traditional = true,

  yearRound = false,

  traditions = [],

  accentColor = "orange",
}: FestivalCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-2xl">

      {/* Featured Ribbon */}

      {featured && (
        <div className="absolute left-5 top-5 z-30 rounded-full bg-gradient-to-r from-orange-600 to-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          ⭐ Featured
        </div>
      )}

      <Link href={`/festivals/${slug}`}>

        {/* Hero Image */}

        <div className="relative h-72 overflow-hidden">

          <Image
            src={image}
            alt={title}
            fill
            priority={false}
            className="object-cover transition duration-700 group-hover:scale-110"
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Festival */}

          <div className="absolute left-5 top-5 rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur">
            {festival}
          </div>

          {/* Season */}

          {season && (
            <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-900 backdrop-blur">
              🌿 {season}
            </div>
          )}

          {/* Bottom Information */}

          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">

            {state && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
                📍 {state}
              </span>
            )}

            {duration && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
                ⏱ {duration}
              </span>
            )}

            {difficulty && (
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur">
                🔥 {difficulty}
              </span>
            )}

          </div>
        </div>

        {/* Content */}

        <div className="space-y-6 p-7">

          {/* Heading */}

          <div>

            <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 transition group-hover:text-orange-600">
              {title}
            </h2>

            <p className="line-clamp-4 leading-7 text-gray-600">
              {description}
            </p>

          </div>

          {/* Badges */}

          <div className="flex flex-wrap gap-2">

            {recipes !== undefined && (
              <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-semibold text-green-700">
                🍽 {recipes}+ Recipes
              </span>
            )}

            {traditional && (
              <span className="rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold text-amber-800">
                🪔 Traditional
              </span>
            )}

            {vegetarian && (
              <span className="rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                🥬 Vegetarian
              </span>
            )}

            {yearRound && (
              <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700">
                📅 Year Round
              </span>
            )}

          </div>

          {/* Traditions */}

          {traditions.length > 0 && (

            <div>

              <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-600">
                Festival Traditions
              </h3>

              <div className="flex flex-wrap gap-2">

                {traditions.map((item) => (

                  <span
                    key={item}
                    className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs text-orange-700"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          )}

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-orange-50 p-5">

            <div className="text-center">

              <div className="text-2xl font-bold text-orange-600">
                {recipes ?? "--"}
              </div>

              <div className="mt-1 text-xs uppercase tracking-wide text-gray-600">
                Recipes
              </div>

            </div>

            <div className="text-center">

              <div className="text-2xl font-bold text-orange-600">
                {season ?? "--"}
              </div>

              <div className="mt-1 text-xs uppercase tracking-wide text-gray-600">
                Season
              </div>

            </div>

            <div className="text-center">

              <div className="text-2xl font-bold text-orange-600">
                {difficulty ?? "--"}
              </div>

              <div className="mt-1 text-xs uppercase tracking-wide text-gray-600">
                Difficulty
              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="flex items-center justify-between border-t border-gray-100 pt-6">

            <div>

              <p className="text-sm font-semibold text-gray-500">
                Discover authentic recipes
              </p>

              <p className="text-lg font-bold text-gray-900">
                Celebrate {festival}
              </p>

            </div>

            <div className="rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 group-hover:bg-orange-700 group-hover:translate-x-1">
              Explore →
            </div>

          </div>

        </div>

      </Link>

      {/* Decorative Glow */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-orange-200/0 transition duration-500 group-hover:ring-orange-300/40" />

    </article>
  );
}