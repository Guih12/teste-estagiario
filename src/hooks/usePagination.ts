'use client'
 
import { useQueryState, parseAsInteger } from 'nuqs'
 
function usePagination() {
  return useQueryState('page', parseAsInteger.withDefault(1))
}

export { usePagination }