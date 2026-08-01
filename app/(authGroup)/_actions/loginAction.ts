"use server";

import { cookies } from "next/headers";

type LoginPayload = {
  email: string;
  password: string;
};

export const loginAction = async (payload: LoginPayload) => {
  try {
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
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return {
      success: true,
      message: result.message || "Login successful",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
