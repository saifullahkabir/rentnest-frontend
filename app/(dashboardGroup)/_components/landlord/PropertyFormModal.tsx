"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { LandlordProperty } from "@/lib/types/landlord-property";

export type Category = {
  id: string;
  name: string;
};

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

type PropertyFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  mode: "create" | "edit";

  property?: LandlordProperty | null;

  categories: Category[];

  onSubmit: (data: PropertyFormData) => Promise<void>;

  isSubmitting?: boolean;
};

export default function PropertyFormDialog({
  open,
  onOpenChange,
  mode,
  property,
  categories,
  onSubmit,
  isSubmitting = false,
}: PropertyFormDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PropertyFormData>({
    defaultValues: {
      title: "",
      description: "",
      location: "",
      image: "",
      categoryId: "",
      availability: "AVAILABLE",
    },
  });

  const categoryId = watch("categoryId");
  const availability = watch("availability");

  useEffect(() => {
    if (mode === "edit" && property) {
      reset({
        title: property.title,
        description: property.description,
        rentAmount: property.rentAmount,
        location: property.location,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        image: property.image,
        categoryId: property.categoryId,
        availability: property.availability,
      });
    }

    if (mode === "create" && open) {
      reset({
        title: "",
        description: "",
        location: "",
        image: "",
        categoryId: "",
        availability: "AVAILABLE",
      });
    }
  }, [mode, property, open, reset]);

  const submitHandler = async (data: PropertyFormData) => {
    await onSubmit(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create Property" : "Edit Property"}
          </DialogTitle>

          <DialogDescription>
            {mode === "create"
              ? "Add a new property to your rental listings."
              : "Update your property information."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Property Title</Label>

            <Input
              id="title"
              placeholder="e.g. Modern Apartment"
              {...register("title", {
                required: "Property title is required",
              })}
            />

            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>

            <Textarea
              id="description"
              placeholder="Describe your property..."
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
            />

            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Rent + Location */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Rent */}
            <div className="space-y-2">
              <Label htmlFor="rentAmount">Monthly Rent</Label>

              <Input
                id="rentAmount"
                type="number"
                min={1}
                placeholder="e.g. 20000"
                {...register("rentAmount", {
                  required: "Rent amount is required",
                  setValueAs: (value) =>
                    value === "" ? undefined : Number(value),
                  min: {
                    value: 1,
                    message: "Rent must be greater than 0",
                  },
                })}
              />

              {errors.rentAmount && (
                <p className="text-sm text-red-500">
                  {errors.rentAmount.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>

              <Input
                id="location"
                placeholder="Mirpur, Dhaka"
                {...register("location", {
                  required: "Location is required",
                })}
              />

              {errors.location && (
                <p className="text-sm text-red-500">
                  {errors.location.message}
                </p>
              )}
            </div>
          </div>

          {/* Bedrooms + Bathrooms */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Bedrooms */}
            <div className="space-y-2">
              <Label htmlFor="bedrooms">Bedrooms</Label>

              <Input
                id="bedrooms"
                type="number"
                min={0}
                placeholder="e.g. 2"
                {...register("bedrooms", {
                  required: "Bedrooms are required",
                  setValueAs: (value) =>
                    value === "" ? undefined : Number(value),
                  min: {
                    value: 0,
                    message: "Invalid bedroom count",
                  },
                })}
              />

              {errors.bedrooms && (
                <p className="text-sm text-red-500">
                  {errors.bedrooms.message}
                </p>
              )}
            </div>

            {/* Bathrooms */}
            <div className="space-y-2">
              <Label htmlFor="bathrooms">Bathrooms</Label>

              <Input
                id="bathrooms"
                type="number"
                min={0}
                placeholder="e.g. 2"
                {...register("bathrooms", {
                  required: "Bathrooms are required",
                  setValueAs: (value) =>
                    value === "" ? undefined : Number(value),
                  min: {
                    value: 0,
                    message: "Invalid bathroom count",
                  },
                })}
              />

              {errors.bathrooms && (
                <p className="text-sm text-red-500">
                  {errors.bathrooms.message}
                </p>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>

            <Input
              id="image"
              type="url"
              placeholder="https://example.com/property.jpg"
              {...register("image", {
                required: "Image URL is required",
              })}
            />

            {errors.image && (
              <p className="text-sm text-red-500">{errors.image.message}</p>
            )}
          </div>

          {/* Category + Availability */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Category */}
            <div className="space-y-2">
              <Label>Category</Label>

              <Select
                value={categoryId}
                onValueChange={(value) => {
                  setValue("categoryId", value, {
                    shouldValidate: true,
                  });
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <input
                type="hidden"
                {...register("categoryId", {
                  required: "Category is required",
                })}
              />

              {errors.categoryId && (
                <p className="text-sm text-red-500">
                  {errors.categoryId.message}
                </p>
              )}
            </div>

            {/* Availability */}
            <div className="space-y-2">
              <Label>Availability</Label>

              <Select
                value={availability}
                onValueChange={(value) => {
                  setValue(
                    "availability",
                    value as "AVAILABLE" | "UNAVAILABLE",
                    {
                      shouldValidate: true,
                    },
                  );
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select availability" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="AVAILABLE">Available</SelectItem>
                  <SelectItem value="UNAVAILABLE">Unavailable</SelectItem>
                </SelectContent>
              </Select>

              <input type="hidden" {...register("availability")} />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />

                  {mode === "create" ? "Creating..." : "Updating..."}
                </>
              ) : (
                <>
                  {mode === "create" && <Plus className="h-4 w-4" />}

                  {mode === "create" ? "Create Property" : "Update Property"}
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
