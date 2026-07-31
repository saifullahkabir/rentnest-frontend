import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PropertySearchBar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />

        <Input placeholder="Search by title, location..." className="pl-10" />
      </div>

      <Button>Search</Button>
    </div>
  );
}
