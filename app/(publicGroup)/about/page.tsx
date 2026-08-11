"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Home,
  Search,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "3",
    label: "User Roles",
  },
  {
    value: "24/7",
    label: "Property Access",
  },
  {
    value: "100%",
    label: "Secure Payments",
  },
  {
    value: "1",
    label: "Simple Platform",
  },
];

const features = [
  {
    icon: Search,
    title: "Find the Right Property",
    description:
      "Browse properties by category and discover rental homes that match your lifestyle, budget, and preferences.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    description:
      "Built with secure authentication, role-based access control, and protected payment workflows.",
  },
  {
    icon: WalletCards,
    title: "Simple Rental Process",
    description:
      "Submit rental requests, manage rental activities, and complete payments through a streamlined experience.",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description:
      "A unified platform designed for tenants, landlords, and administrators with dedicated workflows.",
  },
];

const tenantPoints = [
  "Discover and explore available rental properties",
  "Filter properties based on categories",
  "Submit rental requests to landlords",
  "Track rental request status",
  "Complete secure rental payments",
];

const landlordPoints = [
  "Create and manage rental properties",
  "Manage incoming rental requests",
  "Review tenant information",
  "Approve or reject rental requests",
  "Manage rental activities from one dashboard",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}

      <section className="relative border-b bg-muted/20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary" />
              About RentNest
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Making rental living{" "}
              <span className="text-primary">simpler.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              RentNest is a modern rental property platform designed to make
              finding, managing, and renting properties easier for tenants and
              landlords.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl">
                <Link href="/properties">
                  Explore Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <Link href="/auth/register">Create an Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-5 py-8 text-center sm:px-6 sm:py-10"
            >
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border bg-muted/30 p-6 shadow-sm sm:p-8">
                <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Building2 className="h-7 w-7" />
                    </div>

                    <div>
                      <p className="font-semibold">RentNest</p>
                      <p className="text-sm text-muted-foreground">
                        Rental made simple
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 rounded-xl border p-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

                      <div>
                        <p className="text-sm font-medium">
                          Find your next home
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Discover properties that fit your needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border p-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

                      <div>
                        <p className="text-sm font-medium">
                          Connect with landlords
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Send rental requests directly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border p-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

                      <div>
                        <p className="text-sm font-medium">
                          Manage everything easily
                        </p>
                        <p className="text-xs text-muted-foreground">
                          One dashboard for your rental activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -right-3 hidden rounded-2xl border bg-background p-4 shadow-xl sm:block lg:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <BadgeCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Trusted Experience</p>
                    <p className="text-xs text-muted-foreground">
                      Simple & secure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A better way to manage rental properties.
              </h2>

              <div className="mt-6 space-y-4 text-muted-foreground">
                <p className="leading-7">
                  Finding a suitable rental property can often be time
                  consuming. At the same time, landlords need an easy way to
                  manage their properties and rental requests.
                </p>

                <p className="leading-7">
                  RentNest brings both sides together in one organized platform.
                  Tenants can discover properties and submit rental requests,
                  while landlords can manage their properties and respond to
                  requests from a dedicated dashboard.
                </p>

                <p className="leading-7">
                  Behind the scenes, administrators can manage users,
                  properties, categories, rentals, and payments to keep the
                  platform organized and reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RENTNEST */}

      <section className="border-y bg-muted/20 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why RentNest
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need for a smoother rental experience
            </h2>

            <p className="mt-4 text-muted-foreground">
              Designed around simplicity, security, and better communication
              between tenants and landlords.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-semibold">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOR TENANTS & LANDLORDS */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              One Platform
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for both sides of the rental journey
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Tenant */}
            <div className="rounded-3xl border bg-card p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Home className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">For</p>
                  <h3 className="text-xl font-bold">Tenants</h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Everything you need to find a property and manage your rental
                journey from one place.
              </p>

              <ul className="mt-6 space-y-3">
                {tenantPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 rounded-xl">
                <Link href="/properties">
                  Find a Property
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Landlord */}
            <div className="rounded-3xl border bg-card p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">For</p>
                  <h3 className="text-xl font-bold">Landlords</h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Manage your rental properties, requests, and tenant interactions
                through a dedicated workflow.
              </p>

              <ul className="mt-6 space-y-3">
                {landlordPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="mt-8 rounded-xl">
                <Link href="/auth/register">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}

      <section className="border-y bg-muted/20 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Security and simplicity at the core
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
            RentNest is built with secure authentication, role-based
            permissions, protected APIs, and Stripe-powered payment workflows to
            provide a reliable rental experience.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "JWT Authentication",
              "Role-Based Access",
              "Protected APIs",
              "Secure Payments",
            ].map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-xl sm:px-12 sm:py-16">
            {/* Decoration */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <CircleDollarSign className="h-7 w-7" />
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to find your next place?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-primary-foreground/80 sm:text-base">
                Explore available properties on RentNest and take the next step
                toward finding a place that feels like home.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-xl"
                >
                  <Link href="/properties">
                    Browse Properties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/auth/register">Join RentNest</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
