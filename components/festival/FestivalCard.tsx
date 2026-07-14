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
}: FestivalCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <Link href={`/festivals/${slug}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
            priority={false}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-orange-600 px-4 py-1 text-sm font-semibold text-white shadow-lg">
            {festival}
          </div>

          {season && (
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur">
              {season}
            </div>
          )}
        </div>

        <div className="space-y-4 p-6">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-orange-600">
              {title}
            </h2>

            <p className="line-clamp-3 text-gray-600">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {state && (
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                📍 {state}
              </span>
            )}

            {recipes !== undefined && (
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                🍽 {recipes} Recipes
              </span>
            )}
          </div>

          <div className="flex items-center justify-between border-t pt-4">
            <span className="font-semibold text-orange-600 transition-all group-hover:translate-x-1">
              Explore Festival →
            </span>

            <span className="text-sm text-gray-500">
              Traditional Cuisine
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}