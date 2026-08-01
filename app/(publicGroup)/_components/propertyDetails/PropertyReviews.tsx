import Image from "next/image";
import {
  MessageSquare,
  Star,
} from "lucide-react";

import { PropertyReview } from "@/lib/types/property";

interface PropertyReviewsProps {
  reviews: PropertyReview[];
}

export default function PropertyReviews({
  reviews,
}: PropertyReviewsProps) {
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) /
        reviews.length
      : 0;

  return (
    <div className="rounded-2xl border bg-card p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-primary">
            Tenant feedback
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Reviews
          </h2>
        </div>

        {reviews.length > 0 && (
          <div className="flex w-fit items-center gap-1 rounded-full bg-muted px-3 py-1.5 text-sm font-medium">
            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />

            <span>{averageRating.toFixed(1)}</span>

            <span className="text-muted-foreground">
              ({reviews.length})
            </span>
          </div>
        )}
      </div>

      {/* Empty */}
      {reviews.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed py-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
          </div>

          <h3 className="mt-4 font-semibold">
            No reviews yet
          </h3>

          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Reviews from tenants will appear here once someone
            has rented this property.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl border p-4 sm:p-5"
            >
              <div className="flex items-start gap-3">
                {/* Tenant Image */}
                {review.tenant.profileImage ? (
                  <Image
                    src={review.tenant.profileImage}
                    alt={review.tenant.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                    {review.tenant.name.charAt(0).toUpperCase()}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {review.tenant.name}
                  </p>

                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating
                            ? "fill-yellow-500 text-yellow-500"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}