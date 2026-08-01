import { isAccessTokenExist } from "@/service/isAccessTokenExist";

export const getMe = async () => {
  const accessToken = await isAccessTokenExist();

  // User is not logged in
  if (!accessToken) {
    return null;
  }

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
      cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      return null;
    }

    return result;
  } catch {
    return null;
  }
};
