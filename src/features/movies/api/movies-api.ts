import { axiosClient } from "@/lib/axios/axios-client";
import { GetMoviesListByPage } from "./movies-api-types";

export class MoviesApi {
  static async getMoviesListByPage(page: number = 1) {
    const response = await axiosClient.get<GetMoviesListByPage>(
      `/movie/top_rated?language=en-US&page=${page}`,
    );
    return response.data;
  }
}
