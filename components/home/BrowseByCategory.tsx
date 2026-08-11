
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  House,
  Home,
  UserRound,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type BrowseByCategoryProps = {
  categories: Category[];
};

const categoryIcons: Record<string, LucideIcon> = {
  Apartment: Building2,
  House: House,
  Family: Users,
  Bachelor: UserRound,
  Office: BriefcaseBusiness,
  Studio: Building2,
};

export default function BrowseByCategory({
  categories,
}: BrowseByCategoryProps) {
  if (!categories.length) {
    return null;
  }

  return (
    <section className="py-8 md:py-16 xl:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Explore Properties
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Browse by Category
            </h2>

            <p className="mt-3 text-muted-foreground">
              Explore rental properties by category and find a place that
              matches your lifestyle and needs.
            </p>
          </div>

          <Link
            href="/properties"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-primary"
          >
            View all properties
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Categories Carousel */}
        <div className="relative mt-10 px-10  ">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {categories.map((category) => {
                const Icon = categoryIcons[category.name] ?? Home;

                return (
                  <CarouselItem
                    key={category.id}
                    className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <Link
                      href={`/properties?category=${category.id}`}
                      className="group block h-full"
                    >
                      <div className="relative min-h-55 h-full overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        {/* Decorative circle */}
                        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                        {/* Icon */}
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>

                        {/* Category */}
                        <h3 className="relative mt-7 text-xl font-semibold tracking-tight">
                          {category.name}
                        </h3>

                        <p className="relative mt-2 text-sm leading-6 text-muted-foreground">
                          Explore {category.name.toLowerCase()} properties
                          available for rent.
                        </p>

                        {/* CTA */}
                        <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                          Explore Properties
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            {/* Navigation */}
            <CarouselPrevious className="-left-10 sm:-left-12" />
            <CarouselNext className="-right-10 sm:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
