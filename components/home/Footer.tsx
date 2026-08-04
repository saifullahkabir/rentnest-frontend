import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../ui/navbarLogo";
import { CiFacebook } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12 xl:py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Find your perfect rental home with ease. RentNest connects tenants
              with trusted landlords and quality properties.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <CiFacebook className="h-6 w-6" />
              </Link>

              <Link
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FaXTwitter className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/properties"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Properties
                </Link>
              </li>

              {/* <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-sm font-semibold">For Users</h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/auth/login"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/auth/register"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Create Account
                </Link>
              </li>

              <li>
                <Link
                  href="/properties"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Browse Properties
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact Us</h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <span className="text-sm leading-5 text-muted-foreground">
                  Dhaka, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />

                <a
                  href="tel:+8801234567890"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  +880 1234-567890
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />

                <a
                  href="mailto:support@rentnest.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  support@rentnest.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RentNest. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
