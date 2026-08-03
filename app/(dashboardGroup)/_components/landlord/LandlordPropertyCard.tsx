"use client";

import Image from "next/image";
import { Bath, BedDouble, Building2, MapPin, Wallet } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { LandlordProperty } from "@/lib/types/landlord-property";
import PropertyFormTrigger from "./PropertyFormTrigger";
import DeletePropertyDialog from "./DeletePropertyDialog";
import { Category } from "./PropertyFormModal";

type MyPropertyCardProps = {
  property: LandlordProperty;
  categories: Category[];
};

export default function MyPropertyCard({ property, categories }: MyPropertyCardProps) {
  const isAvailable = property.availability === "AVAILABLE";

  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="grid md:grid-cols-[240px_1fr]">
        {/* Image */}
        <div className="relative min-h-55 overflow-hidden md:min-h-full">
          <Image
            src={property.image}
            alt={property.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          {/* Availability */}
          <div className="absolute left-4 top-4">
            <Badge
              variant="outline"
              className={
                isAvailable
                  ? "border-green-200 bg-green-50/95 text-green-700 dark:border-green-900/50 dark:bg-green-950/80 dark:text-green-400"
                  : "border-red-200 bg-red-50/95 text-red-700 dark:border-red-900/50 dark:bg-red-950/80 dark:text-red-400"
              }
            >
              {isAvailable ? "Available" : "Unavailable"}
            </Badge>
          </div>

          {/* Category */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
            <Building2 className="h-4 w-4" />

            <span className="text-sm font-medium">
              {property.category.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="line-clamp-1 text-lg font-semibold tracking-tight">
                {property.title}
              </h2>

              <div className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />

                <span className="truncate">{property.location}</span>
              </div>
            </div>

            {/* Rent */}
            <div className="shrink-0 text-right">
              <p className="text-xl font-bold tracking-tight">
                ৳{property.rentAmount.toLocaleString()}
              </p>

              <p className="text-xs text-muted-foreground">/ month</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 line-clamp-2 text-sm leading-5 text-muted-foreground">
            {property.description}
          </p>

          {/* Details */}
          <div className="mt-5 grid grid-cols-3 divide-x rounded-xl border bg-muted/30 py-3">
            <div className="flex flex-col items-center gap-1">
              <BedDouble className="h-4 w-4 text-primary" />

              <span className="text-sm font-semibold">{property.bedrooms}</span>

              <span className="text-[11px] text-muted-foreground">
                Bedrooms
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Bath className="h-4 w-4 text-primary" />

              <span className="text-sm font-semibold">
                {property.bathrooms}
              </span>

              <span className="text-[11px] text-muted-foreground">
                Bathrooms
              </span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Wallet className="h-4 w-4 text-primary" />

              <span className="text-sm font-semibold">
                ৳{property.rentAmount.toLocaleString()}
              </span>

              <span className="text-[11px] text-muted-foreground">
                Monthly Rent
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-2 justify-end">
            {/* Edit */}
            <PropertyFormTrigger
              mode="edit"
              property={property}
              categories={categories}
            />

            {/* Delete */}
            <DeletePropertyDialog property={property} />
          </div>
        </div>
      </div>
    </article>
  );
}
