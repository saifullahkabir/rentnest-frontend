import Link from "next/link";
import { House } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <House className="h-5 w-5" />
      </div>

      <div className="leading-none">
        <h1 className="text-xl font-bold tracking-tight">
          Rent<span className="text-primary">Nest</span>
        </h1>

        <p className="text-[11px] text-muted-foreground">
          Rental Marketplace
        </p>
      </div>
    </Link>
  );
}