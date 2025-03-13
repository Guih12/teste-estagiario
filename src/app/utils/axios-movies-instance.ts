import axios from "axios";


export const moviesApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
    }
})