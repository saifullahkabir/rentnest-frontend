import { IPropertyQuery, Property } from "@/lib/types/property";
import { getProperties } from "../../_action/property/getProperties";
import PropertyEmpty from "./PropertyEmpty";
import PropertyCard from "../property/PropertyCard";

export default async function PropertyList({
  query,
}: {
  query?: IPropertyQuery;
}) {
  const properties = await getProperties({ query });
  // console.log("Properties====>", properties);

  if (!properties.data.length) {
    return <PropertyEmpty />;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {properties?.data.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
