'use server'

import { moviesApi } from "../utils/axios-movies-instance"

interface MovieImage{
    backdrops: {
        aspect_radio: number;
        height: number;
        file_path: number;
        vote_avarage: number;
        vote_count: number;
    }[];
    id: number;
    posters:{
        aspect_ratio: number;
        height: number;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
    }[]
}

export const getImagesMovies = async(backdrop_path: string) => {
    try{
        const response = await fetch(`https://image.tmdb.org/t/p/original${backdrop_path}`)
        
        return response.blob
    } catch(err){
        throw err
    }

}