"use client";

//components
import Hero from "@/components/Home/Hero";
import Trending from "@/components/Home/Trending";
import Developers from "@/components/Home/Developers";
import Genres from "@/components/Home/Genres";
import Stores from "@/components/Home/Stores";
import Highlight from "@/components/Home/Highlight";
import About from "@/components/Home/About";
import Subscribe from "@/components/Home/Subscribe";
import Footer from "@/components/Home/Footer";

export default function Home() {
    return (
        <>
            <Hero />
            <Trending />
            <Developers />
            <Genres />
            <Stores />
            <Highlight />
            <About />
            <Subscribe />
            <Footer />
        </>
    );
}
