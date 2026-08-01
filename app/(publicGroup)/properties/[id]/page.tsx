import { getPropertyById } from "../../_action/property/getPropertyById";
import PropertyDetails from "../../_components/propertyDetails/PropertyDetails";

type PropertyDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = await getPropertyById(id);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <PropertyDetails property={property.data} />
    </main>
  );
}
