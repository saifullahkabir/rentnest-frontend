import AdminDashboardStats from "../../_components/admin/AdminDashboardStats";

import {
  getAllAdminUsers,
  getAllAdminRentalRequests,
  getAllAdminProperties,
  getAllAdminPayments,
} from "../../_actions/admin-actions/adminDashboard";

import { AdminUser } from "@/lib/types/admin-user";
import { AdminRentalRequest } from "@/lib/types/admin-rental-request";
import { Property } from "@/lib/types/property";
import { AdminPayment } from "@/lib/types/admin-payment";

export default async function AdminDashboardPage() {
  const [usersResult, requestsResult, propertiesResult, paymentsResult] =
    await Promise.all([
      getAllAdminUsers(),
      getAllAdminRentalRequests(),
      getAllAdminProperties(),
      getAllAdminPayments(),
    ]);

  const users = (usersResult.data ?? []) as AdminUser[];
  const requests = (requestsResult.data ?? []) as AdminRentalRequest[];
  const properties = (propertiesResult.data ?? []) as Property[];
  const payments = (paymentsResult.data ?? []) as AdminPayment[];

  // USER STATS
  const totalUsers = users.length;

  const totalLandlords = users.filter(
    (user) => user.role === "LANDLORD",
  ).length;

  const totalTenants = users.filter((user) => user.role === "TENANT").length;

  // PROPERTY STATS
  const totalProperties = properties.length;

  const availableProperties = properties.filter(
    (property) => property.availability === "AVAILABLE",
  ).length;

  const unavailableProperties = properties.filter(
    (property) => property.availability === "UNAVAILABLE",
  ).length;

  // RENTAL REQUEST STATS
  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request) => request.status === "PENDING",
  ).length;

  const activeRentals = requests.filter(
    (request) => request.status === "ACTIVE",
  ).length;

  const completedRentals = requests.filter(
    (request) => request.status === "COMPLETED",
  ).length;

  // PAYMENT STATS
  const totalPayments = payments.length;

  const totalRevenue = payments
    .filter((payment) => payment.status === "COMPLETED")
    .reduce((total, payment) => total + payment.amount, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Overview of users, properties, rental activity, and payments.
        </p>
      </div>

      {/* Stats */}
      <AdminDashboardStats
        totalUsers={totalUsers}
        totalLandlords={totalLandlords}
        totalTenants={totalTenants}
        totalProperties={totalProperties}
        availableProperties={availableProperties}
        unavailableProperties={unavailableProperties}
        totalRequests={totalRequests}
        pendingRequests={pendingRequests}
        activeRentals={activeRentals}
        completedRentals={completedRentals}
        totalPayments={totalPayments}
        totalRevenue={totalRevenue}
      />
    </div>
  );
}
