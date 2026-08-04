"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";

interface CreateRentalRequestPayload {
  propertyId: string;
  moveInDate?: string;
  message?: string;
}

export async function createRentalRequest(payload: CreateRentalRequestPayload) {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rental-requests`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to create rental request.",
      data: null,
    };
  }

  return result;
}
