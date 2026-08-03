"use client";

import {
  Building2,
  CheckCircle2,
  Clock3,
  XCircle,
  Home,
  ClipboardList,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type LandlordDashboardStatsProps = {
  totalProperties: number;
  availableProperties: number;
  unavailableProperties: number;
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  rejectedRequests: number;
};

const stats = [
  {
    key: "totalProperties",
    title: "Total Properties",
    icon: Building2,
  },
  {
    key: "availableProperties",
    title: "Available",
    icon: CheckCircle2,
  },
  {
    key: "unavailableProperties",
    title: "Unavailable",
    icon: XCircle,
  },
  {
    key: "totalRequests",
    title: "Total Requests",
    icon: ClipboardList,
  },
  {
    key: "pendingRequests",
    title: "Pending",
    icon: Clock3,
  },
  {
    key: "approvedRequests",
    title: "Approved",
    icon: Home,
  },
] as const;

export default function LandlordDashboardStats({
  totalProperties,
  availableProperties,
  unavailableProperties,
  totalRequests,
  pendingRequests,
  approvedRequests,
}: LandlordDashboardStatsProps) {
  const values = {
    totalProperties,
    availableProperties,
    unavailableProperties,
    totalRequests,
    pendingRequests,
    approvedRequests,
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.key}
            className="rounded-2xl transition-shadow hover:shadow-md"
          >
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>

                <p className="mt-2 text-3xl font-bold tracking-tight">
                  {values[stat.key]}
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
