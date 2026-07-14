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
}

const difficultyColor = {
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
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
}: RecipeCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Recipe Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-700 shadow">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
            {region}
          </span>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              difficultyColor[difficulty]
            }`}
          >
            {difficulty}
          </span>
        </div>

        <h3 className="line-clamp-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-amber-700">
          {title}
        </h3>

        <p className="line-clamp-3 text-sm leading-7 text-gray-600">
          {description}
        </p>

        <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span>🕒</span>
            <span>{cookingTime}</span>
          </div>

          <Link
            href={`/recipes/${slug}`}
            className="font-semibold text-amber-700 transition hover:text-amber-900"
          >
            View Recipe →
          </Link>
        </div>
      </div>
    </article>
  );
}