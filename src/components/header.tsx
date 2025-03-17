import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-col items-center gap-2 bg-[#2a282b] px-10 py-6 shadow-lg md:flex-row md:gap-0">
      <section className="flex items-center">
        <Image
          src="/clapperboard.svg"
          alt="Movie.it"
          width={45}
          height={45}
          className="mt-2"
        />

        <Typography variant="h2" className="mr-8 ml-4 text-white">
          Movie.it
        </Typography>
      </section>

      <Typography
        variant="lead"
        className="w-full text-center text-white md:w-fit"
      >
        The best place to find movies
      </Typography>
    </header>
  );
}
