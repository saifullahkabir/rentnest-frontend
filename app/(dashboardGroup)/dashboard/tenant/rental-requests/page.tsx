import { getMyRentalRequests } from "@/app/(dashboardGroup)/_actions/tenant-actions/getMyRentalRequests";
import RentalRequestCard from "@/app/(dashboardGroup)/_components/tenant/rentalRequest/RentalRequestCard";
import { TenantRentalRequest } from "@/lib/types/tenant-rental-request";

export default async function RentalRequestsPage() {
  const result = await getMyRentalRequests();

  const requests = result?.data ?? [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          My Rental Requests
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Track the rental requests you have submitted.
        </p>
      </div>

      {requests.length === 0 ? (
        <div className="rounded-2xl border border-dashed p-10 text-center">
          <h2 className="text-lg font-semibold">No rental requests yet</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            You haven&apos;t submitted any rental requests yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5">
          {requests.map((request: TenantRentalRequest) => (
            <RentalRequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </main>
  );
}
