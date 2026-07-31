import { Home } from "lucide-react";

export default function PropertyEmpty() {
  return (
    <div className="rounded-xl border py-20 text-center">
      <Home className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-xl font-semibold">No Property Found</h3>

      <p className="mt-2 text-muted-foreground">
        Try changing your search or filters.
      </p>
    </div>
  );
}
