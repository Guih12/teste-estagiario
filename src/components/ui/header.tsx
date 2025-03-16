import { FilmIcon } from "lucide-react"


export const Header = () => {
    return (
        <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center px-4 mx-auto">
                <div className="flex items-center gap-2">
                    <FilmIcon className="h-6 w-6 text-primary animate-pulse" />
                    <h1 className="text-xl font-bold tracking-tight">
                        IncredibleFilms
                        <span className="text-muted-foreground">.com</span>
                        <span className="text-muted ml-5">by farxC</span>
                    </h1>
                </div>
            </div>
        </header>
    )
}