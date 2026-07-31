import PropertyFilterSidebar from "./PropertyFilterSidebar";
import PropertySearchBar from "./PropertySearchBar";
import PropertyCount from "./PropertyCount";
import PropertyList from "./PropertyList";
import PropertyPagination from "./PropertyPagination";
import { IPropertyQuery } from "@/lib/types/property";

export default function PropertiesLayout({
  query,
}: {
  query?: IPropertyQuery;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Search + Sort */}
      <PropertySearchBar />

      {/* Sidebar + Content */}
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside>
          <PropertyFilterSidebar />
        </aside>

        <main className="space-y-6">
          <PropertyCount />

          <PropertyList query={query} />

          <PropertyPagination />
        </main>
      </div>
    </section>
  );
}
