import {
  BadgeCheck,
  CreditCard,
  Search,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Search,
    title: "Easy Property Search",
    description:
      "Find rental properties quickly with categories, locations, and property details that make your search easier.",
    className:
      "bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    icon: BadgeCheck,
    title: "Verified Listings",
    description:
      "Explore detailed property listings with important information to help you make a confident rental decision.",
    className:
      "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Complete your rental payments securely through Stripe without relying on manual or simulated payment methods.",
    className:
      "bg-purple-100 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
  },
  {
    icon: ShieldCheck,
    title: "Simple Rental Process",
    description:
      "Send a rental request, wait for approval, complete your payment, and manage your rental from one place.",
    className:
      "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
  },
];

export default function WhyChooseRentNest() {
  return (
    <section className="py-8 md:py-16 xl:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why RentNest
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need for a Better Rental Experience
          </h2>

          <p className="mt-4 text-muted-foreground">
            RentNest makes it easier to discover properties, connect with
            landlords, submit rental requests, and complete payments securely.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.className} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
