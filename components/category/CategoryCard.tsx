import Image from "next/image";
import Link from "next/link";

export interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  recipeCount?: number;
}

export default function CategoryCard({
  title,
  description,
  image,
  slug,
  recipeCount,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {recipeCount !== undefined && (
          <span className="absolute right-4 top-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
            {recipeCount} Recipes
          </span>
        )}
      </div>

      <div className="space-y-3 p-6">
        <h3 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-amber-700">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-7 text-gray-600">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold text-amber-700 transition-all group-hover:translate-x-1">
            Explore →
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-amber-700 transition-transform group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}