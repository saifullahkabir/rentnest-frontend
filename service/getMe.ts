"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore.toString();

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  const result = await res.json();

  return result;
};
