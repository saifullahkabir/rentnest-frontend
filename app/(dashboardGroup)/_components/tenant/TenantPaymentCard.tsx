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
  CreditCard,
  MapPin,
  ReceiptText,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TenantPayment } from "@/lib/types/tenant-payment";

type TenantPaymentCardProps = {
  payment: TenantPayment;
};

const statusConfig = {
  COMPLETED: {
    label: "Completed",
    className:
      "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400",
    icon: CheckCircle2,
  },

  PENDING: {
    label: "Pending",
    className:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400",
    icon: Clock3,
  },

  FAILED: {
    label: "Failed",
    className:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",
    icon: XCircle,
  },
} as const;

export default function TenantPaymentCard({ payment }: TenantPaymentCardProps) {
  const property = payment.rentalRequest.property;

  const status = statusConfig[payment.status] ?? statusConfig.PENDING;

  const StatusIcon = status.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex min-h-60 flex-col sm:flex-row">
        {/* Image */}
        <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-64 lg:w-72">
          <Image
            src={property.image}
            alt={property.title}
            fill
            unoptimized
            sizes="(max-width: 640px) 100vw, 288px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

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

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="hidden truncate text-xl font-semibold tracking-tight sm:block">
                {property.title}
              </h2>

              <div className="mt-1 hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
                <MapPin className="h-4 w-4 shrink-0" />

                <span className="truncate">{property.location}</span>
              </div>

              {/* Amount */}
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight">
                  ৳{payment.amount.toLocaleString()}
                </span>

                <span className="text-xs text-muted-foreground">payment</span>
              </div>
            </div>

            {/* Payment Status */}
            <Badge
              variant="outline"
              className={`shrink-0 gap-1.5 ${status.className}`}
            >
              <StatusIcon className="h-3.5 w-3.5" />

              {status.label}
            </Badge>
          </div>

          {/* Property details */}
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
                  {payment.paidAt
                    ? new Date(payment.paidAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                      })
                    : "—"}
                </p>

                <p className="hidden text-[10px] text-muted-foreground xs:block">
                  Paid on
                </p>
              </div>
            </div>
          </div>

          {/* Transaction */}
          <div className="mt-3 flex items-center gap-2.5 rounded-xl border bg-muted/20 px-3 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <ReceiptText className="h-3.5 w-3.5 text-primary" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] text-muted-foreground">
                Transaction ID
              </p>

              <p className="truncate text-xs font-medium">
                {payment.transactionId || "Not available"}
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CreditCard className="h-3.5 w-3.5" />

              <span>Paid via {payment.provider}</span>
            </div>

            <Button asChild variant="outline" size="sm" className="rounded-lg">
              <Link href={`/properties/${property.id}`}>
                View Property
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
