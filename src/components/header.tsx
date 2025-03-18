import { Film } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-pallete-white/70 backdrop-blur-sm  flex justify-start items-center px-4 border-b border-b-palette-gray z-50 ">
      <Film />
      <h1 className="text-2xl font-bold text-palette-black ml-2">Movies</h1>
    </header>
  );
}

export { Header };