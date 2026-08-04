"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";

export const getMyRentalRequests = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rental-requests/my-requests`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to fetch rental requests.",
      data: [],
    };
  }

  return result;
};
