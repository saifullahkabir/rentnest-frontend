"use client";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = {
  id: string;
  name: string;
};

type Props = {
  categories: Category[];
};

export default function PropertyFilterSidebar({ categories }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = (updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    params.set("page", "1");

    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    router.replace(pathname);
  };

  return (
    <aside className="rounded-xl border bg-card p-5 h-fit sticky top-24">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filters</h2>

        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <div className="mt-6 space-y-6">
        {/* Availability */}
        <div className="space-y-3">
          <h3 className="font-medium">Availability</h3>

          <RadioGroup
            defaultValue={searchParams.get("availability") || ""}
            onValueChange={(value) =>
              updateQuery({
                availability: value,
              })
            }
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="AVAILABLE" id="available" />
              <Label htmlFor="available">Available</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="UNAVAILABLE" id="unavailable" />
              <Label htmlFor="unavailable">Unavailable</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label>Category</Label>

          <Select
            defaultValue={searchParams.get("categoryId") || ""}
            onValueChange={(value) =>
              updateQuery({
                categoryId: value,
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>

            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="space-y-3">
          <h3 className="font-medium">Price Range</h3>

          <Input
            type="number"
            placeholder="Minimum Price"
            defaultValue={searchParams.get("minPrice") || ""}
            onBlur={(e) =>
              updateQuery({
                minPrice: e.target.value,
              })
            }
          />

          <Input
            type="number"
            placeholder="Maximum Price"
            defaultValue={searchParams.get("maxPrice") || ""}
            onBlur={(e) =>
              updateQuery({
                maxPrice: e.target.value,
              })
            }
          />
        </div>

        {/* Sort */}
        <div className="space-y-2">
          <Label>Sort By</Label>

          <Select
            defaultValue={`${searchParams.get("sortBy") || "createdAt"}-${
              searchParams.get("sortOrder") || "desc"
            }`}
            onValueChange={(value) => {
              const [sortBy, sortOrder] = value.split("-");

              updateQuery({
                sortBy,
                sortOrder,
              });
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort Properties" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="createdAt-desc">Newest</SelectItem>
              <SelectItem value="createdAt-asc">Oldest</SelectItem>
              <SelectItem value="rentAmount-asc">Price: Low to High</SelectItem>
              <SelectItem value="rentAmount-desc">
                Price: High to Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </aside>
  );
}
