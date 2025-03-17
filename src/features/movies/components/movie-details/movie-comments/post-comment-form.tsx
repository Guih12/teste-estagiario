"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/form/input";
import { SubmitButton } from "@/components/ui/form/submit-button";
import { Textarea } from "@/components/ui/form/textarea";
import { usePostMovieComment } from "@/features/movies/hooks/forms/post-movie-comment-form";
import { Plus } from "lucide-react";

interface Props {
  movieId: number;
}

export function PostCommentForm({ movieId }: Props) {
  const { postMovieCommentForm, onSubmit, isOpen, setIsOpen } =
    usePostMovieComment({ movieId });

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="w-fit" asChild>
        <Button size="sm" variant="ghost">
          <Plus /> New
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Post comment</DialogTitle>
          <DialogDescription>
            Fill the form below to create a new comment
          </DialogDescription>
        </DialogHeader>

        <Form {...postMovieCommentForm}>
          <form
            onSubmit={postMovieCommentForm.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <Input label="Username" name="username" />
            <Textarea label="Comment" name="comment" />

            <div className="mt-4 flex items-center gap-1.5">
              <SubmitButton
                onSubmitChildren="Posting..."
                className="w-full lg:w-fit"
              >
                Post
              </SubmitButton>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
