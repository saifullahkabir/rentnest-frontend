"use server";

export const getFeaturedProperties = async () => {
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties?limit=6&sortBy=createdAt&sortOrder=desc`,
  );

  const result = await res.json();

  return result;
};
