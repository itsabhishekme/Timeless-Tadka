import Image from "next/image";
import Link from "next/link";

export interface RecipeCardProps {
  id: string;
  title: string;
  slug: string;
  image: string;
  category: string;
  region: string;
  cookingTime: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;

  servings?: number;
  calories?: number;
  rating?: number;
  reviews?: number;
  chef?: string;
  featured?: boolean;
  vegetarian?: boolean;
  trending?: boolean;
  festival?: string;
}

const difficultyColor = {
  Easy:
    "bg-emerald-100 text-emerald-700 border border-emerald-200",

  Medium:
    "bg-amber-100 text-amber-700 border border-amber-200",

  Hard:
    "bg-rose-100 text-rose-700 border border-rose-200",
};

export default function RecipeCard({
  title,
  slug,
  image,
  category,
  region,
  cookingTime,
  difficulty,
  description,
  servings = 4,
  calories = 280,
  rating = 4.9,
  reviews = 120,
  chef = "Traditional Kitchen",
  featured = false,
  vegetarian = true,
  trending = false,
  festival,
}: RecipeCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:border-amber-300 hover:shadow-2xl">

      {/* Featured Ribbon */}

      {featured && (
        <div className="absolute left-5 top-5 z-30 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Trending */}

      {trending && (
        <div className="absolute right-5 top-5 z-30 rounded-full bg-red-500 px-3 py-2 text-xs font-bold text-white shadow">
          🔥 Trending
        </div>
      )}

      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category */}

        <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-wide text-amber-700 backdrop-blur-md shadow">

          {category}

        </div>

        {/* Veg */}

        {vegetarian && (
          <div className="absolute bottom-5 right-5 rounded-full bg-green-600 px-3 py-2 text-xs font-bold text-white shadow">

            🌿 Veg

          </div>
        )}
      </div>

      {/* Content */}

      <div className="space-y-6 p-7">

        {/* Region + Difficulty */}

        <div className="flex flex-wrap items-center justify-between gap-3">

          <span className="rounded-full bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-orange-700">

            📍 {region}

          </span>

          <span
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${
              difficultyColor[difficulty]
            }`}
          >
            {difficulty}
          </span>

        </div>

        {/* Title */}

        <h2 className="line-clamp-2 text-3xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-amber-700">

          {title}

        </h2>

        {/* Description */}

        <p className="line-clamp-3 text-base leading-8 text-slate-600">

          {description}

        </p>

        {/* Festival */}

        {festival && (
          <div className="rounded-2xl bg-amber-50 p-4">

            <span className="text-sm font-semibold text-amber-800">

              🎉 Perfect for {festival}

            </span>

          </div>
        )}

        {/* Stats */}

        <div className="grid grid-cols-2 gap-4">

          <div className="rounded-2xl bg-gray-50 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Cooking Time
            </p>

            <p className="mt-2 font-bold text-gray-900">
              🕒 {cookingTime}
            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Servings
            </p>

            <p className="mt-2 font-bold text-gray-900">
              🍽 {servings}
            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Calories
            </p>

            <p className="mt-2 font-bold text-gray-900">
              🔥 {calories}
            </p>

          </div>

          <div className="rounded-2xl bg-gray-50 p-4">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Rating
            </p>

            <p className="mt-2 font-bold text-yellow-600">
              ⭐ {rating} ({reviews})
            </p>

          </div>

        </div>

        {/* Chef */}

        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4">

          <div>

            <p className="text-xs uppercase tracking-wide text-gray-500">
              Recipe By
            </p>

            <p className="font-semibold text-gray-900">
              {chef}
            </p>

          </div>

          <button
            className="rounded-full border bg-white p-3 transition hover:bg-amber-100"
            aria-label="Save Recipe"
          >
            ❤️
          </button>

        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-gray-100 pt-6">

          <button
            className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold transition hover:bg-gray-100"
            aria-label="Share Recipe"
          >
            🔗 Share
          </button>

          <Link
            href={`/recipes/${slug}`}
            className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            View Recipe →
          </Link>

        </div>

      </div>

    </article>
  );
}