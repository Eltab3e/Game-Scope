"use client";

//required
import "../styles/globals.css";
import { Space_Mono, Work_Sans } from "next/font/google";
import { ThemeProvider } from "styled-components";
//essential
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={work.className}>
                <StyledComponentsRegistry>
                    <ThemeProvider theme={theme}>
                        <Navbar />
                        {children}
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
