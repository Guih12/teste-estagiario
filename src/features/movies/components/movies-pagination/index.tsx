"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { usePagination } from "./use-pagination";

export function MoviesPagination() {
  const {
    currentPage,
    moviesData,
    firstPage,
    previousPage,
    nextPage,
    lastPage,
  } = usePagination();

  const totalPage =
    Number(moviesData?.total_pages) > 500 ? 500 : moviesData?.total_pages;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row">
      <Typography variant="smallText">
        Page {moviesData?.page} of {totalPage}
      </Typography>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={firstPage}
          disabled={currentPage === 1}
        >
          <ChevronsLeft />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === totalPage}
        >
          <ChevronRight />
        </Button>

        <Button
          variant="secondary"
          size="icon"
          onClick={lastPage}
          disabled={currentPage === totalPage}
        >
          <ChevronsRight />
        </Button>
      </div>
    </div>
  );
}
