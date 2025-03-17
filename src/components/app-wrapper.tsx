"use client";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/contexts/theme-context";
import { configuration } from "@/lib/config/configuration";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";
import { LoadingScreen } from "./loading-screen";
import { Toaster } from "./ui/sonner";

export function AppWrapper({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <QueryClientProvider client={configuration.queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme={"dark"}
          enableSystem
          disableTransitionOnChange
        >
          <div>
            <Header />
            <main className="mx-10 my-8 flex flex-col gap-6">{children}</main>
            <Toaster richColors />
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  );
}
