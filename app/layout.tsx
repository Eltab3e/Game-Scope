"use client";

//required
import "../styles/globals.css";
import { Space_Mono, Work_Sans } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SkeletonTheme } from "react-loading-skeleton";
import theme from "@/theme";
import StyledComponentsRegistry from "@/lib/registry";
//components
import Navbar from "@/components/Layout/Navbar";

export const space = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const work = Work_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <head>
                    <title>Game-Scope</title>
                    <meta content="Your Ultimate Gaming Hub." />
                </head>
                <body className={work.className}>
                    <StyledComponentsRegistry>
                        <ThemeProvider theme={theme}>
                            <SkeletonTheme
                                baseColor="#313131"
                                highlightColor="#525252"
                            >
                                <Navbar />
                                {children}
                            </SkeletonTheme>
                        </ThemeProvider>
                    </StyledComponentsRegistry>
                </body>
                <ReactQueryDevtools />
            </html>
        </QueryClientProvider>
    );
}
