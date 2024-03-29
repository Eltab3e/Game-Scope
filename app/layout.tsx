"use client";

//required
import "../styles/globals.css";
import { Space_Mono, Work_Sans } from "next/font/google";
import { Providers } from "./providers";
//components
import Wrapper from "@/hoc/Wrapper";
import Navbar from "@/components/Layout/Navbar";

export const space = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const work = Work_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "fallback", //ensure font won't flash to default on reload
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Game-Scope</title>
            </head>
            <body className={work.className}>
                <Providers>
                    <Navbar />
                    <Wrapper>{children}</Wrapper>
                </Providers>
            </body>
        </html>
    );
}
