import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | RentNest",
  description:
    "Read the terms and conditions for using the RentNest rental property platform.",
};

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using RentNest, you agree to comply with these Terms &
        Conditions. If you do not agree with any part of these terms, please do
        not use the platform.
      </p>
    ),
  },

  {
    number: "02",
    title: "About RentNest",
    content: (
      <p>
        RentNest is an online rental property platform that connects tenants
        with landlords. Users can browse available properties, submit rental
        requests, manage properties, and communicate through the platform.
      </p>
    ),
  },

  {
    number: "03",
    title: "User Accounts",
    content: (
      <>
        <p>
          Users are responsible for providing accurate information when creating
          an account. You are also responsible for keeping your account
          credentials secure and for all activities performed through your
          account.
        </p>

        <ul>
          <li>Provide accurate and up-to-date account information.</li>
          <li>Do not use another person&apos;s account without permission.</li>
          <li>
            Keep your password and account credentials confidential and secure.
          </li>
          <li>
            RentNest may restrict or suspend accounts that violate these terms.
          </li>
        </ul>
      </>
    ),
  },

  {
    number: "04",
    title: "Property Listings",
    content: (
      <>
        <p>
          Landlords are responsible for ensuring that property information
          published on RentNest is accurate and up to date. Property
          descriptions, rental prices, availability, images, and other
          information should be provided honestly.
        </p>

        <p>
          RentNest may remove or restrict listings that contain misleading,
          inappropriate, fraudulent, or prohibited information.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Rental Requests",
    content: (
      <>
        <p>
          Tenants may submit rental requests for available properties.
          Submitting a rental request does not guarantee approval or rental of
          the property.
        </p>

        <p>
          Landlords are responsible for reviewing and responding to rental
          requests according to their own requirements and availability.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Payments",
    content: (
      <>
        <p>
          Where online payments are supported, payments may be processed through
          third-party payment providers such as Stripe. Users are responsible
          for providing valid payment information.
        </p>

        <p>
          RentNest does not store users&apos; complete card information. Payment
          processing is handled by the applicable third-party payment provider.
        </p>
      </>
    ),
  },

  {
    number: "07",
    title: "Prohibited Activities",
    content: (
      <>
        <p>
          Users must not use RentNest for unlawful, fraudulent, abusive, or
          harmful activities.
        </p>

        <ul>
          <li>Providing false or misleading information.</li>

          <li>
            Attempting to access another user&apos;s account without
            authorization.
          </li>

          <li>
            Uploading malicious software, harmful content, or inappropriate
            material.
          </li>

          <li>Using the platform for fraudulent or illegal transactions.</li>

          <li>
            Attempting to interfere with or compromise the platform&apos;s
            security.
          </li>
        </ul>
      </>
    ),
  },

  {
    number: "08",
    title: "Account Suspension or Termination",
    content: (
      <p>
        RentNest reserves the right to suspend, restrict, or terminate accounts
        that violate these Terms & Conditions or negatively affect the security
        and integrity of the platform.
      </p>
    ),
  },

  {
    number: "09",
    title: "Platform Availability",
    content: (
      <p>
        RentNest aims to keep the platform available and functional but does not
        guarantee uninterrupted or error-free service. Maintenance, technical
        issues, or circumstances beyond our control may temporarily affect
        availability.
      </p>
    ),
  },

  {
    number: "10",
    title: "Limitation of Responsibility",
    content: (
      <p>
        RentNest provides a platform for connecting tenants and landlords. Users
        are responsible for independently verifying property information, rental
        agreements, identities, and other relevant details before entering into
        any rental arrangement.
      </p>
    ),
  },

  {
    number: "11",
    title: "Changes to These Terms",
    content: (
      <p>
        RentNest may update these Terms & Conditions from time to time. Any
        changes will be reflected on this page with an updated revision date.
        Continued use of the platform after changes are published means that you
        accept the updated terms.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/20">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              RentNest Legal
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Please review the terms that govern your use of the RentNest
              rental property platform.
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span>
                Last updated{" "}
                <span className="font-medium text-foreground">August 2026</span>
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

              <span>11 sections</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[180px_minmax(0,1fr)]">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                On this page
              </p>

              <nav className="mt-5 space-y-3 border-l pl-4">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#section-${section.number}`}
                    className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Document */}
          <div className="min-w-0">
            {/* Introduction */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                These Terms & Conditions explain the rules and guidelines for
                using RentNest. By creating an account or using any part of the
                platform, you acknowledge that you have read and understood
                these terms.
              </p>
            </div>

            {/* Sections */}
            <div className="mt-10 divide-y rounded-2xl border bg-card shadow-sm">
              {sections.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-24 p-6 sm:p-8"
                >
                  <div className="flex gap-5 sm:gap-7">
                    {/* Number */}
                    <div className="shrink-0">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                        {section.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Contact */}
            <section className="mt-10 overflow-hidden rounded-2xl border bg-muted/30">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Need help?
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                      Questions about these terms?
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                      If you have any questions about these Terms & Conditions,
                      our support team is here to help.
                    </p>
                  </div>

                  <a
                    href="mailto:support@rentnest.com"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    Contact Support
                  </a>
                </div>

                <div className="mt-6 border-t pt-5 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">RentNest</span>
                  <span className="mx-2">•</span>
                  Chattogram, Bangladesh
                  <span className="mx-2">•</span>
                  <a
                    href="mailto:support@rentnest.com"
                    className="text-primary hover:underline"
                  >
                    support@rentnest.com
                  </a>
                </div>
              </div>
            </section>

            {/* Agreement */}
            <div className="mt-8 border-t pt-6">
              <p className="text-center text-xs leading-5 text-muted-foreground">
                By using RentNest, you acknowledge that you have read,
                understood, and agreed to these Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
