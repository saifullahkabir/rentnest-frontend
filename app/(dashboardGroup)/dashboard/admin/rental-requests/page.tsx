import Image from "next/image";
import { AdminRentalRequest } from "@/lib/types/admin-rental-request";
import { getAllAdminRentalRequests } from "@/app/(dashboardGroup)/_actions/admin-actions/adminDashboard";

export default async function AdminRentalRequestsPage() {
  const result = await getAllAdminRentalRequests();

  const requests: AdminRentalRequest[] = result.data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          All Rental Requests
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View and monitor all rental requests across RentNest.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total</p>

          <p className="mt-1 text-2xl font-bold">{requests.length}</p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending</p>

          <p className="mt-1 text-2xl font-bold text-amber-600">
            {requests.filter((request) => request.status === "PENDING").length}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Approved</p>

          <p className="mt-1 text-2xl font-bold text-blue-600">
            {requests.filter((request) => request.status === "APPROVED").length}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Active</p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            {requests.filter((request) => request.status === "ACTIVE").length}
          </p>
        </div>

        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Rejected</p>

          <p className="mt-1 text-2xl font-bold text-red-600">
            {requests.filter((request) => request.status === "REJECTED").length}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Tenant
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Property
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Landlord
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Rent
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Move-in
                </th>

                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Submitted
                </th>
              </tr>
            </thead>

            <tbody>
              {requests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b last:border-0 hover:bg-muted/20"
                >
                  {/* Tenant */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {request.tenant.profileImage ? (
                        <Image
                          src={request.tenant.profileImage}
                          alt={request.tenant.name}
                          width={20}
                          height={20}
                          unoptimized
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {request.tenant.name.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="truncate font-medium">
                          {request.tenant.name}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {request.tenant.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Property */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium">{request.property.title}</p>

                      <p className="text-xs text-muted-foreground">
                        {request.property.location}
                      </p>
                    </div>
                  </td>

                  {/* Landlord */}
                  <td className="px-5 py-4">
                    <div>
                      <p className="font-medium">
                        {request.property.landlord.name}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {request.property.landlord.email}
                      </p>
                    </div>
                  </td>

                  {/* Rent */}
                  <td className="whitespace-nowrap px-5 py-4 font-semibold">
                    ৳{request.property.rentAmount.toLocaleString()}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <StatusBadge status={request.status} />
                  </td>

                  {/* Move-in */}
                  <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                    {request.moveInDate
                      ? new Date(request.moveInDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )
                      : "—"}
                  </td>

                  {/* Submitted */}
                  <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                    {new Date(request.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}

              {requests.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-16 text-center text-muted-foreground"
                  >
                    No rental requests found.
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

function StatusBadge({
  status,
}: {
  status: "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";
}) {
  const config = {
    PENDING:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400",

    APPROVED:
      "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-400",

    REJECTED:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",

    ACTIVE:
      "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400",

    COMPLETED:
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
