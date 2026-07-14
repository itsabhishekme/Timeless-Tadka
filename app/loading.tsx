"use client";

import React from "react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-amber-50">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-amber-200"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-amber-700 border-r-amber-500"></div>
        </div>

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide text-amber-900">
            Timeless Tadka
          </h1>

          <p className="mt-2 text-sm text-amber-700">
            Bringing Emotional Homemade Recipes,
            <br />
            Authentic Spices &amp; Timeless Indian Traditions Back to Life
          </p>
        </div>

        {/* Loading */}
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-amber-700"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-amber-700 [animation-delay:0.2s]"></span>
          <span className="h-2 w-2 animate-bounce rounded-full bg-amber-700 [animation-delay:0.4s]"></span>
        </div>

        <p className="text-sm text-gray-600">
          Preparing authentic flavors...
        </p>
      </div>
    </main>
  );
}