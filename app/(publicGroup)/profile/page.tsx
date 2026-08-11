import type { Metadata } from "next";
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { getMe } from "@/service/getMe";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile | RentNest",
  description: "View and manage your RentNest profile.",
};

type UserRole = "ADMIN" | "LANDLORD" | "TENANT";

type UserStatus = "ACTIVE" | "BLOCKED";

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  phone: string | null;
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
};

type GetMeResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: User;
};

const roleConfig: Record<
  UserRole,
  {
    label: string;
    description: string;
    className: string;
  }
> = {
  ADMIN: {
    label: "Administrator",
    description: "Platform administrator",
    className:
      "border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },

  LANDLORD: {
    label: "Landlord",
    description: "Property owner",
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },

  TENANT: {
    label: "Tenant",
    description: "Property seeker",
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

const getInitials = (name: string) => {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
};

export default async function ProfilePage() {
  const result = (await getMe()) as GetMeResponse | null;

  /*
   * User is not logged in or profile could not be loaded.
   */
  if (!result?.success || !result.data) {
    return (
      <main className="min-h-[calc(100vh-4rem)] bg-muted/20">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-card p-10 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <UserRound className="h-7 w-7" />
            </div>

            <h1 className="mt-5 text-xl font-semibold">
              Unable to load profile
            </h1>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              We could not retrieve your profile information. Please try again
              later.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const user = result.data;

  const role = roleConfig[user.role];

  const initials = getInitials(user.name);

  const isActive = user.status === "ACTIVE";

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* PAGE HEADER */}

        <div className="mb-8">
          <p className="text-sm font-medium text-primary">Account Settings</p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            View your personal information, account role, and account status.
          </p>
        </div>

        {/* PROFILE CARD */}

        <section className="overflow-hidden rounded-3xl border bg-card shadow-sm">
          {/* COVER */}

          <div className="relative h-32 overflow-hidden bg-linear-to-r from-primary/20 via-primary/5 to-transparent sm:h-40">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          </div>

          {/* PROFILE HEADER */}

          <div className="relative px-5 pb-7 sm:px-8">
            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
              {/* Avatar + Name */}

              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                {/* Avatar */}

                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-4 border-card bg-muted shadow-lg sm:h-32 sm:w-32">
                  {user.profileImage ? (
                    <Image
                      src={user.profileImage}
                      alt={`${user.name}'s profile`}
                      width={50}
                      height={50}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10 text-3xl font-bold text-primary">
                      {initials}
                    </div>
                  )}
                </div>

                {/* User Name */}

                <div className="pb-1">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {user.name}
                  </h2>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </div>

              {/* Account Status */}

              <div className="pb-1">
                <div
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    isActive
                      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-emerald-500" : "bg-red-500"
                    }`}
                  />

                  {user.status}
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER */}

          <div className="border-t" />

          {/* BASIC INFORMATION */}

          <div className="p-5 sm:p-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Personal Information</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Your basic account information associated with RentNest.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Email */}

              <div className="rounded-2xl border bg-muted/20 p-5 transition-colors hover:bg-muted/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}

              <div className="rounded-2xl border bg-muted/20 p-5 transition-colors hover:bg-muted/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Phone Number
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {user.phone || "Not added yet"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Role */}

              <div className="rounded-2xl border bg-muted/20 p-5 transition-colors hover:bg-muted/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Account Role
                    </p>

                    <div className="mt-2">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${role.className}`}
                      >
                        {role.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}

              <div className="rounded-2xl border bg-muted/20 p-5 transition-colors hover:bg-muted/40">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Account Status
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {isActive
                        ? "Your account is active"
                        : "Your account is currently blocked"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ACCOUNT INFORMATION */}

          <div className="border-t px-5 py-7 sm:px-8">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Account Information</h3>

              <p className="mt-1 text-sm text-muted-foreground">
                Important dates related to your RentNest account.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Member Since */}

              <div className="flex items-center gap-4 rounded-2xl border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <CalendarDays className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Member Since</p>

                  <p className="mt-1 text-sm font-semibold">
                    {formatDate(user.createdAt)}
                  </p>
                </div>
              </div>

              {/* Last Updated */}

              <div className="flex items-center gap-4 rounded-2xl border bg-background p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                  <CalendarDays className="h-5 w-5 text-muted-foreground" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">Last Updated</p>

                  <p className="mt-1 text-sm font-semibold">
                    {formatDate(user.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROLE INFORMATION */}
          <div className="border-t bg-muted/20 px-5 py-6 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold">{role.label} Account</p>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Your available features and dashboard experience are
                  determined by your current account role.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
