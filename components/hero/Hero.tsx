"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#f59e0b_1px,_transparent_1px)] bg-[length:30px_30px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-20 lg:flex-row lg:px-8 lg:py-28">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            🇮🇳 Celebrating India's Culinary Heritage
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Timeless
            <span className="block text-orange-600">Tadka</span>
          </h1>

          <p className="mt-6 text-xl leading-9 text-gray-600">
            Bringing emotional homemade recipes, authentic spices,
            regional cuisines, and timeless Indian traditions back to
            life—one recipe at a time.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/recipes"
              className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              Explore Recipes
            </Link>

            <Link
              href="/traditions"
              className="rounded-xl border-2 border-orange-600 px-8 py-4 font-semibold text-orange-700 transition hover:bg-orange-600 hover:text-white"
            >
              Discover Traditions
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-orange-600">500+</h3>
              <p className="text-gray-600">Recipes</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-600">28</h3>
              <p className="text-gray-600">States</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-600">100+</h3>
              <p className="text-gray-600">Spices</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-orange-600">50+</h3>
              <p className="text-gray-600">Festivals</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="relative h-[520px] w-[520px] overflow-hidden rounded-full border-8 border-white shadow-2xl">
            <Image
              src="/images/hero/hero-food.jpg"
              alt="Traditional Indian Food"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-8 left-0 rounded-2xl bg-white p-5 shadow-xl">
            <p className="text-sm text-gray-500">
              Recipe of the Day
            </p>

            <h4 className="mt-2 text-lg font-bold text-gray-900">
              Dal Baati Churma
            </h4>

            <p className="text-sm text-orange-600">
              Rajasthan • Traditional
            </p>
          </div>

          {/* Floating Badge */}
          <div className="absolute right-4 top-10 rounded-full bg-orange-600 px-6 py-3 text-white shadow-xl">
            ❤️ Homemade
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96V120H1360C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120H0Z"
        />
      </svg>
    </section>
  );
}