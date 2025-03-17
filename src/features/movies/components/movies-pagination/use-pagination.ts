import { useSearchParamsManager } from "@/hooks/use-search-params";
import { useEffect } from "react";
import { useGetMoviesListByPageQuery } from "../../hooks/react-query/queries/use-get-movies-list-by-page-query";

export function usePagination() {
  const searchParams = useSearchParamsManager();
  const searchParamPage = searchParams.params.get("page");
  const currentPage = searchParamPage ? Number(searchParamPage) : 1;

  const { data: moviesData } = useGetMoviesListByPageQuery({
    page: currentPage ?? 1,
  });

  const firstPage = () => {
    if (searchParams.params.get("page") === "1") return;
    searchParams.addSearchParam("page", "1");
  };

  const previousPage = () => {
    if (searchParams.params.get("page") === "1") return;
    searchParams.addSearchParam("page", String(currentPage - 1));
  };

  const nextPage = () => {
    if (Number(searchParams.params.get("page")) === moviesData?.total_pages) {
      return;
    }
    searchParams.addSearchParam("page", String(currentPage + 1));
  };

  const lastPage = () => {
    if (searchParams.params.get("page") === String(moviesData?.total_pages)) {
      return;
    }
    searchParams.addSearchParam("page", String(moviesData?.total_pages));
  };

  useEffect(() => {
    const isPageBelow1 = currentPage >= 1;
    const isPageGreaterThan500 = currentPage > 500;
    let page = isPageBelow1 ? currentPage : 1;
    page = isPageGreaterThan500 ? 500 : page;

    searchParams.addSearchParam("page", page.toString());
  }, [searchParamPage]);

  return {
    currentPage,
    moviesData,
    firstPage,
    previousPage,
    nextPage,
    lastPage,
  };
}
