"use client";

import Image from "next/image";
import {
  CalendarDays,
  CreditCard,
  MapPin,
  ReceiptText,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { LandlordPayment } from "@/lib/types/landlord-payment";

type LandlordPaymentCardProps = {
  payment: LandlordPayment;
};

export default function LandlordPaymentCard({
  payment,
}: LandlordPaymentCardProps) {
  const property = payment.rentalRequest.property;

  const formattedAmount = payment.amount.toLocaleString();

  const paidDate = payment.paidAt
    ? new Date(payment.paidAt).toLocaleDateString("en-BD", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Not paid";

  return (
    <article className="overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="grid md:grid-cols-[220px_1fr]">
        {/* Property Image */}
        <div className="relative min-h-55 overflow-hidden md:min-h-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 220px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-4">
            <Badge className="bg-white/95 text-black hover:bg-white">
              {property.category.name}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col p-5 sm:p-6">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-lg font-semibold tracking-tight">
                {property.title}
              </h2>

              <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />

                <span className="truncate">{property.location}</span>
              </div>
            </div>

            {/* Payment Status */}
            <Badge
              variant="outline"
              className={
                payment.status === "COMPLETED"
                  ? "w-fit border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-400"
                  : payment.status === "PENDING"
                    ? "w-fit border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-900/50 dark:bg-yellow-950/40 dark:text-yellow-400"
                    : "w-fit border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400"
              }
            >
              {payment.status}
            </Badge>
          </div>

          {/* Tenant */}
          <div className="mt-5 flex items-center gap-3 rounded-xl border bg-muted/30 p-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border bg-muted">
              {payment.tenant.profileImage ? (
                <Image
                  src={payment.tenant.profileImage}
                  alt={payment.tenant.name}
                  fill
                  unoptimized
                  sizes="40px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold">{payment.tenant.name}</p>

              <p className="truncate text-xs text-muted-foreground">
                {payment.tenant.email}
              </p>
            </div>
          </div>

          {/* Payment Details */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* Amount */}
            <div className="rounded-xl border p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="h-4 w-4" />

                <span className="text-xs">Amount</span>
              </div>

              <p className="mt-1 text-sm font-bold">৳{formattedAmount}</p>
            </div>

            {/* Provider */}
            <div className="rounded-xl border p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ReceiptText className="h-4 w-4" />

                <span className="text-xs">Provider</span>
              </div>

              <p className="mt-1 text-sm font-semibold">{payment.provider}</p>
            </div>

            {/* Paid Date */}
            <div className="rounded-xl border p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays className="h-4 w-4" />

                <span className="text-xs">Paid Date</span>
              </div>

              <p className="mt-1 text-sm font-semibold">{paidDate}</p>
            </div>

            {/* Request Status */}
            <div className="rounded-xl border p-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ReceiptText className="h-4 w-4" />

                <span className="text-xs">Request</span>
              </div>

              <p className="mt-1 text-sm font-semibold">
                {payment.rentalRequest.status}
              </p>
            </div>
          </div>

          {/* Transaction ID */}
          <div className="mt-4 rounded-xl border bg-muted/20 p-3">
            <p className="text-xs text-muted-foreground">Transaction ID</p>

            <p className="mt-1 break-all font-mono text-xs">
              {payment.transactionId}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
