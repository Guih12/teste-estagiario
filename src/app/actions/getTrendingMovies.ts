'use server'

import { AxiosResponse } from "axios";
import { moviesApi } from "../utils/axios-movies-instance"
import { MoviesResult } from "../types/MoviesResult";



// This action GET trending movies by week
export const getTrendingMovies = async (): Promise<MoviesResult> => {
    try{
        const response: AxiosResponse<MoviesResult, any> = await moviesApi.get('/trending/movie/week')
        return response.data
    } catch(err){
        throw err
    }
}