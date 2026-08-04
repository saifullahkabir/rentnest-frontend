import HeroSection from "@/components/home/Hero";
import PropertySection from "./_components/property/PropertySection";
import HowRentNestWorks from "@/components/home/HowRentNestWorks";
import BrowseByCategory from "@/components/home/BrowseByCategory";
import { getCategories } from "./_action/category/getCategories";
import WhyChooseRentNest from "@/components/home/WhyChooseRentNest";
import Footer from "@/components/home/Footer";

export default async function HomePage() {
  const categoriesResult = await getCategories();

  const categories = categoriesResult.data ?? [];
  console.log(categories);
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
