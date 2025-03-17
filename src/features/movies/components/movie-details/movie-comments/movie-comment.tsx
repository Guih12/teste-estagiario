import { Avatar } from "@/components/ui/avatar";
import { MovieComment } from "@/features/movies/types/movie-comment";
import { formatDistanceToNow } from "date-fns";

interface Props {
  comment: MovieComment;
}

export function Comment({ comment }: Props) {
  return (
    <article className="bg-[#2a282b] p-6">
      <header className="flex items-center gap-3">
        <Avatar src="" fallback={comment.username[0].toUpperCase()} />
        <h3 className="text-lg font-semibold">{comment.username}</h3>
        <time className="text-sm text-[#a0a0a0]">
          {formatDistanceToNow(comment.createdAt, {
            addSuffix: true,
          })}
        </time>
      </header>

      <p className="mt-4">{comment.comment}</p>
    </article>
  );
}
