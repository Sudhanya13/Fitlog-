import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Dumbbell className="h-7 w-7 text-white/80" />
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/40">
          Fitlog
        </p>

        <h1 className="mt-4 text-8xl font-black tracking-tighter sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          Workout not found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/50 sm:text-base">
          Looks like this workout has left the gym. The page you're looking for
          doesn't exist or may have been removed.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Workouts
          </Link>
        </div>
      </div>
    </main>
  );
}
