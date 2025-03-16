'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { commentsSchema, CommentsValues } from "@/app/types/validation/comments";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { useMutation } from "@tanstack/react-query";
import { createComment } from "@/app/actions/createComment";
import { Button } from "./button";
import { useState } from "react";
import { Send } from "lucide-react";

type CommentsProps = {
    movie_id: string;

}

export const InsertComment = ({ movie_id }: CommentsProps) => {

    const [message, setMessage] = useState<boolean>(false)

    const form = useForm<CommentsValues>(
        {
            resolver: zodResolver(commentsSchema),
            defaultValues: {
                comment: '',
                nickname: '',
                movie_id,

            }
        }
    );

    const mutation = useMutation({
        mutationFn: (newComment: CommentsValues) => {
            return createComment(newComment)
        },
    })


    const onSubmitForm: SubmitHandler<CommentsValues> = async (data) => {
        try {
            mutation.mutate(data)
            if (mutation.isSuccess) {
                setMessage(true)
            }
            form.reset();
        } catch (err) {
            throw err;
        }

    }

    return (
        <section>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitForm)}>
                    <div className="flex flex-col gap-6">

                        <FormField
                            control={form.control}
                            name="comment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Comment</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Insert your comment here" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-row gap-3">

                            <FormField
                                control={form.control}
                                name="nickname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nickname</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Insert your nickname" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                disabled={form.formState.isSubmitting}
                                variant={"default"}
                                className="w-1/5 self-center mt-5"
                            >
                                <Send/>
                                Send comment
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>
        </section>
    )

}