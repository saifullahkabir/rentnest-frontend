"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";

export type PropertyFormData = {
  title: string;
  description: string;
  rentAmount: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  categoryId: string;
  availability: "AVAILABLE" | "UNAVAILABLE";
};

export const getLandlordProperties = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/landlord`,
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
      message: result.message || "Failed to fetch your properties.",
      data: [],
    };
  }

  return result;
};

export const createProperty = async (data: PropertyFormData) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/landlord`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(data),
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to create property.",
      data: null,
    };
  }

  return result;
};

export const updateProperty = async (
  propertyId: string,
  data: PropertyFormData,
) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/landlord/${propertyId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify(data),
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to update property.",
      data: null,
    };
  }

  return result;
};

export const deleteProperty = async (propertyId: string) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/properties/landlord/${propertyId}`,
    {
      method: "DELETE",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to delete property.",
      data: null,
    };
  }

  return result;
};
