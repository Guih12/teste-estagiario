import { tmdb } from "../../axios"
import { useQuery } from "@tanstack/react-query"


const useGetDetailsMovie = (id: number) => {
  const query = useQuery({
    queryKey: ['details-movie', id], queryFn: async () => {
      const { data } = await tmdb.get(`/movie/${id}`)
      return data
    }
  })
  return query
}

export { useGetDetailsMovie }