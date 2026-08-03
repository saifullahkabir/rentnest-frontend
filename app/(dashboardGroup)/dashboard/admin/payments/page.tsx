import { getAllAdminPayments } from "@/app/(dashboardGroup)/_actions/admin-actions/adminDashboard";
import { AdminPayment } from "@/lib/types/admin-payment";
import Image from "next/image";

export default async function AdminPaymentsPage() {
  const result = await getAllAdminPayments();

  const payments: AdminPayment[] = result.data ?? [];

  const completedCount = payments.filter(
    (payment) => payment.status === "COMPLETED",
  ).length;

  const pendingCount = payments.filter(
    (payment) => payment.status === "PENDING",
  ).length;

  const failedCount = payments.filter(
    (payment) => payment.status === "FAILED",
  ).length;

  const totalAmount = payments.reduce(
    (sum, payment) => sum + payment.amount,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          All Payments
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View and monitor all payment transactions across RentNest.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {/* Total */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Payments</p>

          <p className="mt-1 text-2xl font-bold">{payments.length}</p>
        </div>

        {/* Completed */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Completed</p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            {completedCount}
          </p>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending</p>

          <p className="mt-1 text-2xl font-bold text-amber-600">
            {pendingCount}
          </p>
        </div>

        {/* Failed */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Failed</p>

          <p className="mt-1 text-2xl font-bold text-red-600">{failedCount}</p>
        </div>

        {/* Total Amount */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Amount</p>

          <p className="mt-1 text-2xl font-bold">
            ৳{totalAmount.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                {/* Tenant */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Tenant
                </th>

                {/* Property */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Property
                </th>

                {/* Landlord */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Landlord
                </th>

                {/* Amount */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Amount
                </th>

                {/* Provider */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Provider
                </th>

                {/* Transaction ID */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Transaction ID
                </th>

                {/* Status */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Status
                </th>

                {/* Paid At */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Paid At
                </th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b last:border-0 hover:bg-muted/20"
                >
                  {/* Tenant */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {payment.tenant.profileImage ? (
                        <Image
                          src={payment.tenant.profileImage}
                          alt={payment.tenant.name}
                          width={36}
                          height={36}
                          unoptimized
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {payment.tenant.name.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="truncate font-medium">
                          {payment.tenant.name}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {payment.tenant.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Property */}
                  <td className="px-5 py-4">
                    <div className="min-w-0">
                      <p className="max-w-48 truncate font-medium">
                        {payment.rentalRequest.property.title}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        Rent: ৳
                        {payment.rentalRequest.property.rentAmount.toLocaleString()}
                      </p>
                    </div>
                  </td>

                  {/* Landlord */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium">
                        {payment.rentalRequest.property.landlord.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {payment.rentalRequest.property.landlord.email}
                      </p>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <p className="font-semibold">
                      ৳{payment.amount.toLocaleString()}
                    </p>
                  </td>

                  {/* Provider */}
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-lg border bg-muted/40 px-2.5 py-1 text-xs font-medium">
                      {payment.provider}
                    </span>
                  </td>

                  {/* Transaction ID */}
                  <td className="px-5 py-4">
                    <p
                      title={payment.transactionId}
                      className="max-w-48 truncate font-mono text-xs text-muted-foreground"
                    >
                      {payment.transactionId}
                    </p>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <PaymentStatusBadge status={payment.status} />
                  </td>

                  {/* Paid At */}
                  <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                    {payment.paidAt
                      ? new Date(payment.paidAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "—"}
                  </td>
                </tr>
              ))}

              {payments.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-16 text-center text-muted-foreground"
                  >
                    No payments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function PaymentStatusBadge({
  status,
}: {
  status: "PENDING" | "COMPLETED" | "FAILED" | "CANCELLED";
}) {
  const config = {
    PENDING:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400",

    COMPLETED:
      "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400",

    FAILED:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",

    CANCELLED:
      "border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-900/40 dark:text-gray-400",
  };

  return (
    <span
      className={`inline-flex rounded-lg border px-2.5 py-1 text-xs font-medium ${config[status]}`}
    >
      {status}
    </span>
  );
}
