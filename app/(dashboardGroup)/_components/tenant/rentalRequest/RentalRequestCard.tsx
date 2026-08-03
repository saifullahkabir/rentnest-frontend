"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageSquare,
  CreditCard,
  Star,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TenantRentalRequest } from "@/lib/types/tenant-rental-request";
import TenantPayButton from "../TenantPayButton";

type RentalRequestCardProps = {
  request: TenantRentalRequest;
};

const statusConfig = {
  PENDING: {
    label: "Pending",
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400",
    icon: Clock3,
  },

  APPROVED: {
    label: "Approved",
    className:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400",
    icon: CheckCircle2,
  },

  REJECTED: {
    label: "Rejected",
    className:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",
    icon: XCircle,
  },

  ACTIVE: {
    label: "Active",
    className:
      "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400",
    icon: CheckCircle2,
  },

  COMPLETED: {
    label: "Completed",
    className:
      "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-400",
    icon: CheckCircle2,
  },
} as const;

export default function RentalRequestCard({ request }: RentalRequestCardProps) {
  const { property } = request;

  const status = statusConfig[request.status];
  const StatusIcon = status.icon;

  return (
    <section className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex min-h-60 flex-col sm:flex-row">
        {/* Image */}
        <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 288px"
            unoptimized
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10" />

          {/* Category */}
          <div className="absolute left-4 top-4">
            <Badge className="border-white/20 bg-black/40 text-white backdrop-blur-md hover:bg-black/50">
              {property.category.name}
            </Badge>
          </div>

          {/* Mobile title */}
          <div className="absolute bottom-4 left-4 right-4 sm:hidden">
            <h2 className="line-clamp-1 text-lg font-semibold text-white">
              {property.title}
            </h2>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="line-clamp-1">{property.location}</span>
            </div>
          </div>
        </div>

        {/*======> Content */}
        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
          {/* Top section */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {/* Desktop title */}
              <h2 className="hidden truncate text-xl font-semibold tracking-tight sm:block">
                {property.title}
              </h2>

              <div className="mt-1 hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="truncate">{property.location}</span>
              </div>

              {/* Rent */}
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight">
                  ৳{property.rentAmount.toLocaleString()}
                </span>

                <span className="text-xs text-muted-foreground">/month</span>
              </div>
            </div>

            {/* Status */}
            <Badge
              variant="outline"
              className={`shrink-0 gap-1.5 ${status.className}`}
            >
              <StatusIcon className="h-3.5 w-3.5" />
              {status.label}
            </Badge>
          </div>

          {/* =====> PROPERTY DETAILS */}
          <div className="mt-4 grid grid-cols-3 divide-x rounded-xl border bg-muted/30 py-2.5">
            <div className="flex items-center justify-center gap-2 px-2">
              <BedDouble className="h-4 w-4 text-muted-foreground" />

              <div>
                <p className="text-xs font-semibold">{property.bedrooms}</p>

                <p className="hidden text-[10px] text-muted-foreground xs:block">
                  Bedrooms
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 px-2">
              <Bath className="h-4 w-4 text-muted-foreground" />

              <div>
                <p className="text-xs font-semibold">{property.bathrooms}</p>

                <p className="hidden text-[10px] text-muted-foreground xs:block">
                  Bathrooms
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 px-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />

              <div>
                <p className="text-xs font-semibold">
                  {request.moveInDate
                    ? new Date(request.moveInDate).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      })
                    : "—"}
                </p>

                <p className="hidden text-[10px] text-muted-foreground xs:block">
                  Move-in
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================
              MESSAGE
          ========================================================= */}
          {request.message && (
            <div className="mt-3 flex items-center gap-2.5 rounded-xl border bg-muted/20 px-3 py-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-3.5 w-3.5 text-primary" />
              </div>

              <p className="line-clamp-1 min-w-0 text-xs text-muted-foreground">
                {request.message}
              </p>
            </div>
          )}

          {/* =========================================================
              BOTTOM / ACTION
          ========================================================= */}
          <div className="mt-auto pt-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              {/* Submitted */}
              <p className="text-[11px] text-muted-foreground">
                Submitted{" "}
                <span className="font-medium text-foreground">
                  {new Date(request.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                {request.status === "PENDING" && (
                  <div className="flex items-center justify-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/20 dark:text-amber-400">
                    <Clock3 className="h-3.5 w-3.5 shrink-0" />
                    Waiting for owner approval
                  </div>
                )}

                {request.status === "REJECTED" && (
                  <div className="flex items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/20 dark:text-red-400">
                    <XCircle className="h-3.5 w-3.5 shrink-0" />
                    Request rejected
                  </div>
                )}

                {request.status === "COMPLETED" && (
                  <div className="flex items-center justify-center gap-1.5 rounded-lg border bg-muted px-3 py-2 text-xs font-medium text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Rental completed
                  </div>
                )}

                {request.status === "APPROVED" && (
                  <TenantPayButton rentalRequestId={request.id} />
                )}

                {request.status === "ACTIVE" && (
                  <Button className="rounded-lg" variant="default">
                    <Star className="h-4 w-4" />
                    Leave Review
                  </Button>
                )}

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-lg"
                >
                  <Link href={`/properties/${property.id}`}>
                    View Property
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
