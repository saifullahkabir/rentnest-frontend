export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="space-y-8">
        {/* Search bar */}
        <div className="h-12 w-full animate-pulse rounded-xl bg-muted" />

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <div className="hidden space-y-4 lg:block">
            <div className="h-8 w-32 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-lg bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-lg bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-lg bg-muted" />
          </div>

          {/* Properties */}
          <div className="space-y-6">
            <div className="h-6 w-40 animate-pulse rounded bg-muted" />

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-xl border">
                  <div className="h-52 animate-pulse bg-muted" />

                  <div className="space-y-4 p-5">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />

                    <div className="h-4 w-full animate-pulse rounded bg-muted" />

                    <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />

                    <div className="h-10 w-full animate-pulse rounded-lg bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
