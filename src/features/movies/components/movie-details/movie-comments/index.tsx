import { Typography } from "@/components/ui/typography";
import { useGetMovieCommentsQuery } from "@/features/movies/hooks/react-query/queries/use-get-movie-comments-query";
import { Comment } from "./movie-comment";
import { NoComments } from "./no-comments";
import { PostCommentForm } from "./post-comment-form";

interface Props {
  movieId: number;
}

export function MovieComments({ movieId }: Props) {
  const { data: comments } = useGetMovieCommentsQuery({ movieId });

  return (
    <section className="flex flex-col gap-3">
      <article className="flex items-center gap-4">
        <Typography variant="h3">Comments</Typography>
        <PostCommentForm movieId={movieId} />
      </article>

      {comments?.length ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <NoComments />
      )}
    </section>
  );
}
