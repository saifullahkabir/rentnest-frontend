import { getMyPayments } from "@/app/(dashboardGroup)/_actions/tenant-actions/tenantPayments";
import TenantPaymentCard from "@/app/(dashboardGroup)/_components/tenant/TenantPaymentCard";
import { TenantPayment } from "@/lib/types/tenant-payment";
import { CheckCircle2, Clock3, CreditCard } from "lucide-react";

export default async function TenantPaymentsPage() {
  const result = await getMyPayments();

  const payments: TenantPayment[] = result.data ?? [];

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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          My Payments
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View your rental payment history and transaction details.
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

      {/* Empty */}
      {payments.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <CreditCard className="h-6 w-6 text-muted-foreground" />
          </div>

          <h2 className="mt-4 font-semibold">No payments found</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            You have not made any rental payments yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {payments.map((payment) => (
            <TenantPaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      )}
    </div>
  );
}
