"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";
import { revalidatePath } from "next/cache";

export const getLandlordRentalRequests = async () => {
  const accessToken = await isAccessTokenExist();
  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rental-requests/landlord`,
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
    throw new Error(result.message || "Failed to fetch rental requests.");
  }
  return result;
};

export type RentalRequestStatus = "APPROVED" | "REJECTED";

export const updateRentalRequestStatus = async (
  requestId: string,
  status: RentalRequestStatus,
) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/rental-requests/landlord/${requestId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({
        status,
      }),
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    throw new Error(
      result.message || "Failed to update rental request status.",
    );
  }

  // Refresh this dashboard route's server-rendered data
  revalidatePath("/dashboard/landlord/rental-requests");

  return result;
};
