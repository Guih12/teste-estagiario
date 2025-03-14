import Image from "next/image";


export const Footer = () => {
    return (

        <footer className="flex justify-center self-end mb-4">
            <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://github.com/farxC"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    aria-hidden
                    src="/github-mark-white.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                Github profile
            </a>
        </footer>

    )
}