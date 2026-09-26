import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
          Fitlog
        </p>

        <h1 className="mt-6 text-8xl font-black tracking-tight">404</h1>

        <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
          Workout not found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
          The page or workout you are looking for doesn't exist or may have been
          removed.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-gray-200"
          >
            Go to Home
          </Link>

          <Link
            href="/my-plan"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            My Plan
          </Link>
        </div>
      </div>
    </main>
  );
}
