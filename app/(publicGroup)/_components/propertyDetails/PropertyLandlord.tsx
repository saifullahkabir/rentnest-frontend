import Image from "next/image";
import { Mail, Phone, UserRound } from "lucide-react";

import { Property } from "@/lib/types/property";

interface PropertyLandlordProps {
  landlord: Property["landlord"];
}

export default function PropertyLandlord({
  landlord,
}: PropertyLandlordProps) {
  if (!landlord) {
    return null;
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-card">
      {/* Header */}
      <div className="border-b px-4 py-5 md:px-6">
        <p className="text-sm font-medium text-primary">
          Property owner
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Meet your landlord
        </h2>
      </div>

      {/* Profile */}
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          {landlord.profileImage ? (
            <Image
              src={landlord.profileImage}
              alt={landlord.name}
              width={64}
              height={64}
              unoptimized
              className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-background"
            />
          ) : (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <UserRound className="h-7 w-7 text-primary" />
            </div>
          )}

          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold">
              {landlord.name}
            </h3>

            <p className="mt-0.5 text-sm text-muted-foreground">
              Property Owner
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background">
              <Mail className="h-4 w-4 text-primary" />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">
                Email
              </p>

              <p className="truncate text-sm font-medium">
                {landlord.email}
              </p>
            </div>
          </div>

          {landlord.phone && (
            <div className="flex items-center gap-3 rounded-xl bg-muted/50 px-4 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background">
                <Phone className="h-4 w-4 text-primary" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Phone
                </p>

                <p className="text-sm font-medium">
                  {landlord.phone}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}