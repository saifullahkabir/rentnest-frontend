import {
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Property } from "@/lib/types/property";

interface PropertyRentalCardProps {
  rentAmount: number;
  availability: Property["availability"];
}

export default function PropertyRentalCard({
  rentAmount,
  availability,
}: PropertyRentalCardProps) {
  const isAvailable = availability === "AVAILABLE";

  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        {/* Price */}
        <div className="border-b p-4 md:p-6">
          <p className="text-sm text-muted-foreground">
            Monthly rent
          </p>

          <div className="mt-1 flex flex-wrap items-end gap-2">
            <span className="text-3xl font-bold">
              ৳{rentAmount.toLocaleString()}
            </span>

            <span className="mb-1 text-sm text-muted-foreground">
              / month
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4 p-4 md:p-6">
          <Button
            size="lg"
            className="h-12 w-full text-base"
            disabled={!isAvailable}
          >
            {isAvailable
              ? "Request to Rent"
              : "Currently Unavailable"}

            {isAvailable && (
              <ChevronRight className="ml-1 h-4 w-4" />
            )}
          </Button>

          {isAvailable && (
            <p className="text-center text-xs leading-5 text-muted-foreground">
              Send a rental request to the property owner.
              You can discuss the details before confirming.
            </p>
          )}

          <div className="flex items-center justify-center gap-2 border-t pt-4 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-green-600" />

            <span>Secure rental process</span>
          </div>
        </div>
      </div>
    </aside>
  );
}