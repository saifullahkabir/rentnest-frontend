"use client";

import Link from "next/link";
import {
  Home,
  Building2,
  LayoutDashboard,
  LogOut,
  Users,
  GitPullRequestArrow,
  Wallet,
  ListPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/ui/navbarLogo";

type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

type SidebarContentProps = {
  role: UserRole;
  pathname: string;
  onNavigation: () => void;
  onLogout: () => Promise<void>;
};

const roleMenu = {
  TENANT: [
    {
      label: "My Dashboard",
      href: "/dashboard/tenant",
      icon: LayoutDashboard,
    },
    {
      label: "My Rental Requests",
      href: "/dashboard/tenant/rental-requests",
      icon: GitPullRequestArrow,
    },
    {
      label: "My Payments",
      href: "/dashboard/tenant/payments",
      icon: Wallet,
    },
  ],

  LANDLORD: [
    {
      label: "My Dashboard",
      href: "/dashboard/landlord",
      icon: LayoutDashboard,
    },
    {
      label: "My Properties",
      href: "/dashboard/landlord/properties",
      icon: Building2,
    },
    {
      label: "Rental Requests",
      href: "/dashboard/landlord/rental-requests",
      icon: GitPullRequestArrow,
    },
    {
      label: "Payments",
      href: "/dashboard/landlord/payments",
      icon: Wallet,
    },
  ],

  ADMIN: [
    {
      label: "Admin Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      label: "Rental Requests",
      href: "/dashboard/admin/rental-requests",
      icon: GitPullRequestArrow,
    },
    {
      label: "Properties",
      href: "/dashboard/admin/properties",
      icon: Building2,
    },
    {
      label: "Payments",
      href: "/dashboard/admin/payments",
      icon: Wallet,
    },
    {
      label: "Categories",
      href: "/dashboard/admin/categories",
      icon: ListPlus,
    },
  ],
} satisfies Record<
  UserRole,
  {
    label: string;
    href: string;
    icon: typeof LayoutDashboard;
  }[]
>;

export default function SidebarContent({
  role,
  pathname,
  onNavigation,
  onLogout,
}: SidebarContentProps) {
  const menuItems = roleMenu[role];

  const isActive = (href: string) => {
    if (
      href === "/dashboard/tenant" ||
      href === "/dashboard/landlord" ||
      href === "/dashboard/admin"
    ) {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <div className="transition-opacity hover:opacity-80">
          <Logo />
        </div>
      </div>

      <Separator />

      {/* Role */}
      <div className="px-4 pt-5">
        <div className="rounded-xl bg-primary/5 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Dashboard
          </p>

          <p className="mt-1 text-sm font-semibold">
            {role.charAt(0) + role.slice(1).toLowerCase()} Panel
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-4 py-5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigation}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                active
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />

              <span>{item.label}</span>
            </Link>
          );
        })}

        <Separator className="my-5" />

        {/* Home */}
        <Link
          href="/"
          onClick={onNavigation}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Home className="h-5 w-5" />

          <span>Home</span>
        </Link>

        {/* Properties */}
        <Link
          href="/properties"
          onClick={onNavigation}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Building2 className="h-5 w-5" />

          <span>Properties</span>
        </Link>
      </nav>

      {/* Logout */}
      <div className="border-t p-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onLogout}
          className="w-full justify-start gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/30"
        >
          <LogOut className="h-5 w-5" />

          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
}
