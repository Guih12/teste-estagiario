'use server'

export const getImagesMovies = async(backdrop_path: string) => {
    try{
        const response = await fetch(`https://image.tmdb.org/t/p/original${backdrop_path}`)
        
        return response.blob
    } catch(err){
        throw err
    }

}