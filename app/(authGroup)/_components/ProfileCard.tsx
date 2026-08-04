"use client";

import Image from "next/image";
import {
  ShieldCheck,
  UserRound,
  Mail,
  CircleCheck,
  CircleX,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProfileCardProps = {
  user: {
    name: string;
    email: string;
    profileImage?: string | null;
    role: "TENANT" | "LANDLORD" | "ADMIN";
    status: "ACTIVE" | "BLOCKED";
  };
};

const roleConfig = {
  TENANT: {
    label: "Tenant",
    className:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400",
    icon: UserRound,
  },

  LANDLORD: {
    label: "Landlord",
    className:
      "border-purple-200 bg-purple-50 text-purple-700 dark:border-purple-900/50 dark:bg-purple-950/30 dark:text-purple-400",
    icon: ShieldCheck,
  },

  ADMIN: {
    label: "Admin",
    className:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",
    icon: ShieldCheck,
  },
} as const;

export default function ProfileCard({ user }: ProfileCardProps) {
  const role = roleConfig[user.role];
  const RoleIcon = role.icon;

  const isActive = user.status === "ACTIVE";

  return (
    <Card className="overflow-hidden rounded-2xl shadow-sm">
      <CardHeader className="border-b bg-muted/30">
        <CardTitle className="text-lg">My Profile</CardTitle>
      </CardHeader>

      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Profile Image */}
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border bg-muted">
            {user.profileImage ? (
              <Image
                src={user.profileImage}
                alt={user.name}
                fill
                className="object-cover"
                sizes="96px"
                unoptimized
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <UserRound className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-xl font-bold tracking-tight">
              {user.name}
            </h2>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0" />

              <span className="truncate">{user.email}</span>
            </div>

            {/* Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {/* Role */}
              <Badge variant="outline" className={`gap-1.5 ${role.className}`}>
                <RoleIcon className="h-3.5 w-3.5" />
                {role.label}
              </Badge>

              {/* Status */}
              {isActive ? (
                <Badge
                  variant="outline"
                  className="gap-1.5 border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400"
                >
                  <CircleCheck className="h-3.5 w-3.5" />
                  Active
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="gap-1.5 border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                >
                  <CircleX className="h-3.5 w-3.5" />
                  Blocked
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
