"use client";

import "../styles/globals.css";
import { Space_Mono, Work_Sans } from "next/font/google";
import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import Navbar from "@/components/Layout/Navbar";
import theme from "@/theme";

const space = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const work = Work_Sans({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
                <html lang="en">
                    <body className={space.className}>
                        <Navbar />
                        {children}
                    </body>
                </html>
            </StyledComponentsRegistry>
        </ThemeProvider>
    );
}
