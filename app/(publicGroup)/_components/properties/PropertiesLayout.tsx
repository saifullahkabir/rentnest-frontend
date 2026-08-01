import PropertyFilterSidebar from "./PropertyFilterSidebar";
import PropertySearchBar from "./PropertySearchBar";
import PropertyCount from "./PropertyCount";
import PropertyList from "./PropertyList";
import PropertyPagination from "./PropertyPagination";
import { IPropertyQuery } from "@/lib/types/property";
import { Suspense } from "react";
import PropertySkeletonGrid from "../property/PropertySkeletonGrid";
import { getCategories } from "../../_action/category/getCategories";

export default async function PropertiesLayout({
  query,
}: {
  query?: IPropertyQuery;
}) {
  const categories = await getCategories();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Search + Sort */}
      <PropertySearchBar />

      {/* Sidebar + Content */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside>
          <PropertyFilterSidebar categories={categories.data} />
        </aside>

        <main className="space-y-6">
          <PropertyCount />
          <Suspense fallback={<PropertySkeletonGrid />}>
            <PropertyList query={query} />
          </Suspense>

          <PropertyPagination />
        </main>
      </div>
    </section>
  );
}
