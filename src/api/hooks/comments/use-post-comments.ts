import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner"


interface CommentPayload {
  comments: string;
}



const usePostComment = ({movieID}:{movieID:number}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (payload: CommentPayload) => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("comments")
        .insert([{
          movie_id: movieID,
          comments: payload.comments,
        }]);

      if (error) {
        throw new Error(error.message);
      }
      console.log(data);
      return data;
    },
    onSuccess: () => {
      toast.success("Comentario Enviado com sucesso");
      queryClient.invalidateQueries({ queryKey: ["comments", movieID] });
    },
  });

  return mutation;
};

export { usePostComment };