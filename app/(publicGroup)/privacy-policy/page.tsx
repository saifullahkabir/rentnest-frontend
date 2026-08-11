import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | RentNest",
  description:
    "Learn how RentNest collects, uses, protects, and manages your personal information.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          When you use RentNest, we may collect information that you provide
          directly to us as well as certain information generated through your
          use of the platform.
        </p>

        <ul>
          <li>
            Personal information such as your name, email address, and phone
            number.
          </li>

          <li>
            Account information such as your selected role and account status.
          </li>

          <li>
            Property information submitted by landlords, including property
            details, location, pricing, and images.
          </li>

          <li>Rental request and transaction-related information.</li>

          <li>
            Technical information such as browser, device, and basic usage
            information.
          </li>
        </ul>
      </>
    ),
  },

  {
    number: "02",
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          We use collected information to provide, maintain, and improve the
          RentNest platform and its services.
        </p>

        <ul>
          <li>Create and manage your RentNest account.</li>

          <li>Provide property discovery and rental services.</li>

          <li>Process and manage rental requests.</li>

          <li>Process payments where applicable.</li>

          <li>Provide customer support and respond to inquiries.</li>

          <li>Improve platform functionality and user experience.</li>

          <li>Detect and prevent fraudulent or unauthorized activities.</li>
        </ul>
      </>
    ),
  },

  {
    number: "03",
    title: "Account Information",
    content: (
      <p>
        You are responsible for ensuring that the information associated with
        your account is accurate and up to date. You should also take reasonable
        steps to protect your login credentials and prevent unauthorized access
        to your account.
      </p>
    ),
  },

  {
    number: "04",
    title: "Property & Rental Information",
    content: (
      <>
        <p>
          Landlords may provide property information through RentNest so that
          tenants can discover available rental properties.
        </p>

        <p>
          Tenants may provide rental request information when requesting to rent
          a property. Certain information may be shared with the relevant
          landlord when necessary to facilitate the rental process.
        </p>
      </>
    ),
  },

  {
    number: "05",
    title: "Payment Information",
    content: (
      <>
        <p>
          RentNest may support online payments through third-party payment
          providers such as Stripe.
        </p>

        <p>
          Payment information is processed by the applicable payment provider.
          RentNest does not store your complete credit or debit card information
          on its own servers.
        </p>

        <p>
          Payment providers may have their own privacy policies and terms that
          apply to transactions processed through their services.
        </p>
      </>
    ),
  },

  {
    number: "06",
    title: "Cookies & Similar Technologies",
    content: (
      <p>
        RentNest may use cookies or similar technologies to maintain user
        sessions, remember preferences, improve platform functionality, and
        understand how users interact with the website.
      </p>
    ),
  },

  {
    number: "07",
    title: "Data Security",
    content: (
      <p>
        We take reasonable technical and organizational measures to protect user
        information against unauthorized access, alteration, disclosure, or
        destruction. However, no internet-based service can guarantee complete
        security of information transmitted or stored online.
      </p>
    ),
  },

  {
    number: "08",
    title: "Information Sharing",
    content: (
      <>
        <p>
          RentNest does not sell your personal information. Information may be
          shared when necessary to operate the platform or provide requested
          services.
        </p>

        <ul>
          <li>
            With landlords or tenants when necessary to facilitate rental
            activities.
          </li>

          <li>With payment providers for processing authorized payments.</li>

          <li>
            With service providers that help us operate, maintain, or improve
            the platform.
          </li>

          <li>When required by applicable law or a valid legal request.</li>
        </ul>
      </>
    ),
  },

  {
    number: "09",
    title: "Data Retention",
    content: (
      <p>
        We may retain account, transaction, and other relevant information for
        as long as necessary to provide our services, maintain appropriate
        records, resolve disputes, enforce our terms, or comply with legal
        obligations.
      </p>
    ),
  },

  {
    number: "10",
    title: "Your Privacy Choices",
    content: (
      <>
        <p>
          Depending on the functionality available on the platform, you may be
          able to review or update certain information associated with your
          account.
        </p>

        <p>
          If you have concerns about your personal information or would like to
          request an update or deletion, you can contact the RentNest support
          team.
        </p>
      </>
    ),
  },

  {
    number: "11",
    title: "Third-Party Services",
    content: (
      <p>
        RentNest may use third-party services such as payment providers,
        authentication services, hosting platforms, analytics tools, or other
        infrastructure providers. These services may process information
        according to their own privacy policies and applicable terms.
      </p>
    ),
  },

  {
    number: "12",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        RentNest may update this Privacy Policy from time to time. When changes
        are made, the updated version will be published on this page together
        with a revised update date. We encourage you to review this page
        periodically to stay informed about how your information is handled.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
              RentNest Privacy
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Your privacy matters to us. Learn how RentNest collects, uses,
              protects, and manages your information.
            </p>

            {/* Meta */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span>
                Last updated{" "}
                <span className="font-medium text-foreground">August 2026</span>
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />

              <span>12 sections</span>
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
                This Privacy Policy explains how RentNest collects, uses,
                stores, and protects information when you use our rental
                property platform. By using RentNest, you acknowledge that you
                have read and understood this Privacy Policy.
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

                      <div
                        className="
                          mt-4
                          space-y-4
                          text-sm
                          leading-7
                          text-muted-foreground
                          sm:text-[15px]

                          [&_ul]:mt-4
                          [&_ul]:list-disc
                          [&_ul]:space-y-2
                          [&_ul]:pl-5

                          [&_li]:pl-1
                        "
                      >
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
                      Privacy Support
                    </p>

                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                      Questions about your privacy?
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
                      If you have questions, concerns, or requests regarding
                      your personal information, feel free to contact us.
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

            {/* Footer Note */}
            <div className="mt-8 border-t pt-6">
              <p className="text-center text-xs leading-5 text-muted-foreground">
                Your privacy is important to us. We are committed to handling
                your information responsibly and transparently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
