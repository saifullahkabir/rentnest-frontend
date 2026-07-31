import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/Navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import { getMe } from "@/service/getMe";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "RentNest",
    template: "%s | RentNest",
  },
  description:
    "RentNest is a modern rental property marketplace where tenants can find homes, landlords can manage listings, and admins can oversee the platform.",
  keywords: [
    "RentNest",
    "Rental Marketplace",
    "Property Rental",
    "Apartment",
    "House",
    "Next.js",
    "Real Estate",
  ],
  openGraph: {
    title: "RentNest",
    description: "Find and list rental properties with ease using RentNest.",
    type: "website",
    locale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getMe();
  console.log(user);

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" richColors />
          <Navbar user={user} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
