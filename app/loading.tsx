"use client";

import React from "react";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-52 w-52 rounded-full bg-amber-300 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-300 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 blur-[120px]" />
      </div>

      {/* Decorative Borders */}
      <div className="pointer-events-none absolute left-6 top-6 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-amber-700" />
      <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-tr-3xl border-r-4 border-t-4 border-amber-700" />
      <div className="pointer-events-none absolute bottom-6 left-6 h-24 w-24 rounded-bl-3xl border-b-4 border-l-4 border-amber-700" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-amber-700" />

      <section className="relative z-10 flex w-full max-w-2xl flex-col items-center rounded-3xl border border-amber-200 bg-white/80 p-12 shadow-2xl backdrop-blur-xl">

        {/* Logo */}
        <div className="relative mb-10">

          <div className="absolute inset-0 animate-ping rounded-full bg-amber-300 opacity-30" />

          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-amber-300 bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50 shadow-xl">

            <span className="text-6xl">🍲</span>

          </div>

        </div>

        {/* Circular Spinner */}
        <div className="relative mb-8 h-24 w-24">

          <div className="absolute inset-0 rounded-full border-[6px] border-amber-200" />

          <div className="absolute inset-0 animate-spin rounded-full border-[6px] border-transparent border-t-amber-800 border-r-orange-600" />

          <div className="absolute inset-3 rounded-full bg-white shadow-inner" />

        </div>

        {/* Brand Name */}
        <h1 className="bg-gradient-to-r from-amber-900 via-orange-700 to-amber-600 bg-clip-text text-center text-5xl font-black tracking-wide text-transparent">
          Timeless Tadka
        </h1>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">

          <div className="h-px w-20 bg-amber-400" />

          <span className="text-amber-700 text-xl">
            ✦
          </span>

          <div className="h-px w-20 bg-amber-400" />

        </div>

        {/* Tagline */}
        <p className="max-w-xl text-center text-lg leading-8 text-amber-800">

          Bringing Emotional Homemade Recipes,
          <br />
          Authentic Spices &
          <br />
          Timeless Indian Traditions Back to Life.

        </p>

        {/* Quote */}
        <blockquote className="mt-8 max-w-lg text-center italic text-gray-600">

          "Where Every Recipe Tells a Story.
          Every Tradition Lives Forever."

        </blockquote>

        {/* Progress */}
        <div className="mt-12 w-full">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm font-semibold uppercase tracking-widest text-amber-700">
              Preparing Your Experience
            </span>

            <span className="text-sm text-gray-500">
              Loading...
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-amber-200">

            <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-amber-700 via-orange-500 to-yellow-400" />

          </div>

        </div>

        {/* Loading Dots */}
        <div className="mt-10 flex items-center gap-4">

          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-700" />

          <span className="h-3 w-3 animate-bounce rounded-full bg-orange-600 [animation-delay:0.2s]" />

          <span className="h-3 w-3 animate-bounce rounded-full bg-yellow-600 [animation-delay:0.4s]" />

          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-700 [animation-delay:0.6s]" />

        </div>

        {/* Footer Text */}
        <div className="mt-12 space-y-2 text-center">

          <p className="text-lg font-semibold text-amber-900">
            Preparing Authentic Flavors...
          </p>

          <p className="text-sm leading-7 text-gray-600">

            Discover India's rich culinary heritage,
            forgotten family recipes,
            traditional spices,
            festival delicacies,
            and timeless stories passed down through generations.

          </p>

        </div>

        {/* Bottom Decorative Icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-3xl">

          <span className="animate-pulse">🥘</span>
          <span className="animate-pulse [animation-delay:0.2s]">🌶️</span>
          <span className="animate-pulse [animation-delay:0.4s]">🫓</span>
          <span className="animate-pulse [animation-delay:0.6s]">🍛</span>
          <span className="animate-pulse [animation-delay:0.8s]">🥥</span>
          <span className="animate-pulse [animation-delay:1s]">🧄</span>

        </div>

      </section>
    </main>
  );
}