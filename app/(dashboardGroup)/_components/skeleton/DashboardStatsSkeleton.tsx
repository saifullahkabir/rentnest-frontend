import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardStatsSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* ================= Header ================= */}
      <div className="mb-8 space-y-3">
        {/* Title */}
        <Skeleton className="h-8 w-56 sm:h-9" />

        {/* Description */}
        <Skeleton className="h-4 w-80 max-w-full" />
      </div>

      {/* ================= Stats ================= */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="rounded-2xl border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              {/* Text */}
              <div className="min-w-0 flex-1 space-y-2">
                {/* Label */}
                <Skeleton className="h-4 w-24" />

                {/* Value */}
                <Skeleton className="mt-1 h-8 w-20" />
              </div>

              {/* Icon */}
              <Skeleton className="h-11 w-11 shrink-0 rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
