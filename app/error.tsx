"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6">
      <div className="max-w-2xl text-center">
        <span className="inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-700">
          Something went wrong
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight text-stone-900">
          Oops!
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-stone-700">
          We couldn't load this page.
        </h2>

        <p className="mt-6 text-lg leading-8 text-stone-600">
          An unexpected error occurred while loading Timeless Tadka.
          Don't worry—our kitchen is still cooking. You can try
          again or return to the homepage.
        </p>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-left">
            <h3 className="mb-2 font-semibold text-red-700">
              Development Error
            </h3>

            <pre className="overflow-auto whitespace-pre-wrap break-words text-sm text-red-600">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-3 text-xs text-red-500">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="rounded-lg bg-amber-600 px-6 py-3 font-medium text-white transition hover:bg-amber-700"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-lg border border-stone-300 px-6 py-3 font-medium text-stone-700 transition hover:bg-stone-100"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}