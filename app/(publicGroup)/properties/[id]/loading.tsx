export default function PropertyDetailsLoading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="animate-pulse space-y-8 md:space-y-10">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border bg-card">
          <div className="h-[280px] bg-muted sm:h-[380px] lg:h-[480px]" />

          <div className="space-y-4 p-6">
            <div className="h-8 w-3/4 rounded-lg bg-muted" />
            <div className="h-5 w-1/3 rounded-lg bg-muted" />
          </div>
        </section>

        {/* Content + Rental Card */}
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Left */}
          <div className="space-y-8">
            {/* Overview */}
            <section className="rounded-2xl border bg-card p-6">
              <div className="h-6 w-32 rounded-md bg-muted" />

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-20 rounded-xl bg-muted" />
                ))}
              </div>
            </section>

            {/* Description */}
            <section className="rounded-2xl border bg-card p-6">
              <div className="h-6 w-40 rounded-md bg-muted" />

              <div className="mt-5 space-y-3">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-5/6 rounded bg-muted" />
                <div className="h-4 w-2/3 rounded bg-muted" />
              </div>
            </section>

            {/* Landlord */}
            <section className="rounded-2xl border bg-card p-6">
              <div className="h-6 w-32 rounded-md bg-muted" />

              <div className="mt-5 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-muted" />

                <div className="space-y-2">
                  <div className="h-4 w-32 rounded bg-muted" />
                  <div className="h-3 w-44 rounded bg-muted" />
                </div>
              </div>
            </section>

            {/* Reviews */}
            <section className="rounded-2xl border bg-card p-6">
              <div className="h-6 w-32 rounded-md bg-muted" />

              <div className="mt-5 space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="rounded-xl border p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-muted" />

                      <div className="space-y-2">
                        <div className="h-4 w-28 rounded bg-muted" />
                        <div className="h-3 w-20 rounded bg-muted" />
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="h-3 w-full rounded bg-muted" />
                      <div className="h-3 w-4/5 rounded bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Rental Card */}
          <aside>
            <div className="sticky top-24 rounded-2xl border bg-card p-6">
              <div className="h-8 w-32 rounded-md bg-muted" />

              <div className="mt-6 space-y-4">
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
                <div className="h-12 w-full rounded-xl bg-muted" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
