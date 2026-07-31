import { Skeleton } from "@/components/ui/skeleton";

export default function PropertySkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      {/* Image */}
      <Skeleton className="h-56 w-full" />

      <div className="space-y-4 p-5">
        {/* Category */}
        <Skeleton className="h-5 w-24 rounded-full" />

        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Location */}
        <Skeleton className="h-4 w-1/2" />

        {/* Bedrooms & Bathrooms */}
        <div className="flex gap-4">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>

        {/* Price */}
        <Skeleton className="h-7 w-32" />

        {/* Landlord */}
        <div className="flex items-center gap-3 pt-2">
          <Skeleton className="h-10 w-10 rounded-full" />

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-36" />
          </div>
        </div>

        {/* Button */}
        <Skeleton className="mt-4 h-11 w-full rounded-xl" />
      </div>
    </div>
  );
}
