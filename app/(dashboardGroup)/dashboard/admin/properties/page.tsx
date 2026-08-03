import Image from "next/image";
import { AdminProperty } from "@/lib/types/admin-property";
import { getAllAdminProperties } from "@/app/(dashboardGroup)/_actions/admin-actions/adminDashboard";

export default async function AdminPropertiesPage() {
  const result = await getAllAdminProperties();

  const properties: AdminProperty[] = result.data ?? [];

  const availableCount = properties.filter(
    (property) => property.availability === "AVAILABLE",
  ).length;

  const unavailableCount = properties.filter(
    (property) => property.availability === "UNAVAILABLE",
  ).length;

  const totalRent = properties.reduce(
    (sum, property) => sum + property.rentAmount,
    0,
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          All Properties
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View and monitor all properties listed on RentNest.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Properties</p>

          <p className="mt-1 text-2xl font-bold">{properties.length}</p>
        </div>

        {/* Available */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Available</p>

          <p className="mt-1 text-2xl font-bold text-green-600">
            {availableCount}
          </p>
        </div>

        {/* Unavailable */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Unavailable</p>

          <p className="mt-1 text-2xl font-bold text-red-600">
            {unavailableCount}
          </p>
        </div>

        {/* Total Rent */}
        <div className="rounded-2xl border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Rent Value</p>

          <p className="mt-1 text-2xl font-bold">
            ৳{totalRent.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                {/* Property */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Property
                </th>

                {/* Category */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Category
                </th>

                {/* Landlord */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Landlord
                </th>

                {/* Rent */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Rent
                </th>

                {/* Details */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Details
                </th>

                {/* Availability */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Availability
                </th>

                {/* Created */}
                <th className="whitespace-nowrap px-5 py-4 text-left font-medium">
                  Created
                </th>
              </tr>
            </thead>

            <tbody>
              {properties.map((property) => (
                <tr
                  key={property.id}
                  className="border-b last:border-0 hover:bg-muted/20"
                >
                  {/* Property */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                        {property.image ? (
                          <Image
                            src={property.image}
                            alt={property.title}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
                            No Image
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="max-w-48 truncate font-medium">
                          {property.title}
                        </p>

                        <p className="max-w-48 truncate text-xs text-muted-foreground">
                          {property.location}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4">
                    <span className="inline-flex rounded-lg border bg-muted/40 px-2.5 py-1 text-xs font-medium">
                      {property.category.name}
                    </span>
                  </td>

                  {/* Landlord */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      {property.landlord.profileImage ? (
                        <Image
                          src={property.landlord.profileImage}
                          alt={property.landlord.name}
                          width={36}
                          height={36}
                          unoptimized
                          className="h-9 w-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {property.landlord.name.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div className="min-w-0">
                        <p className="truncate font-medium">
                          {property.landlord.name}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {property.landlord.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Rent */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <p className="font-semibold">
                      ৳{property.rentAmount.toLocaleString()}
                    </p>

                    <p className="text-xs text-muted-foreground">per month</p>
                  </td>

                  {/* Details */}
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex gap-3">
                      <div>
                        <p className="font-medium">{property.bedrooms}</p>
                        <p className="text-xs text-muted-foreground">
                          Bedrooms
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">{property.bathrooms}</p>
                        <p className="text-xs text-muted-foreground">
                          Bathrooms
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Availability */}
                  <td className="px-5 py-4">
                    <AvailabilityBadge availability={property.availability} />
                  </td>

                  {/* Created */}
                  <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">
                    {new Date(property.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}

              {properties.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-16 text-center text-muted-foreground"
                  >
                    No properties found.
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

function AvailabilityBadge({
  availability,
}: {
  availability: "AVAILABLE" | "UNAVAILABLE";
}) {
  const config = {
    AVAILABLE:
      "border-green-200 bg-green-50 text-green-700 dark:border-green-900/50 dark:bg-green-950/30 dark:text-green-400",

    UNAVAILABLE:
      "border-red-200 bg-red-50 text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex rounded-lg border px-2.5 py-1 text-xs font-medium ${config[availability]}`}
    >
      {availability}
    </span>
  );
}
