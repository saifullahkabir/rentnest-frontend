"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Plus } from "lucide-react";
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

import { createCategory } from "../../_actions/admin-actions/adminCategories";

type CategoryCreateDialogProps = {
  children?: React.ReactNode;
};

export default function CategoryCreateDialog({
  children,
}: CategoryCreateDialogProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = async () => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      toast.error("Category name is required.");
      return;
    }

    try {
      setIsCreating(true);

      const result = await createCategory(trimmedName);

      toast.success(result.message || "Category created successfully.");

      setName("");
      setOpen(false);

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create category.",
      );
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!isCreating) {
          setOpen(value);
        }
      }}
    >
      <DialogTrigger asChild>
        {children ?? (
          <Button className="rounded-xl">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>

          <DialogDescription>Add a new property category.</DialogDescription>
        </DialogHeader>

        <div className="space-y-2 py-2">
          <label htmlFor="category-name" className="text-sm font-medium">
            Category Name
          </label>

          <Input
            id="category-name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="e.g. Flat"
            disabled={isCreating}
            className="rounded-xl"
          />
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={isCreating}
            className="rounded-xl"
          >
            Cancel
          </Button>

          <Button
            type="button"
            onClick={handleCreate}
            disabled={isCreating}
            className="rounded-xl"
          >
            {isCreating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Create
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
