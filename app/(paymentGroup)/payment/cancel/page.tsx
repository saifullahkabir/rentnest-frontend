import Link from "next/link";
import { CreditCard, Home, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function PaymentCancelPage() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-sm">
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40">
          <XCircle className="h-9 w-9 text-red-600 dark:text-red-400" />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold tracking-tight">
            Payment Cancelled
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Your payment was cancelled or you left the checkout page. No payment
            has been completed.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild className="rounded-xl">
            <Link href="/dashboard/tenant/rental-requests">
              <CreditCard className="h-4 w-4" />
              Try Again
            </Link>
          </Button>

          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
