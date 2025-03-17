import { axiosClient } from "@/lib/axios/axios-client";
import { supabaseClient } from "@/lib/supabase/supabase-client";
import {
  GetMovieDetailsByIdResponseData,
  GetMovieReleaseDatesResponseData,
  GetMoviesListByPageResponseData,
  PostMovieCommentRequestData,
} from "./movies-api-types";

export class MoviesApi {
  static async getMoviesListByPage(page: number = 1) {
    const response = await axiosClient.get<GetMoviesListByPageResponseData>(
      `/movie/top_rated?language=en-US&page=${page}`,
    );
    return response.data;
  }

  static async getMovieDetailsById(movieId: number) {
    const response = await axiosClient.get<GetMovieDetailsByIdResponseData>(
      `/movie/${movieId}?language=en-US`,
    );
    return response.data;
  }

  static async getMovieReleaseDates(movieId: number) {
    const response = await axiosClient.get<GetMovieReleaseDatesResponseData>(
      `/movie/${movieId}/release_dates`,
    );
    return response.data;
  }

  static async getMovieComments(movieId: number) {
    const response = await supabaseClient
      .from("movies_comments")
      .select("*")
      .eq("movieId", movieId)
      .order("createdAt", { ascending: false });
    return response.data;
  }

  static async postMovieComment({
    username,
    comment,
    movieId,
  }: PostMovieCommentRequestData) {
    await supabaseClient.from("movies_comments").insert({
      comment,
      username,
      movieId,
    });
  }
}
