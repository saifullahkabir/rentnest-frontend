"use server";

import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

type LoginPayload = {
  email: string;
  password: string;
};

export const loginAction = async (
  payload: LoginPayload,
  redirectTo?: string,
) => {
  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!result.success) {
    return {
      success: false,
      message: result.message || "Login failed",
    };
  }

  const cookieStore = await cookies();

  cookieStore.set("accessToken", result.data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
  });

  cookieStore.set("refreshToken", result.data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

  // If user was redirected to login from a protected page,
  // send them back to that page after successful login.
  if (
    redirectTo &&
    typeof redirectTo === "string" &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
  ) {
    redirect(redirectTo);
  }

  // Otherwise redirect according to user role.
  if (decodedToken?.role === "TENANT") {
    redirect("/dashboard/tenant");
  }

  if (decodedToken?.role === "LANDLORD") {
    redirect("/dashboard/landlord");
  }

  if (decodedToken?.role === "ADMIN") {
    redirect("/dashboard/admin");
  }

  return {
    success: true,
    message: result.message || "Login successful",
  };
};
