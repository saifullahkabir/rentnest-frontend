"use server";

import { cookies } from "next/headers";

interface CreateRentalRequestPayload {
  propertyId: string;
  moveInDate?: string;
  message?: string;
}

export async function createRentalRequest(payload: CreateRentalRequestPayload) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!accessToken && !refreshToken) {
    throw new Error("You are not logged in.");
  }

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rental-requests`,
    {
      method: "POST",
      headers: {
        Cookie: `accessToken=${accessToken}`,

        "Content-Type": "application/josn",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    throw new Error(result.message || "Failed to create rental request.");
  }

  return result;
}
