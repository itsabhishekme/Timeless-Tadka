import Image from "next/image";
import Link from "next/link";

export interface SpiceCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  origin: string;
  benefits: string[];
  color?: string;
}

export default function SpiceCard({
  name,
  slug,
  image,
  description,
  origin,
  benefits,
  color = "#C2410C",
}: SpiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <span
          className="absolute left-4 top-4 rounded-full px-4 py-1 text-sm font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          Authentic Spice
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>

          <p className="mt-1 text-sm font-medium text-orange-600">
            Origin: {origin}
          </p>
        </div>

        <p className="line-clamp-3 text-gray-600">
          {description}
        </p>

        <div>
          <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-900">
            Health Benefits
          </h4>

          <div className="flex flex-wrap gap-2">
            {benefits.slice(0, 3).map((benefit) => (
              <span
                key={benefit}
                className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/spices/${slug}`}
          className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
        >
          Explore Spice

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
        </Link>
      </div>
    </article>
  );
}