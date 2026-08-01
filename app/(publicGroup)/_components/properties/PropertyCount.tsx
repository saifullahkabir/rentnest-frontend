import { Button } from "@/components/ui/button";

export default async function PropertyCount({ total }: { total: number }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">Properties</h2>

      <Button variant="outline" size="sm">
        <p className="text-muted-foreground">
          {total} {total === 1 ? "Property" : "Properties"} Found
        </p>
      </Button>
    </div>
  );
}
