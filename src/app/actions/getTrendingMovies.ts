'use server'

import { AxiosResponse } from "axios";
import { moviesApi } from "../utils/axios-movies-instance"
import { MoviesResult } from "../types/MoviesResult";



// This action GET trending movies by week
export const getTrendingMovies = async (page: number): Promise<MoviesResult> => {
    try{
        const response: AxiosResponse<MoviesResult> = await moviesApi.get(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'`)
        return response.data
    } catch(err){
        throw err
    }
}