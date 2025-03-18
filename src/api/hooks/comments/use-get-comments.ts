import { useQuery } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";

const useGetComments = (movieId: number) => {
  const query = useQuery({
    queryKey: ["comments", movieId],
    queryFn: async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("comments")
        .select("comments, created_at")
        .eq("movie_id", movieId);

      if (error) {
        throw new Error(error.message);
      }

      return data;
    },
  });

  return query;
};

export { useGetComments };