import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  PostMovieCommentFormInput,
  postMovieCommentFormSchema,
} from "../../validators/post-movie-comment";
import { usePostMovieCommentMutation } from "../react-query/mutations/post-movie-comment-mutation";
import { useGetMovieCommentsQuery } from "../react-query/queries/use-get-movie-comments-query";

interface Props {
  movieId: number;
}

export function usePostMovieComment({ movieId }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const postMovieCommentMutation = usePostMovieCommentMutation();
  const getMovieCommentsQuery = useGetMovieCommentsQuery({ movieId });
  const postMovieCommentForm = useForm<PostMovieCommentFormInput>({
    resolver: zodResolver(postMovieCommentFormSchema),
    defaultValues: {
      username: "",
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<PostMovieCommentFormInput> = useCallback(
    async ({ username, comment }) => {
      await postMovieCommentMutation.mutateAsync({
        username,
        comment,
        movieId,
      });

      setIsOpen(false);
      getMovieCommentsQuery.refetch();
      postMovieCommentForm.reset();
      toast.success("Post comment", {
        description: "Your comment has been posted successfully",
      });
    },
    [postMovieCommentMutation],
  );

  return {
    postMovieCommentForm,
    onSubmit,
    isOpen,
    setIsOpen,
  };
}
