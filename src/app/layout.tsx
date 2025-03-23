import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import Link from "next/link";
import "./globals.css";
import { Search } from "lucide-react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalogo Filmes",

  description: "Um catalogo dos filmes onde exibe uma lista de filmes e detalhes sobre o mesmo",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className=" bg-black/20 text-white text-left p-6 flex justify-around gap-60 items-center fixed top-0 w-full z-50">
          <Link href="/" className="font-bold text-2xl cursor-pointer">FilmCatalog</Link>
          <nav className="flex gap-7 text-[16px] ">
            <Link href="/" className="pb-1 border-b-2 border-transparent hover:border-white transition"> Inicio</Link>
            <Link href="/MoviePag" className="border-b-2 border-transparent hover:border-white transition"> Filmes</Link>
          </nav>
          <div>
            <SearchBar />
          </div>
        </header>
        <main className="flex-grow bg-[#141414] text-white">{children}</main>
        <footer className="w-full text-white bg-[#141414] py-6 border-t border-white/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-400 mt-4">
              © {new Date().getFullYear()} FilmCatalog. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
