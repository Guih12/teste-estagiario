import { getComments } from "@/app/actions/getComments";
import { CommentsValues } from "@/app/types/validation/comments";
import { useQuery } from "@tanstack/react-query";
import { RefreshCw, StarsIcon, User } from "lucide-react";
import { Button } from "./button";


export const ListComments = ({ movie_id }: { movie_id: string }) => {

    const { error, data, isPending, refetch } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => await getComments(movie_id)
    })

    if (error) return <p className="text-2xl text-muted-foreground">Unable to view comments</p>

    if (isPending) return <p className="text-2xl text-muted-foreground">Loading...</p>

    return (
        <div className="flex flex-col gap-8">
            <Button className="w-1/12" onClick={() => refetch()}>
                <RefreshCw/>
            </Button>
            {data && data.map((comment, index) => (
                <div key={index} className="bg-gray-300/10 rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md ">
                    <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex-shrink">
                                <div className="bg-accent rounded-full p-1">
                                    <User className="w-7 h-7 text-white" />
                                </div>

                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg font-medium text-white truncate">
                                    {comment.nickname}
                                </h3>

                            </div>
                        </div>
                        <p className="text-gray-50 leading-relaxed">
                            {comment.payload}
                        </p>
                    </div>
                </div>
            ))}

        </div>
    )
}