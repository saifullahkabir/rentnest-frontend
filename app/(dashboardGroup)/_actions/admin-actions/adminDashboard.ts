"use server";

import { isAccessTokenExist } from "@/service/isAccessTokenExist";

export const getAllAdminUsers = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/users`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to retrieve users.",
      data: [],
    };
  }

  return result;
};

export const getAllAdminRentalRequests = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/rentals`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to retrieve rental requests.",
      data: [],
    };
  }

  return result;
};

export const getAllAdminProperties = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/properties`,
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
      message: result.message || "Failed to retrieve rental requests.",
      data: [],
    };
  }

  return result;
};

export const getAllAdminPayments = async () => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/admin/payments`, {
    method: "GET",
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to retrieve rental requests.",
      data: [],
    };
  }

  return result;
};

export const updateAdminUserStatus = async (
  userId: string,
  status: "ACTIVE" | "BLOCKED",
) => {
  const accessToken = await isAccessTokenExist();

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/admin/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${accessToken}`,
      },
      body: JSON.stringify({ status }),
      cache: "no-store",
    },
  );

  const result = await res.json();

  if (!res.ok || !result.success) {
    return {
      success: false,
      message: result.message || "Failed to update user status.",
      data: [],
    };
  }

  return result;
};
