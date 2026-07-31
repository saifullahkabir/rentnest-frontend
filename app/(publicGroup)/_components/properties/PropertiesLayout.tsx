import PropertyFilterSidebar from "./PropertyFilterSidebar";
import PropertySearchBar from "./PropertySearchBar";
import PropertyCount from "./PropertyCount";
import PropertyList from "./PropertyList";
import PropertyPagination from "./PropertyPagination";

export default function PropertiesLayout() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      {/* Search + Sort */}
      <PropertySearchBar />

      {/* Sidebar + Content */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside>
          <PropertyFilterSidebar />
        </aside>

        <main className="space-y-6">
          <PropertyCount />

          <PropertyList />

          <PropertyPagination />
        </main>
      </div>
    </section>
  );
}
