"use server";

export const getCategories = async () => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/categories`, {
    cache: "force-cache",
  });

  const result = await res.json();

  return result;
};
