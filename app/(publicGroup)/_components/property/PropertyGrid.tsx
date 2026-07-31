import { Property } from "@/lib/types/property";
import { getFeaturedProperties } from "../../_action/property/getFeaturedProperties";
import PropertyCard from "./PropertyCard";


export default async function PropertyGrid() {
  const properties = await getFeaturedProperties();

  return (
    <div className="grid gap-6 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {properties.data.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
