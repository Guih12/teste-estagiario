'use client'
import { QueryClient, useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../../app/actions/getTrendingMovies"
import { MovieCard } from "./movie-card"
import { searchParams } from "../../app/types/SearchParams"
import { PaginationWithLinks } from "./pagination-with-links"


interface MovieListProps {
    params: searchParams
}

export const MovieList = ({ params }: MovieListProps) => {
    const currPage = parseInt((params.page || '1'))
    const moviesPerPage = parseInt((params.pageSize || '5'))

    const { isPending, error, data } = useQuery({
        queryKey: ['results'],
        queryFn: async () => await getTrendingMovies(currPage)

    })



    if (isPending) return 'Loading...'

    if (error) return <p className="text-2xl text-muted-foreground"> An error occurred: {error.message} </p>

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-8">
                {data.results && data.results.map((value, index) => (
                    <MovieCard {...value} key={index} />
                ))}
            </div>
            <div className="mt-4">
                <PaginationWithLinks page={currPage} pageSize={moviesPerPage} totalCount={data.results.length}/>
            </div>
        </section>
    )
}