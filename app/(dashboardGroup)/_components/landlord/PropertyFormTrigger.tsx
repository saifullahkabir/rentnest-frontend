"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Pencil, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { LandlordProperty } from "@/lib/types/landlord-property";
import PropertyFormDialog from "./PropertyFormModal";
import { createProperty, updateProperty } from "../../_actions/landlord-actions/landlordProperties";

type PropertyFormData = {
  title: string;
  description: string;
  rentAmount: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  categoryId: string;
  availability: "AVAILABLE" | "UNAVAILABLE";
};

type Category = {
  id: string;
  name: string;
};

type PropertyFormTriggerProps = {
  mode: "create" | "edit";
  property?: LandlordProperty | null;
  categories: Category[];
};

export default function PropertyFormTrigger({
  mode,
  property = null,
  categories,
}: PropertyFormTriggerProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: PropertyFormData) => {
    try {
      setIsSubmitting(true);

      if (mode === "create") {
        const result = await createProperty(data);

        if (!result.success) {
          throw new Error(result.message || "Failed to create property.");
        }

        toast.success(result.message || "Property created successfully.");
      } else {
        if (!property) {
          throw new Error("Property not found.");
        }

        const result = await updateProperty(property.id, data);

        if (!result.success) {
          throw new Error(result.message || "Failed to update property.");
        }

        toast.success(result.message || "Property updated successfully.");
      }

      setOpen(false);

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        variant={mode === "create" ? "default" : "outline"}
        onClick={() => setOpen(true)}
        className="rounded-xl"
      >
        {mode === "create" ? (
          <>
            <Plus className="h-4 w-4" />
            Create Property
          </>
        ) : (
          <>
            <Pencil className="h-4 w-4" />
            Edit
          </>
        )}
      </Button>

      <PropertyFormDialog
        open={open}
        onOpenChange={setOpen}
        mode={mode}
        property={property}
        categories={categories}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </>
  );
}
