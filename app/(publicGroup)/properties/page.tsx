import { IPropertyQuery } from "@/lib/types/property";
import PropertiesLayout from "../_components/properties/PropertiesLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Rental Properties | RentNest",
  description:
    "Explore verified rental properties on RentNest. Find apartments, houses, and rental homes that match your budget, location, and preferences.",
  keywords: [
    "rental properties",
    "rent house",
    "apartments for rent",
    "rental homes",
    "property rental",
    "RentNest",
  ],
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<IPropertyQuery>;
}) {
  const query = await searchParams;

  const propertyQuery: IPropertyQuery = {
    ...query,
    limit: query.limit || "6",
  };

  // console.log("propertyQuery =======>", propertyQuery);

  return (
    <div>
      <PropertiesLayout query={propertyQuery} />
    </div>
  );
}
