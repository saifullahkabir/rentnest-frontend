"use client";

import {
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  Home,
  XCircle,
} from "lucide-react";

type TenantDashboardStatsProps = {
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  activeRequests: number;
  completedRequests: number;
  rejectedRequests: number;

  totalPayments: number;
  totalPaidAmount: number;
};

export default function TenantDashboardStats({
  totalRequests,
  pendingRequests,
  approvedRequests,
  activeRequests,
  completedRequests,
  rejectedRequests,
  totalPayments,
  totalPaidAmount,
}: TenantDashboardStatsProps) {
  const stats = [
    {
      label: "Total Requests",
      value: totalRequests,
      icon: FileText,
      className: "bg-blue-100 text-blue-600 dark:bg-blue-950/40",
    },
    {
      label: "Pending",
      value: pendingRequests,
      icon: Clock3,
      className: "bg-amber-100 text-amber-600 dark:bg-amber-950/40",
    },
    {
      label: "Approved",
      value: approvedRequests,
      icon: CheckCircle2,
      className: "bg-blue-100 text-blue-600 dark:bg-blue-950/40",
    },
    {
      label: "Active Rentals",
      value: activeRequests,
      icon: Home,
      className: "bg-green-100 text-green-600 dark:bg-green-950/40",
    },
    {
      label: "Completed",
      value: completedRequests,
      icon: CheckCircle2,
      className: "bg-gray-100 text-gray-600 dark:bg-gray-900",
    },
    {
      label: "Rejected",
      value: rejectedRequests,
      icon: XCircle,
      className: "bg-red-100 text-red-600 dark:bg-red-950/40",
    },
    {
      label: "Total Payments",
      value: totalPayments,
      icon: CreditCard,
      className: "bg-purple-100 text-purple-600 dark:bg-purple-950/40",
    },
    {
      label: "Total Paid",
      value: `৳${totalPaidAmount.toLocaleString()}`,
      icon: CreditCard,
      className: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40",
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
