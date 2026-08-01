"use server";

import { cookies } from "next/headers";
import { jwtUtils } from "@/utils/jwt";
import { getNewAccessToken } from "./getNewAccessToken";

export const isAccessTokenExist = async () => {
  const cookieStore = await cookies();

  let accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!accessToken && !refreshToken) {
    return {
      success: false,
      message: "User not logged in!",
    };
  }

  const decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  // Access token expired/invalid, but refresh token valid
  if (!decodedAccessToken && decodedRefreshToken) {
    const result = await getNewAccessToken();

    if (result?.success && result.data?.accessToken) {
      const newAccessToken = result.data.accessToken;

      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });

      accessToken = newAccessToken;
    }
  }

  return accessToken ?? null;
};
