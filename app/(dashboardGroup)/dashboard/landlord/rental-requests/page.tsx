import { getLandlordRentalRequests } from "@/app/(dashboardGroup)/_actions/landlord-actions/landlordRentalRequests";
import RentalRequestCard from "@/app/(dashboardGroup)/_components/landlord/RentalRequestCard";
import { LandlordRentalRequest } from "@/lib/types/landlord-rental-request";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Requests | RentNest",
  description:
    "Review and manage rental requests submitted by tenants for your properties on RentNest.",
};

export default async function LandlordRentalRequestsPage() {
  const result = await getLandlordRentalRequests();

  const requests = result.data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Rental Requests</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Review and manage rental requests from tenants.
        </p>
      </div>

      {requests.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <p className="font-medium">No rental requests yet.</p>

          <p className="mt-2 text-sm text-muted-foreground">
            Tenant requests for your properties will appear here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {requests.map((request: LandlordRentalRequest) => (
            <RentalRequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
}
