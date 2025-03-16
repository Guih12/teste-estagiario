
import { commentsSchema, CommentsValues } from "@/app/types/validation/comments";
import { supabase } from "@/lib/supabase/store";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req: NextRequest){

    try{
        const body = await req.json();
        const validationResult = await commentsSchema.safeParse(body);
        
        if (!validationResult.success){

            return NextResponse.json({error: 'Invalid request data', details: validationResult.error})
        }

        const {movie_id, comment, nickname }  = validationResult.data


        const {error, data} = await supabase
            .from('comments')
            .insert({movie_id, nickname, payload: comment})
            .select('id')
            .single();


        if (error){
            return NextResponse.json({error: 'Failed to save comment', details: error.message}, {status: 500})
        }

        return NextResponse.json({success: true, id: data.id}, {status: 200});


    } catch(error){
        return NextResponse.json({error: 'Internal server error'}, {status: 500})
    }
    

}