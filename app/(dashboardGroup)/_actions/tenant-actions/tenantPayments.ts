"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";

export interface ICreatePayment {
  rentalRequestId: string;
}

export const createPayment = async (payload: ICreatePayment) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/payments/create`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to create payment.",
      data: null,
    };
  }

  return result;
};
