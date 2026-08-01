import { Property, PropertyReviewsResponse } from "@/lib/types/property";
import PropertyDescription from "./PropertyDescription";
import PropertyHero from "./PropertyHero";
import PropertyLandlord from "./PropertyLandlord";
import PropertyOverview from "./PropertyOverview";
import PropertyRentalCard from "./PropertyRentalCard";
import PropertyReviews from "./PropertyReviews";

interface PropertyDetailsProps {
  property: Property;
  reviews: PropertyReviewsResponse;
}

export default function PropertyDetails({
  property,
  reviews,
}: PropertyDetailsProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <PropertyHero property={property} />

      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <PropertyOverview property={property} reviews={reviews} />

          <PropertyDescription description={property.description} />

          <PropertyLandlord landlord={property.landlord} />

          <PropertyReviews reviews={reviews} />
        </div>

        <PropertyRentalCard
          rentAmount={property.rentAmount}
          availability={property.availability}
        />
      </div>
    </div>
  );
}
