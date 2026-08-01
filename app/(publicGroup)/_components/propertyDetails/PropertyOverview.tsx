import { Bath, BedDouble, CheckCircle2, MapPin, Star } from "lucide-react";

import { Property, PropertyReviewsResponse } from "@/lib/types/property";

interface PropertyOverviewProps {
  property: Property;
  reviews: PropertyReviewsResponse;
}

export default function PropertyOverview({
  property,
  reviews,
}: PropertyOverviewProps) {
  const isAvailable = property.availability === "AVAILABLE";

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {property.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-primary" />

          <span>{property.location}</span>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border bg-card p-4">
          <BedDouble className="h-5 w-5 text-primary" />

          <p className="mt-3 text-xl font-bold">{property.bedrooms}</p>

          <p className="text-sm text-muted-foreground">Bedrooms</p>
        </div>

        <div className="rounded-2xl border bg-card p-4">
          <Bath className="h-5 w-5 text-primary" />

          <p className="mt-3 text-xl font-bold">{property.bathrooms}</p>

          <p className="text-sm text-muted-foreground">Bathrooms</p>
        </div>

        <div className="rounded-2xl border bg-card p-4">
          <CheckCircle2 className="h-5 w-5 text-primary" />

          <p className="mt-3 text-xl font-bold">{isAvailable ? "Yes" : "No"}</p>

          <p className="text-sm text-muted-foreground">Available</p>
        </div>

        <div className="rounded-2xl border bg-card p-4">
          <Star className="h-5 w-5 text-yellow-500" />

          <p className="mt-3 text-xl font-bold">
            {reviews.totalReviews > 0 ? reviews.averageRating.toFixed(1) : "—"}
          </p>

          <p className="text-sm text-muted-foreground">Rating</p>
        </div>
      </div>
    </div>
  );
}
