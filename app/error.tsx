"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: Readonly<ErrorProps>) {
  useEffect(() => {
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.error(" Timeless Tadka Application Error");
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.error(error);
    console.error("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  }, [error]);

  const errorTime = useMemo(
    () =>
      new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
        timeStyle: "medium",
      }).format(new Date()),
    []
  );

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-orange-100 px-6 py-16">
      {/* Background Decorations */}

      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-amber-300 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-orange-300 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200 blur-[120px]" />
      </div>

      <section className="relative z-10 w-full max-w-4xl rounded-3xl border border-amber-200 bg-white/80 p-10 shadow-2xl backdrop-blur-lg">
        {/* Badge */}

        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-red-200 bg-red-100 px-5 py-2 text-sm font-semibold tracking-wide text-red-700 shadow-sm">
            🚨 Unexpected Application Error
          </span>
        </div>

        {/* Error Number */}

        <div className="mt-10 text-center">
          <h1 className="bg-gradient-to-r from-amber-700 via-orange-600 to-red-600 bg-clip-text text-8xl font-black tracking-tight text-transparent">
            Oops!
          </h1>

          <h2 className="mt-4 text-4xl font-bold text-stone-900">
            Something went wrong.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            An unexpected issue interrupted your experience while browsing
            <strong className="text-amber-700">
              {" "}
              Timeless Tadka
            </strong>
            .
            <br />
            Don't worry—our kitchen is still cooking delicious traditions.
            Refresh the page or return home and continue exploring authentic
            Indian recipes.
          </p>
        </div>

        {/* Information Grid */}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-4 text-4xl">🍲</div>

            <h3 className="text-lg font-bold text-stone-900">
              Recipes Safe
            </h3>

            <p className="mt-2 text-sm leading-7 text-stone-600">
              Your browsing experience is protected. No recipe or data has been
              lost.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-4 text-4xl">🌶️</div>

            <h3 className="text-lg font-bold text-stone-900">
              Kitchen Running
            </h3>

            <p className="mt-2 text-sm leading-7 text-stone-600">
              Most parts of the website continue to work normally while this
              page reloads.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="mb-4 text-4xl">❤️</div>

            <h3 className="text-lg font-bold text-stone-900">
              Heritage Protected
            </h3>

            <p className="mt-2 text-sm leading-7 text-stone-600">
              Every recipe and tradition remains safely preserved for future
              generations.
            </p>
          </div>
        </div>

        {/* Development Mode */}

        {process.env.NODE_ENV === "development" && (
          <section className="mt-12 rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="mb-4 text-xl font-bold text-red-700">
              Development Information
            </h3>

            <div className="space-y-4">
              <div>
                <p className="mb-2 font-semibold text-red-700">
                  Error Message
                </p>

                <pre className="overflow-auto rounded-lg bg-white p-4 text-sm text-red-600">
                  {error.message}
                </pre>
              </div>

              {error.stack && (
                <div>
                  <p className="mb-2 font-semibold text-red-700">
                    Stack Trace
                  </p>

                  <pre className="max-h-80 overflow-auto rounded-lg bg-white p-4 text-xs text-red-600">
                    {error.stack}
                  </pre>
                </div>
              )}

              {error.digest && (
                <div className="rounded-lg bg-white p-4">
                  <p className="font-semibold text-red-700">
                    Error Digest
                  </p>

                  <code className="text-sm text-red-600">
                    {error.digest}
                  </code>
                </div>
              )}

              <div className="rounded-lg bg-white p-4">
                <p className="font-semibold text-red-700">
                  Timestamp
                </p>

                <code className="text-sm text-red-600">
                  {errorTime}
                </code>
              </div>
            </div>
          </section>
        )}

        {/* Suggestions */}

        <section className="mt-12 rounded-2xl bg-stone-100 p-8">
          <h3 className="text-2xl font-bold text-stone-900">
            You can try the following:
          </h3>

          <ul className="mt-6 space-y-3 text-stone-700">
            <li>• Refresh the current page.</li>
            <li>• Return to the homepage.</li>
            <li>• Browse another recipe category.</li>
            <li>• Check your internet connection.</li>
            <li>• Try again after a few moments.</li>
          </ul>
        </section>

        {/* Action Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <button
            onClick={reset}
            className="rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            🔄 Try Again
          </button>

          <Link
            href="/"
            className="rounded-xl border border-stone-300 bg-white px-8 py-4 text-lg font-semibold text-stone-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-stone-100"
          >
            🏠 Return Home
          </Link>

          <Link
            href="/recipes"
            className="rounded-xl border border-amber-300 bg-amber-50 px-8 py-4 text-lg font-semibold text-amber-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-100"
          >
            🍛 Browse Recipes
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-green-300 bg-green-50 px-8 py-4 text-lg font-semibold text-green-700 shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-100"
          >
            📩 Contact Us
          </Link>
        </div>

        {/* Footer */}

        <div className="mt-16 border-t border-stone-200 pt-8 text-center">
          <p className="text-lg font-semibold text-stone-900">
            Timeless Tadka
          </p>

          <p className="mt-2 text-stone-600 italic">
            Where Every Recipe Tells a Story. Every Tradition Lives Forever.
          </p>

          <p className="mt-6 text-sm text-stone-500">
            © {new Date().getFullYear()} Timeless Tadka. Preserving India's
            Culinary Heritage.
          </p>
        </div>
      </section>
    </main>
  );
}