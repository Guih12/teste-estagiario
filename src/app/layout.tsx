import { AppWrapper } from "@/components/app-wrapper";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie.it",
  description: "A movie application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-full max-w-screen bg-[#1e1c1f] antialiased">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
