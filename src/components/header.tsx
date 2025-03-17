import { Film } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-pallete-white/70 backdrop-blur-sm  flex justify-between items-center px-4 border-b border-b-palette-gray z-50 ">
      <Film />
      <div>
        ()
      </div>
    </header>
  );
}

export { Header };