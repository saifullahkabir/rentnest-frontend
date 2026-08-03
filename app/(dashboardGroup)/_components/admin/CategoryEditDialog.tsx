"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Edit, Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Category } from "@/lib/types/category";
import { updateCategory } from "../../_actions/admin-actions/adminCategories";

type CategoryEditDialogProps = {
  category: Category;
};

export default function CategoryEditDialog({
  category,
}: CategoryEditDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(category.name);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      toast.error("Category name is required.");
      return;
    }

    if (trimmedName === category.name) {
      toast.info("No changes made.");
      return;
    }

    try {
      setIsUpdating(true);

      const result = await updateCategory(category.id, trimmedName);

      toast.success(result.message || "Category updated successfully.");

      setOpen(false);

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to update category.",
      );
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isUpdating) {
          setOpen(value);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="rounded-lg"
        >
          <Edit className="h-4 w-4" />
          <span className="hidden sm:inline">Edit</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Category</DialogTitle>

          <DialogDescription>
            Update the property category name.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-2">
          <label
            htmlFor={`category-${category.id}`}
            className="text-sm font-medium"
          >
            Category Name
          </label>

          <Input
            id={`category-${category.id}`}
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={isUpdating}
            className="rounded-xl"
          />
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isUpdating}
            className="rounded-xl"
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleUpdate}
            disabled={isUpdating}
            className="rounded-xl"
          >
            {isUpdating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Edit className="h-4 w-4" />
                Update
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
