import type { Metadata } from "next";

import { getPropertyById } from "../../_action/property/getPropertyById";
import { getPropertyReviews } from "../../_action/property/getPropertyReviews";
import PropertyDetails from "../../_components/propertyDetails/PropertyDetails";

type PropertyDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Dynamic SEO Metadata
export async function generateMetadata({
  params,
}: PropertyDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const property = await getPropertyById(id);

  if (!property?.data) {
    return {
      title: "Property Not Found | RentNest",
      description:
        "The rental property you are looking for could not be found on RentNest.",
    };
  }

  const data = property.data;

  return {
    title: `${data.title}`,

    description:
      data.description ||
      `Explore ${data.title} for rent in ${data.location} on RentNest.`,

    keywords: [
      "rental property",
      "property for rent",
      "rental home",
      "apartment for rent",
      "RentNest",
      data.title,
      data.location,
      data.category?.name,
    ].filter(Boolean),

    openGraph: {
      title: `${data.title} | RentNest`,

      description:
        data.description ||
        `Explore ${data.title} for rent in ${data.location} on RentNest.`,

      type: "website",

      siteName: "RentNest",

      images: data.image
        ? [
            {
              url: data.image,
              width: 1200,
              height: 630,
              alt: data.title,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title: `${data.title} | RentNest`,

      description:
        data.description ||
        `Explore ${data.title} for rent in ${data.location} on RentNest.`,

      images: data.image ? [data.image] : [],
    },
  };
}

// Property Details Page
export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = await getPropertyById(id);

  const reviews = await getPropertyReviews(id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <PropertyDetails property={property.data} reviews={reviews} />
    </main>
  );
}
