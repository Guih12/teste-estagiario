import { z } from "zod";

export const commentsSchema = z
  .object({
    comment: z.string().min(1, {
      message: "The comment can't be null.",
    }),
    nickname: z
      .string()
      .min(1, { message: "Field has to be filled" })
      .optional(),
    movie_id: z
        .string()
        .min(1, {message: 'Movie ID is needed'})
  })
  .superRefine((data, ctx) => {
    if (data.comment) {
      if(!data.nickname){
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['nickname'],
            message: 'Nickname is required when the comment is filled.'
        });
      }
    }
});

export type CommentsValues = z.infer<typeof commentsSchema>;
