import { Result } from "./Result";

export interface MoviesResult{
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}