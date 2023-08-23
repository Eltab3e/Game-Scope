import "../styles/globals.css";
import type { Metadata } from "next";
import { Space_Mono, Work_Sans } from "next/font/google";
import Providers from "./providers";

const space = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
});

const work = Work_Sans({
    weight: ["400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={space.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
