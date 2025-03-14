import { Result } from "@/app/types/Result"
import Image from "next/image"
import { Box } from "@radix-ui/themes"
import { Film, Star } from "lucide-react"


export const MovieCard = ({ title, overview, adult, id, backdrop_path, poster_path, release_date, vote_average }: Result) => {
    const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`
    const year = release_date? new Date(release_date).getFullYear() : null

    return (

        <Box className="bg-slate-700/20 group relative p-5 flex flex-col items-center cursor-pointer backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden  transition-transform duration-300 hover:scale-105">
            <Image src={imagePath} alt={`${title} movie poster`} className="w-full transition-transform duration-300 group-hover:scale-105 " width={270} height={250} />
            <div className="w-full bg-slate-800/10 flex items-center justify-center">
                <Film className="w-5 h-5"/>

            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-white truncate">{title}</h2>
                        {year && <span className="text-sm text-gray-300">{year}</span>}
                    </div>

                    {vote_average && (
                        <div className="flex items-center gap-1 mb-3">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-yellow-400 font-semibold">{vote_average}</span>
                        </div>
                    )}

                    <p className="text-sm text-gray-300 line-clamp-3">
                        {overview}
                    </p>
                </div>
            </div>
        </Box>



    )
}