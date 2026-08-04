"use client";

import { Search, Send, CheckCircle2, CreditCard } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Find a Property",
    description:
      "Browse available properties and find a home that matches your needs and budget.",
    icon: Search,
  },
  {
    step: "02",
    title: "Send Rental Request",
    description:
      "Choose your preferred property and send a rental request to the landlord.",
    icon: Send,
  },
  {
    step: "03",
    title: "Get Approved",
    description:
      "The landlord reviews your request and approves or rejects it based on availability.",
    icon: CheckCircle2,
  },
  {
    step: "04",
    title: "Pay Securely",
    description:
      "Once approved, complete your rental payment securely through Stripe Checkout.",
    icon: CreditCard,
  },
];

export default function HowRentNestWorks() {
  return (
    <section className="py-8 md:py-16 xl:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple & Easy
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How RentNest Works
          </h2>

          <p className="mt-4 text-muted-foreground">
            Finding and renting your next property is simple. Follow these four
            easy steps and get started today.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Step number */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-4xl font-bold text-muted/60">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
