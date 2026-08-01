import { IPropertyQuery } from "@/lib/types/property";
import PropertiesLayout from "../_components/properties/PropertiesLayout";

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
