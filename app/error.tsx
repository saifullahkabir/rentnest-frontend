"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-6rem)] items-center justify-center px-6">
      <div className="w-full max-w-xl">
        <div className="rounded-3xl border bg-card/70 backdrop-blur-xl p-10 shadow-2xl text-center">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight">
            Oops! Something went wrong
          </h1>

          {/* Description */}
          <p className="mt-3 text-muted-foreground leading-7">
            An unexpected error occurred while loading this page.
            Please try again. If the problem persists, return to the homepage.
          </p>

          {/* Error Message (Development Only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 rounded-xl bg-muted p-4 text-left">
              <p className="font-semibold text-destructive">
                Development Error
              </p>

              <p className="mt-2 wrap-break-word text-sm text-muted-foreground">
                {error.message}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Button
              onClick={() => reset()}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>

            <Button
              variant="outline"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

          </div>
        </div>
      </div>
    </main>
  );
}