"use client";

import {
  Users,
  ShieldCheck,
  UserRound,
  Building2,
  CheckCircle2,
  XCircle,
  ClipboardList,
  Clock3,
  Activity,
  CircleCheck,
  Wallet,
  Banknote,
} from "lucide-react";

type AdminDashboardStatsProps = {
  totalUsers: number;
  totalLandlords: number;
  totalTenants: number;

  totalProperties: number;
  availableProperties: number;
  unavailableProperties: number;

  totalRequests: number;
  pendingRequests: number;
  activeRentals: number;
  completedRentals: number;

  totalPayments: number;
  totalRevenue: number;
};

export default function AdminDashboardStats({
  totalUsers,
  totalLandlords,
  totalTenants,
  totalProperties,
  availableProperties,
  unavailableProperties,
  totalRequests,
  pendingRequests,
  activeRentals,
  completedRentals,
  totalPayments,
  totalRevenue,
}: AdminDashboardStatsProps) {
  const stats = [
    {
      label: "Total Users",
      value: totalUsers,
      icon: Users,
      className:
        "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },
    {
      label: "Landlords",
      value: totalLandlords,
      icon: ShieldCheck,
      className:
        "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    },
    {
      label: "Tenants",
      value: totalTenants,
      icon: UserRound,
      className:
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400",
    },
    {
      label: "Total Properties",
      value: totalProperties,
      icon: Building2,
      className:
        "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400",
    },
    {
      label: "Available",
      value: availableProperties,
      icon: CheckCircle2,
      className:
        "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    },
    {
      label: "Unavailable",
      value: unavailableProperties,
      icon: XCircle,
      className: "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400",
    },
    {
      label: "Total Requests",
      value: totalRequests,
      icon: ClipboardList,
      className:
        "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400",
    },
    {
      label: "Pending Requests",
      value: pendingRequests,
      icon: Clock3,
      className:
        "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
    },
    {
      label: "Active Rentals",
      value: activeRentals,
      icon: Activity,
      className:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
    },
    {
      label: "Completed Rentals",
      value: completedRentals,
      icon: CircleCheck,
      className:
        "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400",
    },
    {
      label: "Total Payments",
      value: totalPayments,
      icon: Wallet,
      className:
        "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },
    {
      label: "Total Revenue",
      value: `৳${totalRevenue.toLocaleString()}`,
      icon: Banknote,
      className:
        "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">{stat.label}</p>

                <p className="mt-1 truncate text-2xl font-bold tracking-tight">
                  {stat.value}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${stat.className}`}
              >
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
