import { NextRequest, NextResponse } from "next/server";

import { jwtUtils } from "@/utils/jwt";
import { getNewAccessToken } from "./service/getNewAccessToken";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];

const PUBLIC_ROUTES = ["/", "/properties"];

const ROLE_ROUTES = {
  TENANT: "/dashboard/tenant",
  LANDLORD: "/dashboard/landlord",
  ADMIN: "/dashboard/admin",
} as const;

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  //* Verify access token
  let decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string)
    : null;

  //* Verify refresh token
  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as string,
      )
    : null;

  //* Access token invalid/expired but refresh token is still valid

  if (!decodedAccessToken && decodedRefreshToken) {
    const result = await getNewAccessToken();

    if (result?.success && result.data?.accessToken) {
      const newAccessToken = result.data.accessToken;

      accessToken = newAccessToken;

      decodedAccessToken = jwtUtils.verifyToken(
        newAccessToken,
        process.env.JWT_ACCESS_SECRET as string,
      );

      const response = NextResponse.next();

      response.cookies.set("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
      });

      //* Logged-in user trying to access login/register
      if (decodedAccessToken && AUTH_ROUTES.includes(pathname)) {
        const role = decodedAccessToken.role;

        const dashboardRoute = ROLE_ROUTES[role];

        if (dashboardRoute) {
          return NextResponse.redirect(new URL(dashboardRoute, request.url));
        }
      }

      //* Protected dashboard route
      if (decodedAccessToken) {
        const role = decodedAccessToken.role;

        if (pathname.startsWith("/dashboard/tenant") && role !== "TENANT") {
          return NextResponse.redirect(new URL("/not-found", request.url));
        }

        if (pathname.startsWith("/dashboard/landlord") && role !== "LANDLORD") {
          return NextResponse.redirect(new URL("/not-found", request.url));
        }

        if (pathname.startsWith("/dashboard/admin") && role !== "ADMIN") {
          return NextResponse.redirect(new URL("/not-found", request.url));
        }
      }

      return response;
    }
  }

  //* If access token is invalid and refresh token is also invalid/missing
  if (!decodedAccessToken) {
    accessToken = undefined;
  }

  //* User role
  const userRole = decodedAccessToken?.role ?? null;

  //* Logged-in user trying to access login/register
  if (decodedAccessToken && AUTH_ROUTES.includes(pathname)) {
    const dashboardRoute = ROLE_ROUTES[decodedAccessToken.role];

    if (dashboardRoute) {
      return NextResponse.redirect(new URL(dashboardRoute, request.url));
    }

    return NextResponse.redirect(new URL("/", request.url));
  }

  //* Public route check
  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  //* Auth route check
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );

  //* Protected pages
  if (!decodedAccessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/auth/login", request.url);

    loginUrl.searchParams.set("redirectTo", pathname);

    return NextResponse.redirect(loginUrl);
  }

  //* Role based access control

  if (pathname.startsWith("/dashboard/tenant") && userRole !== "TENANT") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (pathname.startsWith("/dashboard/landlord") && userRole !== "LANDLORD") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  if (pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
