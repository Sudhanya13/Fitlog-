export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0D0F12] px-4 py-10 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header>
          <div className="skeleton h-10 w-48 bg-white/10 sm:h-12 sm:w-56" />

          <div className="skeleton mt-3 h-5 w-80 max-w-full bg-white/10" />
        </header>

        {/* Metrics */}
        <section className="mt-8 grid grid-cols-3 gap-3 sm:gap-5">
          {["Exercises", "Minutes", "Calories"].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#15171D] p-4 sm:p-6"
            >
              <div className="skeleton h-3 w-16 bg-white/10 sm:h-4 sm:w-20" />

              <div className="skeleton mt-4 h-8 w-12 bg-white/10 sm:h-9" />
            </div>
          ))}
        </section>

        {/* Tabs */}
        <div className="mt-10 flex w-fit rounded-xl border border-white/10 bg-[#15171D] p-1">
          <div className="skeleton h-10 w-28 rounded-lg bg-white/10 sm:w-32" />

          <div className="skeleton ml-1 h-10 w-20 rounded-lg bg-white/10 sm:w-24" />
        </div>

        {/* Loading text */}
        <div className="mt-8">
          <p className="text-sm font-semibold text-gray-400">
            Loading workouts…
          </p>
        </div>

        {/* Workout Cards */}
        <div className="mt-4 space-y-4">
          {[1, 2, 3].map((item) => (
            <article
              key={item}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171D]"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Thumbnail */}
                <div className="skeleton h-56 w-full shrink-0 rounded-none bg-white/10 sm:h-40 sm:w-64" />

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  {/* Title */}
                  <div className="skeleton h-6 w-56 bg-white/10" />

                  {/* Equipment */}
                  <div className="skeleton mt-3 h-4 w-32 bg-white/10" />

                  {/* Stats */}
                  <div className="mt-5 flex flex-wrap gap-4">
                    <div className="skeleton h-4 w-20 bg-white/10" />
                    <div className="skeleton h-4 w-24 bg-white/10" />
                    <div className="skeleton h-4 w-16 bg-white/10" />
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap justify-end gap-3">
                    <div className="skeleton h-10 w-28 rounded-xl bg-white/10" />

                    <div className="skeleton h-10 w-32 rounded-xl bg-white/10" />

                    <div className="skeleton h-10 w-10 rounded-xl bg-white/10" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
