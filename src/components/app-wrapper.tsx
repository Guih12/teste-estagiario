"use client";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/contexts/theme-context";
import { configuration } from "@/lib/config/configuration";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export function AppWrapper({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={configuration.queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme={"dark"}
        enableSystem
        disableTransitionOnChange
      >
        <div>
          <Header />
          {children}
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
