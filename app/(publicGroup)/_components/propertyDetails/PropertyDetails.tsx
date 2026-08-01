import { Property } from "@/lib/types/property";
import PropertyDescription from "./PropertyDescription";
import PropertyHero from "./PropertyHero";
import PropertyLandlord from "./PropertyLandlord";
import PropertyOverview from "./PropertyOverview";
import PropertyRentalCard from "./PropertyRentalCard";
import PropertyReviews from "./PropertyReviews";

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <PropertyHero property={property} />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <PropertyOverview property={property} />

          <PropertyDescription description={property.description} />

          <PropertyLandlord landlord={property.landlord} />

          <PropertyReviews reviews={property.reviews} />
        </div>

        <PropertyRentalCard
          rentAmount={property.rentAmount}
          availability={property.availability}
        />
      </div>
    </div>
  );
}
