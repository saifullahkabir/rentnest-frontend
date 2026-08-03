import { Property } from "@/lib/types/property";
import { getLandlordProperties } from "../../_actions/landlord-actions/landlordProperties";
import { getLandlordRentalRequests } from "../../_actions/landlord-actions/landlordRentalRequests";
import { LandlordRentalRequest } from "@/lib/types/landlord-rental-request";
import LandlordDashboardStats from "../../_components/landlord/LandlordDashboardStats";
import { getLandlordPayments } from "../../_actions/landlord-actions/landlordPayments";
import { LandlordPayment } from "@/lib/types/landlord-payment";

export default async function LandlordDashboardPage() {
  const [propertiesResult, requestsResult, paymentsResult] = await Promise.all([
    getLandlordProperties(),
    getLandlordRentalRequests(),
    getLandlordPayments(),
  ]);

  const properties = propertiesResult.data ?? [];
  const requests = requestsResult.data ?? [];
  const payments = paymentsResult.data ?? [];

  // Property Stats
  const totalProperties = properties.length;

  const availableProperties = properties.filter(
    (property: Property) => property.availability === "AVAILABLE",
  ).length;

  const unavailableProperties = properties.filter(
    (property: Property) => property.availability === "UNAVAILABLE",
  ).length;

  // Rental Request Stats
  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (request: LandlordRentalRequest) => request.status === "PENDING",
  ).length;

  const approvedRequests = requests.filter(
    (request: LandlordRentalRequest) => request.status === "APPROVED",
  ).length;

  const activeRequests = requests.filter(
    (request: LandlordRentalRequest) => request.status === "ACTIVE",
  ).length;

  const completedRequests = requests.filter(
    (request: LandlordRentalRequest) => request.status === "COMPLETED",
  ).length;

  const rejectedRequests = requests.filter(
    (request: LandlordRentalRequest) => request.status === "REJECTED",
  ).length;

  const totalPayments = payments.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Landlord Dashboard
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Manage your properties and rental requests.
        </p>
      </div>

      <LandlordDashboardStats
        totalProperties={totalProperties}
        availableProperties={availableProperties}
        unavailableProperties={unavailableProperties}
        totalRequests={totalRequests}
        pendingRequests={pendingRequests}
        approvedRequests={approvedRequests}
        activeRequests={activeRequests}
        completedRequests={completedRequests}
        rejectedRequests={rejectedRequests}
        totalPayments={totalPayments}
      />
    </div>
  );
}
