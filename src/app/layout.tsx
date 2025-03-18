import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.scss";
import { ReactNode } from "react";

const geist = Geist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "MarioFlix",
  description: "Descubra os filmes populares da TMDB.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>
        <header className="header">
          <h1>
            <a href="/">🎬 MarioFlix</a>
          </h1>
        </header>

        <main className="content">{children}</main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} MarioFlix</p>
        </footer>
      </body>
    </html>
  );
}
