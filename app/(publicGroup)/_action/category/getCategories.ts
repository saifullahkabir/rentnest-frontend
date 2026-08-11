"use server";

export const getCategories = async () => {
  const start = performance.now();
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    cache: "no-store",
  });

  const result = await res.json();

   console.log(
    "getCategories:",
    Math.round(performance.now() - start),
    "ms"
  );

  return result;
};
