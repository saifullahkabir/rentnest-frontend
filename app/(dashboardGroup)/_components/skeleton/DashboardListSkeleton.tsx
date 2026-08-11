import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardListSkeleton() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* ================= Header Skeleton ================= */}
      <div className="mb-8 space-y-3">
        <Skeleton className="h-8 w-56 sm:h-9" />

        <Skeleton className="h-4 w-80 max-w-full" />
      </div>

      {/* ================= List Skeleton ================= */}
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            <div className="flex min-h-60 flex-col sm:flex-row">
              {/* ================= Image ================= */}
              <Skeleton className="h-52 w-full shrink-0 rounded-none sm:h-auto sm:w-64 lg:w-72" />

              {/* ================= Content ================= */}
              <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1 space-y-2">
                    {/* Title */}
                    <Skeleton className="h-6 w-3/4" />

                    {/* Location */}
                    <Skeleton className="h-4 w-1/2" />

                    {/* Rent */}
                    <Skeleton className="mt-2 h-6 w-28" />
                  </div>

                  {/* Status */}
                  <Skeleton className="h-7 w-24 shrink-0 rounded-full" />
                </div>

                {/* ================= Property Details ================= */}
                <div className="mt-4 grid grid-cols-3 rounded-xl border py-3">
                  {/* Bedrooms */}
                  <div className="flex justify-center">
                    <Skeleton className="h-8 w-16" />
                  </div>

                  {/* Bathrooms */}
                  <div className="flex justify-center border-x">
                    <Skeleton className="h-8 w-16" />
                  </div>

                  {/* Move-in */}
                  <div className="flex justify-center">
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>

                {/* ================= Message ================= */}
                <Skeleton className="mt-3 h-10 w-full rounded-xl" />

                {/* ================= Bottom ================= */}
                <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Submitted */}
                  <Skeleton className="h-4 w-32" />

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-28 rounded-lg" />

                    <Skeleton className="h-9 w-28 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
