import { Suspense } from "react";

import PropertyFilterSidebar from "./PropertyFilterSidebar";
import PropertySearchBar from "./PropertySearchBar";
import PropertyCount from "./PropertyCount";
import PropertyList from "./PropertyList";
import PropertyPagination from "./PropertyPagination";

import { IPropertyQuery } from "@/lib/types/property";

import { getCategories } from "../../_action/category/getCategories";
import { getPropertyMeta } from "../../_action/property/getPropertyMeta";

import PropertySkeletonGrid from "../property/PropertySkeletonGrid";

export default async function PropertiesLayout({
  query,
}: {
  query?: IPropertyQuery;
}) {
  const [categories, meta] = await Promise.all([
    getCategories(),
    getPropertyMeta({ query }),
  ]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      {/* Search */}
      <PropertySearchBar />

      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside>
          <PropertyFilterSidebar categories={categories.data} />
        </aside>

        {/* Main */}
        <main className="space-y-6">
          <PropertyCount total={meta.total} />

          <Suspense fallback={<PropertySkeletonGrid />}>
            <PropertyList query={query} />
          </Suspense>

          <PropertyPagination totalPages={meta.totalPages} />
        </main>
      </div>
    </section>
  );
}
