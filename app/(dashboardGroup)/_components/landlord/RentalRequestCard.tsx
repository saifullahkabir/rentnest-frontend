"use client";

import Image from "next/image";
import {
  Bath,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  User,
  Wallet,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { LandlordRentalRequest } from "@/lib/types/landlord-rental-request";

type RentalRequestCardProps = {
  request: LandlordRentalRequest;
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
  const { tenant, property } = request;

  const status = statusConfig[request.status];
  const StatusIcon = status.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* Property Image */}
        <div className="relative min-h-52 lg:min-h-full shrink-0 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 260px"
            unoptimized
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10 group-hover:scale-105" />

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-medium text-white/75">
              {property.category.name}
            </p>

            <h2 className="mt-1 line-clamp-2 text-lg font-semibold">
              {property.title}
            </h2>
          </div>
        </div>

        {/* Request Content */}
        <div className="flex flex-col p-4 sm:p-5">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Rental Request
              </p>
            </div>

            <Badge variant="outline" className={`gap-1.5 ${status.className}`}>
              <StatusIcon className="h-3.5 w-3.5" />

              {status.label}
            </Badge>
          </div>

          {/* Tenant */}
          <div className=" mt-3 flex items-center gap-3 rounded-xl bg-muted/20">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary/10">
              {tenant.profileImage ? (
                <Image
                  src={tenant.profileImage}
                  alt={tenant.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">{tenant.name}</p>

              <div className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Mail className="h-3 w-3" />

                <span className="truncate">{tenant.email}</span>
              </div>
            </div>
          </div>

          {/* Rent */}
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-xl font-bold tracking-tight">
              ৳{property.rentAmount.toLocaleString()}
            </span>

            <span className="text-xs text-muted-foreground">/month</span>
          </div>

          {/* Property Details */}
          <div className="mt-3 grid grid-cols-3 divide-x rounded-xl border bg-muted/30 py-2.5">
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
          {/* Location */}
          <div className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />

            <span>{property.location}</span>
          </div>

          {/* Message */}
          {request.message && (
            <div className="mt-4 rounded-xl border bg-muted/20 p-3.5">
              <div className="flex gap-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />

                <div className="min-w-0">
                  <p className="text-xs font-semibold">Tenant Message</p>

                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {request.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-5 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              Submitted{" "}
              {new Date(request.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>

            {/* Actions */}
            {request.status === "PENDING" && (
              <div className="grid grid-cols-2 gap-2 sm:flex">
                <Button
                  variant="outline"
                  className="rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 dark:border-red-900/50 dark:hover:bg-red-950/30"
                >
                  <XCircle className="h-4 w-4" />
                  Reject
                </Button>

                <Button className="rounded-xl">
                  <CheckCircle2 className="h-4 w-4" />
                  Approve
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
