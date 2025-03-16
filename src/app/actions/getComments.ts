'use server'

import { supabase } from "@/lib/supabase/store"

export const getComments = async (movie_id: string) => {
    try{
        const comments = await supabase
            .from('comments')
            .select('created_at, payload, id, published, nickname, movie_id')
            .eq('movie_id', movie_id)
            .order('created_at', {ascending: true})
        return comments.data
    } catch(err){
        throw err
    }
}