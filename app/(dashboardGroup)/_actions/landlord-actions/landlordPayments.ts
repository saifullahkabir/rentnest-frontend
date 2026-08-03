"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";

export const getLandlordPayments = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/landlord`,
    {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    },
  );

  const result = await res.json();

  console.log('payments', result);

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to retrieve payments.",
      data: [],
    };
  }

  return result;
};
