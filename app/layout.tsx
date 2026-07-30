import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
