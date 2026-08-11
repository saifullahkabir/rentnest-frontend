type AdminTableSkeletonProps = {
  rows?: number;
  titleWidth?: string;
  descriptionWidth?: string;
};

export default function AdminTableSkeleton({
  rows = 12,
  titleWidth = "w-40",
  descriptionWidth = "w-72",
}: AdminTableSkeletonProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Page Header Skeleton */}
      <div className="mb-8 space-y-3">
        <div
          className={`h-8 ${titleWidth} animate-pulse rounded-md bg-muted sm:h-9`}
        />

        <div
          className={`h-4 ${descriptionWidth} animate-pulse rounded-md bg-muted`}
        />
      </div>

      {/* Table Skeleton */}
      <div className="rounded-2xl border bg-card shadow-sm">
        {/* Table Top Bar */}
        <div className="border-b px-5 py-4">
          <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            {/* Header */}
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="px-5 py-3 text-left">
                  <div className="h-4 w-20 animate-pulse rounded bg-muted" />
                </th>

                <th className="px-5 py-3 text-left">
                  <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                </th>

                <th className="px-5 py-3 text-left">
                  <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                </th>

                <th className="px-5 py-3 text-left">
                  <div className="h-4 w-20 animate-pulse rounded bg-muted" />
                </th>

                <th className="px-5 py-3 text-left">
                  <div className="h-4 w-16 animate-pulse rounded bg-muted" />
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <tbody>
              {Array.from({ length: rows }).map((_, index) => (
                <tr key={index} className="border-b last:border-0">
                  {/* User / Main */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 shrink-0 animate-pulse rounded-full bg-muted" />

                      <div className="space-y-2">
                        <div className="h-4 w-28 animate-pulse rounded bg-muted" />

                        <div className="h-3 w-20 animate-pulse rounded bg-muted/70" />
                      </div>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-5 py-4">
                    <div className="h-4 w-40 animate-pulse rounded bg-muted" />
                  </td>

                  {/* Role */}
                  <td className="px-5 py-4">
                    <div className="h-6 w-20 animate-pulse rounded-lg bg-muted" />
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <div className="h-9 w-24 animate-pulse rounded-lg bg-muted" />
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4">
                    <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
