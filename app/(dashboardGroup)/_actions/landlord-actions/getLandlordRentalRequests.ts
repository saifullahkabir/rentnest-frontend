import { isAccessTokenExist } from "@/service/isAccessTokenExist";

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
