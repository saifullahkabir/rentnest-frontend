"use server";

import { IPropertyQuery } from "@/lib/types/property";

export const getProperties = async ({ query }: { query?: IPropertyQuery }) => {
  const start = performance.now();
  const params = new URLSearchParams();

  if (query?.searchTerm) {
    params.set("searchTerm", query.searchTerm);
  }

  if (query?.location) {
    params.set("location", query.location);
  }

  if (query?.categoryId) {
    params.set("categoryId", query.categoryId);
  }

  if (query?.availability) {
    params.set("availability", query.availability);
  }

  if (query?.minPrice) {
    params.set("minPrice", query.minPrice);
  }

  if (query?.maxPrice) {
    params.set("maxPrice", query.maxPrice);
  }

  if (query?.sortBy) {
    params.set("sortBy", query.sortBy);
  }

  if (query?.sortOrder) {
    params.set("sortOrder", query.sortOrder);
  }

  if (query?.page) {
    params.set("page", query.page);
  }

  if (query?.limit) {
    params.set("limit", query.limit);
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties?${params.toString()}`,
  );

  const result = await res.json();

   console.log(
    "getProperties:",
    Math.round(performance.now() - start),
    "ms"
  );

  return result;
};
