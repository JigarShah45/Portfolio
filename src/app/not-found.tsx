import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-neutral-900 dark:text-white">
          404
        </h1>
        <p className="mt-4 text-lg text-neutral-500 dark:text-neutral-400">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition-colors font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
