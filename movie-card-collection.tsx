"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, Star, ThumbsUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovieDetailsModal, type Movie } from "./movie-details-modal"

// Sample movie data
const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    rating: 8.8,
    duration: "2h 28m",
    genre: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    contentRating: "PG-13",
    durationMinutes: 148,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    year: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: 9.3,
    duration: "2h 22m",
    genre: ["Drama"],
    director: "Frank Darabont",
    contentRating: "R",
    durationMinutes: 142,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: 8.9,
    duration: "2h 34m",
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
    contentRating: "R",
    durationMinutes: 154,
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    rating: 9.0,
    duration: "2h 32m",
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    contentRating: "PG-13",
    durationMinutes: 152,
  },
  {
    id: 5,
    title: "Parasite",
    year: 2019,
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    rating: 8.6,
    duration: "2h 12m",
    genre: ["Comedy", "Drama", "Thriller"],
    director: "Bong Joon Ho",
    contentRating: "R",
    durationMinutes: 132,
  },
]

export default function MovieCardCollection() {
  const [activeTab, setActiveTab] = useState("design1")
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const openMovieDetails = (movie: Movie) => {
    setSelectedMovie(movie)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Movie Card Designs</h1>
      <Tabs defaultValue="design1" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="design1">Design 1</TabsTrigger>
          <TabsTrigger value="design2">Design 2</TabsTrigger>
          <TabsTrigger value="design3">Design 3</TabsTrigger>
          <TabsTrigger value="design4">Design 4</TabsTrigger>
          <TabsTrigger value="design5">Design 5</TabsTrigger>
        </TabsList>

        {/* Design 1: Modern vertical card with gradient overlay */}
        <TabsContent value="design1" className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Modern Vertical Card with Gradient Overlay</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="relative group overflow-hidden rounded-xl h-[480px] transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => openMovieDetails(movie)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 z-10"></div>
                <Image
                  src={`/placeholder.svg?height=720&width=480&text=${movie.title}`}
                  alt={movie.title}
                  width={480}
                  height={720}
                  className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-primary/80 text-primary-foreground">
                      {movie.year}
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current mr-1" />
                      <span className="text-sm font-medium">{movie.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-200 line-clamp-3 mb-4">{movie.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {movie.genre.map((g) => (
                      <Badge key={g} variant="outline" className="border-gray-400 text-gray-200">
                        {g}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Design 2: Horizontal card with clean layout */}
        <TabsContent value="design2" className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Horizontal Card with Clean Layout</h2>
          <div className="space-y-6">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => openMovieDetails(movie)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 relative">
                    <Image
                      src={`/placeholder.svg?height=360&width=240&text=${movie.title}`}
                      alt={movie.title}
                      width={240}
                      height={360}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="md:w-3/4 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-2xl font-bold">{movie.title}</h3>
                        <div className="flex items-center space-x-4 mt-1 text-muted-foreground">
                          <span>{movie.year}</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {movie.duration}
                          </span>
                          <span className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400 mr-1" />
                            {movie.rating}
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 my-3">
                      {movie.genre.map((g) => (
                        <Badge key={g} variant="secondary">
                          {g}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground mt-4 mb-6">{movie.description}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-medium">Director:</span>
                        <span className="text-sm ml-2">{movie.director}</span>
                      </div>
                      <Button>Watch Now</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Design 3: Minimalist card with focus on typography */}
        <TabsContent value="design3" className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Minimalist Card with Focus on Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                className="border-none shadow-none hover:bg-accent transition-colors duration-300 cursor-pointer"
                onClick={() => openMovieDetails(movie)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="rounded-sm px-2 py-0.5 text-xs font-normal">
                      {movie.year}
                    </Badge>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm">{movie.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold mt-4 tracking-tight">{movie.title}</CardTitle>
                  <div className="flex gap-3 mt-2">
                    {movie.genre.map((g) => (
                      <span key={g} className="text-xs uppercase tracking-wider text-muted-foreground">
                        {g}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <Image
                      src={`/placeholder.svg?height=360&width=240&text=${movie.title}`}
                      alt={movie.title}
                      width={240}
                      height={360}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">{movie.description}</p>
                    <div className="mt-4 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-muted-foreground">Directed by {movie.director}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" className="ml-auto text-primary">
                    Read more
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Design 4: Compact grid card with hover effects */}
        <TabsContent value="design4" className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Compact Grid Card with Hover Effects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openMovieDetails(movie)}
              >
                <div className="aspect-[2/3] relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=450&width=300&text=${movie.title}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1.5">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-10 pb-3 px-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm line-clamp-3">{movie.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold truncate">{movie.title}</h3>
                    <span className="text-sm font-medium">{movie.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {movie.genre.slice(0, 2).map((g) => (
                      <Badge key={g} variant="secondary" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                    {movie.genre.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{movie.genre.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Design 5: Classic cinema-inspired card */}
        <TabsContent value="design5" className="space-y-8">
          <h2 className="text-2xl font-semibold mb-4">Classic Cinema-Inspired Card</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-black text-white rounded-lg overflow-hidden border border-gray-800 cursor-pointer hover:border-gray-600 transition-colors"
                onClick={() => openMovieDetails(movie)}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10"></div>
                  <Image
                    src={`/placeholder.svg?height=450&width=300&text=${movie.title}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="object-cover w-full aspect-[2/3]"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-red-600 text-white border-none">{movie.year}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 flex items-center bg-black/80 rounded-full px-2 py-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{movie.rating}</span>
                  </div>
                </div>
                <div className="p-5 border-t border-gray-800 bg-gradient-to-b from-gray-900 to-black">
                  <h3 className="text-xl font-bold mb-2 text-center">{movie.title}</h3>
                  <div className="flex justify-center gap-2 mb-3">
                    {movie.genre.map((g, index) => (
                      <React.Fragment key={g}>
                        {index > 0 && <span className="text-gray-600">•</span>}
                        <span className="text-xs text-gray-400">{g}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{movie.description}</p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-none">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Movie Details Modal */}
      <MovieDetailsModal movie={selectedMovie} isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  )
}

