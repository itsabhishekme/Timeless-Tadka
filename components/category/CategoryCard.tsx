import Image from "next/image";
import Link from "next/link";

export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;

  recipeCount?: number;
  state?: string;
  color?: string;
  icon?: string;

  featured?: boolean;
  trending?: boolean;
  seasonal?: boolean;

  preparationTime?: string;
  difficulty?: "Easy" | "Medium" | "Hard";

  totalViews?: string;
  totalLikes?: string;

  className?: string;
}

export default function CategoryCard({
  title,
  description,
  image,
  slug,

  recipeCount = 0,
  state = "India",
  color = "#D97706",
  icon = "🍛",

  featured = false,
  trending = false,
  seasonal = false,

  preparationTime = "30 mins",
  difficulty = "Easy",

  totalViews = "15K",
  totalLikes = "2.4K",

  className = "",
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-amber-300 hover:shadow-2xl ${className}`}
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Featured */}

        {featured && (
          <div className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-xl">
            Featured
          </div>
        )}

        {/* Trending */}

        {trending && (
          <div className="absolute left-4 top-16 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
            🔥 Trending
          </div>
        )}

        {/* Seasonal */}

        {seasonal && (
          <div className="absolute left-4 top-28 rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white shadow-lg">
            🌿 Seasonal
          </div>
        )}

        {/* Recipe Count */}

        <div className="absolute right-4 top-4 rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-xl backdrop-blur">
          {recipeCount}+ Recipes
        </div>

        {/* Bottom */}

        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
          <div>
            <p className="text-xs uppercase tracking-[4px] opacity-80">
              Traditional Cuisine
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {icon} {title}
            </h2>

            <p className="mt-1 text-sm opacity-90">{state}</p>
          </div>

          <div
            className="h-16 w-16 rounded-full border-4 border-white shadow-xl"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
            Homemade
          </span>

          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Authentic
          </span>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
            Regional
          </span>
        </div>

        <h3 className="text-3xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-amber-700">
          {title}
        </h3>

        <p className="mt-4 line-clamp-4 text-[15px] leading-8 text-gray-600">
          {description}
        </p>

        {/* Stats */}

        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-amber-50 p-5">
          <div>
            <p className="text-xs uppercase text-gray-500">Cooking Time</p>

            <h4 className="mt-2 font-bold text-gray-900">
              {preparationTime}
            </h4>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">Difficulty</p>

            <h4 className="mt-2 font-bold text-gray-900">
              {difficulty}
            </h4>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">Views</p>

            <h4 className="mt-2 font-bold text-gray-900">
              👁 {totalViews}
            </h4>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-500">Favorites</p>

            <h4 className="mt-2 font-bold text-gray-900">
              ❤️ {totalLikes}
            </h4>
          </div>
        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

        {/* Footer */}

        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[3px] text-gray-500">
              Discover Authentic Flavors
            </p>

            <h4 className="mt-1 font-semibold text-amber-700">
              Explore Collection
            </h4>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-600 text-white shadow-lg transition-all duration-500 group-hover:translate-x-2 group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {/* Hover Line */}

        <div className="mt-6 h-1 w-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-full" />
      </div>
    </Link>
  );
}