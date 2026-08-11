import Image from "next/image";
import Link from "next/link";

import { Home, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid lg:grid-cols-2 max-w-7xl gap-12 px-4 sm:px-6 lg:px-8 py-12 md:py-16 xl:py-20  md:items-center">
        {/* Left */}
        <div>
          <span className="rounded-full border bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            Trusted Rental Platform
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-tight lg:text-6xl">
            Find Your
            <span className="block bg-linear-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Perfect Rental Home
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Explore verified rental properties, connect with trusted landlords,
            and find your next home with confidence. RentNest makes renting
            simple, secure, and stress-free.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/properties">Browse Properties</Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/auth/register">Become a Landlord</Link>
            </Button>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-5 md:gap-8">
            <div className="flex items-center gap-2 md:gap-3">
              <ShieldCheck className="text-primary" />
              <div>
                <p className="text-sm md:text-base font-semibold">Verified</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Listings
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <Home className="text-primary" />
              <div>
                <p className="text-sm md:text-base font-semibold">Easy</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Booking
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <Building2 className="text-primary" />
              <div>
                <p className="text-sm md:text-base font-semibold">Trusted</p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Landlords
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border bg-card shadow-xl">
            <Image
              src="/hero-house.webp"
              alt="Modern House"
              width={700}
              height={700}
              className="h-full w-full object-cover"
              priority
              unoptimized
            />
          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-6 -left-6 rounded-2xl border bg-background p-3 lg:p-5 shadow-lg">
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold">5K+</h4>

            <p className="text-xs lg:text-sm text-muted-foreground">
              Happy Renters
            </p>
          </div>

          <div className="absolute -right-6 -top-6 rounded-2xl border bg-background p-3 lg:p-5 shadow-lg">
            <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold">1K+</h4>

            <p className="text-xs lg:text-sm text-muted-foreground">
              Verified Properties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
