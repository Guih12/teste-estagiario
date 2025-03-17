import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePagination } from "@/hooks/usePagination"


interface VerticalPaginationProps {
  className?: string
}

function VerticalPagination({ className }: VerticalPaginationProps) {

  const [page, setPage] = usePagination()
  const increasePage = () => setPage(page + 1)
  const decreasePage = () => setPage(page - 1)

  return (
    <Pagination className={className}>
      <PaginationContent className="flex flex-col space-y-2">
        <PaginationItem onClick={decreasePage}>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem onClick={decreasePage}>
          <PaginationLink href="#">{page - 1}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={increasePage}>
          <PaginationLink href="#">{page + 1}</PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem onClick={increasePage}>
          <PaginationNext href="#"  />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export { VerticalPagination }