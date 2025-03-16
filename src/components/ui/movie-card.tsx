import { Result } from "@/app/types/Result"
import Image from "next/image"
import { Film, Star, X } from "lucide-react"
import { Dialog } from "radix-ui"
import { Button } from "./button"
import { InsertComment } from "./insert-comment"
import { ListComments } from "./list-comments"

export const MovieCard = ({ title, overview, adult, backdrop_path, poster_path, id, release_date, vote_average, original_language, original_title }: Result) => {
    const imagePosterPath = `https://image.tmdb.org/t/p/original${poster_path}`
    const imageBackdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`
    const year = release_date ? new Date(release_date).getFullYear() : null

    const isOriginalFromEn = original_language === 'en'

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <div className="bg-slate-700/20 group relative p-5 flex flex-col items-center cursor-pointer backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden  transition-transform duration-300 hover:scale-105">
                    <Image src={imagePosterPath} alt={`${title} movie poster`} className="w-full transition-transform duration-300 group-hover:scale-105 " width={270} height={250} />
                    <div className="w-full bg-slate-800/10 flex items-center justify-center">
                        <Film className="w-5 h-5" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-xl font-bold text-white truncate">{title}</h2>
                                {year && <span className="text-sm text-gray-300">{year}</span>}
                            </div>

                            {vote_average && (
                                <div className="flex items-center gap-1 mb-3">
                                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    <span className="text-yellow-400 font-semibold">{vote_average}</span>
                                </div>
                            )}

                            <p className="text-sm text-gray-300 line-clamp-3">
                                {overview}
                            </p>
                        </div>
                    </div>
                </div>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[90vh] w-[90vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-b from-zinc-900 to-black p-8 shadow-[0_0_30px_10px] shadow-purple-500/10 border border-zinc-800/50 overflow-y-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-800 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                    <Dialog.Close className="absolute right-4 top-4 z-50">
                        <div className="rounded-full p-2 bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-800 transition-colors">
                            <X className="h-5 w-5 text-zinc-400" />
                        </div>
                    </Dialog.Close>

                    <div className="relative aspect-video w-full mb-6">
                        <Image
                            src={imageBackdropPath}
                            alt={`${title} movie poster`}
                            className="rounded-xl object-cover shadow-2xl shadow-black/50"
                            fill
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl" />
                    </div>

                    <Dialog.Title className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-2">
                        {title} {!isOriginalFromEn && <span className="text-2xl text-zinc-500">({original_title})</span>}
                    </Dialog.Title>

                    <div className="space-y-6">
                        <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
                            <h3 className="text-lg font-semibold text-zinc-300 mb-3">Overview</h3>
                            <Dialog.Description className="text-zinc-400 leading-relaxed">
                                {overview}
                            </Dialog.Description>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-zinc-900/30 rounded-xl p-4 border border-zinc-800/30">
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Classification</h4>
                                <p className="text-lg font-semibold text-white">{adult ? 'Restricted' : 'General'}</p>
                            </div>
                            <div className="bg-zinc-900/30 rounded-xl p-4 border border-zinc-800/30">
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Language</h4>
                                <p className="text-lg font-semibold text-white uppercase">{original_language}</p>
                            </div>
                            <div className="bg-zinc-900/30 rounded-xl p-4 border border-zinc-800/30">
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Release Year</h4>
                                <p className="text-lg font-semibold text-white">{year}</p>
                            </div>
                            <div className="bg-zinc-900/30 rounded-xl p-4 border border-zinc-800/30">
                                <h4 className="text-sm font-medium text-zinc-500 mb-1">Rating</h4>
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    <p className="text-lg font-semibold text-white">{vote_average}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="p-4 font-bold text-3xl self-center">Comments section</h4>
                        <ListComments movie_id={id.toString()} />
                        <InsertComment movie_id={id.toString()} />
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Dialog.Close asChild>
                            <Button className="bg-zinc-100 text-zinc-900 hover:bg-zinc-200 px-6 py-2 rounded-lg font-medium transition-colors">
                                Close
                            </Button>
                        </Dialog.Close>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
