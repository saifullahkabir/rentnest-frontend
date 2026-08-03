import { getLandlordPayments } from "@/app/(dashboardGroup)/_actions/landlord-actions/landlordPayments";
import LandlordPaymentCard from "@/app/(dashboardGroup)/_components/landlord/LandlordPaymentCard";
import { LandlordPayment } from "@/lib/types/landlord-payment";
import { CheckCircle2, Clock3, CreditCard } from "lucide-react";

export default async function LandlordPaymentsPage() {
  const result = await getLandlordPayments();

  const payments: LandlordPayment[] = result.data ?? [];

  const completedPayments = payments.filter(
    (payment) => payment.status === "COMPLETED",
  );

  const pendingPayments = payments.filter(
    (payment) => payment.status === "PENDING",
  );

  const totalPaid = completedPayments.reduce(
    (total, payment) => total + payment.amount,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Payments
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View payments received for your rental properties.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Total payments */}
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Payments</p>

              <p className="mt-1 text-2xl font-bold">{payments.length}</p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Total paid */}
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Paid</p>

              <p className="mt-1 text-2xl font-bold">
                ৳{totalPaid.toLocaleString()}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950/40">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>

              <p className="mt-1 text-2xl font-bold">
                {pendingPayments.length}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/40">
              <Clock3 className="h-5 w-5 text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {payments.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <h2 className="font-semibold">No payments yet</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Payments made for your properties will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {payments.map((payment: LandlordPayment) => (
            <LandlordPaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      )}
    </div>
  );
}
