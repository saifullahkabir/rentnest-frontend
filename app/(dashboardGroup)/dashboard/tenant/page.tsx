import { TenantRentalRequest } from "@/lib/types/tenant-rental-request";
import { TenantPayment } from "@/lib/types/tenant-payment";
import TenantDashboardStats from "../../_components/tenant/TenantDashboardStats";
import { getMyRentalRequests } from "../../_actions/tenant-actions/getMyRentalRequests";
import { getMyPayments } from "../../_actions/tenant-actions/tenantPayments";

export default async function TenantDashboardPage() {
  const [requestsResult, paymentsResult] = await Promise.all([
    getMyRentalRequests(),
    getMyPayments(),
  ]);

  const requests: TenantRentalRequest[] = requestsResult.data ?? [];
  const payments: TenantPayment[] = paymentsResult.data ?? [];

  // Rental Request Stats
  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "PENDING",
  ).length;

  const approvedRequests = requests.filter(
    (request) => request.status === "APPROVED",
  ).length;

  const activeRequests = requests.filter(
    (request) => request.status === "ACTIVE",
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "COMPLETED",
  ).length;

  const rejectedRequests = requests.filter(
    (request) => request.status === "REJECTED",
  ).length;

  // Payment Stats
  const completedPayments = payments.filter(
    (payment) => payment.status === "COMPLETED",
  );

  const totalPayments = payments.length;

  const totalPaidAmount = completedPayments.reduce(
    (total, payment) => total + payment.amount,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Tenant Dashboard
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Manage your rental requests, active rentals, and payments.
        </p>
      </div>

      {/* Stats */}
      <TenantDashboardStats
        totalRequests={totalRequests}
        pendingRequests={pendingRequests}
        approvedRequests={approvedRequests}
        activeRequests={activeRequests}
        completedRequests={completedRequests}
        rejectedRequests={rejectedRequests}
        totalPayments={totalPayments}
        totalPaidAmount={totalPaidAmount}
      />
    </div>
  );
}
