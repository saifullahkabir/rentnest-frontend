import Image from "next/image";
import Link from "next/link";

import { Bath, BedDouble, Heart, MapPin, User, ArrowRight } from "lucide-react";

import { Property } from "@/lib/types/property";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          unoptimized
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Availability */}
        <Badge
          className={`absolute left-4 top-4 rounded-full px-3 py-1
            ${
              property.availability === "AVAILABLE"
                ? "bg-green-600/60 "
                : "bg-red-600/60"
            }`}
        >
          {property.availability}
        </Badge>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 transition hover:bg-white">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-5 p-5">
        {/* Category */}
        <Badge variant="secondary">{property.category.name}</Badge>

        {/* Title */}
        <h3 className="line-clamp-1 text-xl font-semibold">{property.title}</h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={18} />

          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Beds + Baths */}
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BedDouble size={18} />

            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="flex items-center gap-2">
            <Bath size={18} />

            <span>{property.bathrooms} Baths</span>
          </div>
        </div>

        {/* Landlord */}
        <div className="flex items-center gap-3 border-t pt-4">
          {property.landlord.profileImage ? (
            <Image
              src={property.landlord.profileImage}
              alt={property.landlord.name}
              width={42}
              height={42}
              unoptimized
              className="rounded-full object-cover"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <User className="text-primary" size={18} />
            </div>
          )}

          <div>
            <p className="font-medium">{property.landlord.name}</p>

            <p className="text-xs text-muted-foreground">Property Owner</p>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between border-t pt-5">
          <div>
            <p className="text-2xl font-bold text-primary">
              ৳{property.rentAmount.toLocaleString()}
            </p>

            <p className="text-xs text-muted-foreground">/ Month</p>
          </div>

          <Button asChild>
            <Link href={`/properties/${property.id}`}>
              View
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
