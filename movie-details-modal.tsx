import Image from "next/image"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export type Movie = {
  id: number
  title: string
  year: number
  description: string
  rating: number
  duration: string
  durationMinutes: number
  genre: string[]
  director: string
  contentRating: string
}

interface MovieDetailsModalProps {
  movie: Movie | null
  isOpen: boolean
  onClose: () => void
}

export function MovieDetailsModal({ movie, isOpen, onClose }: MovieDetailsModalProps) {
  if (!movie) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{movie.title}</DialogTitle>
          <DialogDescription className="flex items-center space-x-2">
            <Badge variant="outline">{movie.year}</Badge>
            <Badge variant="outline">{movie.contentRating}</Badge>
            <span className="text-sm text-muted-foreground">{movie.duration}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-[2/3] rounded-md overflow-hidden">
            <Image
              src={`/placeholder.svg?height=450&width=300&text=${movie.title}`}
              alt={movie.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{movie.rating}/10</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genre.map((g) => (
                <Badge key={g}>{g}</Badge>
              ))}
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-1">Director</h3>
              <p>{movie.director}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-1">Duration</h3>
              <p>{movie.durationMinutes} minutes</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Synopsis</h3>
              <p className="text-muted-foreground">{movie.description}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

