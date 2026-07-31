"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();
  console.log("cookieStore===>", cookieStore);
  const cookieHeader = cookieStore.toString();
  console.log("cookieHeader", cookieHeader);

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
  });

  const result = await res.json();

  return result;
};
