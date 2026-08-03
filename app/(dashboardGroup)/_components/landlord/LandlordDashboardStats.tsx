"use client";

import {
  Building2,
  CheckCircle2,
  Clock3,
  XCircle,
  ClipboardList,
  Wallet,
  ShieldCheck,
  CircleCheck,
  CircleX,
  Banknote,
} from "lucide-react";

type LandlordDashboardStatsProps = {
  totalProperties: number;
  availableProperties: number;
  unavailableProperties: number;
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  activeRequests: number;
  completedRequests: number;
  rejectedRequests: number;
  totalPayments: number;
  totalPaid: number;
};

export default function LandlordDashboardStats({
  totalProperties,
  availableProperties,
  unavailableProperties,
  totalRequests,
  pendingRequests,
  approvedRequests,
  activeRequests,
  completedRequests,
  rejectedRequests,
  totalPayments,
  totalPaid,
}: LandlordDashboardStatsProps) {
  const stats = [
    {
      label: "Total Properties",
      value: totalProperties,
      icon: Building2,
      className:
        "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
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
        "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    },
    {
      label: "Pending",
      value: pendingRequests,
      icon: Clock3,
      className:
        "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
    },
    {
      label: "Approved",
      value: approvedRequests,
      icon: CheckCircle2,
      className:
        "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
    },
    {
      label: "Active",
      value: activeRequests,
      icon: ShieldCheck,
      className:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
    },
    {
      label: "Completed",
      value: completedRequests,
      icon: CircleCheck,
      className:
        "bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400",
    },
    {
      label: "Rejected",
      value: rejectedRequests,
      icon: CircleX,
      className: "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400",
    },
    {
      label: "Total Payments",
      value: totalPayments,
      icon: Wallet,
      className:
        "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
    },
    {
      label: "Total Paid",
      value: `৳${totalPaid.toLocaleString()}`,
      icon: Banknote,
      className:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
