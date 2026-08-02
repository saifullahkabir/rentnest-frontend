"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import Logo from "@/components/ui/navbarLogo";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import SidebarContent from "./SidebarContent";


type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

type DashboardSidebarProps = {
  role: UserRole;
};

export default function DashboardSidebar({
  role,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigation = () => {
    setMobileOpen(false);
  };

  const handleLogout = async () => {
    try {
      setMobileOpen(false);

      await logout();

      toast.success("Logged out successfully");

      router.replace("/auth/login");
      router.refresh();
    } catch {
      toast.error("Logout failed");
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r bg-background lg:block">
        <SidebarContent
          role={role}
          pathname={pathname}
          onNavigation={handleNavigation}
          onLogout={handleLogout}
        />
      </aside>

      {/* Mobile / Tablet Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur lg:hidden">
        <div className="transition-opacity hover:opacity-80">
          <Logo />
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileOpen(true)}
          aria-label="Open dashboard menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Mobile / Tablet Sidebar */}
      <Sheet
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      >
        <SheetContent
          side="left"
          className="w-72 p-0 sm:w-80"
        >
          <SidebarContent
            role={role}
            pathname={pathname}
            onNavigation={handleNavigation}
            onLogout={handleLogout}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}