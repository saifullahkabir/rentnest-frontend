import HeroSection from "@/components/home/Hero";
import PropertySection from "./_components/property/PropertySection";
import HowRentNestWorks from "@/components/home/HowRentNestWorks";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import { getCategories } from "./_action/category/getCategories";
import WhyChooseRentNest from "@/components/home/WhyChooseRentNest";
import Footer from "@/components/home/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RentNest | Find Your Perfect Rental Home",
  description:
    "Find verified rental properties, connect with trusted landlords, and discover your next home with RentNest. Browse apartments, houses, offices, and more.",

  openGraph: {
    title: "RentNest | Find Your Perfect Rental Home",
    description:
      "Discover verified rental properties and connect with trusted landlords on RentNest.",
    type: "website",
    siteName: "RentNest",
    images: [
      {
        url: "/hero-house.webp",
        width: 1200,
        height: 630,
        alt: "RentNest - Find Your Perfect Rental Home",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RentNest | Find Your Perfect Rental Home",
    description:
      "Discover verified rental properties and find your next home with RentNest.",
    images: ["/hero-house.webp"],
  },
};

export default async function HomePage() {
  const categoriesResult = await getCategories();

  const categories = categoriesResult.data ?? [];
  return (
    <div>
      <HeroSection />
      <PropertySection />
      <BrowseByCategory categories={categories} />
      <HowRentNestWorks />
      <WhyChooseRentNest />
      <Footer />
    </div>
  );
}
