import { usePathname, useRouter, useSearchParams } from "next/navigation";

type AddSearchParam = (param: string, value: string) => void;
type RemoveSearchParam = (param: string) => void;
type ToggleSearchParam = (param: string, value: string) => void;

export function useSearchParamsManager() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const updateParams = () => replace(`${pathname}?${params.toString()}`);

  const addSearchParam: AddSearchParam = (param, value) => {
    params.set(param, value);
    updateParams();
  };

  const removeSearchParam: RemoveSearchParam = (param) => {
    params.delete(param);
    updateParams();
  };

  const toggleSearchParam: ToggleSearchParam = (param, value) => {
    if (searchParams.get(param)) {
      removeSearchParam(param);
      return;
    }
    addSearchParam(param, value);
  };

  return {
    params: searchParams,
    addSearchParam,
    removeSearchParam,
    toggleSearchParam,
  };
}
