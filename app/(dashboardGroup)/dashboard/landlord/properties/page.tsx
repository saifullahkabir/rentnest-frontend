import { getLandlordProperties } from "@/app/(dashboardGroup)/_actions/landlord-actions/landlordProperties";
import MyPropertyCard from "@/app/(dashboardGroup)/_components/landlord/LandlordPropertyCard";
import PropertyFormTrigger from "@/app/(dashboardGroup)/_components/landlord/PropertyFormTrigger";
import { getCategories } from "@/app/(publicGroup)/_action/category/getCategories";
import { LandlordProperty } from "@/lib/types/landlord-property";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Properties | RentNest",
  description:
    "Manage your rental properties, update property information, and create new listings from your RentNest landlord dashboard.",
};

export default async function LandlordPropertiesPage() {
  const [propertyResult, categoryResult] = await Promise.all([
    getLandlordProperties(),
    getCategories(),
  ]);

  const properties = propertyResult.data ?? [];
  const categories = categoryResult.data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            My Properties
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Manage the properties you have listed for rent.
          </p>
        </div>

        {/* Create Button */}
        <div>
          <PropertyFormTrigger mode="create" categories={categories} />
        </div>
      </div>

      {properties.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <h2 className="font-semibold">No properties found</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            You have not created any properties yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {properties.map((property: LandlordProperty) => (
            <MyPropertyCard
              key={property.id}
              property={property}
              categories={categories}
            />
          ))}
        </div>
      )}
    </div>
  );
}
