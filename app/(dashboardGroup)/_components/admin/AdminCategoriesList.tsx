"use client";

import { FolderOpen, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types/category";
import CategoryCreateDialog from "./CategoryCreateDialog";
import CategoryEditDialog from "./CategoryEditDialog";
import CategoryDeleteDialog from "./CategoryDeleteDialog";


type AdminCategoriesListProps = {
  categories: Category[];
};

export default function AdminCategoriesList({
  categories,
}: AdminCategoriesListProps) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">All Categories</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {categories.length}{" "}
            {categories.length === 1 ? "category" : "categories"} available
          </p>
        </div>

        <CategoryCreateDialog>
          <Button className="rounded-xl">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </CategoryCreateDialog>
      </div>

      {/* Empty state */}
      {categories.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
            <FolderOpen className="h-6 w-6 text-muted-foreground" />
          </div>

          <h3 className="mt-4 text-base font-semibold">No categories found</h3>

          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Create your first property category to get started.
          </p>

          <CategoryCreateDialog>
            <Button className="mt-5 rounded-xl">
              <Plus className="h-4 w-4" />
              Create Category
            </Button>
          </CategoryCreateDialog>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Category
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Created
                  </th>

                  <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Updated
                  </th>

                  <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {categories.map((category) => (
                  <tr
                    key={category.id}
                    className="transition-colors hover:bg-muted/20"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                          <FolderOpen className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <p className="font-medium">{category.name}</p>

                          <p className="text-xs text-muted-foreground">
                            {category.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {new Date(category.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </td>

                    <td className="px-5 py-4 text-sm text-muted-foreground">
                      {new Date(category.updatedAt).toLocaleDateString(
                        "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <CategoryEditDialog category={category} />

                        <CategoryDeleteDialog category={category} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="divide-y md:hidden">
            {categories.map((category) => (
              <div key={category.id} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <FolderOpen className="h-5 w-5 text-primary" />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate font-semibold">{category.name}</p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Created{" "}
                        {new Date(category.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 gap-2">
                    <CategoryEditDialog category={category} />

                    <CategoryDeleteDialog category={category} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
