import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Star } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image"
import React from "react"
import { unstable_getServerSideProps } from "next/dist/build/templates/pages"
import { useGetDetailsMovie } from "@/api/hooks/use-details-movie"
import { Skeleton } from "./ui/skeleton"


const MovielModalSkeleton = () => {
  return (
    <>
      <DialogHeader>
        <Skeleton className="h-8 w-3/4 mb-2" />
        <div className="flex items-center space-x-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-24" />
        </div>
      </DialogHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Poster skeleton */}
        <Skeleton className="aspect-[2/3] rounded-md w-full" />
        <div className="flex flex-col">
          {/* Rating skeleton */}
          <div className="flex items-center space-x-2 mb-4">
            <Skeleton className="h-5 w-5 rounded-full" />
            <Skeleton className="h-5 w-16" />
          </div>
          {/* Genres skeleton */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
          {/* Director skeleton */}
          <div className="mb-4">
            <Skeleton className="h-4 w-16 mb-1" />
            <Skeleton className="h-5 w-32" />
          </div>
          {/* Duration skeleton */}
          <div className="mb-4">
            <Skeleton className="h-4 w-16 mb-1" />
            <Skeleton className="h-5 w-24" />
          </div>
          {/* Synopsis skeleton */}
          <div>
            <Skeleton className="h-4 w-16 mb-1" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    </>
  )
}

const CardTrigger = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="bg-black text-white rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors h-[600px]"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10"></div>
        {movie.poster_path && <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="object-cover w-full aspect-[2/3]"
        />}
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-red-600 text-white border-none">{new Date(movie.release_date).getFullYear()}</Badge>
        </div>
        <div className="absolute bottom-4 right-4 z-20 flex items-center bg-black/80 rounded-full px-2 py-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
        </div>
      </div>
      <div className="px-5 py-2 border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black ">
        <h3 className="text-xl font-bold mb-2 text-center line-clamp-3">{movie.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line line-clamp-2">{movie.overview}</p>
      </div>
    </div>
  );
};


const MovieDetails = ({ id }) => {
  console.log("AAAAAA")
  const { data:movie, isLoading } = useGetDetailsMovie(id)

  return (
    <>
    {!isLoading && <>
      <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{movie.title}</DialogTitle>
            <DialogDescription className="flex items-center space-x-2">
              <Badge variant="outline">{new Date(movie.release_date).getFullYear()}</Badge>
              <Badge variant="outline">{movie.original_language.toUpperCase()}</Badge>
              <span className="text-sm text-muted-foreground">{movie.runtime} minutos</span>
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="relative aspect-[3/4] rounded-md overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                fill
                className="object-cover"

              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{movie.vote_average.toFixed(1)}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres.map((g) => (
                  <Badge key={g.id}>{g.name}</Badge>
                ))}
              </div>
              <div className="mb-4 max-h-20">
                <h3 className="text-sm font-medium mb-1">Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </>
    }
    {isLoading && <MovielModalSkeleton />}
    </>
  )
}

const CardMovie = ({ movie }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <CardTrigger movie={movie} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] md:max-w-[750px]">
      <DialogTitle className="sr-only">{movie.title}</DialogTitle>
        <MovieDetails id={movie.id} />
      </DialogContent>
    </Dialog>
  )
}

export { CardMovie }