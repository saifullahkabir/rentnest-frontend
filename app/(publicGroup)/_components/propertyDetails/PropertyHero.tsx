import Image from "next/image";
import { Property } from "@/lib/types/property";

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  const isAvailable = property.availability === "AVAILABLE";

  return (
    <div className="relative overflow-hidden rounded-3xl border bg-muted shadow-sm">
      <Image
        src={property.image}
        alt={property.title}
        width={1400}
        height={800}
        unoptimized
        priority
        className="h-80 w-full object-cover sm:h-112.5 lg:h-140"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/20 to-transparent p-5 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 shadow-sm">
            {property.category?.name}
          </span>

          <span
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
              isAvailable
                ? "bg-green-500/95 text-white"
                : "bg-red-500/95 text-white"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />

            {isAvailable ? "Available" : "Unavailable"}
          </span>
        </div>
      </div>
    </div>
  );
}
