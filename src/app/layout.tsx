import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import Providers from "./providers";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Incredible Films",
  description: "Internship challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="items-center flex flex-col">

          <Providers>
            <Theme radius="large" accentColor="crimson">
              {children}
            </Theme>
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
