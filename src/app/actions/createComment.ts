'use server'
import axios from "axios";
import { CommentsValues } from "../types/validation/comments";


export const createComment = async (data: CommentsValues) => {
    try{
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/submit`, data , {
            headers: {
                "Content-Type": 'application/json'
            }
            
        })
        return res.data
    } catch(err){
        throw err;
        
    }
}