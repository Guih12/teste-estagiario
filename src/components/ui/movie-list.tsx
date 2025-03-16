'use client'
import { useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../../app/actions/getTrendingMovies"
import { MovieCard } from "./movie-card"
import { PaginationWithLinks } from "./pagination-with-links"
import { searchParams } from "@/app/types/SearchParams"
import { Loader2Icon } from "lucide-react"


export const MovieList = ({ page, pageSize }: searchParams) => {
    const currPage = parseInt((page || '1'))
    const moviesPerPage = parseInt((pageSize || '5'))
    const { isPending, error, data } = useQuery({
        queryKey: ['results'],
        queryFn: async () => await getTrendingMovies(currPage)

    })



    if (isPending) return (
        <div className="relative flex flex-col items-center">
            <p className="text-5xl text-muted-foreground">Loading...</p>
            <Loader2Icon className="animate-spin duration-500 h-25 w-20"/>
        </div>
    )
    if (error)  return (<p className="text-2xl text-muted-foreground"> An error occurred: {error.message} </p>)

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-8">
                {data.results && data.results.map((value, index) => (
                    <MovieCard {...value} key={index} />
                ))}
            </div>
            <div className="mt-5">
                <PaginationWithLinks page={currPage} pageSize={moviesPerPage} totalCount={data.results.length}/>
            </div>
        </section>
    )
}