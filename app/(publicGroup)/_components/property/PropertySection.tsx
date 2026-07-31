import { Property } from "@/lib/types/property";
import PropertyCard from "./PropertyCard";
import { getFeaturedProperties } from "../../_action/property/getFeaturedProperties";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function PropertySection() {
  const properties = await getFeaturedProperties();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16 xl:py-20">
      <div className="mb-8 md:mb-10 flex flex-col gap-4 md:gap-5 md:flex-row items-center md:justify-between justify-start">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Properties</h2>

          <p className="text-muted-foreground mt-3">
            Find your perfect place to live.
          </p>
        </div>

        <Button asChild variant="outline">
          <Link href="/properties">
            View All Properties
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {properties.data.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
