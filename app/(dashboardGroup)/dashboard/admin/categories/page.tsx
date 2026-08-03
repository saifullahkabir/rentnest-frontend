import { getAllCategories } from "@/app/(dashboardGroup)/_actions/admin-actions/adminCategories";
import AdminCategoriesList from "@/app/(dashboardGroup)/_components/admin/AdminCategoriesList";

export default async function AdminCategoriesPage() {
  const result = await getAllCategories();

  const categories = result.data ?? [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Categories
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Create, update, and manage property categories.
          </p>
        </div>
      </div>

      <AdminCategoriesList categories={categories} />
    </div>
  );
}
