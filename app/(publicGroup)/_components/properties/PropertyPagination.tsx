"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface PropertyPaginationProps {
  totalPages?: number;
}

export default function PropertyPagination({
  totalPages = 1,
}: PropertyPaginationProps) {
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", page.toString());
    params.set("limit", "6");

    return `/properties?${params.toString()}`;
  };

  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    pages.push(1);

    if (currentPage <= 3) {
      pages.push(2, 3, 4);
      pages.push("ellipsis");
      pages.push(totalPages);

      return pages;
    }

    if (currentPage >= totalPages - 2) {
      pages.push("ellipsis");
      pages.push(totalPages - 3);
      pages.push(totalPages - 2);
      pages.push(totalPages - 1);
      pages.push(totalPages);

      return pages;
    }

    pages.push("ellipsis");
    pages.push(currentPage - 1);
    pages.push(currentPage);
    pages.push(currentPage + 1);
    pages.push("ellipsis");
    pages.push(totalPages);

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center py-8">
      <Pagination>
        <PaginationContent className="gap-1">
          {/* Previous */}
          <PaginationItem>
            <PaginationPrevious
              href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
              className={
                currentPage === 1
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

          {/* Page Numbers */}
          {pageNumbers.map((page, index) => {
            if (page === "ellipsis") {
              return (
                <PaginationItem key={`ellipsis-${index}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }

            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={createPageUrl(page)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          })}

          {/* Next */}
          <PaginationItem>
            <PaginationNext
              href={
                currentPage < totalPages ? createPageUrl(currentPage + 1) : "#"
              }
              className={
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
