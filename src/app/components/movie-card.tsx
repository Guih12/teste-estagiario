import { useQuery } from "@tanstack/react-query"
import { Result } from "../types/Result"
import Image from "next/image"


export const MovieCard = ({title, overview, adult , id, backdrop_path}: Result) =>{
    const imagePath =  `https://image.tmdb.org/t/p/original${backdrop_path}`
    return(
       <div className="flex flex-col items-center justify-center">
            <Image src={imagePath} alt={`${title} movie`} width={250} height={250}/>
            <h1>{title}</h1>
            
            <p>
                {/* <span className="text-sm">{overview}</span> */}
            </p>
       </div>

    )
}