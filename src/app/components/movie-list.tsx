'use client'
import { QueryClient, useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../actions/getTrendingMovies"
import { MovieCard } from "./movie-card"




export const MovieList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['results'],
        queryFn: async () => await getTrendingMovies()
       
    })


    if (isPending) return 'Loading...'

    if (error) return <p className="text-2xl text-muted-foreground"> An error occurred: {error.message} </p>

    return (
        <section>
            <div className="grid grid-cols-4 grid-flow-row gap-4">
                {data.results && data.results.map((value, index) => (
                  <MovieCard {...value} key={index}/>
                ))}
            </div>
        </section>
    )
}