"use server";

import { PropertyReviewsResponse } from "@/lib/types/property";

export async function getPropertyReviews(
  propertyId: string,
): Promise<PropertyReviewsResponse> {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/reviews/property/${propertyId}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  const result = await res.json();

  return result.data;
}
