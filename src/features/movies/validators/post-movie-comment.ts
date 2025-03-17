import z from "zod";

export const postMovieCommentFormSchema = z.object({
  username: z
    .string()
    .min(1, "This field is required")
    .min(3, "Username must have at least 3 characters")
    .max(20, "Username must have at most 20 characters"),
  comment: z
    .string()
    .min(1, "This field is required")
    .min(3, "Comment must have at least 3 characters"),
});

export type PostMovieCommentFormInput = z.infer<
  typeof postMovieCommentFormSchema
>;
