import { IPropertyQuery } from "@/lib/types/property";
import PropertiesLayout from "../_components/properties/PropertiesLayout";

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<IPropertyQuery>;
}) {
  const query = await searchParams;

  return (
    <div>
      <PropertiesLayout query={query} />
    </div>
  );
}
