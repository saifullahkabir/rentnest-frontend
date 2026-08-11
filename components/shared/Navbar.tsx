"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Menu, X, LogOut, User, LayoutDashboard } from "lucide-react";

import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../ui/navbarLogo";
import ThemeToggle from "./theme-toggle";
import { logout } from "@/service/logout";
import { toast } from "sonner";
import { UserProps } from "@/lib/types/user";

// Navigation Items
const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Properties",
    href: "/properties",
  },
  {
    label: "About",
    href: "/about",
  },
  // {
  //   label: "Contact",
  //   href: "/contact",
  // },
];

export default function Navbar({ user }: UserProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      setIsDropdownOpen(false);

      await logout();

      toast.success("Logged out successfully");
      router.replace("/auth/login");
      router.refresh();
    } catch {
      toast.error("Logout failed");
    }
  };

  const dashboardHref =
    user?.data?.role === "TENANT"
      ? "/dashboard/tenant"
      : user?.data?.role === "LANDLORD"
        ? "/dashboard/landlord"
        : "/dashboard/admin";

  return (
    <>
      <nav className="sticky top-0 lg:my-2 z-50 bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/70">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Logo />
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex shadow-sm border rounded-4xl px-6 py-2.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-primary text-primary-foreground px-3 py-1 rounded-full"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}

                {/* {pathname === item.href && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-primary" />
              )} */}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* User */}
            {user?.data ? (
              <div className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={toggleDropdown}
                  className="flex items-center justify-center  transition-all overflow-hidden cursor-pointer"
                  aria-label="User menu"
                >
                  {user?.data?.profileImage ? (
                    <Image
                      src={user.data.profileImage}
                      alt={user.data.name}
                      width={40}
                      height={40}
                      unoptimized
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="text-primary" strokeWidth={1.8} />
                  )}
                </Button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64  rounded-lg shadow-lg border  py-2 z-10 bg-background/95 ">
                    <div className="border-b px-4 py-4">
                      <p className="font-semibold">{user?.data?.name}</p>

                      <p className="text-sm text-muted-foreground">
                        {user?.data?.email}
                      </p>
                    </div>

                    <Link
                      href={dashboardHref}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 transition hover:bg-muted"
                    >
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-muted"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth/login">
                <Button className="rounded-full px-6">Login</Button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="rounded-md p-2 transition hover:bg-muted md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t bg-background md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-2 transition ${
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {!user && (
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button className="mt-3 w-full">Login</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
      {/* Click outside to close dropdown */}
      {isDropdownOpen && (
        <div
          onClick={() => setIsDropdownOpen(false)}
          className="fixed inset-0 z-10"
        />
      )}
    </>
  );
}
