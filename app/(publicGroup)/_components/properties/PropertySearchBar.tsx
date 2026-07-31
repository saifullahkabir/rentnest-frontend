"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";

export default function PropertySearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (value: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current); 
    }

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set("searchTerm", value.trim());
      } else {
        params.delete("searchTerm");
      }

      params.set("page", "1");

      router.replace(`${pathname}?${params.toString()}`);
    }, 500);
  };

  return (
    <div className="mx-auto mb-8 max-w-xl">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

        <Input
          defaultValue={searchParams.get("searchTerm") ?? ""}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search by title, location..."
          className="h-12 text-sm md:text-base rounded-full border-muted bg-background pl-12 pr-4 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-primary"
        />
      </div>
    </div>
  );
}
